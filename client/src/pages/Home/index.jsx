import Button from "../../components/ui/Button";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-white">
        HealthLens AI
      </h1>

      <Button>
        Get Started
      </Button>

      <Button variant="secondary">
        Learn More
      </Button>

      <Button variant="danger">
        Delete
      </Button>
    </div>
  );
}

export default Home;