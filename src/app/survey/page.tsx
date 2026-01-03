"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FontCard from "@/components/FontCard";
import AdjectivePill from "@/components/AdjectivePill";
import ProgressIndicator from "@/components/ProgressIndicator";
import ExitPopup from "@/components/ExitPopup";
import { submitSurveyResponse, SurveyResponseData } from "@/lib/supabase";

// The 10 adjectives in order
const ADJECTIVES = [
  "Casual",
  "Serious", 
  "Friendly",
  "Playful",
  "Quirky",
  "Authoritative",
  "Professional",
  "Formal",
  "Funny",
  "Trendy"
];

// Available Google Fonts
const AVAILABLE_FONTS = [
  "Alegreya",
  "EB Garamond",
  "Libre Baskerville",
  "Playfair Display",
  "Arvo",
  "Source Sans 3",
  "IBM Plex Sans",
  "Roboto",
  "Montserrat",
  "Open Sans",
  "Lobster",
  "Space Mono"
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get random fonts excluding already shown ones
function getRandomFonts(excludeFonts: string[] = []): string[] {
  const available = AVAILABLE_FONTS.filter(font => !excludeFonts.includes(font));
  return shuffleArray(available).slice(0, 4);
}

// Get 3 new fonts (excluding shown fonts and including selected font at specific position)
function getNewFonts(selectedFont: string, shownFonts: string[], selectedPosition: number): string[] {
  const excludeFonts = [...shownFonts, selectedFont];
  const newFonts = getRandomFonts(excludeFonts).slice(0, 3);
  
  // Create array with 4 positions, placing selected font at its original position
  const result: string[] = new Array(4);
  result[selectedPosition] = selectedFont;
  
  // Fill remaining positions with new fonts
  let newFontIndex = 0;
  for (let i = 0; i < 4; i++) {
    if (i !== selectedPosition) {
      result[i] = newFonts[newFontIndex];
      newFontIndex++;
    }
  }
  
  return result;
}

// Get gradient background path for an adjective
function getGradientPath(adjective: string): string {
  // Map adjective to gradient filename
  // Note: Playful_bgl.png appears to have a typo in the filename
  const gradientMap: Record<string, string> = {
    "Casual": "Casual_bg.png",
    "Serious": "Serious_bg.png",
    "Friendly": "Friendly_bg.png",
    "Playful": "Playful_bgl.png", // Using the actual filename with typo
    "Quirky": "Quirky_bg.png",
    "Authoritative": "Authoritative_bg.png",
    "Professional": "Professional_bg.png",
    "Formal": "Formal_bg.png",
    "Funny": "Funny_bg.png",
    "Trendy": "Trendy_bg.png",
  };
  
  const filename = gradientMap[adjective] || "survey-bg.png";
  return `/Gradient_bg/${filename}`;
}

interface SurveyResponse {
  adjective: string;
  selectedFont: string;
  fontOptions: string[];
}

export default function SurveyPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentRound, setCurrentRound] = useState(1); // 1, 2, or 3
  const [selectedFont, setSelectedFont] = useState<string | null>(null);
  const [selectedFontPosition, setSelectedFontPosition] = useState<number | null>(null); // Track position of selected font
  const [fontOptions, setFontOptions] = useState<string[]>([]);
  const [shownFonts, setShownFonts] = useState<string[]>([]); // Track fonts shown for current adjective
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Exit popup handlers
  const handleExitClick = () => {
    setShowExitPopup(true);
  };

  const handleExitConfirm = () => {
    // Clear any stored progress and navigate to home
    localStorage.removeItem('surveyResponses');
    router.push('/');
  };

  const handleExitCancel = () => {
    setShowExitPopup(false);
  };

  // Initialize fonts when question changes (first round)
  useEffect(() => {
    // Reset state for new adjective
    setCurrentRound(1);
    setSelectedFont(null);
    setSelectedFontPosition(null);
    setShownFonts([]);
    
    // First round: show 4 random fonts
    const newFonts = getRandomFonts();
    setFontOptions(newFonts);
    setShownFonts(newFonts);
  }, [currentQuestion]);

  const handleFontSelection = (selectedFontName: string, selectedIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Update selected font and its position
    setSelectedFont(selectedFontName);
    setSelectedFontPosition(selectedIndex);

    // Short delay for visual feedback
    setTimeout(() => {
      if (currentRound < 3) {
        // Not the final round: generate new fonts and move to next round
        // Keep selected font in the same position
        const newFonts = getNewFonts(selectedFontName, shownFonts, selectedIndex);
        const newShownFonts = newFonts.filter(f => f !== selectedFontName);
        
        setFontOptions(newFonts);
        setShownFonts(prev => [...prev, ...newShownFonts]);
        setCurrentRound(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        // Final round: save response and move to next adjective
        const finalResponse: SurveyResponse = {
          adjective: ADJECTIVES[currentQuestion - 1],
          selectedFont: selectedFontName,
          fontOptions: [...fontOptions]
        };
        
        setResponses(prev => [...prev, finalResponse]);

        if (currentQuestion < 10) {
          // Move to next adjective (this will trigger useEffect to reset)
          setCurrentQuestion(prev => prev + 1);
          setIsTransitioning(false);
        } else {
          // Survey complete - store responses and submit to Supabase
          const allResponses = [...responses, finalResponse];
          localStorage.setItem('surveyResponses', JSON.stringify(allResponses));
          
          // Transform responses for Supabase (map adjective -> font selection)
          const supabaseData: SurveyResponseData = {
            q1_casual: allResponses.find(r => r.adjective === 'Casual')?.selectedFont || '',
            q2_serious: allResponses.find(r => r.adjective === 'Serious')?.selectedFont || '',
            q3_friendly: allResponses.find(r => r.adjective === 'Friendly')?.selectedFont || '',
            q4_playful: allResponses.find(r => r.adjective === 'Playful')?.selectedFont || '',
            q5_quirky: allResponses.find(r => r.adjective === 'Quirky')?.selectedFont || '',
            q6_authoritative: allResponses.find(r => r.adjective === 'Authoritative')?.selectedFont || '',
            q7_professional: allResponses.find(r => r.adjective === 'Professional')?.selectedFont || '',
            q8_formal: allResponses.find(r => r.adjective === 'Formal')?.selectedFont || '',
            q9_funny: allResponses.find(r => r.adjective === 'Funny')?.selectedFont || '',
            q10_trendy: allResponses.find(r => r.adjective === 'Trendy')?.selectedFont || '',
          };
          
          // Submit to Supabase (fire and forget - don't block navigation)
          submitSurveyResponse(supabaseData)
            .then(() => console.log('Survey response submitted to Supabase'))
            .catch((error) => console.error('Failed to submit survey response:', error));
          
          router.push('/results');
        }
      }
    }, 300);
  };

  const currentAdjective = ADJECTIVES[currentQuestion - 1];
  const gradientPath = getGradientPath(currentAdjective);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Dynamic gradient based on current adjective */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{ backgroundImage: `url('${gradientPath}')` }}
      />
      
      {/* Navigation - Figma: 62px height desktop, 113px mobile */}
      <Navbar showExit={true} onExitClick={handleExitClick} mobileHeight="tall" />
      
      {/* Exit Confirmation Popup */}
      <ExitPopup 
        isOpen={showExitPopup}
        onClose={handleExitCancel}
        onExit={handleExitConfirm}
        onContinue={handleExitCancel}
      />
      
      {/* ===== MOBILE LAYOUT ===== */}
      {/* Figma Mobile: 390x844px, vertical stack layout */}
      <div className="md:hidden relative z-10 min-h-screen pt-[64px] flex flex-col">
        {/* Mobile Header - Figma: starts at y:112.76, height 156px */}
        {/* "Choose a font" at x:26 y:24 (from header), Adjective pill at x:26 y:76 (from header) */}
        <div className="h-[156px] relative">
          {/* Headline - Figma Mobile: x:26, y:24, 28px SF Pro Display, 304px width */}
          <h1 
            className="absolute text-[#03060f] text-[28px] font-normal font-sf-pro-display leading-[1.2em]"
            style={{ left: '26px', top: '24px', width: '304px' }}
          >
            Choose a font that feels
          </h1>
          
          {/* Adjective Pill - Figma Mobile: x:26, y:76, 148x56px pill, 38px text */}
          <div className="absolute" style={{ left: '26px', top: '76px' }}>
            <AdjectivePill adjective={currentAdjective} />
          </div>
        </div>
        
        {/* Mobile Font Cards - Figma: x:25, y:269, width 340px, 4 cards stacked, 116px each, 8px gap */}
        <div className="flex flex-col gap-[8px] px-[25px] pb-[88px]">
          {fontOptions.map((font, index) => (
            <FontCard
              key={`${currentQuestion}-${currentRound}-${font}-${index}`}
              fontFamily={font}
              onClick={() => handleFontSelection(font, index)}
              isSelected={font === selectedFont && currentRound > 1}
              className={`
                w-full h-[116px]
                transition-opacity duration-300 
                ${isTransitioning ? 'opacity-50 pointer-events-none' : 'opacity-100'}
              `}
            />
          ))}
        </div>
        
        {/* Mobile Footer - Figma: y:756, height 54px + HomeIndicator 34px = 88px total */}
        {/* Footer container at y:756, 54px height, Q text at x:23 y:26 */}
        <div className="fixed bottom-[34px] left-0 right-0 h-[54px] flex items-center">
          <div className="px-[23px] flex items-center justify-between w-full">
            <ProgressIndicator 
              currentQuestion={currentQuestion} 
              totalQuestions={10}
              currentRound={currentRound}
              variant="mobile-footer"
            />
          </div>
        </div>
        
        {/* HomeIndicator area - Figma: y:810, 34px height */}
        <div className="fixed bottom-0 left-0 right-0 h-[34px] bg-transparent" />
      </div>
      
      {/* ===== DESKTOP LAYOUT ===== */}
      {/* Figma Desktop: 1920px, left text area + right cards grid */}
      <div className="hidden md:block relative z-10 min-h-screen pt-[62px]">
        <div className="h-[calc(100vh-62px)] flex flex-col lg:flex-row">
          
          {/* Left Side - Text Content */}
          {/* Figma: padding-left 32px, content width 470px */}
          <div className="flex flex-col justify-between px-6 lg:pl-8 lg:pr-0 py-6 lg:py-[50px] lg:w-[clamp(300px,24.5vw,470px)] shrink-0">
            <div>
              {/* Headline - Figma: SF Pro Display, 52px, #03060f */}
              <h1 className="text-[#03060f] text-[clamp(28px,2.7vw,52px)] font-normal font-sf-pro-display leading-[120%]">
                Choose a font that feels
              </h1>
              
              {/* Adjective Pill - Figma: 24px gap from headline */}
              <div className="mt-[clamp(16px,1.25vw,24px)]">
                <AdjectivePill adjective={currentAdjective} />
              </div>
            </div>
            
            {/* Progress Indicator - Figma: positioned at bottom left */}
            <div className="mt-8 lg:mt-0">
              <ProgressIndicator 
                currentQuestion={currentQuestion} 
                totalQuestions={10}
                currentRound={currentRound}
              />
            </div>
          </div>
          
          {/* Right Side - Font Cards Grid */}
          {/* Figma: 2x2 grid, cards 658x450px, gap 32px */}
          <div className="flex-1 flex items-center justify-center p-4 lg:p-[24px] lg:pr-[32px]">
            <div 
              className="
                grid grid-cols-2 
                gap-[clamp(16px,1.67vw,32px)]
                w-full 
                h-full 
                max-h-[calc(100vh-140px)]
                lg:max-h-[calc(100vh-110px)]
              "
            >
              {fontOptions.map((font, index) => (
                <FontCard
                  key={`${currentQuestion}-${currentRound}-${font}-${index}`}
                  fontFamily={font}
                  onClick={() => handleFontSelection(font, index)}
                  isSelected={font === selectedFont && currentRound > 1}
                  className={`
                    w-full h-full 
                    min-h-[150px]
                    transition-opacity duration-300 
                    ${isTransitioning ? 'opacity-50 pointer-events-none' : 'opacity-100'}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
