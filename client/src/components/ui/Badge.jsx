function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-cyan-500/40
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
      "
    >
      {children}
    </span>
  );
}

export default Badge;