function SymptomTag({ children }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200">
      <span className="text-cyan-400">✓</span>
      <span>{children}</span>
    </div>
  );
}

export default SymptomTag;