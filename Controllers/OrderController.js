import Orders from "../Models/OrderModel.js";
import Products from "../Models/ProductsModel.js";
import expressAsyncHandler from "express-async-handler";

export const createOrder = expressAsyncHandler(async (req, res) => {
  try {
    const { orderItems, totalPrice, shippingAddress, payments } = req.body;

    const order = new Orders({
      user: req.user._id,
      orderItems,
      totalPrice,
      shippingAddress,
      payments,
    });

    const createdOrder = await order.save();

    orderItems.map(async (item) => {
      const product = await Products.findById(item.product);
      product.stock -= item.quantity;
      await product.save();
    });

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const getUserOrders = expressAsyncHandler(async (req, res) => {
  try {
    const orders = await Orders.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    const totalOrders = await Orders.countDocuments({ user: req.user._id });
    const pendingOrders = await Orders.countDocuments({
      user: req.user._id,
      "payments.paymentResult.status": "pending",
    });
    const completedOrders = await Orders.countDocuments({
      user: req.user._id,
      "payments.paymentResult.status": "completed",
    });
    const cancelledOrders = await Orders.countDocuments({
      user: req.user._id,
      "payments.paymentResult.status": "cancelled",
    });
    res.json({
      orders,
      total: totalOrders,
      pending: pendingOrders,
      completed: completedOrders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const getOrderById = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Orders.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const deleteOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Orders.findByIdAndDelete(req.params.id);
    if (order) {
      res.json({ message: "Order removed" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const deleteAllOrders = expressAsyncHandler(async (req, res) => {
  try {
    await Orders.deleteMany({
      user: req.user._id,
    });
    res.json({ message: "All orders removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
