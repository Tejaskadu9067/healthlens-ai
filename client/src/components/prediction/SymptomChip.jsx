function SymptomChip({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-5
        py-3
        rounded-full
        bg-slate-900
        border
        border-slate-700
        text-slate-300
        hover:bg-cyan-500
        hover:text-white
        hover:border-cyan-500
        transition-all
        duration-300
      "
    >
      {label}
    </button>
  );
}

export default SymptomChip;