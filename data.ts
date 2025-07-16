export interface iSection {
    section: string;
    items: { name: string; value: string }[];
}

export const sections: iSection[] = [
    {
        section: "Spacing",
        items: [
            { name: "0", value: "0rem" },
            { name: "px", value: "0.125rem" },
            { name: "0.5", value: "0.125rem" },
            { name: "1", value: "0.25rem" },
            { name: "1.5", value: "0.375rem" },
            { name: "2", value: "0.5rem" },
            { name: "2.5", value: "0.625rem" },
            { name: "3", value: "0.75rem" },
            { name: "3.5", value: "0.875rem" },
            { name: "4", value: "1rem" },
            { name: "5", value: "1.25rem" },
            { name: "6", value: "1.5rem" },
            { name: "7", value: "1.75rem" },
            { name: "8", value: "2rem" },
            { name: "9", value: "2.25rem" },
            { name: "10", value: "2.5rem" },
            { name: "11", value: "2.75rem" },
            { name: "12", value: "3rem" },
            { name: "16", value: "4rem" },
            { name: "20", value: "5rem" },
            { name: "24", value: "6rem" },
            { name: "28", value: "7rem" },
            { name: "32", value: "8rem" },
            { name: "36", value: "9rem" },
            { name: "40", value: "10rem" },
            { name: "44", value: "11rem" },
            { name: "48", value: "12rem" },
            { name: "52", value: "13rem" },
            { name: "56", value: "14rem" },
            { name: "60", value: "15rem" },
            { name: "64", value: "16rem" },
            { name: "72", value: "18rem" },
            { name: "80", value: "20rem" },
            { name: "96", value: "24rem" },
        ],
    },
    {
        section: "Breakpoints",
        items: [
            { name: "sm:", value: "640px" },
            { name: "md:", value: "768px" },
            { name: "lg:", value: "1024px" },
            { name: "xl:", value: "1280px" },
            { name: "2xl:", value: "1536px" },
        ],
    },
    {
        section: "Pseudo Classes",
        items: [
            { name: "hover:", value: "Hover state" },
            { name: "focus:", value: "Focus state" },
            { name: "active:", value: "Active state" },
            { name: "visited:", value: "Visited state" },
            { name: "disabled:", value: "Disabled state" },
            { name: "checked:", value: "Checked state" },
            { name: "first:", value: "First child" },
            { name: "last:", value: "Last child" },
            { name: "odd:", value: "Odd child" },
            { name: "even:", value: "Even child" },
            { name: "group-hover:", value: "Group hover state" },
            { name: "group-focus:", value: "Group focus state" },
            { name: "group-active:", value: "Group active state" },
            { name: "group-disabled:", value: "Group disabled state" },
            { name: "focus-within:", value: "Focus within state" },
            { name: "focus-visible:", value: "Focus visible state" },
            { name: "placeholder:", value: "Placeholder state" },
            { name: "selection:", value: "Text selection state" },
            { name: "before:", value: "Before pseudo-element" },
            { name: "after:", value: "After pseudo-element" },
            { name: "first-letter:", value: "First letter pseudo-element" },
            { name: "first-line:", value: "First line pseudo-element" },
            { name: "not:", value: "Not pseudo-class" },
            { name: "lang:", value: "Language pseudo-class" },
            { name: "placeholder-shown:", value: "Placeholder shown state" },
            { name: "read-only:", value: "Read-only state" },
            { name: "read-write:", value: "Read-write state" },
            { name: "default:", value: "Default state" },
            { name: "valid:", value: "Valid state" },
            { name: "invalid:", value: "Invalid state" },
            { name: "in-range:", value: "In-range state" },
            { name: "out-of-range:", value: "Out-of-range state" },
            { name: "required:", value: "Required state" },
            { name: "optional:", value: "Optional state" },
            { name: "checked:", value: "Checked state" },
            { name: "indeterminate:", value: "Indeterminate state" },
            { name: "default:", value: "Default state" },
            { name: "empty:", value: "Empty state" },
            { name: "valid:", value: "Valid state" },
            { name: "invalid:", value: "Invalid state" },
            { name: "placeholder-shown:", value: "Placeholder shown state" },
            { name: "autofill:", value: "Autofill state" },
            { name: "required:", value: "Required state" },
            { name: "optional:", value: "Optional state" },
            { name: "valid:", value: "Valid state" },
            { name: "invalid:", value: "Invalid state" },
            { name: "in-range:", value: "In-range state" },
            { name: "out-of-range:", value: "Out-of-range state" },
            { name: "focus-within:", value: "Focus within state" },
            { name: "focus-visible:", value: "Focus visible state" },
            { name: "target:", value: "Target state" },
            { name: "visited:", value: "Visited state" },
            { name: "link:", value: "Link state" },
            { name: "local-link:", value: "Local link state" },
            { name: "any-link:", value: "Any link state" },
            { name: "dir(ltr):", value: "Left-to-right text direction" },
            { name: "dir(rtl):", value: "Right-to-left text direction" },
            { name: "not(:first-child):", value: "Not first child" },
            { name: "not(:last-child):", value: "Not last child" },
            { name: "not(:nth-child(n)): ", value: "Not nth child" },
            { name: "not(:nth-last-child(n)):", value: "Not nth last child" },
            { name: "not(:nth-of-type(n)):", value: "Not nth of type" },
            { name: "not(:nth-last-of-type(n)):", value: "Not nth last of type" },
            { name: "not(:only-child):", value: "Not only child" },
            { name: "not(:only-of-type):", value: "Not only of type" },
            { name: "not(:empty):", value: "Not empty" },
            { name: "not(:root):", value: "Not root element" },
        ],
    },
    {
        section: "Colors",
        items: [
            { name: "slate", value: "#64748b" },
            { name: "gray", value: "#6b7280" },
            { name: "zinc", value: "#71717a" },
            { name: "neutral", value: "#737373" },
            { name: "stone", value: "#78716c" },
            { name: "red", value: "#ef4444" },
            { name: "orange", value: "#f97316" },
            { name: "amber", value: "#f59e0b" },
            { name: "yellow", value: "#eab308" },
            { name: "lime", value: "#84cc16" },
            { name: "green", value: "#22c55e" },
            { name: "emerald", value: "#10b981" },
            { name: "teal", value: "#14b8a6" },
            { name: "cyan", value: "#06b6d4" },
            { name: "sky", value: "#0ea5e9" },
            { name: "blue", value: "#3b82f6" },
            { name: "indigo", value: "#6366f1" },
            { name: "violet", value: "#8b5cf6" },
            { name: "purple", value: "#a855f7" },
            { name: "fuchsia", value: "#d946ef" },
            { name: "pink", value: "#ec4899" },
            { name: "rose", value: "#f43f5e" },


        //     slate: {
        //         '50': '#f8fafc'
        //         '100': '#f1f5f9'
        //         '200': '#e2e8f0'
        //         '300': '#cbd5e1'
        //         '400': '#94a3b8'
        //         '500': '#64748b'
        //         '600': '#475569'
        //         '700': '#334155'
        //         '800': '#1e293b'
        //         '900': '#0f172a'
        //         '950': '#020617'
        //     }
        //     gray: {
        //         '50': '#f9fafb'
        //         '100': '#f3f4f6'
        //         '200': '#e5e7eb'
        //         '300': '#d1d5db'
        //         '400': '#9ca3af'
        //         '500': '#6b7280'
        //         '600': '#4b5563'
        //         '700': '#374151'
        //         '800': '#1f2937'
        //         '900': '#111827'
        //         '950': '#030712'
        //     }
        //     zinc: {
        //         '50': '#fafafa'
        //         '100': '#f4f4f5'
        //         '200': '#e4e4e7'
        //         '300': '#d4d4d8'
        //         '400': '#a1a1aa'
        //         '500': '#71717a'
        //         '600': '#52525b'
        //         '700': '#3f3f46'
        //         '800': '#27272a'
        //         '900': '#18181b'
        //         '950': '#09090b'
        //     }
        //     neutral: {
        //         '50': '#fafafa'
        //         '100': '#f5f5f5'
        //         '200': '#e5e5e5'
        //         '300': '#d4d4d4'
        //         '400': '#a3a3a3'
        //         '500': '#737373'
        //         '600': '#525252'
        //         '700': '#404040'
        //         '800': '#262626'
        //         '900': '#171717'
        //         '950': '#0a0a0a'
        //     }
        //     stone: {
        //         '50': '#fafaf9'
        //         '100': '#f5f5f4'
        //         '200': '#e7e5e4'
        //         '300': '#d6d3d1'
        //         '400': '#a8a29e'
        //         '500': '#78716c'
        //         '600': '#57534e'
        //         '700': '#44403c'
        //         '800': '#292524'
        //         '900': '#1c1917'
        //         '950': '#0c0a09'
        //     }
        //     red: {
        //         '50': '#fef2f2'
        //         '100': '#fee2e2'
        //         '200': '#fecaca'
        //         '300': '#fca5a5'
        //         '400': '#f87171'
        //         '500': '#ef4444'
        //         '600': '#dc2626'
        //         '700': '#b91c1c'
        //         '800': '#991b1b'
        //         '900': '#7f1d1d'
        //         '950': '#450a0a'
        //     }
        //     orange: {
        //         '50': '#fff7ed'
        //         '100': '#ffedd5'
        //         '200': '#fed7aa'
        //         '300': '#fdba74'
        //         '400': '#fb923c'
        //         '500': '#f97316'
        //         '600': '#ea580c'
        //         '700': '#c2410c'
        //         '800': '#9a3412'
        //         '900': '#7c2d12'
        //         '950': '#431407'
        //     }
        //     amber: {
        //         '50': '#fffbeb'
        //         '100': '#fef3c7'
        //         '200': '#fde68a'
        //         '300': '#fcd34d'
        //         '400': '#fbbf24'
        //         '500': '#f59e0b'
        //         '600': '#d97706'
        //         '700': '#b45309'
        //         '800': '#92400e'
        //         '900': '#78350f'
        //         '950': '#451a03'
        //     }
        //     yellow: {
        //         '50': '#fefce8'
        //         '100': '#fef9c3'
        //         '200': '#fef08a'
        //         '300': '#fde047'
        //         '400': '#facc15'
        //         '500': '#eab308'
        //         '600': '#ca8a04'
        //         '700': '#a16207'
        //         '800': '#854d0e'
        //         '900': '#713f12'
        //         '950': '#422006'
        //     }
        //     lime: {
        //         '50': '#f7fee7'
        //         '100': '#ecfccb'
        //         '200': '#d9f99d'
        //         '300': '#bef264'
        //         '400': '#a3e635'
        //         '500': '#84cc16'
        //         '600': '#65a30d'
        //         '700': '#4d7c0f'
        //         '800': '#3f6212'
        //         '900': '#365314'
        //         '950': '#1a2e05'
        //     }
        //     green: {
        //         '50': '#f0fdf4'
        //         '100': '#dcfce7'
        //         '200': '#bbf7d0'
        //         '300': '#86efac'
        //         '400': '#4ade80'
        //         '500': '#22c55e'
        //         '600': '#16a34a'
        //         '700': '#15803d'
        //         '800': '#166534'
        //         '900': '#14532d'
        //         '950': '#052e16'
        //     }
        //     emerald: {
        //         '50': '#ecfdf5'
        //         '100': '#d1fae5'
        //         '200': '#a7f3d0'
        //         '300': '#6ee7b7'
        //         '400': '#34d399'
        //         '500': '#10b981'
        //         '600': '#059669'
        //         '700': '#047857'
        //         '800': '#065f46'
        //         '900': '#064e3b'
        //         '950': '#022c22'
        //     }
        //     teal: {
        //         '50': '#f0fdfa'
        //         '100': '#ccfbf1'
        //         '200': '#99f6e4'
        //         '300': '#5eead4'
        //         '400': '#2dd4bf'
        //         '500': '#14b8a6'
        //         '600': '#0d9488'
        //         '700': '#0f766e'
        //         '800': '#115e59'
        //         '900': '#134e4a'
        //         '950': '#042f2e'
        //     }
        //     cyan: {
        //         '50': '#ecfeff'
        //         '100': '#cffafe'
        //         '200': '#a5f3fc'
        //         '300': '#67e8f9'
        //         '400': '#22d3ee'
        //         '500': '#06b6d4'
        //         '600': '#0891b2'
        //         '700': '#0e7490'
        //         '800': '#155e75'
        //         '900': '#164e63'
        //         '950': '#083344'
        //     }
        //     sky: {
        //         '50': '#f0f9ff'
        //         '100': '#e0f2fe'
        //         '200': '#bae6fd'
        //         '300': '#7dd3fc'
        //         '400': '#38bdf8'
        //         '500': '#0ea5e9'
        //         '600': '#0284c7'
        //         '700': '#0369a1'
        //         '800': '#075985'
        //         '900': '#0c4a6e'
        //         '950': '#082f49'
        //     }
        //     blue: {
        //         '50': '#eff6ff'
        //         '100': '#dbeafe'
        //         '200': '#bfdbfe'
        //         '300': '#93c5fd'
        //         '400': '#60a5fa'
        //         '500': '#3b82f6'
        //         '600': '#2563eb'
        //         '700': '#1d4ed8'
        //         '800': '#1e40af'
        //         '900': '#1e3a8a'
        //         '950': '#172554'
        //     }
        //     indigo: {
        //         '50': '#eef2ff'
        //         '100': '#e0e7ff'
        //         '200': '#c7d2fe'
        //         '300': '#a5b4fc'
        //         '400': '#818cf8'
        //         '500': '#6366f1'
        //         '600': '#4f46e5'
        //         '700': '#4338ca'
        //         '800': '#3730a3'
        //         '900': '#312e81'
        //         '950': '#1e1b4b'
        //     }
        //     violet: {
        //         '50': '#f5f3ff'
        //         '100': '#ede9fe'
        //         '200': '#ddd6fe'
        //         '300': '#c4b5fd'
        //         '400': '#a78bfa'
        //         '500': '#8b5cf6'
        //         '600': '#7c3aed'
        //         '700': '#6d28d9'
        //         '800': '#5b21b6'
        //         '900': '#4c1d95'
        //         '950': '#2e1065'
        //     }
        //     purple: {
        //         '50': '#faf5ff'
        //         '100': '#f3e8ff'
        //         '200': '#e9d5ff'
        //         '300': '#d8b4fe'
        //         '400': '#c084fc'
        //         '500': '#a855f7'
        //         '600': '#9333ea'
        //         '700': '#7e22ce'
        //         '800': '#6b21a8'
        //         '900': '#581c87'
        //         '950': '#3b0764'
        //     }
        //     fuchsia: {
        //         '50': '#fdf4ff'
        //         '100': '#fae8ff'
        //         '200': '#f5d0fe'
        //         '300': '#f0abfc'
        //         '400': '#e879f9'
        //         '500': '#d946ef'
        //         '600': '#c026d3'
        //         '700': '#a21caf'
        //         '800': '#86198f'
        //         '900': '#701a75'
        //         '950': '#4a044e'
        //     }
        //     pink: {
        //         '50': '#fdf2f8'
        //         '100': '#fce7f3'
        //         '200': '#fbcfe8'
        //         '300': '#f9a8d4'
        //         '400': '#f472b6'
        //         '500': '#ec4899'
        //         '600': '#db2777'
        //         '700': '#be185d'
        //         '800': '#9d174d'
        //         '900': '#831843'
        //         '950': '#500724'
        //     }
        //     rose: {
        //         name: '50': '#fff1f2'
        //         '100': '#ffe4e6'
        //         '200': '#fecdd3'
        //         '300': '#fda4af'
        //         '400': '#fb7185'
        //         '500': '#f43f5e'
        //         '600': '#e11d48'
        //         '700': '#be123c'
        //         '800': '#9f1239'
        //         '900': '#881337'
        //         '950': '#4c0519'
        //     }

            { name: "bg-red-50", value: "#fef2f2" },
            { name: "bg-red-100", value: "#fee2e2" },
            { name: "bg-red-200", value: "#fecaca" },
            { name: "bg-red-300", value: "#fca5a5" },
        ],
    },
    {
        section: "Typography",
        items: [
            { name: "font-bold", value: "Bold font" },
            { name: "text-lg", value: "Large text" },
            { name: "leading-6", value: "Line height 1.5" },
            { name: "tracking-wide", value: "Wide tracking" },
            { name: "uppercase", value: "Uppercase text" },
        ],
    },
];

export const data: iSection[] = [];

// Add sections data to the `data` array
sections.forEach((section) => {
    data.push(section);
});
