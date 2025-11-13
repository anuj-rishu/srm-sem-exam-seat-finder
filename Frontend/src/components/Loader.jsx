import React from "react";

const Loader = () => {
  return (
    <div className="text-center py-12 sm:py-20">
      <div className="inline-block relative">
        <div className="animate-spin rounded-full h-14 w-14 sm:h-16 sm:w-16 border-4 border-transparent border-t-[#F6A228] border-r-[#E9231D] border-b-[#048CB9] border-l-[#4C4D4F]"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-lg">
          <img
            src="https://res.cloudinary.com/dnyqwoeyh/image/upload/v1751354720/logo_gtdnus.svg"
            alt="Loading"
            className="w-full h-full object-cover scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
