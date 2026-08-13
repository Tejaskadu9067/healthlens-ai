import { ShieldCheck, Pill } from "lucide-react";
import DashboardCard from "../common/DashboardCard";

function TreatmentCard({
  precautions,
  medicines,
}) {
  const hasPrecautions =
    Array.isArray(precautions) && precautions.length > 0;

  const hasMedicines =
    Array.isArray(medicines) && medicines.length > 0;

  if (!hasPrecautions && !hasMedicines) return null;

  return (
    <DashboardCard>

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex items-center justify-between">

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
            CARE GUIDANCE
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
            What to consider
          </h3>

        </div>

        <ShieldCheck
          className="h-5 w-5 text-neutral-500"
          strokeWidth={1.4}
        />

      </div>


      {/* ======================================
          PRECAUTIONS
      ====================================== */}

      {hasPrecautions && (

        <div className="mt-5">

          <div className="mb-3 flex items-center gap-2">

            <ShieldCheck
              className="h-3.5 w-3.5 text-neutral-500"
              strokeWidth={1.5}
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-neutral-600
              "
            >
              Precautions
            </span>

          </div>


          <div className="space-y-2">

            {precautions.map((item, index) => (

              <div
                key={`${item}-${index}`}
                className="
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-3.5
                  py-2.5
                  text-sm
                  leading-5
                  text-neutral-400
                "
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      )}


      {/* ======================================
          MEDICINES
      ====================================== */}

      {hasMedicines && (

        <div
          className={`
            ${hasPrecautions ? "mt-6 border-t border-white/[0.07] pt-5" : "mt-5"}
          `}
        >

          <div className="mb-3 flex items-center gap-2">

            <Pill
              className="h-3.5 w-3.5 text-neutral-500"
              strokeWidth={1.5}
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-neutral-600
              "
            >
              Medicines
            </span>

          </div>


          <div className="flex flex-wrap gap-2">

            {medicines.map((medicine, index) => (

              <span
                key={`${medicine}-${index}`}
                className="
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-3
                  py-1.5
                  text-xs
                  text-neutral-400
                "
              >
                {medicine}
              </span>

            ))}

          </div>

          <p className="mt-3 text-[10px] leading-4 text-neutral-700">
            Medication information is provided for reference only.
            Consult a qualified healthcare professional before taking
            any medicine.
          </p>

        </div>

      )}

    </DashboardCard>
  );
}

export default TreatmentCard;