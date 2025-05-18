import React from 'react';

const InsiderCommunityBanner = () => {
  return (
    <div className="mx-auto w-full px-3 sm:px-0 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 sm:mt-6">
      <div className="mb-4 sm:mb-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-500 p-2.5 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl text-purple-900 text-xs xs:text-sm sm:text-base relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fadeIn">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-400 opacity-50 animate-pulse" 
             style={{ mixBlendMode: "overlay" }}></div>
        
        <div className="flex flex-col xs:flex-row items-center xs:items-start gap-2 xs:gap-3 relative z-10">
          <div className="flex justify-center xs:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-5 xs:w-5 sm:h-6 sm:w-6 xs:mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="text-center xs:text-left">
            <p className="font-bold text-sm xs:text-sm sm:text-base md:text-lg mb-1 relative inline-flex">
              <span className="bg-gradient-to-r from-purple-700 to-indigo-600 text-transparent bg-clip-text">
                SRM INSIDER Community
              </span>
            </p>
                        <p className="text-xs xs:text-xs sm:text-sm">
              This project comes under SRM INSIDER.<br />
              Join our waitlist to make such type of platform
            </p>
            
            <a
              href="https://srm-insider-community.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-1.5 px-3 rounded-lg text-xs sm:text-sm hover:shadow-lg"
            >
              <span className="flex items-center">
                Join Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-0.5 transform transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsiderCommunityBanner;