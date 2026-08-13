import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

import {
  predictDisease,
  getSymptoms,
} from "../../services/predictionService";

import SymptomSearch from "../../components/prediction/SymptomSearch";
import SelectedSymptoms from "../../components/prediction/SelectedSymptoms";
import PredictButton from "../../components/prediction/PredictButton";
import PredictionDashboard from "../../components/prediction/PredictionDashboard";

function Prediction() {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSymptoms() {
      try {
        const symptoms = await getSymptoms();
        setSymptoms(symptoms);
      } catch (error) {
        console.error("Unable to load symptoms:", error);
        setError("Unable to load symptoms from the AI server.");
      }
    }

    loadSymptoms();
  }, []);

  const filteredSymptoms = symptoms.filter(
    (symptom) =>
      symptom.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedSymptoms.includes(symptom)
  );

  const addSymptom = (symptom) => {
    setSelectedSymptoms((prev) => [...prev, symptom]);
    setSearchTerm("");
    setPrediction(null);
    setError("");
  };

  const removeSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.filter((item) => item !== symptom)
    );

    setPrediction(null);
    setError("");
  };

  const clearSymptoms = () => {
    setSelectedSymptoms([]);
    setPrediction(null);
    setSearchTerm("");
    setError("");
  };

  const selectHistory = (item) => {
    setPrediction(item);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  async function handlePrediction() {
    if (selectedSymptoms.length < 3) return;

    try {
      setLoading(true);
      setError("");

      const result = await predictDisease(selectedSymptoms);

      const newPrediction = {
        ...result.prediction,
        symptoms: [...selectedSymptoms],
        timestamp: new Date().toLocaleString(),
      };

      setPrediction(newPrediction);

      setHistory((prev) => {
        const updated = [newPrediction, ...prev];
        return updated.slice(0, 5);
      });
    } catch (error) {
      console.error(error);
      setError("Unable to connect to the prediction server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="px-6 pb-20 pt-28 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-4xl">

            <p
              className="
                mb-7
                text-[11px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-neutral-500
              "
            >
              AI HEALTH ASSESSMENT
            </p>

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                lg:text-[82px]
              "
            >
              Tell us what
              <span className="block text-neutral-500">
                you're feeling.
              </span>
            </h1>

            <p
              className="
                mt-9
                max-w-2xl
                text-base
                leading-7
                text-neutral-500
                sm:text-lg
              "
            >
              Select the symptoms you're experiencing and let
              HealthLens analyse them using its trained machine
              learning model.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          ASSESSMENT AREA
      ================================================== */}

      <section className="px-6 pb-32 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">

            {/* ==================================================
                LEFT — SYMPTOM SELECTION
            ================================================== */}

            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.10]
                bg-[#080808]
              "
            >

              {/* Header */}

              <div
                className="
                  border-b
                  border-white/[0.08]
                  px-7
                  py-6
                  sm:px-9
                "
              >

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
                      STEP 01
                    </p>

                    <h2
                      className="
                        mt-2
                        text-xl
                        font-semibold
                        tracking-[-0.025em]
                        text-white
                      "
                    >
                      Select your symptoms
                    </h2>

                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.10]
                      bg-white/[0.025]
                    "
                  >
                    <Sparkles
                      className="h-4 w-4 text-neutral-400"
                      strokeWidth={1.4}
                    />
                  </div>

                </div>

              </div>


              {/* Search */}

              <div className="p-7 sm:p-9">

                <SymptomSearch
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filteredSymptoms={filteredSymptoms}
                  selectedSymptoms={selectedSymptoms}
                  addSymptom={addSymptom}
                />


                {/* Selected Symptoms */}

                <div className="mt-10">

                  <div className="mb-5 flex items-center justify-between">

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
                        SELECTED
                      </p>

                      <h3
                        className="
                          mt-1
                          text-lg
                          font-semibold
                          tracking-[-0.025em]
                          text-white
                        "
                      >
                        Your symptoms
                      </h3>

                    </div>


                    <div className="flex items-center gap-3">

                      <span
                        className="
                          text-xs
                          text-neutral-500
                        "
                      >
                        {selectedSymptoms.length} selected
                      </span>

                      {selectedSymptoms.length > 0 && (

                        <button
                          onClick={clearSymptoms}
                          className="
                            text-xs
                            text-neutral-600
                            transition-colors
                            duration-300
                            hover:text-white
                          "
                        >
                          Clear
                        </button>

                      )}

                    </div>

                  </div>


                  {selectedSymptoms.length === 0 ? (

                    <div
                      className="
                        rounded-2xl
                        border
                        border-dashed
                        border-white/[0.10]
                        px-6
                        py-10
                        text-center
                      "
                    >

                      <p className="text-sm text-neutral-500">
                        No symptoms selected yet.
                      </p>

                      <p className="mt-2 text-xs text-neutral-700">
                        Search above to add symptoms.
                      </p>

                    </div>

                  ) : (

                    <SelectedSymptoms
                      symptoms={selectedSymptoms}
                      removeSymptom={removeSymptom}
                    />

                  )}

                </div>


                {/* Prediction */}

                <div className="mt-10">

                  <PredictButton
                    onClick={handlePrediction}
                    disabled={selectedSymptoms.length < 3}
                    loading={loading}
                  />

                  {selectedSymptoms.length < 3 && (

                    <p
                      className="
                        mt-4
                        text-center
                        text-xs
                        text-neutral-600
                      "
                    >
                      Select at least 3 symptoms to continue.
                    </p>

                  )}

                  {error && (

                    <div
                      className="
                        mt-5
                        rounded-2xl
                        border
                        border-white/[0.10]
                        bg-white/[0.025]
                        p-4
                        text-sm
                        leading-6
                        text-neutral-400
                      "
                    >
                      {error}
                    </div>

                  )}

                </div>

              </div>

            </div>


            {/* ==================================================
                RIGHT — RESULT
            ================================================== */}

            <div className="lg:sticky lg:top-28 lg:self-start">

              <PredictionDashboard
                prediction={prediction}
                loading={loading}
                selectedCount={selectedSymptoms.length}
                history={history}
                onSelectHistory={selectHistory}
                onClearHistory={clearHistory}
              />

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOTER TRANSITION
      ================================================== */}

      <div className="flex flex-col items-center pb-20">

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-neutral-700
          "
        >
          HEALTHLENS
        </p>

        <ArrowDown
          className="mt-5 h-4 w-4 text-neutral-800"
          strokeWidth={1}
        />

      </div>

    </main>
  );
}

export default Prediction;