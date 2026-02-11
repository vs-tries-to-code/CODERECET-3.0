export default function FigmaRegisterButton({ className = "" }) {
  const handleClick = () => {
    window.open("https://code-recet-2.devfolio.co/application", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#c88d28] overflow-clip relative rounded-[10.8759px] w-full h-[60px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b07d20] flex items-center justify-center ${className}`}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="font-seasons_r text-[20px] text-[#0A0A0A] leading-none">
          Register Now
        </span>
        <svg
          className="w-[16px] h-[12px]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 23"
        >
          <path
            d="M2 11.8971H26.7427M26.7427 11.8971L17.4642 2M26.7427 11.8971L17.4642 21.7942"
            stroke="#0A0A0A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </button>
  );
}
