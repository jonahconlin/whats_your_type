"use client";

import Image from "next/image";

interface TutorialPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBegin: () => void;
}

export default function TutorialPopup({ isOpen, onClose, onBegin }: TutorialPopupProps) {
  if (!isOpen) return null;

  // Sample fonts for the tutorial demonstration
  const sampleFonts = [
    { name: "Arvo", fontClass: "font-arvo" },
    { name: "Lobster", fontClass: "font-lobster" },
    { name: "Roboto", fontClass: "font-roboto" },
    { name: "Alegreya", fontClass: "font-alegreya" },
  ];

  return (
    <>
      {/* Dark Overlay with Blur - Figma: rgba(0, 0, 0, 0.5) with 40px blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-[40px] z-[100]"
        onClick={onClose}
      />
      
      {/* Popup Container - Figma: 967px width, #1D202A bg, 32px border-radius */}
      <div 
        className="
          fixed 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[967px] 
          max-w-[90vw]
          bg-[#1D202A] 
          rounded-[32px] 
          z-[101]
          flex flex-col
          items-end
          pt-[48px]
          gap-[8px]
        "
      >
        {/* Close Button - Figma: 22x22, absolute position, 0.5 opacity */}
        <button 
          onClick={onClose}
          className="absolute top-[24px] right-[24px] opacity-50 hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Close"
        >
          <Image 
            src="/close-icon.svg" 
            alt="Close" 
            width={22} 
            height={22}
          />
        </button>

        {/* PopUp Content - Figma: column, center aligned, 66px gap */}
        <div className="flex flex-col items-center w-full gap-[66px]">
          
          {/* Instruction Container - Figma: column, 40px gap */}
          <div className="flex flex-col items-end gap-[40px] w-full max-w-[calc(100%-50px)] px-[49px]">
            
            {/* Title Container - Figma: column, 12px gap */}
            <div className="flex flex-col gap-[12px] w-full">
              {/* Instruction Title - Figma: SF Pro Display, 44px, white */}
              <h2 className="text-white text-[44px] font-normal font-sf-pro-display leading-[1.19em]">
                Select the font that best matches each
              </h2>
              
              {/* Keyword Container - Figma: border 1px white, border-radius 50px, padding 8px 22px */}
              <div className="inline-flex w-fit justify-center items-center px-[22px] py-[8px] border border-white rounded-[50px]">
                <span className="text-white text-[44px] font-normal font-sf-pro-display leading-[1.19em]">
                  Keyword
                </span>
              </div>
            </div>

            {/* Instruction Text Container - Figma: row, space-between, 126px gap */}
            <div className="flex flex-row justify-between items-center w-full gap-[126px]">
              {/* Instruction Text - Figma: SF Pro, 18px, white 40% opacity, 399px width */}
              <p className="text-white/40 text-[18px] font-normal font-sf-pro leading-[1.4em] w-[399px] max-w-full">
                Whatever font you choose will remain. The unselected one will change.
                <br /><br />
                You'll have three chances to decide on the best match for that keyword. After three rounds, the font that remains will be your selection and you'll move on to a new keyword.
              </p>

              {/* Font Options Container - Figma: column layout, 364px width */}
              <div className="grid grid-cols-2 gap-[9px] w-[450px]">
                {sampleFonts.map((font) => (
                  <div 
                    key={font.name}
                    className="relative w-[177.74px] h-[112.93px] bg-black rounded-[5.42px] flex flex-col items-center justify-center"
                  >
                    {/* Font Name Label - Figma: 4.57px, 50% opacity, positioned at top */}
                    <span 
                      className="absolute top-[9px] text-white/50 text-[10px] font-normal font-sf-pro-display leading-[1.19em]"
                    >
                      {font.name}
                    </span>
                    
                    {/* Sample Text - Figma: Various fonts, ~13-15px, centered */}
                    <span 
                      className={`text-white text-[15px] font-normal leading-[1.3em] text-center ${font.fontClass}`}
                    >
                      Handgloves
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button Container - Figma: border-top 1px white/20, padding 18px 10px, full width */}
          <div className="flex justify-center items-center w-full py-[18px] px-[10px] border-t border-white/20">
            <button
              onClick={onBegin}
              className="text-white/80 text-[20px] font-normal font-sf-pro leading-[1.3em] hover:text-white transition-colors cursor-pointer px-[40px] py-[6px] rounded-[56px] hover:bg-white/10"
            >
              Begin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
