import {
  BrainCircuit,
  Activity,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function HeroDashboard() {
  const symptoms = ["Fever", "Cough", "Fatigue", "Headache"];

  return (
    <div
      className="
        relative
        w-full
        max-w-[500px]
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        bg-slate-900/70
        p-5
        text-white
        shadow-[0_0_70px_rgba(34,211,238,.14)]
        backdrop-blur-3xl
        sm:p-6
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* Header */}

      <div className="relative flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            AI Diagnosis
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Live Disease Analysis
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-400" />

          <span className="text-xs font-medium text-green-400">
            Online
          </span>
        </div>
      </div>

      {/* Prediction */}

      <div className="relative mt-7 grid grid-cols-[112px_1fr] items-center gap-5">

        {/* Confidence Ring */}

        <div className="flex justify-center">
          <div className="relative h-[112px] w-[112px]">

            <svg
              className="absolute inset-0"
              width="112"
              height="112"
              viewBox="0 0 112 112"
            >
              <circle
                cx="56"
                cy="56"
                r="43"
                stroke="#1e293b"
                strokeWidth="9"
                fill="none"
              />

              <circle
                cx="56"
                cy="56"
                r="43"
                stroke="#22d3ee"
                strokeWidth="9"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="270"
                strokeDashoffset="10"
                transform="rotate(-90 56 56)"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-[26px] font-black leading-none text-cyan-400">
                96%
              </h2>

              <span className="mt-1 text-[10px] text-slate-400">
                Confidence
              </span>
            </div>

          </div>
        </div>

        {/* Disease */}

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Predicted Disease
          </p>

          <h2 className="mt-1 text-[34px] font-black leading-none tracking-[-0.035em] text-cyan-400">
            Influenza
          </h2>

          <p className="mt-2 text-[11px] leading-5 text-slate-400">
            AI predicts Influenza with high confidence after
            analysing the selected symptoms using our trained
            Random Forest model.
          </p>

          {/* Prediction Score */}

          <div className="mt-4">
            <div className="mb-1.5 flex justify-between">
              <span className="text-[10px] text-slate-400">
                Prediction Score
              </span>

              <span className="text-[10px] font-semibold text-cyan-400">
                96%
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className="
                  h-full
                  w-[96%]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-blue-500
                  shadow-[0_0_14px_rgba(34,211,238,.5)]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Symptoms */}

      <div className="relative mt-6">
        <p className="mb-2.5 text-xs text-slate-400">
          Symptoms Detected
        </p>

        <div className="flex flex-wrap gap-1.5">
          {symptoms.map((symptom) => (
            <div
              key={symptom}
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-cyan-400/10
                bg-slate-800/80
                px-3
                py-1.5
                transition-colors
                duration-200
                hover:border-cyan-400/40
                hover:bg-cyan-500/10
              "
            >
              <CheckCircle2
                size={13}
                className="text-cyan-400"
              />

              <span className="text-[10px]">
                {symptom}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}

      <div className="relative mt-6 grid grid-cols-3 gap-2.5">

        {/* AI Model */}

        <div
          className="
            rounded-xl
            border
            border-cyan-400/10
            bg-slate-800/80
            p-3
            transition-colors
            duration-200
            hover:border-cyan-400/30
          "
        >
          <BrainCircuit
            size={19}
            className="text-cyan-400"
          />

          <p className="mt-2.5 text-[9px] text-slate-400">
            AI Model
          </p>

          <h3 className="mt-1 text-xs font-semibold">
            Random Forest
          </h3>
        </div>

        {/* Accuracy */}

        <div
          className="
            rounded-xl
            border
            border-cyan-400/10
            bg-slate-800/80
            p-3
            transition-colors
            duration-200
            hover:border-cyan-400/30
          "
        >
          <Activity
            size={19}
            className="text-emerald-400"
          />

          <p className="mt-2.5 text-[9px] text-slate-400">
            Accuracy
          </p>

          <h3 className="mt-1 text-xs font-semibold">
            95%
          </h3>
        </div>

        {/* Security */}

        <div
          className="
            rounded-xl
            border
            border-cyan-400/10
            bg-slate-800/80
            p-3
            transition-colors
            duration-200
            hover:border-cyan-400/30
          "
        >
          <ShieldCheck
            size={19}
            className="text-violet-400"
          />

          <p className="mt-2.5 text-[9px] text-slate-400">
            Security
          </p>

          <h3 className="mt-1 text-xs font-semibold">
            Protected
          </h3>
        </div>

      </div>
    </div>
  );
}

export default HeroDashboard;