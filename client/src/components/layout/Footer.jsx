import { Brain, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Brain className="text-cyan-400" size={34} />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  HealthLens AI
                </h2>

                <p className="text-slate-400 text-sm">
                  AI Disease Prediction Platform
                </p>
              </div>
            </div>

            <p className="mt-6 text-slate-400 leading-7">
              HealthLens AI combines Machine Learning, Explainable AI,
              and modern web technologies to assist users in predicting
              diseases based on symptoms. Built to support healthcare,
              not replace medical professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#technology" className="hover:text-cyan-400 transition">
                  Technology
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400" />
                <span>support@healthlens.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-400" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} HealthLens AI. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm text-center md:text-right">
            Built with React • Tailwind CSS • Node.js • Python • AI
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;