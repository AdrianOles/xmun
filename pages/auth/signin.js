// pages/auth/signin.js
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SignIn() {
    const { data: session } = useSession();
    const router = useRouter()
    
    useEffect(() => {
        if (session) {
            router.push('/')
        }
    }, [session])

    return (
        <div className='w-full h-[100vh] relative flex flex-col items-center justify-center gap-6'>
            <Image
                src="https://pbs.twimg.com/media/EoEvME_WMAIMzTa?format=jpg&name=large"
                fill
                className='object-cover'
                alt="St. Francix Xavier"
            />
            <div className='absolute bg-black w-full h-full bg-opacity-70 backdrop-blur-[4px]' />

            <div className='z-50 text-white uppercase tracking-[10px] text-[32px]'>
                XMUN Sign Up
            </div>
            <button onClick={() => signIn('google')}
                className='p-2 border text-white border-white z-50 transition
                hover:border-black hover:text-black hover:bg-white'>
                Sign In With Google
            </button>
        </div>
    );
}
