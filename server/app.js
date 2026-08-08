import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import predictionRoutes from "./routes/predictionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

// ======================================
// Middleware
// ======================================

app.use(cors());
app.use(express.json());

// ======================================
// API Routes
// ======================================

app.use("/api/auth", authRoutes);

app.use("/api/predictions", predictionRoutes);

app.use("/api/dashboard", dashboardRoutes);

// ======================================
// Health Check
// ======================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HealthLens AI Backend is Running 🚀",
  });
});

export default app;