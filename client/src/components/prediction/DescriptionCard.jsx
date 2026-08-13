import { Stethoscope } from "lucide-react";
import DashboardCard from "../common/DashboardCard";

function DescriptionCard({
  description,
  specialist,
}) {
  if (!description) return null;

  return (
    <DashboardCard>

      {/* Header */}

      <div>
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-neutral-600
          "
        >
          INSIGHT
        </p>

        <h3
          className="
            mt-1.5
            text-lg
            font-semibold
            tracking-[-0.025em]
            text-white
          "
        >
          About this condition
        </h3>
      </div>


      {/* Description */}

      <p
        className="
          mt-5
          text-sm
          leading-6
          text-neutral-400
        "
      >
        {description}
      </p>


      {/* Recommended Specialist */}

      {specialist && (
        <div
          className="
            mt-6
            border-t
            border-white/[0.07]
            pt-5
          "
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-neutral-600
            "
          >
            RECOMMENDED SPECIALIST
          </p>

          <div className="mt-3 flex items-center gap-3">

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.035]
              "
            >
              <Stethoscope
                className="h-4 w-4 text-neutral-400"
                strokeWidth={1.5}
              />
            </div>

            <span
              className="
                text-sm
                font-medium
                text-neutral-300
              "
            >
              {specialist}
            </span>

          </div>
        </div>
      )}

    </DashboardCard>
  );
}

export default DescriptionCard;