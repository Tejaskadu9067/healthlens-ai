import { BrainCircuit } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <BrainCircuit
        size={32}
        className="text-cyan-400"
      />

      <div>
        <h1 className="text-xl font-bold text-white">
          HealthLens AI
        </h1>

        <p className="text-xs text-slate-400">
          AI Healthcare
        </p>
      </div>
    </div>
  );
}

export default Logo;