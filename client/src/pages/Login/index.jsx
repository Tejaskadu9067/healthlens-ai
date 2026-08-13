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

      window.confirmationResult = confirmationResult;

      navigate("/verify-otp", {
        state: {
          phone,
        },
      });

    } catch (error) {
      console.error("Phone OTP Error:", error);

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

      let message =
        "Unable to send OTP. Please try again.";

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

        {/* ======================================
            Google
        ====================================== */}

        <GoogleButton variant="auth" />

        <Divider />

        {/* ======================================
            Phone
        ====================================== */}

        <div className="space-y-5">

          <PhoneInput
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          {error && (
            <p className="text-sm text-neutral-400">
              {error}
            </p>
          )}

          <AuthButton
            onClick={handleContinue}
            disabled={loading}
            className="
              border
              border-white
              bg-white
              text-black
              shadow-none
              transition-all
              duration-300
              hover:bg-neutral-200
              hover:border-neutral-200
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading
              ? "Sending OTP..."
              : "Continue"}

            {!loading && (
              <ArrowRight className="h-5 w-5" />
            )}
          </AuthButton>

        </div>

        {/* ======================================
            reCAPTCHA
        ====================================== */}

        <div
          id="recaptcha-container"
          className="mt-4"
        />

        {/* ======================================
            Register
        ====================================== */}

        <div className="mt-10 text-center">

          <span className="text-neutral-600">
            New to HealthLens?
          </span>

          <Link
            to="/register"
            className="
              ml-2
              font-semibold
              text-neutral-300
              transition-colors
              duration-300
              hover:text-white
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