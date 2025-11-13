import React, { useState } from "react";
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
    <div className="w-full max-w-lg">
      <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-2xl shadow-2xl border border-[#666668]/20 p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Find Your Exam Seat
          </h2>
          <p className="text-[#666668] text-sm md:text-base">
            Quick & easy seat lookup for your exams
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-400"
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
              <p className="text-sm text-amber-200">
                <span className="font-medium">Note:</span> Seat info appears
                24h before exams. Not available? Check back later.
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
      
      <ResultCard result={result} />
    </div>
  );
};

export default SeatFinderForm;