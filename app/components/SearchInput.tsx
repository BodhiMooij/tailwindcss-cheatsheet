"use client"

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

interface iDefault {
    defaultValue: string | null
}

export const SearchInput = ({ defaultValue }: iDefault) => {
    const router = useRouter();
    const [inputValue, setValue] = useState(defaultValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        handleSearch(inputValue);
    };

    const handleSearch = (value: string | null) => {
        if (value) return router.push(`/?q=${value}`);
        if (!value) return router.push("/");
    };

    return (
        <div
            className="search__input border-1 border-solid border-gray-500 flex flex-row items-center gap-2 py-2 px-4 rounded-md">
            <label htmlFor="inputId">🔍</label>
            <input
                type="text"
                id="inputId"
                placeholder="Enter your keywords"
                value={inputValue ?? ""}
                onChange={handleChange}
                className="bg-[transparent] outline-none border-none w-full"
            />
        </div>
    );
};
