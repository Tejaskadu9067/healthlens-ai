function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Orbs */}

      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <div className="bg-orb bg-orb-three" />

      <div className="relative z-10 min-h-screen">

        <div className="max-w-7xl mx-auto min-h-screen px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen">

            {/* Left Side */}

            <div className="max-w-xl">

              <h1 className="text-7xl font-black leading-tight">

                <span className="text-white">

                  Health

                </span>

                <span className="text-cyan-400">

                  Lens

                </span>

              </h1>

              <p className="mt-8 text-2xl leading-10 text-slate-300">

                Intelligent healthcare powered by Artificial Intelligence.

              </p>

              <p className="mt-4 text-xl leading-9 text-slate-400">

                Predict diseases, monitor your health, and receive
                AI-powered insights built for the future of healthcare.

              </p>

              {/* Stats */}

              <div className="flex gap-6 mt-14">

                <div className="glass-card w-44 h-36 flex flex-col justify-center px-8">

                  <h2 className="text-cyan-400 text-5xl font-black">

                    500+

                  </h2>

                  <p className="mt-2 text-slate-400">

                    Diseases

                  </p>

                </div>

                <div className="glass-card w-44 h-36 flex flex-col justify-center px-8">

                  <h2 className="text-cyan-400 text-5xl font-black">

                    97%

                  </h2>

                  <p className="mt-2 text-slate-400">

                    Accuracy

                  </p>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex justify-center lg:justify-end">

              {children}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;