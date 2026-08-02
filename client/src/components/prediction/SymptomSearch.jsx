import { Search } from "lucide-react";

function formatSymptom(symptom) {
  return symptom
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function SymptomSearch({
  searchTerm,
  setSearchTerm,
  filteredSymptoms,
  selectedSymptoms,
  addSymptom,
}) {
  return (
    <div>

      {/* Label */}

      <label className="block text-white text-xl font-semibold mb-4">
        Search Symptoms
      </label>

      {/* Search Card */}

      <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            bg-transparent
            pl-14
            pr-6
            py-5
            rounded-2xl
            outline-none
            text-white
            text-lg
            focus:ring-2
            focus:ring-cyan-500
            transition-all
          "
        />

      </div>

      {/* Dropdown */}

      {searchTerm.length > 0 && (

        <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden max-h-72 overflow-y-auto">

          {filteredSymptoms.length > 0 ? (

            filteredSymptoms.map((symptom) => (

              <button
                key={symptom}
                onClick={() => addSymptom(symptom)}
                disabled={selectedSymptoms.includes(symptom)}
                className="
                  w-full
                  text-left
                  px-5
                  py-4
                  text-slate-300
                  hover:bg-cyan-500/10
                  hover:text-cyan-400
                  transition-all
                  border-b
                  border-slate-800
                  last:border-none
                "
              >
                {formatSymptom(symptom)}
              </button>

            ))

          ) : (

            <div className="px-5 py-4 text-slate-500">
              No matching symptoms found.
            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default SymptomSearch;