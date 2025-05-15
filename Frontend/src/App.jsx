import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        ? `${String(selectedDate.getDate()).padStart(2, '0')}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}/${selectedDate.getFullYear()}`
        : "";

      const response = await axios.post("https://srm-sem-exam-seat-finder.vercel.app/api/get-seat", {
        date: formattedDate,
        registerNumber,
      });
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

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-white shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-indigo-800">
            Find Your Exam Seat
          </h2>
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
                  <p className="font-semibold">{result.session}</p>
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
              <p className="text-xs sm:text-sm">
                Designed and Developed by Anuj Rishu Tiwari
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;