import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import registration from './registration';
import { Postcard } from '../components';
import { motion, AnimatePresence} from "framer-motion"

export default function Home() {
  const router = useRouter();

  const cards = [
    {
      name: 'ABOUT',
      pictureUrl: 'https://www.un.org/sites/un2.un.org/files/styles/3x2-front-thumbnail/public/field/image/model_un_landing_page.jpg?itok=ahxbap4S',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link: '/about'
    },
    {
      name: 'REGISTER',
      pictureUrl: 'http://allamericanmun.com/wp-content/uploads/2016/10/11915445_1703974446498069_365180015501615074_n.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link: '/registration'
    },
    {
      name: 'COMMITTEE',
      pictureUrl: 'https://bestdelegate.com/wp-content/uploads/2020/01/73333424_3236834096357247_4946619400804368384_o.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link: '/committee'
    }
  ]

  return (
    <div className="bg-slate-200">
      <Head>
        <title>Model UN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main image*/}
      <div className='bg-gradient-to-tl to-blue-900 from-purple-900 h-screen w-full relative top-0 shadow-xl'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg"
        className='w-full h-full object-cover absolute mix-blend-overlay brightness-90'/>
        <div className='mx-auto w-full py-[12em] px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white text-6xl font-bold'>
            Welcome to <span className="text-sky-400">XMUN</span>
          </div>
          <div className="text-sky-100 text-2xl font-light">
            May 1st, 2023
          </div>
          <div className="text-sky-100 text-2xl font-light">
            St. Francis Xavier Secondary School, Milton ON
          </div>
          <div className="register mt-5">
            <div className="wrapper cursor-pointer">
              <a onClick={() => router.push('/registration')}><span>REGISTER</span></a>
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{ opacity: 1}}
          transition={{duration: .10}}
        >
        <div className="lg:m-24 m-6 bg-[#111d36] h-fit relative z-[1]">
          {/* <div className="hidden lg:block triangle absolute top-[57%] right-[45%] z-[2]"></div> */}
          <div className="flex justify-between p-16 items-center">
            <div className='lg:w-[60%] h-fit z-10'>
              <motion.div
                initial={{opacity:0, y:-200}}
                whileInView={{ opacity: 1, y:0}}
                transition={{duration: .50, delay: .1}}
              >
                <p className='text-white lg:text-xl text-lg mb-4'>&#x2022; Third In-house conference &#x2022;</p>
                <p className='text-white lg:text-3xl text-2xl mb-6 leading-10'><span className='text-purple-500 font-bold'>Model UN</span> is one of the many clubs within St. Francis Xavier Catholic Secondary School through which students can learn and grow as a community.</p>
                <div className='text-white lg:text-2xl text-lg lg:mb-20 mb-10 flex flex-wrap gap-4'>
                  <div>
                    To <span className='text-blue-500 font-bold lg:text-3xl text-xl'>Accept.</span>
                  </div>
                  <div>
                    To<span className='text-purple-500 font-bold lg:text-3xl text-xl'> Include.</span>
                  </div>
                  <div>
                    To serve with <span className='text-sky-500 font-bold text-xl lg:text-3xl'>Love.</span></div>
                  </div>
                <a href="https://secondary.hcdsb.org/xavier/">
                  <div className="bg-purple-500 text-white font-semibold px-6 py-4 w-fit cursor-pointer hover:ring hover:ring-sky-600">
                    CONTACT US
                  </div>
                </a>
              </motion.div>
            </div>
            <div className='hidden lg:block w-[30%] max-h-fit'>
              <motion.img
                initial={{opacity:0, x:-600}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: .60, delay: .1}}
                src='https://pbs.twimg.com/media/D-jvlrRWwAA_V7b.jpg'
                className='max-h-[350px] ml-auto min-w-[100%] object-cover'
              />
            </div>
          </div>
          </div>
        </motion.div>
      </AnimatePresence>
        
    </div>
  )
}
