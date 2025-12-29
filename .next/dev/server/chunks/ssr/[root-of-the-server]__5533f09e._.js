module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/path-resume/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/path-resume/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/path-resume/app/builder/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/Desktop/path-resume/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
{}/*#__PURE__*/ _jsxDEV("div", {
    className: "w-1/2 bg-zinc-200 p-8 flex justify-center overflow-y-auto",
    children: /*#__PURE__*/ _jsxDEV("div", {
        id: "resume-preview",
        className: "w-[210mm] min-h-[297mm] h-fit bg-white p-[1in] shadow-2xl flex flex-col font-serif text-[#111] leading-tight",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "text-center border-b-[1.5px] border-black pb-4 mb-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        className: "text-3xl font-bold uppercase tracking-tight",
                        children: resume.personalInfo.fullName || "YOUR NAME"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                        lineNumber: 9,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "text-[11pt] mt-2 flex justify-center gap-3",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: resume.personalInfo.email
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 13,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            resume.personalInfo.email && /*#__PURE__*/ _jsxDEV("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 14,
                                columnNumber: 39
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "LinkedIn.com/in/username"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 15,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 16,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "Github.com/handle"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 17,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                        lineNumber: 12,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
            /*#__PURE__*/ _jsxDEV("div", {
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "text-[13pt] font-bold border-b border-gray-400 mb-3 uppercase",
                        children: "Experience"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    resume.experience.map((exp, i)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex justify-between items-baseline font-bold text-[11pt]",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: exp.company || "COMPANY NAME"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 13
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            className: "font-normal italic",
                                            children: "San Francisco, CA"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 13
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 11
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex justify-between items-baseline text-[10.5pt] mb-1 italic",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: exp.role || "Software Engineer Intern"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 13
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            className: "font-normal not-italic text-[10pt]",
                                            children: "May 2024 – Aug 2024"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 13
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 11
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "text-[10pt] text-gray-800 space-y-1 ml-4",
                                    children: exp.description.split('\n').map((line, idx)=>/*#__PURE__*/ _jsxDEV("p", {
                                            className: "relative before:content-['•'] before:absolute before:-left-4",
                                            children: line.replace(/^•\s*/, '')
                                        }, idx, false, {
                                            fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 16
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 11
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                            ]
                        }, i, true, {
                            fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                            lineNumber: 25,
                            columnNumber: 9
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "text-[13pt] font-bold border-b border-gray-400 mb-2 uppercase",
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                        lineNumber: 48,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex justify-between font-bold text-[11pt]",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "University of Southern California"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 50,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "font-normal italic",
                                children: "Los Angeles, CA"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 51,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                        lineNumber: 49,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex justify-between text-[10.5pt] italic",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "Master of Science in Computer Science"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 54,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "font-normal not-italic",
                                children: "Expected May 2025"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                                lineNumber: 55,
                                columnNumber: 9
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                        lineNumber: 53,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
        lineNumber: 3,
        columnNumber: 3
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
}, void 0, false, {
    fileName: "[project]/Desktop/path-resume/app/builder/page.tsx",
    lineNumber: 2,
    columnNumber: 1
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/Desktop/path-resume/app/builder/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/path-resume/app/builder/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5533f09e._.js.map