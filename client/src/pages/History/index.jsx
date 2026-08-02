import { Search, Clock3, Trash2, RotateCcw } from "lucide-react";

const history = [
  {
    disease: "Influenza",
    confidence: 96,
    date: "Today • 2:45 PM",
    symptoms: ["Fever", "Cough", "Fatigue"],
  },
  {
    disease: "Migraine",
    confidence: 91,
    date: "Yesterday • 11:30 AM",
    symptoms: ["Headache", "Nausea"],
  },
  {
    disease: "Common Cold",
    confidence: 87,
    date: "July 31 • 5:20 PM",
    symptoms: ["Sneezing", "Runny Nose"],
  },
];

function History() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">

      {/* Heading */}

      <div className="mb-12">

        <h1 className="text-5xl font-extrabold text-white">
          Prediction History
        </h1>

        <p className="mt-3 text-slate-400 text-lg">
          View your previous AI disease predictions.
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">

          <p className="text-slate-400">
            Total Predictions
          </p>

          <h2 className="text-4xl font-bold mt-3 text-cyan-400">
            24
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">

          <p className="text-slate-400">
            Average Confidence
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-400">
            91%
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">

          <p className="text-slate-400">
            Most Predicted
          </p>

          <h2 className="text-3xl font-bold mt-3 text-white">
            Influenza
          </h2>

        </div>

      </div>

      {/* Search */}

      <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-5 mb-10">

        <div className="flex items-center gap-3">

          <Search className="w-5 h-5 text-cyan-400" />

          <input
            type="text"
            placeholder="Search prediction..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

      </div>

      {/* History Cards */}

      <div className="space-y-8">

        {history.map((item) => (

          <div
            key={item.date}
            className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  🩺 {item.disease}
                </h2>

                <div className="flex items-center gap-2 mt-2 text-slate-400">

                  <Clock3 className="w-4 h-4" />

                  <span>{item.date}</span>

                </div>

              </div>

              <div className="text-right">

                <p className="text-slate-400 text-sm">
                  Confidence
                </p>

                <h2 className="text-3xl font-bold text-cyan-400">
                  {item.confidence}%
                </h2>

              </div>

            </div>

            {/* Symptoms */}

            <div className="mt-8">

              <p className="text-slate-400 mb-3">
                Symptoms
              </p>

              <div className="flex flex-wrap gap-3">

                {item.symptoms.map((symptom) => (

                  <span
                    key={symptom}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300"
                  >
                    {symptom}
                  </span>

                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-4 mt-8">

              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-white transition-all">

                <RotateCcw className="w-4 h-4" />

                Predict Again

              </button>

              <button className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500 hover:text-white transition-all">

                <Trash2 className="w-5 h-5" />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default History;