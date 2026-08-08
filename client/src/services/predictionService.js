import api from "./api";

// ======================================
// Predict Disease
// ======================================

export async function predictDisease(symptoms) {
  const { data } = await api.post("/predictions", {
    symptoms,
  });

  return data;
}

// ======================================
// Get Symptoms
// ======================================

export async function getSymptoms() {
  const { data } = await api.get("/predictions/symptoms");

  return data.symptoms;
}

// ======================================
// Get Prediction History
// ======================================

export async function getPredictionHistory() {
  const { data } = await api.get("/predictions/history");

  return data;
}

// ======================================
// Delete Prediction
// ======================================

export async function deletePrediction(id) {
  const { data } = await api.delete(
    `/predictions/${id}`
  );

  return data;
}