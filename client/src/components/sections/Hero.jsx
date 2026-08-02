import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import HeroDashboard from "./HeroDashboard";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-28 items-center px-8">

        {/* Left */}

        <div className="max-w-xl text-white">

          <Badge>
            🚀 AI Powered Healthcare
          </Badge>

          <h1 className="mt-8 text-7xl font-black leading-[1.05]">

            AI-Powered

            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

              Disease Prediction

            </span>

          </h1>

          <p className="mt-8 text-xl leading-10 text-slate-400">

            Detect diseases intelligently using Machine Learning,
            Explainable AI and modern clinical decision support.

            Fast, secure and built for the future of healthcare.

          </p>

          <div className="flex gap-5 mt-12">

            <Link to="/prediction">

              <Button className="px-8 py-4 rounded-2xl">
                Start Diagnosis
              </Button>

            </Link>

            <Button
              variant="secondary"
              className="px-8 py-4 rounded-2xl"
            >
              Watch Demo
            </Button>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex justify-center lg:justify-end pt-10">

          {/* Glow */}

          <div
            className="
              absolute
              right-0
              w-[700px]
              h-[700px]
              rounded-full
              bg-cyan-500/15
              blur-[180px]
            "
          />

          <div className="relative z-10">

            <HeroDashboard />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;