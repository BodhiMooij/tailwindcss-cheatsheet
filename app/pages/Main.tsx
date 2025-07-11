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
                        item.items.includes(searchQuery.toLowerCase())
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
            <p className="mb-10">Showing {totalUser} {totalUser > 1 ? "Users" : "User"}</p>

            <div className="mt-8">
                {totalUser === 0 ? <p>No result returned</p> : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {profileData.map(({section, items}: iSection) => {
                            return (
                                <div className={'rounded-lg border border-solid'} key={section}>
                                    <ProfileCard section={section} items={items}/>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Home
