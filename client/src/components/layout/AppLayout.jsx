import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">

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