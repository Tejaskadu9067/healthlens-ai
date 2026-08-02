function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white",

    secondary: "bg-slate-800 hover:bg-slate-700 text-white",

    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        shadow-lg
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;