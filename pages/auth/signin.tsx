import { getRedirectResult, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import Image from 'next/image';
import { useRouter } from 'next/router';
import {auth, provider} from '@/firebase'
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const authUser = useUser();

    const handleButton = () => {
        setLoading(true);
        if (!session) {
            signIn('google', { callbackUrl: 'https://xmun.vercel.app/' })
        } else {
            if (session.user) {
                authUser.onUpdate(session.user.name, session.user.email, session.user.image)
            }
            router.push('/');
        }
        setLoading(false);
    }

    return (
        <div className='w-full h-[100vh] relative grid lg:grid-cols-2'>
            <div className="col-span-1 lg:block hidden w-full h-full bg-white z-50">
                <Image
                    src="https://pbs.twimg.com/media/EoEvME_WMAIMzTa?format=jpg&name=large"
                    fill
                    className='object-cover scale-x-[-1]'
                    alt="St. Francix Xavier"
                />
                <div className='absolute bg-black w-full h-full bg-opacity-70 backdrop-blur-[4px]' />
            </div>
            <div className="col-span-1 w-full h-full bg-white z-50 flex p-4 lg:p-20 flex-col justify-center">
                <div className="flex lg:gap-6 gap-3 items-center">
                    <div>
                        <Image
                            alt='xmun logo'
                            className={`brightness-0`}
                            height={50}
                            width={50}
                            src={'/xmunlogo.png'}
                        />
                    </div>
                    <div className="lg:text-[36px] text-[24px] font-bold lg:tracking-[14px] tracking-[8px]">
                        XMUN 2024
                    </div>
                </div>
                
                <div className="flex flex-col gap-1 border-b border-black border-opacity-[10%] lg:w-[80%] w-full pb-4 lg:mt-10 mt-6">
                    <div className="text-[20px] lg:text-[26px] font-bold">Welcome Delegate,</div>
                    <div className="lg:text-base text-[14px]">Please sign in to continue your registration.</div>
                </div>
                <div onClick={() => handleButton()} className='md:text-[20px] text-[16px] text-white lg:w-[80%] w-full cursor-pointer relative flex items-center justify-center overflow-hidden transition mt-4 rounded-[8px] bg-black hover:bg-opacity-[80%]'>
                    <div className="z-50 px-3 py-2">
                        {
                            loading ? (
                                <span>Loading...</span>
                            ) : !session && (
                                <span>Sign In</span>
                            )
                        }
                    </div>
                    <div className='absolute top-0 right-0 bg-black bg-opacity-[10%] backdrop-blur-[50px] z-[2] w-full h-full' />
                    <div className='absolute top-0 right-0 bg-[#9780FF] rounded-full z-[1] w-[50px] h-[50px] animate-pulse' />
                    <div className='absolute top-0 left-1/2 right-1/2 -translate-x-[70%] bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px] animate-pulse' />
                    <div className='absolute top-0 right-1/2 left-1/2 -translate-x-[70%] bg-[#9780FF] rounded-full z-[1] w-[50px] h-[50px] animate-pulse' />
                    <div className='absolute top-0 left-1/2 right-1/2 -translate-x-[30%] bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px] animate-pulse' />
                    <div className='absolute top-0 right-0 left-0 -translate-x-1/2 bg-[#9780FF] rounded-full z-[1] w-[50px] h-[50px] animate-pulse' />
                    <div className='absolute top-0 left-0 bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px]  diff-animate-pulse' />
                    <div className='absolute top-0 left-1/2 right-1/2 -translate-x-1/2 bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px] animate-pulse' />
                    <div className='absolute top-0 left-1/2 right-1/2 -translate-x-1/2 bg-white rounded-full z-[1] w-[20px] h-[30px] grow-animate-pulse' />
                    <div className='absolute w-full h-full z-50' />
                </div>

                <div className="text-[12px] text-left mt-2 lg:w-[80%]">
                    Note, you must use native browsers (Safari, Google Chrome, etc.) The Instagram browser is not safe.
                </div>
            </div>
        </div>
    );
}
