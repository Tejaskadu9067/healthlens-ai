function DashboardCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-[24px]
        border
        border-white/[0.10]
        bg-[#080808]
        p-5
        transition-colors
        duration-300
        hover:border-white/[0.16]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default DashboardCard;