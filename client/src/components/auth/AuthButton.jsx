function AuthButton({
  children,
  icon,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${!disabled ? "hover:-translate-y-0.5 active:translate-y-0" : ""}
        ${className}
      `}
    >
      {icon}
      {children}
    </button>
  );
}

export default AuthButton;