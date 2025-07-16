'use client'
import { useState, useEffect } from "react"
import { ProfileCard } from "@/app/components/ProfileCard"
import { data, iSection } from "@/data"
import { useSearchParams } from 'next/navigation'

const Home = () => {
    const [profileData, setProfileData] = useState<iSection[]>([])
    const searchParams = useSearchParams()
    const searchQuery = searchParams && searchParams.get("q");
    const totalUser = profileData.length;

    useEffect(() => {
        const handleSearch = () => {
            const findUser = data.filter((item) => {
                if (searchQuery) {
                    return (
                        item.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.items.some(({name, value}) =>
                            name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            value.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                    );
                } else {
                    return true;
                }
            });
            setProfileData(findUser);
        };
        handleSearch();
    }, [searchQuery]); // Only rerun the effect if searchQuery changes

    return (
        <section className="w-full">
            <p className="mb-10 text-sm font-bold">Showing {totalUser} {totalUser > 1 ? "items" : "item"}</p>
            {totalUser === 0 ? <p>No result returned</p> : (
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 w-full">
                    {profileData.map(({section, items}: iSection) => {
                        return (
                            <div className='rounded-md border border-solid w-full mb-4 break-inside-avoid'
                                 key={section}>
                                <ProfileCard section={section} items={items}/>
                            </div>
                        )
                    })}
                </div>
            )}
        </section>
    )
}

export default Home
