import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from "framer-motion"
import Link from 'next/link';

function committee() {
  return (
    <>
      <Head>
        <title>Committees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='overflow-x-hidden'>
        <div className='bg-gradient-to-tl to-purple-800 from-sky-700 h-[40vh] w-full relative top-0 shadow-xl'>
          <div className='w-full h-full absolute'>
            <Image 
              src={"https://www.ourcommons.ca/Committees/Content/images/Committees-Profile-Mobile.jpg"}
              fill
              priority
              className="mix-blend-overlay brightness-90 object-cover"
            />
          </div>
          <div className='mx-auto w-full h-full px-4 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
            <div className='text-white my-auto mx-auto flex flex-col text-center'>
              <div className='text-6xl font-bold mb-2'><span className="text-sky-400">Committee</span> List</div>
              <div>
                
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='mx-auto w-full py-14 px-10'>
            {/* Title */}
            <div className='text-3xl font-semibold text-center lg:mx-40 '>
              Marvel: The <span className='text-purple-500 font-bold'>Sokovia</span> Accords
            </div>
            <div className="pb-4 mb-14 border-b border-purple-500 text-center">
              *For Novice Students*
            </div>

            {/* Content */}
            <div className='flex flex-wrap justify-center gap-10 md:gap-6 lg:gap-12 items-center text-xl lg:px-34'>
              {/* image */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .40, delay: .1 }}
                className="md:w-[30%] rounded-3xl overflow-hidden w-full">
                <img
                  src='https://wikiofnerds.com/wp-content/uploads/2022/02/Sokovia-Accords.jpg'
                  className='min-w-full max-h-[200px] sm:min-h-[250px] object-cover'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className='md:w-[30%] mx-auto'>
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    Designed for novice students interested in Model UN.
                  </div>
                  <div className="register2 mt-4 mx-auto">
                    <div className="cursor-pointer mx-auto">
                      <Link href="/resources/marvelbackgroundguide">
                        <span className="z-20">Background</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className="md:w-[30%]">
                <video muted loop controls className="w-[500px] object-cover brightness-75 rounded-3xl overflow-hidden mx-auto">
                  <source src="files/marvelvideo.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
          <div className='mx-auto w-full py-8 px-10'>
            {/* Title */}
            <div className='text-4xl text-purple-500 font-bold text-center mx-auto border-b pb-4 border-purple-500 mb-8'>
              Pokemon
            </div>

            {/* Content */}
            <div className='flex flex-wrap justify-center gap-10 md:gap-6 lg:gap-12 items-center text-xl lg:px-34'>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className="md:w-[30%]">
                <img
                  src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F12%2F16%2FPokemon-121622-1.jpg'
                  className='min-w-full max-h-[200px] sm:min-h-[250px] object-cover rounded-3xl'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className='md:w-[30%] mx-auto'>
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="register2 mt-4 mx-auto">
                    <div className="cursor-pointer mx-auto">
                      <Link href="/resources/pokemon">
                        <span className="z-20">Background</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* image */}
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className="md:w-[30%] rounded-3xl overflow-hidden w-full">
                <img
                  src='https://img.lemde.fr/2022/12/22/5/0/1730/865/768/384/75/0/e968e4d_1671703423578-b5e.jpeg'
                  className='min-w-full max-h-[200px] sm:min-h-[250px] object-cover'
                />
              </motion.div>
            </div>
          </div>
          <div className='mx-auto w-full py-8 px-10'>
            {/* Title */}
            <div className='text-4xl text-purple-500 font-bold text-center mx-auto border-b pb-4 border-purple-500 mb-8'>
              Divergent
            </div>

            {/* Content */}
            <div className='flex flex-wrap justify-center gap-10 md:gap-6 lg:gap-12 items-center text-xl lg:px-34'>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className="md:w-[30%] rounded-3xl overflow-hidden w-full">
                <img
                  src='https://people.com/thmb/pXfCpKQb2fiCRihiz9CmRH4KhWc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(854x109:856x111)/divergent-theo-james-113022-40f35e5c2fdc4dd99ee3b699de68e45f.jpg'
                  className='min-w-full max-h-[200px] sm:min-h-[250px] object-cover'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className='md:w-[30%] mx-auto'>
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="register2 mt-4 mx-auto">
                    <div className="cursor-pointer mx-auto">
                      <Link href="/resources/divergent">
                        <span className="z-20">Background</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* image */}
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .60, delay: .1 }}
                className="md:w-[30%]">
                <img
                  src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/blogs/106179/2014/03/146663-148965.jpg?itok=Qorc1w5s'
                  className='min-w-full max-h-[200px] sm:min-h-[250px] object-cover rounded-3xl'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default committee