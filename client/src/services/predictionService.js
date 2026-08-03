import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export async function predictDisease(symptoms) {
  const response = await API.post("/predictions", {
    symptoms,
  });

  return response.data;
}

export async function getSymptoms() {
  const response = await API.get("/predictions/symptoms");

  return response.data;
}

export default API;