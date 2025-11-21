import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "./ErrorMessage";
import ResultCard from "./ResultCard";
import LoadingSpinner from "./LoadingSpinner";

const SeatFinderForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [registerNumber, setRegisterNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const resultCardRef = useRef(null);

  // Auto-scroll to result card when result is available
  useEffect(() => {
    if (result && resultCardRef.current) {
      setTimeout(() => {
        resultCardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [result]);

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
        "https://api-seat.srminsider.live/api/get-seat",
        {
          date: formattedDate,
          registerNumber,
        }
      );
      setResult({ ...response.data.seatDetails, examDate: formattedDate });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-2xl shadow-2xl border border-[#666668]/20 p-6 md:p-8">
        <a
          href="https://instagram.com/srm.insider"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4 md:mb-6 group"
        >
          <div className="instagram-card-animated hover:shadow-lg hover:shadow-[#257093]/30 transition-shadow duration-300">
            <div className="instagram-card-content p-3 md:p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#257093] to-[#18a0d8] p-2 md:p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-xs md:text-sm leading-tight">
                      Follow us on Instagram
                    </p>
                    <p className="text-white/80 text-[10px] md:text-xs leading-tight mt-0.5">
                      Stay updated with latest updates
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#18a0d8] group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>
          </div>
        </a>

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Find Your Exam Seat
          </h2>
          <p className="text-[#666668] text-sm md:text-base">
            Quick & easy seat lookup for your exams
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-amber-500/10 border border-amber-500/30 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
          <div className="flex gap-2 md:gap-3">
            <div className="flex-shrink-0">
              <svg
                className="h-4 w-4 md:h-5 md:w-5 text-amber-400"
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
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-amber-200 leading-relaxed">
                <span className="font-semibold">Note:</span> Seat info appears 24h
                before exams. Not available? Check back later.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white font-medium mb-2 text-sm md:text-base">
              Exam Date
            </label>

            {/* Quick Date Selection Buttons */}
            <div className="flex gap-2 mb-3">
              <button
                type="button"
                onClick={() => setSelectedDate(new Date())}
                className="flex-1 px-3 py-2 bg-[#0C0F1B] border border-[#666668]/30 rounded-lg text-white text-sm hover:border-[#257093] hover:bg-[#257093]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#257093]"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1);
                  setSelectedDate(tomorrow);
                }}
                className="flex-1 px-3 py-2 bg-[#0C0F1B] border border-[#666668]/30 rounded-lg text-white text-sm hover:border-[#257093] hover:bg-[#257093]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#257093]"
              >
                Tomorrow
              </button>
            </div>

            {/* Custom Date Picker */}
            <div className="w-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Or select a custom date"
                className="w-full px-4 py-3 bg-[#0C0F1B] border border-[#666668]/30 rounded-lg text-white placeholder-[#666668] focus:outline-none focus:ring-2 focus:ring-[#257093] focus:border-transparent transition-all"
                calendarClassName="responsive-calendar"
                wrapperClassName="w-full"
                required
                showYearDropdown
                dropdownMode="select"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2 text-sm md:text-base">
              Register Number
            </label>
            <input
              type="text"
              placeholder="RA221100XXXXXXX"
              className="w-full px-4 py-3 bg-[#0C0F1B] border border-[#666668]/30 rounded-lg text-white placeholder-[#666668] focus:outline-none focus:ring-2 focus:ring-[#257093] focus:border-transparent transition-all"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#257093]/30 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#257093] disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Find My Seat"}
          </button>
        </form>

        <ErrorMessage error={error} />
      </div>

      <div ref={resultCardRef}>
        <ResultCard result={result} />
      </div>
    </div>
  );
};

export default SeatFinderForm;