"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ResultsTooltip from "@/components/ResultsTooltip";
import MobileBottomSheet from "@/components/MobileBottomSheet";
import { supabase, SurveyResponseData } from "@/lib/supabase";

// The 10 adjectives in order (matching survey order)
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

// Available fonts in the survey
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

// Design Archetypes mapping
interface Archetype {
  name: string;
  description: string;
  shortDescription: string;
  fonts: string[];
}

const DESIGN_ARCHETYPES: Archetype[] = [
  {
    name: "The Heritage Serif",
    description: "Organic, historical, and scholarly",
    shortDescription: "heritage serif typefaces that have a historic and scholarly feel",
    fonts: ["Alegreya", "EB Garamond"]
  },
  {
    name: "The Sophisticate",
    description: "Sharp, elegant, and high-contrast",
    shortDescription: "sophisticated types with sharp, elegant, and high-contrast forms",
    fonts: ["Libre Baskerville", "Playfair Display"]
  },
  {
    name: "The Industrialist",
    description: "Sturdy, confident, and architectural",
    shortDescription: "slab Serif types that are sturdy, confident, and architectural in nature with thick block-like serifs",
    fonts: ["Arvo"]
  },
  {
    name: "The Modernist",
    description: "Objective, clean, and efficient",
    shortDescription: "classically modern sans-serif types that are geometric, clean, and highly legible",
    fonts: ["Source Sans 3", "IBM Plex Sans", "Roboto", "Montserrat"]
  },
  {
    name: "The Approachable Sans",
    description: "Warm, legible, and friendly",
    shortDescription: "humanist sans-serif types that are friendly and legible with clean open forms and a friendly character",
    fonts: ["Open Sans"]
  },
  {
    name: "The Specialist",
    description: "Decorative flair or technical precision",
    shortDescription: "stylistic script or monospaced types with decorative flair or technical precision",
    fonts: ["Lobster", "Space Mono"]
  }
];

// Create a reverse mapping from font name to archetype
const FONT_TO_ARCHETYPE: Record<string, Archetype> = {};
DESIGN_ARCHETYPES.forEach(archetype => {
  archetype.fonts.forEach(font => {
    FONT_TO_ARCHETYPE[font] = archetype;
  });
});

interface SurveyResponse {
  adjective: string;
  selectedFont: string;
  fontOptions: string[];
}

interface FontResult {
  fontName: string;
  percentage: number;
  isUserSelected: boolean;
}

