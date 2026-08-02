function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-cyan-400 rounded-full transition-all duration-700"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;