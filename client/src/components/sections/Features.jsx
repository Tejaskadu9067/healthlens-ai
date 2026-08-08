import FeatureCard from "../ui/FeatureCard";
import { FEATURES } from "../../constants/features";

function Features() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Section Header */}

        <div className="mx-auto mb-10 max-w-2xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Features
          </p>

          <h2 className="mt-2.5 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
            Why Choose HealthLens AI
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Combining Artificial Intelligence, Machine Learning and
            Explainable AI to deliver trustworthy healthcare insights.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;