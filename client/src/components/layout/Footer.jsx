import { Activity, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-black text-white">

      {/* ======================================
          TOP BORDER
      ====================================== */}

      <div className="mx-auto max-w-[1400px] border-t border-white/[0.10]" />


      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">

        {/* ======================================
            BRAND
        ====================================== */}

        <div className="flex flex-col items-center text-center">

          {/* Logo */}

          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-[0_0_25px_rgba(255,255,255,0.08)]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <Activity
                className="
                  h-5
                  w-5
                  text-black
                "
                strokeWidth={2.5}
              />
            </div>

            <span
              className="
                text-xl
                font-semibold
                tracking-[-0.04em]
              "
            >
              HealthLens
            </span>

          </Link>


          {/* Statement */}

          <h2
            className="
              mt-10
              max-w-3xl
              text-4xl
              font-semibold
              leading-[1]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Health intelligence.
            <span className="block text-neutral-500">
              Simplified.
            </span>
          </h2>


          <p
            className="
              mt-7
              max-w-lg
              text-sm
              leading-6
              text-neutral-500
            "
          >
            AI-assisted health analysis designed to help you
            understand your symptoms with greater clarity.
          </p>

        </div>


        {/* ======================================
            NAVIGATION
        ====================================== */}

        <div
          className="
            mt-20
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-4
            border-y
            border-white/[0.08]
            py-7
          "
        >

          <Link
            to="/prediction"
            className="
              text-sm
              text-neutral-500
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Prediction
          </Link>

          <Link
            to="/history"
            className="
              text-sm
              text-neutral-500
              transition-colors
              duration-300
              hover:text-white
            "
          >
            History
          </Link>

          <Link
            to="/dashboard"
            className="
              text-sm
              text-neutral-500
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className="
              group
              flex
              items-center
              gap-1
              text-sm
              text-neutral-500
              transition-colors
              duration-300
              hover:text-white
            "
          >
            About

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
              strokeWidth={1.5}
            />

          </Link>

        </div>


        {/* ======================================
            DISCLAIMER
        ====================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <p
            className="
              text-[11px]
              leading-5
              text-neutral-600
            "
          >
            HealthLens provides AI-assisted health information
            for informational purposes only. It is not intended
            to replace professional medical advice, diagnosis,
            or treatment.
          </p>

        </div>


        {/* ======================================
            BOTTOM
        ====================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/[0.08]
            pt-7
            text-[11px]
            text-neutral-600
            sm:flex-row
          "
        >

          <p>
            © {new Date().getFullYear()} HealthLens.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <button
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Privacy
            </button>

            <button
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Terms
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;