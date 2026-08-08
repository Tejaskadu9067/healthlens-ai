function Divider({ text = "OR" }) {
  return (
    <div className="flex items-center gap-4 my-8">

      <div className="flex-1 h-px bg-white/10" />

      <span className="text-slate-500 text-sm tracking-widest uppercase">

        {text}

      </span>

      <div className="flex-1 h-px bg-white/10" />

    </div>
  );
}

export default Divider;