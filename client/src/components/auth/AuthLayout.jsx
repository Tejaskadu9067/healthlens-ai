function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ======================================
          Subtle Ambient Light
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 min-h-screen">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-12">

          <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_420px] lg:gap-24">

            {/* ======================================
                Brand / Introduction
            ====================================== */}

            <div className="hidden max-w-xl lg:block">

              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                HealthLens
              </p>

              <h1 className="text-6xl font-semibold leading-[1.05] tracking-[-0.045em] text-white xl:text-7xl">

                Healthcare,
                <br />

                <span className="text-neutral-500">
                  intelligently simplified.
                </span>

              </h1>

              <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-400">
                Understand your symptoms with AI-powered
                disease prediction and intelligent health insights.
              </p>

              {/* ======================================
                  Minimal Stats
              ====================================== */}

              <div className="mt-14 flex gap-12">

                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">
                    500+
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Conditions
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">
                    AI
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Powered insights
                  </p>
                </div>

              </div>

            </div>

            {/* ======================================
                Authentication
            ====================================== */}

            <div className="flex w-full justify-center lg:justify-end">
              {children}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;