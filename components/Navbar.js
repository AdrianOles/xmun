import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

function MobileNav({ open, setOpen }) {
    const router = useRouter();
    return (
        <div className={`z-50 xl:hidden absolute top-0 left-0 h-screen w-full bg-white transform ${open ? "-translate-y-0 overflow-x-hidden" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>

            <div className="flex flex-col justify-center items-center mt-48 xl:hidden">
                <a className={`${router.asPath === '/invitation' ? 'linkActive' : ""} text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black cursor-pointer`} onClick={() => { router.push('/invitation'); setOpen(!open) }}>Invitation</a>
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
        <nav className='sticky top-0 bg-transparent z-40'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-full flex items-center justify-between z-50 header-blur sticky top-0  px-8 md:px-14 lg:px-24 shadow-xl">
                <div className="py-4">
                    <a className='flex items-center cursor-pointer' onClick={() => { router.push('/'); if(open) setOpen(!open)}}>
                        <div className="relative">
                            <div className="absolute -top-5 -left-[0.6257rem] scale-[60%]">
                                <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="150" height="100">
                                    <path style={{opacity:1, fill:'#0080ac', fillOpacity:'1', stroke:'#fff', strokeWidth:'2.16298', strokeDasharray:'none', strokeOpacity:'1'}} d="m49.238 5.974-.342.506.825 54.019 3.744.183 1.697-46.767z"/>
                                    <path style={{opacity:1, fill:'#0080ac', fillOpacity:'1', stroke:'#fff', strokeWidth:'4.13695', strokeDasharray:'none', strokeOpacity:'1'}} d="m49.236 7.56-5.426 7.644 2.134 44.538 3.768.176.01.618 3.773.176 1.71-44.908-.023-.029.022-.589z"/>
                                    <path style={{opacity:1, fill:'#00a1d9', fillOpacity:1, stroke:'#fff', strokeWidth:'2.06438', strokeDasharray:'none', strokeOpacity:1}} d="m46.319 62.904.035 8.7h-.002l.002.154v.225h.004l1.86 12.922c.887-.843.57-1.794 2.032-1.794 1.254 0 .421.364 1.303 1.01l1.872-12.396-.037-8.805Z"/>
                                    <ellipse style={{opacity:1, fill:'#009dd3', fillOpacity:1, stroke:'#fff', strokeWidth:'1.54824', strokeDasharray:'none', strokeOpacity:1}} cx="49.738" cy="87.257" rx="3.724" ry="3.983"/>
                                    <path style={{opacity:1, fill:'#0080ac', fillOpacity:1, stroke:'#fff', strokeWidth:'1.3424', strokeDasharray:'none', strokeOpacity:1}} d="m48.875 6.064-.414.523.997 55.766 4.527.19 2.05-48.28Z"/>
                                    <path style={{opacity:1, fill:'#00a1d9', fillOpacity:1, stroke:'#fff', strokeWidth:0, strokeDasharray:'none', strokeOpacity:1}} d="m48.565 7.27-4.512 7.642 1.897 47.624 3.353.189-.731-54.806.027-.046Z"/>
                                    <path style={{opacity:1, fill:'#fcfcfc', fillOpacity:1, stroke:'#fff', strokeWidth:'.350164', strokeDasharray:'none', strokeOpacity:1}} d="m38.064 59.72-4.544 3.095a.85.85 0 0 0 .211.026.884.884 0 0 0-.211.026l4.493 3.135 14.641.065v.002l.116-.002.166.002v-.002l10.024-.065 3.102-3.133a.406.406 0 0 0-.143-.026c.051 0 .098-.01.143-.028l-3.138-3.095-10.154.065z"/>
                                    <path style={{opacity:1, fill:'#00a1d9', fillOpacity:1, stroke:'#fff',strokeWidth:'.31433', strokeDasharray:'none', strokeOpacity:1}} d="m38.42 60.1-4.395 2.58a.95.95 0 0 0 .204.021.982.982 0 0 0-.204.022l4.345 2.612 14.16.055v.002l.11-.002.161.002v-.002l9.694-.055 3-2.61a.45.45 0 0 0-.138-.022c.05 0 .095-.009.139-.023L62.46 60.1l-9.82.055z"/>
                                </svg>
                            </div>
                            <Image
                                src="https://1000logos.net/wp-content/uploads/2018/01/united-nations-logo.png"
                                width={100}
                                height={100}
                                alt="Model UN Logo"
                            />
                        </div>
                        <div className='text-4xl font-bold text-sky-600'>
                            XMUN
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
                        <div className="absolute -left-[5rem] top-[5.75rem] flex-col items-center justify-center text-center 
                        hidden group-hover:flex bg-transparent header-blur px-3 gap-2 py-2 pb-3 w-[250px] rounded-b-lg shadow-xl">
                            <div className="hover:link link-underline link-underline-black-1">
                                <a href='#registration-details'>Registration Details</a>
                            </div>
                            <div className="hover:link link-underline link-underline-black-1">
                                <a href='#delegate-info'>Delegate Information</a>
                            </div>
                            <div className="hover:link link-underline link-underline-black-1">
                                <a href='#code-conduct'>Code of Conduct</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${router.asPath === '/registration' ? 'linkActive' : ""} py-auto link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/registration')}>Registration</div>
                    <div className={`${router.asPath === '/itinerary' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/itinerary')}>Itinerary</div>
                    <div className={`${router.asPath === '/committee' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/committee')}>Committee</div>
                    <div className={`${router.asPath === '/photos' ? 'linkActive' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/photos')}>Photos</div>
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