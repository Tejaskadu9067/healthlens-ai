import { Link } from "react-router-dom";
import { User, Phone, ArrowRight } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import GoogleButton from "../../components/auth/GoogleButton";

function Register() {
  return (
    <AuthLayout>

      <AuthCard
        title="Create your account"
        subtitle="Start your HealthLens journey."
      >

        {/* ======================================
            Google Register
        ====================================== */}

        <GoogleButton />


        {/* ======================================
            Divider
        ====================================== */}

        <div className="my-7 flex items-center gap-4">

          <div className="h-px flex-1 bg-white/[0.08]" />

          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-700">
            OR
          </span>

          <div className="h-px flex-1 bg-white/[0.08]" />

        </div>


        {/* ======================================
            Registration Fields
        ====================================== */}

        <div className="space-y-4">

          {/* Full Name */}

          <div className="relative">

            <User
              className="
                absolute
                left-5
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-neutral-600
              "
              strokeWidth={1.5}
            />

            <input
              type="text"
              placeholder="Full Name"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/[0.10]
                bg-[#111111]
                pl-14
                pr-5
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-neutral-700
                hover:border-white/[0.16]
                focus:border-white/[0.25]
                focus:bg-[#151515]
              "
            />

          </div>


          {/* Phone */}

          <div className="relative">

            <Phone
              className="
                absolute
                left-5
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-neutral-600
              "
              strokeWidth={1.5}
            />

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/[0.10]
                bg-[#111111]
                pl-14
                pr-5
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-neutral-700
                hover:border-white/[0.16]
                focus:border-white/[0.25]
                focus:bg-[#151515]
              "
            />

          </div>


          {/* Continue */}

          <button
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white
              bg-white
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-neutral-200
              hover:border-neutral-200
              active:translate-y-0
            "
          >

            Continue

            <ArrowRight
              className="h-5 w-5"
              strokeWidth={1.8}
            />

          </button>

        </div>


        {/* ======================================
            Sign In
        ====================================== */}

        <div className="mt-8 text-center">

          <span className="text-sm text-neutral-600">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="
              ml-2
              text-sm
              font-semibold
              text-neutral-300
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Sign in
          </Link>

        </div>

      </AuthCard>

    </AuthLayout>
  );
}

export default Register;