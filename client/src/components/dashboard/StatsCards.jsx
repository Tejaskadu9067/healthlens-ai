import {
  FaNotesMedical,
  FaBullseye,
  FaVirus,
  FaCalendarAlt,
} from "react-icons/fa";

function StatsCards({
  total = 0,
  averageConfidence = 0,
  uniqueDiseases = 0,
  predictionsThisMonth = 0,
}) {
  const stats = [
    {
      title: "Predictions",
      value: total,
      subtitle: "Total assessments",
      icon: <FaNotesMedical />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Confidence",
      value: `${averageConfidence}%`,
      subtitle: "Average AI confidence",
      icon: <FaBullseye />,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      title: "Diseases",
      value: uniqueDiseases,
      subtitle: "Conditions identified",
      icon: <FaVirus />,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "This Month",
      value: predictionsThisMonth,
      subtitle: "Predictions this month",
      icon: <FaCalendarAlt />,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-[20px]
            bg-white
            px-4
            py-4
            shadow-[0_8px_30px_rgba(15,23,42,0.08)]
            transition-transform
            duration-200
            hover:-translate-y-0.5
          "
        >
          <div className="flex items-start justify-between gap-3">

            <div>
              <p className="text-xs font-medium text-slate-400">
                {stat.title}
              </p>

              <p className="mt-1 text-[26px] font-bold tracking-tight text-slate-800">
                {stat.value}
              </p>

              <p className="mt-0.5 text-[11px] text-slate-400">
                {stat.subtitle}
              </p>
            </div>

            <div
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                ${stat.iconBg}
                ${stat.iconColor}
              `}
            >
              {stat.icon}
            </div>

          </div>
        </div>
      ))}

    </section>
  );
}

export default StatsCards;