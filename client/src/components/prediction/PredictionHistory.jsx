function PredictionHistory({
  history,
  onSelect,
  onClear,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-10">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Prediction History
        </h2>

        {history.length > 0 && (
          <button
            onClick={onClear}
            className="text-red-400 hover:text-red-300 transition"
          >
            Clear History
          </button>
        )}

      </div>

      {history.length === 0 ? (

        <p className="text-slate-500">
          No predictions yet.
        </p>

      ) : (

        <div className="space-y-4">

          {history.map((item, index) => (

            <button
              key={index}
              onClick={() => onSelect(item)}
              className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-5 text-left transition"
            >

              <div className="flex justify-between">

                <span className="font-semibold text-cyan-400">
                  {item.disease}
                </span>

                <span className="text-slate-400">
                  {item.confidence}%
                </span>

              </div>

              <p className="text-sm text-slate-500 mt-2">
                {item.symptoms.join(", ")}
              </p>

            </button>

          ))}

        </div>

      )}

    </div>
  );
}

export default PredictionHistory;