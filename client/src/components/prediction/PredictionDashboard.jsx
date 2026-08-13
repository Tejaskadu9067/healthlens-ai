import LoadingSpinner from "./LoadingSpinner";

import PredictionSummary from "./PredictionSummary";
import DescriptionCard from "./DescriptionCard";
import TopPredictionsCard from "./TopPredictionsCard";
import PredictionHistory from "./PredictionHistory";
import PredictionStatus from "./PredictionStatus";
import TreatmentCard from "./TreatmentCard";

function PredictionDashboard({
  prediction,
  loading,
  selectedCount,
  history,
  onSelectHistory,
  onClearHistory,
}) {
  /* ======================================
     LOADING STATE
  ====================================== */

  if (loading) {
    return (
      <div
        className="
          rounded-[28px]
          border
          border-white/[0.10]
          bg-[#080808]
          p-8
        "
      >
        <div
          className="
            flex
            min-h-[420px]
            items-center
            justify-center
          "
        >
          <LoadingSpinner />
        </div>
      </div>
    );
  }


  /* ======================================
     DASHBOARD
  ====================================== */

  return (
    <div className="space-y-4">

      {/* ======================================
          PRIMARY RESULT
      ====================================== */}

      <PredictionSummary
        disease={prediction?.disease}
        confidence={prediction?.confidence}
      />


      {/* ======================================
          DESCRIPTION + TOP PREDICTIONS
      ====================================== */}

      <div className="grid gap-4 xl:grid-cols-2">

        <DescriptionCard
          description={prediction?.description}
          specialist={prediction?.specialist}
        />

        <TopPredictionsCard
          predictions={prediction?.top_predictions}
        />

      </div>


      {/* ======================================
          TREATMENT / PRECAUTIONS
      ====================================== */}

      <TreatmentCard
        precautions={prediction?.precautions}
        medicines={prediction?.medicines}
      />


      {/* ======================================
          HISTORY
      ====================================== */}

      <PredictionHistory
        history={history}
        onSelect={onSelectHistory}
        onClear={onClearHistory}
      />


      {/* ======================================
          STATUS
      ====================================== */}

      <PredictionStatus
        selectedCount={selectedCount}
      />

    </div>
  );
}

export default PredictionDashboard;