import SectionTitle from "../ui/SectionTitle";
import StepCard from "../ui/StepCard";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter Symptoms",
      description:
        "Provide your symptoms through our easy-to-use form for AI analysis.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our Machine Learning model processes your symptoms using trained medical datasets.",
    },
    {
      number: "03",
      title: "Disease Prediction",
      description:
        "Receive the most probable disease prediction with confidence scores.",
    },
    {
      number: "04",
      title: "Recommendation",
      description:
        "Get health recommendations and guidance for your predicted condition.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-slate-900 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="How It Works"
          title="Simple AI Prediction Process"
          subtitle="Get accurate disease predictions in just four easy steps."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;