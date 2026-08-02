import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import PredictionDemo from "../../components/sections/PredictionDemo";
import TechnologyStack from "../../components/sections/TechnologyStack";
import About from "../../components/sections/About";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PredictionDemo />
      <TechnologyStack />
      <About />
      <Footer />
    </>
  );
}

export default Home;