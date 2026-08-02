from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schemas import PredictionRequest
from predictor import predict_disease, SYMPTOMS

app = FastAPI(
    title="HealthLens AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "HealthLens AI API Running 🚀"
    }

@app.get("/symptoms")
def get_symptoms():
    return {
        "symptoms": SYMPTOMS
    }

@app.post("/predict")
def predict(request: PredictionRequest):
    result = predict_disease(request.symptoms)
    return result