import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import Image from "next/image";
import Link from "next/link";

const Resources = () => {
    return (
        <div className="flex flex-col w-full h-full overflow-hidden z-50  bg-black relative">
            <div className="flex flex-col w-full relative">
                <div className='absolute lg:right-0 bottom-0 rotate-[90deg] lg:scale-100 scale-[50%] right-[-100px]'>
                    <svg width="431" height="442" viewBox="0 0 431 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M430 221C430 342.527 333.941 441 215.5 441C97.0585 441 1 342.527 1 221C1 99.4734 97.0585 1 215.5 1C333.941 1 430 99.4734 430 221Z" stroke="url(#paint0_linear_101_2)" stroke-width="2" />
                        <defs>
                            <linearGradient id="paint0_linear_101_2" x1="215.5" y1="0" x2="215.5" y2="442" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='absolute top-1/2 bottom-1/2 right-1/2 left-1/2 h-[500px] w-[1px] rectangle rotate-[45deg] hidden lg:block' />

                <div className='absolute left-0 -translate-x-[200px] top-0 rotate-[180deg]'>
                    <svg width="431" height="442" viewBox="0 0 431 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M430 221C430 342.527 333.941 441 215.5 441C97.0585 441 1 342.527 1 221C1 99.4734 97.0585 1 215.5 1C333.941 1 430 99.4734 430 221Z" stroke="url(#paint0_linear_101_2)" stroke-width="2" />
                        <defs>
                            <linearGradient id="paint0_linear_101_2" x1="215.5" y1="0" x2="215.5" y2="442" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className='absolute right-1/2 left-1/2 translate-x-1/2 top-0 bottom-0 translate-y-[700px] rotate-[180deg]'>
                    <svg width="431" height="442" viewBox="0 0 431 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M430 221C430 342.527 333.941 441 215.5 441C97.0585 441 1 342.527 1 221C1 99.4734 97.0585 1 215.5 1C333.941 1 430 99.4734 430 221Z" stroke="url(#paint0_linear_101_2)" stroke-width="2" />
                        <defs>
                            <linearGradient id="paint0_linear_101_2" x1="215.5" y1="0" x2="215.5" y2="442" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <Header />
                <div className='w-full bg-transparent h-full px-6 md:px-20 py-10 mt-10 md:py-0 flex justify-between items-center'>
                    <div className='flex flex-col justify-center h-full md:py-10 md:pb-20 py-6 items-center w-full'>
                        <div className='text-[#cecece] tracking-[2px] text-[12px]'>
                            St. Francis Xavier presents
                        </div>
                        <div className='md:text-[40px] tracking-[6px] font-[400] text-[32px] text-white'>
                            XMUN RESOURCES
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Grid starts here */}
            <div className="grid grid-cols-3 gap-4 p-4 md:p-10 text-white">
                <Link href={"https://drive.google.com/file/d/1SFLA1lUgDijIs9Extk7PTZdVh3RgeDet/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/introMunPreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%]"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Introduction
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Intro
                        </div>
                    </div>
                </Link>


                <Link href={"https://drive.google.com/file/d/1kF47eIi3XQxNAVLDt1xdLHIJNXcXYIVZ/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/pointsMotionPreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%]"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Points & motions
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Motions
                        </div>
                    </div>
                </Link>


                <Link href={'./tips.jpg'} target="__blank"
                    className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/tips.jpg'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%]"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Tips & Tricks
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Tips
                        </div>
                    </div>
                </Link>


                <Link href={"https://drive.google.com/file/d/1lvOXbf_lAZXOsuIM_NkhlJET-Q0noK-z/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition col-span-2 rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/ettiquetePreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%]"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Etiquette
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Etiquette
                        </div>
                    </div>
                </Link>


                <Link href={"https://drive.google.com/file/d/1JJIRTSu3XTS9zsC0jdm0rca9iCLwyOgC/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/positionPaperPreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%]"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Position Paper
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full text-center">
                            Position Paper
                        </div>
                    </div>
                </Link>


                <Link href={"https://drive.google.com/file/d/1C4_g28Ktl-UTF7mE7HgfnFreiY7P2E9P/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/ppexPreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%] sepia"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Exemplar
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full text-center">
                            Exemplar
                        </div>
                    </div>
                </Link>
                
                <Link href={"https://drive.google.com/file/d/1srt2Wnt1UDG7NgKQ8ryzmOCdm1DgnmSD/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition col-span-2 rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/draftResolutionPreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%]"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Resolution
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full text-center">
                            Resolution
                        </div>
                    </div>
                </Link>

            
                <Link href={"https://drive.google.com/file/d/1loRoHmpA0EeD72JbE19jpLEG_bbiAcWR/view"} target="__blank"
                className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/clausePreview.png'}
                        fill
                        className="object-cover saturate-[200%] contrast-[150%] sepia"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Clauses
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full text-center">
                            Clauses
                        </div>
                    </div>
                </Link>
            

                <Link href={"https://drive.google.com/file/d/1oYtMlWBbmeDZyGAB7jpfnWkTto2b2sWa/view"} target="__blank"
                    className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/handbookPreview.png'}
                        fill
                        className="object-cover saturate-[150%] contrast-[150%] sepia"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Handbook
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full text-center">
                            Handbook
                        </div>
                    </div>
                </Link>
            

                <Link href={"https://drive.google.com/file/d/1VjhMzhxWRhzns3087bUcWK41gEb9RFPc/view"} target="__blank"
                className="h-[150px] md:h-[200px] transition rounded-[12px] p-4 bg-[#121212] relative cursor-pointer group">
                    <Image
                        src={'/termsPreview.png'}
                        fill
                        className="object-cover saturate-[200%] contrast-[200%] sepia"
                        alt="intro mun"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[10px] group-hover:bg-opacity-80 transition" />
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full">
                            Terms
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full z-50 text-white uppercase tracking-[2px]">
                        <div className="flex items-center justify-center w-full h-full text-center">
                            Terms
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Resources;