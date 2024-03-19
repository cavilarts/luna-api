import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../Models/UserModel.js";
import { users } from "../Data.js";
import { generateToken } from "../middleware/Auth.js";
import Orders from "../Models/OrderModel.js";

export const importUsers = expressAsyncHandler(async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(users);
  res.status(201).send({ createdUsers });
});

export const login = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = await generateToken(user._id);

        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: token,
        });
        return;
      } else {
        res.status(401).json({ error: "Invalid user or password" });
      }
    } else {
      res.status(401).json({ error: "Invalid user or password" });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
});

export const register = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      phone,
    });

    if (user) {
      const token = await generateToken(user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token,
      });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name ?? user.name;
      user.email = req.body.email ?? user.email;
      user.phone = req.body.phone ?? user.phone;

      await user.save();

      res.status(200).json({
        message: "User updated successfully",
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const changePassword = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user && bcrypt.compareSync(req.body.oldPassword, user.password)) {
      user.password = bcrypt.hashSync(req.body.newPassword, 10);
      await user.save();

      res.status(200).json({
        message: "Password updated successfully",
      });
    } else {
      res.status(404).json({ error: "Error updating password" });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);

    if (user) {
      await Orders.deleteMany({ user: user._id });
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
