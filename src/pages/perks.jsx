import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import gif from "../assets/cube_float1 1.gif";

const PerksSection = () => {
  const perks = [
    {
      title: "REGISTER",
      description:
        "Sign up your team now. Share your innovative ideas to solve real problems.",
      image: gif,
    },
    {
      title: "BUILD",
      description:
        "Code your solution using cutting-edge tech. Overcome challenges and bring your idea to life.",
      image: gif,
    },
    {
      title: "CONNECT",
      description:
        "Collaborate with students across majors. Network with peers who can boost your project.",
      image: gif,
    },
    {
      title: "GROW",
      description:
        "Level up your skills with expert feedback. Top teams earn prizes and resume credentials.",
      image: gif,
    },
  ];

  return (
    <section className="relative overflow-hidden flex justify-center items-center py-10 mb-[12px] px-4 sm:px-[22px]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] border-custom-gray opacity-50"></div>
      <div
        className="w-full max-w-[1440px] xl:max-w-[1800px] mx-auto
  grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-4
  gap-y-8
  md:gap-x-1
  xl:gap-x-8
  px-8 sm:px-0"
      >
        {perks.map((perk, index) => (
          <PerkCard
            key={index}
            title={perk.title}
            description={perk.description}
            image={perk.image}
          />
        ))}
      </div>
    </section>
  );
};

const PerkCard = ({ title, description, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlippedThisHover, setHasFlippedThisHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped((prev) => !prev);
    }
  };
  const backgroundColor =
    title === "REGISTER"
      ? "bg-custom-yellow"
      : "bg-[linear-gradient(209deg,#565D60_9%,transparent_50%,rgba(86,93,96,0)_100%)]";

  const CardFace = ({ isBack = false }) => (
    <div
      className={`absolute w-full h-full flex flex-col items-center p-6 rounded-[10px] ${backgroundColor}`}
      style={{
        transform: isBack ? "rotateY(180deg)" : "rotateY(0deg)",
        backfaceVisibility: "hidden",
      }}
    >
      <h3 className="text-custom-white font-seasons_r text-[31px] mb-4 h-[40px] flex items-center mt-2 sm:mt-6">
        {title}
      </h3>

      <div className="w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] flex justify-center items-center mb-2 -mt-5">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <p className="text-custom-white font-satoshi_v text-[18px] sm:text-[18px] flex-grow flex items-center px-2 text-center -mt-2">
        {description}
      </p>
    </div>
  );

  return (
    <motion.div
      className="relative w-full max-w-[350px] xl:max-w-[420px] mx-auto h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] perspective-1000 cursor-pointer"
      onClick={handleCardClick}
      onHoverStart={() => {
        if (!isMobile && !hasFlippedThisHover) {
          setIsFlipped((prev) => !prev);
          setHasFlippedThisHover(true);
        }
      }}
      onHoverEnd={() => {
        if (!isMobile) {
          setHasFlippedThisHover(false);
        }
      }}
    >
      <motion.div
        className="relative w-full h-full rounded-[12px] shadow-lg border-2 border-custom-yellow "
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", type: "tween" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <CardFace />

        {/* Back */}
        <CardFace isBack={true} />
      </motion.div>
    </motion.div>
  );
};

export default PerksSection;
