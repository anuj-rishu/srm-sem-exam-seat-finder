import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0C0F1B] to-[#18202e] border-b border-[#666668]/20 sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity group">
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex items-end gap-2">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#257093] transition-colors">
                  SRMIST Seat Finder
                </h1>
                <span className="text-[10px] sm:text-xs font-medium text-[#18a0d8] bg-[#18a0d8]/10 px-2 py-0.5 rounded-full border border-[#18a0d8]/30 mb-0.5">
                  v2.0
                </span>
              </div>
              <p className="block text-[10px] sm:text-xs bg-gradient-to-r from-[#257093] via-[#18a0d8] to-[#257093] bg-clip-text text-transparent font-semibold tracking-wide uppercase italic">
                -SRM INSIDER Community
              </p>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            <a
              href="https://e-lib.srminsider.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-[#257093]/20 transition-all text-sm group"
            >
              <svg
                className="h-4 w-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              E-Library
              <svg
                className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <a
              href="https://cgpa-cal.srminsider.live"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-white px-3 py-2 text-sm font-medium transition-all hover:text-[#18a0d8] group"
            >
              CGPA Cal
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <button
              className="text-white p-2 rounded-lg hover:bg-[#666668]/20 transition-all md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="py-4 mt-2 border-t border-[#666668]/20 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <a
                href="https://e-lib.srminsider.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white px-4 py-3 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-[#257093]/20 transition-all flex items-center justify-center group"
              >
                <svg
                  className="h-4 w-4 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                E-Library
                <svg
                  className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="https://cgpa-cal.srminsider.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-2 font-medium text-center transition-all hover:text-[#18a0d8] flex items-center justify-center group"
              >
                CGPA Cal
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;