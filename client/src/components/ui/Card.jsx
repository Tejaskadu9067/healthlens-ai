function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        shadow-lg
        p-6
        transition-all
        duration-300
        hover:shadow-cyan-500/10
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;