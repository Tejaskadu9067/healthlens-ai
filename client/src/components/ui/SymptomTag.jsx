function SymptomTag({ children }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        border-slate-700/80
        bg-slate-800/80
        px-3
        py-1.5
        text-slate-200
        transition-colors
        duration-200
        hover:border-cyan-400/30
        hover:bg-slate-700/80
      "
    >
      <span className="text-[10px] font-semibold text-cyan-400">
        ✓
      </span>

      <span className="text-[11px]">
        {children}
      </span>
    </div>
  );
}

export default SymptomTag;