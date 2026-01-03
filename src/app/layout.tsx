import type { Metadata } from "next";
import { 
  Alegreya, 
  EB_Garamond, 
  Libre_Baskerville, 
  Playfair_Display, 
  Arvo, 
  Source_Sans_3, 
  IBM_Plex_Sans, 
  Roboto, 
  Montserrat, 
  Open_Sans, 
  Lobster, 
  Space_Mono 
} from "next/font/google";
import "./globals.css";

// Load all Google Fonts
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond" });
const libreBaskerville = Libre_Baskerville({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-libre-baskerville" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });
const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-arvo" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const ibmPlexSans = IBM_Plex_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-ibm-plex-sans" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const lobster = Lobster({ weight: "400", subsets: ["latin"], variable: "--font-lobster" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "What's Your Type? - Font Preferences Survey",
  description: "Discover your font preferences with this interactive typography survey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        antialiased
        ${alegreya.variable}
        ${ebGaramond.variable}
        ${libreBaskerville.variable}
        ${playfairDisplay.variable}
        ${arvo.variable}
        ${sourceSans.variable}
        ${ibmPlexSans.variable}
        ${roboto.variable}
        ${montserrat.variable}
        ${openSans.variable}
        ${lobster.variable}
        ${spaceMono.variable}
      `}>
        {children}
      </body>
    </html>
  );
}
