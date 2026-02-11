import React from "react";
import devfolio from "../assets/Devfolio_Logo-White.svg";
import ethindia from "../assets/ethindia-light.svg";
import cetaaUAE from "../assets/CETA UAE LOGO.png";
import cetaaDC from "../assets/cetaa dc.png";
import buildclub from "../assets/image.png";
import macrosoft from "../assets/macrosoft.png";

function Sponsors() {
  return (
    <div id="sponsors" className="bg-custom-black">
      <div className="relative border-custom-gray border-t border-b text-custom-white py-20 md:py-24 px-6 md:px-20 flex flex-col items-center">
        {/* Our Sponsors Section */}
        <h2 className="text-center text-5xl md:text-7xl font-seasons_r mb-2">
          OUR <span className="text-custom-yellow">SPONSORS</span>.
        </h2>

        <h2 className="text-center text-3xl md:text-5xl font-seasons_r mt-16 mb-6">
          TITLE <span className="text-custom-yellow">SPONSOR</span>.
        </h2>
        <div className="w-full max-w-screen-xl">
          <div className="border border-custom-yellow rounded-[15px] p-8 h-28 md:h-56 w-full flex items-center justify-center">
              <img
                src={macrosoft}
                alt="MACROSOFT LOGO"
                className="max-h-20 md:max-h-40 object-contain mix-blend-screen"
              />
          </div>
        </div>

        <h2 className="text-center text-3xl md:text-5xl font-seasons_r mt-16 mb-6">
          ASSOCIATE <span className="text-custom-yellow">SPONSORS</span>.
        </h2>
        <div className="flex flex-col md:flex-col w-full max-w-screen-xl space-y-4">          
          <div className="border border-custom-yellow rounded-[15px] p-6 h-24 md:h-40 w-full flex items-center justify-center gap-16 md:gap-40">
            <img
              src={cetaaUAE}
              alt="CETA UAE LOGO"
              className="max-h-24 md:max-h-40 object-contain"
            />
            <img
              src={cetaaDC}
              alt="CETAA DC LOGO"
              className="max-h-20 md:max-h-36 object-contain"
            />
          </div>

          <div className="border border-custom-yellow rounded-[15px] p-8 h-24 md:h-36 w-full flex items-center justify-center">
            <a
              href="https://devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={devfolio}
                alt="DEVFOLIO LOGO"
                className="max-h-12 md:max-h-20 object-contain"
              />
            </a>
          </div>

          <div className="border border-custom-yellow rounded-[15px] p-8 h-24 md:h-32 w-full flex items-center justify-center">
            <img
              src={buildclub}
              alt="Sponsor Logo"
              className="max-h-16 md:max-h-24 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Community Partners Section */}
        <h2 className="text-center text-3xl md:text-5xl font-seasons_r mt-16 mb-6">
          SEASON <span className="text-custom-yellow">PARTNER</span>.
        </h2>
        <div className="w-full max-w-screen-xl">
          <div className="border border-custom-yellow rounded-[15px] p-8 h-20 md:h-28 w-full flex items-center justify-center">
            <a
              href="https://ethindia.co "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ethindia}
                alt="ETHINDIA LOGO"
                className="max-h-12 md:max-h-20 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
