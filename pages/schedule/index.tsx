import Header from "@/components/Header";
import Image from "next/image";

const Schedule = () => {
    return ( 
        <div className="flex flex-col w-full h-full overflow-x-hidden z-50 ">
            <div className="flex flex-col w-full relative">
                <Image
                    fill
                    src={'https://isp.hcdsb.org/wp-content/uploads/2018/07/JV4-700x400.jpg'}
                    alt="school"
                    className="object-cover"
                />
                <div className="absolute bg-black bg-opacity-50 backdrop-blur-md h-full w-full top-0 left-0" />

                <Header />
                <div className='flex flex-col gap-1 justify-center items-center h-full text-center z-10 py-10 mb-8'>
                    <div className='md:text-[40px] tracking-[7px] font-[400] text-[32px] z-10 text-white'>
                        XMUN SCHEDULE
                    </div>
                    <div className='text-[#c0c0c0] tracking-[2px] text-[16px]'>
                        March 22nd, 2024
                    </div>
                </div>
            </div>
            
            <div className="w-full h-full bg-[#EAEAEA]">
                <div className="h-full flex md:w-[50vw] w-[100vw] mx-auto z-50">
                    <div className="h-full w-fit flex flex-col lg:gap-10 py-10 lg:px-8 px-2 font-medium">
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            8:30-8:45
                        </div>
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            8:45-9:45
                        </div>
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            10:00-11:20
                        </div>
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            11:30-12:20
                        </div>
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            12:30-2:30
                        </div>
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            2:40-3:00
                        </div>
                        <div className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right whitespace-nowrap">
                            3:00-3:30
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-10 w-full py-10 lg:px-8 px-2 border-l-2 border-black">
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Registration
                            </div>
                        </div>
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Guest Speaker
                            </div>
                        </div>
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Session 1
                            </div>
                        </div>
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Lunch
                            </div>
                        </div>
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Session 2
                            </div>
                        </div>
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Superlatives
                            </div>
                        </div>
                        <div className="h-[100px] flex items-center justify-center w-full">
                            <div className="w-full rounded-[10px] border-black border justify-center flex items-center text-center p-3 text-[18px] lg:p-6 lg:text-[22px] uppercase tracking-[5px]">
                                Closing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Schedule;