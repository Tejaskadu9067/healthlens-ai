import AnimatedBackground from "../background/AnimatedBackground";
import Navbar from "./Navbar";

function AppLayout({ children }) {
  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10 pt-24 min-h-screen text-white">
        {children}
      </main>
    </>
  );
}

export default AppLayout;