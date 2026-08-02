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
    <section id="demo" className="bg-slate-950 py-28">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          badge="Live Demo"
          title="See HealthLens AI in Action"
          description="Experience how our AI predicts diseases from symptoms in just a few seconds."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* LEFT SIDE */}

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Selected Symptoms
            </h3>
            <p className="text-slate-400 mt-3 mb-8 max-w-md leading-7">
            Select common symptoms to see how HealthLens AI analyzes clinical data and
            predicts the most probable disease within seconds.
            </p>

            <div className="flex flex-wrap gap-4">

              {symptoms.map((symptom) => (
                <SymptomTag key={symptom}>
                  {symptom}
                </SymptomTag>
              ))}

            </div>

            <div className="mt-10">
              <Button>
                Predict Disease
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <Card className="p-8">

            <div className="flex justify-between items-center">

              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-cyan-300 text-sm">
                    AI Analysis Complete
                </span>
                </div>
                <p className="text-slate-400">
                  Prediction Result
                </p>

                <h3 className="text-4xl font-bold text-cyan-400 mt-2">
                  Influenza
                </h3>
              </div>

              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>

            </div>

            <div className="mt-10">

              <div className="flex justify-between mb-2">
                <span className="text-slate-300">
                  Confidence
                </span>

            <div className="flex justify-between text-sm text-slate-400 mt-3">
            <span>Processing Time </span>
            <span>0.82 sec</span>
            </div>

                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
            High Confidence
            </span>     
              </div>

              <ProgressBar value={96} />

            </div>

            <div className="mt-10 border-t border-slate-700 pt-8">

              <h4 className="text-white font-semibold mb-4">
                Recommendation
              </h4>

              <ul className="space-y-3 text-slate-300">

                <li>✔ Rest and stay hydrated</li>

                <li>✔ Consult a physician if symptoms worsen</li>

                <li>✔ Take prescribed medication</li>

              </ul>

            </div>

          </Card>

        </div>
      </div>
    </section>
  );
}

export default PredictionDemo;