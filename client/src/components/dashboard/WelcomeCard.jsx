function WelcomeCard({ user }) {
  return (
    <section
      className="
        rounded-[24px]
        border
        border-white/[0.10]
        bg-[#080808]
        px-6
        py-5
        sm:px-7
        sm:py-6
      "
    >
      <div className="flex items-center justify-between gap-6">

        {/* Greeting */}

        <div className="min-w-0">

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-neutral-600
            "
          >
            WELCOME BACK
          </p>

          <h2
            className="
              mt-1.5
              truncate
              text-2xl
              font-semibold
              tracking-[-0.035em]
              text-white
              sm:text-[28px]
            "
          >
            {user?.name || "User"}
          </h2>

          <p className="mt-1 text-sm text-neutral-600">
            Here's your HealthLens activity at a glance.
          </p>

        </div>


        {/* Minimal status */}

        <div
          className="
            hidden
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.025]
            px-3
            py-1.5
            sm:flex
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white
            "
          />

          <span className="text-[10px] text-neutral-500">
            HEALTHLENS
          </span>

        </div>

      </div>
    </section>
  );
}

export default WelcomeCard;