import {
  FaStethoscope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function RecentPredictions({ predictions = [] }) {
  const recent = predictions.slice(0, 3);

  return (
    <section className="h-full rounded-[20px] bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
            Activity
          </p>

          <h2 className="mt-0.5 text-lg font-bold tracking-tight text-slate-800">
            Recent Predictions
          </h2>
        </div>

        <Link
          to="/history"
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View all
          <FaArrowRight className="text-[9px]" />
        </Link>

      </div>

      {recent.length === 0 ? (
        <div className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl bg-slate-50">

          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <FaStethoscope />
          </div>

          <p className="text-sm font-semibold text-slate-700">
            No predictions yet
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            Your assessments will appear here.
          </p>

        </div>
      ) : (
        <div className="space-y-2">

          {recent.map((prediction) => (
            <div
              key={prediction._id}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-slate-50
                px-3
                py-2.5
                transition
                hover:bg-slate-100
              "
            >

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaStethoscope className="text-sm" />
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold text-slate-800">
                    {prediction.disease}
                  </p>

                  <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-400">
                    <FaClock />
                    {new Date(
                      prediction.createdAt
                    ).toLocaleDateString()}
                  </p>

                </div>

              </div>

              <div className="ml-3 text-right">

                <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  {prediction.confidence}%
                </span>

                <p className="mt-0.5 text-[9px] text-slate-400">
                  confidence
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default RecentPredictions;