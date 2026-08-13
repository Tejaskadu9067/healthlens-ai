import { useEffect, useState } from "react";

import { getDashboard } from "../../services/dashboardService";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentPredictions from "../../components/dashboard/RecentPredictions";
import QuickActions from "../../components/dashboard/QuickActions";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      try {
        setError(false);

        const data = await getDashboard();

        if (mounted) {
          setDashboard(data);
        }
      } catch (err) {
        console.error("Dashboard Error:", err);

        if (mounted) {
          setError(true);
        }
      }
    }

    loadDashboard();

    return () => {
      mounted = false;
    };
  }, []);

  /* ======================================
     ERROR
  ====================================== */

  if (error) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-6">

        <div
          className="
            rounded-[24px]
            border
            border-white/[0.10]
            bg-[#080808]
            p-8
            text-center
          "
        >
          <h2 className="text-lg font-semibold text-white">
            Unable to load your dashboard
          </h2>

          <p className="mt-2 text-sm text-neutral-600">
            Please refresh the page and try again.
          </p>
        </div>

      </main>
    );
  }


  /* ======================================
     LOADING
  ====================================== */

  if (!dashboard) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-6">

        {/* Header */}

        <div
          className="
            h-20
            animate-pulse
            rounded-[24px]
            bg-white/[0.04]
          "
        />

        {/* Stats */}

        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-24
                animate-pulse
                rounded-[20px]
                bg-white/[0.04]
              "
            />
          ))}

        </div>

        {/* Recent */}

        <div
          className="
            mt-4
            h-72
            animate-pulse
            rounded-[24px]
            bg-white/[0.04]
          "
        />

      </main>
    );
  }


  /* ======================================
     DASHBOARD
  ====================================== */

  return (
    <main
      className="
        mx-auto
        max-w-6xl
        px-5
        py-8
        sm:px-6
        lg:py-10
      "
    >

      {/* ======================================
          PAGE INTRO
      ====================================== */}

      <div className="mb-6">

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-neutral-600
          "
        >
          YOUR HEALTH
        </p>

        <h1
          className="
            mt-2
            text-3xl
            font-semibold
            tracking-[-0.04em]
            text-white
            sm:text-4xl
          "
        >
          Your HealthLens overview
        </h1>

        <p className="mt-2 text-sm text-neutral-600">
          A simple overview of your assessment activity.
        </p>

      </div>


      {/* ======================================
          WELCOME
      ====================================== */}

      <WelcomeCard
        user={dashboard.user}
      />


      {/* ======================================
          STATS
      ====================================== */}

      <div className="mt-4">

        <StatsCards
          total={dashboard.stats.totalPredictions}
          averageConfidence={dashboard.stats.averageConfidence}
          uniqueDiseases={dashboard.stats.uniqueDiseases}
          predictionsThisMonth={
            dashboard.stats.predictionsThisMonth
          }
        />

      </div>


      {/* ======================================
          RECENT ASSESSMENTS
      ====================================== */}

      <section className="mt-6">

        <div className="mb-3">

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-neutral-600
            "
          >
            ACTIVITY
          </p>

          <h2
            className="
              mt-1.5
              text-lg
              font-semibold
              tracking-[-0.025em]
              text-white
            "
          >
            Recent assessments
          </h2>

        </div>

        <RecentPredictions
          predictions={dashboard.recentPredictions}
        />

      </section>


      {/* ======================================
          QUICK ACTIONS
      ====================================== */}

      <section className="mt-6">

        <QuickActions />

      </section>

    </main>
  );
}

export default Dashboard;