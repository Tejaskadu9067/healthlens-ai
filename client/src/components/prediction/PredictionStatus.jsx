import DashboardCard from "../common/DashboardCard";

function PredictionStatus({ selectedCount }) {
  return (
    <DashboardCard>

      <h3 className="text-xl font-semibold text-cyan-400 mb-5">
        📊 Prediction Status
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between rounded-2xl bg-slate-800 p-4">

          <span>Symptoms Selected</span>

          <span className="text-cyan-400 font-semibold">
            {selectedCount}
          </span>

        </div>

        <div className="flex justify-between rounded-2xl bg-slate-800 p-4">

          <span>AI Engine</span>

          <span className="text-green-400 font-semibold">
            Ready
          </span>

        </div>

      </div>

    </DashboardCard>
  );
}

export default PredictionStatus;