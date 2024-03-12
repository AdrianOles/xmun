import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Countdown, { CountdownRenderProps } from 'react-countdown';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const targetDate = new Date('2024-03-22').getTime();
    const [userState, setUserState] = useState<number | null>(null);
    const [ani, setAni] = useState<number | null>(null);

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed) {
            return <span>0:00:00</span>;
        } else {
            // Render a countdown using the provided values
            return (
                <span>{days}:{hours}:{minutes}:{seconds}</span>
            );
        }
    };

    useEffect(() => {
        setAni(null)
        if (userState) {
            setTimeout(() => {
                setAni(userState)
            }, 350)
        }
    }, [userState])
    
    return (
        <div className={`${inter.className} min-h-[100vh] w-full bg-[#EAEAEA] relative overflow-x-hidden`}>
            <div className='flex flex-col h-full w-full z-50 justify-between items-between'>
                <Header />
                
                <div className='absolute right-0 bottom-1/2'>
                    <svg width="250" height="250" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="500" r="499" stroke="url(#paint0_linear_58_3)" strokeOpacity="0.2" strokeWidth="2" />
                        <defs>
                            <linearGradient id="paint0_linear_58_3" x1="500" y1="0" x2="500" y2="1000" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#717171" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='absolute top-1/2 bottom-1/2 -translate-y-[100%] right-1/2 left-1/2 translate-x-[200px] h-[500px] w-[1px] rectangle rotate-[45deg] hidden lg:block' />

                <div className='absolute left-0 top-0 rotate-[180deg]'>
                    <svg width="250" height="250" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="500" r="499" stroke="url(#paint0_linear_58_3)" strokeOpacity="0.2" strokeWidth="2" />
                        <defs>
                            <linearGradient id="paint0_linear_58_3" x1="500" y1="0" x2="500" y2="1000" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#717171" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className='h-full w-full flex flex-col z-10 gap-0 gap-10'>
                    <div className='w-full bg-transparent h-full px-6 md:px-20 py-10 md:py-0 flex justify-between items-center'>
                        <div className='flex flex-col justify-center h-full md:py-10 md:pb-20 py-6'>
                            <div className='text-[#717171] tracking-[2px] text-[12px]'>
                                St. Francis Xavier presents
                            </div>
                            <div className='md:text-[40px] tracking-[6px] font-[400] text-[32px]'>
                                XMUN COMMITTEES
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className='text-[#717171] tracking-[2px]'>Time until registration:</div>
                            <Countdown date={targetDate} renderer={renderer} />
                        </div>
                    </div>
                    <div className='h-full w-full flex flex-col lg:flex-row gap-4 p-4 transition-all duration-[400ms]'>
                        <div onClick={() => setUserState(1)} className={`h-full bg-black transition-all duration-[500ms] relative group
                        ${userState === 1 ? 'lg:w-[200%]' : 'w-full md:w-full'} lg:min-h-[400px] lg:max-h-[400px] min-h-[300px]`}>
                            <Image
                                fill
                                className='object-cover absolute'
                                src="https://deadline.com/wp-content/uploads/2023/10/divergent-allegiant.jpg"
                                alt="Pokemon"
                            />
                            <div className='w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] z-1 absolute' />
                            {/* When Clicked */}
                            <div className={` text-white absolute h-full w-full transition-all ${ani === 1 ? 'md:opacity-100 md:z-10 duration-[400ms]' : 'md:opacity-0 md:z-2 duration-100'}
                            ${userState === 1 ? 'opacity-100 z-10' : 'md:opacity-0 opacity-100 z-2'}`}>
                                <div className="flex flex-col h-full w-full p-4 md:p-10">
                                    <div className='tracking-[5px] text-[20px] mb-4'>DIVERGENT</div>
                                    <div className={`tracking-[0.5px] text-[14px] md:text-[16px] ${ani === 1 ? 'block' : 'md:hidden'}`}>
                                        Welcome to the Divergent realm! Society is split between the factions and is on the verge of anarchy! Delegates must work together to build a new socioeconomic structure and navigate the relationships between the factions to achieve peace and security for all. 
                                    </div>
                                    <Link href={"https://drive.google.com/file/d/1DOtgZ8LY9WLOVHLtgv4U8wyfx9KvEkqO/view"} target='__blank'
                                        className="mt-auto px-3 py-1 border border-white w-fit uppercase tracking-[5px] cursor-pointer hover:bg-white hover:text-black">GUIDE</Link>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className={`h-full w-full absolute cursor-pointer ${userState != 1 ? 'md:opacity-100 opacity-0 z-10' : 'opacity-0 z-2'}`}>
                                <div className='text-white tracking-[5px] text-[20px] w-full h-full flex items-center justify-center'>
                                    DIVERGENT
                                    <div className='absolute bottom-0 right-0 p-5 tracking-[2px] text-[14px] group-hover:block hidden'>
                                        Tap to view
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setUserState(2)} className={`h-full bg-black transition-all duration-[500ms] relative group
                        ${userState === 2 ? 'lg:w-[200%]' : 'w-full md:w-full'}  lg:min-h-[400px] lg:max-h-[400px] min-h-[350px]`}>
                            <Image
                                fill 
                                className='object-cover absolute'
                                src="https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/09082340/600Marvels3.jpg"
                                alt="Pokemon"
                            />
                            <div className='w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] z-1 absolute' />
                            {/* When Clicked */}
                            <div className={` text-white absolute h-full w-full transition-all ${ani === 2 ? 'md:opacity-100 md:z-10 duration-[400ms]' : 'md:opacity-0 md:z-2 duration-100'}
                            ${userState === 2 ? 'opacity-100 z-10' : 'md:opacity-0 opacity-100 z-2'}`}>
                                <div className="flex flex-col h-full w-full p-4 md:p-10">
                                    <div className='tracking-[5px] text-[20px] mb-4'>MARVEL</div>
                                    <div className={`tracking-[0.5px] text-[14px] md:text-[16px] ${userState === 2 ? 'block' : 'md:hidden'}`}>
                                        Step into the Marvel Universe as we unravel the complex web of superhero governance at this conference on Marvel and the Sokovia Accords. Delve into the ethical and political dilemmas surrounding enhanced individuals as we examine the impact of the Sokovia Accords on the dynamic world of Marvel superheroes and their quest for justice.
                                    </div>
                                    <Link href={"https://drive.google.com/file/d/1flCJtxWvjW75WpTOn_YxLo9x0kW35jUw/view"} target='__blank'
                                        className="mt-auto px-3 py-1 border border-white w-fit uppercase tracking-[5px] cursor-pointer hover:bg-white hover:text-black">GUIDE</Link>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className={`h-full w-full absolute cursor-pointer ${userState != 2 ? 'md:opacity-100 opacity-0 z-10' : 'opacity-0 z-2'}`}>
                                <div className='text-white tracking-[5px] text-[20px] w-full h-full flex items-center justify-center'>
                                    MARVEL
                                    <div className='absolute bottom-0 right-0 p-5 tracking-[2px] text-[14px] group-hover:block hidden'>
                                        Tap to view
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setUserState(3)} className={`h-full bg-black transition-all duration-[500ms] relative group
                        ${userState === 3 ? 'lg:w-[200%]' : 'w-full md:w-full'}  lg:min-h-[400px] lg:max-h-[400px] min-h-[350px]`}>
                            <Image
                                fill 
                                className='object-cover absolute'
                                src="https://images.theconversation.com/files/342952/original/file-20200619-43240-1pyozbb.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                                alt="Pokemon"
                            />
                            <div className='w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] z-1 absolute' />
                            {/* When Clicked */}
                            <div className={` text-white absolute h-full w-full transition-all ${ani === 3 ? 'md:opacity-100 md:z-10 duration-[400ms]' : 'md:opacity-0 md:z-2 duration-100'}
                            ${userState === 3 ? 'opacity-100 z-10' : 'md:opacity-0 opacity-100 z-2'}`}>
                                <div className="flex flex-col h-full w-full p-4 md:p-10">
                                    <div className='tracking-[5px] text-[20px] mb-4'>COLONIALISM</div>
                                    <div className={`tracking-[0.5px] text-[14px] md:text-[16px] ${userState === 3 ? 'block' : 'md:hidden'}`}>
                                        Embark on a thought-provoking journey through history and global impact at our conference on Colonialism. Join us in exploring the multifaceted dimensions of colonial experiences, discussing the legacies, challenges, and critical perspectives that shape our understanding of this complex historical phenomenon.
                                    </div>
                                    <Link href={"https://drive.google.com/file/d/1N3TssM0OJ3_Kc3s1_xeNOYeD55uvZM0E/view?usp=sharing"} target='__blank'
                                        className="mt-auto px-3 py-1 border border-white w-fit uppercase tracking-[5px] cursor-pointer hover:bg-white hover:text-black">GUIDE</Link>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className={`h-full w-full absolute cursor-pointer ${userState != 3 ? 'md:opacity-100 opacity-0 z-10' : 'opacity-0 z-2'}`}>
                                <div className='text-white tracking-[5px] text-[20px] w-full h-full flex items-center justify-center'>
                                    COLONIALISM
                                    <div className='absolute bottom-0 right-0 p-5 tracking-[2px] text-[14px] group-hover:block hidden'>
                                        Tap to view
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
