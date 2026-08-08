import express from "express";

import {
  googleLogin,
  phoneLogin,
} from "../controllers/authController.js";

const router = express.Router();

// ======================================
// Google Login
// ======================================

router.post("/google", googleLogin);

// ======================================
// Phone Login
// ======================================

router.post("/phone", phoneLogin);

export default router;