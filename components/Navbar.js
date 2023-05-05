import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import logo from '../public/xmunlogo.svg';

function MobileNav({ open, setOpen }) {
    const router = useRouter();

    return (
        <div className={`z-50 xl:hidden absolute top-0 left-0 h-screen w-full bg-white transform ${open ? "-translate-y-0 overflow-x-hidden" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>

            <div className="flex flex-col justify-center items-center mt-48 xl:hidden">
                <a className={`${router.asPath === '/invitation' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/invitation'); setOpen(!open) }}>Invitation</a>
                <a className={`${router.asPath === '/what-is-xmun' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/what-is-xmun'); setOpen(!open) }}>What is XMUN?</a>
                <a className={`${router.asPath === '/registration' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/registration'); setOpen(!open) }}>Registration</a>
                <a className={`${router.asPath === '/itinerary' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/itinerary'); setOpen(!open) }}>Itinerary</a>
                <a className={`${router.asPath === '/committee' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/committee'); setOpen(!open) }}>Committee</a>
                <a className={`${router.asPath === '/photos' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/photos'); setOpen(!open) }}>Photos</a>
                <a className={`${router.asPath === '/resources' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/resources'); setOpen(!open) }}>Resources</a>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const router = useRouter();
    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden';
        if (!open) document.body.style.overflow = 'unset';
    }, [open])

    return (
        <nav className=' bg-white z-40'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-full flex items-center justify-between z-50 header-blur sticky top-0  px-8 md:px-14 lg:px-24 shadow-xl">
                <div className="py-4">
                    <a className='flex items-center cursor-pointer gap-4 overflow-hidden md:h-[75px] h-[65px]' onClick={() => { router.push('/'); if (open) setOpen(!open) }}>
                        <div className='relative h-[75px] w-[65px] md:h-[95px] md:w-[80px]'>
                            <Image
                                src={logo}
                                fill
                                alt="Model UN Logo"
                                className=''
                            /> 
                        </div>
                        <div className='sm:text-3xl text-2xl font-bold text-sky-600 text-change'>
                            XMUN III
                        </div>
                    </a>
                </div>
                <div className='xl:flex gap-10 text-xl hidden text-sky-600 font-semibold items-center'>
                    <div className={`${router.asPath === '/invitation' ? 'linkActive' : ""}  cursor-pointer
                    group relative py-8`} onClick={() => router.push('/invitation')}>
                        <div className='link link-underline link-underline-black-1'>
                            Invitation
                        </div>
                        {/* -translate-y-56 group-hover:translate-y-[2rem] */}
                        <div className="absolute -left-[2.75rem] top-[5.75rem] flex-col items-center justify-center text-center 
                        hidden group-hover:flex bg-white px-3 gap-2 py-2 pb-3 w-[175px] rounded-b-lg shadow-xl">
                            <div className="hover:link link-underline link-underline-black-1 pt-1" onClick={() => router.push("/what-is-xmun")}>
                                <div>What is XMUN?</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${router.asPath === '/registration' ? 'linkActive' : ""} py-auto link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/registration')}>Registration</div>
                    <div className={`${router.asPath === '/itinerary' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/itinerary')}>Itinerary</div>
                    <div className={`${router.asPath === '/committee' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/committee')}>Committee</div>
                    {/* <div className={`${router.asPath === '/photos' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/photos')}>Photos</div> */}
                    <div className={`${router.asPath === '/resources' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/resources')}>Resources</div>
                </div>
                <div className="xl:hidden group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                    setOpen(!open)}}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-sky-600 rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-sky-600 rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-sky-600 rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}