interface AdjectiveResults {
  adjective: string;
  topFonts: FontResult[];
  otherFonts: FontResult[];
  userFont: string;
  otherPercentage: number;
  userInOther: boolean;
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

// Map database column names to adjectives
const ADJECTIVE_TO_COLUMN: Record<string, keyof SurveyResponseData> = {
  "Casual": "q1_casual",
  "Serious": "q2_serious",
  "Friendly": "q3_friendly",
  "Playful": "q4_playful",
  "Quirky": "q5_quirky",
  "Authoritative": "q6_authoritative",
  "Professional": "q7_professional",
  "Formal": "q8_formal",
  "Funny": "q9_funny",
  "Trendy": "q10_trendy",
};

// Calculate real results from Supabase data
function calculateResultsFromData(
  allResponses: SurveyResponseData[],
  userResponses: SurveyResponse[]
): AdjectiveResults[] {
  const results: AdjectiveResults[] = [];
  
  for (const adjective of ADJECTIVES) {
    const userResponse = userResponses.find(r => r.adjective === adjective);
    const userFont = userResponse?.selectedFont || '';
    const columnName = ADJECTIVE_TO_COLUMN[adjective];
    
    // Count font selections for this adjective
    const fontCounts: Record<string, number> = {};
    let totalCount = 0;
    
    allResponses.forEach((response) => {
      const selectedFont = response[columnName];
      if (selectedFont) {
        fontCounts[selectedFont] = (fontCounts[selectedFont] || 0) + 1;
        totalCount++;
      }
    });
    
    // If no data, return empty results
    if (totalCount === 0) {
      results.push({
        adjective,
        topFonts: [],
        otherFonts: [],
        userFont,
        otherPercentage: 0,
        userInOther: false,
      });
      continue;
    }
    
    // Convert counts to percentages and sort
    const fontPercentages = Object.entries(fontCounts)
      .map(([font, count]) => ({
        font,
        percentage: Math.round((count / totalCount) * 100),
        count,
      }))
      .sort((a, b) => b.percentage - a.percentage);
    
    // Top 5 fonts
    const top5 = fontPercentages.slice(0, 5).map((fp) => ({
      fontName: fp.font,
      percentage: fp.percentage,
      isUserSelected: fp.font === userFont,
    }));
    
    // Other fonts (6+)
    const others = fontPercentages.slice(5).map((fp) => ({
      fontName: fp.font,
      percentage: fp.percentage,
      isUserSelected: fp.font === userFont,
    }));
    
    const otherPercentage = others.reduce((sum, f) => sum + f.percentage, 0);
    const userInOther = others.some(f => f.fontName === userFont);
    
    results.push({
      adjective,
      topFonts: top5,
      otherFonts: others,
      userFont,
      otherPercentage,
      userInOther,
    });
  }
  
  return results;
}

// Desktop Font Pill Component
function FontPill({
  fontName,
  percentage,
  isSelected,
  isOther,
  adjective,
  widthPct,
  onMouseEnter,
  onMouseLeave,
}: {
  fontName: string;
  percentage: number;
  isSelected: boolean;
  isOther?: boolean;
  adjective: string;
  widthPct: number;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: () => void;
}) {
  const gradientPath = getGradientPath(adjective);
  
  // Estimate if less than 3 characters of font name would be visible
  // When truncated, we show fontName.slice(0, 4) + "..."
  // If width is very small, we might show less than 3 actual characters
  // Very narrow pills (less than ~6-7%) likely show less than 3 characters after truncation
  const showNoText = !isOther && widthPct < 7;
  
  // Display text
  let displayText: string;
  if (showNoText) {
    // Show no text if pill is too narrow
    displayText = '';
  } else {
    displayText = isOther 
      ? `Others ${percentage}%`
      : `${fontName} ${percentage}%`;
  }
  
  // Truncate if width is small (but not if we're already showing no text)
  const shouldTruncate = !showNoText && widthPct < 12;
  const truncatedText = shouldTruncate 
    ? (isOther ? `Oth...` : (fontName.length > 4 ? `${fontName.slice(0, 4)}...` : fontName))
    : displayText;

  return (
    <div
      className="relative h-[45px] rounded-[44px] flex items-center justify-start transition-all duration-200 cursor-pointer overflow-hidden"
      style={{ 
        flex: `0 1 ${widthPct}%`,
        minWidth: 0,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background */}
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
        <div className="absolute inset-0 rounded-[44px] bg-white/20" />
      )}
      
      {/* Text */}
      {truncatedText && (
        <span 
          className="relative z-10 px-[20px] font-sf-pro-display font-bold text-[15px] leading-[1.19em] whitespace-nowrap overflow-hidden text-ellipsis text-[#03060F]/80"
        >
          {truncatedText}
        </span>
      )}
    </div>
  );
}

