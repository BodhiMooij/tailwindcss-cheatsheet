import { iSection } from "@/data";

export const ProfileCard = (props: iSection) => {
    const { section, items } = props;
    return (
        <div className="profile__card">
            <div className="p-3">
                <h2 className="font-bold text-lg">Section: {section}</h2>
                <ul className="mt-2 list-disc list-inside">
                    {items.map((item, index) => (
                        <li key={index} className="text-sm text-gray-100">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
