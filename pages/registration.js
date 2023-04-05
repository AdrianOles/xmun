import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function registration() {
  return (
    <div>
      <div className='bg-gradient-to-tl to-sky-600 from-purple-900 h-screen w-full relative top-0 shadow-xl'>
        <div className='w-full h-full absolute'>
          <Image 
            src={"https://isp.hcdsb.org/wp-content/uploads/2018/07/JV4-700x400.jpg"}
            fill
            priority
            className='mix-blend-overlay brightness-90 object-cover'
          />
        </div>
        <div className='mx-auto w-full py-[12em] px-6 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56 text-center'>
          <div className='text-white text-4xl sm:text-6xl font-bold'>
            <Link href="#">REGISTRATION</Link>
          </div>
          <div className="text-sky-100 text-xl sm:text-2xl font-normal">
            Deadline: May 11th, 2023
          </div>
          <div className="text-sky-100 text-xl sm:text-2xl font-normal">
            St. Francis Xavier Secondary School, Milton ON
          </div>
          <div className="register1 mt-5 mx-auto">
            <div className="wrapper cursor-pointer">
              <Link href="#"><span className="z-20">REGISTER</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10">
        <div className='text-center max-w-[1000px] mx-auto'>
          <div className='mb-4 text-2xl font-semibold md:text-3xl'>
            <span className="text-purple-500 font-semibold">Registration</span>, Fees, and Requirements
          </div>
          <div className="text-lg">
            XMUN registration information to be filled out by the MUN school advisors via Google Form, found on the registration page of our website. There is a delegate fee of $10 for participation to be paid on SchoolCashOnline. All proceeds will be pledged to the Halton Catholic Children’s Foundation (HCCF). Exceptional delegates will be recognized with “Best Delegate,” and “Honourable Mention” awards. In order to qualify for such awards, position papers will be required from each delegate outlining their country’s stance on respective issues. These papers will be evaluated by the Dais alongside performance within the committee to determine award winners.
          </div>
        </div>
      </div>
    </div>
  )
}

export default registration