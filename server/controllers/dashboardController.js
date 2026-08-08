import User from "../models/User.js";
import {
  getDashboardStats,
  getPredictionHistory,
} from "../services/predictionService.js";

export async function getDashboard(req, res) {
  try {
    const user = await User.findById(req.user.id).select(
      "-googleId"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const stats = await getDashboardStats(req.user.id);

    const recentPredictions = await getPredictionHistory(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      user,
      stats,
      recentPredictions,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}