import Head from 'next/head'
import { useRouter } from 'next/router'
import { Postcard, ImgSlider } from '../components';
import { motion, AnimatePresence } from "framer-motion"

//TODO
//Video replaces hero image
//Picture slider after introductory paragraph
//


export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-slate-200 overflow-x-hidden">
      <Head>
        <title>Model UN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main image*/}
      <div className='bg-gradient-to-tl to-blue-900 from-purple-900 h-screen w-full relative top-0 shadow-xl'>
        <div className="w-full h-full absolute">
          {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg"
            className='object-cover mix-blend-overlay brightness-90'
            priority={true}
            fill
          /> */}
          {/* <ReactPlayer
            url="files/xmunvideo.mp4"
            playing
            loop
            muted
            width="100%"
            height="100%"
          /> */}
          <video autoPlay muted={true} autoplay={true} loop playsInline className="w-full h-full object-cover brightness-75">         
            <source src="files/xmunvideo.mp4" type="video/mp4"/>       
          </video>
          <div className='w-full h-full absolute top-0 bg-gradient-to-tl to-blue-900 from-purple-900 opacity-10'></div>
        </div>
        <div className='mx-auto w-full py-[12em] px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white text-6xl font-bold z-30'>
            Welcome to <span className="text-sky-400">XMUN</span>
          </div>
          <div className="text-sky-100 text-2xl font-light z-30">
            May 12th, 2023
          </div>
          <div className="text-sky-100 text-2xl font-light z-30">
            St. Francis Xavier Secondary School, Milton ON
          </div>
          <div className="register mt-5">
            <div className="wrapper cursor-pointer">
              <a onClick={() => router.push('/registration')}><span>REGISTER</span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 mx-auto px-6 md:px-10 lg:px-56 text-center">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}>
          <div className="text-4xl mb-6">Welcome to <span className="text-4xl text-purple-600 font-bold">XMUN III</span></div>
          <div className="mb-6 text-lg">
            St. Francis Xavier’s Model UN secretariat is pleased to announce its <b>third in-house</b> Model United Nations Conference on May 12th, 2023. We invite all delegates to represent different nations/characters and participate in lively debate, inspired by the Marvel Universe, Pokemon, and Divergent themes to appeal to a wide range of student interests and abilities. The student-led conference will be hosted at St. Francis Xavier, in our state of the art theater, and library/conference center.
          </div>
        </motion.div>
      </div>

      <div className="mx-auto sm:px-20 md:px-36 lg:px-56 px-4">
        <ImgSlider />
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .10 }}
        >
          <div className="bg-[#111d36] h-fit relative z-[1] mt-20">
            <div className="flex justify-between p-10 md:p-16 items-center">
              <div className='lg:w-[65%] h-fit z-10'>
                <motion.div
                  initial={{ opacity: 0, y: -200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .50, delay: .1 }}
                >

                  {/* <p className='text-white lg:text-xl text-lg mb-4'>&#x2022; Third In-house conference &#x2022;</p> */}
                  <div className='text-white lg:text-2xl text-lg flex flex-wrap gap-12 h-fit justify-center sm:pr-16'>
                    <div className="flex gap-4 items-center justify-center">
                      <div className="md:text-[3rem] text-[2rem]">To</div>
                      <div className='text-blue-500 font-bold md:text-[4rem] text-[2rem]'>Accept.</div>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                      <div className="md:text-[3rem] text-[2rem]">To</div>
                      <div className='text-purple-500 font-bold md:text-[4rem] text-[2rem]'>Include.</div>
                    </div>
                    <div className="flex gap-3 items-center justify-center lg:mt-10">
                      <div className="md:text-[3rem] text-[1.5rem] leading-9">To serve with</div>
                      <div className='text-sky-500 font-bold md:text-[4rem] text-[2rem]'>Love.</div>
                    </div>
                  </div>
                  <div className="mt-20 flex justify-center">
                    <a href="https://secondary.hcdsb.org/xavier/">
                      <div className="bg-purple-500 text-white font-semibold px-6 py-4 w-fit cursor-pointer hover:ring hover:ring-sky-600">
                        CONTACT US
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className='hidden lg:block md:w-[45%] w-0 h-full'>
                <motion.img
                  initial={{ opacity: 0, x: -600 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .60, delay: .1 }}
                  src="files/jvimage.jpg"
                  className='h-fit ml-auto min-w-[100%] object-cover object-top'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}
