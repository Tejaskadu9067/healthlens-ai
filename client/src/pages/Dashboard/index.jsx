import { Activity, Brain, HeartPulse, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Predictions",
      value: "24",
      icon: Activity,
      color: "text-cyan-400",
    },
    {
      title: "AI Accuracy",
      value: "97.8%",
      icon: Brain,
      color: "text-blue-400",
    },
    {
      title: "Health Score",
      value: "89",
      icon: HeartPulse,
      color: "text-emerald-400",
    },
    {
      title: "Weekly Activity",
      value: "+12%",
      icon: TrendingUp,
      color: "text-violet-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-white">

      {/* Hero */}

      <div className="mb-12">

        <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
          AI Health Dashboard
        </span>

        <h1 className="mt-6 text-5xl font-black">
          Welcome Back 👋
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400 text-lg leading-8">
          Monitor your health insights, review previous predictions,
          and let HealthLens AI help you stay one step ahead.
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {item.value}
                  </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Icon className={`w-7 h-7 ${item.color}`} />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom Grid */}

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-12">

        {/* Recent Predictions */}

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">
              Recent Predictions
            </h2>

            <Link
              to="/history"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
            >
              View All

              <ArrowRight className="w-4 h-4" />

            </Link>

          </div>

          <div className="space-y-5">

            {[
              ["Influenza", "96%"],
              ["Migraine", "91%"],
              ["Common Cold", "87%"],
            ].map(([disease, confidence]) => (

              <div
                key={disease}
                className="flex justify-between items-center rounded-2xl bg-slate-800/50 px-5 py-4"
              >

                <div>

                  <h3 className="font-semibold">
                    {disease}
                  </h3>

                  <p className="text-sm text-slate-400">
                    AI Diagnosis
                  </p>

                </div>

                <span className="text-cyan-400 font-bold">
                  {confidence}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* AI Assistant */}

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8">

          <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center text-4xl mx-auto">

            🤖

          </div>

          <h2 className="text-3xl font-bold text-center mt-6">
            AI Assistant
          </h2>

          <p className="text-center text-slate-400 mt-4 leading-7">
            No predictions have been made today.
            Start a new AI diagnosis to receive
            personalized recommendations.
          </p>

          <Link to="/prediction">

            <button className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all font-semibold">

              Start New Prediction

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;