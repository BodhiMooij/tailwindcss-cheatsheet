import Image from "next/image";
import Main from "@app/pages/Main"
import { SearchInput } from "@components/SearchInput";
import { Suspense } from "react";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[auto_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className={"flex flex-col lg:flex-row items-center justify-between w-full gap-8"}>
                <span className={"flex items-center gap-4 sm:gap-8"}>
                    <div className={"flex items-center gap-2"}>
                        <Image
                            src="/tailwind.svg"
                            alt="Tailwind CSS logo"
                            width={32}
                            height={19}
                            priority
                        />
                        <span className="text-xl font-semibold ml-2">Tailwind CSS Cheat Sheet</span>
                    </div>
                    <p className={'font-semibold ml-2'}>v4.0</p>
                </span>
                <SearchInput defaultValue={''}/>
            </header>

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Suspense fallback='Loading...'>
                    <Main/>
                </Suspense>
            </main>
        </div>
    );
}
