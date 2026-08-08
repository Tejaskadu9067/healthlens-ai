import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* Background Orbs */}

      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <div className="bg-orb bg-orb-three" />

      <div className="relative z-10 flex min-h-screen flex-col">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default AppLayout;