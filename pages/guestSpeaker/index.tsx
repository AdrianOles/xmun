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
                    src={'https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg'}
                    alt="school"
                    className="object-cover"
                />
                <div className="absolute bg-black bg-opacity-70 backdrop-blur-sm h-full w-full top-0 left-0" />

                <Header />
                <div className='flex flex-col gap-1 justify-center items-center h-full text-center z-10 py-10 mb-8'>
                    <div className='md:text-[40px] tracking-[7px] font-[400] text-[32px] z-10 text-white uppercase'>
                        Guest Speaker
                    </div>
                    <div className='text-[#c0c0c0] tracking-[2px] text-[16px]'>
                        Sherry Saevil
                    </div>
                </div>
            </div>

            <div className="w-full h-full md:px-20 xl:px-[248px] pt-10 pl-4 px-4 flex flex-col gap-10 items-center pb-20">
                <div>
                    Sherry is a member of Mistawasis Nêhiyawak and an Alumni from University of Saskatchewan. She has dedicated her career to challenging systemic barriers and seeking justice for Indigenous communities in Canada.
                    <br />
                    <br />
                    Sherry Saevil is a Cree woman from Treaty 6 with over 30 years experience in and a passionate advocate for Indigenous issues. She has participated and advised on many key National events such as the Truth and Reconciliation Commission of Canada, the National Indigenous Educational Roundtable with the National Centre of Truth and Reconciliation, presenter at the World Indigenous Education Conference and the International Indigenous Education Conference, Indspire, and the National Centre for Assessment and Evaluation through the University of Illinois. Sherry is a recipient of the Canada 150-year award for her contribution in supporting reconciliation of Indigenous and non-Indigenous Canadians in Halton, the YMCA Peace Medal nomination, recognized by the Canadian Federation of University Women for outstanding achievement for 100 Years / 100 Women and most recently a Paul Harris Fellow through the Rotary Club in developing significant understanding and friendly relations in Halton.
                    <br />
                    <br />
                    Sherry continues to develop, consult, and implement a variety of transformative educational initiatives at the Halton Catholic District School Board by providing professional development to all staff, introducing Indigenous Elders, Artists, performers, Traditional Knowledge Keepers to our school while and encouraging teachers to embed Indigenous ways of knowing into the curriculum.
                </div>
                <div className="w-[500px] aspect-square relative">
                    <Image
                        fill
                        src={'/guestSpeaker.png'}
                        alt="Sherry"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Invitation;