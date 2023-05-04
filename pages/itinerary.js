import React from 'react';
import Image from 'next/image';
import Head from 'next/head'
import announcementIcon from '../public/announcementIcon.png';
import purpleConference from '../public/purpleConference.png';
import lunch from '../public/lunch.png';
import breakIcon from '../public/breakIcon.png';
import award from '../public/award.png';
import { motion } from "framer-motion";
import { GiPublicSpeaker } from 'react-icons/gi';
import { MdAppRegistration } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaPizzaSlice } from 'react-icons/fa';
import { ImTrophy } from 'react-icons/im'


//TODO: Download and compress images from web, unreliable if their site goes down.

function itinerary() {

  const events = [
    {
      name: 'Registration - Main Atrium',
      time: '8:30 - 9:00am',
    },
    {
      name: 'Opening Ceremony: Welcome to XMUN III',
      label: 'Keynote Speaker: M.P. Adam van Koeverden ',
      time: '9:00 - 10:00am',
    },
    {
      name: 'Student Committee Session 1',
      time: '10:00 - 11:30am',
    },
    {
      name: 'Lunch – Pizza/Popcorn Lunch provided',
      time: '11:35 - 12:20pm',
    },
    {
      name: 'Student Committee Session 2',
      time: '12:25 - 1:40pm',
    },
    {
      name: 'Closing Presentation & Awards',
      time: '1:45 - 2:00pm',
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
    <>
      <Head>
        <title>Itinerary</title>
      </Head>
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
                St. Francis Xavier Secondary School
                <br/>
                1145 Bronte St. S, Milton, ON L9T 8B4 
              </div>
            </div>
          </div>
        </div>
        {/* schedule */}
        <div className='flex h-full w-full lg:w-[60%] mx-auto'>
          {/* times/timeline */}
          <div className='w-[25%] text-gray-400 h-full flex flex-col gap-[8rem] sm:gap-[6.75rem] mt-36 mx-auto text-center'>
            <div>8:30 a.m.</div>
            <div>9:00 a.m.</div>
            <div className='mt-4 sm:mt-0'>10:00 a.m.</div>
            <div>11:35 a.m.</div>
            <div>12:25 p.m.</div>
            <div className='mt-4 sm:mt-0'>1:45 p.m.</div>
          </div>

          {/* cards/events */}
          <div className=' w-[75%] border-l-2 border-gray-200 h-fit'>
            <div className='border-b-2 border-t-2 px-8 py-6 border-gray-200'>
              <div className='text-[1.5em] font-semibold tracking-widest'>May 25th, 2023</div>
            </div>
            
            <div className="flex flex-col h-full px-4 py-6">
              <motion.div initial="hidden" animate="show" variants={variants}>
                {
                  events.map((event, index) => (
                    <div className={`border-b-2 border-gray-200 class-${index} mb-6`}>
                      <motion.div variants={items}>
                      <div className={`items-center gap-4 p-4 pl-4 h-fit w-full bg-purple-500 schedule-bg-${index} ring-2 ring-purple-600 mb-6 flex`}>
                          {
                            event.name === "Registration - Main Atrium" && (
                              <MdAppRegistration size={35} />
                            )
                          }
                          {
                            index === 1 && (
                              <GiPublicSpeaker size={35} />
                            )
                          }
                          {
                            index === 2 && (
                              <BsFillPeopleFill size={35} />
                            )
                          }
                          {
                            index === 3 && (
                              <FaPizzaSlice size={35} />
                            )
                          }
                          {
                            index === 4 && (
                              <BsFillPeopleFill size={35} />
                            )
                          }
                          {
                            index === 5 && (
                              <ImTrophy size={35} />
                            )
                          }
                        <div>
                            <div>{event.name}</div>
                            <div>{event.label}</div>
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
    </>
  )
}

export default itinerary