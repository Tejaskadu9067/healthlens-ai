function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-[20px]
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(15,23,42,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;