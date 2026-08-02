function FloatingParticles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="particles">

      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${18 + Math.random() * 15}s`,
          }}
        />
      ))}

    </div>
  );
}

export default FloatingParticles;