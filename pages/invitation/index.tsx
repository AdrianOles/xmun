import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

const Invitation = () => {
    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden z-50 ">
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

            <div className="w-full h-full md:px-20 xl:px-[248px] pt-20 pl-4">
                <div className="text-[40px] font-semibold">
                    Dear Delegate,
                </div>
                <div className="my-4">
                    The secretariat is excited to welcome you to our third XMUN conference! Our exec team has been working hard to bring you our yearly fictional conference. This year with 2 separate conferences, one for novice elementary school delegates, and a conference with two committees for our high school delegates. <br /> <br />
                    For our High school delegates, students get two different fictional committees to choose from. Our chosen committees are Pokemon and divergent. Each Committee has real issues to discover, issues delegates will work through together to create comprehensive solutions for. From this experience, delegates will develop stronger critical thinking skills, public speaking abilities and leadership qualities. <br /> <br />
                    Our chairs are well prepared to bring delegates to a formal yet thrilling conference. As a secretariat, we are committed to fostering an inclusive and welcoming environment for all participants. We encourage delegates to approach the conference with an open mind and a willingness to engage in respectful and constructive dialogue with their peers. This is Saint Francis Xavier&apos;s third time hosting XMUN, each year growing in numbers we gladly await a successful conference.
                    Excited for a fruitful discussion, XMUN awaits you!
                </div>
                <div className="text-[32px] font-semibold pt-4">
                    Sincerely, 
                </div>
            </div>

            <div className="w-full h-full py-8 md:px-20 xl:px-60 flex flex-wrap gap-x-10 justify-center gap-y-10">
                <div className="flex flex-col items-start w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/salman.JPG'}
                            fill
                            className="object-cover group-hover:scale-110 transition-all"
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
                            src={'/execs/rhea.JPG'}
                            fill
                            className="object-cover group-hover:scale-110 transition-all"
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
                <div className="flex flex-col items-start jusitfy-center w-[225px] relative">
                    <div className="h-[250px] w-[225px] relative group overflow-hidden">
                        <Image
                            alt="student image"
                            src={'/execs/aisha.JPG'}
                            fill
                            className="object-cover group-hover:scale-110 transition-all"
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
                            className="object-cover group-hover:scale-110 transition-all"
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
                            className="object-cover group-hover:scale-110 transition-all"
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
                            className="object-cover group-hover:scale-110 transition-all"
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