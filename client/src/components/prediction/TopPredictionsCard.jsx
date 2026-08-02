import DashboardCard from "../common/DashboardCard";

function TopPredictionsCard({ predictions }) {
  if (!predictions?.length) return null;

  return (
    <DashboardCard>

      <h3 className="text-xl font-semibold text-cyan-400 mb-5">
        🏆 Top Predictions
      </h3>

      <div className="space-y-4">

        {predictions.map((item, index) => (

          <div
            key={item.disease}
            className="flex justify-between items-center rounded-2xl bg-slate-800 p-4"
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

              <p className="text-sm text-slate-400">
                Probability Score
              </p>

            </div>

            <span className="text-cyan-400 font-bold">
              {item.confidence}%
            </span>

          </div>

        ))}

      </div>

    </DashboardCard>
  );
}

export default TopPredictionsCard;