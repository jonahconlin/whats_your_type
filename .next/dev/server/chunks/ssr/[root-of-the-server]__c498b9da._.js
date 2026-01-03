module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Navbar({ className = "", showExit = false, variant = "light", onExitClick, exitText, mobileHeight = "tall", onShareClick, onShareMouseEnter, onShareMouseLeave }) {
    const isDark = variant === "dark";
    // Figma Desktop specs:
    // - Background: rgba(199, 201, 206, 0.1)
    // - Backdrop blur: 54px
    // - Border: rgba(255, 255, 255, 0.3) 1px bottom
    // - Text: White (#FFFFFF) 80% opacity
    // - Padding: 18px 32px
    // - Font: SF Pro, 20px, 400 weight, 1.3em line-height
    // Figma Mobile specs (390px width):
    // - Height: 113px (tall - includes safe area) or 66px (short - results page)
    // - "What's your type?" at (26, 67) from top, font: 20px
    // - "Exit" at (342, 72), font: 14px
    // - Border at bottom with blur
    const textColorClass = isDark ? "text-white/80" : "text-[#03060f]/80";
    const borderColorClass = isDark ? "border-white/30" : "border-[#03060f]/20";
    // Mobile heights based on Figma - only apply on mobile
    const mobileHeightStyles = mobileHeight === "tall" ? "max-md:h-[64px] max-md:pt-[22px]" // Status bar area + nav content
     : "max-md:h-[64px] max-md:pt-[22px]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `
        fixed top-0 left-0 right-0 
        h-[62px]
        ${mobileHeightStyles}
        bg-[rgba(107,113,132,0.06)] 
        backdrop-blur-[54px] 
        border-b ${borderColorClass}
        z-50 
        ${className}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full px-[26px] md:px-8 flex items-center justify-center md:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${textColorClass} text-[20px] font-normal font-sf-pro-display leading-[1.4em]`,
                    children: "What's your type?"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: showExit && onExitClick ? onExitClick : onShareClick,
                    onMouseEnter: !showExit ? onShareMouseEnter : undefined,
                    onMouseLeave: !showExit ? onShareMouseLeave : undefined,
                    className: `${textColorClass} text-[14px] md:text-[20px] font-normal font-sf-pro-display leading-[1.19em] md:leading-[130%] hover:opacity-60 transition-opacity absolute right-[26px] md:relative md:right-auto`,
                    children: showExit ? exitText || "Exit" : "Share"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ResultsTooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
// Map font names to their font-family CSS values
const getFontFamily = (fontName)=>{
    const fontMap = {
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
        "Space Mono": "var(--font-space-mono), monospace"
    };
    return fontMap[fontName] || "inherit";
};
function ResultsTooltip({ adjective, userFont, userFontPercentage, isMatched, topFonts, otherFonts }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center bg-[#1D202A] rounded-[10px] overflow-y-auto overflow-x-hidden",
        style: {
            gap: '24px',
            padding: '24px',
            height: '452px',
            width: '307px' // Fixed width for consistency across all tooltips
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col self-stretch",
                style: {
                    gap: '4px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-sf-pro text-white",
                        style: {
                            fontSize: '22px',
                            fontWeight: 400,
                            lineHeight: '0.91em'
                        },
                        children: [
                            "You picked ",
                            userFont
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sf-pro-display text-white",
                        style: {
                            fontSize: '13px',
                            fontWeight: 400,
                            lineHeight: '1.4em',
                            opacity: 0.8
                        },
                        children: [
                            "You have picked ",
                            userFont,
                            " for '",
                            adjective,
                            "'.",
                            isMatched ? ` It matches to other ${userFontPercentage}% of people.` : ` ${userFontPercentage}% of others picked this font.`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultsTooltip.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col relative",
                style: {
                    gap: '16px',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col self-stretch",
                        style: {
                            gap: '4px'
                        },
                        children: topFonts.map((font, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center self-stretch",
                                style: {
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                  flex items-center justify-between rounded-[50px]
                  ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                `,
                                        style: {
                                            width: '100%',
                                            maxWidth: '100%',
                                            gap: '12px',
                                            padding: '10px 12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center flex-1 min-w-0",
                                                style: {
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                        style: {
                                                            width: '20px',
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            lineHeight: '1.25em'
                                                        },
                                                        children: font.rank
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `truncate flex-1 min-w-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                        style: {
                                                            height: '20px',
                                                            fontFamily: getFontFamily(font.fontName),
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            lineHeight: '1.25em'
                                                        },
                                                        children: font.fontName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                    lineHeight: '1.25em'
                                                },
                                                children: [
                                                    font.percentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    index < topFonts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "self-stretch bg-white",
                                        style: {
                                            height: '1px',
                                            opacity: 0.2
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, font.rank, true, {
                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    otherFonts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-sf-pro text-white",
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 400,
                                    lineHeight: '1.54em',
                                    opacity: 0.5,
                                    marginBottom: '14px'
                                },
                                children: "Others"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                style: {
                                    gap: '4px'
                                },
                                children: otherFonts.map((font, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center self-stretch",
                                        style: {
                                            gap: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `
                      flex items-center justify-between rounded-[50px]
                      ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                    `,
                                                style: {
                                                    width: '100%',
                                                    maxWidth: '100%',
                                                    gap: '12px',
                                                    padding: '10px 12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center flex-1 min-w-0",
                                                        style: {
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                style: {
                                                                    width: '20px',
                                                                    fontSize: '16px',
                                                                    fontWeight: 400,
                                                                    lineHeight: '1.25em'
                                                                },
                                                                children: font.rank
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `truncate flex-1 min-w-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                style: {
                                                                    height: '20px',
                                                                    fontFamily: getFontFamily(font.fontName),
                                                                    fontSize: '16px',
                                                                    fontWeight: 400,
                                                                    lineHeight: '1.25em'
                                                                },
                                                                children: font.fontName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                        style: {
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            lineHeight: '1.25em'
                                                        },
                                                        children: [
                                                            font.percentage,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this),
                                            index < otherFonts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "self-stretch bg-white",
                                                style: {
                                                    height: '1px',
                                                    opacity: 0.2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                                lineNumber: 269,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, font.rank, true, {
                                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ResultsTooltip.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ResultsTooltip.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultsTooltip.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResultsTooltip.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MobileBottomSheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileBottomSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Map font names to their font-family CSS values
const getFontFamily = (fontName)=>{
    const fontMap = {
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
        "Space Mono": "var(--font-space-mono), monospace"
    };
    return fontMap[fontName] || "inherit";
};
function MobileBottomSheet({ isOpen, onClose, adjective, userFont, userFontPercentage, isMatched, topFonts, otherFonts }) {
    const sheetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle click outside to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (sheetRef.current && !sheetRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            // Prevent body scroll when sheet is open
            document.body.style.overflow = "hidden";
        }
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [
        isOpen,
        onClose
    ]);
    // Handle escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (event)=>{
            if (event.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }
        return ()=>{
            document.removeEventListener("keydown", handleEscape);
        };
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 transition-opacity duration-300",
                style: {
                    opacity: isOpen ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sheetRef,
                className: "absolute bottom-0 left-0 right-0 bg-[#1D202A] rounded-t-[20px] transition-transform duration-300 ease-out max-h-[85vh] overflow-hidden",
                style: {
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center pt-[12px] pb-[8px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[40px] h-[4px] bg-white/30 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileBottomSheet.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-[16px] right-[16px] w-[24px] h-[24px] flex items-center justify-center",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/close-icon.svg",
                            alt: "Close",
                            width: 14,
                            height: 14,
                            className: "opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileBottomSheet.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col overflow-y-auto",
                        style: {
                            gap: '24px',
                            padding: '16px 24px 40px',
                            maxHeight: 'calc(85vh - 36px)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                style: {
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-sf-pro text-white",
                                        style: {
                                            fontSize: '22px',
                                            fontWeight: 400,
                                            lineHeight: '0.91em'
                                        },
                                        children: [
                                            "You picked ",
                                            userFont
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sf-pro-display text-white",
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: 400,
                                            lineHeight: '1.4em',
                                            opacity: 0.8
                                        },
                                        children: [
                                            "You have picked ",
                                            userFont,
                                            " for '",
                                            adjective,
                                            "'.",
                                            isMatched ? ` It matches to other ${userFontPercentage}% of people.` : ` ${userFontPercentage}% of others picked this font.`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                style: {
                                    gap: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        style: {
                                            gap: '4px'
                                        },
                                        children: topFonts.map((font, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                style: {
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `
                      flex items-center justify-between rounded-[50px] w-full
                      ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                    `,
                                                        style: {
                                                            gap: '12px',
                                                            padding: '10px 12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center flex-1 min-w-0",
                                                                style: {
                                                                    gap: '4px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                        style: {
                                                                            width: '20px',
                                                                            fontSize: '16px',
                                                                            fontWeight: 400,
                                                                            lineHeight: '1.25em'
                                                                        },
                                                                        children: font.rank
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `truncate flex-1 min-w-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                        style: {
                                                                            height: '20px',
                                                                            fontFamily: getFontFamily(font.fontName),
                                                                            fontSize: '16px',
                                                                            fontWeight: 400,
                                                                            lineHeight: '1.25em'
                                                                        },
                                                                        children: font.fontName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                style: {
                                                                    fontSize: '16px',
                                                                    fontWeight: 400,
                                                                    lineHeight: '1.25em'
                                                                },
                                                                children: [
                                                                    font.percentage,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    index < topFonts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "self-stretch bg-white",
                                                        style: {
                                                            height: '1px',
                                                            opacity: 0.2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, font.rank, true, {
                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    otherFonts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-sf-pro text-white",
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: 400,
                                                    lineHeight: '1.54em',
                                                    opacity: 0.5,
                                                    marginBottom: '14px'
                                                },
                                                children: "Others"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                style: {
                                                    gap: '4px'
                                                },
                                                children: otherFonts.map((font, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center",
                                                        style: {
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `
                          flex items-center justify-between rounded-[50px] w-full
                          ${font.fontName === userFont ? 'bg-white' : 'bg-transparent'}
                        `,
                                                                style: {
                                                                    gap: '12px',
                                                                    padding: '10px 12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center flex-1 min-w-0",
                                                                        style: {
                                                                            gap: '4px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                                style: {
                                                                                    width: '20px',
                                                                                    fontSize: '16px',
                                                                                    fontWeight: 400,
                                                                                    lineHeight: '1.25em'
                                                                                },
                                                                                children: font.rank
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                                lineNumber: 305,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `truncate flex-1 min-w-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                                style: {
                                                                                    height: '20px',
                                                                                    fontFamily: getFontFamily(font.fontName),
                                                                                    fontSize: '16px',
                                                                                    fontWeight: 400,
                                                                                    lineHeight: '1.25em'
                                                                                },
                                                                                children: font.fontName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                                lineNumber: 318,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-sf-pro shrink-0 ${font.fontName === userFont ? 'text-black' : 'text-white'}`,
                                                                        style: {
                                                                            fontSize: '16px',
                                                                            fontWeight: 400,
                                                                            lineHeight: '1.25em'
                                                                        },
                                                                        children: [
                                                                            font.percentage,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 23
                                                            }, this),
                                                            index < otherFonts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "self-stretch bg-white",
                                                                style: {
                                                                    height: '1px',
                                                                    opacity: 0.2
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, font.rank, true, {
                                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MobileBottomSheet.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MobileBottomSheet.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileBottomSheet.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitSurveyResponse",
    ()=>submitSurveyResponse,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ssfhexragljsfipafgmh.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_Of2bivvsh9zHkg4H3z4vaA_UVyfiwAD");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function submitSurveyResponse(responses) {
    const { data, error } = await supabase.from('survey_responses').insert([
        responses
    ]).select();
    if (error) {
        console.error('Error submitting survey response:', error);
        throw error;
    }
    return data;
}
}),
"[project]/src/app/results/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResultsTooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileBottomSheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
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
const DESIGN_ARCHETYPES = [
    {
        name: "The Heritage Serif",
        description: "Organic, historical, and scholarly",
        shortDescription: "heritage serif typefaces that have a historic and scholarly feel",
        fonts: [
            "Alegreya",
            "EB Garamond"
        ]
    },
    {
        name: "The Sophisticate",
        description: "Sharp, elegant, and high-contrast",
        shortDescription: "sophisticated types with sharp, elegant, and high-contrast forms",
        fonts: [
            "Libre Baskerville",
            "Playfair Display"
        ]
    },
    {
        name: "The Industrialist",
        description: "Sturdy, confident, and architectural",
        shortDescription: "slab Serif types that are sturdy, confident, and architectural in nature with thick block-like serifs",
        fonts: [
            "Arvo"
        ]
    },
    {
        name: "The Modernist",
        description: "Objective, clean, and efficient",
        shortDescription: "classically modern sans-serif types that are geometric, clean, and highly legible",
        fonts: [
            "Source Sans 3",
            "IBM Plex Sans",
            "Roboto",
            "Montserrat"
        ]
    },
    {
        name: "The Approachable Sans",
        description: "Warm, legible, and friendly",
        shortDescription: "humanist sans-serif types that are friendly and legible with clean open forms and a friendly character",
        fonts: [
            "Open Sans"
        ]
    },
    {
        name: "The Specialist",
        description: "Decorative flair or technical precision",
        shortDescription: "stylistic script or monospaced types with decorative flair or technical precision",
        fonts: [
            "Lobster",
            "Space Mono"
        ]
    }
];
// Create a reverse mapping from font name to archetype
const FONT_TO_ARCHETYPE = {};
DESIGN_ARCHETYPES.forEach((archetype)=>{
    archetype.fonts.forEach((font)=>{
        FONT_TO_ARCHETYPE[font] = archetype;
    });
});
// Map adjective to gradient background image
const getGradientPath = (adjective)=>{
    const gradientMap = {
        "Casual": "/Gradient_bg/Casual_bg.png",
        "Serious": "/Gradient_bg/Serious_bg.png",
        "Friendly": "/Gradient_bg/Friendly_bg.png",
        "Playful": "/Gradient_bg/Playful_bgl.png",
        "Quirky": "/Gradient_bg/Quirky_bg.png",
        "Authoritative": "/Gradient_bg/Authoritative_bg.png",
        "Professional": "/Gradient_bg/Professional_bg.png",
        "Formal": "/Gradient_bg/Formal_bg.png",
        "Funny": "/Gradient_bg/Funny_bg.png",
        "Trendy": "/Gradient_bg/Trendy_bg.png"
    };
    return gradientMap[adjective] || "/Gradient_bg/Casual_bg.png";
};
// Map database column names to adjectives
const ADJECTIVE_TO_COLUMN = {
    "Casual": "q1_casual",
    "Serious": "q2_serious",
    "Friendly": "q3_friendly",
    "Playful": "q4_playful",
    "Quirky": "q5_quirky",
    "Authoritative": "q6_authoritative",
    "Professional": "q7_professional",
    "Formal": "q8_formal",
    "Funny": "q9_funny",
    "Trendy": "q10_trendy"
};
// Calculate real results from Supabase data
function calculateResultsFromData(allResponses, userResponses) {
    const results = [];
    for (const adjective of ADJECTIVES){
        const userResponse = userResponses.find((r)=>r.adjective === adjective);
        const userFont = userResponse?.selectedFont || '';
        const columnName = ADJECTIVE_TO_COLUMN[adjective];
        // Count font selections for this adjective
        const fontCounts = {};
        let totalCount = 0;
        allResponses.forEach((response)=>{
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
                userInOther: false
            });
            continue;
        }
        // Convert counts to percentages and sort
        const fontPercentages = Object.entries(fontCounts).map(([font, count])=>({
                font,
                percentage: Math.round(count / totalCount * 100),
                count
            })).sort((a, b)=>b.percentage - a.percentage);
        // Top 5 fonts
        const top5 = fontPercentages.slice(0, 5).map((fp)=>({
                fontName: fp.font,
                percentage: fp.percentage,
                isUserSelected: fp.font === userFont
            }));
        // Other fonts (6+)
        const others = fontPercentages.slice(5).map((fp)=>({
                fontName: fp.font,
                percentage: fp.percentage,
                isUserSelected: fp.font === userFont
            }));
        const otherPercentage = others.reduce((sum, f)=>sum + f.percentage, 0);
        const userInOther = others.some((f)=>f.fontName === userFont);
        results.push({
            adjective,
            topFonts: top5,
            otherFonts: others,
            userFont,
            otherPercentage,
            userInOther
        });
    }
    return results;
}
// Desktop Font Pill Component
function FontPill({ fontName, percentage, isSelected, isOther, adjective, widthPct, onMouseEnter, onMouseLeave }) {
    const gradientPath = getGradientPath(adjective);
    // Estimate if less than 3 characters of font name would be visible
    // When truncated, we show fontName.slice(0, 4) + "..."
    // If width is very small, we might show less than 3 actual characters
    // Very narrow pills (less than ~6-7%) likely show less than 3 characters after truncation
    const showNoText = !isOther && widthPct < 7;
    // Display text
    let displayText;
    if (showNoText) {
        // Show no text if pill is too narrow
        displayText = '';
    } else {
        displayText = isOther ? `Others ${percentage}%` : `${fontName} ${percentage}%`;
    }
    // Truncate if width is small (but not if we're already showing no text)
    const shouldTruncate = !showNoText && widthPct < 12;
    const truncatedText = shouldTruncate ? isOther ? `Oth...` : fontName.length > 4 ? `${fontName.slice(0, 4)}...` : fontName : displayText;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[45px] rounded-[44px] flex items-center justify-start transition-all duration-200 cursor-pointer overflow-hidden",
        style: {
            flex: `0 1 ${widthPct}%`,
            minWidth: 0
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [
            isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[44px]",
                style: {
                    backgroundImage: `url('${gradientPath}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[44px] bg-white/20"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 290,
                columnNumber: 9
            }, this),
            truncatedText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10 px-[20px] font-sf-pro-display font-bold text-[15px] leading-[1.19em] whitespace-nowrap overflow-hidden text-ellipsis text-[#03060F]/80",
                children: truncatedText
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
// Mobile Result Bar Component - Figma: shows user's pick with percentage
function MobileResultBar({ fontName, percentage, isSelected, adjective }) {
    const gradientPath = getGradientPath(adjective);
    // Calculate width based on percentage (max 135px in Figma)
    const barWidth = Math.max(36, Math.min(135, percentage / 100 * 135));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-[12px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[36px] rounded-[40px] overflow-hidden",
                style: {
                    width: `${barWidth}px`
                },
                children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    style: {
                        backgroundImage: `url('${gradientPath}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 330,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-[#35383F]"
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 339,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-sf-pro-display text-[15px] font-medium leading-[1.19em] ${isSelected ? 'text-[#03060F]' : 'text-white/40'}`,
                children: [
                    fontName,
                    " ",
                    percentage,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
// Keyword Pill Component (for adjectives) - desktop
function KeywordPill({ adjective }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center justify-center px-[20px] py-[10px] border border-white rounded-[60px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white font-sf-pro-display text-[22px] leading-[1.19em]",
            children: adjective
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 355,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
// Mobile Keyword Pill Component - Figma: 20px text, border 60% opacity
function MobileKeywordPill({ adjective }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center justify-center px-[12px] py-[6px] border border-white/60 rounded-[60px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white font-sf-pro-display text-[20px] leading-[1.19em]",
            children: adjective
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 366,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
function ResultsPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredPill, setHoveredPill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        above: false
    });
    const [selectedAdjective, setSelectedAdjective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hideTooltipTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleReturnHome = ()=>{
        router.push('/');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchResults = async ()=>{
            setIsLoading(true);
            // Get user's responses from localStorage
            const storedResponses = localStorage.getItem('surveyResponses');
            let userResponses = [];
            if (storedResponses) {
                userResponses = JSON.parse(storedResponses);
                setResponses(userResponses);
            } else {
                // If no user responses, create empty array (results will still show aggregate data)
                setResponses([]);
            }
            try {
                // Fetch all survey responses from Supabase
                const { data: allResponses, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('survey_responses').select('*');
                if (error) {
                    console.error('Error fetching survey responses:', error);
                    // Fallback to empty results if fetch fails
                    setResults([]);
                    setIsLoading(false);
                    return;
                }
                // Calculate results from real data
                const calculatedResults = calculateResultsFromData(allResponses || [], userResponses);
                setResults(calculatedResults);
            } catch (error) {
                console.error('Error processing survey responses:', error);
                setResults([]);
            } finally{
                setIsLoading(false);
            }
        };
        fetchResults();
    }, []);
    const handlePillHover = (adjective, type, fontName, event)=>{
        // Clear any pending hide timeout
        if (hideTooltipTimeoutRef.current) {
            clearTimeout(hideTooltipTimeoutRef.current);
            hideTooltipTimeoutRef.current = null;
        }
        const rect = event.target.getBoundingClientRect();
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
            let y;
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
                above: showAbove
            });
        }
        setHoveredPill({
            adjective,
            type,
            fontName
        });
    };
    const handlePillLeave = ()=>{
        // Add delay before hiding tooltip (500ms)
        hideTooltipTimeoutRef.current = setTimeout(()=>{
            setHoveredPill(null);
            hideTooltipTimeoutRef.current = null;
        }, 500);
    };
    const handleTooltipEnter = ()=>{
        // Clear hide timeout when mouse enters tooltip
        if (hideTooltipTimeoutRef.current) {
            clearTimeout(hideTooltipTimeoutRef.current);
            hideTooltipTimeoutRef.current = null;
        }
    };
    const handleTooltipLeave = ()=>{
        // Hide tooltip when mouse leaves tooltip
        setHoveredPill(null);
    };
    // Cleanup timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (hideTooltipTimeoutRef.current) {
                clearTimeout(hideTooltipTimeoutRef.current);
            }
        };
    }, []);
    // Calculate match percentage - average of percentages of respondents who chose the same fonts as the user
    const calculateMatchPercentage = ()=>{
        if (results.length === 0 || responses.length === 0) {
            return 50;
        }
        const percentages = [];
        // For each user response, find the percentage of other respondents who chose the same font
        responses.forEach((response)=>{
            const result = results.find((r)=>r.adjective === response.adjective);
            if (result) {
                // Find the percentage for the user's selected font
                const userFontResult = result.topFonts.find((f)=>f.fontName === response.selectedFont) || result.otherFonts.find((f)=>f.fontName === response.selectedFont);
                if (userFontResult) {
                    percentages.push(userFontResult.percentage);
                }
            }
        });
        // Calculate average
        if (percentages.length === 0) {
            return 50;
        }
        const sum = percentages.reduce((acc, pct)=>acc + pct, 0);
        return Math.round(sum / percentages.length);
    };
    const matchPercentage = calculateMatchPercentage();
    // Calculate archetype preferences from user responses
    const calculateArchetypePreferences = ()=>{
        // Count frequency of each archetype
        const archetypeCounts = {};
        // Initialize all archetypes to 0
        DESIGN_ARCHETYPES.forEach((archetype)=>{
            archetypeCounts[archetype.name] = 0;
        });
        // Count selections for each archetype
        responses.forEach((response)=>{
            const archetype = FONT_TO_ARCHETYPE[response.selectedFont];
            if (archetype) {
                archetypeCounts[archetype.name]++;
            }
        });
        // Find primary (highest frequency)
        let primary = DESIGN_ARCHETYPES[0];
        let maxCount = archetypeCounts[primary.name];
        DESIGN_ARCHETYPES.forEach((archetype)=>{
            const count = archetypeCounts[archetype.name];
            if (count > maxCount) {
                maxCount = count;
                primary = archetype;
            }
        });
        // Find avoided (lowest frequency, or zero)
        let avoided = DESIGN_ARCHETYPES[0];
        let minCount = archetypeCounts[avoided.name];
        DESIGN_ARCHETYPES.forEach((archetype)=>{
            const count = archetypeCounts[archetype.name];
            if (count < minCount) {
                minCount = count;
                avoided = archetype;
            }
        });
        return {
            primary,
            avoided
        };
    };
    const archetypePreferences = responses.length > 0 ? calculateArchetypePreferences() : null;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative min-h-screen w-full overflow-hidden bg-[#03060F]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    showExit: true,
                    variant: "dark",
                    exitText: "Return Home",
                    onExitClick: handleReturnHome,
                    mobileHeight: "short"
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 620,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 min-h-screen pt-[66px] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-sf-pro-display text-[22px]",
                        children: "Loading results..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 622,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 621,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 619,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen w-full overflow-hidden bg-[#03060F]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                showExit: true,
                variant: "dark",
                exitText: "Return Home",
                onExitClick: handleReturnHome,
                mobileHeight: "short"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden relative z-10 min-h-screen pt-[66px] pb-[128px] overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-[24px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-[136px] px-[26px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-white font-sf-pro-display text-[38px] font-normal leading-[1.19em] mb-[24px]",
                                        children: archetypePreferences ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "You're a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "underline",
                                                    style: {
                                                        textUnderlineOffset: '12px'
                                                    },
                                                    children: archetypePreferences.primary.name.replace(/^The /, '')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true) : `You're ${matchPercentage >= 70 ? 'a' : 'an'} ${matchPercentage >= 70 ? 'Conformist' : matchPercentage >= 40 ? 'Explorer' : 'Trailblazer'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 font-sf-pro-display text-[18px] font-light leading-[1.4em]",
                                        children: archetypePreferences ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Overall, you matched with ",
                                                matchPercentage,
                                                "% of other responses. You have a preference for ",
                                                archetypePreferences.primary.shortDescription,
                                                " and you tend to stay away from ",
                                                archetypePreferences.avoided.shortDescription,
                                                "."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Overall, you matched with ",
                                                matchPercentage,
                                                "% of other responses.",
                                                matchPercentage >= 70 ? " You tend to follow popular font choices, aligning with the majority on most selections." : matchPercentage >= 40 ? " You follow the crowd on some fonts, but forge your own path on others." : " You have unique taste in fonts, often choosing differently from the majority."
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[10px] px-[16px] py-[8px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-[6px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/40 font-sf-pro-display text-[14px] leading-[1.19em]",
                                                            children: "Keywords"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/40 font-sf-pro-display text-[14px] leading-[1.19em]",
                                                            children: "Your pick"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-[1px] bg-white/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 677,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    results.map((result)=>{
                                        const userFontResult = result.topFonts.find((f)=>f.isUserSelected) || result.otherFonts.find((f)=>f.isUserSelected);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center py-[8px] px-[16px] cursor-pointer active:bg-white/5 transition-colors",
                                            onClick: ()=>setSelectedAdjective(result.adjective),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[130px] h-[36px] shrink-0 flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileKeywordPill, {
                                                        adjective: result.adjective
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/results/page.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[38px] shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-[12px] flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-[36px] rounded-[100px] flex items-center px-[12px] overflow-hidden",
                                                            style: {
                                                                width: '165px',
                                                                backgroundImage: `url('${getGradientPath(result.adjective)}')`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-sf-pro-display text-[15px] font-medium leading-[1.19em] text-[#1C1D1E] whitespace-nowrap overflow-hidden text-ellipsis",
                                                                children: [
                                                                    result.userFont,
                                                                    " ",
                                                                    userFontResult?.percentage || 0,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/results/page.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/chevron-right.svg",
                                                            alt: "View details",
                                                            width: 12,
                                                            height: 12,
                                                            className: "shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, result.adjective, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 673,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 641,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 639,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 637,
                columnNumber: 7
            }, this),
            selectedAdjective && (()=>{
                const result = results.find((r)=>r.adjective === selectedAdjective);
                if (!result) return null;
                const userFontResult = result.topFonts.find((f)=>f.isUserSelected) || result.otherFonts.find((f)=>f.isUserSelected);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: true,
                    onClose: ()=>setSelectedAdjective(null),
                    adjective: result.adjective,
                    userFont: result.userFont,
                    userFontPercentage: userFontResult?.percentage || 0,
                    isMatched: result.topFonts.some((f)=>f.isUserSelected),
                    topFonts: result.topFonts.map((f, i)=>({
                            rank: i + 1,
                            fontName: f.fontName,
                            percentage: f.percentage
                        })),
                    otherFonts: result.otherFonts.map((f, i)=>({
                            rank: i + 6,
                            fontName: f.fontName,
                            percentage: f.percentage
                        }))
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 755,
                    columnNumber: 11
                }, this);
            })(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "hidden md:block relative z-10 min-h-screen pt-[66px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex pl-[40px] pr-[32px] pt-[49px] pb-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[960px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white font-sf-pro-display text-[80px] font-normal leading-[1.2em]",
                                    children: archetypePreferences ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "You're a ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "underline",
                                                style: {
                                                    textUnderlineOffset: '12px'
                                                },
                                                children: archetypePreferences.primary.name.replace(/^The /, '')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true) : `You're ${matchPercentage >= 70 ? 'a' : 'an'} ${matchPercentage >= 70 ? 'Conformist' : matchPercentage >= 40 ? 'Explorer' : 'Trailblazer'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 781,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 pt-[19px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-sf-pro-display text-[22px] leading-[1.5em] max-w-[703px]",
                                    children: archetypePreferences ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Overall, you matched with ",
                                            matchPercentage,
                                            "% of other responses. You have a preference for ",
                                            archetypePreferences.primary.shortDescription,
                                            " and you tend to stay away from ",
                                            archetypePreferences.avoided.shortDescription,
                                            "."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Overall, you matched with ",
                                            matchPercentage,
                                            "% of other responses.",
                                            matchPercentage >= 70 ? " You tend to follow popular font choices, aligning with the majority on most selections." : matchPercentage >= 40 ? " You follow the crowd on some fonts, but forge your own path on others." : " You have unique taste in fonts, often choosing differently from the majority."
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 791,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 779,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-[40px] pr-[32px] pb-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end mb-[30px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[368px] shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]",
                                            children: "Keywords"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]",
                                            children: "Top 5 fonts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 825,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 815,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[1px] bg-white/30 mb-[30px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 832,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-[35px]",
                                children: results.map((result)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[368px] shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KeywordPill, {
                                                    adjective: result.adjective
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex gap-0 items-center min-w-0",
                                                style: {
                                                    width: '100%',
                                                    maxWidth: '100%'
                                                },
                                                children: [
                                                    result.topFonts.map((font)=>{
                                                        // Use actual percentage directly - each pill takes up its share of responses
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FontPill, {
                                                            fontName: font.fontName,
                                                            percentage: font.percentage,
                                                            isSelected: font.isUserSelected,
                                                            adjective: result.adjective,
                                                            widthPct: font.percentage,
                                                            onMouseEnter: (e)=>handlePillHover(result.adjective, 'font', font.fontName, e),
                                                            onMouseLeave: handlePillLeave
                                                        }, font.fontName, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 25
                                                        }, this);
                                                    }),
                                                    result.otherPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FontPill, {
                                                        fontName: "Others",
                                                        percentage: result.otherPercentage,
                                                        isSelected: result.userInOther,
                                                        isOther: true,
                                                        adjective: result.adjective,
                                                        widthPct: result.otherPercentage,
                                                        onMouseEnter: (e)=>handlePillHover(result.adjective, 'other', undefined, e),
                                                        onMouseLeave: handlePillLeave
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/results/page.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 845,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, result.adjective, true, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 838,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 813,
                        columnNumber: 9
                    }, this),
                    hoveredPill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-50 pointer-events-auto",
                        style: {
                            left: tooltipPosition.x,
                            top: tooltipPosition.y,
                            transform: tooltipPosition.above ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%)'
                        },
                        onMouseEnter: handleTooltipEnter,
                        onMouseLeave: handleTooltipLeave,
                        children: (()=>{
                            const result = results.find((r)=>r.adjective === hoveredPill.adjective);
                            if (!result) return null;
                            const userFontResult = result.topFonts.find((f)=>f.isUserSelected) || result.otherFonts.find((f)=>f.isUserSelected);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                adjective: result.adjective,
                                userFont: result.userFont,
                                userFontPercentage: userFontResult?.percentage || 0,
                                isMatched: result.topFonts.some((f)=>f.isUserSelected),
                                topFonts: result.topFonts.map((f, i)=>({
                                        rank: i + 1,
                                        fontName: f.fontName,
                                        percentage: f.percentage
                                    })),
                                otherFonts: result.otherFonts.map((f, i)=>({
                                        rank: i + 6,
                                        fontName: f.fontName,
                                        percentage: f.percentage
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 904,
                                columnNumber: 17
                            }, this);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 884,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 631,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c498b9da._.js.map