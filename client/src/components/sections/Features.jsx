import {
  Brain,
  ScanSearch,
  History,
  ArrowUpRight,
} from "lucide-react";

function Features() {
  const features = [
    {
      number: "01",
      label: "INTELLIGENCE",
      icon: Brain,
      title: "AI disease prediction.",
      description:
        "Analyse your selected symptoms with a trained machine learning model to identify the most probable condition.",
    },
    {
      number: "02",
      label: "CLARITY",
      icon: ScanSearch,
      title: "Results you can understand.",
      description:
        "Go beyond a prediction. HealthLens presents confidence, disease information, precautions and recommended specialists.",
    },
    {
      number: "03",
      label: "CONTINUITY",
      icon: History,
      title: "Your health, remembered.",
      description:
        "Keep your previous assessments organised so you can revisit your health insights whenever you need them.",
    },
  ];

  return (
    <section className="relative bg-black px-5 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ======================================
            SECTION INTRO
        ====================================== */}

        <div className="max-w-3xl">

          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
            THE HEALTHLENS EXPERIENCE
          </p>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
            Intelligence,
            <span className="block text-neutral-500">
              designed around you.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            HealthLens brings machine learning and health information
            together in one simple experience — designed to help you
            understand your symptoms, not overwhelm you with them.
          </p>

        </div>


        {/* ======================================
            FEATURE GRID
        ====================================== */}

        <div className="mt-24 grid gap-px overflow-hidden rounded-[32px] border border-white/[0.10] bg-white/[0.10] lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="
                  group
                  relative
                  min-h-[420px]
                  bg-[#080808]
                  p-8
                  transition-all
                  duration-500
                  hover:bg-[#0d0d0d]
                  sm:p-10
                  lg:p-12
                "
              >

                {/* Top information */}

                <div className="flex items-center justify-between">

                  <span className="text-[11px] font-medium tracking-[0.2em] text-neutral-600">
                    {feature.number}
                  </span>

                  <span className="text-[9px] font-medium tracking-[0.22em] text-neutral-600">
                    {feature.label}
                  </span>

                </div>


                {/* Icon */}

                <div
                  className="
                    mt-20
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.12]
                    bg-white/[0.04]
                    transition-all
                    duration-500
                    group-hover:border-white/[0.25]
                    group-hover:bg-white/[0.08]
                  "
                >
                  <Icon
                    className="
                      h-5
                      w-5
                      text-neutral-300
                      transition-transform
                      duration-500
                      group-hover:-translate-y-0.5
                    "
                    strokeWidth={1.5}
                  />
                </div>


                {/* Title */}

                <h3
                  className="
                    mt-8
                    max-w-[280px]
                    text-2xl
                    font-semibold
                    leading-tight
                    tracking-[-0.035em]
                    text-white
                    sm:text-3xl
                  "
                >
                  {feature.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-[320px]
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  {feature.description}
                </p>


                {/* Arrow */}

                <div
                  className="
                    absolute
                    bottom-10
                    left-10
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    text-neutral-600
                    transition-all
                    duration-500
                    group-hover:border-white/[0.2]
                    group-hover:text-white
                    sm:left-12
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-500
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                    strokeWidth={1.5}
                  />
                </div>

              </article>
            );
          })}

        </div>


        {/* ======================================
            CLOSING STATEMENT
        ====================================== */}

        <div className="mt-24 border-t border-white/[0.08] pt-10">

          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.025em] text-neutral-300 sm:text-3xl">
            Less complexity.
            <span className="text-neutral-600">
              {" "}
              More understanding.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Features;