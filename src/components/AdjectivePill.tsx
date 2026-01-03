"use client";

interface AdjectivePillProps {
  adjective: string;
  className?: string;
}

export default function AdjectivePill({ adjective, className = "" }: AdjectivePillProps) {
  return (
    <div 
      className={`
        inline-flex items-center justify-center
        px-[20px] md:px-[clamp(24px,2vw,38px)] 
        py-[5px] md:py-[clamp(6px,0.5vw,10px)]
        border-[1px] md:border-[1.5px] border-[#03060f]
        rounded-[68px] md:rounded-[128px]
        ${className}
      `}
    >
      {/* Figma Mobile: 38px, Desktop: 70.67px, SF Pro Display, regular, #03060f */}
      <span className="text-[#03060f] text-[38px] md:text-[clamp(36px,3.68vw,70.67px)] font-normal font-sf-pro-display leading-[1.19em] md:leading-[120%]">
        {adjective}
      </span>
    </div>
  );
}
