import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Teams from "./pages/Teams";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const currentDate = new Date();
  const launchDate = new Date("2025-11-16");
  const thankYouDate = new Date("2025-12-20");

  // Coming Soon page before launch date
  const showComingSoon = currentDate < launchDate;

  // Thank You page after December 20, 2025
  const showThankYouPage = currentDate >= thankYouDate;

  const getHomePage = () => {
    if (showComingSoon) return <ComingSoon />;
    if (showThankYouPage) return <ThankYou />;
    return <Home />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={getHomePage()} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
