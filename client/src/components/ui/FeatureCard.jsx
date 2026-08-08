function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
        group
        rounded-[20px]
        border
        border-white/[0.08]
        bg-slate-900/60
        p-5
        shadow-[0_10px_35px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-cyan-400/25
        hover:bg-slate-900/80
      "
    >
      {/* Icon */}

      <div
        className="
          mb-4
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-cyan-400/10
          text-cyan-400
          transition-colors
          duration-200
          group-hover:bg-cyan-400/15
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="
          mb-2
          text-[16px]
          font-semibold
          tracking-tight
          text-white
          transition-colors
          duration-200
          group-hover:text-cyan-400
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p className="text-[12px] leading-5 text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;