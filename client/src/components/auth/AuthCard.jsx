function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="
        w-full
        max-w-[420px]
        rounded-[28px]
        border
        border-white/[0.10]
        bg-[#080808]
        px-7
        py-8
        shadow-[0_24px_80px_rgba(0,0,0,0.45)]
        sm:px-9
        sm:py-9
      "
    >

      {/* ======================================
          Header
      ====================================== */}

      {(title || subtitle) && (
        <div className="mb-8 text-center">

          {title && (
            <h1
              className="
                text-3xl
                font-semibold
                tracking-[-0.035em]
                text-white
              "
            >
              {title}
            </h1>
          )}

          {subtitle && (
            <p
              className="
                mt-2.5
                text-sm
                leading-6
                text-neutral-500
              "
            >
              {subtitle}
            </p>
          )}

        </div>
      )}

      {/* ======================================
          Content
      ====================================== */}

      <div className="space-y-5">
        {children}
      </div>

    </div>
  );
}

export default AuthCard;