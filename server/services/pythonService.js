import axios from "axios";

const PYTHON_API =
  process.env.PYTHON_API_URL || "http://127.0.0.1:8000";

console.log("====================================");
console.log("PYTHON_API_URL =", PYTHON_API);
console.log("====================================");

export async function predictDisease(symptoms = []) {
  const url = `${PYTHON_API}/predict`;

  try {
    console.log("====================================");
    console.log("Calling Python API");
    console.log("URL:", url);
    console.log("Symptoms:", symptoms);
    console.log("====================================");

    const response = await axios.post(
      url,
      { symptoms },
      {
        timeout: 30000,
      }
    );

    console.log("Prediction Response Status:", response.status);
    console.log("Prediction Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("====================================");
    console.error("PREDICT ERROR");
    console.error("URL:", url);
    console.error("Message:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Headers:", error.response?.headers);
    console.error("Body:", error.response?.data);
    console.error("====================================");

    throw error;
  }
}

export async function getSymptoms() {
  const url = `${PYTHON_API}/symptoms`;

  try {
    console.log("====================================");
    console.log("Fetching symptoms...");
    console.log("URL:", url);
    console.log("====================================");

    const response = await axios.get(url, {
      timeout: 30000,
    });

    console.log("Symptoms Response Status:", response.status);
    console.log("Symptoms Response:", response.data);

    return response.data.symptoms;
  } catch (error) {
    console.error("====================================");
    console.error("SYMPTOMS ERROR");
    console.error("URL:", url);
    console.error("Message:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Headers:", error.response?.headers);
    console.error("Body:", error.response?.data);
    console.error("====================================");

    throw error;
  }
}