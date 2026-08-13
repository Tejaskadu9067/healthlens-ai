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
          h-5
          w-5
          -translate-y-1/2
          text-neutral-600
        "
        strokeWidth={1.5}
      />

      <input
        type="tel"
        placeholder="+91 9876543210"
        value={value}
        onChange={onChange}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#111111]
          pl-14
          pr-5
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-neutral-700
          hover:border-white/[0.16]
          focus:border-white/[0.25]
          focus:bg-[#151515]
          focus:ring-0
        "
      />

    </div>
  );
}

export default PhoneInput;