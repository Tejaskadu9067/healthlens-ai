import { Link } from "react-router-dom";
import { User, Phone, ArrowRight } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import GoogleButton from "../../components/auth/GoogleButton";

function Register() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create Account ✨"
        subtitle="Start your AI healthcare journey with HealthLens."
      >
        {/* Google Register */}

        <GoogleButton />

        {/* Divider */}

        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-px bg-white/10" />

          <span className="text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10" />

        </div>

        <div className="space-y-5">

          {/* Full Name */}

          <div className="relative">

            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-14 rounded-2xl bg-slate-900/60 border border-white/10 pl-14 pr-5 text-white outline-none focus:border-cyan-400 transition"
            />

          </div>

          {/* Phone */}

          <div className="relative">

            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5" />

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full h-14 rounded-2xl bg-slate-900/60 border border-white/10 pl-14 pr-5 text-white outline-none focus:border-cyan-400 transition"
            />

          </div>

          {/* Continue */}

          <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2">

            Continue

            <ArrowRight className="w-5 h-5" />

          </button>

        </div>

        {/* Footer */}

        <div className="mt-10 text-center">

          <span className="text-slate-400">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ml-2 text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Sign In
          </Link>

        </div>

      </AuthCard>
    </AuthLayout>
  );
}

export default Register;