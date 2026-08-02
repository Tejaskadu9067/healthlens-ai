import { motion } from "framer-motion";
import {
  BrainCircuit,
  Activity,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function HeroDashboard() {
  const symptoms = ["Fever", "Cough", "Fatigue", "Headache"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.02 }}
      className="
        relative
        w-[600px]
        min-h-[470px]
        rounded-[34px]
        border border-white/10
        bg-slate-900/70
        backdrop-blur-3xl
        shadow-[0_0_90px_rgba(34,211,238,.18)]
        overflow-hidden
        p-8
        text-white
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            AI Diagnosis
          </h2>

          <p className="text-slate-400 mt-1">
            Live Disease Analysis
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-green-400 font-medium">
            Online
          </span>

        </div>

      </div>

      {/* Prediction */}

      <div className="grid grid-cols-[170px_1fr] gap-10 mt-10 items-center">

        {/* Confidence Ring */}

        <div className="flex justify-center">

          <div className="relative w-[150px] h-[150px]">

            <svg
              className="absolute inset-0"
              width="150"
              height="150"
              viewBox="0 0 150 150"
            >

              <circle
                cx="75"
                cy="75"
                r="58"
                stroke="#1e293b"
                strokeWidth="12"
                fill="none"
              />

              <circle
                cx="75"
                cy="75"
                r="58"
                stroke="#22d3ee"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="364"
                strokeDashoffset="14"
                transform="rotate(-90 75 75)"
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <h2 className="text-4xl font-black text-cyan-400 leading-none">
                96%
              </h2>

              <span className="mt-2 text-sm text-slate-400">
                Confidence
              </span>

            </div>

          </div>

        </div>

        {/* Disease */}

        <div>

          <p className="text-sm text-slate-400">
            Predicted Disease
          </p>

          <h2 className="mt-2 text-5xl font-black text-cyan-400 leading-none">
            Influenza
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            AI predicts Influenza with high confidence after
            analysing the selected symptoms using our trained
            Random Forest model.
          </p>

          {/* Progress */}

          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <span className="text-sm text-slate-400">
                Prediction Score
              </span>

              <span className="font-semibold text-cyan-400">
                96%
              </span>

            </div>

            <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "96%" }}
                transition={{ duration: 2 }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-blue-500
                  shadow-[0_0_18px_rgba(34,211,238,.55)]
                "
              />

            </div>

          </div>

        </div>

      </div>

      {/* Symptoms */}

      <div className="mt-10">

        <p className="text-sm text-slate-400 mb-4">
          Symptoms Detected
        </p>

        <div className="flex flex-wrap gap-4">

          {symptoms.map((symptom) => (

            <div
              key={symptom}
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-slate-800/80
                border
                border-cyan-400/10
                px-5
                py-2.5
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:border-cyan-400/40
              "
            >

              <CheckCircle2
                size={16}
                className="text-cyan-400"
              />

              <span className="text-sm">
                {symptom}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid grid-cols-3 gap-5 mt-10">

        <div
          className="
            rounded-2xl
            bg-slate-800/80
            border
            border-cyan-400/10
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,.18)]
          "
        >

          <BrainCircuit
            size={24}
            className="text-cyan-400"
          />

          <p className="text-xs text-slate-400 mt-4">
            AI Model
          </p>

          <h3 className="font-semibold mt-2">
            Random Forest
          </h3>

        </div>

        <div
          className="
            rounded-2xl
            bg-slate-800/80
            border
            border-cyan-400/10
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,.18)]
          "
        >

          <Activity
            size={24}
            className="text-emerald-400"
          />

          <p className="text-xs text-slate-400 mt-4">
            Accuracy
          </p>

          <h3 className="font-semibold mt-2">
            95%
          </h3>

        </div>

        <div
          className="
            rounded-2xl
            bg-slate-800/80
            border
            border-cyan-400/10
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,.18)]
          "
        >

          <ShieldCheck
            size={24}
            className="text-violet-400"
          />

          <p className="text-xs text-slate-400 mt-4">
            Security
          </p>

          <h3 className="font-semibold mt-2">
            Protected
          </h3>

        </div>

      </div>

    </motion.div>
  );
}

export default HeroDashboard;