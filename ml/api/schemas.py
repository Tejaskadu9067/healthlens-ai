from pydantic import BaseModel

class PredictionRequest(BaseModel):
    symptoms: list[str]


class PredictionResponse(BaseModel):
    disease: str
    confidence: float
    precautions: list[str]
    medicines: list[str]