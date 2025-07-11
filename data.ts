export interface iSection {
    section: string;
    items: string[];
}

export const sections: iSection[] = [
    {
        section: "Spacing",
        items: [
            "p-4", "m-4", "px-2", "py-2", "mx-auto", "my-0"
        ],
    },
    {
        section: "Breakpoints",
        items: [
            "sm:", "md:", "lg:", "xl:", "2xl:"
        ],
    },
    {
        section: "Pseudo Classes",
        items: [
            "hover", "focus", "focus-within", "focus-visible", "active", "visited", "target",
            "first", "last", "only", "odd", "even", "first-of-type", "last-of-type", "only-of-type",
            "empty", "disabled", "enabled", "checked", "indeterminate", "default", "required",
            "valid", "invalid", "in-range", "out-of-range", "placeholder-shown", "autofill",
            "read-only", "before", "after", "first-letter", "first-line", "marker", "selection",
            "file", "backdrop", "placeholder", "supports-[…]", "data-[…]", "rtl", "ltr", "open"
        ],
    },
    {
        section: "Colors",
        items: [
            "bg-red-50", "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
            "text-blue-50", "text-blue-100", "text-blue-200", "text-blue-300", "text-blue-400", "text-blue-500", "text-blue-600", "text-blue-700", "text-blue-800", "text-blue-900",
            "bg-blue-50", "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900",
            "bg-green-50", "bg-green-100", "bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700", "bg-green-800", "bg-green-900",
            "text-yellow-50", "text-yellow-100", "text-yellow-200", "text-yellow-300", "text-yellow-400", "text-yellow-500", "text-yellow-600", "text-yellow-700", "text-yellow-800", "text-yellow-900",
            "bg-yellow-50", "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900",
            "text-gray-50", "text-gray-100", "text-gray-200", "text-gray-300", "text-gray-400", "text-gray-500", "text-gray-600", "text-gray-700", "text-gray-800", "text-gray-900",
            "bg-gray-50", "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900",
            "text-purple-50", "text-purple-100", "text-purple-200", "text-purple-300", "text-purple-400", "text-purple-500", "text-purple-600", "text-purple-700", "text-purple-800", "text-purple-900",
            "bg-purple-50", "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900",
            "text-pink-50", "text-pink-100", "text-pink-200", "text-pink-300", "text-pink-400", "text-pink-500", "text-pink-600", "text-pink-700", "text-pink-800", "text-pink-900",
            "bg-pink-50", "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500", "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900"
        ],
    },
    {
        section: "Typography",
        items: [
            "font-bold", "text-lg", "leading-6", "tracking-wide", "uppercase"
        ],
    },
];

export const data: iSection[] = [];

// Add sections data to the `data` array
sections.forEach((section) => {
    const profile: iSection = {
        section: section.section,
        items: section.items,
    };

    data.push(profile);
});
