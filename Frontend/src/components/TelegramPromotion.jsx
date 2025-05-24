import React from "react";

const TelegramPromotion = () => {
  return (
    <div className="w-full max-w-3xl mb-8 rounded-2xl overflow-hidden relative shadow-xl transform transition-all hover:scale-[1.02] hover:shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600"></div>

      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 p-6 md:p-8 flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 pulse-animation">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        <div className="flex-grow text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            🎓 Join 5,000+ Students on SRM Academia Bot!
          </h2>
          <div className="bg-white/10 p-3 rounded-lg mb-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Get instant exam seat notifications</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Receive exam results with calculated CGPA</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Stay updated with important academic alerts</span>
              </li>
            </ul>
          </div>

          <a
            href="https://t.me/srm_academia_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold py-3 px-6 rounded-full text-sm md:text-base hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Join Now - It's Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
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
        </div>

        {/* Diagonal "Popular" badge */}
        <div className="absolute top-0 right-0">
          <div className="bg-yellow-500 text-xs md:text-sm text-white font-bold py-1 px-6 transform rotate-40 translate-x-6 translate-y-3 shadow-md">
            POPULAR
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramPromotion;
