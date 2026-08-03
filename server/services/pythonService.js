import axios from "axios";

const PYTHON_API =
  process.env.PYTHON_API_URL || "http://127.0.0.1:8000";

console.log("PYTHON_API_URL =", PYTHON_API);

export async function predictDisease(symptoms = []) {
  try {
    console.log("Calling:", `${PYTHON_API}/predict`);

    const response = await axios.post(`${PYTHON_API}/predict`, {
      symptoms,
    });

    return response.data;
  } catch (error) {
    console.error("Predict Error:");
    console.error("URL:", `${PYTHON_API}/predict`);
    console.error("Message:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);

    throw error;
  }
}

export async function getSymptoms() {
  try {
    console.log("Calling:", `${PYTHON_API}/symptoms`);

    const response = await axios.get(`${PYTHON_API}/symptoms`);

    return response.data.symptoms;
  } catch (error) {
    console.error("Symptoms Error:");
    console.error("URL:", `${PYTHON_API}/symptoms`);
    console.error("Message:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);

    throw error;
  }
}