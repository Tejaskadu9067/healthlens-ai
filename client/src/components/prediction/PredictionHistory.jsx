import { ChevronRight, Clock3, Trash2 } from "lucide-react";
import DashboardCard from "../common/DashboardCard";

function formatSymptom(symptom) {
  return symptom
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function PredictionHistory({
  history,
  onSelect,
  onClear,
}) {
  const hasHistory = history?.length > 0;

  return (
    <DashboardCard>

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex items-center justify-between">

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
            HISTORY
          </p>

          <h3
            className="
              mt-1.5
              text-lg
              font-semibold
              tracking-[-0.025em]
              text-white
            "
          >
            Previous assessments
          </h3>

        </div>


        {hasHistory && (

          <button
            type="button"
            onClick={onClear}
            className="
              flex
              items-center
              gap-1.5
              rounded-lg
              px-2.5
              py-1.5
              text-[11px]
              text-neutral-600
              transition-colors
              duration-200
              hover:bg-white/[0.05]
              hover:text-neutral-300
            "
          >
            <Trash2
              className="h-3.5 w-3.5"
              strokeWidth={1.5}
            />

            Clear

          </button>

        )}

      </div>


      {/* ======================================
          EMPTY STATE
      ====================================== */}

      {!hasHistory ? (

        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            px-4
            py-3
          "
        >

          <Clock3
            className="h-4 w-4 shrink-0 text-neutral-700"
            strokeWidth={1.5}
          />

          <p className="text-xs text-neutral-600">
            Your previous assessments will appear here.
          </p>

        </div>

      ) : (

        /* ======================================
           HISTORY LIST
        ====================================== */

        <div className="mt-4 divide-y divide-white/[0.07]">

          {history.map((item, index) => (

            <button
              key={`${item.timestamp || "prediction"}-${index}`}
              type="button"
              onClick={() => onSelect(item)}
              className="
                group
                flex
                w-full
                items-center
                gap-4
                py-3.5
                text-left
                transition-colors
                duration-200
                hover:bg-white/[0.025]
              "
            >

              {/* Index */}

              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  text-[10px]
                  text-neutral-700
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* Information */}

              <div className="min-w-0 flex-1">

                <div className="flex items-center justify-between gap-4">

                  <span
                    className="
                      truncate
                      text-sm
                      font-medium
                      text-neutral-300
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    {item.disease}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-xs
                      text-neutral-600
                    "
                  >
                    {item.confidence}%
                  </span>

                </div>


                <p
                  className="
                    mt-1
                    truncate
                    text-[11px]
                    text-neutral-700
                  "
                >
                  {item.symptoms
                    ?.slice(0, 3)
                    .map(formatSymptom)
                    .join(", ")}

                  {item.symptoms?.length > 3 && " + more"}
                </p>

              </div>


              {/* Arrow */}

              <ChevronRight
                className="
                  h-4
                  w-4
                  shrink-0
                  text-neutral-700
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:text-neutral-400
                "
                strokeWidth={1.5}
              />

            </button>

          ))}

        </div>

      )}

    </DashboardCard>
  );
}

export default PredictionHistory;