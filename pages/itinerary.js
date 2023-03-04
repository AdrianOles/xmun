import React from 'react';
import Image from 'next/image';
import announcementIcon from '../public/announcementIcon.png';
import purpleConference from '../public/purpleConference.png';
import lunch from '../public/lunch.png';
import breakIcon from '../public/breakIcon.png';
import award from '../public/award.png';
import { motion } from "framer-motion"

function itinerary() {

  const events = [
    {
      name: 'Opening Ceremony · Guest Speaker',
      time: '8:30 - 9:30',
      icon: announcementIcon,
    },
    {
      name: 'Session 1',
      time: '9:30 - 11:30',
      icon: purpleConference,
    },
    {
      name: 'Lunch',
      time: '11:30 - 12:00',
      icon: lunch,
    },
    {
      name: 'Session 2',
      time: '12:00 - 2:00',
      icon: purpleConference,
    },
    {
      name: 'Break',
      time: '2:00 - 2:30',
      icon: breakIcon,
    },
    {
      name: 'Session 3 · Closing Ceremony · Awards',
      time: '2:30 - 4:30',
      icon: award,
    },
  ]

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show : {
      opacity: 1,
      x:0,
      transition: {
        duration: .50
      },
    },
  }

  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='bg-gradient-to-tl to-purple-800 from-sky-700 h-[40vh] w-full relative top-0 shadow-xl'>
        <div className="w-full h-full absolute">
          <Image
            fill
            priority
            src={"https://isp.hcdsb.org/wp-content/uploads/2018/07/JV5-700x400.jpg"}
            className="mix-blend-overlay brightness-80 object-cover"
          />
        </div>
        <div className='mx-auto w-full h-full px-6 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white my-auto mx-auto px-auto flex flex-col text-center'>
            <div className='text-5xl md:text-6xl font-bold mb-2'>Conference <span className="text-cyan-400">Itinerary</span></div>
            <div>
              Check it out to plan ahead and not miss a minute.
            </div>
          </div>
        </div>
      </div>
      {/* schedule */}
      <div className='flex h-full w-full lg:w-[60%] mx-auto'>
        {/* times/timeline */}
        <div className='w-[25%] text-gray-400 h-full flex flex-col gap-[6.6rem] mt-36 mx-auto text-center'>
          <div>8:30 a.m.</div>
          <div>9:30 a.m.</div>
          <div>11:30 a.m.</div>
          <div>12:00 p.m.</div>
          <div>2:00 p.m.</div>
          <div>2:30 p.m.</div>
        </div>

        {/* cards/events */}
        <div className=' w-[75%] border-l-2 border-gray-200 h-fit'>
          <div className='border-b-2 border-t-2 px-8 py-6 border-gray-200'>
            <div className='text-[1.5em] font-semibold tracking-widest'>May 1st, 2023</div>
          </div>
          
          <div className="flex flex-col h-full px-4 py-6">
            <motion.div initial="hidden" animate="show" variants={variants}>
              {
                events.map((event, index) => (
                  <div className={`border-b-2 border-gray-200 class-${index} mb-6`}>
                    <motion.div variants={items}>
                    <div className={`items-center gap-4 p-4 pl-4 h-fit w-full bg-purple-500 schedule-bg-${index} ring-2 ring-purple-600 mb-6 flex`}>
                      <div>
                        <Image
                          src={event.icon}
                          alt="icon"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div>
                        <div>{event.name}</div>
                        <div>{event.time}</div>
                      </div>
                    </div>
                    </motion.div>
                  </div>
                ))
              }
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default itinerary