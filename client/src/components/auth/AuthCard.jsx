function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="
        w-full
        max-w-md
        glass-card
        px-10
        py-10
      "
    >
      <div className="mb-10 text-center">

        <h1 className="text-4xl font-bold text-white">

          {title}

        </h1>

        <p className="mt-3 text-slate-400 leading-7">

          {subtitle}

        </p>

      </div>

      <div className="space-y-6">

        {children}

      </div>

    </div>
  );
}

export default AuthCard;