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
# Prediction
# -----------------------------

def predict_disease(selected_symptoms):

    print("\n==============================")
    print("Received Symptoms:", selected_symptoms)

    features = np.zeros(len(SYMPTOMS))

    for symptom in selected_symptoms:

        print(f"{symptom} -> {symptom in SYMPTOMS}")

        if symptom in SYMPTOMS:
            index = SYMPTOMS.index(symptom)
            features[index] = 1

    print("Activated Features:", int(features.sum()))

    probabilities = model.predict_proba([features])[0]

    top3_indices = np.argsort(probabilities)[::-1][:3]

    top_predictions = []

    for index in top3_indices:
        top_predictions.append({
            "disease": label_encoder.inverse_transform([index])[0],
            "confidence": round(float(probabilities[index] * 100), 2)
        })

    best_prediction = top_predictions[0]

    return {
        "disease": best_prediction["disease"],
        "confidence": best_prediction["confidence"],
        "top_predictions": top_predictions,
        "precautions": [
            "Drink plenty of fluids",
            "Take adequate rest",
            "Consult a doctor if symptoms worsen"
        ],
        "medicines": [
            "Consult Physician",
            "Paracetamol",
            "ORS"
        ]
    }