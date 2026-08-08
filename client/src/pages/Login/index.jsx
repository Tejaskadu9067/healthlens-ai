import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "../../config/firebase";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthButton from "../../components/auth/AuthButton";
import Divider from "../../components/auth/Divider";
import PhoneInput from "../../components/auth/PhoneInput";
import GoogleButton from "../../components/auth/GoogleButton";

function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const recaptchaVerifier = useRef(null);

  // ======================================
  // Create reCAPTCHA ONCE
  // ======================================

  useEffect(() => {
    return () => {
      if (recaptchaVerifier.current) {
        try {
          recaptchaVerifier.current.clear();
        } catch (error) {
          console.warn("reCAPTCHA cleanup:", error);
        }

        recaptchaVerifier.current = null;
      }
    };
  }, []);

  // ======================================
  // Initialize reCAPTCHA
  // ======================================

  const getRecaptchaVerifier = () => {
    if (recaptchaVerifier.current) {
      return recaptchaVerifier.current;
    }

    recaptchaVerifier.current = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",

        callback: () => {
          console.log("reCAPTCHA solved");
        },

        "expired-callback": () => {
          console.log("reCAPTCHA expired");

          if (recaptchaVerifier.current) {
            try {
              recaptchaVerifier.current.clear();
            } catch (error) {
              console.warn(error);
            }

            recaptchaVerifier.current = null;
          }
        },
      }
    );

    return recaptchaVerifier.current;
  };

  // ======================================
  // Send OTP
  // ======================================

  const handleContinue = async () => {
    setError("");

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    try {
      setLoading(true);

      const verifier = getRecaptchaVerifier();

      const confirmationResult =
        await signInWithPhoneNumber(
          auth,
          phone,
          verifier
        );

      console.log("OTP sent successfully.");

      // Store Firebase confirmation result
      window.confirmationResult = confirmationResult;

      // Move to OTP screen
      navigate("/verify-otp", {
        state: {
          phone,
        },
      });

    } catch (error) {
      console.error("Phone OTP Error:", error);

      // If reCAPTCHA has already been rendered,
      // completely reset it.

      if (
        error.message?.includes(
          "reCAPTCHA has already been rendered"
        )
      ) {
        if (recaptchaVerifier.current) {
          try {
            recaptchaVerifier.current.clear();
          } catch (clearError) {
            console.warn(clearError);
          }

          recaptchaVerifier.current = null;
        }
      }

      let message = "Unable to send OTP. Please try again.";

      if (
        error.code ===
        "auth/invalid-phone-number"
      ) {
        message =
          "Please enter a valid phone number.";
      }

      if (
        error.code ===
        "auth/too-many-requests"
      ) {
        message =
          "Too many attempts. Please try again later.";
      }

      if (
        error.code ===
        "auth/quota-exceeded"
      ) {
        message =
          "SMS quota exceeded. Please try again later.";
      }

      setError(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>

        {/* Google */}

        <GoogleButton variant="auth" />

        <Divider />

        {/* Phone */}

        <div className="space-y-5">

          <PhoneInput
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <AuthButton
            onClick={handleContinue}
            disabled={loading}
            className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              shadow-lg
              shadow-cyan-500/20
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Sending OTP..."
              : "Continue"}

            {!loading && (
              <ArrowRight className="w-5 h-5" />
            )}
          </AuthButton>

        </div>

        {/* reCAPTCHA */}

        <div
          id="recaptcha-container"
          className="mt-4"
        />

        <div className="mt-10 text-center">

          <span className="text-slate-400">
            New to HealthLens?
          </span>

          <Link
            to="/register"
            className="
              ml-2
              text-cyan-400
              hover:text-cyan-300
              font-semibold
            "
          >
            Create Account
          </Link>

        </div>

      </AuthCard>
    </AuthLayout>
  );
}

export default Login;