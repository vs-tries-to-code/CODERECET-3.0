import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const calculateTimeLeft = () => {
    const targetDate = new Date(
      "July 25, " + new Date().getFullYear() + " 16:30:00"
    );
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
        seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="countdown"
      className="bg-custom-black px-3 lg:px-14 -mt-12 mb-8 lg:mb-16"
    >
      <div className="w-full flex justify-center items-center pt-20 pb-4">
        {/* <div
          className="apply-button"
          data-hackathon-slug="code-recet-2"
          data-button-theme="dark"
          style={{
            height: "44px",
            width: "192px",
            maxWidth: "100%",
          }}
        ></div> */}
      </div>

      <div className="w-full gap-20 flex flex-col">
        <div className="lg:mt-20 mt-8 px-8 lg:px-64">
          <h1
            className="font-satoshi_v text-custom-white text-center 
                    lg:text-5xl text-xl"
          >
            Build innovative products and challenge conventional ideas in this
            36-hour hackathon
          </h1>
        </div>
        <div className="bg-custom-yellow flex justify-center items-center rounded-xl mx-4 lg:mx-8 w-auto text-[#0A0A0A] h-30 sm:h-48 md:h-56 lg:h-72 mb-6 -mt-12 lg:-mt-0">
          <div className="w-full flex justify-center overflow-x-auto min-w-0">
            <div className="flex flex-row ... min-w-max mx-auto">
              <div
                className="flex flex-row
  text-[60px] sm:text-[96px] md:text-[120px] lg:text-[140px] xl:text-[230px]
  space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12
  -pt-8 lg:mb-4 mb-4 font-bebas_neue"
              >
                <div className="text-center">
                  <span>{timeLeft.days}</span>
                  <div className="text-[14px] md:text-[20px] lg:text-2xl -mt-4 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-20 font-satoshi_v">
                    DAYS
                  </div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <span>{timeLeft.hours}</span>
                  <div className="text-[14px] md:text-[20px] lg:text-2xl -mt-4 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-20 font-satoshi_v">
                    HOURS
                  </div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <span>{timeLeft.minutes}</span>
                  <div className="text-[14px] md:text-[20px] lg:text-2xl -mt-4 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-20 font-satoshi_v">
                    MINUTES
                  </div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <span>{timeLeft.seconds}</span>
                  <div className="text-[14px] md:text-[20px] lg:text-2xl -mt-4 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-20 font-satoshi_v">
                    SECONDS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
