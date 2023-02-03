import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import registration from './../pages/registration';

function MobileNav({ open, setOpen }) {
    const router = useRouter();
    return (
        <div className={`z-50 xl:hidden absolute top-0 left-0 h-screen w-full bg-white transform ${open ? "-translate-y-0 overflow-x-hidden" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>

            <div className="flex flex-col justify-center items-center mt-48">
                <a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer' onClick={() => { router.push('/about'); setOpen(!open) }}>About</a>
                <a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer' onClick={() => { router.push('/registration'); setOpen(!open) }}>Registration</a>
                <a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer' onClick={() => { router.push('/itinerary'); setOpen(!open) }}>Itinerary</a>
                <a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer' onClick={() => { router.push('/committee'); setOpen(!open) }}>Committee</a>
                <a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer' onClick={() => { router.push('/photos'); setOpen(!open) }}>Photos</a>
                <a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer' onClick={() => { router.push('/resources'); setOpen(!open) }}>Resources</a>
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
        <nav className='sticky top-0 z-50'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-full flex items-center justify-between z-50 header-blur sticky top-0 py-4 px-8 md:px-14 lg:px-24 shadow-xl">
                <div>
                    <a className='flex items-center cursor-pointer' onClick={() => { router.push('/'); if(open) setOpen(!open)}}>
                        <Image
                            src="https://1000logos.net/wp-content/uploads/2018/01/united-nations-logo.png"
                            width={120}
                            height={120}
                        />
                        <div className='text-4xl font-bold text-sky-600'>
                            XMUN
                        </div>
                    </a>
                </div>
                <div className='xl:flex gap-10 text-xl hidden text-sky-600 font-semibold'>
                    <div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/about')}>About</div>
                    <div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/registration')}>Registration</div>
                    <div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/itinerary')}>Itinerary</div>
                    <div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/committee')}>Committee</div>
                    <div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/photos')}>Photos</div>
                    <div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/resources')}>Resources</div>
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