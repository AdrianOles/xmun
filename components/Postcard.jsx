import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

function Postcard({ name, pictureUrl, description, link }) {
	const router = useRouter();

  return (
	  <div>
		<motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{type: "easein", duration: .30, delay: .45}}
          >
		  <div className='h-fit w-80 shadow-lg rounded-lg overflow-hidden mt-5 text-center'>
				<img
					className='h-44 w-full object-cover'
					src={pictureUrl}
				/>
				<div className='p-4'>
				  {description}
				  <div className='mx-auto mt-4 border-2 text-purple-800 font-semibold hover:bg-purple-700 hover:text-white 
				  cursor-pointer border-purple-700 px-4 py-2 w-fit transition duration-500 ease-in-out'
				  onClick={() => router.push(link)}>
						{name}
					</div>	
				</div>
		  </div>
		  </motion.div>
	  </div>
  )
}

export default Postcard