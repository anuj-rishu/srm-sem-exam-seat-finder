import React from "react";

const DisclaimerBanner = () => {
  return (
    <div className="w-full max-w-lg mb-4 md:mb-6">
      <div className="overflow-hidden bg-red-500/10 border border-red-500/30 rounded-lg py-2 md:py-3">
        <div className="animate-scroll-rtl whitespace-nowrap text-red-400 text-xs md:text-sm font-medium">
          <span className="inline-block px-4">
            <span className="font-bold">Disclaimer:</span> We are not
            responsible for any false data shown. Please double-check with the
            venue once you reach there.
          </span>
          {/* <span className="inline-block mx-8">•</span> */}
          <span className="inline-block px-4">
            <span className="font-bold">Note:</span> We do not support Biotech
            Block. Data for this block may not be available.
          </span>
          {/* <span className="inline-block mx-8">•</span> */}
          <span className="inline-block px-4">
            <span className="font-bold">Disclaimer:</span> We are not
            responsible for any false data shown. Please double-check with the
            venue once you reach there.
          </span>

          <span className="inline-block px-4">
            <span className="font-bold">Note:</span> We do not support Biotech
            Block. Data for this block may not be available.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
