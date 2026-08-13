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
    `
      relative
      text-[14px]
      font-medium
      tracking-[-0.01em]
      transition-all
      duration-300
      ${
        isActive
          ? "text-white"
          : "text-neutral-500 hover:text-white"
      }
    `;

  return (
    <header className="relative z-[100] px-4 pt-4 sm:px-6 lg:px-8">

      {/* ======================================
          OUTER GLOW
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-4
          h-[70px]
          w-[85%]
          -translate-x-1/2
          rounded-full
          bg-white/[0.035]
          blur-3xl
        "
      />

      <nav
        className="
          relative
          z-[100]
          mx-auto
          max-w-7xl
          rounded-[24px]
          border
          border-white/[0.16]
          bg-[#080808]/90
          shadow-[0_0_35px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)]
          backdrop-blur-2xl
        "
      >

        {/* ======================================
            INNER CURVED HIGHLIGHT
        ====================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[23px]
            border
            border-white/[0.035]
          "
        />

        <div
          className="
            relative
            flex
            h-[68px]
            items-center
            justify-between
            px-5
            sm:px-7
            lg:px-8
          "
        >

          {/* ======================================
              LOGO
          ====================================== */}

          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-[0_0_18px_rgba(255,255,255,0.12)]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <Activity
                className="
                  h-[18px]
                  w-[18px]
                  stroke-[2.5]
                  text-black
                "
              />
            </div>

            <div>

              <h1
                className="
                  text-[17px]
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                HealthLens
              </h1>

              <p
                className="
                  mt-[-1px]
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-neutral-600
                "
              >
                AI Healthcare
              </p>

            </div>

          </Link>


          {/* ======================================
              NAVIGATION
          ====================================== */}

          <div
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >

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
              RIGHT SIDE
          ====================================== */}

          {!user ? (

            <Link
              to="/login"
              className="
                rounded-full
                bg-white
                px-5
                py-2
                text-[13px]
                font-semibold
                text-black
                shadow-[0_0_20px_rgba(255,255,255,0.08)]
                transition-all
                duration-300
                hover:bg-neutral-200
                hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
              "
            >
              Sign in
            </Link>

          ) : (

            <div className="relative z-[200]">

              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-2
                  py-1.5
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.06]
                "
              >

                <img
                  src={user.picture}
                  alt={user.name}
                  className="
                    h-8
                    w-8
                    rounded-full
                    grayscale
                    transition-all
                    duration-300
                    group-hover:grayscale-0
                  "
                />

                <div className="hidden text-left md:block">

                  <h2
                    className="
                      max-w-[120px]
                      truncate
                      text-[12px]
                      font-semibold
                      text-white
                    "
                  >
                    {user.name}
                  </h2>

                  <p
                    className="
                      max-w-[120px]
                      truncate
                      text-[10px]
                      text-neutral-500
                    "
                  >
                    {user.email}
                  </p>

                </div>

                <ChevronDown
                  className={`
                    mr-1
                    h-3.5
                    w-3.5
                    text-neutral-500
                    transition-transform
                    duration-300
                    ${open ? "rotate-180" : ""}
                  `}
                />

              </button>


              {/* ======================================
                  USER DROPDOWN
              ====================================== */}

              {open && (

                <div
                  className="
                    absolute
                    right-0
                    top-full
                    z-[9999]
                    mt-3
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-[#111111]/95
                    shadow-[0_25px_80px_rgba(0,0,0,0.7)]
                    backdrop-blur-2xl
                  "
                >

                  <div
                    className="
                      border-b
                      border-white/[0.07]
                      p-4
                    "
                  >

                    <div className="flex items-center gap-3">

                      <img
                        src={user.picture}
                        alt={user.name}
                        className="
                          h-10
                          w-10
                          rounded-full
                          grayscale
                        "
                      />

                      <div className="min-w-0">

                        <h2
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-white
                          "
                        >
                          {user.name}
                        </h2>

                        <p
                          className="
                            truncate
                            text-xs
                            text-neutral-500
                          "
                        >
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </div>


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
                        text-[13px]
                        text-neutral-400
                        transition
                        hover:bg-white/[0.06]
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
                        text-[13px]
                        text-neutral-400
                        transition
                        hover:bg-white/[0.06]
                        hover:text-white
                      "
                    >
                      <History className="h-4 w-4" />
                      Prediction History
                    </Link>

                    <div className="my-1 border-t border-white/[0.06]" />

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
                        text-[13px]
                        text-neutral-500
                        transition
                        hover:bg-white/[0.06]
                        hover:text-white
                      "
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
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