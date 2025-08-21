// src/app.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import { ENV } from "./config/env";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// 404 + Error handler
app.use(notFound);
app.use(errorHandler);

// MongoDB connection function
export async function connectDB() {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("✅ MongoDB connected");
}

export default app;
