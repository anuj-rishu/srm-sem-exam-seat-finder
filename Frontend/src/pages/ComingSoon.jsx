import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0F1B] via-[#18202e] to-[#0C0F1B] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Icon */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-[#257093] to-[#18a0d8] rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg shadow-[#257093]/30">
              <svg
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            Coming Soon
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#18a0d8] mb-4 sm:mb-6 font-semibold px-2">
            Website will be live on
          </p>
          
          {/* Date */}
          <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-xl sm:rounded-2xl shadow-2xl border border-[#666668]/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 mx-auto max-w-full sm:max-w-md md:max-w-lg">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#257093] via-[#18a0d8] to-[#257093] bg-clip-text text-transparent break-words">
              16 November 2025
            </p>
          </div>

          {/* Description */}
          <p className="text-[#666668] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4 sm:px-6 max-w-2xl mx-auto">
            We're working hard to bring you the best exam seat finder experience. 
            Check back soon!
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 px-2">
            <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-xl shadow-xl border border-[#666668]/20 p-5 sm:p-6 hover:border-[#257093]/50 transition-all">
              <div className="text-[#18a0d8] mb-3">
                <svg
                  className="h-7 w-7 sm:h-8 sm:w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Quick Search</h3>
              <p className="text-[#666668] text-xs sm:text-sm">
                Find your seat in seconds
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-xl shadow-xl border border-[#666668]/20 p-5 sm:p-6 hover:border-[#257093]/50 transition-all">
              <div className="text-[#18a0d8] mb-3">
                <svg
                  className="h-7 w-7 sm:h-8 sm:w-8 mx-auto"
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
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Accurate Info</h3>
              <p className="text-[#666668] text-xs sm:text-sm">
                Reliable seat information
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-xl shadow-xl border border-[#666668]/20 p-5 sm:p-6 hover:border-[#257093]/50 transition-all sm:col-span-2 md:col-span-1">
              <div className="text-[#18a0d8] mb-3">
                <svg
                  className="h-7 w-7 sm:h-8 sm:w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Mobile Friendly</h3>
              <p className="text-[#666668] text-xs sm:text-sm">
                Access from anywhere
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
