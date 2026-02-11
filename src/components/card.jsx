import { useEffect, useState } from "react";
import { useIsDesktop } from "../hooks/media";

const Card = ({
  id,
  flipped,
  onFlip,
  defaultText,
  flippedText,
  extraClasses = "",
}) => {
  const isDesktop = useIsDesktop();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;

    if (!isDesktop) {
      onFlip(id);
      return;
    }

    setAnimating(true);
    setTimeout(() => onFlip(id), 250);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        cursor-pointer transform transition-all ease-in-out duration-700
        ${flipped
          ? "bg-white lg:-translate-y-52 lg:scale-100 scale-110 text-sm md:text-3xl"
          : "bg-custom-yellow text-2xl md:text-5xl md:scale-100 scale-90"}
        ${animating ? "md:animate-rotateRight" : ""}
        flex border-black border-[1.5px] lg:-skew-y-12 my-10 shadow-2xl 
        items-center rounded-lg w-[300px] h-[150px] md:w-[545px] md:h-[273px] ${extraClasses}
        ${isDesktop ? "md:hover:-translate-y-52" : "md:!scale-100 md:hover:!scale-100"}
      `}
    >
      <p className="font-satoshi_v font-extrabold md:font-bold mx-auto p-10 text-center">
        {flipped ? flippedText : defaultText}
      </p>
    </div>
  );
};

export default Card;
