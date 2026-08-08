import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import OTPInput from "../../components/auth/OTPInput";
import AuthButton from "../../components/auth/AuthButton";

import { useAuth } from "../../context/AuthContext";

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const phone = location.state?.phone || "";

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ======================================
  // Check OTP Session
  // ======================================

  useEffect(() => {
    if (!phone || !window.confirmationResult) {
      navigate("/login");
    }
  }, [phone, navigate]);

  // ======================================
  // Countdown
  // ======================================

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // ======================================
  // Verify OTP
  // ======================================

  const handleVerify = async () => {
    const enteredOTP = otp.join("");

    setError("");

    if (enteredOTP.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    if (!window.confirmationResult) {
      setError(
        "OTP session expired. Please request a new OTP."
      );
      return;
    }

    try {
      setLoading(true);

      // ======================================
      // Firebase OTP Verification
      // ======================================

      const result =
        await window.confirmationResult.confirm(
          enteredOTP
        );

      const firebaseUser = result.user;

      console.log(
        "Firebase Phone User:",
        firebaseUser.phoneNumber
      );

      // ======================================
      // Get Firebase ID Token
      // ======================================

      const idToken =
        await firebaseUser.getIdToken();

      // ======================================
      // Send Firebase Token to Backend
      // ======================================

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/phone`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            idToken,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Phone login failed."
        );
      }

      console.log("Phone Login Response:", data);

      // ======================================
      // Save Authentication
      // ======================================

      login({
        ...data.user,
        token: data.token,
      });

      // ======================================
      // Cleanup
      // ======================================

      window.confirmationResult = null;

      // ======================================
      // Dashboard
      // ======================================

      navigate("/dashboard");

    } catch (error) {
      console.error(
        "OTP Verification Error:",
        error
      );

      let message =
        "Unable to verify OTP.";

      if (
        error.code ===
        "auth/invalid-verification-code"
      ) {
        message =
          "The OTP you entered is incorrect.";
      } else if (
        error.code === "auth/code-expired"
      ) {
        message =
          "This OTP has expired. Please request a new one.";
      } else if (error.message) {
        message = error.message;
      }

      setError(message);

    } finally {
      setLoading(false);
    }
  };

  // ======================================
  // Resend OTP
  // ======================================

  const handleResend = () => {
    window.confirmationResult = null;

    navigate("/login");
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Verify OTP"
        subtitle={`Enter the 6-digit code sent to ${phone}`}
      >

        {/* OTP Input */}

        <div className="mt-8 flex justify-center">
          <OTPInput
            otp={otp}
            setOtp={setOtp}
          />
        </div>

        {/* Error */}

        {error && (
          <p className="mt-5 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        {/* Verify Button */}

        <div className="mt-8">
          <AuthButton
            onClick={handleVerify}
            disabled={loading}
            className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              shadow-lg
              shadow-cyan-500/20
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <ShieldCheck className="h-5 w-5" />

            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </AuthButton>
        </div>

        {/* Resend */}

        <div className="mt-8 text-center">

          {timer > 0 ? (
            <p className="text-slate-400">
              Resend OTP{" "}
              <span className="font-bold text-cyan-400">
                in {timer}s
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="
                font-semibold
                text-cyan-400
                transition
                hover:text-cyan-300
              "
            >
              Request New OTP
            </button>
          )}

        </div>

      </AuthCard>
    </AuthLayout>
  );
}

export default VerifyOTP;