import React, { useState } from "react";

const ShareButton = ({ result }) => {
  const [showMenu, setShowMenu] = useState(false);

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
      `Session: ${result.session}${sessionTime}\n\n` +
      `Good luck with your exam!\n\n` +
      `_Powered by SRM Insider Community_`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowMenu(false);
  };

  const handleCopyToClipboard = () => {
    const roomNumber = result.roomInfo.includes("ROOM NO:")
      ? result.roomInfo.split("ROOM NO:")[1].split(" DATE")[0].trim()
      : result.roomInfo;

    const examDate = result.examDate || "N/A";

    const sessionTime = result.session.includes("AN")
      ? " (2-5 PM)"
      : result.session.includes("FN")
      ? " (10-1 PM)"
      : "";

    const text =
      `Exam Seat Details\n\n` +
      `Register No: ${result.registerNumber}\n` +
      `Seat No: ${result.seatNo}\n` +
      `Room: ${roomNumber}\n` +
      `Date: ${examDate}\n` +
      `Session: ${result.session}${sessionTime}\n\n` +
      `Good luck with your exam!\n\n` +
      `Powered by SRM Insider Community`;

    navigator.clipboard.writeText(text);
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-gradient-to-r from-[#257093] to-[#18a0d8] hover:from-[#1f5a75] hover:to-[#1380ab] p-2 sm:p-2.5 rounded-lg shadow-lg shadow-[#257093]/30 hover:shadow-[#257093]/50 transition-all duration-200 hover:scale-105"
        aria-label="Share seat details"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>

      {/* Share Menu Dropdown */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-lg shadow-xl border border-[#666668]/30 py-2 z-20 animate-scaleIn">
            <button
              onClick={handleShareToWhatsApp}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#257093]/20 transition-colors text-left"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="text-white text-sm font-medium">WhatsApp</span>
            </button>

            <button
              onClick={handleCopyToClipboard}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#257093]/20 transition-colors text-left"
            >
              <svg
                className="w-5 h-5 text-[#18a0d8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white text-sm font-medium">Copy Text</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShareButton;
