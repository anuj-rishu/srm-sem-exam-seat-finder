import React from "react";

const Banner = ({ showBanner, setShowBanner }) => {
  if (!showBanner) return null;

  return (
    <div>
      <div>
        {/* Banner content can be uncommented when needed */}
        {/* <h2 className="text-xl md:text-2xl font-bold">
          🚀 SRM ACADEMIA BOT IS BACK ONLINE!
        </h2> */}
        {/* <h6 className="text-sm md:text-lg font-bold">
          ⚠️ 70k+ page view in 4 days! We've hit Vercel's free tier limit—site may be down from 24 May.<br />
          📌Join our Telegram bot for seat alerts.
        </h6> */}
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-2 right-4 md:top-3 md:right-6 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all focus:outline-none"
          aria-label="Close notification"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
