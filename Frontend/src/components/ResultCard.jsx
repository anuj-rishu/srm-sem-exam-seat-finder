import React from "react";

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
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
          <p className="font-semibold text-gray-800">{result.registerNumber}</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
          <p className="text-xs text-gray-500 uppercase">Seat No</p>
          <p className="font-semibold text-gray-800">{result.seatNo}</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
          <p className="text-xs text-gray-500 uppercase">Room Info</p>
          <p className="font-semibold text-gray-800">
            {result.roomInfo.includes("ROOM NO:")
              ? result.roomInfo.split("ROOM NO:")[1].split(" DATE")[0].trim()
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
  );
};

export default ResultCard;
