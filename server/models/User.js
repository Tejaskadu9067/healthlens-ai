import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // ======================================
    // Firebase UID
    // ======================================

    firebaseUid: {
      type: String,
      unique: true,
      sparse: true,
    },

    // ======================================
    // Google Authentication
    // ======================================

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    // ======================================
    // Phone Authentication
    // ======================================

    phone: {
      type: String,
      unique: true,
      sparse: true,
    },

    // ======================================
    // User Information
    // ======================================

    name: {
      type: String,
      required: true,
      default: "HealthLens User",
    },

    email: {
      type: String,
      unique: true,
      sparse: true,
    },

    picture: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);