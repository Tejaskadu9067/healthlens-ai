import express from "express";

import {
  getPrediction,
  fetchSymptoms,
} from "../controllers/predictionController.js";

import protect from "../middleware/authMiddleware.js";

import {
  fetchPredictionHistory,
  deletePrediction,
} from "../controllers/predictionHistoryController.js";

const router = express.Router();

// ===============================
// Symptoms
// ===============================
router.get("/symptoms", fetchSymptoms);

// ===============================
// Disease Prediction
// ===============================
router.post("/", protect, getPrediction);

// ===============================
// Prediction History
// ===============================
router.get("/history", protect, fetchPredictionHistory);

// ===============================
// Delete Prediction
// ===============================
router.delete("/:id", protect, deletePrediction);

export default router;