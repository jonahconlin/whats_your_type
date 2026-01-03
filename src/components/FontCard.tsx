"use client";

import { CSSProperties } from "react";

// Map font names to CSS variable names
const fontToCssVar: Record<string, string> = {
  "Alegreya": "var(--font-alegreya)",
  "EB Garamond": "var(--font-eb-garamond)",
  "Libre Baskerville": "var(--font-libre-baskerville)",
  "Playfair Display": "var(--font-playfair-display)",
  "Arvo": "var(--font-arvo)",
  "Source Sans 3": "var(--font-source-sans)",
  "IBM Plex Sans": "var(--font-ibm-plex-sans)",
  "Roboto": "var(--font-roboto)",
  "Montserrat": "var(--font-montserrat)",
  "Open Sans": "var(--font-open-sans)",
  "Lobster": "var(--font-lobster)",
  "Space Mono": "var(--font-space-mono)",
};

interface FontCardProps {
  fontFamily: string;
  sampleText?: string;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
  style?: CSSProperties;
  variant?: "desktop" | "mobile"; // For explicit mobile styling
}

export default function FontCard({ 
  fontFamily, 
  sampleText = "Handgloves",
  onClick,
  isSelected = false,
  className = "",
  style,
  variant
}: FontCardProps) {
  const cssFont = fontToCssVar[fontFamily] || fontFamily;
  
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#03060F]
        rounded-[12px] md:rounded-[20px]
        flex flex-col
        cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.01]
        active:scale-[0.99]
        ${isSelected ? 'ring-2 ring-white ring-opacity-50' : ''}
        ${className}
      `}
      style={style}
      aria-label={`Select ${fontFamily} font`}
    >
      {/* Font name at the top - Figma Mobile: 10px at 30% opacity, Desktop: 18px at 50% */}
      <div className="pt-[10px] md:pt-4 px-3 md:px-4 flex justify-center items-center w-full">
        <span className="text-white text-[14px] md:text-[18px] opacity-50 md:opacity-50 font-sf-pro leading-[1.19em] text-center">
          {fontFamily}
        </span>
      </div>
      
      {/* Handgloves text centered - Figma Mobile: 22px, Desktop: 60px responsive */}
      <div className="flex-1 flex items-center justify-center px-3 md:px-4 pb-3 md:pb-4 w-full">
        <span 
          className="text-white text-[22px] md:text-[clamp(40px,5vw,60px)] text-center leading-[1.3em] w-full"
          style={{ fontFamily: cssFont }}
        >
          {sampleText}
        </span>
      </div>
    </button>
  );
}
