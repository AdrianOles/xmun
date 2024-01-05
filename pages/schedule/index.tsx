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
                        March 7th, 2024
                    </div>
                </div>
            </div>
            
            <div className="w-full h-full bg-[#EAEAEA]">
                <div className="h-full flex md:w-[50vw] w-[100vw] mx-auto z-50">
                    <div className="h-full w-fit flex flex-col gap-10 py-10 px-8">
                        {
                            Array(10).fill(true).map((item, index) => (
                                <div key={index} className="min-h-[100px] w-full rounded-[10px] flex items-center justify-end text-right">
                                    Time
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-10 w-full py-10 px-8 border-l-2 border-black">
                        {
                            Array(10).fill(true).map((item, index) => (
                                <div key={index} className="min-h-[100px] w-full rounded-[10px] bg-black">
                                    hello
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Schedule;