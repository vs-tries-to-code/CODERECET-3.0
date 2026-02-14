import { useState } from "react";

export default function FAQCard({ number, question, answer }) {
  return (
    <div 
      className="group h-[240px] w-full" 
      style={{ perspective: "1000px" }}
    >
      <div 
        className="relative h-full w-full transition-transform duration-700"
        style={{ 
          transformStyle: "preserve-3d",
        }}
      
        onMouseEnter={(e) => e.currentTarget.style.transform = "rotateY(180deg)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "rotateY(0deg)"}
      >
        
        {/* front side */}
        <div className="
          absolute
          inset-0 
          backface-hidden">
          <div className="
          relative 
          h-full 
          w-full 
          rounded-[44px] 
          bg-[linear-gradient(90deg,#6B6B6B_0%,#080808_100%)] 
          px-10 
          py-12 
          overflow-hidden 
          flex 
          flex-col 
          justify-between">
            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <span className="font-thomeo text-[200px] text-[#E6F85A] absolute bottom-[-40px] left-6 leading-none opacity-90">
              {number}
            </span>

            <p className="font-tactic text-[29px] text-[#FFFFFA] text-right relative z-10 max-w-[360px] ml-auto leading-tight">
              {question}
            </p>
          </div>
        </div>

        {/* back side*/}
        <div className="absolute inset-0 h-full w-full rotate-y-180 backface-hidden">
          <div className="h-full w-full rounded-[44px] bg-[#D1D1D1] px-10 py-12 flex items-center justify-center text-center overflow-hidden border border-black/10">
            {/* Noise Overlay for consistency */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <p className="font-tactic relative z-10 text-[#080808] text-[22px] font-medium leading-relaxed px-4">
              {answer}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}