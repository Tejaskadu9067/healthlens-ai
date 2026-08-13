import axios from "axios";

const PYTHON_API =
  process.env.PYTHON_API_URL || "http://127.0.0.1:8000";

console.log("====================================");
console.log("PYTHON_API_URL =", PYTHON_API);
console.log("====================================");

// ======================================
// Configuration
// ======================================

const MAX_RETRIES = 3;
const RETRY_DELAY = 5000;

// ======================================
// Wait Helper
// ======================================

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ======================================
// Python API Request Helper
// ======================================

async function requestPythonAPI(config) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log("====================================");
      console.log(
        `Python API Request - Attempt ${attempt}/${MAX_RETRIES}`
      );
      console.log("URL:", config.url);
      console.log("====================================");

      const response = await axios({
        ...config,
        timeout: 30000,
      });

      return response;
    } catch (error) {
      lastError = error;

      const status = error.response?.status;

      console.error("====================================");
      console.error("PYTHON API REQUEST ERROR");
      console.error("Attempt:", `${attempt}/${MAX_RETRIES}`);
      console.error("URL:", config.url);
      console.error("Status:", status);
      console.error("Message:", error.message);
      console.error("====================================");

      // Retry only for temporary/upstream errors
      const shouldRetry =
        status === 429 ||
        (status >= 500 && status <= 599) ||
        !error.response;

      // Do not retry permanent errors
      if (!shouldRetry || attempt === MAX_RETRIES) {
        break;
      }

      console.log(
        `Python API unavailable. Retrying in ${
          RETRY_DELAY / 1000
        } seconds...`
      );

      await wait(RETRY_DELAY);
    }
  }

  // ======================================
  // Controlled 503 Error
  // ======================================

  const finalError = new Error(
    "AI service is temporarily unavailable. Please try again in a few seconds."
  );

  finalError.statusCode = 503;
  finalError.originalError = lastError;

  throw finalError;
}

// ======================================
// Predict Disease
// ======================================

export async function predictDisease(symptoms = []) {
  const url = `${PYTHON_API}/predict`;

  console.log("====================================");
  console.log("Calling Python API");
  console.log("URL:", url);
  console.log("Symptoms:", symptoms);
  console.log("====================================");

  const response = await requestPythonAPI({
    method: "POST",
    url,
    data: { symptoms },
  });

  console.log("Prediction Response Status:", response.status);
  console.log("Prediction Response:", response.data);

  return response.data;
}

// ======================================
// Get Symptoms
// ======================================

export async function getSymptoms() {
  const url = `${PYTHON_API}/symptoms`;

  console.log("====================================");
  console.log("Fetching symptoms...");
  console.log("URL:", url);
  console.log("====================================");

  const response = await requestPythonAPI({
    method: "GET",
    url,
  });

  console.log("Symptoms Response Status:", response.status);
  console.log("Symptoms Response:", response.data);

  return response.data.symptoms;
}