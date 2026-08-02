import DashboardCard from "../common/DashboardCard";

function TreatmentCard({
  precautions,
  medicines,
}) {
  if (!precautions && !medicines) return null;

  return (
    <DashboardCard>

      <h3 className="text-xl font-semibold text-cyan-400 mb-5">
        🛡 Precautions
      </h3>

      <div className="space-y-3">

        {precautions?.map((item) => (

          <div
            key={item}
            className="rounded-xl bg-slate-800 p-4"
          >
            ✅ {item}
          </div>

        ))}

      </div>

      <h3 className="text-xl font-semibold text-cyan-400 mt-10 mb-5">
        💊 Medicines
      </h3>

      <div className="flex flex-wrap gap-3">

        {medicines?.map((medicine) => (

          <span
            key={medicine}
            className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300"
          >
            {medicine}
          </span>

        ))}

      </div>

    </DashboardCard>
  );
}

export default TreatmentCard;