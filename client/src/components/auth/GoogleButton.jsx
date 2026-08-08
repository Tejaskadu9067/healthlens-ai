import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";
import { googleLogin } from "../../services/authService";

function GoogleButton({ variant = "auth" }) {
  const { login } = useAuth();

  async function handleGoogleLogin() {
    try {
      const provider = new GoogleAuthProvider();

      // Firebase Google Sign-In
      const result = await signInWithPopup(
        auth,
        provider
      );

      // Get Firebase user
      const firebaseUser = result.user;

      // Get Firebase ID Token
      const idToken = await firebaseUser.getIdToken();

      // Send ID Token to Backend
      const data = await googleLogin(idToken);

      // Save User + JWT in Context
      login({
        ...data.user,
        token: data.token,
      });

      console.log("✅ Firebase Login Successful");
    } catch (error) {
      console.error("Google Login Error:");
      console.error(error);
    }
  }

  const authStyle =
    "w-full h-14 rounded-2xl bg-white hover:bg-slate-100 text-slate-800";

  const navbarStyle =
    "px-5 h-11 rounded-xl bg-white hover:bg-slate-100 text-slate-800";

  return (
    <button
      onClick={handleGoogleLogin}
      className={`
        ${
          variant === "auth"
            ? authStyle
            : navbarStyle
        }
        flex
        items-center
        justify-center
        gap-3
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        shadow-lg
      `}
    >
      <FcGoogle className="text-2xl" />

      {variant === "auth"
        ? "Continue with Google"
        : "Sign in"}
    </button>
  );
}

export default GoogleButton;