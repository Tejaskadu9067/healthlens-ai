import LoadingSpinner from "./LoadingSpinner";

function PredictionCard({
  prediction,
  loading,
  selectedCount,
}) {
  if (loading) {
    return (
      <div className="sticky top-28">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl p-8 min-h-[720px] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-28">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl p-8 min-h-[720px]">

        {/* Header */}

        <div className="text-center">

          <div className="w-24 h-24 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-5xl">
            🤖
          </div>

          <h2 className="text-3xl font-bold text-white mt-6">
            AI Diagnosis Assistant
          </h2>

          <p className="text-slate-400 mt-3">
            {prediction
              ? prediction.disease
              : "Waiting for prediction"}
          </p>

        </div>

        {/* Confidence */}

        <div className="mt-12">

          <div className="flex justify-between text-slate-400">
            <span>Confidence</span>

            <span>
              {prediction
                ? `${prediction.confidence}%`
                : "--%"}
            </span>

          </div>

          <div className="mt-3 h-3 rounded-full bg-slate-800 overflow-hidden">

            <div
              className="h-full bg-cyan-400 transition-all duration-700"
              style={{
                width: prediction
                  ? `${prediction.confidence}%`
                  : "0%",
              }}
            />

          </div>

        </div>

        {/* Top Predictions */}

        {prediction?.top_predictions && (

          <div className="mt-12">

            <h3 className="text-xl font-semibold mb-5">
              Top Predictions
            </h3>

            <div className="space-y-4">

              {prediction.top_predictions.map((item, index) => (

                <div
                  key={item.disease}
                  className="bg-slate-800 rounded-xl p-4 flex justify-between items-center"
                >

                  <div>

                    <p className="font-semibold text-white">

                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : "🥉"}{" "}

                      {item.disease}

                    </p>

                  </div>

                  <span className="text-cyan-400 font-bold">
                    {item.confidence}%
                  </span>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* Status */}

        <div className="mt-12">

          <h3 className="text-xl font-semibold mb-5">
            Status
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between bg-slate-800 rounded-xl p-4">

              <span>Symptoms Selected</span>

              <span className="text-cyan-400 font-semibold">
                {selectedCount}
              </span>

            </div>

            <div className="flex justify-between bg-slate-800 rounded-xl p-4">

              <span>AI Engine</span>

              <span className="text-green-400 font-semibold">
                Ready
              </span>

            </div>

          </div>

        </div>

        {/* Precautions */}

        <div className="mt-12">

          <h3 className="text-xl font-semibold mb-5">
            Precautions
          </h3>

          {prediction ? (

            <div className="space-y-3">

              {prediction.precautions.map((item) => (

                <div
                  key={item}
                  className="bg-slate-800 rounded-xl p-4"
                >
                  ✓ {item}
                </div>

              ))}

            </div>

          ) : (

            <div className="bg-slate-800 rounded-xl p-5 text-slate-500">
              Predict a disease to view precautions.
            </div>

          )}

        </div>

        {/* Medicines */}

        <div className="mt-12">

          <h3 className="text-xl font-semibold mb-5">
            Medicines
          </h3>

          {prediction ? (

            <div className="flex flex-wrap gap-3">

              {prediction.medicines.map((medicine) => (

                <span
                  key={medicine}
                  className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300"
                >
                  {medicine}
                </span>

              ))}

            </div>

          ) : (

            <div className="bg-slate-800 rounded-xl p-5 text-slate-500">
              Medicines will appear after prediction.
            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default PredictionCard;