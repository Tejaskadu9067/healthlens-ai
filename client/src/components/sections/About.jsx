import SectionTitle from "../ui/SectionTitle";
import { ShieldCheck, BrainCircuit, Lock, Sparkles } from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-slate-950 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="ABOUT"
          title="Why Trust HealthLens AI?"
          subtitle="HealthLens AI combines Artificial Intelligence, Explainable AI, and secure technologies to provide accurate, transparent, and privacy-focused healthcare assistance."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Left */}
          <div className="space-y-8">

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <BrainCircuit className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="text-white text-xl font-bold">
                  AI Powered Analysis
                </h3>

                <p className="text-slate-400 mt-2 leading-7">
                  Machine Learning models analyze symptoms to provide
                  intelligent disease predictions with high confidence.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Sparkles className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="text-white text-xl font-bold">
                  Explainable AI
                </h3>

                <p className="text-slate-400 mt-2 leading-7">
                  Understand why the AI predicted a disease through confidence
                  scores and feature importance.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Lock className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="text-white text-xl font-bold">
                  Privacy First
                </h3>

                <p className="text-slate-400 mt-2 leading-7">
                  No personal medical records are stored. Your information
                  remains private and secure.
                </p>
              </div>
            </div>

          </div>

          {/* Right Card */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <ShieldCheck
              className="text-cyan-400 mb-6"
              size={60}
            />

            <h2 className="text-3xl font-bold text-white">
              Trusted Healthcare AI
            </h2>

            <p className="text-slate-400 mt-6 leading-8">
              HealthLens AI is designed to assist—not replace—medical
              professionals. Our platform leverages Machine Learning and
              Explainable AI to support early disease detection while keeping
              users informed and in control.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h3 className="text-cyan-400 text-4xl font-bold">
                  95%
                </h3>

                <p className="text-slate-400 mt-2">
                  Prediction Accuracy
                </p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-4xl font-bold">
                  200+
                </h3>

                <p className="text-slate-400 mt-2">
                  Diseases Supported
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;