import DashboardCard from "../common/DashboardCard";

function TopPredictionsCard({ predictions }) {
  if (!predictions?.length) return null;

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
            MODEL OUTPUT
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
            Other possibilities
          </h3>

        </div>

        <span className="text-[10px] text-neutral-600">
          {predictions.length} results
        </span>

      </div>


      {/* ======================================
          PREDICTIONS
      ====================================== */}

      <div className="mt-5 divide-y divide-white/[0.07]">

        {predictions.map((item, index) => {

          const confidence = Number(item.confidence) || 0;

          return (
            <div
              key={`${item.disease}-${index}`}
              className="
                flex
                items-center
                justify-between
                gap-4
                py-3.5
              "
            >

              {/* Rank + Disease */}

              <div className="flex min-w-0 items-center gap-3">

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
                    font-medium
                    text-neutral-600
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">

                  <p
                    className="
                      truncate
                      text-sm
                      font-medium
                      text-neutral-300
                    "
                  >
                    {item.disease}
                  </p>

                  <p className="mt-0.5 text-[10px] text-neutral-700">
                    Probability
                  </p>

                </div>

              </div>


              {/* Confidence */}

              <span
                className="
                  shrink-0
                  text-sm
                  font-medium
                  text-neutral-300
                "
              >
                {confidence}%
              </span>

            </div>
          );
        })}

      </div>

    </DashboardCard>
  );
}

export default TopPredictionsCard;