import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDesktopOpen, setIsCoursesDesktopOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<
    string | null
  >(null);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b text-slate-800 border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1750770016/Hartron_Logo1_ryz9yl.png"
                alt="Hartron Advanced Skill Centre"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="font-semibold hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="#"
              className="font-semibold hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsCoursesDesktopOpen(true)}
              onMouseLeave={() => setIsCoursesDesktopOpen(false)}
            >
              <button className="flex items-center gap-1 font-semibold hover:text-blue-600 transition-colors py-8">
                Courses
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isCoursesDesktopOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isCoursesDesktopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex"
                  >
                    <div className="w-1/2 p-5 bg-slate-50 border-r border-slate-100">
                      <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        For Faculty
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        {coursesData.Faculty_Programs.title}
                      </p>
                      <ul className="space-y-3">
                        {coursesData.Faculty_Programs.programs.map((prog) => (
                          <li key={prog.slug}>
                            <Link
                              to={`/course/${prog.slug}`}
                              onClick={() => setIsCoursesDesktopOpen(false)}
                              className="group block p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm"
                            >
                              <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {prog.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-1 flex gap-3">
                                <span className="flex items-center gap-1">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {prog.duration}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-1/2 p-5 bg-white">
                      <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />{" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                        For Students
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        {coursesData.Student_Programs.title}
                      </p>
                      <ul className="space-y-3">
                        {coursesData.Student_Programs.programs.map((prog) => (
                          <li key={prog.slug}>
                            <Link
                              to={`/course/${prog.slug}`}
                              onClick={() => setIsCoursesDesktopOpen(false)}
                              className="group block p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm"
                            >
                              <div className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                {prog.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {prog.duration}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="#"
              className="font-semibold hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-slate-600 font-semibold hover:text-blue-600 transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Sign up
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                About
              </Link>

              <div className="border-t border-b border-slate-100 py-2">
                <button
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-blue-50"
                  onClick={() => toggleMobileSection("courses")}
                >
                  Courses
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileExpandedSection === "courses" ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileExpandedSection === "courses" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-2 space-y-4 py-2 bg-slate-50/50 mt-1 rounded-lg"
                    >
                      <div>
                        <div className="text-xs font-bold text-blue-600 uppercase mb-2 px-3">
                          For Faculty
                        </div>
                        {coursesData.Faculty_Programs.programs.map((prog) => (
                          <Link
                            key={prog.slug}
                            to={`/course/${prog.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md"
                          >
                            {prog.title}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-indigo-600 uppercase mb-2 px-3 mt-4">
                          For Students
                        </div>
                        {coursesData.Student_Programs.programs.map((prog) => (
                          <Link
                            key={prog.slug}
                            to={`/course/${prog.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-white rounded-md"
                          >
                            {prog.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Contact
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex justify-center px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-md shadow-blue-500/30"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
