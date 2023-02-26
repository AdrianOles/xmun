import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useState} from 'react';
import { useRouter } from 'next/router';

function Header() {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	function MobileNav({ open, setOpen }) {

		return (
			<div className={`absolute top-0 left-0 inset-x-0 origin-top-right mx-auto w-full h-full bg-black transform ${open ? "-translate-y-0 z-50 block": "-translate-y-full"} transition-all duration-500 ease-in-out filter`}>
				<div className='flex flex-col justify-center items-center mt-28'>
					<a className={`${router.asPath === '/' && 'linkActive'} text-3xl font-bold text-sky-600 my-4 mt-20 link link-underline link-underline-black`} href='#'>About</a>
					<a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black' href='#'>Registration</a>
					<a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black' href='#'>Itinerary</a>
					<a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black' href='#'>Committee</a>
					<a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black' href='#'>Photos</a>
					<a className='text-3xl font-bold text-sky-600 my-4 link link-underline link-underline-black' href='#'>Resources</a>
				</div>
			</div>
		)
	}

	return (
		<>
			<MobileNav open={open} setOpen={setOpen} />
			<nav className='w-full flex justify-between header-blur items-center py-4 px-8 md:px-14 lg:px-24 shadow-xl sticky top-0 z-50'>
				<div>
					<a className='flex items-center cursor-pointer' onClick={() => router.push('/')}>
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
					<div className={`${router.asPath === '/about' ? 'text-white' : ""} link link-underline link-underline-black-1 cursor-pointer`} onClick={() => router.push('/about')}>About</div>
					<div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/registration')}>Registration</div>
					<div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/itinerary')}>Itinerary</div>
					<div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/committee')}>Committee</div>
					<div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/photos')}>Photos</div>
					<div className='link link-underline link-underline-black-1 cursor-pointer' onClick={() => router.push('/resources')}>Resources</div>
				</div>
				<div className='xl:hidden group  z-50 relative w-8 h-6 cursor-pointer flex-col justify-between items-center flex' onClick={() => {setOpen(!open)}}>
					{/* hamburder btn */}
					<span className={`h-1 w-full bg-sky-600 rounded-lg group-hover:text-red-500 cursor-pointer transform transition 
					duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
					<span className={`h-1 w-full bg-sky-600 rounded-lg group-hover:text-red-500 cursor-pointer transform transition 
					duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
					<span className={`h-1 w-full bg-sky-600 rounded-lg group-hover:text-red-500 cursor-pointer transform transition 
					duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
				</div>
			</nav>
		</>
  )
}

export default Header