import { CheckCircle2 } from "lucide-react";
import DashboardCard from "../common/DashboardCard";

function PredictionStatus({ selectedCount }) {
  return (
    <DashboardCard className="!p-4">

      <div className="flex items-center justify-between gap-4">

        {/* Symptoms */}

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
            "
          >
            <span className="text-xs text-neutral-400">
              {selectedCount}
            </span>
          </div>

          <div>

            <p className="text-xs font-medium text-neutral-300">
              Symptoms selected
            </p>

            <p className="mt-0.5 text-[10px] text-neutral-600">
              Current assessment
            </p>

          </div>

        </div>


        {/* AI Engine */}

        <div className="flex items-center gap-2">

          <CheckCircle2
            className="h-4 w-4 text-neutral-400"
            strokeWidth={1.5}
          />

          <span className="text-xs text-neutral-500">
            AI engine ready
          </span>

        </div>

      </div>

    </DashboardCard>
  );
}

export default PredictionStatus;