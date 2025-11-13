import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVisitorStats } from "../services/api";

const Footer = () => {
  const [visitorStats, setVisitorStats] = useState({
    totalVisitors: 0,
    activeVisitors: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchVisitorStats = async () => {
      try {
        const response = await getVisitorStats();
        if (response.success) {
          setVisitorStats({
            totalVisitors: response.data.totalVisitors,
            activeVisitors: response.data.activeVisitors,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Failed to fetch visitor stats:", error);
        setVisitorStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchVisitorStats();

    const interval = setInterval(fetchVisitorStats, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-3 md:py-4 lg:py-5 border-t border-[#666668]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <p className="text-sm md:text-base lg:text-shadow-md text-[#666668]">
            © 2025 SRMIST Seat Finder
          </p>
          <span className="text-[10px] sm:text-xs font-medium text-[#18a0d8] bg-[#18a0d8]/10 px-2 py-0.5 rounded-full border border-[#18a0d8]/30">
            v2.0
          </span>
        </div>
        <p className="text-sm md:text-base text-[#257093] mt-1">
          Powered by SRM Insider Community
        </p>
        
        <div className="mt-2 flex flex-col items-center gap-3">
          <Link 
            to="/teams" 
            className="text-sm md:text-base text-[#257093] hover:text-[#18a0d8] transition-colors font-medium underline"
          >
            Meet Our Team
          </Link>
          
          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://www.linkedin.com/company/srm-insider-community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5]"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6 md:h-5 md:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            
            <a
              href="https://www.instagram.com/srm.insider/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C]"
              aria-label="Instagram"
            >
              <svg
                className="h-6 w-6 md:h-5 md:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            
            <a
              href="https://chat.whatsapp.com/C6dpo6Rdfes4slvta0bN45?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366]"
              aria-label="WhatsApp Community"
            >
              <svg
                className="h-6 w-6 md:h-5 md:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {!visitorStats.loading && (
          <div className="mt-4 flex justify-center gap-4 text-xs md:text-sm text-[#666668]">
            <div className="flex items-center">
              <svg
                className="h-3.5 w-3.5 md:h-4 md:w-4 text-amber-400 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>
                <span className="font-medium">
                  {visitorStats.totalVisitors.toLocaleString()}
                </span>{" "}
                Total Visitors
              </span>
            </div>

            <div className="flex items-center">
              <span className="relative flex h-2.5 w-2.5 mr-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>
                <span className="font-medium">
                  {visitorStats.activeVisitors.toLocaleString()}
                </span>{" "}
                Online Now
              </span>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;