import { iSection } from "@/data";
import { useState } from "react";

export const ProfileCard = (props: iSection) => {
    const {section, items} = props;

    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = async (text: string, index: number) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => {
                setCopiedIndex(null);
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="profile__card">
            <div className="p-3">
                <h2 className="font-bold text-lg">{section}</h2>
                <ul className="mt-2 list-inside">
                    {items.map((item, index) => (
                        <li key={index}
                            className="text-sm list-none text-gray-100 flex justify-between items-center gap-2">
                            {item.startsWith("bg-") || item.startsWith("text-") ?
                                <span className={'flex items-center gap-2'}>
                                    <div
                                        className={`w-4 h-4 rounded ${item.startsWith("bg-") ? item : ""}`}
                                        title={item}
                                    ></div>
                                    <span>{item}</span>
                                </span>
                                : <span>{item}</span>
                            }

                            <span
                                className="cursor-pointer text-blue-500"
                                onClick={() => copyToClipboard(item, index)}
                            >
                                {copiedIndex === index ? "✔️" : "📋"}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
