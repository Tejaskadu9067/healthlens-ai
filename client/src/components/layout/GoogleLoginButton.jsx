import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";

import { googleLogin } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function GoogleLoginButton() {
  const { login } = useAuth();

  const googleLoginHandler = useGoogleLogin({
    flow: "implicit",

    onSuccess: async (tokenResponse) => {
      try {
        const data = await googleLogin(tokenResponse.access_token);

        login(data.user);

        console.log("✅ Google Login Successful");
      } catch (error) {
        console.error("Google Login Error:", error);
      }
    },

    onError: () => {
      console.log("Google Login Failed");
    },
  });

  return (
    <button
      onClick={() => googleLoginHandler()}
      className="
        w-full
        h-14
        rounded-2xl
        border
        border-white/10
        bg-white
        hover:bg-slate-100
        transition-all
        duration-300
        flex
        items-center
        justify-center
        gap-3
        font-semibold
        text-slate-800
        shadow-lg
        hover:scale-[1.02]
        active:scale-[0.98]
      "
    >
      <FcGoogle className="text-2xl" />

      Continue with Google
    </button>
  );
}

export default GoogleLoginButton;