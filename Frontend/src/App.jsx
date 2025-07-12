import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

function App() {
  const currentDate = new Date();
  const targetDate = new Date("2025-07-11"); 
  const showThankYouPage = currentDate >= targetDate;
  return (
    <>
      {showThankYouPage ? <ThankYou /> : <Home />}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
