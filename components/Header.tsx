import useNav from "@/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import { useEffect, useState, useRef } from 'react';
import useUser from "@/hooks/useUser";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";

const Header = () => {
    const router = useRouter();
    const nav = useNav();
    const [ani, setAni] = useState(false);
    const authUser = useUser();
    const [clientUser, setClientUser] = useState<any>(authUser);

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
                authUser.onUpdate(user.displayName, user.email, user.photoURL);
            } else {
                // User is signed out
            }
        });

        // Cleanup the listener when the component is unmounted
        return () => {
            unsubscribe()
        };
    }, []);

    useEffect(() => {
        if (authUser.auth) {
            setClientUser(authUser);
        } else {
            setClientUser(authUser);
        }
    }, [authUser])

    useEffect(() => {
        if (nav.open) {
            setTimeout(() => {
                setAni(true);
            }, 100)
        } else {
            setAni(false);
        }
    }, [nav.open])

    return ( 
        <div className={`flex justify-between z-50 pt-6 px-10 pl-4 md:pl-10 w-[100vw] relative items-center
        ${router.pathname === '/' ? 'text-white' : 'text-black'}
        ${router.pathname === '/resources' && 'text-white'}
        ${router.pathname === '/invitation' && 'text-white'}
        ${router.pathname === '/schedule' && 'text-white'} transition-all `} >
            <div className="w-[50px] lg:hidden" />
            <Hamburger />
            <Link href={'/'} className="lg:block hidden">
                <Image
                    alt='xmun logo'
                    className={`brightness-0 ${router.pathname === '/' || router.pathname === '/resources' ? 'invert' : ''}
                    ${router.pathname === '/invitation' && 'invert'} ${router.pathname === '/schedule' && 'invert'} md:scale-100 scale-75`}
                    height={50}
                    width={50}
                    src={'/xmunlogo.png'}
                />
            </Link>
            <div className="gap-10 tracking-wider font-[300] text-[14px] hidden lg:flex">
                <Link href='/' className={`cursor-pointer  ${router.pathname === '/' ? 'opacity-100 font-[500]' : 'hover:opacity-100 opacity-80'}`}>HOME</Link>
                <Link href='/invitation' className={`cursor-pointer  ${router.pathname === '/invitation' ? 'opacity-100 font-[500]' : 'hover:opacity-100 opacity-80'}`}>INVITATION</Link>
                <Link href="/committees" className={`cursor-pointer  ${router.pathname === '/committees' ? 'opacity-100 font-[500]' : 'hover:opacity-100 opacity-80'}`}>COMMITTEES</Link>
                <Link href="/schedule" className={`cursor-pointer  ${router.pathname === '/schedule' ? 'opacity-100 font-[500]' : 'hover:opacity-100 opacity-80'}`}>SCHEDULE</Link>
                <Link href="/resources" className={`cursor-pointer  ${router.pathname === '/resources' ? 'opacity-100 font-[500]' : 'hover:opacity-100 opacity-80'}`}>RESOURCES</Link>
            </div>
            {
                clientUser.auth && authUser.picture ? (
                    <div className="flex items-center justify-center gap-4">
                        <div className="uppercase text-[14px] opacity-90">
                            {
                                clientUser.email === 'olesnieadrian@gmail.com' ? (
                                    <Link href="/dashboard" className="cursor-pointer hover:underline">
                                        Dashboard
                                    </Link>
                                ): (
                                    <div onClick={() => signOutUser()} className="cursor-pointer hover:underline">
                                           Sign Out 
                                    </div>
                                )
                            }
                        </div>
                        <div onClick={() => signOutUser()} className={`cursor-pointer h-[30px] w-[30px] relative rounded-full overflow-hidden`}>
                            <Image
                                src={authUser.picture}
                                fill
                                alt="Profile picture"
                            />
                        </div>
                    </div>
                ): (
                    <div onClick={() => router.push("/auth/signin")} className = {`p-2 border tracking-[3px] font-[300] text-[14px] cursor-pointer group transition
                        ${router.pathname === '/committees' ? 'border-black hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}
                        `}>
                        <div className='opacity-90'>SIGN IN</div>
                    </div>
                )
            }

            <div className={`fixed z-[100] top-0 left-0 w-[100vw] ${nav.open ? 'h-[100vh]' : 'h-0'} transition-all backdrop-blur-[10px] ${router.pathname === '/' || router.pathname === '/resources' || router.pathname === '/schedule' ? 'bg-black' : 'bg-white'}`}>
                <div className={`absolute ${nav.open ? 'opacity-100' : "opacity-0"} w-full h-full top-0 lg:hidden`}>
                    <div className={`flex flex-col gap-4 px-14 pt-32 
                    ${router.pathname === '/' && 'text-white'} 
                    ${router.pathname === '/invitation' && 'text-black'} 
                    ${router.pathname === '/committees' && 'text-black'} 
                    ${router.pathname === '/' && 'text-white'} 
                    ${router.pathname === '/' && 'text-white'} 
                    ${nav.open ? 'block' : "hidden"} uppercase tracking-[2px]`}>
                    <div onClick={() => {
                            nav.onClose()
                            router.push("/")
                    }} className={`cursor-pointer ${ani ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition duration-[200ms] ease-in-out hover:opacity-75`}>
                        HOME
                    </div>
                    <div onClick={() => {
                        nav.onClose()
                        router.push("/invitation")
                    }} className={`cursor-pointer ${ani ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition duration-[300ms] ease-in-out hover:opacity-75`}>
                    INVITATION
                </div>
                        <div onClick={() => {
                            nav.onClose()
                            router.push("/committees")
                        }} className={`cursor-pointer ${ani ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition duration-[400ms] ease-in-out hover:opacity-75`}>
                        COMMITTEES
                    </div>
                        <div onClick={() => {
                            nav.onClose()
                            router.push("/schedule")
                        }} className={`cursor-pointer ${ani ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition duration-[500ms] ease-in-out hover:opacity-75`}>
                        SCHEDULE
                    </div>
                        <div onClick={() => {
                            nav.onClose()
                            router.push("/resources")
                        }} className={`cursor-pointer ${ani ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition duration-[600ms] ease-in-out hover:opacity-75`}>
                        RESOURCES
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Header;