import SectionTitle from "../ui/SectionTitle";
import {
  ShieldCheck,
  BrainCircuit,
  Lock,
  Sparkles,
} from "lucide-react";

function About() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        <SectionTitle
          badge="ABOUT"
          title="Why Trust HealthLens AI?"
          subtitle="HealthLens AI combines Artificial Intelligence, Explainable AI, and secure technologies to provide accurate, transparent, and privacy-focused healthcare assistance."
        />

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">

          {/* =========================
              LEFT
          ========================== */}

          <div className="space-y-4">

            {/* AI Powered Analysis */}

            <div
              className="
                group
                flex
                gap-4
                rounded-[20px]
                border
                border-white/[0.08]
                bg-slate-900/60
                p-4
                backdrop-blur-xl
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-cyan-400/25
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/10
                "
              >
                <BrainCircuit
                  className="text-cyan-400"
                  size={20}
                />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold tracking-tight text-white">
                  AI Powered Analysis
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-slate-400">
                  Machine Learning models analyze symptoms to provide
                  intelligent disease predictions with high confidence.
                </p>
              </div>

            </div>


            {/* Explainable AI */}

            <div
              className="
                group
                flex
                gap-4
                rounded-[20px]
                border
                border-white/[0.08]
                bg-slate-900/60
                p-4
                backdrop-blur-xl
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-cyan-400/25
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/10
                "
              >
                <Sparkles
                  className="text-cyan-400"
                  size={20}
                />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold tracking-tight text-white">
                  Explainable AI
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-slate-400">
                  Understand why the AI predicted a disease through confidence
                  scores and feature importance.
                </p>
              </div>

            </div>


            {/* Privacy First */}

            <div
              className="
                group
                flex
                gap-4
                rounded-[20px]
                border
                border-white/[0.08]
                bg-slate-900/60
                p-4
                backdrop-blur-xl
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-cyan-400/25
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/10
                "
              >
                <Lock
                  className="text-cyan-400"
                  size={20}
                />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold tracking-tight text-white">
                  Privacy First
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-slate-400">
                  No personal medical records are stored. Your information
                  remains private and secure.
                </p>
              </div>

            </div>

          </div>


          {/* =========================
              RIGHT CARD
          ========================== */}

          <div
            className="
              rounded-[22px]
              border
              border-white/[0.08]
              bg-slate-900/70
              p-5
              shadow-[0_10px_35px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              sm:p-6
            "
          >

            <ShieldCheck
              className="mb-4 text-cyan-400"
              size={38}
            />

            <h2 className="text-2xl font-bold tracking-tight text-white">
              Trusted Healthcare AI
            </h2>

            <p className="mt-3 text-[12px] leading-5 text-slate-400">
              HealthLens AI is designed to assist—not replace—medical
              professionals. Our platform leverages Machine Learning and
              Explainable AI to support early disease detection while keeping
              users informed and in control.
            </p>


            {/* Statistics */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">

                <h3 className="text-2xl font-bold tracking-tight text-cyan-400">
                  95%
                </h3>

                <p className="mt-1 text-[11px] text-slate-400">
                  Prediction Accuracy
                </p>

              </div>


              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">

                <h3 className="text-2xl font-bold tracking-tight text-cyan-400">
                  200+
                </h3>

                <p className="mt-1 text-[11px] text-slate-400">
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