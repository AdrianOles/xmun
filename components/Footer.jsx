import React from 'react'
import Link from 'next/link';

function Footer() {
	const date = new Date().getFullYear();

	return (
		<div className='w-full bg-black px-10 py-4 text-white flex items-center justify-between'>
			<div className='flex flex-col max-w-[60%] gap-4'>
				<div>
					Made by: <Link href="https://github.com/AdrianOles">Adrian Olesniewicz</Link>
				</div>
				<div>
					Copyright &copy; {date} - All rights reserved
				</div>
			</div>
			<div>
				right
			</div>
		</div>
  )
}

export default Footer