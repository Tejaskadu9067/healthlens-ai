function TechnologyCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900
border border-slate-800
rounded-2xl
p-6
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
      <div className="text-5xl mb-5">{icon}</div>

      <h3 className="text-white text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-6">
        {description}
      </p>
    </div>
  );
}

export default TechnologyCard;