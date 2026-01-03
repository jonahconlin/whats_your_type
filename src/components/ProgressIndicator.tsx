"use client";

interface ProgressIndicatorProps {
  currentQuestion: number;
  totalQuestions: number;
  currentRound: number;
  totalRounds?: number;
  className?: string;
  variant?: "default" | "mobile-footer"; // For mobile footer positioning
}

export default function ProgressIndicator({ 
  currentQuestion, 
  totalQuestions,
  currentRound,
  totalRounds = 3,
  className = "",
  variant = "default"
}: ProgressIndicatorProps) {
  // Mobile footer variant has different layout - Q number on left, dots on right
  if (variant === "mobile-footer") {
    return (
      <div className={`flex items-center justify-between w-full ${className}`}>
        {/* Question counter - Figma Mobile: SF Pro Display, 20px, #03060f */}
        <span className="text-[#03060f] text-[20px] font-normal font-sf-pro-display leading-[1.4em]">
          Q{currentQuestion}/{totalQuestions}
        </span>
        
        {/* Round dots - Figma Mobile: 12px diameter, 3px gap */}
        <div className="flex items-center gap-[3px]">
          {Array.from({ length: totalRounds }, (_, i) => {
            const isCompleted = i + 1 < currentRound;
            const isCurrent = i + 1 === currentRound;
            
            return (
              <div
                key={i}
                className={`
                  w-[12px] h-[12px] rounded-full transition-all duration-300
                  ${isCompleted || isCurrent
                    ? 'bg-[#03060f]' 
                    : 'bg-transparent border-[1px] border-[#03060f]'
                  }
                `}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Default desktop variant
  return (
    <div className={`flex items-center gap-[clamp(12px,1.04vw,20px)] ${className}`}>
      {/* Question counter - Figma: SF Pro Display, 32px, #03060f */}
      <span className="text-[#03060f] text-[clamp(20px,1.67vw,32px)] font-normal font-sf-pro-display leading-[120%]">
        Q{currentQuestion}/{totalQuestions}
      </span>
      
      {/* Round dots - Figma: 14px diameter, 21px gap */}
      <div className="flex items-center gap-[clamp(12px,1.09vw,21px)]">
        {Array.from({ length: totalRounds }, (_, i) => {
          // Dot is filled if the round is completed (i + 1 < currentRound)
          // Or if it's the current round and we're past round 1 (i + 1 <= currentRound)
          const isCompleted = i + 1 < currentRound;
          const isCurrent = i + 1 === currentRound;
          
          return (
            <div
              key={i}
              className={`
                w-[clamp(8px,0.73vw,14px)] h-[clamp(8px,0.73vw,14px)] rounded-full transition-all duration-300
                ${isCompleted || isCurrent
                  ? 'bg-[#03060f]' 
                  : 'bg-transparent border-[1.4px] border-[#03060f]'
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
