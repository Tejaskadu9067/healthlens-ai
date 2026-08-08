import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import ProgressBar from "../ui/ProgressBar";
import SymptomTag from "../ui/SymptomTag";

function PredictionDemo() {
  const symptoms = [
    "Fever",
    "Headache",
    "Fatigue",
    "Body Pain",
    "Cough",
    "Nausea",
  ];

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Section Title */}

        <SectionTitle
          badge="Live Demo"
          title="See HealthLens AI in Action"
          description="Experience how our AI predicts diseases from symptoms in just a few seconds."
        />

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div>

            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
              Selected Symptoms
            </h3>

            <p className="mb-5 max-w-md text-[12px] leading-5 text-slate-400">
              Select common symptoms to see how HealthLens AI analyzes
              clinical data and predicts the most probable disease
              within seconds.
            </p>

            {/* Symptoms */}

            <div className="flex flex-wrap gap-2">

              {symptoms.map((symptom) => (
                <SymptomTag key={symptom}>
                  {symptom}
                </SymptomTag>
              ))}

            </div>

            {/* Button */}

            <div className="mt-6">
              <Button className="rounded-xl px-5 py-2.5 text-sm">
                Predict Disease
              </Button>
            </div>

          </div>


          {/* =========================
              RIGHT SIDE
          ========================== */}

          <Card className="p-5 sm:p-6">

            {/* Header */}

            <div className="flex items-start justify-between gap-4">

              <div>

                {/* Analysis Status */}

                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5">

                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <span className="text-[10px] font-medium text-cyan-300">
                    AI Analysis Complete
                  </span>

                </div>

                <p className="text-[11px] text-slate-400">
                  Prediction Result
                </p>

                <h3 className="mt-1 text-3xl font-bold tracking-tight text-cyan-400">
                  Influenza
                </h3>

              </div>

              <div className="h-2 w-2 shrink-0 rounded-full bg-green-400" />

            </div>


            {/* Confidence */}

            <div className="mt-6">

              <div className="flex items-center justify-between">

                <span className="text-xs text-slate-300">
                  Confidence
                </span>

                <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-[10px] font-semibold text-green-400">
                  High Confidence
                </span>

              </div>

              <ProgressBar value={96} />

              {/* Processing Time */}

              <div className="mt-2.5 flex justify-between text-[10px] text-slate-400">

                <span>
                  Processing Time
                </span>

                <span>
                  0.82 sec
                </span>

              </div>

            </div>


            {/* Recommendation */}

            <div className="mt-6 border-t border-slate-700/70 pt-5">

              <h4 className="mb-3 text-sm font-semibold text-white">
                Recommendation
              </h4>

              <ul className="space-y-2 text-[11px] leading-5 text-slate-300">

                <li>
                  ✔ Rest and stay hydrated
                </li>

                <li>
                  ✔ Consult a physician if symptoms worsen
                </li>

                <li>
                  ✔ Take prescribed medication
                </li>

              </ul>

            </div>

          </Card>

        </div>

      </div>
    </section>
  );
}

export default PredictionDemo;