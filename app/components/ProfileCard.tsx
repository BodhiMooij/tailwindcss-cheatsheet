import { iSection } from "@/data";
import { useState } from "react";

export const ProfileCard = (props: iSection) => {
    const {section, items = []} = props; // Default values to an empty array

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
                            className="text-sm list-none text-gray-100 flex justify-between items-center gap-2 bg-gray-800 p-1 m-1 rounded-md hover:bg-gray-700 transition-colors">
                            <div onClick={() => copyToClipboard(item.name, index)}
                                 className="flex items-center justify-between gap-2 w-full cursor-pointer">
                                <div className='flex items-center gap-2'>
                                    <span className='min-w-5'>{item.name}</span>
                                    <span className={`bg-primary h-2 w-${item.name}`}></span>
                                </div>
                                <span className={'opacity-50 select-none'}>{item.value}</span>
                            </div>
                            <span
                                className="cursor-pointer"
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
