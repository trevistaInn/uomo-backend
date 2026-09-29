// import dns from "dns";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import homeProductsRouter from "./routes/homeProducts.js";
import allData from "./routes/allData.js";
import categoryRouter from "./routes/categoryProducts.js";
import searchRouter from "./routes/searchRouter.js";
import authRouter from "./routes/authRouter.js";
import cartRouter from "./routes/cartRoutes.js";
import { loadSearchCache } from "./utils/searchCache.js";
import { loadSearchSuggestionCache } from "./utils/searchSuggestionCache.js";

dotenv.config();
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", homeProductsRouter);
app.use("/allData", allData);
app.use("/category", categoryRouter);
app.use("/search", searchRouter);
app.use("/api", authRouter);
app.use("/cart", cartRouter);

const mongoUri = process.env.MONGO_URI;

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(async () => {
      console.log("Connected to MongoDB successfully");
      await loadSearchCache();
      await loadSearchSuggestionCache();
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
} else {
  console.warn("MONGO_URI is not defined. Starting server without MongoDB...");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}