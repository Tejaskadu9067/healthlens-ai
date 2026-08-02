function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
      group
      bg-slate-900/70
      border
      border-slate-800
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:border-cyan-400
      hover:-translate-y-2
      hover:shadow-2xl
      hover:shadow-cyan-500/20
      "
    >
      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      <p className="text-slate-400 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;