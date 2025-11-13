import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SeatFinderForm from "../components/SeatFinderForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0F1B] via-[#18202e] to-[#0C0F1B] flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-16 flex flex-col items-center justify-center">
        <SeatFinderForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;