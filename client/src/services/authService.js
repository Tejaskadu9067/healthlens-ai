import api from "./api";

// ================================
// Google Login
// ================================
export async function googleLogin(idToken) {
  const { data } = await api.post(
    "/auth/google",
    {
      idToken,
    }
  );

  return data;
}

// ================================
// Phone OTP - Send
// ================================
export async function sendOTP(phone) {
  const { data } = await api.post(
    "/auth/send-otp",
    {
      phone,
    }
  );

  return data;
}

// ================================
// Phone OTP - Verify
// ================================
export async function verifyOTP(phone, otp) {
  const { data } = await api.post(
    "/auth/verify-otp",
    {
      phone,
      otp,
    }
  );

  return data;
}