import useNav from "@/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import { useEffect, useState, useRef } from 'react';

const Header = () => {
    const router = useRouter();
    const nav = useNav();
    const [ani, setAni] = useState(false);

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
        ${router.pathname === '/' ? 'text-white' : 'text-black'} transition-all `} >
            <div className="w-[50px] lg:hidden" />
            <Hamburger />
            <div className="lg:block hidden">
                <Image
                    alt='xmun logo'
                    className={`brightness-0 ${router.pathname === '/' ? 'invert': ''} md:scale-100 scale-75`}
                    height={50}
                    width={50}
                    src={'/xmunlogo.png'}
                />
            </div>
            <div className="gap-10 tracking-wider font-[300] text-[14px] hidden lg:flex">
                <Link href='/' className={`cursor-pointer  ${router.pathname === '/' ? 'opacity-100 font-[400]' : 'hover:opacity-100 opacity-80'}`}>HOME</Link>
                <Link href='/invitation' className={`cursor-pointer  ${router.pathname === '/invitation' ? 'opacity-100 font-[400]' : 'hover:opacity-100 opacity-80'}`}>INVITATION</Link>
                <Link href="/committees" className={`cursor-pointer  ${router.pathname === '/committees' ? 'opacity-100 font-[400]' : 'hover:opacity-100 opacity-80'}`}>COMMITTEES</Link>
                <Link href="/schedule" className={`cursor-pointer  ${router.pathname === '/schedule' ? 'opacity-100 font-[400]' : 'hover:opacity-100 opacity-80'}`}>SCHEDULE</Link>
                <Link href="/resources" className={`cursor-pointer  ${router.pathname === '/resources' ? 'opacity-100 font-[400]' : 'hover:opacity-100 opacity-80'}`}>RESOURCES</Link>
            </div>
            <div className='p-2 border border-black tracking-[3px] font-[300] text-[14px] cursor-pointer hover:bg-black group transition'>
                <div className='opacity-90 group-hover:text-white'>SIGN IN</div>
            </div>

            <div className={`fixed top-0 left-0 w-[100vw] ${nav.open ? 'h-[100vh]' : 'h-0'} transition-all bg-opacity-50 backdrop-blur-[50px] ${router.pathname === '/' ? 'bg-black' : 'bg-white'}`}>
                <div className={`absolute ${nav.open ? 'opacity-100' : "opacity-0"} w-full h-full top-0 lg:hidden`}>
                <div className={`flex flex-col gap-4 px-14 pt-32 ${router.pathname === '/' ? 'text-white' : 'text-black'} ${nav.open ? 'block' : "hidden"} uppercase tracking-[2px]`}>
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