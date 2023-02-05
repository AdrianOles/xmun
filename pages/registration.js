import React from 'react'
import Link from 'next/link'

function registration() {
  return (
    <div>
      <div className='bg-gradient-to-tl to-sky-600 from-purple-900 h-screen w-full relative top-0 shadow-xl'>
        <img src="https://isp.hcdsb.org/wp-content/uploads/2018/07/JV4-700x400.jpg"
          className='w-full h-full object-cover absolute mix-blend-overlay brightness-90' />
        <div className='mx-auto w-full py-[12em] px-6 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56 text-center'>
          <div className='text-white text-4xl sm:text-6xl font-bold'>
            <Link href="https://www.instagram.com/rhea.g.l/">REGISTRATION</Link>
          </div>
          <div className="text-sky-100 text-xl sm:text-2xl font-normal">
            Deadline: May 1st, 2023
          </div>
          <div className="text-sky-100 text-xl sm:text-2xl font-normal">
            St. Francis Xavier Secondary School, Milton ON
          </div>
          <div className="register1 mt-5 mx-auto">
            <div className="wrapper cursor-pointer">
              <Link href="https://www.instagram.com/rhea.g.l/"><span className="z-20">REGISTER</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default registration