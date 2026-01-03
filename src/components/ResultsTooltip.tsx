"use client";

interface FontRanking {
  rank: number;
  fontName: string;
  percentage: number;
}

interface ResultsTooltipProps {
  adjective: string;
  userFont: string;
  userFontPercentage: number;
  isMatched: boolean;
  topFonts: FontRanking[];
  otherFonts: FontRanking[];
  position?: { x: number; y: number };
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

export default function ResultsTooltip({
  adjective,
  userFont,
  userFontPercentage,
  isMatched,
  topFonts,
  otherFonts,
}: ResultsTooltipProps) {
  return (
    <div 
      className="flex flex-col items-center bg-[#1D202A] rounded-[10px] overflow-y-auto overflow-x-hidden"
      style={{ 
        gap: '24px',
        padding: '24px',
        height: '452px',
        width: '307px' // Fixed width for consistency across all tooltips
      }}
    >
      {/* Header section - ResultsTooltip_Header */}
      <div 
        className="flex flex-col self-stretch"
        style={{ gap: '4px' }}
      >
        {/* Matched label - style_863G73 */}
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
        
        {/* Description - style_ANQI40 */}
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
      
      {/* Results wrapper - ResultsTooltip_ResultsWrapper */}
      <div 
        className="flex flex-col relative"
        style={{ gap: '16px', width: '100%' }}
      >
        {/* Top 5 Fonts section - ResultsTooltip_ResultsList */}
        <div 
          className="flex flex-col self-stretch"
          style={{ gap: '4px' }}
        >
          {topFonts.map((font, index) => (
            <div 
              key={font.rank}
              className="flex flex-col items-center self-stretch"
              style={{ gap: '4px' }}
            >
              {/* Font row - ResultsTooltip_Row */}
              <div 
                className={`
                  flex items-center justify-between rounded-[50px]
                  ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                `}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  gap: '12px',
                  padding: '10px 12px'
                }}
              >
                {/* Left side: Rank + Font name */}
                <div 
                  className="flex items-center flex-1 min-w-0"
                  style={{ gap: '4px' }}
                >
                  {/* Rank - style_ZUJQ5N */}
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
                
                {/* Percentage - style_ZUJQ5N */}
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
        
        {/* Others section - ResultsTooltip_Other */}
        {otherFonts.length > 0 && (
          <div style={{ width: '100%' }}>
            {/* Others label - style_OV5VLS */}
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
            
            {/* Others list - ResultsTooltip_ResultsList */}
            <div 
              className="flex flex-col"
              style={{ gap: '4px' }}
            >
              {otherFonts.map((font, index) => (
                <div 
                  key={font.rank}
                  className="flex flex-col items-center self-stretch"
                  style={{ gap: '4px' }}
                >
                  {/* Font row - ResultsTooltip_Row */}
                  <div 
                    className={`
                      flex items-center justify-between rounded-[50px]
                      ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                    `}
                    style={{
                      width: '100%',
                      maxWidth: '100%',
                      gap: '12px',
                      padding: '10px 12px'
                    }}
                  >
                    {/* Left side: Rank + Font name */}
                    <div 
                      className="flex items-center flex-1 min-w-0"
                      style={{ gap: '4px' }}
                    >
                      {/* Rank - style_ZUJQ5N */}
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
                    
                    {/* Percentage - style_ZUJQ5N */}
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
  );
}
