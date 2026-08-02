import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Prediction",
      to: "/prediction",
    },
    {
      name: "History",
      to: "/history",
    },
    {
      name: "Dashboard",
      to: "/dashboard",
    },
  ];

  const handleAboutClick = () => {
    navigate("/");

    setTimeout(() => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-6">

      <nav
        className={`
          max-w-7xl
          mx-auto

          flex
          items-center
          justify-between

          rounded-3xl

          border
          border-white/10

          backdrop-blur-3xl

          transition-all
          duration-500

          ${
            scrolled
              ? "py-3 px-7 bg-slate-900/80 shadow-[0_0_60px_rgba(34,211,238,.18)]"
              : "py-5 px-8 bg-slate-900/55 shadow-[0_0_35px_rgba(34,211,238,.08)]"
          }
        `}
      >

        {/* Logo */}

        <Logo />

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-2 bg-white/5 rounded-full p-2">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.to}
            >
              {({ isActive }) => (

                <div
                  className="
                    relative
                    px-5
                    py-2.5
                    rounded-full

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    group
                    cursor-pointer
                  "
                >

                  {isActive && (

                    <motion.div
                      layoutId="navbar-pill"
                      className="
                        absolute
                        inset-0

                        rounded-full

                        bg-cyan-500/15

                        border
                        border-cyan-400/30

                        shadow-[0_0_35px_rgba(34,211,238,.30)]

                        -z-10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />

                  )}

                  <span
                    className={
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-300 group-hover:text-white"
                    }
                  >
                    {link.name}
                  </span>

                </div>

              )}
            </NavLink>

          ))}

          {/* About */}

          <button
            onClick={handleAboutClick}
            className="
              px-5
              py-2.5

              rounded-full

              text-sm
              font-medium

              text-slate-300

              hover:text-white
              hover:bg-white/5

              transition-all
              duration-300
            "
          >
            About
          </button>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="
              px-5
              py-2.5

              rounded-full

              text-slate-300

              hover:text-white
              hover:bg-white/5

              transition-all
              duration-300
            "
          >
            Login
          </Link>

          <Link to="/prediction">

            <Button>
              Start Diagnosis
            </Button>

          </Link>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;