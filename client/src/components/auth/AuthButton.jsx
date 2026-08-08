function AuthButton({
  children,
  icon,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        h-14
        rounded-2xl
        flex
        items-center
        justify-center
        gap-3
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        ${className}
      `}
    >
      {icon}
      {children}
    </button>
  );
}

export default AuthButton;