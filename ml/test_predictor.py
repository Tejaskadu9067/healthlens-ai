from api.predictor import predict_disease

result = predict_disease([
    "fever",
    "headache",
    "vomiting"
])

print(result)