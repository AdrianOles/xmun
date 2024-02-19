import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

const Invitation = () => {
    const { data: session } = useSession();

    return (
        <div className={`flex flex-col w-full h-full overflow-x-hidden z-50 ${inter.className}`}>
            <div className="flex flex-col w-full relative h-[600px]">
                <Image
                    fill
                    src={'/execs/group.JPG'}
                    alt="school"
                    className="object-cover"
                    style={{ objectPosition: '50% 5%' }} 
                />
                <div className="absolute bg-black bg-opacity-70 backdrop-blur-sm h-full w-full top-0 left-0" />

                <Header />
                <div className='flex flex-col gap-1 justify-center items-center h-full text-center z-10 py-10 mb-8'>
                    <div className='md:text-[40px] tracking-[7px] font-[400] text-[32px] z-10 text-white'>
                        XMUN SECRETARIAT 2024
                    </div>
                    <div className='text-[#c0c0c0] tracking-[2px] text-[16px]'>
                        A letter to welcome
                    </div>
                </div>
            </div>

            <div className="w-full h-full md:px-20 xl:px-[248px] pt-20 pl-4 px-4">
                <div className="text-[40px] font-semibold">
                    Dear {
                        session ? (
                            <>
                                {session.user?.name?.split(' ')[0]}
                            </>
                        ): (
                            <>
                                Delegate 
                            </>
                        )
                    },
                </div>
                <div className="my-4">
                    The secretariat is excited to welcome you to our fourth XMUN conference! Our exec team has been working hard to bring you our yearly conference. This year with 3 separate committees, two for novice/beginner delegates, and a committee on colonialism for more experienced intermediate delegates.
                </div>
                <div className="my-2 font-semibold">
                    Committees:
                </div>
                <div className="pl-10">
                    <ul className="list-disc">
                        <li>
                            <i>Pokemon committee:</i> Revolves around the topics of genetic modification and animal abuse with the use of CRISPR-Cas9.
                            <ul className="list-disc pl-10"><li>Topic 1: Bioethics (Genetic modification, forced evolution)</li></ul>
                        </li>
                    </ul>
                    <ul className="list-disc">
                        <li>
                            <i>Divergent committee:</i> Based on the Divergent universe, tackles the issues of different factions and the power struggles between them.
                            <ul className="list-disc pl-10"><li>Topic 1: Ensuring protection of Divergents and Factionless</li><li>Topic 2: Possible remake of systemized government</li></ul>
                        </li>
                    </ul>
                    <ul className="list-disc">
                        <li>
                            <i>Colonialism committee:</i> Students get to navigate the deep-rooted, controversial history of colonialism and the lingering effects it has on our world.
                            <ul className="list-disc pl-10"><li>Topic 1: Legacy of Colonialism (Human rights violations, ethnic rivalries, Economic instability, benefits of colonialism) </li></ul>
                        </li>
                    </ul>
                </div>
                <div className="my-4">
                    Within your committee, delegates will work through grave issues and conflicts together to create comprehensive solutions. From this experience, delegates will develop stronger critical thinking skills, public speaking abilities and leadership qualities.
                </div>
                <div className="my-4">
                    Our chairs are well prepared to bring delegates to a formal yet thrilling conference. As a secretariat, we are committed to fostering an inclusive and welcoming environment for all participants. We encourage delegates to approach the conference with an open mind and a willingness to engage in respectful and constructive dialogue with their peers. This is Saint Francis Xavier&apos;s fourth time hosting XMUN, each year growing in numbers we gladly await a successful conference. Excited for a fruitful discussion, XMUN IV awaits you!
                </div>
                <div className="my-2 mt-8 font-semibold">
                    Why XMUN?
                </div>
                <div className="my-4">
                    St. Francis Xavier&apos;s Model UN team is dedicated to bringing Fun MUN&apos;s to the forefront of our conferences. Fun MUN&apos;s are committees that focus around a fictitious and unimaginable world. There are obvious limitations in our world with finite problems, however, doing Fun MUN&apos;s gives light to inconceivable circumstances, makes delegates think outside of the box, and shows how the principles of Model UN can be applied to even the most eccentric and impossible situations. We are happy that we can share the Model UN experience with young, up and coming delegates from the elementary schools as well as the experienced and mature delegates from our adjacent high schools. We are highly anticipating this amazing opportunity in the coming future.
                </div>
                <div className="text-[32px] font-semibold pt-4">
                    Sincerely, 
                </div>
            </div>

            <div className="w-full h-full py-8 px-2 md:px-20 xl:px-60 flex flex-wrap gap-x-2 lg:gap-x-5 xl:gap-x-10 justify-start gap-y-10">
                <div className="flex flex-col items-start jusitfy-center w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/rhea.JPG'}
                            fill
                            className="object-cover group-hover:scale-[125%] transition-all duration-500"
                            style={{ objectPosition: '45% 0%' }}
                        />
                    </div>
                    <div className="w-full text-left text-[18px] mt-2 px-1">
                        Rhea Goel
                    </div>
                    <div className="text-opacity-50 px-1 text-[14px]">
                        Co-Secretary General
                    </div>
                </div>
                <div className="flex flex-col items-start w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/salman.JPG'}
                            fill
                            className="object-cover group-hover:scale-[125%] transition-all duration-500"
                            style={{ objectPosition: '55% 0%' }}
                        />
                    </div>
                    <div className="w-full text-left text-[18px] mt-2 px-1">
                        Salman Yousufi
                    </div>
                    <div className="text-opacity-50 px-1 text-[14px]">
                        Co-Secretary General
                    </div>
                </div>
                <div className="flex flex-col items-start jusitfy-center w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/aisha.JPG'}
                            fill
                            className="object-cover group-hover:scale-[125%] transition-all duration-500"
                            style={{ objectPosition: '45% 0%' }}
                        />
                    </div>
                    <div className="w-full text-left text-[18px] mt-2 px-1">
                        Aisha Ali
                    </div>
                    <div className="text-opacity-50 px-1 text-[14px]">
                        Co-Director General
                    </div>
                </div>
                <div className="flex flex-col items-start jusitfy-center w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/ahwaz.JPG'}
                            fill
                            className="object-cover group-hover:scale-[125%] transition-all duration-500"
                            style={{ objectPosition: '60% 0%' }}
                        />
                    </div>
                    <div className="w-full text-left text-[18px] mt-2 px-1">
                        Ahwaz Memon
                    </div>
                    <div className="text-opacity-50 px-1 text-[14px]">
                        Co-Director General
                    </div>
                </div>
                <div className="flex flex-col items-start jusitfy-center w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/adrian.JPG'}
                            fill
                            className="object-cover group-hover:scale-[125%] transition-all duration-500"
                            style={{ objectPosition: '40% 0%' }}
                        />
                    </div>
                    <div className="w-full text-left text-[18px] mt-2 px-1">
                        Adrian Olesniewicz
                    </div>
                    <div className="text-opacity-50 px-1 text-[14px]">
                        Chief of Technology
                    </div>
                </div>
                <div className="flex flex-col items-start jusitfy-center w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/salaar.JPG'}
                            fill
                            className="object-cover group-hover:scale-[125%] transition-all duration-500"
                            style={{ objectPosition: '35% 0%' }}
                        />
                    </div>
                    <div className="w-full text-left text-[18px] mt-2 px-1">
                        Salaar Khan
                    </div>
                    <div className="text-opacity-50 px-1 text-[14px]">
                        Internal Affairs
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitation;