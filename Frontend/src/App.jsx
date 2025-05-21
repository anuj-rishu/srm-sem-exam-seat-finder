import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [registerNumber, setRegisterNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formattedDate = selectedDate
        ? `${String(selectedDate.getDate()).padStart(2, "0")}/${String(
            selectedDate.getMonth() + 1
          ).padStart(2, "0")}/${selectedDate.getFullYear()}`
        : "";

      const response = await axios.post(
        "https://anujrishu3-bca26b2ee204.herokuapp.com/api/get-seat",
        {
          date: formattedDate,
          registerNumber,
        }
      );
      setResult(response.data.seatDetails);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 border-b border-indigo-100">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-indigo-600 rounded-lg p-2 mr-3 shadow-md">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              SRMIST Seat Finder
            </h1>
          </div>
          <div className="hidden md:block">
            <p className="text-indigo-700 font-medium">
              Exam Preparation Made Easy
            </p>
          </div>
        </div>
      </header>

           {showBanner && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 shadow-lg relative">
          <div className="container mx-auto text-center px-8">
            <h2 className="text-xl md:text-2xl font-bold">
              🚀 SRM ACADEMIA BOT IS BACK ONLINE!
            </h2>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute top-2 right-4 md:top-3 md:right-6 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all focus:outline-none"
              aria-label="Close notification"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col items-center">
        <div className="w-full max-w-3xl mb-8 rounded-2xl overflow-hidden relative shadow-xl transform transition-all hover:scale-[1.02] hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600"></div>

          <div className="bg-gradient-to-r from-indigo-900 to-blue-900 p-6 md:p-8 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 pulse-animation">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            <div className="flex-grow text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                🎓 Join 5,000+ Students on SRM Academia Bot!
              </h2>
              <div className="bg-white/10 p-3 rounded-lg mb-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Get instant exam seat notifications</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Receive exam results with calculated CGPA</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Stay updated with important academic alerts</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://t.me/srm_academia_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold py-3 px-6 rounded-full text-sm md:text-base hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Join Now - It's Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Diagonal "Popular" badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-500 text-xs md:text-sm text-white font-bold py-1 px-6 transform rotate-40 translate-x-6 translate-y-3 shadow-md">
                POPULAR
              </div>
            </div>
          </div>
        </div>

        {/* Seat Finder Form Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Find Your Exam Seat
            </h2>
            <p className="text-gray-600 mt-1">
              Quick & easy seat lookup for your exams
            </p>
          </div>

          {/* Alert Box */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-800">
                  <span className="font-medium">Note:</span> Seat info appears
                  24h before exams. Not available? Check back later.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Exam Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select your exam date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                calendarClassName="responsive-calendar"
                required
                showYearDropdown
                dropdownMode="select"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Register Number
              </label>
              <input
                type="text"
                placeholder="RA221100XXXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                value={registerNumber}
                onChange={(e) => setRegisterNumber(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                "Find My Seat"
              )}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 p-4 rounded-lg text-red-700">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-green-800">
                  Seat Found!
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                  <p className="text-xs text-gray-500 uppercase">Register No</p>
                  <p className="font-semibold text-gray-800">
                    {result.registerNumber}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                  <p className="text-xs text-gray-500 uppercase">Seat No</p>
                  <p className="font-semibold text-gray-800">{result.seatNo}</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                  <p className="text-xs text-gray-500 uppercase">Room Info</p>
                  <p className="font-semibold text-gray-800">
                    {result.roomInfo.includes("ROOM NO:")
                      ? result.roomInfo
                          .split("ROOM NO:")[1]
                          .split(" DATE")[0]
                          .trim()
                      : result.roomInfo}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                  <p className="text-xs text-gray-500 uppercase">Session</p>
                  <p className="font-semibold text-gray-800">
                    {result.session}
                    {result.session.includes("AN")
                      ? " (2-5 PM)"
                      : result.session.includes("FN")
                      ? " (10-1 PM)"
                      : ""}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100 sm:col-span-2">
                  <p className="text-xs text-gray-500 uppercase">Venue</p>
                  <p className="font-semibold text-gray-800">
                    {result.venue.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="order-2 md:order-1">
              <p className="text-sm text-indigo-200">
                © {new Date().getFullYear()} SRMIST Seat Finder
              </p>
            </div>

            <div className="order-1 md:order-2 text-center mb-3 md:mb-0">
              <p className="text-sm font-semibold text-white">
                Part of SRM Insider Community
              </p>
              <p className="text-xs text-indigo-200">
                Founded by Anuj Rishu Tiwari
              </p>
            </div>

            <div className="order-3 flex space-x-4">
              <a
                href="https://github.com/anuj-rishu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/anuj-rishu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/anuj_rishu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors"
                aria-label="Twitter/X"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/anuj_rishu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Vercel Analytics */}
      <Analytics />
      <SpeedInsights />

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
