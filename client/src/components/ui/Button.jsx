function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;