import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUp } from 'react-icons/bs'

function registration() {
  return (
    <div>
      <div className='bg-gradient-to-tl to-sky-600 from-purple-900 h-[89vh] w-full relative top-0 shadow-xl'>
        <div className=''>
          <div className='absolute bottom-0 right-1/2 left-1/2 mx-auto my-4'>
            <div className='text-white flex flex-col items-center justify-center gap-4'>
              <div className="w-fit text-center font-semibold">
                Details Below
              </div>
              <div className='rotate-180'>
                <BsArrowUp
                  size={50}
                />
              </div>
            </div>
          </div>
          <div className='w-full h-[89vh] absolute'>
            <Image
              src={"https://media.socastsrm.com/wordpress/wp-content/blogs.dir/432/files/2020/06/Jean-Vanier-Outside.jpg"}
              fill
              priority
              className='mix-blend-overlay brightness-90 object-cover'
            />
          </div>
          <div className='mx-auto w-full py-[12em] px-6 flex flex-col items-center justify-center 
        gap-3 text-center relative'>
            <div className='text-white text-4xl sm:text-6xl font-bold text-center'>
              <Link href="#">REGISTRATION</Link>
            </div>
            <div className="text-sky-100 text-xl sm:text-2xl font-normal text-center">
              Deadline: May 11th, 2023
            </div>
            <div className="text-sky-100 text-xl sm:text-2xl font-normal text-center">
              St. Francis Xavier Secondary School, Milton ON
            </div>
            <div className="register1 mt-5 mx-auto">
              <div className="wrapper cursor-pointer">
                <Link href="#"><span className="z-20">REGISTER</span></Link>
              </div>
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