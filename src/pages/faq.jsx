import { useState } from "react";
import FAQCard from "../components/card";
import TunnelBg from "../assets/Tunnel bg.png";

const faqs = [
  {
    number: "01",
    question: "What is the theme of the hackathon?",
    answer:
      "The theme is 'Open Innovation', which means you are free to do the project on any topic that would generally impact the society positively.",
  },
  {
    number: "02",
    question: "Should the project be Free and Open Source?",
    answer: "Yes. The project should be Free and Open Source.",
  },
  {
    number: "03",
    question: "But... I’ve never participated in a hackathon",
    answer:
      "That’s okay! We welcome hackers of all skill levels. We’ll have workshops and mentors to help you learn and build something awesome.",
  },
  {
    number: "04",
    question: "How many prizes can a team acquire?",
    answer: "A team can only win one prize.",
  },
  {
    number: "05",
    question: "How many members can be there in a team?",
    answer: "Each team has to consist of 2-4 members.",
  },
  {
    number: "06",
    question: "Is there any prerequisites for this hackathon?",
    answer:
      "Not at all! We encourage you to give it a shot even if you consider yourself a beginner-level programmer.",
  },
];

export default function FAQSection() {
  return(
   <section className="bg-[#1a1a1a] px-10 py-24 relative overflow-hidden">



  <div className="mb-20">
    <img 
      src={TunnelBg} 
      alt="Tunnel background" 
      className="absolute bottom-[196.52px] left-[151px] w-[1421.98px] h-[1412.36px] opacity-1 pointer-events-none"
    />

    <img 
      src={TunnelBg} 
      alt="Tunnel background" 
      className="absolute bottom-[-530px] right-[981px] w-[1421.98px] h-[1412.36px] opacity-1 pointer-events-none"
    />

    <h3 className="
      font-hoops_brother
      text-[47px]
      text-[#E6F85A]
      leading-none
    ">
      Frequently Asked
    </h3>

    <h2 className="
      font-thomeo
      text-[76px]
      uppercase
      text-[#FFFFFA]
      leading-none
    ">
      QUESTIONS
    </h2>

  </div>

  <div className="
  grid
  gap-y-12
  gap-x-10
  md:grid-cols-2
"></div>


<div className="grid gap-y-12 gap-x-10 md:grid-cols-2 font-tactic_sans">
        {faqs.map((faq, index) => (
          <FAQCard 
            key={index} 
            number={faq.number} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
</section>


  );
}
