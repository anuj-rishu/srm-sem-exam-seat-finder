import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { recordVisit } from "../services/api";

const ThankYou = () => {
  useEffect(() => {
    recordVisit().catch((err) => console.error("Failed to record visit:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0C0F1B] via-[#18202e] to-[#0C0F1B]">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="bg-gradient-to-br from-[#18202e] to-[#0C0F1B] rounded-2xl shadow-2xl border border-[#666668]/20 p-8 max-w-2xl w-full mb-8">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-gradient-to-r from-[#257093] to-[#18a0d8] p-4 shadow-lg shadow-[#257093]/30">
              <svg
                className="w-12 h-12 text-white"
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

          <h1 className="text-3xl font-bold text-white mb-4">
            Exam Season Complete!
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-[#666668]">
              Thank you for using SRMIST Seat Finder during this exam period! We
              hope we made finding your exam seat a little easier.
            </p>

            <div className="bg-[#257093]/10 border border-[#257093]/30 p-4 rounded-lg">
              <p className="font-medium text-[#18a0d8]">
                We'll be back online when the next semester exams are
                approaching.
              </p>
            </div>

            <p className="text-[#666668]">
              In the meantime, enjoy your break and focus on your results!
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="inline-block bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-[#257093]/30">
              See you next semester!
            </div>
            <div className="block">
              <a
                href="https://t.me/srm_academia_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0C0F1B] hover:bg-[#18202e] border border-[#666668]/30 text-[#18a0d8] px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
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
