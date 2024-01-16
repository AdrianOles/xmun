import Header from "@/components/Header";
import Image from "next/image";

const Invitation = () => {
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
                        XMUN SECRETARIAT
                    </div>
                    <div className='text-[#c0c0c0] tracking-[2px] text-[16px]'>
                        A letter to welcome
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitation;