import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

function committee() {
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-gradient-to-tl to-purple-800 from-sky-700 h-[40vh] w-full relative top-0 shadow-xl'>
        <img src="https://www.ourcommons.ca/Committees/Content/images/Committees-Profile-Mobile.jpg"
          className='w-full h-full object-cover absolute mix-blend-overlay brightness-90' />
        <div className='mx-auto w-full h-full px-4 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white my-auto mx-auto flex flex-col text-center'>
            <div className='text-6xl font-bold mb-2'><span className="text-sky-400">Committee</span> List</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-full py-14 px-10'>
        {/* Title */}
        <div className='text-3xl font-semibold text-center lg:mx-40 border-b border-purple-500 pb-4 mb-14'>
          Marvel: The <span className='text-purple-500 font-bold'>Sokovia</span> Accords
        </div>

        {/* Content */}
        <div className='flex flex-wrap justify-center gap-10 md:gap-6 lg:gap-12 items-center text-xl lg:px-48'>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
            className="md:w-[30%] rounded-3xl overflow-hidden w-full">
            <img
              src='https://wikiofnerds.com/wp-content/uploads/2022/02/Sokovia-Accords.jpg'
              className='min-w-full max-h-[200px] sm:min-h-[250px] object-cover'
            />
          </motion.div>
          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .60, delay: .1 }}
          className='md:w-[65%] md:text-lg lg:text-xl font-normal'>
            &nbsp; &nbsp;&nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Volutpat lacus laoreet non curabitur. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. In mollis nunc sed id semper risus in hendrerit. Turpis tincidunt id aliquet risus feugiat in ante metus. Luctus venenatis lectus magna fringilla urna porttitor. Egestas erat imperdiet sed euismod nisi porta lorem mollis.
          </motion.div>
        </div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .60, delay: .1 }}
        className='w-[250px] mx-auto'>
          <div className="register2 mt-8 mx-auto">
            <div className="cursor-pointer mx-auto">
              <a href="https://docs.google.com/document/d/1-eOo3pPBncv4_o21ef7fPe-lZEhQtG5b1tUSCJwigZs/edit?usp=sharing"
                  target="_black">
                <span className="z-20">Background</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default committee