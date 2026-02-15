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
      
       //rotation on hovering with mouse on card
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
          px-10
          py-12
          overflow-hidden
          flex
          flex-col
          justify-between"
          style={{
            background: 'linear-gradient(20deg, #FAFAFA80 -151.95%, #080808B3 55.32%, #6B6B6B 300.54%)'
          }}>
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{
              backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
              opacity: 0.25,
              filter: 'grayscale(1)',
            }}></div>
            
            <span className="font-thomeo text-[200px] text-[#E6F85A] absolute bottom-[-40px] left-6 leading-none opacity-90">
              {number}
            </span>

            <p className="font-tactic text-[29px] text-[#FFFFFA] text-right relative z-10 max-w-[360px] ml-auto leading-tight">
              {question}
            </p>
          </div>
        </div>

        {/* back side*/}
        <div className="absolute inset-0 h-full w-full rotate-y-180 backface-hidden rounded-[44px] overflow-hidden">
          <div className="h-full w-full px-10 py-12 flex items-center justify-center text-center border border-black/10 relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(202.8deg, #585858 -69.58%, #FFFFFA 65.58%, #2D2D2D 146.13%)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                backgroundColor: "#515151",
                opacity: 0.25,
                mixBlendMode: "overlay",
                zIndex: 2,
              }}
            ></div>
            
            <p className="font-tactic relative z-10 text-[#080808] text-[22px] font-medium leading-relaxed px-4">
              {answer}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}