import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function predictDisease(symptoms) {
  const response = await API.post("/predictions", {
    symptoms,
  });

  return response.data;
}

export default API;