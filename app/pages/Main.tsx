'use client'
import { useState, useEffect } from "react"
import { ProfileCard } from "@/app/components/ProfileCard"
import { SearchInput } from "@/app/components/SearchInput"
import { data, iProfile } from "@/data"
import { useSearchParams } from 'next/navigation'

const Home = () => {
    const [profileData, setProfileData] = useState<iProfile[]>([])
    const searchParams = useSearchParams()
    const searchQuery = searchParams && searchParams.get("q");

    useEffect(() => {
        const handleSearch = () => {
            const findUser = data.filter((user) => {
                if (searchQuery) {
                    return (
                        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                } else {
                    return true;
                }
            });
            setProfileData(findUser);
        };
        handleSearch();
    }, [searchQuery]); // Only rerun the effect if searchQuery changes
    const totalUser = profileData.length;

    return (
        <section className="">
            <p className="mb-10 ">Showing {totalUser} {totalUser > 1 ? "Users" : "User"}</p>
            <SearchInput defaultValue={searchQuery}/>
            <div className="mt-8">
                {totalUser === 0 ? <p>No result returned</p> : (
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                        {profileData.map(({username, role, name, email}: iProfile) => {
                            return (
                                <div key={username}>
                                    <ProfileCard name={name} role={role} email={email}
                                                 username={username}/>
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
