import { categories } from "../Data.js";
import Categories from "../Models/CategoryModel.js";
import expressAsyncHandler from "express-async-handler";

export const importCategories = expressAsyncHandler(async (req, res) => {
  try {
    Categories.deleteMany({});
    const createdCategories = await Categories.insertMany(categories);
    res.status(201).send(createdCategories);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export const getCategories = expressAsyncHandler(async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.send(categories);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export const createCategory = expressAsyncHandler(async (req, res) => {
  try {
    const categoryExists = await Categories.findOne({ name: req.body.name });

    if (categoryExists) {
      res.status(400).send({ message: "Category already exists" });
      return;
    }

    const category = new Categories({
      name: req.body.name,
      image: req.body.image,
    });
    const createdCategory = await category.save();
    res.status(201).send(createdCategory);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export const updateCategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);

    if (category) {
      category.name = req.body.name;
      category.image = req.body.image;

      const updatedCategory = await category.save();
      res.send(updatedCategory);
    } else {
      res.status(404).send({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export const deleteCategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);

    if (category) {
      res.send({ message: "Category deleted" });
    } else {
      res.status(404).send({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
