import { X } from "lucide-react";

function formatSymptom(symptom) {
  return symptom
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function SelectedSymptoms({ symptoms, removeSymptom }) {
  return (
    <div className="flex flex-wrap gap-2.5">

      {symptoms.map((symptom) => (

        <div
          key={symptom}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/[0.10]
            bg-white/[0.035]
            px-3.5
            py-2
            text-sm
            text-neutral-300
            transition-all
            duration-200
            hover:border-white/[0.20]
            hover:bg-white/[0.06]
          "
        >

          <span>
            {formatSymptom(symptom)}
          </span>


          <button
            type="button"
            onClick={() => removeSymptom(symptom)}
            aria-label={`Remove ${formatSymptom(symptom)}`}
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              text-neutral-600
              transition-all
              duration-200
              hover:bg-white/[0.10]
              hover:text-white
            "
          >

            <X
              size={12}
              strokeWidth={1.7}
            />

          </button>

        </div>

      ))}

    </div>
  );
}

export default SelectedSymptoms;