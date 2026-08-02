import {
  predictDisease,
  getSymptoms,
} from "../services/pythonService.js";
export async function getPrediction(req, res) {
  try {
    const { symptoms = [] } = req.body || {};

    const prediction = await predictDisease(symptoms);

    return res.status(200).json({
      success: true,
      prediction,
    });

  } catch (error) {

    console.error("Prediction Controller Error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}
export async function fetchSymptoms(req, res) {

  try {

    const symptoms = await getSymptoms();

    return res.status(200).json({
      success: true,
      symptoms,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

}