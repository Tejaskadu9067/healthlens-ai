import {
  FaPlus,
  FaHistory,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">

      <Link
        to="/prediction"
        className="
          group
          flex
          items-center
          justify-between
          rounded-[20px]
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-5
          py-3.5
          shadow-[0_8px_30px_rgba(37,99,235,0.16)]
          transition
          duration-200
          hover:-translate-y-0.5
        "
      >
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
            <FaPlus className="text-sm" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              New Prediction
            </p>

            <p className="text-[11px] text-blue-100">
              Analyze your symptoms
            </p>
          </div>

        </div>

        <FaArrowRight className="text-xs text-white transition-transform group-hover:translate-x-1" />
      </Link>

      <Link
        to="/history"
        className="
          group
          flex
          items-center
          justify-between
          rounded-[20px]
          bg-white
          px-5
          py-3.5
          shadow-[0_8px_30px_rgba(15,23,42,0.08)]
          transition
          duration-200
          hover:-translate-y-0.5
        "
      >
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FaHistory className="text-sm" />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Prediction History
            </p>

            <p className="text-[11px] text-slate-400">
              Review previous assessments
            </p>
          </div>

        </div>

        <FaArrowRight className="text-xs text-slate-400 transition-transform group-hover:translate-x-1" />
      </Link>

    </section>
  );
}

export default QuickActions;