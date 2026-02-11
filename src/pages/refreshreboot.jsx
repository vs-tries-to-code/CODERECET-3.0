import React from "react";
import refreshImage from "../assets/refresh.png";

export default function RefreshReboot() {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen bg-custom-black text-custom-white border-custom-gray border-t border-b xl:items-stretch">
      {/* Left Side - Image */}
      <div className="ww-full xl:w-1/2 flex items-center justify-center p-4 xl:p-8">
        <div className="w-full h-full rounded-lg overflow-hidden p-2 bg-custom-black">
          <img
            src={refreshImage}
            alt="Hackathon"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div
        className="hidden xl:block"
        style={{
          width: "1px",
          backgroundColor: "#9C9C9C",
          minHeight: "100%",
          alignSelf: "stretch",
        }}
      ></div>

      {/* Right Side - Text Content */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center p-4 xl:p-10">
        <h1 className="text-custom-white font-seasons_r text-[31px] lg:text-[48px] text-lef mb-6 ">
          REFRESH <span style={{ color: "#C88D28" }}>IDEAS</span>.
          <br />
          REBOOT <span style={{ color: "#C88D28" }}>SOLUTIONS</span>.
        </h1>
        <p className="text-custom-white mb-4 text-[18px] sm:text-[20px] font-satoshi_v ">
          Great innovations start with fresh ideas. At{" "}
          <span>CodeRecet 2.0</span>, we challenge you to think beyond limits,
          break conventional patterns, and build solutions that create an
          impact. This hackathon isn’t just about writing code—it’s about
          transforming ideas into reality, solving real-world problems, and
          collaborating with like-minded innovators. Whether you're a beginner
          or an experienced coder, this is your platform to experiment, learn,
          and push boundaries.{" "}
        </p>
        <p className="text-custom-white mb-4 text-[18px] sm:text-[20px] font-satoshi_v">
          <span>Rebooting solutions</span> means improving, adapting, and
          innovating with the latest technology. Here, creativity meets
          problem-solving as teams work on cutting-edge projects, tackle
          challenges, and turn ambitious ideas into functional solutions. It’s
          your chance to redefine what’s possible.{" "}
        </p>
        <p className="text-custom-white text-[18px] sm:text-[20px] font-satoshi_v">
          The future is built by those who dare to innovate.{" "}
          <span>Are you ready to refresh ideas and reboot the world?</span> Join{" "}
          <span>CodeRecet 2.0</span> and be part of something extraordinary!{" "}
        </p>{" "}
      </div>
    </div>
  );
}
