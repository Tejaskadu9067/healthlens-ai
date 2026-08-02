import SectionTitle from "../ui/SectionTitle";
import TechnologyCard from "../ui/TechnologyCard";

function TechnologyStack() {
  const technologies = [
    {
      icon: "⚛️",
      title: "React",
      description: "Modern frontend library for building interactive user interfaces.",
    },
    {
      icon: "🟢",
      title: "Node.js",
      description: "Fast JavaScript runtime powering backend services.",
    },
    {
      icon: "⚡",
      title: "Express.js",
      description: "Lightweight framework for RESTful APIs.",
    },
    {
      icon: "🍃",
      title: "MongoDB",
      description: "Flexible NoSQL database for storing healthcare data.",
    },
    {
      icon: "🐍",
      title: "Python",
      description: "Machine Learning models and AI prediction engine.",
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      description: "Predictive algorithms trained on medical datasets.",
    },
    {
      icon: "🎨",
      title: "Tailwind CSS",
      description: "Rapidly build beautiful responsive interfaces.",
    },
    {
      icon: "☁️",
      title: "REST API",
      description: "Seamless communication between frontend and backend.",
    },
  ];

  return (
    <section id="technology" className="bg-slate-900 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Technology"
          title="Built with Modern Technologies"
          description="HealthLens AI combines modern web technologies, machine learning, and scalable backend services to deliver fast and accurate disease predictions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
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