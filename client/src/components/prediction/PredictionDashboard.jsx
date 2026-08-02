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
  if (loading) {
    return (
      <div className="sticky top-28">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl p-8 min-h-[720px] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-28 space-y-6">

      <PredictionSummary
        disease={prediction?.disease}
        confidence={prediction?.confidence}
      />

      <DescriptionCard
        description={prediction?.description}
        specialist={prediction?.specialist}
      />

      <TopPredictionsCard
        predictions={prediction?.top_predictions}
      />

      <PredictionHistory
        history={history}
        onSelect={onSelectHistory}
        onClear={onClearHistory}
      />

      <PredictionStatus
        selectedCount={selectedCount}
      />

      <TreatmentCard
        precautions={prediction?.precautions}
        medicines={prediction?.medicines}
      />

    </div>
  );
}

export default PredictionDashboard;