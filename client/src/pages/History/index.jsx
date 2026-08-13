import {
  Search,
  Clock3,
  Trash2,
  RotateCcw,
  ArrowUpRight,
  Activity,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  getPredictionHistory,
  deletePrediction as deletePredictionAPI,
} from "../../services/predictionService";

function formatSymptom(symptom) {
  return symptom
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState(null);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const data = await getPredictionHistory();

      setHistory(data.predictions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    try {
      await deletePredictionAPI(deleteModal._id);

      setHistory((prev) =>
        prev.filter(
          (item) => item._id !== deleteModal._id
        )
      );

      setDeleteModal(null);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      item.disease
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [history, search]);

  const totalPredictions = history.length;

  const averageConfidence =
    totalPredictions === 0
      ? 0
      : Math.round(
          history.reduce(
            (sum, item) => sum + item.confidence,
            0
          ) / totalPredictions
        );

  const diseaseCount = {};

  history.forEach((item) => {
    diseaseCount[item.disease] =
      (diseaseCount[item.disease] || 0) + 1;
  });

  const mostPredicted =
    totalPredictions === 0
      ? "-"
      : Object.keys(diseaseCount).reduce((a, b) =>
          diseaseCount[a] > diseaseCount[b] ? a : b
        );

  /* ======================================
     LOADING
  ====================================== */

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-6">

        <div className="animate-pulse space-y-4">

          <div className="h-20 rounded-[24px] bg-white/[0.04]" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-24 rounded-[20px] bg-white/[0.04]"
              />
            ))}

          </div>

          <div className="h-14 rounded-[20px] bg-white/[0.04]" />

          <div className="h-52 rounded-[24px] bg-white/[0.04]" />

        </div>

      </main>
    );
  }

  return (
    <main
      className="
        mx-auto
        max-w-6xl
        px-5
        pb-20
        pt-8
        sm:px-6
        lg:pt-10
      "
    >

      {/* ======================================
          PAGE HEADER
      ====================================== */}

      <header className="mb-6">

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-neutral-600
          "
        >
          HEALTH RECORD
        </p>

        <div className="mt-2 flex items-end justify-between gap-6">

          <div>

            <h1
              className="
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Prediction history
            </h1>

            <p className="mt-2 text-sm text-neutral-600">
              Review your previous HealthLens assessments.
            </p>

          </div>

          <Link
            to="/prediction"
            className="
              hidden
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.10]
              bg-white/[0.04]
              px-4
              py-2
              text-xs
              font-medium
              text-neutral-300
              transition-all
              duration-300
              hover:border-white/[0.18]
              hover:bg-white/[0.07]
              hover:text-white
              sm:flex
            "
          >
            New assessment
            <ArrowUpRight
              className="h-3.5 w-3.5"
              strokeWidth={1.5}
            />
          </Link>

        </div>

      </header>


      {/* ======================================
          SUMMARY
      ====================================== */}

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">

        <HistoryStat
          label="Assessments"
          value={totalPredictions}
        />

        <HistoryStat
          label="Average confidence"
          value={`${averageConfidence}%`}
        />

        <HistoryStat
          label="Most predicted"
          value={mostPredicted}
          compact
        />

      </section>


      {/* ======================================
          SEARCH
      ====================================== */}

      <div
        className="
          mt-4
          flex
          items-center
          gap-3
          rounded-[20px]
          border
          border-white/[0.10]
          bg-[#080808]
          px-4
          py-3.5
          transition-colors
          duration-300
          focus-within:border-white/[0.18]
        "
      >

        <Search
          className="h-4 w-4 shrink-0 text-neutral-600"
          strokeWidth={1.5}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search assessments..."
          className="
            min-w-0
            flex-1
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-neutral-700
          "
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="
              text-[10px]
              text-neutral-600
              transition
              hover:text-white
            "
          >
            Clear
          </button>
        )}

      </div>


      {/* ======================================
          EMPTY STATE
      ====================================== */}

      {filteredHistory.length === 0 ? (

        <section
          className="
            mt-4
            flex
            min-h-[260px]
            flex-col
            items-center
            justify-center
            rounded-[24px]
            border
            border-white/[0.10]
            bg-[#080808]
            px-6
            text-center
          "
        >

          <Activity
            className="h-6 w-6 text-neutral-700"
            strokeWidth={1.4}
          />

          <h2 className="mt-4 text-lg font-medium text-white">
            {search
              ? "No matching assessments"
              : "No assessments yet"}
          </h2>

          <p className="mt-1.5 max-w-sm text-sm text-neutral-600">
            {search
              ? "Try searching for a different condition."
              : "Your HealthLens predictions will appear here."}
          </p>

          {!search && (
            <Link
              to="/prediction"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.12]
                bg-white
                px-5
                py-2.5
                text-xs
                font-semibold
                text-black
                transition
                hover:bg-neutral-200
              "
            >
              Start assessment
              <ArrowUpRight
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
              />
            </Link>
          )}

        </section>

      ) : (

        /* ======================================
           HISTORY LIST
        ====================================== */

        <section className="mt-4 space-y-3">

          {filteredHistory.map((item) => (

            <article
              key={item._id}
              className="
                group
                rounded-[24px]
                border
                border-white/[0.10]
                bg-[#080808]
                p-5
                transition-all
                duration-300
                hover:border-white/[0.16]
              "
            >

              {/* Top */}

              <div className="flex items-start justify-between gap-5">

                <div className="flex min-w-0 items-start gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                    "
                  >
                    <Activity
                      className="h-4 w-4 text-neutral-600"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="min-w-0">

                    <h2
                      className="
                        truncate
                        text-base
                        font-medium
                        tracking-[-0.015em]
                        text-white
                        sm:text-lg
                      "
                    >
                      {item.disease}
                    </h2>

                    <div
                      className="
                        mt-1.5
                        flex
                        items-center
                        gap-1.5
                        text-[10px]
                        text-neutral-700
                      "
                    >
                      <Clock3
                        className="h-3 w-3"
                        strokeWidth={1.5}
                      />

                      {new Date(
                        item.createdAt
                      ).toLocaleString()}

                    </div>

                  </div>

                </div>


                {/* Confidence */}

                <div className="shrink-0 text-right">

                  <p className="text-[10px] uppercase tracking-wider text-neutral-700">
                    Confidence
                  </p>

                  <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">
                    {item.confidence}%
                  </p>

                </div>

              </div>


              {/* Symptoms */}

              <div className="mt-5 border-t border-white/[0.07] pt-4">

                <p
                  className="
                    mb-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-neutral-700
                  "
                >
                  Symptoms
                </p>

                <div className="flex flex-wrap gap-1.5">

                  {item.symptoms.map((symptom) => (

                    <span
                      key={symptom}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-2.5
                        py-1
                        text-[10px]
                        text-neutral-500
                      "
                    >
                      {formatSymptom(symptom)}
                    </span>

                  ))}

                </div>

              </div>


              {/* Actions */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-end
                  gap-2
                  border-t
                  border-white/[0.07]
                  pt-4
                "
              >

                <Link
                  to="/prediction"
                  state={{
                    symptoms: item.symptoms,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-white/[0.025]
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-neutral-400
                    transition-all
                    duration-300
                    hover:border-white/[0.18]
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  <RotateCcw
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                  />

                  Predict again

                </Link>

                <button
                  onClick={() => setDeleteModal(item)}
                  aria-label={`Delete ${item.disease} prediction`}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    text-neutral-600
                    transition-all
                    duration-300
                    hover:border-white/[0.18]
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  <Trash2
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                  />
                </button>

              </div>

            </article>

          ))}

        </section>

      )}


      {/* ======================================
          DELETE MODAL
      ====================================== */}

      {deleteModal && (

        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/75
            px-5
            backdrop-blur-md
          "
        >

          <div
            className="
              w-full
              max-w-md
              rounded-[24px]
              border
              border-white/[0.12]
              bg-[#0a0a0a]
              p-6
              shadow-2xl
            "
          >

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-neutral-600
              "
            >
              REMOVE ASSESSMENT
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
              Delete this prediction?
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              This assessment will be permanently removed from
              your prediction history.
            </p>

            <div className="mt-6 flex justify-end gap-2">

              <button
                onClick={() => setDeleteModal(null)}
                className="
                  rounded-full
                  border
                  border-white/[0.10]
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-neutral-400
                  transition
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-black
                  transition
                  hover:bg-neutral-200
                "
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}


/* ======================================
   HISTORY STAT
====================================== */

function HistoryStat({
  label,
  value,
  compact = false,
}) {
  return (
    <div
      className="
        rounded-[20px]
        border
        border-white/[0.10]
        bg-[#080808]
        px-4
        py-4
      "
    >

      <p
        className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-neutral-600
        "
      >
        {label}
      </p>

      <p
        className={`
          mt-2
          font-semibold
          tracking-[-0.04em]
          text-white
          ${
            compact
              ? "truncate text-lg"
              : "text-3xl"
          }
        `}
      >
        {value}
      </p>

    </div>
  );
}

export default History;