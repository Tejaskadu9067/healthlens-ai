import { ArrowRight } from "lucide-react";

function PredictButton({
  onClick,
  disabled,
  loading = false,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className="
        group
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-white
        px-5
        py-3.5
        text-sm
        font-semibold
        tracking-[-0.01em]
        text-black
        transition-all
        duration-300
        hover:bg-neutral-200
        active:scale-[0.99]
        disabled:cursor-not-allowed
        disabled:bg-neutral-800
        disabled:text-neutral-600
      "
    >

      {loading ? (

        <div className="flex items-center gap-3">

          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-neutral-400
              border-t-transparent
            "
          />

          <span>
            Analysing symptoms...
          </span>

        </div>

      ) : disabled ? (

        <span>
          Select at least 3 symptoms
        </span>

      ) : (

        <>
          <span>
            Analyse symptoms
          </span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            strokeWidth={1.8}
          />
        </>

      )}

    </button>
  );
}

export default PredictButton;