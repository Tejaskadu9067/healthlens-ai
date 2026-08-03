import axios from "axios";

console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

console.log("Axios Base URL =", API.defaults.baseURL);

export async function predictDisease(symptoms) {
  const response = await API.post("/predictions", {
    symptoms,
  });

  return response.data;
}

export async function getSymptoms() {
  const response = await API.get("/predictions/symptoms");

  // Return ONLY the array
  return response.data.symptoms;
}

export default API;