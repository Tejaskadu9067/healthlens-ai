import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  LayoutDashboard,
  History,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 hover:-translate-y-0.5 ${
      isActive
        ? "text-cyan-400"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <header className="px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="
          mx-auto
          max-w-7xl
          rounded-[28px]
          border
          border-white/10
          bg-slate-900/70
          backdrop-blur-2xl
          shadow-[0_0_45px_rgba(6,182,212,0.10)]
        "
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">

          {/* ======================================
              Logo
          ====================================== */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500
                to-blue-600
                shadow-lg
                shadow-blue-600/20
              "
            >
              <Activity className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-cyan-400
                "
              >
                HealthLens
              </h1>

              <p className="text-[11px] font-medium tracking-wide text-slate-400">
                AI HEALTHCARE
              </p>
            </div>
          </Link>

          {/* ======================================
              Navigation
          ====================================== */}

          <div className="hidden items-center gap-9 text-[15px] lg:flex">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/prediction"
              className={navClass}
            >
              Prediction
            </NavLink>

            <NavLink
              to="/history"
              className={navClass}
            >
              History
            </NavLink>

            <NavLink
              to="/dashboard"
              className={navClass}
            >
              Dashboard
            </NavLink>

          </div>

          {/* ======================================
              Right Side
          ====================================== */}

          {!user ? (

            /* Login Button */

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-cyan-500/30
              "
            >
              Login
            </Link>

          ) : (

            /* Logged-in User */

            <div className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-800/70
                  px-3
                  py-2
                  transition-all
                  duration-300
                  hover:bg-slate-800
                "
              >

                <img
                  src={user.picture}
                  alt={user.name}
                  className="
                    h-10
                    w-10
                    rounded-full
                    border-2
                    border-cyan-400
                  "
                />

                <div className="hidden text-left md:block">

                  <h2 className="text-sm font-bold text-white">
                    {user.name}
                  </h2>

                  <p className="max-w-[150px] truncate text-xs text-slate-400">
                    {user.email}
                  </p>

                </div>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* ======================================
                  User Dropdown
              ====================================== */}

              {open && (

                <div
                  className="
                    absolute
                    right-0
                    z-50
                    mt-3
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900/95
                    shadow-2xl
                    backdrop-blur-2xl
                  "
                >

                  {/* User Info */}

                  <div className="border-b border-white/10 p-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-11 w-11 rounded-full"
                      />

                      <div className="min-w-0">

                        <h2 className="truncate font-bold text-white">
                          {user.name}
                        </h2>

                        <p className="truncate text-xs text-slate-400">
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Menu */}

                  <div className="p-2">

                    <Link
                      to="/dashboard"
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        text-slate-300
                        transition
                        hover:bg-slate-800
                        hover:text-white
                      "
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>

                    <Link
                      to="/history"
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        text-slate-300
                        transition
                        hover:bg-slate-800
                        hover:text-white
                      "
                    >
                      <History className="h-4 w-4" />
                      Prediction History
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        text-red-400
                        transition
                        hover:bg-red-500
                        hover:text-white
                      "
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>

                  </div>

                </div>

              )}

            </div>

          )}

        </div>
      </nav>
    </header>
  );
}

export default Navbar;