function SectionTitle({ badge, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {badge && (
        <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
          {badge}
        </p>
      )}

      <h2 className="text-5xl font-bold text-white mb-6">
        {title}
      </h2>

      {description && (
        <p className="text-slate-400 text-lg leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;