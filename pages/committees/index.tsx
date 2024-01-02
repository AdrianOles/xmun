import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Countdown, { CountdownRenderProps } from 'react-countdown';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const targetDate = new Date('2024-03-7').getTime();
    const [userState, setUserState] = useState<number | null>(null);

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
    
    return (
        <div className={`${inter.className} h-[100vh] w-full bg-[#EAEAEA] relative overflow-y-auto overflow-x-hidden`}>
            <div className='flex flex-col h-full w-full z-50 justify-between items-between'>
                <Header />
                
                <div className='absolute right-0 bottom-1/2'>
                    <svg width="250" height="250" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="500" r="499" stroke="url(#paint0_linear_58_3)" stroke-opacity="0.2" stroke-width="2" />
                        <defs>
                            <linearGradient id="paint0_linear_58_3" x1="500" y1="0" x2="500" y2="1000" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-color="#717171" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='absolute top-1/2 bottom-1/2 -translate-y-[100%] right-1/2 left-1/2 translate-x-[200px] h-[500px] w-[1px] rectangle rotate-[45deg] hidden lg:block' />

                <div className='absolute left-0 top-0 rotate-[180deg]'>
                    <svg width="250" height="250" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="500" r="499" stroke="url(#paint0_linear_58_3)" stroke-opacity="0.2" stroke-width="2" />
                        <defs>
                            <linearGradient id="paint0_linear_58_3" x1="500" y1="0" x2="500" y2="1000" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-color="#717171" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className='h-full w-full flex flex-col z-10'>
                    <div className='md:h-[30%] w-full bg-transparent px-6 md:px-20 py-10 md:py-0 flex justify-between items-center'>
                        <div className='flex flex-col justify-center h-full'>
                            <div className='text-[#717171] tracking-[2px]'>
                                St. Francis Xavier presents
                            </div>
                            <div className='text-[40px] tracking-[6px] font-[400]'>
                                XMUN COMMITTEES
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className='text-[#717171] tracking-[2px]'>Time until registration:</div>
                            <Countdown date={targetDate} renderer={renderer} />
                        </div>
                    </div>
                    <div className='md:h-[70%] w-full flex flex-col md:flex-row gap-4 p-4 transition-all duration-[500ms]'>
                        <div onClick={() => setUserState(1)} className={`md:h-full bg-black transition-all duration-[500ms] relative group
                        ${userState === 1 ? 'md:w-[200%]' : 'w-full md:w-full'} h-[1000px]`}>
                            <Image
                                fill 
                                className='object-cover absolute'
                                src="https://img.lemde.fr/2022/12/22/5/0/1730/865/1342/671/60/0/e968e4d_1671703423578-b5e.jpeg"
                                alt="Pokemon"
                            />
                            <div className='w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] z-1 absolute' />
                            {/* When Clicked */}
                            <div className={` text-white absolute h-full w-full transition-all ${userState === 1 ? 'opacity-100 z-10' : 'opacity-0 z-2'}`}>
                                <div className="flex flex-col h-full w-full p-10">
                                    <div className='tracking-[5px] text-[24px] mb-4'>POKEMON</div>
                                    <div className="tracking-[0.5px]">
                                        To those living now, the world has always been like this; it was always divided up into five factions: the selfless Abnegation, the peaceful Amity, the honest Candor, the brave Dauntless, the knowledgeable Erudite, and the dreaded Factionless...
                                    </div>
                                    <div className="mt-auto px-3 py-1 border border-white w-fit uppercase tracking-[5px] cursor-pointer hover:bg-white hover:text-black">GUIDE</div>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className={`h-full w-full absolute cursor-pointer ${userState != 1 ? 'opacity-100 z-10' : 'opacity-0 z-2'}`}>
                                <div className='text-white tracking-[5px] text-[24px] w-full h-full flex items-center justify-center'>
                                    POKEMON
                                    <div className='absolute bottom-0 right-0 p-5 tracking-[2px] text-[14px] group-hover:block hidden'>
                                        Tap to view
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setUserState(2)} className={`h-full bg-black transition-all duration-[500ms] relative group
                        ${userState === 2 ? 'md:w-[200%]' : 'w-full md:w-full'}`}>
                            <Image
                                fill 
                                className='object-cover absolute'
                                src="https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/05/09082340/600Marvels3.jpg"
                                alt="Pokemon"
                            />
                            <div className='w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] z-1 absolute' />
                            {/* When Clicked */}
                            <div className={` text-white absolute h-full w-full transition-all ${userState === 2 ? 'opacity-100 z-10' : 'opacity-0 z-2'}`}>
                                <div className="flex flex-col h-full w-full p-10">
                                    <div className='tracking-[5px] text-[24px] mb-4'>MARVEL</div>
                                    <div className="tracking-[0.5px]">
                                        To those living now, the world has always been like this; it was always divided up into five factions: the selfless Abnegation, the peaceful Amity, the honest Candor, the brave Dauntless, the knowledgeable Erudite, and the dreaded Factionless...
                                    </div>
                                    <div className="mt-auto px-3 py-1 border border-white w-fit uppercase tracking-[5px] cursor-pointer hover:bg-white hover:text-black">GUIDE</div>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className={`h-full w-full absolute cursor-pointer ${userState != 2 ? 'opacity-100 z-10' : 'opacity-0 z-2'}`}>
                                <div className='text-white tracking-[5px] text-[24px] w-full h-full flex items-center justify-center'>
                                    MARVEL
                                    <div className='absolute bottom-0 right-0 p-5 tracking-[2px] text-[14px] group-hover:block hidden'>
                                        Tap to view
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setUserState(3)} className={`h-full bg-black transition-all duration-[500ms] relative group
                        ${userState === 3 ? 'md:w-[200%]' : 'w-full md:w-full'}`}>
                            <Image
                                fill 
                                className='object-cover absolute'
                                src="https://images.theconversation.com/files/342952/original/file-20200619-43240-1pyozbb.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                                alt="Pokemon"
                            />
                            <div className='w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] z-1 absolute' />
                            {/* When Clicked */}
                            <div className={` text-white absolute h-full w-full transition-all ${userState === 3 ? 'opacity-100 z-10' : 'opacity-0 z-2'}`}>
                                <div className="flex flex-col h-full w-full p-10">
                                    <div className='tracking-[5px] text-[24px] mb-4'>COLONIALISM</div>
                                    <div className="tracking-[0.5px]">
                                        To those living now, the world has always been like this; it was always divided up into five factions: the selfless Abnegation, the peaceful Amity, the honest Candor, the brave Dauntless, the knowledgeable Erudite, and the dreaded Factionless...
                                    </div>
                                    <div className="mt-auto px-3 py-1 border border-white w-fit uppercase tracking-[5px] cursor-pointer hover:bg-white hover:text-black">GUIDE</div>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className={`h-full w-full absolute cursor-pointer ${userState != 3 ? 'opacity-100 z-10' : 'opacity-0 z-2'}`}>
                                <div className='text-white tracking-[5px] text-[24px] w-full h-full flex items-center justify-center'>
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
