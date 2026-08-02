import json
import joblib
import numpy as np
import pandas as pd
from pathlib import Path

# -----------------------------
# Load Model
# -----------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "models" / "disease_model.pkl"
ENCODER_PATH = BASE_DIR / "models" / "label_encoder.pkl"
TRAIN_PATH = BASE_DIR / "data" / "Training.csv"

model = joblib.load(MODEL_PATH)
label_encoder = joblib.load(ENCODER_PATH)

# -----------------------------
# Load Symptoms
# -----------------------------

train_df = pd.read_csv(TRAIN_PATH)
train_df.drop(columns=["Unnamed: 133"], inplace=True, errors="ignore")

SYMPTOMS = train_df.drop("prognosis", axis=1).columns.tolist()

# -----------------------------
# Load Disease Information
# -----------------------------

DISEASE_INFO_PATH = BASE_DIR / "data" / "disease_info.json"

with open(DISEASE_INFO_PATH, "r", encoding="utf-8") as file:
    DISEASE_INFO = json.load(file)

# -----------------------------
# Prediction Function
# -----------------------------

def predict_disease(selected_symptoms):

    print("\n==============================")
    print("Received Symptoms:", selected_symptoms)

    # Create feature vector
    features = np.zeros(len(SYMPTOMS))

    # Activate selected symptoms
    for symptom in selected_symptoms:

        print(f"{symptom} -> {symptom in SYMPTOMS}")

        if symptom in SYMPTOMS:
            index = SYMPTOMS.index(symptom)
            features[index] = 1

    print("Activated Features:", int(features.sum()))

    # Predict probabilities
    probabilities = model.predict_proba([features])[0]

    # Top 3 predictions
    top3_indices = np.argsort(probabilities)[::-1][:3]

    top_predictions = []

    for index in top3_indices:
        top_predictions.append({
            "disease": label_encoder.inverse_transform([index])[0],
            "confidence": round(float(probabilities[index] * 100), 2)
        })

    # Best prediction
    best_prediction = top_predictions[0]

    # Get disease information from JSON
    disease_info = DISEASE_INFO.get(
        best_prediction["disease"],
        {
            "description": "No description available.",
            "specialist": "General Physician",
            "precautions": [
                "Consult a healthcare professional."
            ],
            "medicines": [
                "As prescribed by your doctor."
            ]
        }
    )

    return {
        "disease": best_prediction["disease"],
        "confidence": best_prediction["confidence"],
        "top_predictions": top_predictions,
        "description": disease_info["description"],
        "specialist": disease_info["specialist"],
        "precautions": disease_info["precautions"],
        "medicines": disease_info["medicines"]
    }