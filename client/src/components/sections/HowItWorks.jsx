import {
  Search,
  Brain,
  Sparkles,
  ArrowDown,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      label: "DESCRIBE",
      icon: Search,
      title: "Tell us what you're feeling.",
      description:
        "Select the symptoms you're experiencing. HealthLens keeps the process simple, so you can focus on what matters.",
    },
    {
      number: "02",
      label: "ANALYSE",
      icon: Brain,
      title: "HealthLens does the thinking.",
      description:
        "Our trained machine learning model analyses your selected symptoms and evaluates the most probable conditions.",
    },
    {
      number: "03",
      label: "UNDERSTAND",
      icon: Sparkles,
      title: "See what it may indicate.",
      description:
        "Receive a prediction with confidence, disease information, precautions and guidance to help you understand the result.",
    },
  ];

  return (
    <section className="relative bg-black px-6 py-36 sm:px-10 lg:px-16">

      <div className="mx-auto max-w-[1400px]">

        {/* ======================================
            INTRO
        ====================================== */}

        <div className="max-w-4xl">

          <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
            HOW HEALTHLENS WORKS
          </p>

          <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[82px]">
            From symptoms
            <span className="block text-neutral-500">
              to understanding.
            </span>
          </h2>

          <p className="mt-9 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            A simple three-step experience designed to turn your
            symptoms into something you can understand.
          </p>

        </div>


        {/* ======================================
            PROCESS
        ====================================== */}

        <div className="relative mt-28">

          {/* Vertical guide line */}

          <div
            className="
              absolute
              left-[27px]
              top-8
              hidden
              h-[calc(100%-64px)]
              w-px
              bg-gradient-to-b
              from-white/20
              via-white/10
              to-transparent
              lg:block
            "
          />


          {/* Steps */}

          <div className="space-y-6 lg:space-y-8">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/[0.10]
                    bg-[#080808]
                    transition-all
                    duration-500
                    hover:border-white/[0.20]
                    hover:bg-[#0b0b0b]
                  "
                >

                  <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[90px_100px_1fr_1fr] lg:px-12 lg:py-12">

                    {/* NUMBER */}

                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.12] bg-black">

                      <span className="text-xs font-medium tracking-[0.15em] text-neutral-400">
                        {step.number}
                      </span>

                    </div>


                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.10]
                        bg-white/[0.025]
                        transition-all
                        duration-500
                        group-hover:border-white/[0.25]
                        group-hover:bg-white/[0.06]
                      "
                    >
                      <Icon
                        className="h-5 w-5 text-neutral-300"
                        strokeWidth={1.4}
                      />
                    </div>


                    {/* TITLE */}

                    <div>

                      <p className="mb-3 text-[9px] font-medium tracking-[0.25em] text-neutral-600">
                        {step.label}
                      </p>

                      <h3
                        className="
                          max-w-[430px]
                          text-3xl
                          font-semibold
                          leading-[1.05]
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                        "
                      >
                        {step.title}
                      </h3>

                    </div>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        max-w-[400px]
                        text-sm
                        leading-7
                        text-neutral-500
                        sm:text-[15px]
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>

        </div>


        {/* ======================================
            TRANSITION
        ====================================== */}

        <div className="mt-20 flex flex-col items-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-600">
            SIMPLE BY DESIGN
          </p>

          <ArrowDown
            className="mt-5 h-5 w-5 text-neutral-700"
            strokeWidth={1}
          />

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;