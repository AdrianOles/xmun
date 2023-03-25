import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
	const date = new Date().getFullYear();

	return (
		<div className='w-full bg-sky-500 px-2 lg:px-10 py-4 text-white flex flex-col sm:flex-row items-center gap-4 justify-between'>
			<div className='flex flex-col sm:max-w-[60%] gap-4 text-center sm:text-left text-md font-semibold sm:pl-6'>
				<div>
					Made by: <Link href="https://github.com/AdrianOles">Adrian Olesniewicz</Link>
				</div>
				<div>
					Copyright &copy; {date} - All rights reserved
				</div>
			</div>
			<div className='flex'>
				<div className='brightness-0 invert hover:brightness-100 hover:invert-0 transition-all cursor-pointer'>
					<Image
						src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
						width={40}
						height={40}
						alt="Instagram logo"
					/>
				</div>
				<div className='brightness-0 invert hover:brightness-100 hover:invert-0 transition-all cursor-pointer'>
					<Image
						src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
						width={70}
						height={50}
						alt="Email logo"
					/>
				</div>
			</div>
		</div>
  )
}

export default Footer