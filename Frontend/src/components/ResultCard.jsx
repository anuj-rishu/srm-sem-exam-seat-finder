import React from "react";

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-6 bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-2xl shadow-2xl border border-[#666668]/20 p-6 md:p-8">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full shadow-lg shadow-green-500/30">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="ml-3 text-xl font-bold text-white">
          Seat Found!
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#0C0F1B] p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">Register No</p>
          <p className="font-semibold text-white text-lg">{result.registerNumber}</p>
        </div>
        <div className="bg-[#0C0F1B] p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">Seat No</p>
          <p className="font-semibold text-white text-lg">{result.seatNo}</p>
        </div>
        <div className="bg-[#0C0F1B] p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">Room Info</p>
          <p className="font-semibold text-white text-lg">
            {result.roomInfo.includes("ROOM NO:")
              ? result.roomInfo.split("ROOM NO:")[1].split(" DATE")[0].trim()
              : result.roomInfo}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">Session</p>
          <p className="font-semibold text-white text-lg">
            {result.session}
            {result.session.includes("AN")
              ? " (2-5 PM)"
              : result.session.includes("FN")
              ? " (10-1 PM)"
              : ""}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-4 rounded-lg border border-[#666668]/20 sm:col-span-2">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">Venue</p>
          <p className="font-semibold text-white text-lg">
            {result.venue.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
