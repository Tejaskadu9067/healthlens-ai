function DashboardCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        shadow-xl
        backdrop-blur-xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default DashboardCard;