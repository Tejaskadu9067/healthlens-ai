import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">

        {/* Eyebrow */}

        <p
          className="
            mb-8
            text-[11px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#86868B]
          "
        >
          Health intelligence
        </p>


        {/* Main Heading */}

        <h1
          className="
            max-w-5xl
            text-6xl
            font-semibold
            leading-[0.95]
            tracking-[-0.055em]
            sm:text-7xl
            md:text-8xl
            lg:text-[112px]
          "
        >
          Your health.
          <br />
          <span className="text-[#86868B]">
            Understood.
          </span>
        </h1>


        {/* Description */}

        <p
          className="
            mt-10
            max-w-xl
            text-base
            leading-7
            text-[#86868B]
            sm:text-lg
            sm:leading-8
          "
        >
          Understand your symptoms with AI-assisted
          health analysis designed to give you a
          clearer picture of what they may indicate.
        </p>


        {/* CTA */}

        <div className="mt-10">

          <Link
            to="/prediction"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-medium
              text-black
              transition-all
              duration-500
              hover:scale-[1.02]
              hover:bg-[#E5E5E5]
            "
          >
            Begin assessment
            <span aria-hidden="true">→</span>
          </Link>

        </div>


        {/* Scroll indicator */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            text-[#6E6E73]
          "
        >

          <span className="text-[10px] uppercase tracking-[0.2em]">
            Explore
          </span>

          <span className="h-8 w-px bg-[#38383A]" />

        </div>

      </div>
    </section>
  );
}

export default Hero;