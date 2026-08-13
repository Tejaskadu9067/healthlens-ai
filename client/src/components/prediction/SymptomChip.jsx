function SymptomChip({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        items-center
        rounded-xl
        border
        border-white/[0.10]
        bg-white/[0.035]
        px-3.5
        py-2
        text-sm
        text-neutral-300
        transition-all
        duration-200
        hover:border-white/[0.20]
        hover:bg-white/[0.07]
        hover:text-white
        active:scale-[0.98]
      "
    >
      {label}
    </button>
  );
}

export default SymptomChip;