"use client";

import Image from "next/image";

interface ExitPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onExit: () => void;
  onContinue: () => void;
}

export default function ExitPopup({ isOpen, onClose, onExit, onContinue }: ExitPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay with Blur - Figma: rgba(0, 0, 0, 0.5) with 40px blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-[40px] z-[100]"
        onClick={onClose}
      />
      
      {/* Popup Container - Figma: 486px width, #1D202A bg, 10px border-radius */}
      <div 
        className="
          fixed 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[486px] 
          max-w-[90vw]
          bg-[#1D202A] 
          rounded-[10px] 
          z-[101]
          flex flex-col
          pt-4
          pb-0
        "
      >
        {/* Header Section - Figma: 444px width, space-between, gap 137px */}
        <div className="flex justify-between items-center w-[444px] max-w-[calc(100%-42px)] px-0 mx-auto mb-[34px]">
          {/* Header Text - Figma: SF Pro, 20px, white, 1.3em line-height */}
          <p className="text-white text-[20px] font-normal font-sf-pro leading-[130%] whitespace-pre-line">
            Are you sure to exit this page?{"\n"}The progress will not be saved.
          </p>
          
          {/* Close Button - Figma: 22x22, 50% opacity */}
          <button 
            onClick={onContinue}
            className="opacity-50 hover:opacity-80 transition-opacity flex-shrink-0 cursor-pointer"
            aria-label="Close"
          >
            <Image 
              src="/close-icon.svg" 
              alt="Close" 
              width={22} 
              height={22}
            />
          </button>
        </div>
        
        {/* Top Horizontal Divider - Figma: white, 20% opacity, 1px */}
        <div className="w-full h-[1px] bg-white/20" />
        
        {/* Button Section - Figma: 80px height, full width */}
        <div className="flex items-center w-full h-[80px]">
          
          {/* Buttons Container */}
          <div className="flex items-center h-full w-full">
            {/* Exit Button - Figma: 243px width, 80px height */}
            <button
              onClick={onExit}
              className="
                w-[243px] h-[80px]
                flex items-center justify-center
                group
              "
            >
              <span className="
                px-[70px] py-[6px]
                rounded-[56px]
                text-white text-[20px] font-normal font-sf-pro leading-[130%]
                group-hover:bg-white/10 transition-colors
              ">
                Exit
              </span>
            </button>
            
            {/* Vertical Divider - Figma: 28px height, white, 20% opacity */}
            <div className="w-[1px] h-[28px] bg-white/20" />
            
            {/* Continue Button - Figma: 243px width, 80px height */}
            <button
              onClick={onContinue}
              className="
                w-[243px] h-[80px]
                flex items-center justify-center
                group
              "
            >
              <span className="
                px-[46px] py-[6px]
                rounded-[56px]
                text-white text-[20px] font-normal font-sf-pro leading-[130%]
                group-hover:bg-white/10 transition-colors
              ">
                Continue
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
