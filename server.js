import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
import userRouter from "./Routers/UserRoute.js";
import categoryRouter from "./Routers/CategoryRoute.js";
import productRouter from "./Routers/ProductsRoute.js";
import { errorHandler } from "./middleware/Error.js";

// dotenv config
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
connectDB();

// main route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);

// error handler
app.use(errorHandler);

// server port
const PORT = process.env.PORT || 5000;

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
