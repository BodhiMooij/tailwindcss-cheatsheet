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
            "text-red-500", "bg-blue-300", "border-green-700", "hover:text-yellow-400"
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
