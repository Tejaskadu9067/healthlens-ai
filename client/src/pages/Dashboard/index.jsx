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

  if (error) {
    return (
      <div className="page-container py-10">
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="text-lg font-semibold text-slate-800">
            Unable to load your dashboard
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  /*
   * Keep the page structure stable while the API loads.
   * This prevents the dashboard from visually appearing/disappearing.
   */

  if (!dashboard) {
    return (
      <main className="page-container py-4 space-y-4">

        <div className="h-[120px] animate-pulse rounded-[22px] bg-slate-800/60" />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-[110px] animate-pulse rounded-[20px] bg-slate-800/60"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          <div className="h-[250px] animate-pulse rounded-[20px] bg-slate-800/60 lg:col-span-2" />

          <div className="h-[250px] animate-pulse rounded-[20px] bg-slate-800/60" />

        </div>

      </main>
    );
  }

  return (
    <main className="page-container py-4 space-y-4 fade-in">

      <WelcomeCard user={dashboard.user} />

      <StatsCards
        total={dashboard.stats.totalPredictions}
        averageConfidence={dashboard.stats.averageConfidence}
        uniqueDiseases={dashboard.stats.uniqueDiseases}
        predictionsThisMonth={
          dashboard.stats.predictionsThisMonth
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RecentPredictions
            predictions={dashboard.recentPredictions}
          />
        </div>

        <section className="rounded-[20px] bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Health overview
              </p>

              <h2 className="mt-0.5 text-lg font-bold text-slate-800">
                Your Activity
              </h2>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50">
              ❤️
            </div>

          </div>

          <div className="space-y-5">

            <div>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="text-slate-500">
                  Prediction Activity
                </span>

                <span className="font-semibold text-slate-700">
                  {dashboard.stats.totalPredictions}
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{
                    width: `${Math.min(
                      dashboard.stats.totalPredictions * 20,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="text-slate-500">
                  Average Confidence
                </span>

                <span className="font-semibold text-slate-700">
                  {dashboard.stats.averageConfidence}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{
                    width: `${Math.min(
                      dashboard.stats.averageConfidence,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] text-slate-400">
                  Diseases
                </p>

                <p className="mt-0.5 text-xl font-bold text-slate-800">
                  {dashboard.stats.uniqueDiseases}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] text-slate-400">
                  This Month
                </p>

                <p className="mt-0.5 text-xl font-bold text-slate-800">
                  {dashboard.stats.predictionsThisMonth}
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>

      <QuickActions />

    </main>
  );
}

export default Dashboard;