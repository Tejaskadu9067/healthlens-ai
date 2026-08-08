import { Phone } from "lucide-react";

function PhoneInput({
  value,
  onChange,
}) {
  return (
    <div className="relative">

      <Phone
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-cyan-400
          w-5
          h-5
        "
      />

      <input
        type="tel"
        placeholder="+91 9876543210"
        value={value}
        onChange={onChange}
        className="
          w-full
          h-14
          rounded-2xl
          bg-slate-900/60
          border
          border-white/10
          pl-14
          pr-5
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          duration-300
          focus:border-cyan-400
          focus:ring-4
          focus:ring-cyan-500/10
        "
      />

    </div>
  );
}

export default PhoneInput;