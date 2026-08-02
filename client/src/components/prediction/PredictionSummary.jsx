import DashboardCard from "../common/DashboardCard";

function PredictionSummary({
  disease,
  confidence,
}) {
  return (
    <DashboardCard>

      <div className="text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-5xl">
          🤖
        </div>

        <h2 className="text-3xl font-bold text-white mt-6">
          AI Diagnosis Assistant
        </h2>

        <p className="text-slate-400 mt-3 text-lg">
          {disease || "Waiting for prediction"}
        </p>

      </div>

      <div className="mt-10">

        <div className="flex justify-between text-slate-400">

          <span>Confidence</span>

          <span>
            {confidence !== undefined
              ? `${confidence}%`
              : "--%"}
          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-slate-800 overflow-hidden">

          <div
            className="h-full bg-cyan-400 transition-all duration-700"
            style={{
              width: confidence
                ? `${confidence}%`
                : "0%",
            }}
          />

        </div>

      </div>

    </DashboardCard>
  );
}

export default PredictionSummary;