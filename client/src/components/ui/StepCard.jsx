function StepCard({ number, title, description }) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      
      {/* Step Number */}
      <div className="w-14 h-14 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xl font-bold mb-6">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 leading-7">
        {description}
      </p>
    </div>
  );
}

export default StepCard;