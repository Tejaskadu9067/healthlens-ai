import {
  predictDisease,
  getSymptoms,
} from "../services/pythonService.js";

import {
  savePrediction,
} from "../services/predictionService.js";

// ======================================
// Predict Disease
// ======================================

export async function getPrediction(req, res) {
  try {
    const { symptoms = [] } = req.body || {};

    // Validate input
    if (!Array.isArray(symptoms) || symptoms.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please select at least one symptom.",
      });
    }

    // Make sure the user is authenticated
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Call Python API
    const prediction = await predictDisease(symptoms);

    // Validate prediction response
    if (!prediction?.disease || prediction.confidence == null) {
      return res.status(500).json({
        success: false,
        message: "Invalid prediction returned from AI service.",
      });
    }

    // Save prediction to MongoDB
    const savedPrediction = await savePrediction({
      user: req.user.id,

      disease: prediction.disease,
      confidence: prediction.confidence,
      symptoms,

      description:
        prediction.description || "",

      precautions:
        prediction.precautions || [],

      specialist:
        prediction.specialist || "",
    });

    return res.status(200).json({
      success: true,
      prediction,
      savedPrediction,
    });

  } catch (error) {
    console.error("Prediction Controller Error:");
    console.error(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}

// ======================================
// Get Symptoms
// ======================================

export async function fetchSymptoms(req, res) {
  try {
    const symptoms = await getSymptoms();

    return res.status(200).json({
      success: true,
      symptoms,
    });

  } catch (error) {
    console.error("Symptoms Error:");
    console.error(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}