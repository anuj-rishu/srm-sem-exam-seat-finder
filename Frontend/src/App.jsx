import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import InsiderCommunityBanner from "./components/InsiderCommunityBanner";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [registerNumber, setRegisterNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Format the date as DD/MM/YYYY
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md py-3 sm:py-4">
        <div className="container mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600"
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
            <h1 className="ml-2 text-xl sm:text-2xl font-bold text-gray-800">
              SRMIST Seat Finder
            </h1>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">
              SEM Exam Seating Arrangement Lookup
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full px-3 sm:px-0 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 sm:mt-6">
        <div className="mb-4 sm:mb-5 bg-gradient-to-br from-blue-100 to-indigo-200 border-2 border-blue-300 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative animate-fadeIn">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-50"
            style={{ height: "4px", top: 0 }}
          ></div>

          <div className="absolute -right-9 top-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs py-0.5 px-10 transform rotate-45 font-medium shadow-md animate-pulse">
            NEW
          </div>

          <div className="absolute bottom-2 right-2 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-indigo-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.002 1.069c0 .358.186.687.465.874l2.707 1.789a1 1 0 001.676-.676l.216-4.764a1 1 0 10-1.99-.18l-.058 1.289-1.553-1.026 3.625-1.55 7.18 3.078a1 1 0 000-1.84l-7-3z" />
              <path d="M11.375 13.658c-.092.096-.183.202-.24.317l-.53 1.587a1 1 0 01-.903.796H8.03a1 1 0 01-.992-.96l-.195-3.913a1 1 0 01.145-.597l.49-.97a1 1 0 01.376-.484l.5-.313A1 1 0 118.87 11.65l-.276.173-.144.284-.192 3.83h.604l.45-1.345a1 1 0 01.271-.415 3.177 3.177 0 01.595-.401c.326-.168.761-.35 1.25-.519 1.377-.474 2.576-.51 2.64-.511a1 1 0 11.017 1.998c-.013 0-1.038.034-2.14.404-.39.132-.742.283-1.01.417z" />
            </svg>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            {/* Animated icon */}
            <div className="mt-0.5 hidden sm:block">
              <div className="bg-blue-200 p-3 rounded-full shadow-inner transform hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-4.486-10-10-10 4.486-10 10-10zm-2.5 13.5l7.5-3.5-7.5-3.5v7z" />
                </svg>
              </div>
            </div>

            <div className="flex-1 z-10">
              <h3 className="font-bold text-blue-900 text-base sm:text-xl mb-2 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  🎓 SRM Academia Bot{" "}
                  
                </span>
              </h3>

              <p className="text-sm text-gray-800 mb-3 font-medium">
                <span className="hidden sm:inline">
                  📱 Never miss important updates!{" "}
                </span>
                Join our exclusive
                <a
                  href="https://t.me/srm_academia_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-500 hover:underline mx-1 inline-flex items-center group"
                >
                  Telegram Bot
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-0.5 transform transition-transform group-hover:translate-x-1"
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
                for instant SRM updates:
              </p>

              <div className="mb-3">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-gray-800 bg-white bg-opacity-50 p-1.5 rounded-lg">
                    <span className="mr-2 text-green-500 flex-shrink-0">✓</span>
                    <span>
                      🪑 <b>Instant exam seat notifications</b>
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-800 bg-white bg-opacity-50 p-1.5 rounded-lg">
                    <span className="mr-2 text-green-500 flex-shrink-0">✓</span>
                    <span>
                      📊{" "}
                      <b>Notification of Sem exam result with calculted CGPA</b>
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-800 bg-white bg-opacity-50 p-1.5 rounded-lg">
                    <span className="mr-2 text-green-500 flex-shrink-0">✓</span>
                    <span>
                      🔔 <b>Academic alerts & many more</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <a
                  href="https://t.me/srm_academia_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-2.5 px-5 rounded-lg text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 animate-subtle-pulse"
                >
                  Join 5000+ Students
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-white shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-indigo-800">
            Find Your Exam Seat
          </h2>

          {/* Important Notice Alert */}
          <div className="mb-5 bg-amber-50 border border-amber-300 p-3 sm:p-4 rounded-lg sm:rounded-xl text-amber-800 text-sm sm:text-base">
            <div className="flex items-start">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 mr-2 mt-0.5 flex-shrink-0 text-amber-600"
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
              <div>
                <p className="font-medium">Important Notice:</p>
                <p>
                  Seat information will only be updated within 24 hours before
                  your examination. If your seat details are not available,
                  please check again closer to your exam date.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <label className="block font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Exam Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select exam date"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                calendarClassName="responsive-calendar"
                required
                showYearDropdown
                dropdownMode="select"
              />
            </div>
            <div className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <label className="block font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Register Number
              </label>
              <input
                type="text"
                placeholder="RA221100XXXXXXX"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={registerNumber}
                onChange={(e) => setRegisterNumber(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
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

          {error && (
            <div className="mt-4 sm:mt-6 bg-red-50 border border-red-200 p-3 sm:p-4 rounded-lg sm:rounded-xl text-red-700 text-sm sm:text-base">
              <p className="font-medium text-center">{error}</p>
            </div>
          )}

          {result && (
            <div className="mt-4 sm:mt-6 bg-green-50 p-3 sm:p-5 rounded-lg sm:rounded-xl border border-green-200 shadow-sm transition-all duration-300 hover:shadow-md">
              <h2 className="text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3 flex items-center">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
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
                Seat Found!
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="bg-white p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Register No
                  </p>
                  <p className="font-semibold">{result.registerNumber}</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-500">Seat No</p>
                  <p className="font-semibold">{result.seatNo}</p>
                </div>

                <div className="bg-white p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-500">Room Info</p>
                  <p className="font-semibold">
                    {result.roomInfo.includes("ROOM NO:")
                      ? result.roomInfo
                          .split("ROOM NO:")[1]
                          .split(" DATE")[0]
                          .trim()
                      : result.roomInfo}
                  </p>
                </div>

                <div className="bg-white p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-500">Session</p>
                  <p className="font-semibold">
                    {result.session}
                    {result.session.includes("AN")
                      ? " (2-5 PM)"
                      : result.session.includes("FN")
                      ? " (10-1 PM)"
                      : ""}
                  </p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:col-span-2">
                  <p className="text-xs sm:text-sm text-gray-500">Venue</p>
                  <p className="font-semibold">{result.venue.toUpperCase()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 sm:py-6">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="mb-2 md:mb-0">
              <p className="text-xs sm:text-sm text-gray-300">
                © {new Date().getFullYear()} SRMIST Seat Finder
              </p>
            </div>
            <div className="text-center mb-2 md:mb-0 md:text-left">
              <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                Part of SRM Insider Community
              </p>
              <p className="text-xs sm:text-sm text-gray-300">
                Founded by Anuj Rishu Tiwari
              </p>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/anuj-rishu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
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
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
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
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
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
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
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
    </div>
  );
}

export default App;
