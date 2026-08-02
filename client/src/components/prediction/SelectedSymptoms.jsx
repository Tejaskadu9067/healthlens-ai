import { Check, X } from "lucide-react";

function formatSymptom(symptom) {
  return symptom
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function SelectedSymptoms({ symptoms, removeSymptom }) {
  return (
    <div className="flex flex-wrap gap-4">

      {symptoms.map((symptom) => (

        <div
          key={symptom}
          className="
            group
            flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/30
            text-cyan-300
            transition-all
            duration-300
            hover:bg-red-500/10
            hover:border-red-500/40
            hover:shadow-lg
            hover:shadow-red-500/10
          "
        >

          <Check
            size={16}
            className="text-cyan-400 group-hover:text-red-300"
          />

          <span className="font-medium">
            {formatSymptom(symptom)}
          </span>

          <button
            onClick={() => removeSymptom(symptom)}
            className="
              ml-1
              rounded-full
              p-1
              transition-all
              hover:bg-red-500
              hover:text-white
            "
          >
            <X size={15} />
          </button>

        </div>

      ))}

    </div>
  );
}

export default SelectedSymptoms;