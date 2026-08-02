import DashboardCard from "../common/DashboardCard";

function DescriptionCard({
  description,
  specialist,
}) {
  if (!description) return null;

  return (
    <DashboardCard>

      <h3 className="text-xl font-semibold text-cyan-400 mb-5">
        📖 Disease Information
      </h3>

      <div className="space-y-6">

        <div>

          <h4 className="text-sm uppercase tracking-wide text-slate-500 mb-2">
            Description
          </h4>

          <p className="text-slate-300 leading-7">
            {description}
          </p>

        </div>

        <div className="border-t border-slate-800 pt-5">

          <h4 className="text-sm uppercase tracking-wide text-slate-500 mb-2">
            Recommended Specialist
          </h4>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
              👨‍⚕️
            </div>

            <span className="text-white font-medium">
              {specialist}
            </span>

          </div>

        </div>

      </div>

    </DashboardCard>
  );
}

export default DescriptionCard;