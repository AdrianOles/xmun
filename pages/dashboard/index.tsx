import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { collection, getDocs } from "firebase/firestore";
import Header from '@/components/Header';
import DeleteDelegateModal from '@/components/DeleteDelegateModal';
import useUser from "@/hooks/useUser";
import useDelete from "@/hooks/useDelete";
import { useRouter } from 'next/router';
import { getRedirectResult, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth, db, provider } from '@/firebase'
import { useQuery } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners'
import { MdErrorOutline } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

interface Delegate {
    name: string;
    experience: string;
    grade: number;
    one: string;
    two: string;
    three: string;
}

interface DelegateApp {
    delegates: Delegate[];
    name: string;
    contact: string;
    email: string;
    picture: string;
}

export default function Home() {
    const router = useRouter();
    const [userState, setUserState] = useState<number | null>(null);
    const [ani, setAni] = useState<number | null>(null);
    const deleteDelegate = useDelete();
    const authUser = useUser();
    const [delegates, setDelegates] = useState<DelegateApp[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            authUser.onUpdate(session.user.name, session.user.email, session.user.image)
            if (session?.user.email != 'olesnieadrian@gmail.com' && session?.user.email != 'campanellim@stfxavier.ca' && session?.user?.email != 'rhea.goel.768@stfxavier.ca') {
                router.push("/")
            }
        }
    }, [session])

    const populateData = async () => {
        if (session?.user?.email === 'olesnieadrian@gmail.com' || session?.user?.email === 'campanellim@stfxavier.ca' || session?.user?.email === 'rhea.goel.768@stfxavier.ca') {
            const querySnapshot = await getDocs(collection(db, "delegates"));
            console.log("query:", querySnapshot)
            const delegateInfo: DelegateApp[] = [];

            querySnapshot.forEach((delegate) => {
                // Assuming each document in Firestore represents a single delegate
                const delegateData = delegate.data() as DelegateApp;

                delegateInfo.push(delegateData)
            });

            setLoading(false);
            return delegateInfo
        } else {
            console.log("email:", session?.user?.email)
            console.log('uh oh')
            return null
        }
    }


    useEffect(() => {
        setAni(null)
        if (userState) {
            setTimeout(() => {
                setAni(userState)
            }, 350)
        }
    }, [userState])

    const {
        data: allDelegates,
        isLoading,
        isSuccess,
        isError: isErrorQuery,
    } = useQuery({
        queryKey: [`delegates`],
        queryFn: async () => {
            console.log("running")
            const tempData = await populateData();
            console.log("Tempdata: ", tempData)

            setDelegates(tempData);
            return tempData
        },
        staleTime: 60 * 60 * 1000, // 20 minutes in milliseconds
        enabled: session?.user ? true: false
    });

    return (
        <div className={`${inter.className} min-h-[100vh] w-full bg-[#EAEAEA] relative overflow-x-hidden h-full`}>
            <div className='flex flex-col h-full w-full z-50 justify-between items-between'>
                <Header />
                <DeleteDelegateModal />
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

                <div className='h-full w-full flex flex-col z-10 gap-4'>
                    <div className='w-full bg-transparent h-full px-6 md:px-20 py-10 md:py-0 flex justify-between items-center'>
                        <div className='flex flex-col justify-center h-full md:py-10 md:pb-20 py-6'>
                            <div className='text-[#717171] tracking-[2px] text-[12px]'>
                                Welcome, {authUser.name}
                            </div>
                            <div className='md:text-[40px] tracking-[6px] font-[400] text-[32px]'>
                                XMUN DASHBOARD
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full lg:p-20 lg:pt-0 pt-0 p-4">
                        <div className="text-[24px] font-semibold pb-10">Delegations</div>

                        <div className='flex-col gap-2 h-full border-t-black border-t-[3px] lg:w-full xl:w-[75%]'>
                            {
                                allDelegates != null && allDelegates?.length > 0 && isSuccess && !isErrorQuery ? (
                                    <>
                                        {
                                            allDelegates.map((delegate, index) => (
                                                <div key={index} className="flex flex-col gap-4 border-b-[3px] border-b-black px-4 py-3 pb-8">
                                                    <div key={index} className='w-full flex justify-between items-center gap-4 pb-2'>
                                                        <div className="flex gap-2 items-center">
                                                            <div className='min-h-[40px] min-w-[40px] relative rounded-full overflow-hidden aspect-square'>
                                                                <Image
                                                                    src={delegate.picture}
                                                                    alt=""
                                                                    fill
                                                                />
                                                            </div>
                                                            <div className="">Contact: <span className="font-medium whitespace-nowrap">{delegate.contact}</span></div>
                                                            <div className="h-[20px] w-[1px] bg-black mx-4" />
                                                            <div className="hidden lg:block">Email: {delegate.email}</div>
                                                        </div>
                                                        <div onClick={() => deleteDelegate.onOpen(delegate.email)} className="px-3 py-1.5 border border-red-500 rounded-[8px] cursor-pointer text-red-500 hover:bg-red-500 hover:text-white transition">
                                                            Delete
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-4 w-full lg:w-fit overflow-x-auto lg:overflow-x-hidden">
                                                        <div className="font-medium">Participants:</div>
                                                        <div className="flex justify-evenly w-full no-wrap gap-2 border-b border-black pb-1">
                                                            <div className="min-w-[200px] w-[200px]">Name</div>
                                                            <div className="min-w-[150px] lg:block hidden">Experience</div>
                                                            <div className="min-w-[150px] lg:block hidden">Grade</div>
                                                            <div className="w-full">Choices</div>
                                                        </div>
                                                        {
                                                            delegate.delegates.map((delegate, index) => (
                                                                <div key={index} className="border flex justify-start text-left gap-2">
                                                                    <div className="min-w-[200px] w-[200px]">{delegate.name}</div>
                                                                    <div className="min-w-[150px] lg:block hidden">{delegate.experience}</div>
                                                                    <div className="min-w-[150px] lg:block hidden">{delegate.grade}</div>
                                                                    <div className="min-w-[150px] w-[150px] whitespace-nowrap">1. {delegate.one}</div>
                                                                    <div className="min-w-[150px] w-[150px] whitespace-nowrap">2. {delegate.two}</div>
                                                                    <div className="min-w-[150px] w-[150px] whitespace-nowrap">3. {delegate.three}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                                ): isLoading ? (
                                    <div className='w-full h-full flex flex-col items-center justify-center mt-10 gap-4'>
                                        <ClipLoader />
                                        <div>Loading...</div>
                                    </div>    
                                )  :  isErrorQuery && (
                                    <div className='w-full h-full flex flex-col items-center justify-center text-red-500 font-semibold mt-10 gap-4'>
                                        <MdErrorOutline size={50} />
                                        <div>Something went wrong...</div>
                                    </div>  
                                )
                            }
                            {
                                isSuccess && (allDelegates?.length === 0 || allDelegates === null) && (
                                    <div className='w-full h-full flex flex-col items-center justify-center text-black font-semibold mt-10 gap-4'>
                                        <div className="text-[24px]">No Registrations</div>
                                        <div onClick={() => router.reload()} className="text-blue-500 hover:underline cursor-pointer">Refresh?</div>
                                    </div> 
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
