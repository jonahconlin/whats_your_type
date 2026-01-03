(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Navbar({ className = "", showExit = false, variant = "light", onExitClick }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `
        fixed top-0 left-0 right-0 
        h-[62px] 
        bg-[rgba(199,201,206,0.1)] 
        backdrop-blur-[54px] 
        border-b ${borderColorClass}
        z-50 
        ${className}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full px-8 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${textColorClass} text-[20px] font-normal font-sf-pro leading-[130%]`,
                    children: "What's your type?"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: showExit && onExitClick ? onExitClick : undefined,
                    className: `${textColorClass} text-[20px] font-normal font-sf-pro leading-[130%] hover:opacity-60 transition-opacity`,
                    children: showExit ? "Exit" : "Share"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResultsTooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center bg-[#1D202A] rounded-[10px] overflow-y-auto overflow-x-hidden",
        style: {
            gap: '24px',
            padding: '24px',
            height: '452px',
            width: '307px' // Fixed width for consistency across all tooltips
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col self-stretch",
                style: {
                    gap: '4px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col relative",
                style: {
                    gap: '16px',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col self-stretch",
                        style: {
                            gap: '4px'
                        },
                        children: topFonts.map((font, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center self-stretch",
                                style: {
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center flex-1 min-w-0",
                                                style: {
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    index < topFonts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    otherFonts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                style: {
                                    gap: '4px'
                                },
                                children: otherFonts.map((font, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center self-stretch",
                                        style: {
                                            gap: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center flex-1 min-w-0",
                                                        style: {
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            index < otherFonts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = ResultsTooltip;
var _c;
__turbopack_context__.k.register(_c, "ResultsTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResultsTooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[45px] rounded-[44px] flex items-center justify-start transition-all duration-200 cursor-pointer overflow-hidden",
        style: {
            flex: `0 1 ${widthPct}%`,
            minWidth: 0
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [
            isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[44px] bg-white/20"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            truncatedText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = FontPill;
// Keyword Pill Component (for adjectives)
function KeywordPill({ adjective }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center justify-center px-[20px] py-[10px] border border-white rounded-[60px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c1 = KeywordPill;
function ResultsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hoveredPill, setHoveredPill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        above: false
    });
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hideTooltipTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            const storedResponses = localStorage.getItem('surveyResponses');
            if (storedResponses) {
                const parsed = JSON.parse(storedResponses);
                setResponses(parsed);
                setResults(generateMockResults(parsed));
            } else {
                // Generate demo results if no survey responses
                const demoResponses = ADJECTIVES.map({
                    "ResultsPage.useEffect.demoResponses": (adj)=>({
                            adjective: adj,
                            selectedFont: AVAILABLE_FONTS[Math.floor(Math.random() * AVAILABLE_FONTS.length)],
                            fontOptions: AVAILABLE_FONTS.slice(0, 4)
                        })
                }["ResultsPage.useEffect.demoResponses"]);
                setResponses(demoResponses);
                setResults(generateMockResults(demoResponses));
            }
        }
    }["ResultsPage.useEffect"], []);
    const handleStartOver = ()=>{
        localStorage.removeItem('surveyResponses');
        router.push('/');
    };
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            return ({
                "ResultsPage.useEffect": ()=>{
                    if (hideTooltipTimeoutRef.current) {
                        clearTimeout(hideTooltipTimeoutRef.current);
                    }
                }
            })["ResultsPage.useEffect"];
        }
    }["ResultsPage.useEffect"], []);
    // Calculate match percentage
    const matchPercentage = results.length > 0 ? Math.round(results.filter((r)=>r.topFonts.some((f)=>f.isUserSelected)).length / results.length * 100) : 50;
    // Get explorer type based on match percentage
    const getExplorerType = ()=>{
        if (matchPercentage >= 70) return "Conformist";
        if (matchPercentage >= 40) return "Explorer";
        return "Trailblazer";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen w-full overflow-hidden bg-[#03060F]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                showExit: true,
                variant: "dark"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative z-10 min-h-screen pt-[66px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex pl-[40px] pr-[32px] pt-[49px] pb-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[960px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white font-sf-pro-display text-[80px] font-normal leading-[1.2em]",
                                    children: [
                                        "You're ",
                                        matchPercentage >= 70 ? 'a' : 'an',
                                        " ",
                                        getExplorerType()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 pt-[19px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-sf-pro-display text-[22px] leading-[1.5em] max-w-[703px]",
                                    children: [
                                        "Overall, you matched with ",
                                        matchPercentage,
                                        "% of other responses.",
                                        matchPercentage >= 70 ? " You tend to follow popular font choices, aligning with the majority on most selections." : matchPercentage >= 40 ? " You follow the crowd on some fonts, but forge your own path on others." : " You have unique taste in fonts, often choosing differently from the majority."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-[40px] pr-[32px] pb-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end mb-[30px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[368px] shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]",
                                            children: "Keywords"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-sf-pro-display text-[14px] leading-[1.19em]",
                                            children: "Top 5 fonts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[1px] bg-white/30 mb-[30px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-[35px]",
                                children: results.map((result)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[368px] shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeywordPill, {
                                                    adjective: result.adjective
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex gap-0 items-center min-w-0",
                                                style: {
                                                    width: '100%',
                                                    maxWidth: '100%'
                                                },
                                                children: [
                                                    result.topFonts.map((font)=>{
                                                        // Use actual percentage directly - each pill takes up its share of responses
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontPill, {
                                                            fontName: font.fontName,
                                                            percentage: font.percentage,
                                                            isSelected: font.isUserSelected,
                                                            adjective: result.adjective,
                                                            widthPct: font.percentage,
                                                            onMouseEnter: (e)=>handlePillHover(result.adjective, 'font', font.fontName, e),
                                                            onMouseLeave: handlePillLeave
                                                        }, font.fontName, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 25
                                                        }, this);
                                                    }),
                                                    result.otherPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontPill, {
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
                                                        lineNumber: 486,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/results/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, result.adjective, true, {
                                        fileName: "[project]/src/app/results/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    hoveredPill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                lineNumber: 526,
                                columnNumber: 17
                            }, this);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-[40px] pr-[32px] pb-[40px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-[40px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/80 font-sf-pro-display text-[15px] leading-[1.19em]",
                                                    children: "You are viewing data of"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-[8px] mt-[8px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/80 font-sf-pro-display text-[15px] leading-[1.19em]",
                                                            children: "All Country"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "6",
                                                            height: "4",
                                                            viewBox: "0 0 6 4",
                                                            fill: "none",
                                                            className: "opacity-30",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 4L0 0H6L3 4Z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/results/page.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 552,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/80 font-sf-pro-display text-[15px] leading-[1.19em] opacity-0",
                                                    children: " "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-[8px] mt-[8px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/80 font-sf-pro-display text-[15px] leading-[1.19em]",
                                                            children: "All Language"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "6",
                                                            height: "4",
                                                            viewBox: "0 0 6 4",
                                                            fill: "none",
                                                            className: "opacity-30",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 4L0 0H6L3 4Z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/results/page.tsx",
                                                                lineNumber: 575,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/results/page.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleStartOver,
                                    className: "px-8 py-4 bg-white text-[#03060f] rounded-full text-[18px] font-sf-pro font-medium hover:bg-white/90 transition-colors",
                                    children: "Take the survey again"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, this);
}
_s(ResultsPage, "UZ9QsSidLau19DG3w6LwjXtapLk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = ResultsPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FontPill");
__turbopack_context__.k.register(_c1, "KeywordPill");
__turbopack_context__.k.register(_c2, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_959e57a1._.js.map