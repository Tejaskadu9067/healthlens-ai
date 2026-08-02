const symptoms = [
  "Fever",
  "Headache",
  "Fatigue",
  "Body Pain",
];

export default function HeroDashboard() {
  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute -inset-2 rounded-3xl bg-cyan-500/20 blur-3xl"></div>

      <div className="relative bg-[#11182d] border border-slate-700 rounded-3xl p-8 shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-white text-xl font-bold">
              Disease Prediction
            </h3>

            <p className="text-slate-400 text-sm">
              AI Analysis
            </p>
          </div>

          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
        </div>

        {/* Symptoms */}
        <div className="space-y-3">

          <p className="text-slate-400 uppercase text-xs tracking-wider">
            Symptoms
          </p>

          {symptoms.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between bg-slate-800/70 px-4 py-3 rounded-xl"
            >
              <span className="text-slate-200">
                {item}
              </span>

              <span className="text-cyan-400 font-bold">
                ✓
              </span>
            </div>
          ))}

        </div>

        {/* Divider */}

        <div className="my-8 border-t border-slate-700"></div>

        {/* Prediction */}

        <div className="space-y-5">

          <div>
            <p className="text-slate-400 text-sm">
              Predicted Disease
            </p>

            <h2 className="text-3xl font-bold text-cyan-400">
              Influenza
            </h2>
          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span className="text-slate-300">
                Confidence
              </span>

              <span className="text-green-400 font-semibold">
                96%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

              <div className="w-[96%] h-full bg-cyan-400 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}