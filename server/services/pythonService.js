import axios from "axios";

const PYTHON_API = "http://127.0.0.1:8000";

export async function predictDisease(symptoms = []) {
  try {
    console.log("Sending symptoms to AI:", symptoms);

    const response = await axios.post(`${PYTHON_API}/predict`, {
      symptoms,
    });

    console.log("AI Response:", response.data);

    return response.data;
  } catch (error) {
    console.error(
      "Python API Error:",
      error.response?.data || error.message
    );

    throw new Error("Unable to connect to AI Prediction Server");
  }
}

export async function getSymptoms() {
  try {
    const response = await axios.get(`${PYTHON_API}/symptoms`);

    return response.data.symptoms;

  } catch (error) {

    console.error(
      "Python API Error:",
      error.response?.data || error.message
    );

    throw new Error("Unable to fetch symptoms");
  }
}