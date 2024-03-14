import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";

export const generateToken = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

export const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        console.error("Unexpected error occurred:", error);
        res.status(401).json({ error: "Not authorized to access this route" });
      }
    }

    if (!token) {
      res.status(401).json({ error: "Not authorized to access this route" });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
    res.status(401).json({ error: "Not authorized to access this route" });
  }
};

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.error("Unexpected error occurred:", error);
    res.status(401).json({ error: "Not authorized to access this route" });
  }
};
