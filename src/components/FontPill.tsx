"use client";

interface FontPillProps {
  fontName: string;
  percentage: number;
  isSelected: boolean;
  isOther?: boolean;
  adjective: string;
  width: number; // percentage width relative to container
  onHover?: (isHovering: boolean) => void;
}

// Map adjective to gradient background image
const getGradientPath = (adjective: string): string => {
  const gradientMap: Record<string, string> = {
    "Casual": "/Gradient_bg/Casual_bg.png",
    "Serious": "/Gradient_bg/Serious_bg.png",
    "Friendly": "/Gradient_bg/Friendly_bg.png",
    "Playful": "/Gradient_bg/Playful_bgl.png",
    "Quirky": "/Gradient_bg/Quirky_bg.png",
    "Authoritative": "/Gradient_bg/Authoritative_bg.png",
    "Professional": "/Gradient_bg/Professional_bg.png",
    "Formal": "/Gradient_bg/Formal_bg.png",
    "Funny": "/Gradient_bg/Funny_bg.png",
    "Trendy": "/Gradient_bg/Trendy_bg.png",
  };
  return gradientMap[adjective] || "/Gradient_bg/Casual_bg.png";
};

export default function FontPill({
  fontName,
  percentage,
  isSelected,
  isOther = false,
  adjective,
  width,
  onHover,
}: FontPillProps) {
  const gradientPath = getGradientPath(adjective);
  
  // Display truncated font name if pill is too narrow
  const displayText = isOther 
    ? `Others ${percentage}%`
    : `${fontName} ${percentage}%`;
  
  // Calculate if we need to truncate
  const shouldTruncate = width < 10;
  const truncatedText = shouldTruncate 
    ? (isOther ? `Oth...` : `${fontName.slice(0, 3)}...`)
    : displayText;

  return (
    <div
      className={`
        relative h-[45px] rounded-[44px] flex items-center justify-start
        transition-all duration-200 cursor-pointer overflow-hidden
        ${isOther ? 'min-w-[45px]' : ''}
      `}
      style={{ 
        width: `${width}%`,
        minWidth: isOther ? '45px' : '80px',
      }}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* Background - gradient for selected, semi-transparent white for unselected */}
      {isSelected ? (
        <div 
          className="absolute inset-0 rounded-[44px]"
          style={{
            backgroundImage: `url('${gradientPath}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <div 
          className="absolute inset-0 rounded-[44px] bg-white/20"
        />
      )}
      
      {/* Text */}
      <span 
        className={`
          relative z-10 px-[20px] font-sf-pro-display font-bold text-[15px] leading-[1.19em]
          whitespace-nowrap overflow-hidden text-ellipsis
          ${isSelected ? 'text-[#03060F]/80' : 'text-[#03060F]/80'}
        `}
      >
        {truncatedText}
      </span>
    </div>
  );
}
