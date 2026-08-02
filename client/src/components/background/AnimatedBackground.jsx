import "./AnimatedBackground.css";

import FloatingParticles from "./FloatingParticles";
import MouseGlow from "./MouseGlow";

function AnimatedBackground() {
  return (
    <div className="animated-bg">

      <div className="mesh mesh-1" />
      <div className="mesh mesh-2" />
      <div className="mesh mesh-3" />

      <div className="grid-overlay" />

      <div className="noise" />

      <FloatingParticles />

      <MouseGlow />

    </div>
  );
}

export default AnimatedBackground;