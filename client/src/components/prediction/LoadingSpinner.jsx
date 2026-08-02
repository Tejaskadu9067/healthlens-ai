function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">

      <div className="relative w-20 h-20">

        <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>

        <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>

      </div>

      <h3 className="text-xl font-semibold mt-6">
        AI is analyzing your symptoms...
      </h3>

      <p className="text-slate-400 mt-2 text-center">
        This usually takes less than a second.
      </p>

    </div>
  );
}

export default LoadingSpinner;