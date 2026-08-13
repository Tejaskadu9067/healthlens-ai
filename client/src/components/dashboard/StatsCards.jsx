import { BarChart3, Brain, Activity, CalendarDays } from "lucide-react";

function StatsCards({
  total = 0,
  averageConfidence = 0,
  uniqueDiseases = 0,
  predictionsThisMonth = 0,
}) {
  const stats = [
    {
      label: "Assessments",
      value: total,
      description: "Total predictions",
      icon: BarChart3,
    },
    {
      label: "Confidence",
      value: `${averageConfidence}%`,
      description: "Average AI confidence",
      icon: Brain,
    },
    {
      label: "Conditions",
      value: uniqueDiseases,
      description: "Conditions identified",
      icon: Activity,
    },
    {
      label: "This month",
      value: predictionsThisMonth,
      description: "Recent assessments",
      icon: CalendarDays,
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="
              group
              rounded-[20px]
              border
              border-white/[0.09]
              bg-[#080808]
              px-4
              py-4
              transition-colors
              duration-300
              hover:border-white/[0.16]
              hover:bg-white/[0.025]
            "
          >

            {/* Top */}

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-neutral-600
                "
              >
                {stat.label}
              </p>

              <Icon
                className="
                  h-4
                  w-4
                  text-neutral-700
                  transition-colors
                  duration-300
                  group-hover:text-neutral-400
                "
                strokeWidth={1.5}
              />

            </div>


            {/* Value */}

            <p
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
              "
            >
              {stat.value}
            </p>


            {/* Description */}

            <p
              className="
                mt-1
                text-[11px]
                text-neutral-600
              "
            >
              {stat.description}
            </p>

          </div>
        );
      })}

    </section>
  );
}

export default StatsCards;