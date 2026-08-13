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

  const authStyle = `
    h-14
    w-full
    rounded-2xl
    border
    border-white/[0.10]
    bg-[#111111]
    text-white
    hover:bg-[#181818]
    hover:border-white/[0.18]
  `;

  const navbarStyle = `
    h-11
    rounded-xl
    border
    border-white/[0.10]
    bg-white
    px-5
    text-sm
    text-black
    hover:bg-neutral-200
    hover:border-neutral-200
  `;

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
        hover:-translate-y-0.5
        active:translate-y-0
      `}
    >

      <FcGoogle className="text-xl" />

      {variant === "auth"
        ? "Continue with Google"
        : "Sign in"}

    </button>
  );
}

export default GoogleButton;