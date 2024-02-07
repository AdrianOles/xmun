import { getRedirectResult, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import Image from 'next/image';
import { useRouter } from 'next/router';
import {auth, provider} from '@/firebase'
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";

export default function SignIn() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const authUser = useUser();
    
    const signOutUser = async () => {
        try {
            await signOut(auth);
            authUser.onRemove();
            console.log("User signed out");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                // You can redirect to a different page or perform other actions here
                console.log(user);
                authUser.onUpdate(user.displayName, user.email, user.photoURL);
                setLoading(false);
            } else {
                // User is signed out
                setLoading(false);
            }
        });

        // Cleanup the listener when the component is unmounted
        return () => {
            unsubscribe()
        };
    }, []);

    const signIn = () => {
        setLoading(true);
        signOutUser()
        signInWithRedirect(auth, provider);
        setLoading(false);
    }

    const handleButton = () => {
        if (!loading && !authUser.auth) {
            signIn();
        } else if (loading) {
            return null;
        } else if (authUser.auth) {
            console.log("hi")
            router.replace('/')
        }
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
                            loading && !authUser ? (
                                <span>Loading...</span>
                            ) : !loading && !authUser.auth ? (
                                <span>Sign In</span>
                            ) : (
                                <span>Continue</span>  
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
            </div>
        </div>
    );
}
