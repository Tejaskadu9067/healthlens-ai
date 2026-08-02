import FeatureCard from "../ui/FeatureCard";
import { FEATURES } from "../../constants/features";

function Features() {
  return (
    <section id="features" className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Why Choose HealthLens AI
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Combining Artificial Intelligence, Machine Learning and
            Explainable AI to deliver trustworthy healthcare insights.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

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