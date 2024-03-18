import expressAsyncHandler from "express-async-handler";
import Product from "../Models/ProductsModel.js";
import { products } from "../Data.js";

export const importProducts = expressAsyncHandler(async (req, res) => {
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(products);
    res.status(201).json(createdProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const getProducts = expressAsyncHandler(async (req, res) => {
  try {
    const { category, tag, search, sort } = req.query;
    const pageSize = 10;
    const pageNumber = Number(req.query.pageNumber) || 1;
    const order =
      sort === "newest"
        ? { createdAt: -1 }
        : sort === "lowest"
        ? { price: 1 }
        : sort === "highest"
        ? { price: -1 }
        : { _id: -1 };
    const tagsFilter = tag ? { tags: { $in: tag } } : {};
    const title = search ? { title: { $regex: search, $options: "i" } } : {};
    const categoryFilter = category ? { category } : {};
    const count = await Product.countDocuments({
      ...title,
      ...categoryFilter,
      ...tagsFilter,
    });
    const products = await Product.find({
      ...title,
      ...categoryFilter,
      ...tagsFilter,
    })
      .sort(order)
      .limit(pageSize)
      .skip(pageSize * (pageNumber - 1));

    const offers = await Product.aggregate([
      {
        $match: {
          "salesOffer.status": true,
        },
      },
      {
        $sample: { size: 10 },
      },
    ]);
    res.json({
      products,
      page: pageNumber,
      pages: Math.ceil(count / pageSize),
      offers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const getProductById = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const relatedProducts = await Product.find({
        category: product.category,
        _id: { $ne: req.params.id },
      }).limit(5);
      res.json({ product, relatedProducts });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const getProductTags = expressAsyncHandler(async (req, res) => {
  try {
    const tags = await Product.aggregate([
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    const {
      title,
      images,
      price,
      description,
      category,
      tags,
      salesOffer,
      stock,
    } = req.body;
    const product = new Product({
      title,
      images,
      price,
      description,
      category,
      tags,
      salesOffer,
      stock,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const updateProduct = expressAsyncHandler(async (req, res) => {
  try {
    const {
      title,
      images,
      price,
      description,
      category,
      tags,
      salesOffer,
      stock,
    } = req.body;
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (product) {
      product.title = title ?? product.title;
      product.images = images ?? product.images;
      product.price = price ?? product.price;
      product.description = description ?? product.description;
      product.category = category ?? product.category;
      product.tags = tags ?? product.tags;
      product.salesOffer = salesOffer ?? product.salesOffer;
      product.stock = stock ?? product.stock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
