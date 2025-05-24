import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 border-b border-indigo-100">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-indigo-600 rounded-lg p-2 mr-3 shadow-md">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            SRMIST Seat Finder
          </h1>
        </div>
        <div className="hidden md:block">
          <p className="text-indigo-700 font-medium">
            Exam Preparation Made Easy
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;