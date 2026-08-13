import {
  Stethoscope,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function RecentPredictions({ predictions = [] }) {
  const recent = predictions.slice(0, 3);

  return (
    <section
      className="
        rounded-[24px]
        border
        border-white/[0.10]
        bg-[#080808]
        p-5
        sm:p-6
      "
    >

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="mb-4 flex items-end justify-between gap-4">

        <div>

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-neutral-600
            "
          >
            ACTIVITY
          </p>

          <h2
            className="
              mt-1.5
              text-lg
              font-semibold
              tracking-[-0.025em]
              text-white
            "
          >
            Recent assessments
          </h2>

        </div>


        <Link
          to="/history"
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            text-xs
            font-medium
            text-neutral-500
            transition-colors
            duration-200
            hover:text-white
          "
        >
          View all

          <ArrowUpRight
            className="h-3.5 w-3.5"
            strokeWidth={1.5}
          />

        </Link>

      </div>


      {/* ======================================
          EMPTY STATE
      ====================================== */}

      {recent.length === 0 ? (

        <div
          className="
            flex
            min-h-[140px]
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            text-center
          "
        >

          <Stethoscope
            className="h-5 w-5 text-neutral-700"
            strokeWidth={1.4}
          />

          <p className="mt-3 text-sm font-medium text-neutral-400">
            No assessments yet
          </p>

          <p className="mt-1 text-[11px] text-neutral-700">
            Your predictions will appear here.
          </p>

        </div>

      ) : (

        /* ======================================
           PREDICTION LIST
        ====================================== */

        <div className="divide-y divide-white/[0.07]">

          {recent.map((prediction, index) => (

            <div
              key={prediction._id || `${prediction.disease}-${index}`}
              className="
                group
                flex
                items-center
                justify-between
                gap-4
                py-3.5
                transition-colors
                duration-200
                hover:bg-white/[0.02]
              "
            >

              {/* Left */}

              <div className="flex min-w-0 items-center gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                  "
                >
                  <Stethoscope
                    className="h-3.5 w-3.5 text-neutral-600"
                    strokeWidth={1.5}
                  />
                </div>


                <div className="min-w-0">

                  <p
                    className="
                      truncate
                      text-sm
                      font-medium
                      text-neutral-300
                      transition-colors
                      duration-200
                      group-hover:text-white
                    "
                  >
                    {prediction.disease}
                  </p>

                  <p
                    className="
                      mt-0.5
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
                      text-neutral-700
                    "
                  >
                    <Clock3
                      className="h-3 w-3"
                      strokeWidth={1.5}
                    />

                    {new Date(
                      prediction.createdAt
                    ).toLocaleDateString()}
                  </p>

                </div>

              </div>


              {/* Confidence */}

              <div className="shrink-0 text-right">

                <p
                  className="
                    text-sm
                    font-medium
                    text-neutral-300
                  "
                >
                  {prediction.confidence}%
                </p>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-neutral-700
                  "
                >
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