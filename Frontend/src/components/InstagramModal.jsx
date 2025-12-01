import React from "react";

const InstagramModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/10 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-xl sm:rounded-2xl shadow-2xl border border-[#257093]/40 p-5 sm:p-6 md:p-8 max-w-sm sm:max-w-md w-full transform animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#666668] hover:text-white transition-colors p-1"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Instagram Icon with Animation */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="bg-gradient-to-br from-[#257093] to-[#18a0d8] p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg shadow-[#257093]/50 animate-bounce-slow">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </div>

        {/* Modal Content */}
        <div className="text-center mb-5 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Seat Found!
          </h3>
          <p className="text-[#666668] text-sm sm:text-base mb-3 sm:mb-4 px-2">
            Stay updated with the latest exam schedules, seat info & campus
            updates
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <a
            href="https://instagram.com/srm.insider"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#257093] to-[#18a0d8] hover:from-[#1f5a75] hover:to-[#1380ab] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#257093]/50 hover:shadow-[#257093]/70 hover:scale-[1.02]"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="font-bold">Follow on Instagram</span>
          </a>
          <button
            onClick={onClose}
            className="w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0C0F1B] hover:bg-[#18202e] text-[#666668] hover:text-white rounded-lg font-medium text-sm sm:text-base transition-all duration-200 border border-[#666668]/30 hover:border-[#666668]/50"
          >
            Maybe Later
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#257093]/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#18a0d8]/10 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
};

export default InstagramModal;
