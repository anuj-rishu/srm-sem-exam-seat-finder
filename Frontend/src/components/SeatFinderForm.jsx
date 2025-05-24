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
          {loading ? <LoadingSpinner /> : "Find My Seat"}
        </button>
      </form>

      <ErrorMessage error={error} />
      <ResultCard result={result} />
    </div>
  );
};

export default SeatFinderForm;