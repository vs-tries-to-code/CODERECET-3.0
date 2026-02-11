import React, { useEffect } from "react";
import imgtop from "../assets/abtimgtop.png";
import arrow from "../assets/btnarrow.svg";
import star from "../assets/star.svg";
import image from "../assets/trimg.png";
import gif from "../assets/Code recet.gif";
import FigmaRegisterButton from "../components/FigmaRegisterButton";

function AboutUs() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     if (document.body.contains(script)) {
  //       document.body.removeChild(script);
  //     }
  //   };
  // }, []);

  return (
    <div
      id="about"
      className="min-h-screen bg-custom-black border-custom-gray border-b flex lg:flex-row flex-col
       justify-center lg:justify-between items-center mx-auto w-full px-4 lg:px-32 lg:py-16 py-12 overflow-hidden"
    >
      {/* Left Text Section */}
      <div className="w-full lg:w-auto px-2 lg:px-0">
        <h1 className="text-custom-white text-5xl font-seasons_r">What is</h1>
        <h1 className="text-custom-yellow text-5xl font-seasons_r">
          Code ReCET <span className="text-custom-white">?</span>
        </h1>
        <h2 className="text-custom-white text-[18px] sm:text-[17px] pr-4 font-satoshi_v mt-3 w-full lg:max-w-[500px]">
          Code ReCET is a 36-hour hackathon that blends innovation, creativity,
          and pure coding bliss! Conducted collaboratively by TinkerHub CET and
          IET on campus CET, this hackathon is set to ignite the tech spirit at
          College of Engineering, Trivandrum.
        </h2>

        {/* Card Section - Mobile Only */}
        <div className="flex lg:hidden justify-center items-center w-full mt-10 py-8 lg:pr-[200px] lg:mr-[50px] lg:ml-[50px] relative">
          {/* Background Images */}
          <div className="absolute w-[80%] sm:w-[90%] min-h-full pointer-events-none">
            <img
              src={imgtop}
              className="absolute w-[250px] sm:w-[300px] z-1 mix-blend-screen opacity-60"
            />
            <img
              src={imgtop}
              className="absolute w-[220px] sm:w-[270px] mt-24 ml-12 sm:mt-32 sm:ml-20 z-0 mix-blend-screen opacity-60"
            />
          </div>

          {/* Card Section */}
          <div className="relative w-[280px] sm:w-[320px] h-[440px] sm:h-[480px] mx-8">
            {/* Background Yellow Box */}
            <div className="absolute z-10 w-full h-full rounded-2xl bg-custom-yellow translate-x-3 sm:translate-x-4 -translate-y-4"></div>{" "}
            {/* Floating GIF */}
            <div className="absolute z-40 w-16 sm:w-20 top-[65%] -left-8 sm:-left-10 -translate-y-1/2">
              <img src={gif} />
            </div>
            {/* Front Card */}
            <div className="absolute z-20 w-full h-full rounded-2xl border border-[#FFD700] shadow-lg bg-[linear-gradient(to_bottom,#565D60_1%,#0A0A0A_100%)] flex flex-col items-center justify-between p-5">
              <img src={image} className="w-full rounded-md" />

              <div className="font-seasons_r text-center mt-5 text-[18px] lg:text-[31px]">
                <h2 className="text-custom-white">
                  REFRESH <span className="text-custom-yellow">IDEAS</span>
                </h2>
                <h2 className="text-custom-white">
                  REBOOT <span className="text-custom-yellow">SOLUTIONS</span>
                </h2>
              </div>

              <div className="w-full mt-5 flex items-center justify-center">
                <FigmaRegisterButton />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-custom-white font-seasons_r text-3xl mt-6 mb-4">
          Benefits <span className="text-custom-yellow">you get</span>.
        </h1>

        <ul className="flex flex-col gap-4">
          {[
            {
              title: "HUGE PRIZE POOL",
              desc: "Amazing cash prizes await those who seek innovation!",
            },
            {
              title: (
                <>
                  GOODIES<span className="font-satoshi_v">?</span>
                </>
              ),
              desc: "Stickers, T-Shirts, and more fascinating prizes!",
            },
            {
              title: (
                <>
                  CODE<span className="font-satoshi_v"> & </span>CHILL
                </>
              ),
              desc: "Write code, chill with the others and have fun!",
            },
            {
              title: (
                <>
                  RESUME BOOST<span className="font-satoshi_v">!</span>
                </>
              ),
              desc: "Boost your resume with a new project! Better if you win!",
            },
            {
              title: (
                <>
                  FREE FOOD<span className="text-custom-red">?</span>
                </>
              ),
              desc: "Would you say no?",
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-row items-center gap-3">
              <img src={star} className="w-6 h-6 " />
              <div
                className="p-2 text-custom-white border border-custom-yellow 
                bg-[linear-gradient(to_bottom,#565D60_1%,#0A0A0A_100%)] rounded-md w-full lg:max-w-[450px]"
              >
                <h2 className="font-seasons_r text-[20px]">{item.title}</h2>
                <h2 className="font-satoshi_v text-[16px]">{item.desc}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Images and Register Section - Desktop Only */}
      <div className="hidden lg:flex justify-center items-center w-auto mt-0 relative">
        {/* Background Images */}
        <div className="absolute w-[800px] min-h-full pointer-events-none">
          <img
            src={imgtop}
            className="absolute w-[500px] z-1 mix-blend-screen opacity-60 -mt-24"
          />
          <img
            src={imgtop}
            className="absolute w-[600px] mt-56 ml-52 z-0 mix-blend-screen opacity-60"
          />
        </div>

        {/* Card Section */}
        <div className="relative w-[400px] h-[600px]">
          {/* Background Yellow Box */}
          <div className="absolute z-10 w-full h-full rounded-2xl bg-custom-yellow translate-x-4 -translate-y-4"></div>{" "}
          {/* Floating GIF */}
          <div className="absolute z-40 w-24 top-[70%] -left-12 -translate-y-1/2">
            <img src={gif} />
          </div>
          {/* Front Card */}
          <div className="absolute z-20 w-full h-full rounded-2xl border border-[#FFD700] shadow-lg bg-[linear-gradient(to_bottom,#565D60_1%,#0A0A0A_100%)] flex flex-col items-center justify-between p-5">
            <img src={image} className="w-full rounded-md" />

            <div className="font-seasons_r text-center mt-5 text-[18px] lg:text-[31px]">
              <h2 className="text-custom-white">
                REFRESH <span className="text-custom-yellow">IDEAS</span>
              </h2>
              <h2 className="text-custom-white">
                REBOOT <span className="text-custom-yellow">SOLUTIONS</span>
              </h2>
            </div>

            <div className="w-full mt-5 flex items-center justify-center">
              <FigmaRegisterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
