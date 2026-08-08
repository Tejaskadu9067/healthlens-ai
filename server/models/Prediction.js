import mongoose from "mongoose";

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    symptoms: {
      type: [String],
      required: true,
    },

    disease: {
      type: String,
      required: true,
    },

    confidence: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    precautions: {
      type: [String],
      default: [],
    },

    medications: {
      type: [String],
      default: [],
    },

    diet: {
      type: [String],
      default: [],
    },

    workout: {
      type: [String],
      default: [],
    },

    specialist: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Prediction",
  predictionSchema
);