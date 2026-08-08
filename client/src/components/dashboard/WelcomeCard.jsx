function WelcomeCard({ user }) {
  return (
    <section className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-5 sm:px-7 sm:py-6">

      <div className="relative z-10 max-w-xl">
        <p className="text-sm font-medium text-blue-100">
          Welcome back 👋
        </p>

        <h1 className="mt-1 text-2xl sm:text-[28px] font-bold tracking-tight text-white">
          {user?.name || "User"}
        </h1>

        <p className="mt-1.5 text-sm text-blue-100">
          Here's your health overview for today.
        </p>
      </div>

      <div className="absolute -right-5 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="absolute right-7 top-1/2 hidden -translate-y-1/2 text-5xl opacity-20 sm:block">
        ♥
      </div>

    </section>
  );
}

export default WelcomeCard;