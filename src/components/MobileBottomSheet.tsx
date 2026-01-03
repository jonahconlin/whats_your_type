"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface FontRanking {
  rank: number;
  fontName: string;
  percentage: number;
}

interface MobileBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  adjective: string;
  userFont: string;
  userFontPercentage: number;
  isMatched: boolean;
  topFonts: FontRanking[];
  otherFonts: FontRanking[];
}

// Map font names to their font-family CSS values
const getFontFamily = (fontName: string): string => {
  const fontMap: Record<string, string> = {
    "Alegreya": "var(--font-alegreya), serif",
    "EB Garamond": "var(--font-eb-garamond), serif",
    "Libre Baskerville": "var(--font-libre-baskerville), serif",
    "Playfair Display": "var(--font-playfair-display), serif",
    "Arvo": "var(--font-arvo), serif",
    "Source Sans 3": "var(--font-source-sans), sans-serif",
    "IBM Plex Sans": "var(--font-ibm-plex-sans), sans-serif",
    "Roboto": "var(--font-roboto), sans-serif",
    "Montserrat": "var(--font-montserrat), sans-serif",
    "Open Sans": "var(--font-open-sans), sans-serif",
    "Lobster": "var(--font-lobster), cursive",
    "Space Mono": "var(--font-space-mono), monospace",
  };
  return fontMap[fontName] || "inherit";
};

export default function MobileBottomSheet({
  isOpen,
  onClose,
  adjective,
  userFont,
  userFontPercentage,
  isMatched,
  topFonts,
  otherFonts,
}: MobileBottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when sheet is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0 }}
      />
      
      {/* Bottom Sheet */}
      <div 
        ref={sheetRef}
        className="absolute bottom-0 left-0 right-0 bg-[#1D202A] rounded-t-[20px] transition-transform duration-300 ease-out max-h-[85vh] overflow-hidden"
        style={{ 
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-[12px] pb-[8px]">
          <div className="w-[40px] h-[4px] bg-white/30 rounded-full" />
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-[16px] right-[16px] w-[24px] h-[24px] flex items-center justify-center"
          aria-label="Close"
        >
          <Image 
            src="/close-icon.svg" 
            alt="Close" 
            width={14} 
            height={14}
            className="opacity-60"
          />
        </button>
        
        {/* Content */}
        <div 
          className="flex flex-col overflow-y-auto"
          style={{ 
            gap: '24px',
            padding: '16px 24px 40px',
            maxHeight: 'calc(85vh - 36px)',
          }}
        >
          {/* Header section */}
          <div 
            className="flex flex-col"
            style={{ gap: '4px' }}
          >
            {/* Matched label */}
            <h3 
              className="font-sf-pro text-white"
              style={{
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: '0.91em'
              }}
            >
              You picked {userFont}
            </h3>
            
            {/* Description */}
            <p 
              className="font-sf-pro-display text-white"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '1.4em',
                opacity: 0.8
              }}
            >
              You have picked {userFont} for &apos;{adjective}&apos;. 
              {isMatched 
                ? ` It matches to other ${userFontPercentage}% of people.`
                : ` ${userFontPercentage}% of others picked this font.`
              }
            </p>
          </div>
          
          {/* Results wrapper */}
          <div 
            className="flex flex-col"
            style={{ gap: '16px' }}
          >
            {/* Top 5 Fonts section */}
            <div 
              className="flex flex-col"
              style={{ gap: '4px' }}
            >
              {topFonts.map((font, index) => (
                <div 
                  key={font.rank}
                  className="flex flex-col items-center"
                  style={{ gap: '4px' }}
                >
                  {/* Font row */}
                  <div 
                    className={`
                      flex items-center justify-between rounded-[50px] w-full
                      ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                    `}
                    style={{
                      gap: '12px',
                      padding: '10px 12px'
                    }}
                  >
                    {/* Left side: Rank + Font name */}
                    <div 
                      className="flex items-center flex-1 min-w-0"
                      style={{ gap: '4px' }}
                    >
                      {/* Rank */}
                      <span 
                        className={`font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`}
                        style={{ 
                          width: '20px',
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: '1.25em'
                        }}
                      >
                        {font.rank}
                      </span>
                      
                      {/* Font name - rendered in its actual font */}
                      <span 
                        className={`truncate flex-1 min-w-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`}
                        style={{ 
                          height: '20px',
                          fontFamily: getFontFamily(font.fontName),
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: '1.25em'
                        }}
                      >
                        {font.fontName}
                      </span>
                    </div>
                    
                    {/* Percentage */}
                    <span 
                      className={`font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`}
                      style={{ 
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.25em'
                      }}
                    >
                      {font.percentage}%
                    </span>
                  </div>
                  
                  {/* Separator line (except for last item) */}
                  {index < topFonts.length - 1 && (
                    <div 
                      className="self-stretch bg-white"
                      style={{ 
                        height: '1px',
                        opacity: 0.2
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Others section */}
            {otherFonts.length > 0 && (
              <div>
                {/* Others label */}
                <h4 
                  className="font-sf-pro text-white"
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '1.54em',
                    opacity: 0.5,
                    marginBottom: '14px'
                  }}
                >
                  Others
                </h4>
                
                {/* Others list */}
                <div 
                  className="flex flex-col"
                  style={{ gap: '4px' }}
                >
                  {otherFonts.map((font, index) => (
                    <div 
                      key={font.rank}
                      className="flex flex-col items-center"
                      style={{ gap: '4px' }}
                    >
                      {/* Font row */}
                      <div 
                        className={`
                          flex items-center justify-between rounded-[50px] w-full
                          ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                        `}
                        style={{
                          gap: '12px',
                          padding: '10px 12px'
                        }}
                      >
                        {/* Left side: Rank + Font name */}
                        <div 
                          className="flex items-center flex-1 min-w-0"
                          style={{ gap: '4px' }}
                        >
                          {/* Rank */}
                          <span 
                            className={`font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`}
                            style={{ 
                              width: '20px',
                              fontSize: '16px',
                              fontWeight: 400,
                              lineHeight: '1.25em'
                            }}
                          >
                            {font.rank}
                          </span>
                          
                          {/* Font name */}
                          <span 
                            className={`truncate flex-1 min-w-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`}
                            style={{ 
                              height: '20px',
                              fontFamily: getFontFamily(font.fontName),
                              fontSize: '16px',
                              fontWeight: 400,
                              lineHeight: '1.25em'
                            }}
                          >
                            {font.fontName}
                          </span>
                        </div>
                        
                        {/* Percentage */}
                        <span 
                          className={`font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`}
                          style={{ 
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '1.25em'
                          }}
                        >
                          {font.percentage}%
                        </span>
                      </div>
                      
                      {/* Separator line */}
                      {index < otherFonts.length - 1 && (
                        <div 
                          className="self-stretch bg-white"
                          style={{ 
                            height: '1px',
                            opacity: 0.2
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
