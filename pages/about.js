import React from 'react'
import { motion, AnimatePresence} from "framer-motion"

function about() {
  return (
    <div className="overflow-x-hidden">
      <div className='bg-gradient-to-tl to-purple-800 from-sky-700 h-[40vh] w-full relative top-0 shadow-xl'>
        <img src="https://i.ytimg.com/vi/QVUF17sWbJ0/maxresdefault.jpg"
        className='w-full h-full object-cover absolute mix-blend-overlay brightness-90'/>
        <div className='mx-auto w-full h-full px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white my-auto mx-auto flex flex-col text-center'>
            <div className='text-6xl font-bold mb-2'>About <span className="text-sky-400">XMUN</span></div>
            <div>
               Not X-Men. But XMUN. That's St.FX, and our Model UN Conference.
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 mx-auto px-6 md:px-10 lg:px-56 text-center">
        <motion.div
                initial={{opacity:0, x:200}}
                animate={{ opacity: 1, x:0}}
                transition={{duration: .60, delay: .1}}>
        <div className="text-2xl mb-6">What is <span className="text-3xl text-purple-600 font-bold">St. Francis Xavier</span> Catholic Secondary School?</div>
        <div className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </motion.div>
        <motion.div
                initial={{opacity:0, x:-200}}
                animate={{ opacity: 1, x:0}}
                transition={{duration: .60, delay: .1}}>
        <div className="text-2xl mb-6">History of <span className="text-3xl text-purple-600 font-bold">Model UN</span></div>
        <div className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </motion.div>
        <motion.div
                initial={{opacity:0, x:200}}
                animate={{ opacity: 1, x:0}}
                transition={{duration: .60, delay: .1}}>
        <div className="text-2xl mb-6">Our <span className="text-3xl text-purple-600 font-bold">Objective</span></div>
        <div className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </motion.div>
      </div>
    </div>
  )
}

export default about