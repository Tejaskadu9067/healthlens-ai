import Badge from "../ui/Badge";
import Button from "../ui/Button";
import HeroDashboard from "./HeroDashboard";

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center px-6">

        {/* Left Side */}
        <div className="max-w-3xl">

          {/* Badge */}
          <Badge>🚀 AI Powered Healthcare</Badge>

          {/* Heading */}
          <h1 className="text-6xl font-extrabold mt-8 leading-tight">
            AI-powered
            <span className="text-cyan-400"> Disease Prediction</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl text-slate-400 leading-8">
            Detect diseases from symptoms using Machine Learning,
            Explainable AI and modern clinical decision support.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <Button>Predict Disease</Button>

            <Button variant="secondary">
              View Demo
            </Button>
          </div>

          {/* Statistics */}
          <div className="flex gap-12 mt-16 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                95%
              </h2>

              <p className="text-slate-400">
                Prediction Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                200+
              </h2>

              <p className="text-slate-400">
                Diseases Supported
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                AI
              </h2>

              <p className="text-slate-400">
                Explainable AI
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <HeroDashboard />
        </div>

      </div>
    </section>
  );
}

export default Hero;