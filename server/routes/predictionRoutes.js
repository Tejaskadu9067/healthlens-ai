import express from "express";

import {
  getPrediction,
  fetchSymptoms,
} from "../controllers/predictionController.js";

const router = express.Router();

// Get all available symptoms
router.get("/symptoms", fetchSymptoms);

// Predict disease
router.post("/", getPrediction);

export default router;