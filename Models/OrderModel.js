import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String },
      phone: { type: String, required: true },
      country: { type: String, required: true },
      shippingMethod: { type: String },
      shippingCost: { type: Number },
    },
    payments: {
      paymentMethod: { type: String, required: true },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        updateTime: { type: String },
        email: { type: String },
      },
    },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", OrdersSchema);

export default Orders;
