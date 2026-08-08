import Prediction from "../models/Prediction.js";

// ======================================
// Save Prediction
// ======================================

export async function savePrediction(data) {
  return await Prediction.create(data);
}

// ======================================
// Get Prediction History
// ======================================

export async function getPredictionHistory(userId = null) {
  const query = userId ? { user: userId } : {};

  return await Prediction.find(query).sort({
    createdAt: -1,
  });
}

// ======================================
// Delete Prediction
// ======================================

export async function deletePrediction(id) {
  return await Prediction.findByIdAndDelete(id);
}

// ======================================
// Dashboard Statistics
// ======================================

export async function getDashboardStats(userId = null) {
  const query = userId ? { user: userId } : {};

  const predictions = await Prediction.find(query);

  const totalPredictions = predictions.length;

  const averageConfidence =
    totalPredictions === 0
      ? 0
      : Number(
          (
            predictions.reduce(
              (sum, item) => sum + item.confidence,
              0
            ) / totalPredictions
          ).toFixed(1)
        );

  const uniqueDiseases = new Set(
    predictions.map((item) => item.disease)
  ).size;

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const predictionsThisMonth = predictions.filter(
    (item) => item.createdAt >= startOfMonth
  ).length;

  return {
    totalPredictions,
    averageConfidence,
    uniqueDiseases,
    predictionsThisMonth,
  };
}