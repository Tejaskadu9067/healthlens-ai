import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Demo", href: "/#demo" },
  { name: "Technology", href: "/#technology" },
  { name: "About", href: "/#about" },
];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white transition-colors duration-300">
            Login
          </button>

          <Link to="/prediction">
            <Button>
              Predict Disease
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;