import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <section>

      <Link
        to="/prediction"
        className="
          group
          flex
          items-center
          justify-between
          rounded-[24px]
          border
          border-white/[0.10]
          bg-[#080808]
          px-5
          py-4
          transition-all
          duration-300
          hover:border-white/[0.18]
          hover:bg-white/[0.025]
        "
      >

        {/* Left */}

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.10]
              bg-white/[0.035]
            "
          >
            <Plus
              className="h-4 w-4 text-neutral-400"
              strokeWidth={1.5}
            />
          </div>

          <div>

            <p className="text-sm font-medium text-white">
              Start a new assessment
            </p>

            <p className="mt-0.5 text-[11px] text-neutral-600">
              Analyze your symptoms with HealthLens AI
            </p>

          </div>

        </div>


        {/* Arrow */}

        <ArrowUpRight
          className="
            h-4
            w-4
            text-neutral-600
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-white
          "
          strokeWidth={1.5}
        />

      </Link>

    </section>
  );
}

export default QuickActions;