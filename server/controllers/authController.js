import { adminAuth } from "../config/firebaseAdmin.js";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// ======================================
// Google Login
// ======================================

export async function googleLogin(req, res) {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "Firebase ID Token is required.",
      });
    }

    // Verify Firebase ID Token
    const decodedToken = await adminAuth.verifyIdToken(
      idToken
    );

    const {
      uid,
      name,
      email,
      picture,
    } = decodedToken;

    // ======================================
    // Find user by Google ID OR Email
    // ======================================

    let user = await User.findOne({
      $or: [
        { googleId: uid },
        { email: email },
      ],
    });

    // ======================================
    // First Login
    // ======================================

    if (!user) {
      user = await User.create({
        googleId: uid,
        name,
        email,
        picture,
      });
    } else {
      // Keep user information up to date
      user.googleId = uid;
      user.name = name;
      user.email = email;
      user.picture = picture;

      await user.save();
    }

    // ======================================
    // Generate JWT
    // ======================================

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error("Google Login Error:");
    console.error(error);

    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}


// ======================================
// Phone Login
// ======================================

export async function phoneLogin(req, res) {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "Firebase ID Token is required.",
      });
    }

    // ======================================
    // Verify Firebase Phone ID Token
    // ======================================

    const decodedToken = await adminAuth.verifyIdToken(
      idToken
    );

    const {
      uid,
      phone_number: phoneNumber,
    } = decodedToken;

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message:
          "No phone number found in Firebase token.",
      });
    }

    // ======================================
    // Find Existing User
    // ======================================

    let user = await User.findOne({
      phone: phoneNumber,
    });

    // ======================================
    // Create User
    // ======================================

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        phone: phoneNumber,
        name: "HealthLens User",
      });
    } else {
      // Keep Firebase UID updated
      user.firebaseUid = uid;

      await user.save();
    }

    // ======================================
    // Generate JWT
    // ======================================

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error("Phone Login Error:");
    console.error(error);

    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}