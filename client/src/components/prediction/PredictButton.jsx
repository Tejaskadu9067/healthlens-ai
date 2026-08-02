function PredictButton({
  onClick,
  disabled,
  loading = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="
        w-full
        rounded-2xl
        py-5
        text-lg
        font-semibold
        transition-all
        duration-300
        shadow-lg
        disabled:cursor-not-allowed
        disabled:opacity-60
        enabled:hover:scale-[1.02]
        enabled:hover:shadow-cyan-500/30
        enabled:active:scale-100
        bg-linear-to-r
        from-cyan-500
        to-blue-600
        text-white
      "
    >
      {loading ? (
        <div className="flex items-center justify-center gap-3">

          <div
            className="
              w-5
              h-5
              border-2
              border-white
              border-t-transparent
              rounded-full
              animate-spin
            "
          />

          <span>Analyzing Symptoms...</span>

        </div>
      ) : disabled ? (
        "Select at Least 3 Symptoms"
      ) : (
        "Predict Disease"
      )}
    </button>
  );
}

export default PredictButton;