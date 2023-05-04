import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Head from 'next/head'

function invitation() {
  return (
    <>
      <Head>
          <title>Invitation</title>
      </Head>
      <div className="overflow-x-hidden">
        <div className='bg-gradient-to-tl to-purple-800 from-sky-700 h-[40vh] w-full relative top-0 shadow-xl'>
          <div className="w-full h-full absolute">
            <Image
              src={"https://i.ytimg.com/vi/QVUF17sWbJ0/maxresdefault.jpg"}
              fill
              priority
              className='object-cover absolute mix-blend-overlay brightness-90'
            />
          </div>
          <div className='mx-auto w-full h-full px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
            <div className='text-white my-auto mx-auto flex flex-col text-center'>
              <div className='text-6xl font-bold mb-2'><span className="text-sky-400">XMUN</span> Invitation</div>
              <div>
                Not X-Men. But XMUN. That's St.FX, and our Fun Model UN Conference.
              </div>
            </div>
          </div>
        </div>
        <div className="my-16 mx-auto px-6 md:px-10 lg:px-[20rem]">
          <div className='text-3xl text-center w-full font-semibold'>
            Letter From Our <span className='text-purple-500 font-bold'>Secretary-General</span>
          </div>
          <div className="text-2xl mb-6 mt-10">Welcome, all delegates and spectators,</div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
            className="mb-8">
            <div className=''>
              The secretariat is excited to welcome you to our third XMUN conference! Our exec team has
              been working hard to bring you our yearly fictional conference. This year with 2 separate
              conferences, one for novice elementary school delegates, and a conference with two
              committees for our high school delegates.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
            className="mb-8">
            <div>
              The secretariat is excited to welcome you to our third XMUN conference! Our exec team has
              been working hard to bring you our yearly fictional conference. This year with 2 separate
              conferences, one for novice elementary school delegates, and a conference with two
              committees for our high school delegates.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
            className="mb-8">
            <div>
              For our High school delegates, students get two different fictional committees to choose from.
              Our chosen committees are Pokemon and divergent. Each Committee has real issues to
              discover, issues delegates will work through together to create comprehensive solutions for.
              From this experience, delegates will develop stronger critical thinking skills, public speaking
              abilities and leadership qualities.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
            className="mb-8">
            <div>
              Our chairs are well prepared to bring delegates to a formal yet thrilling conference. As a
              secretariat, we are committed to fostering an inclusive and welcoming environment for all
              participants. We encourage delegates to approach the conference with an open mind and a
              willingness to engage in respectful and constructive dialogue with their peers. This is Saint
              Francis Xavier's third time hosting XMUN, each year growing in numbers we gladly await a
              successful conference.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
            className="mb-8">
            <div>
              Excited for a fruitful discussion, XMUN awaits you!
            </div>
          </motion.div>

          <div className="text-xl">
            <div className=''>Logan Roettger</div>
            <div>
              <span className="text-purple-500 font-bold">Secretary-General XMUN.</span> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default invitation