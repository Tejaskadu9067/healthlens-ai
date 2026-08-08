import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import HeroDashboard from "./HeroDashboard";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-7 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8 lg:px-8 lg:py-9">

        {/* LEFT */}

        <div className="max-w-[500px] text-white">

          <Badge>
            🚀 AI Powered Healthcare
          </Badge>

          <h1 className="mt-4 text-[40px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[46px] lg:text-[52px]">

            AI-Powered

            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Disease Prediction
            </span>

          </h1>

          <p className="mt-4 max-w-[450px] text-[13px] leading-6 text-slate-400">
            Detect diseases intelligently using Machine Learning,
            Explainable AI and modern clinical decision support.
            Fast, secure and built for the future of healthcare.
          </p>

          <div className="mt-5 flex gap-2.5">

            <Link to="/prediction">
              <Button className="rounded-lg px-5 py-2.5 text-xs">
                Start Diagnosis
              </Button>
            </Link>

            <Button
              variant="secondary"
              className="rounded-lg px-5 py-2.5 text-xs"
            >
              Watch Demo
            </Button>

          </div>

        </div>


        {/* RIGHT */}

        <div className="relative flex items-center justify-center lg:justify-end">

          {/* Smaller glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-5
              top-1/2
              h-[300px]
              w-[300px]
              -translate-y-1/2
              rounded-full
              bg-cyan-500/10
              blur-[90px]
            "
          />

          {/* IMPORTANT:
              Constrain the actual dashboard.
          */}

          <div className="relative z-10 w-full max-w-[480px] scale-[0.92] origin-right sm:scale-95 lg:scale-100">
            <HeroDashboard />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;