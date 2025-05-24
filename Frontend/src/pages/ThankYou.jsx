import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ThankYou = () => {
  return (
    <div
      className="min-h-screen flex flex-col `
    bg-gradient-to-br from-blue-100 via-blue-50 to-sky-50"
    >
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full border-t-4 border-blue-600 mb-8">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-blue-100 p-3">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            Exam Season Complete!
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-blue-700">
              Thank you for using SRMIST Seat Finder during this exam period! We
              hope we made finding your exam seat a little easier.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="font-medium text-blue-800">
                We'll be back online when the next semester exams are
                approaching.
              </p>
            </div>

            <p className="text-blue-600">
              In the meantime, enjoy your break and focus on your results!
            </p>
          </div>

          <div className="mt-6">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              See you next semester!
            </div>
            <div className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all mt-3">
              <a
                href="https://t.me/srm_academia_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {/* Telegram Icon */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.5 14.5l7.5-3.5-7.5-3.5v2.5l4 1-4 1v2.5z" />
                </svg>
                Use Academia bot for attendance & marks alerts
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;
