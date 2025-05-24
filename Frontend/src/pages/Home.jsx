import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TelegramPromotion from "../components/TelegramPromotion";
import SeatFinderForm from "../components/SeatFinderForm";

const Home = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex flex-col">
      <Header />
      <Banner showBanner={showBanner} setShowBanner={setShowBanner} />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col items-center">
        <TelegramPromotion />
        <SeatFinderForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;