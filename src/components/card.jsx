import { useState } from "react";

export default function FAQCard({ number, question, answer }) {
  return (
<div className="
    relative 
    rounded-[44px] 
    bg-[linear-gradient(90deg,#FAFAFA_0%,#6B6B6B_15%,#080808_40%)]
    px-10 
    py-12 
    min-h-[217px] 
    overflow-hidden
    flex 
    flex-col 
    justify-between
  ">
  
  <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Large Number */}
      <span className="
        font-thomeo
        text-[200px]
        text-[#E6F85A]
        absolute
        bottom-[-40px]
        left-6
        leading-none
      ">
        {number}
      </span>

      {/* Question */}
      <p className="
        font-tactic
        text-[29px]
        text-[#FFFFFA]
        text-right
        relative
        z-10
        max-w-[360px]
        ml-auto
      ">
        {question}
      </p>

    </div>
  );
}
