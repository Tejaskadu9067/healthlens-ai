import Prediction from "../models/Prediction.js";

// ======================================
// Get Prediction History
// ======================================

export async function fetchPredictionHistory(req, res) {

  try {

    const predictions = await Prediction.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: predictions.length,
      predictions,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

}

// ======================================
// Delete Prediction
// ======================================

export async function deletePrediction(req, res) {

  try {

    const prediction = await Prediction.findByIdAndDelete(
      req.params.id
    );

    if (!prediction) {

      return res.status(404).json({
        success: false,
        message: "Prediction not found",
      });

    }

    return res.status(200).json({
      success: true,
      message: "Prediction deleted successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

}