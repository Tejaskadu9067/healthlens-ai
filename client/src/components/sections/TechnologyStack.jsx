import SectionTitle from "../ui/SectionTitle";
import TechnologyCard from "../ui/TechnologyCard";

function TechnologyStack() {
  const technologies = [
    {
      icon: "⚛️",
      title: "React",
      description:
        "Modern frontend library for building interactive user interfaces.",
    },
    {
      icon: "🟢",
      title: "Node.js",
      description:
        "Fast JavaScript runtime powering backend services.",
    },
    {
      icon: "⚡",
      title: "Express.js",
      description:
        "Lightweight framework for RESTful APIs.",
    },
    {
      icon: "🍃",
      title: "MongoDB",
      description:
        "Flexible NoSQL database for storing healthcare data.",
    },
    {
      icon: "🐍",
      title: "Python",
      description:
        "Machine Learning models and AI prediction engine.",
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      description:
        "Predictive algorithms trained on medical datasets.",
    },
    {
      icon: "🎨",
      title: "Tailwind CSS",
      description:
        "Rapidly build beautiful responsive interfaces.",
    },
    {
      icon: "☁️",
      title: "REST API",
      description:
        "Seamless communication between frontend and backend.",
    },
  ];

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        <SectionTitle
          badge="Technology"
          title="Built With Modern Technology"
          subtitle="A modern technology stack powering HealthLens AI."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.title}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnologyStack;