"use client";

interface NavbarProps {
  className?: string;
  showExit?: boolean;
  variant?: "light" | "dark";
  onExitClick?: () => void;
  exitText?: string;
  mobileHeight?: "tall" | "short"; // Figma: tall = 113px (landing/survey), short = 66px (results)
  onShareClick?: () => void;
  onShareMouseEnter?: () => void;
  onShareMouseLeave?: () => void;
}

export default function Navbar({ 
  className = "", 
  showExit = false, 
  variant = "light", 
  onExitClick, 
  exitText,
  mobileHeight = "tall",
  onShareClick,
  onShareMouseEnter,
  onShareMouseLeave
}: NavbarProps) {
  const isDark = variant === "dark";
  
  // Figma Desktop specs:
  // - Background: rgba(199, 201, 206, 0.1)
  // - Backdrop blur: 54px
  // - Border: rgba(255, 255, 255, 0.3) 1px bottom
  // - Text: White (#FFFFFF) 80% opacity
  // - Padding: 18px 32px
  // - Font: SF Pro, 20px, 400 weight, 1.3em line-height
  
  // Figma Mobile specs (390px width):
  // - Height: 113px (tall - includes safe area) or 66px (short - results page)
  // - "What's your type?" at (26, 67) from top, font: 20px
  // - "Exit" at (342, 72), font: 14px
  // - Border at bottom with blur

  const textColorClass = isDark 
    ? "text-white/80" 
    : "text-[#03060f]/80";
  
  const borderColorClass = isDark 
    ? "border-white/30" 
    : "border-[#03060f]/20";
  
  // Mobile heights based on Figma - only apply on mobile
  const mobileHeightStyles = mobileHeight === "tall" 
    ? "max-md:h-[64px]" // Mobile navbar height
    : "max-md:h-[64px]";

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 
        h-[62px]
        ${mobileHeightStyles}
        bg-[rgba(107,113,132,0.06)] 
        backdrop-blur-[54px] 
        border-b ${borderColorClass}
        z-50 
        ${className}
      `}
    >
      <div className="w-full h-full px-[26px] md:px-8 flex items-center justify-between relative">
        {/* Logo - Figma Mobile: SF Pro Display, 20px, 80% opacity */}
        <span className={`${textColorClass} text-[20px] font-normal font-sf-pro-display leading-[1.4em]`}>
          What&apos;s your type?
        </span>
        
        {/* Exit/Share Link - Figma Mobile: 14px on mobile, 20px on desktop */}
        <button 
          onClick={showExit && onExitClick ? onExitClick : onShareClick}
          onMouseEnter={!showExit ? onShareMouseEnter : undefined}
          onMouseLeave={!showExit ? onShareMouseLeave : undefined}
          className={`${textColorClass} text-[14px] md:text-[20px] font-normal font-sf-pro-display leading-[1.19em] md:leading-[130%] hover:opacity-60 transition-opacity absolute right-[26px] md:relative md:right-auto`}
        >
          {showExit ? (exitText || "Exit") : "Share"}
        </button>
      </div>
    </nav>
  );
}
