import React, { useState } from "react";
import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import gift from "../assets/Gifts.png";

const isMobile = () => window.innerWidth < 768;

const Prize = () => {
  // Track animation state for each prize on mobile
  const [animated, setAnimated] = useState({
    first: false,
    second: false,
    third: false,
  });

  // Handler for mobile tap
  const handleMobileAnimate = (key) => {
    if (isMobile()) {
      setAnimated((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  return (
    <div className="bg-custom-black border-custom-gray border-t border-b flex flex-col gap-y-9 items-center justify-start min-h-screen pt-12 pb-12 w-full max-w-[1250px] 2xl:max-w-[1700px] mx-auto">
      <div className="text-custom-yellow font-seasons_r text-7xl md:text-8xl">
        PRIZES
      </div>
      {/* Border line below PRIZES title - mobile only */}
      <div className="w-full border-b border-custom-gray md:hidden"></div>

      {/* Flex container for prizes */}
      <div className="flex flex-wrap border-custom-gray md:border-t md:border-b md:flex-nowrap items-center justify-center md:h-[800px] w-full">
        {/* SECOND PRIZE */}
        <div className="h-full order-2 md:order-1 pb-6 px-5 flex flex-col items-center justify-center space-y-3 md:space-y-7">
          <img
            src={second}
            alt="second"
            onClick={() => handleMobileAnimate("second")}
            className={`
              mt-10 drop-shadow-[0_0_50px_rgba(122,114,111,0.8)]
              transition-all duration-700
              md:hover:-translate-y-3 md:hover:drop-shadow-[0_0_150px_rgba(122,114,111,1)]
              ${
                animated.second && isMobile()
                  ? "-translate-y-3 drop-shadow-[0_0_150px_rgba(122,114,111,1)]"
                  : ""
              }
            `}
            style={{ cursor: isMobile() ? "pointer" : "auto" }}
          />
          <div className="font-seasons_r text-custom-white text-3xl md:text-5xl">
            SECOND
          </div>
          <div className="text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl">
            Rs.25000
          </div>
        </div>

        {/* FIRST PRIZE */}
        <div className="h-full order-1 md:order-2 border-custom-gray md:border-l md:border-r pb-6 px-5 flex flex-col items-center justify-center space-y-3 md:space-y-7">
          <img
            src={first}
            alt="first"
            onClick={() => handleMobileAnimate("first")}
            className={`
              md:-mt-10 drop-shadow-[0_0_40px_rgba(215,159,24,0.8)]
              transition-all duration-700
              md:hover:-translate-y-3 md:hover:drop-shadow-[0_0_150px_rgba(215,159,24,1)]
              ${
                animated.first && isMobile()
                  ? "-translate-y-3 drop-shadow-[0_0_150px_rgba(215,159,24,1)]"
                  : ""
              }
            `}
            style={{ cursor: isMobile() ? "pointer" : "auto" }}
          />
          <div className="font-seasons_r text-custom-white text-3xl md:text-5xl">
            FIRST
          </div>
          <div className="text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl">
            Rs.40000
          </div>
        </div>

        {/* THIRD PRIZE */}
        <div className="h-full order-3 md:order-3 border-custom-gray pb-6 flex flex-col items-center justify-center space-y-3 md:space-y-7">
          <img
            src={third}
            alt="third"
            onClick={() => handleMobileAnimate("third")}
            className={`
              mt-10 drop-shadow-[0_0_30px_rgba(118,53,37,1)]
              transition-all duration-700 ease-in-out
              md:hover:drop-shadow-[0_0_150px_rgba(255,0,0,0.8)] md:hover:-translate-y-3
              ${
                animated.third && isMobile()
                  ? "-translate-y-3 drop-shadow-[0_0_150px_rgba(255,0,0,0.8)]"
                  : ""
              }
            `}
            style={{ cursor: isMobile() ? "pointer" : "auto" }}
          />
          <div className="font-seasons_r text-custom-white text-3xl md:text-5xl">
            THIRD
          </div>
          <div className="text-custom-yellow font-bebas_neue font-bold text-3xl md:text-5xl">
            Rs.10000
          </div>
        </div>
      </div>

      {/* Border line above "Is that all?" section - mobile only */}
      <div className="w-full border-t border-custom-gray md:hidden"></div>

      {/* Additional Content */}
      <div className="pt-10 px-10 pb-6 md:p-10 w-full flex items-center justify-center">
        <div className="bg-custom-yellow w-[1250px] flex flex-col items-start p-5 md:px-14 md:pb-6 md:pt-10 rounded-lg md:rounded-3xl space-y-6 ">
          <div className="font-seasons_r text-4xl md:text-6xl">
            Is that all?
          </div>
          <div className="flex md:flex-row items-start justify-start ">
            <div className="text-2xl md:text-4xl font-satoshi_v text-custom-white w-full md:w-[75%]">
              Not at all! Everyone who gets selected gets Goodies! T-Shirts,
              stickers, you name it! And guess what? There's also a <b>₹10,000</b> track prize exclusively for the best AI-based solution.
            </div>
            <div className=" w-24 md:w-[30%] md:flex md:flex-row justify-end -mt-20 md:-mt-36 md:-mr-36">
              <img src={gift} alt="gift" className="w-24 md:w-96" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
