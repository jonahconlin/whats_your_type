"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import TutorialPopup from "@/components/TutorialPopup";

export default function Home() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTutorial, setShowTutorial] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isShareHovered, setIsShareHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleStartSurvey = () => {
    // On mobile, skip tutorial and go directly to survey
    if (isMobile) {
      router.push("/survey");
    } else {
      setShowTutorial(true);
    }
  };

  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  const handleBeginSurvey = () => {
    setShowTutorial(false);
    router.push("/survey");
  };

  const handleShare = async () => {
    const surveyLink = "https://whatsyourtype.com/survey"; // Placeholder link
    
    try {
      await navigator.clipboard.writeText(surveyLink);
      setShowToast(true);
      // Hide toast after 2 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = surveyLink;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
    <main 
      className="relative min-h-screen w-full overflow-hidden cursor-pointer"
      onClick={!showTutorial ? handleStartSurvey : undefined}
    >
      {/* Background Video */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/Gradient_bg/Landing_Page_Animation.mp4" type="video/mp4" />
        </video>
      ) : (
        /* Fallback Background Image */
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gradient-bg.png')" }}
        />
      )}
      
      {/* Navigation - stop propagation to prevent navigation when clicking nav items */}
      <div onClick={(e) => e.stopPropagation()}>
        <Navbar 
          variant="dark" 
          mobileHeight="tall" 
          onShareClick={handleShare}
          onShareMouseEnter={() => setIsShareHovered(true)}
          onShareMouseLeave={() => setIsShareHovered(false)}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Headline - Figma Mobile: 38px at (26, 137), Desktop: 52px at (32, 102) */}
        <h1 
          className="
            absolute text-white font-normal font-sf-pro-display leading-tight
            text-[38px] left-[26px] top-[137px]
            md:text-[52px] md:left-[32px] md:top-[102px]
          "
        >
          Find your fonts
        </h1>
      </div>

      {/* Mobile: "Tap to play" - Figma: centered at y:659, 18px SF Pro Display */}
      {!showTutorial && isMobile && (
        <div className="absolute bottom-[185px] left-0 right-0 flex justify-center z-50 pointer-events-none md:hidden">
          <span className="text-white text-[18px] font-normal font-sf-pro-display leading-[1.4em]">
            Tap to play
          </span>
        </div>
      )}

      {/* Desktop: Click to play caption - follows cursor */}
      {!showTutorial && !isMobile && !isShareHovered && (
        <div
          className="fixed pointer-events-none z-50 hidden md:block"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y - 20}px`,
            transform: 'translateX(-50%) translateY(-100%)',
          }}
        >
          <span className="text-white text-[16px] font-normal font-sf-pro whitespace-nowrap">
            Click to play
          </span>
        </div>
      )}

    </main>

    {/* Tutorial Popup - Only shown on desktop */}
    <TutorialPopup 
      isOpen={showTutorial}
      onClose={handleCloseTutorial}
      onBegin={handleBeginSurvey}
    />

    {/* Toast Notification - "link copied" */}
    {showToast && (
      <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 z-[100] animate-fade-in">
        <div className="bg-[#03060F]/90 backdrop-blur-sm px-[24px] py-[12px] rounded-full border border-white/20">
          <span className="text-white text-[16px] font-normal font-sf-pro-display">
            Link copied
          </span>
        </div>
      </div>
    )}
    </>
  );
}
