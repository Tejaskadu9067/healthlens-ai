import Navbar from "./Navbar";
import AnimatedBackground from "../background/AnimatedBackground";

function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          relative
          z-10
          min-h-screen
          pt-36
          pb-16
        "
      >
        {children}
      </main>
    </div>
  );
}

export default AppLayout;