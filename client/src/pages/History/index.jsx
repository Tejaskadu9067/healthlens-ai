import {
  Search,
  Clock3,
  Trash2,
  RotateCcw,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  getPredictionHistory,
  deletePrediction as deletePredictionAPI,
} from "../../services/predictionService";

function History() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState(null);

  useEffect(() => {

    loadHistory();

  }, []);

  async function loadHistory() {

    try {

      const data = await getPredictionHistory();

      setHistory(data.predictions);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  async function handleDelete() {

    try {

      await deletePredictionAPI(deleteModal._id);

      setHistory((prev) =>
        prev.filter(
          (item) => item._id !== deleteModal._id
        )
      );

      setDeleteModal(null);

    } catch (error) {

      console.error(error);

    }

  }

  const filteredHistory = useMemo(() => {

    return history.filter((item) =>
      item.disease
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [history, search]);

  const totalPredictions = history.length;

  const averageConfidence =
    totalPredictions === 0
      ? 0
      : Math.round(
          history.reduce(
            (sum, item) => sum + item.confidence,
            0
          ) / totalPredictions
        );

  const diseaseCount = {};

  history.forEach((item) => {

    diseaseCount[item.disease] =
      (diseaseCount[item.disease] || 0) + 1;

  });

  const mostPredicted =
    totalPredictions === 0
      ? "-"
      : Object.keys(diseaseCount).reduce((a, b) =>
          diseaseCount[a] > diseaseCount[b] ? a : b
        );

  if (loading) {

    return (

      <div className="flex justify-center py-24">

        <p className="text-xl text-white">

          Loading prediction history...

        </p>

      </div>

    );

  }

  return (

    <div className="max-w-7xl mx-auto px-6 pb-20">

      {/* Heading */}

      <div className="mb-12">

        <h1 className="text-5xl font-extrabold text-white">

          Prediction History

        </h1>

        <p className="mt-3 text-slate-400 text-lg">

          View all your previous AI disease predictions.

        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">

          <p className="text-slate-400">

            Total Predictions

          </p>

          <h2 className="text-4xl font-bold mt-3 text-cyan-400">

            {totalPredictions}

          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">

          <p className="text-slate-400">

            Average Confidence

          </p>

          <h2 className="text-4xl font-bold mt-3 text-emerald-400">

            {averageConfidence}%

          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">

          <p className="text-slate-400">

            Most Predicted

          </p>

          <h2 className="text-3xl font-bold mt-3 text-white">

            {mostPredicted}

          </h2>

        </div>

      </div>

      {/* Search */}

      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 mb-10">

        <div className="flex items-center gap-3">

          <Search className="w-5 h-5 text-cyan-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prediction..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

      </div>

      {/* Empty State */}

      {filteredHistory.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-cyan-500/30 bg-slate-900/60 p-16 text-center">

          <div className="text-6xl">

            🩺

          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">

            No Predictions Found

          </h2>

          <p className="mt-4 text-slate-400">

            Start your first AI diagnosis to build your prediction history.

          </p>

          <Link to="/prediction">

            <button className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all">

              Start Prediction

            </button>

          </Link>

        </div>

      ) : (

        <div className="space-y-8">

          {filteredHistory.map((item) => (

            <div
              key={item._id}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 hover:border-cyan-400/30 transition-all"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-white">

                    🩺 {item.disease}

                  </h2>

                  <div className="flex items-center gap-2 mt-3 text-slate-400">

                    <Clock3 className="w-4 h-4" />

                    {new Date(item.createdAt).toLocaleString()}

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-slate-400">

                    Confidence

                  </p>

                  <h2 className="text-4xl font-bold text-cyan-400">

                    {item.confidence}%

                  </h2>

                </div>

              </div>

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

                      {symptom.replaceAll("_", " ")}

                    </span>

                  ))}

                </div>

              </div>

              <div className="flex justify-end gap-4 mt-8">

                <Link
                  to="/prediction"
                  state={{
                    symptoms: item.symptoms,
                  }}
                >

                  <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-white transition-all">

                    <RotateCcw className="w-4 h-4" />

                    Predict Again

                  </button>

                </Link>

                <button
                  onClick={() => setDeleteModal(item)}
                  className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500 hover:text-white transition-all"
                >

                  <Trash2 className="w-5 h-5" />

                </button>

              </div>

            </div>

          ))}

        </div>

      )}

      {/* Delete Modal */}

      {deleteModal && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 p-8">

            <h2 className="text-2xl font-bold text-white">

              Delete Prediction

            </h2>

            <p className="mt-4 text-slate-400">

              Are you sure you want to delete this prediction?

            </p>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setDeleteModal(null)}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
              >

                Cancel

              </button>

              <button
                onClick={handleDelete}
                className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white"
              >

                Delete

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default History;