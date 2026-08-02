import { useEffect, useState } from "react";
import axios from "axios";

import { predictDisease } from "../../services/predictionService";

import SymptomSearch from "../../components/prediction/SymptomSearch";
import SelectedSymptoms from "../../components/prediction/SelectedSymptoms";
import PredictButton from "../../components/prediction/PredictButton";
import PredictionCard from "../../components/prediction/PredictionCard";
import PredictionHistory from "../../components/prediction/PredictionHistory";

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
        const response = await axios.get(
          "http://localhost:5000/api/predictions/symptoms"
        );

        setSymptoms(response.data.symptoms);
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

      console.log(result);

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
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-extrabold">
            AI Disease Prediction
          </h1>

          <p className="mt-5 text-lg text-slate-400 max-w-3xl mx-auto leading-8">
            Select your symptoms and allow our Machine Learning model
            to predict the most probable disease with confidence,
            recommendations and precautions.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 mt-20">

          {/* LEFT PANEL */}

          <div className="space-y-10">

            {/* Search */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <SymptomSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredSymptoms={filteredSymptoms}
                selectedSymptoms={selectedSymptoms}
                addSymptom={addSymptom}
              />

            </div>

            {/* Selected Symptoms */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                  Selected Symptoms
                </h2>

                <div className="flex items-center gap-3">

                  <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedSymptoms.length} Selected
                  </span>

                  {selectedSymptoms.length > 0 && (
                    <button
                      onClick={clearSymptoms}
                      className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition"
                    >
                      Clear All
                    </button>
                  )}

                </div>

              </div>

              {selectedSymptoms.length === 0 ? (

                <div className="border border-dashed border-slate-700 rounded-2xl p-10 text-center">

                  <p className="text-slate-400">
                    No symptoms selected yet.
                  </p>

                  <p className="text-slate-500 mt-3">
                    Search symptoms above and add them here.
                  </p>

                </div>

              ) : (

                <SelectedSymptoms
                  symptoms={selectedSymptoms}
                  removeSymptom={removeSymptom}
                />

              )}

              {/* Predict Button */}

              <div className="mt-10">

                <PredictButton
                  onClick={handlePrediction}
                  disabled={selectedSymptoms.length < 3}
                  loading={loading}
                />

                {selectedSymptoms.length < 3 && (
                  <p className="text-red-400 text-sm mt-4">
                    Please select at least 3 symptoms.
                  </p>
                )}

                {error && (
                  <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                    {error}
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="space-y-8">

            <PredictionCard
              prediction={prediction}
              loading={loading}
              selectedCount={selectedSymptoms.length}
            />

            <PredictionHistory
              history={history}
              onSelect={selectHistory}
              onClear={clearHistory}
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Prediction;