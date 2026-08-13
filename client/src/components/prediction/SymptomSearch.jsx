import { Search, X } from "lucide-react";

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

      {/* ======================================
          LABEL
      ====================================== */}

      <div className="mb-4">

        <label
          htmlFor="symptom-search"
          className="
            block
            text-sm
            font-medium
            text-neutral-300
          "
        >
          Search symptoms
        </label>

        <p className="mt-1 text-xs text-neutral-600">
          Search and select the symptoms you're experiencing.
        </p>

      </div>


      {/* ======================================
          SEARCH INPUT
      ====================================== */}

      <div className="relative">

        <Search
          size={18}
          strokeWidth={1.6}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-neutral-600
          "
        />

        <input
          id="symptom-search"
          type="text"
          placeholder="Search symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          className="
            w-full
            rounded-2xl
            border
            border-white/[0.10]
            bg-white/[0.025]
            py-3.5
            pl-11
            pr-11
            text-sm
            text-white
            outline-none
            placeholder:text-neutral-700
            transition-all
            duration-300
            focus:border-white/[0.25]
            focus:bg-white/[0.04]
          "
        />

        {searchTerm && (

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
            className="
              absolute
              right-3
              top-1/2
              flex
              h-7
              w-7
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              text-neutral-600
              transition-colors
              duration-200
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            <X size={14} strokeWidth={1.5} />
          </button>

        )}

      </div>


      {/* ======================================
          SEARCH RESULTS
      ====================================== */}

      {searchTerm.length > 0 && (

        <div
          className="
            mt-2
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.10]
            bg-[#0c0c0c]
          "
        >

          {filteredSymptoms.length > 0 ? (

            <div className="max-h-52 overflow-y-auto">

              {filteredSymptoms.map((symptom) => (

                <button
                  key={symptom}
                  type="button"
                  onClick={() => addSymptom(symptom)}
                  disabled={selectedSymptoms.includes(symptom)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/[0.06]
                    px-4
                    py-3
                    text-left
                    text-sm
                    text-neutral-400
                    transition-colors
                    duration-200
                    last:border-b-0
                    hover:bg-white/[0.05]
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >

                  <span>
                    {formatSymptom(symptom)}
                  </span>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-neutral-700
                    "
                  >
                    Add
                  </span>

                </button>

              ))}

            </div>

          ) : (

            <div className="px-4 py-5">

              <p className="text-sm text-neutral-500">
                No matching symptoms found.
              </p>

              <p className="mt-1 text-xs text-neutral-700">
                Try a different search.
              </p>

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default SymptomSearch;