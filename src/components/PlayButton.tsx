"use client";

interface PlayButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function PlayButton({ onClick, className = "" }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center gap-2 cursor-pointer ${className}`}
      aria-label="Start survey"
    >
      {/* Play text */}
      <span className="text-white text-[16px] font-normal font-sf-pro">
        Click to play
      </span>
      
      {/* Play icon circle */}
      <div className="w-[42px] h-[42px] rounded-full bg-[#0a0d13] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        {/* Play triangle */}
        <svg 
          width="16" 
          height="18" 
          viewBox="0 0 16 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path 
            d="M15 7.268a2 2 0 0 1 0 3.464L3 17.856A2 2 0 0 1 0 16.124V1.876A2 2 0 0 1 3 .144L15 7.268Z" 
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
}
