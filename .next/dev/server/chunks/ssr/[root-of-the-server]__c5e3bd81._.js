module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
function Navbar({ className = "", showExit = false, variant = "light", onExitClick, exitText }) {
    const isDark = variant === "dark";
    // Figma NavBar_Dark specs:
    // - Background: rgba(199, 201, 206, 0.1)
    // - Backdrop blur: 54px
    // - Border: rgba(255, 255, 255, 0.3) 1px bottom
    // - Text: White (#FFFFFF) 80% opacity
    // - Padding: 18px 32px
    // - Font: SF Pro, 20px, 400 weight, 1.3em line-height
    const textColorClass = isDark ? "text-white/80" : "text-[#03060f]/80";
    const borderColorClass = isDark ? "border-white/30" : "border-[#03060f]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `
        fixed top-0 left-0 right-0 
        h-[62px] 
        bg-[rgba(199,201,206,0.1)] 
        backdrop-blur-[54px] 
        border-b ${borderColorClass}
        z-50 
        ${className}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full px-8 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${textColorClass} text-[20px] font-normal font-sf-pro leading-[130%]`,
                    children: "What's your type?"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: showExit && onExitClick ? onExitClick : undefined,
                    className: `${textColorClass} text-[20px] font-normal font-sf-pro leading-[130%] hover:opacity-60 transition-opacity`,
                    children: showExit ? exitText || "Exit" : "Share"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 31,
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
                        children: isMatched ? "Matched!" : "Your Pick"
                    }, void 0, false, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResultsTooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// The 10 adjectives in order
const ADJECTIVES = [
    "Authoritative",
    "Casual",
    "Formal",
    "Friendly",
    "Funny",
    "Playful",
    "Professional",
    "Quirky",
    "Serious",
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
// Font Pill Component
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
                lineNumber: 224,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[44px] bg-white/20"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            truncatedText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10 px-[20px] font-sf-pro-display font-bold text-[15px] leading-[1.19em] whitespace-nowrap overflow-hidden text-ellipsis text-[#03060F]/80",
                children: truncatedText
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
// Keyword Pill Component (for adjectives)
function KeywordPill({ adjective }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center justify-center px-[20px] py-[10px] border border-white rounded-[60px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white font-sf-pro-display text-[22px] leading-[1.19em]",
            children: adjective
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
function ResultsPage() {
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredPill, setHoveredPill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        above: false
    });
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hideTooltipTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    // Calculate match percentage
    const matchPercentage = results.length > 0 ? Math.round(results.filter((r)=>r.topFonts.some((f)=>f.isUserSelected)).length / results.length * 100) : 50;
    // Get explorer type based on match percentage
    const getExplorerType = ()=>{
        if (matchPercentage >= 70) return "Conformist";
        if (matchPercentage >= 40) return "Explorer";
        return "Trailblazer";
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative min-h-screen w-full overflow-hidden bg-[#03060F]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    showExit: true,
                    variant: "dark"
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 min-h-screen pt-[66px] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-sf-pro-display text-[22px]",
                        children: "Loading results..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 431,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen w-full overflow-hidden bg-[#03060F]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                showExit: true,
                variant: "dark"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative z-10 min-h-screen pt-[66px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex pl-[40px] pr-[32px] pt-[49px] pb-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[960px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white font-sf-pro-display text-[80px] font-normal leading-[1.2em]",
                                    children: [
                                        "You're ",
                                        matchPercentage >= 70 ? 'a' : 'an',
                                        " ",
                                        getExplorerType()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 pt-[19px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-sf-pro-display text-[22px] leading-[1.5em] max-w-[703px]",
                                    children: [
                                        "Overall, you matched with ",
                                        matchPercentage,
                                        "% of other responses.",
                                        matchPercentage >= 70 ? " You tend to follow popular font choices, aligning with the majority on most selections." : matchPercentage >= 40 ? " You follow the crowd on some fonts, but forge your own path on others." : " You have unique taste in fonts, often choosing differently from the majority."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 450,
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
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]",
                                            children: "Top 5 fonts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[1px] bg-white/30 mb-[30px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 492,
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
                                                    lineNumber: 501,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 500,
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
                                                            lineNumber: 509,
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
                                                        lineNumber: 524,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, result.adjective, true, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 473,
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
                                lineNumber: 564,
                                columnNumber: 17
                            }, this);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 443,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c5e3bd81._.js.map