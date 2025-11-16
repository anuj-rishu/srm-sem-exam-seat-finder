import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SeatFinderForm from "../components/SeatFinderForm";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { recordVisit } from "../services/api";

const Home = () => {
  useEffect(() => {
    recordVisit().catch((err) => console.error("Failed to record visit:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0F1B] via-[#18202e] to-[#0C0F1B] flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-16 flex flex-col items-center justify-center">
        <DisclaimerBanner />
        <SeatFinderForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;