// Mobile Result Bar Component - Figma: shows user's pick with percentage
function MobileResultBar({
  fontName,
  percentage,
  isSelected,
  adjective,
}: {
  fontName: string;
  percentage: number;
  isSelected: boolean;
  adjective: string;
}) {
  const gradientPath = getGradientPath(adjective);
  
  // Calculate width based on percentage (max 135px in Figma)
  const barWidth = Math.max(36, Math.min(135, (percentage / 100) * 135));
  
  return (
    <div className="flex items-center gap-[12px]">
      {/* Progress bar */}
      <div 
        className="h-[36px] rounded-[40px] overflow-hidden"
        style={{ width: `${barWidth}px` }}
      >
        {isSelected ? (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('${gradientPath}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <div className="w-full h-full bg-[#35383F]" />
        )}
      </div>
      
      {/* Font name and percentage */}
      <span className={`font-sf-pro-display text-[15px] font-medium leading-[1.19em] ${isSelected ? 'text-[#03060F]' : 'text-white/40'}`}>
        {fontName} {percentage}%
      </span>
    </div>
  );
}

// Keyword Pill Component (for adjectives) - desktop
function KeywordPill({ adjective }: { adjective: string }) {
  return (
    <div className="inline-flex items-center justify-center px-[20px] py-[10px] border border-white rounded-[60px]">
      <span className="text-white font-sf-pro-display text-[22px] leading-[1.19em]">
        {adjective}
      </span>
    </div>
  );
}

// Mobile Keyword Pill Component - Figma: 20px text, border 60% opacity
function MobileKeywordPill({ adjective }: { adjective: string }) {
  return (
    <div className="inline-flex items-center justify-center px-[12px] py-[6px] border border-white/60 rounded-[60px]">
      <span className="text-white font-sf-pro-display text-[20px] leading-[1.19em]">
        {adjective}
      </span>
    </div>
  );
}

export default function ResultsPage() {
  const router = useRouter();
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [results, setResults] = useState<AdjectiveResults[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredPill, setHoveredPill] = useState<{ adjective: string; type: 'font' | 'other'; fontName?: string } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number; above: boolean }>({ x: 0, y: 0, above: false });
  const [selectedAdjective, setSelectedAdjective] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleReturnHome = () => {
    router.push('/');
  };

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      
      // Get user's responses from localStorage
      const storedResponses = localStorage.getItem('surveyResponses');
      let userResponses: SurveyResponse[] = [];
      
      if (storedResponses) {
        userResponses = JSON.parse(storedResponses);
        setResponses(userResponses);
      } else {
        // If no user responses, create empty array (results will still show aggregate data)
        setResponses([]);
      }
      
      try {
        // Fetch all survey responses from Supabase
        const { data: allResponses, error } = await supabase
          .from('survey_responses')
          .select('*');
        
        if (error) {
          console.error('Error fetching survey responses:', error);
          // Fallback to empty results if fetch fails
          setResults([]);
          setIsLoading(false);
          return;
        }
        
        // Calculate results from real data
        const calculatedResults = calculateResultsFromData(
          allResponses || [],
          userResponses
        );
        
        setResults(calculatedResults);
      } catch (error) {
        console.error('Error processing survey responses:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchResults();
  }, []);

  const handlePillHover = (
    adjective: string, 
    type: 'font' | 'other', 
    fontName: string | undefined,
    event: React.MouseEvent
  ) => {
    // Clear any pending hide timeout
    if (hideTooltipTimeoutRef.current) {
      clearTimeout(hideTooltipTimeoutRef.current);
      hideTooltipTimeoutRef.current = null;
    }
    
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (containerRect) {
      const tooltipHeight = 452; // Fixed tooltip height
      const tooltipWidth = 307; // Fixed tooltip width
      const spacing = 10; // Space between pill and tooltip
      
      // Calculate position relative to container
      const pillCenterX = rect.left - containerRect.left + rect.width / 2;
      const pillBottom = rect.bottom - containerRect.top;
      const pillTop = rect.top - containerRect.top;
      
      // Check if pill is in the top row (first result in results array)
      const isTopRow = results.length > 0 && results[0].adjective === adjective;
      
      // Check viewport space (using window dimensions for accurate viewport detection)
      const viewportHeight = window.innerHeight;
      const pillBottomViewport = rect.bottom;
      const pillTopViewport = rect.top;
      
      const spaceBelow = viewportHeight - pillBottomViewport;
      const spaceAbove = pillTopViewport;
      
      // Always show below for top row, otherwise show above if there's not enough space below AND more space above
      const showAbove = !isTopRow && spaceBelow < tooltipHeight + spacing && spaceAbove > spaceBelow;
      
      // Calculate Y position relative to container
      let y: number;
      if (showAbove) {
        // Position above the pill - Y will be the bottom of tooltip after transform
        y = pillTop - spacing;
      } else {
        // Position below the pill
        y = pillBottom + spacing;
      }
      
      // Ensure tooltip stays within container horizontally
      let x = pillCenterX;
      const halfTooltipWidth = tooltipWidth / 2;
      const minX = halfTooltipWidth;
      const maxX = containerRect.width - halfTooltipWidth;
      
      if (x < minX) {
        x = minX;
      } else if (x > maxX) {
        x = maxX;
      }
      
      setTooltipPosition({
        x,
        y,
        above: showAbove,
      });
    }
    
    setHoveredPill({ adjective, type, fontName });
  };

  const handlePillLeave = () => {
    // Add delay before hiding tooltip (500ms)
    hideTooltipTimeoutRef.current = setTimeout(() => {
      setHoveredPill(null);
      hideTooltipTimeoutRef.current = null;
    }, 500);
  };

  const handleTooltipEnter = () => {
    // Clear hide timeout when mouse enters tooltip
    if (hideTooltipTimeoutRef.current) {
      clearTimeout(hideTooltipTimeoutRef.current);
      hideTooltipTimeoutRef.current = null;
    }
  };

  const handleTooltipLeave = () => {
    // Hide tooltip when mouse leaves tooltip
    setHoveredPill(null);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTooltipTimeoutRef.current) {
        clearTimeout(hideTooltipTimeoutRef.current);
      }
    };
  }, []);

  // Calculate match percentage - average of percentages of respondents who chose the same fonts as the user
  const calculateMatchPercentage = (): number => {
    if (results.length === 0 || responses.length === 0) {
      return 50;
    }
    
    const percentages: number[] = [];
    
    // For each user response, find the percentage of other respondents who chose the same font
    responses.forEach(response => {
      const result = results.find(r => r.adjective === response.adjective);
      if (result) {
        // Find the percentage for the user's selected font
        const userFontResult = result.topFonts.find(f => f.fontName === response.selectedFont) 
          || result.otherFonts.find(f => f.fontName === response.selectedFont);
        
        if (userFontResult) {
          percentages.push(userFontResult.percentage);
        }
      }
    });
    
    // Calculate average
    if (percentages.length === 0) {
      return 50;
    }
    
    const sum = percentages.reduce((acc, pct) => acc + pct, 0);
    return Math.round(sum / percentages.length);
  };
  
  const matchPercentage = calculateMatchPercentage();

  // Calculate archetype preferences from user responses
  const calculateArchetypePreferences = (): { primary: Archetype; avoided: Archetype } => {
    // Count frequency of each archetype
    const archetypeCounts: Record<string, number> = {};
    
    // Initialize all archetypes to 0
    DESIGN_ARCHETYPES.forEach(archetype => {
      archetypeCounts[archetype.name] = 0;
    });
    
    // Count selections for each archetype
    responses.forEach(response => {
      const archetype = FONT_TO_ARCHETYPE[response.selectedFont];
      if (archetype) {
        archetypeCounts[archetype.name]++;
      }
    });
    
    // Find primary (highest frequency)
    let primary = DESIGN_ARCHETYPES[0];
    let maxCount = archetypeCounts[primary.name];
    
    DESIGN_ARCHETYPES.forEach(archetype => {
      const count = archetypeCounts[archetype.name];
      if (count > maxCount) {
        maxCount = count;
        primary = archetype;
      }
    });
    
    // Find avoided (lowest frequency, or zero)
    let avoided = DESIGN_ARCHETYPES[0];
    let minCount = archetypeCounts[avoided.name];
    
    DESIGN_ARCHETYPES.forEach(archetype => {
      const count = archetypeCounts[archetype.name];
      if (count < minCount) {
        minCount = count;
        avoided = archetype;
      }
    });
    
    return { primary, avoided };
  };

  const archetypePreferences = responses.length > 0 ? calculateArchetypePreferences() : null;

  if (isLoading) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-[#03060F]">
        <Navbar showExit={true} variant="dark" exitText="Return Home" onExitClick={handleReturnHome} mobileHeight="short" />
        <div className="relative z-10 min-h-screen pt-[66px] flex items-center justify-center">
          <p className="text-white font-sf-pro-display text-[22px]">
            Loading results...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#03060F]">
      {/* Navigation - Figma Mobile: 66px height */}
      <Navbar showExit={true} variant="dark" exitText="Return Home" onExitClick={handleReturnHome} mobileHeight="short" />
      
      {/* ===== MOBILE LAYOUT ===== */}
      {/* Figma Mobile: 390x1028px (scrollable), dark background, pb-128px */}
      <div className="md:hidden relative z-10 min-h-screen pt-[66px] pb-[128px] overflow-auto">
        {/* Container - Figma: 24px gap between sections */}
        <div className="flex flex-col gap-[24px]">
          {/* Content Container - Figma: 32px gap, centered */}
          <div className="flex flex-col gap-[32px]">
            {/* Header Container - Figma: 24px gap, 338px width */}
            <div className="pt-[136px] px-[26px]">
              {/* Title - Figma: 38px at y:202 */}
              <h1 className="text-white font-sf-pro-display text-[38px] font-normal leading-[1.19em] mb-[24px]">
                {archetypePreferences 
                  ? <>You're a <span className="underline" style={{ textUnderlineOffset: '12px' }}>{archetypePreferences.primary.name.replace(/^The /, '')}</span></>
                  : `You're ${matchPercentage >= 70 ? 'a' : 'an'} ${matchPercentage >= 70 ? 'Conformist' : matchPercentage >= 40 ? 'Explorer' : 'Trailblazer'}`
                }
              </h1>
              
              {/* Description - Figma: 18px, 70% opacity, light weight */}
              <p className="text-white/70 font-sf-pro-display text-[18px] font-light leading-[1.4em]">
                {archetypePreferences ? (
                  <>
                    Overall, you matched with {matchPercentage}% of other responses. You have a preference for {archetypePreferences.primary.shortDescription} and you tend to stay away from {archetypePreferences.avoided.shortDescription}.
                  </>
                ) : (
                  <>
                    Overall, you matched with {matchPercentage}% of other responses. 
                    {matchPercentage >= 70 
                      ? " You tend to follow popular font choices, aligning with the majority on most selections."
                      : matchPercentage >= 40
                      ? " You follow the crowd on some fonts, but forge your own path on others."
                      : " You have unique taste in fonts, often choosing differently from the majority."
                    }
                  </>
                )}
              </p>
            </div>
            
            {/* List Container - Figma: full width */}
            <div className="flex flex-col">
              {/* List Header Container - Figma: 8px 16px padding, 10px gap */}
              <div className="flex flex-col gap-[10px] px-[16px] py-[8px]">
                {/* List Header - Figma: 6px gap */}
                <div className="flex flex-col gap-[6px]">
                  {/* List Header Text Container */}
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 font-sf-pro-display text-[14px] leading-[1.19em]">
                      Keywords
                    </span>
                    <span className="text-white/40 font-sf-pro-display text-[14px] leading-[1.19em]">
                      Your pick
                    </span>
                  </div>
                  {/* Divider - Figma: white line at 30% opacity */}
                  <div className="w-full h-[1px] bg-white/30" />
                </div>
              </div>
              
              {/* Mobile Results List - Figma: keyword pills left, your pick pill right */}
              {results.map((result) => {
                const userFontResult = result.topFonts.find(f => f.isUserSelected) 
                  || result.otherFonts.find(f => f.isUserSelected);
                
                return (
                  <div 
                    key={result.adjective} 
                    className="flex items-center py-[8px] px-[16px] cursor-pointer active:bg-white/5 transition-colors"
                    onClick={() => setSelectedAdjective(result.adjective)}
                  >
                    {/* Keyword Container - Figma: 130px x 36px */}
                    <div className="w-[130px] h-[36px] shrink-0 flex items-center">
                      <MobileKeywordPill adjective={result.adjective} />
                    </div>
                    
                    {/* Spacer - Figma: 38px gap */}
                    <div className="w-[38px] shrink-0" />
                    
                    {/* Your Pick Container - Figma: 189px, row layout, 12px gap */}
                    <div className="flex items-center gap-[12px] flex-1">
                      {/* Pill_Shape - Figma: 165px x 36px, 100px border-radius, gradient bg */}
                      <div 
                        className="h-[36px] rounded-[100px] flex items-center px-[12px] overflow-hidden"
                        style={{ 
                          width: '165px',
                          backgroundImage: `url('${getGradientPath(result.adjective)}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        {/* Your Pick Text - Figma: 15px, font-weight 500, #1C1D1E */}
                        <span className="font-sf-pro-display text-[15px] font-medium leading-[1.19em] text-[#1C1D1E] whitespace-nowrap overflow-hidden text-ellipsis">
                          {result.userFont} {userFontResult?.percentage || 0}%
                        </span>
                      </div>
                      
                      {/* Chevron Icon - Figma: 12x12px white stroke */}
                      <Image 
                        src="/chevron-right.svg" 
                        alt="View details" 
                        width={12} 
                        height={12}
                        className="shrink-0"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Sheet */}
      {selectedAdjective && (() => {
        const result = results.find(r => r.adjective === selectedAdjective);
        if (!result) return null;
        
        const userFontResult = result.topFonts.find(f => f.isUserSelected) 
          || result.otherFonts.find(f => f.isUserSelected);
        
        return (
          <MobileBottomSheet
            isOpen={true}
            onClose={() => setSelectedAdjective(null)}
            adjective={result.adjective}
            userFont={result.userFont}
            userFontPercentage={userFontResult?.percentage || 0}
            isMatched={result.topFonts.some(f => f.isUserSelected)}
            topFonts={result.topFonts.map((f, i) => ({
              rank: i + 1,
              fontName: f.fontName,
              percentage: f.percentage,
            }))}
            otherFonts={result.otherFonts.map((f, i) => ({
              rank: i + 6,
              fontName: f.fontName,
              percentage: f.percentage,
            }))}
          />
        );
      })()}
      
      {/* ===== DESKTOP LAYOUT ===== */}
      <div ref={containerRef} className="hidden md:block relative z-10 min-h-screen pt-[66px]">
        {/* Header Section */}
        <div className="flex pl-[40px] pr-[32px] pt-[49px] pb-[40px]">
          {/* Left - Title */}
          <div className="w-[960px]">
            <h1 className="text-white font-sf-pro-display text-[80px] font-normal leading-[1.2em]">
              {archetypePreferences 
                ? <>You're a <span className="underline" style={{ textUnderlineOffset: '12px' }}>{archetypePreferences.primary.name.replace(/^The /, '')}</span></>
                : `You're ${matchPercentage >= 70 ? 'a' : 'an'} ${matchPercentage >= 70 ? 'Conformist' : matchPercentage >= 40 ? 'Explorer' : 'Trailblazer'}`
              }
            </h1>
          </div>
          
          {/* Right - Description */}
          <div className="flex-1 pt-[19px]">
            <p className="text-white font-sf-pro-display text-[22px] leading-[1.5em] max-w-[703px]">
              {archetypePreferences ? (
                <>
                  Overall, you matched with {matchPercentage}% of other responses. You have a preference for {archetypePreferences.primary.shortDescription} and you tend to stay away from {archetypePreferences.avoided.shortDescription}.
                </>
              ) : (
                <>
                  Overall, you matched with {matchPercentage}% of other responses. 
                  {matchPercentage >= 70 
                    ? " You tend to follow popular font choices, aligning with the majority on most selections."
                    : matchPercentage >= 40
                    ? " You follow the crowd on some fonts, but forge your own path on others."
                    : " You have unique taste in fonts, often choosing differently from the majority."
                  }
                </>
              )}
            </p>
          </div>
        </div>
        
        {/* Results Table */}
        <div className="pl-[40px] pr-[32px] pb-[40px]">
          {/* Table Header */}
          <div className="flex items-end mb-[30px]">
            {/* Keywords header */}
            <div className="w-[368px] shrink-0">
              <span className="text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]">
                Keywords
              </span>
            </div>
            
            {/* Top 5 fonts header */}
            <div className="flex-1 min-w-0">
              <span className="text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]">
                Top 5 fonts
              </span>
            </div>
          </div>
          
          {/* Divider line */}
          <div className="w-full h-[1px] bg-white/30 mb-[30px]" />
          
          {/* Results Rows */}
          <div className="space-y-[35px]">
            {results.map((result) => {
              return (
                <div key={result.adjective} className="flex items-center min-w-0">
                  {/* Keyword Pill */}
                  <div className="w-[368px] shrink-0">
                    <KeywordPill adjective={result.adjective} />
                  </div>
                  
                  {/* Font Pills */}
                  <div className="flex-1 flex gap-0 items-center min-w-0" style={{ width: '100%', maxWidth: '100%' }}>
                    {result.topFonts.map((font) => {
                      // Use actual percentage directly - each pill takes up its share of responses
                      return (
                        <FontPill
                          key={font.fontName}
                          fontName={font.fontName}
                          percentage={font.percentage}
                          isSelected={font.isUserSelected}
                          adjective={result.adjective}
                          widthPct={font.percentage}
                          onMouseEnter={(e: React.MouseEvent) => handlePillHover(result.adjective, 'font', font.fontName, e)}
                          onMouseLeave={handlePillLeave}
                        />
                      );
                    })}
                    
                    {/* Others Pill */}
                    {result.otherPercentage > 0 && (
                      <FontPill
                        fontName="Others"
                        percentage={result.otherPercentage}
                        isSelected={result.userInOther}
                        isOther={true}
                        adjective={result.adjective}
                        widthPct={result.otherPercentage}
                        onMouseEnter={(e: React.MouseEvent) => handlePillHover(result.adjective, 'other', undefined, e)}
                        onMouseLeave={handlePillLeave}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Tooltip */}
        {hoveredPill && (
          <div 
            className="absolute z-50 pointer-events-auto"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: tooltipPosition.above 
                ? 'translateX(-50%) translateY(-100%)' 
                : 'translateX(-50%)',
            }}
            onMouseEnter={handleTooltipEnter}
            onMouseLeave={handleTooltipLeave}
          >
            {(() => {
              const result = results.find(r => r.adjective === hoveredPill.adjective);
              if (!result) return null;
              
              const userFontResult = result.topFonts.find(f => f.isUserSelected) 
                || result.otherFonts.find(f => f.isUserSelected);
              
              return (
                <ResultsTooltip
                  adjective={result.adjective}
                  userFont={result.userFont}
                  userFontPercentage={userFontResult?.percentage || 0}
                  isMatched={result.topFonts.some(f => f.isUserSelected)}
                  topFonts={result.topFonts.map((f, i) => ({
                    rank: i + 1,
                    fontName: f.fontName,
                    percentage: f.percentage,
                  }))}
                  otherFonts={result.otherFonts.map((f, i) => ({
                    rank: i + 6,
                    fontName: f.fontName,
                    percentage: f.percentage,
                  }))}
                />
              );
            })()}
          </div>
        )}
      </div>
    </main>
  );
}
