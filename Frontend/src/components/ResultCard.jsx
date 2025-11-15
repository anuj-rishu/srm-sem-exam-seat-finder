import React from "react";

const ResultCard = ({ result }) => {
  if (!result) return null;

  const handleShareToWhatsApp = () => {
    const roomNumber = result.roomInfo.includes("ROOM NO:")
      ? result.roomInfo.split("ROOM NO:")[1].split(" DATE")[0].trim()
      : result.roomInfo;

    const examDate = result.examDate || "N/A";

    const sessionTime = result.session.includes("AN")
      ? " (2-5 PM)"
      : result.session.includes("FN")
      ? " (10-1 PM)"
      : "";

    const message =
      `*Exam Seat Details*\n\n` +
      `Register No: ${result.registerNumber}\n` +
      `Seat No: ${result.seatNo}\n` +
      `Room: ${roomNumber}\n` +
      `Date: ${examDate}\n` +
      `Session: ${result.session}${sessionTime}\n` +
      `Venue: ${result.venue.toUpperCase()}\n\n` +
      `Good luck with your exam!\n\n` +
      `_Powered by SRM Insider Community_`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mt-4 md:mt-6 bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-xl md:rounded-2xl shadow-2xl border border-[#666668]/20 p-4 sm:p-6 md:p-8">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 sm:p-3 rounded-full shadow-lg shadow-green-500/30">
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-white"
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
        <h3 className="ml-3 text-lg sm:text-xl font-bold text-white">
          Seat Found!
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-[#0C0F1B] p-3 sm:p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">
            Register No
          </p>
          <p className="font-semibold text-white text-base sm:text-lg break-all">
            {result.registerNumber}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-3 sm:p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">
            Seat No
          </p>
          <p className="font-semibold text-white text-base sm:text-lg">
            {result.seatNo}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-3 sm:p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">
            Room Info
          </p>
          <p className="font-semibold text-white text-base sm:text-lg break-words">
            {result.roomInfo.includes("ROOM NO:")
              ? result.roomInfo.split("ROOM NO:")[1].split(" DATE")[0].trim()
              : result.roomInfo}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-3 sm:p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">
            Exam Date
          </p>
          <p className="font-semibold text-white text-base sm:text-lg">
            {result.examDate || "N/A"}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-3 sm:p-4 rounded-lg border border-[#666668]/20">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">
            Session
          </p>
          <p className="font-semibold text-white text-base sm:text-lg">
            {result.session}
            {result.session.includes("AN")
              ? " (2-5 PM)"
              : result.session.includes("FN")
              ? " (10-1 PM)"
              : ""}
          </p>
        </div>
        <div className="bg-[#0C0F1B] p-3 sm:p-4 rounded-lg border border-[#666668]/20 sm:col-span-2">
          <p className="text-xs text-[#666668] uppercase font-medium mb-1">
            Venue
          </p>
          <p className="font-semibold text-white text-base sm:text-lg break-words">
            {result.venue.toUpperCase()}
          </p>
        </div>
      </div>

      <button
        onClick={handleShareToWhatsApp}
        className="w-full mt-4 sm:mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
        aria-label="Share to WhatsApp"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="font-semibold">Share to WhatsApp</span>
      </button>
    </div>
  );
};

export default ResultCard;
