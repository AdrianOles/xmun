import React, { useState } from 'react';
import Image from 'next/image';
import positionPPreview from '../public/positionPaperPreview.png'
import clausePreview from '../public/clausePreview.png'
import ettiquetePreview from '../public/ettiquetePreview.png'
import introMunPreview from '../public/introMunPreview.png'
import pointsMotionPreview from '../public/pointsMotionPreview.png'
import termsPreview from '../public/termsPreview.png'
import tips from '../public/files/tips.jpg'
import resolutionPreview from '../public/draftResolutionPreview.png'
import handbook from '../public/handbookPreview.png'
import ppexPreview from '../public/ppexPreview.png'
import Link from 'next/link';
import { motion } from "framer-motion"
import Head from 'next/head'

//TODO:Border around each image

function resources() {
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
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .50
      },
    },
  }

  const pPapers = [
    {
      source: positionPPreview,
      format: "PDF",
      redirect: "https://drive.google.com/file/d/1JJIRTSu3XTS9zsC0jdm0rca9iCLwyOgC/view?usp=sharing"
    },
    {
      source: ppexPreview,
      format: "PDF",
      redirect: "https://drive.google.com/file/d/1C4_g28Ktl-UTF7mE7HgfnFreiY7P2E9P/view?usp=sharing"
    },
  ]

  const rPapers = [
    {
      source: resolutionPreview,
      format: "PDF",
      redirect: "https://drive.google.com/file/d/1srt2Wnt1UDG7NgKQ8ryzmOCdm1DgnmSD/view?usp=sharing"
    }, 
    {
      source: clausePreview,
      format: "PDF",
      redirect: "https://drive.google.com/file/d/1loRoHmpA0EeD72JbE19jpLEG_bbiAcWR/view?usp=sharing"
    }
  ]

  const debate = [
    {
      source: introMunPreview,
      format: "PDF",
      redirect: "https://drive.google.com/file/d/1SFLA1lUgDijIs9Extk7PTZdVh3RgeDet/view?usp=sharing"
    },
    {
      source: pointsMotionPreview,
      format: 'PDF',
      redirect: 'https://drive.google.com/file/d/1kF47eIi3XQxNAVLDt1xdLHIJNXcXYIVZ/view?usp=sharing'
    },
    {
      source: tips,
      format: 'Image',
      redirect: ''
    },
    {
      source: ettiquetePreview,
      format: 'PDF',
      redirect: 'https://drive.google.com/file/d/1lvOXbf_lAZXOsuIM_NkhlJET-Q0noK-z/view?usp=sharing'
    }
  ]

  const terms = [
    {
      source: handbook,
      format: "PDF",
      redirect: "https://drive.google.com/file/d/1oYtMlWBbmeDZyGAB7jpfnWkTto2b2sWa/view?usp=sharing"
    },
    {
      source: termsPreview,
      format: 'PDF',
      redirect: 'https://drive.google.com/file/d/1VjhMzhxWRhzns3087bUcWK41gEb9RFPc/view?usp=sharing'
    },
  ]

  return (
    <>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden">
        {/* Hero image */}
        <div className='bg-gradient-to-tl to-purple-800 from-sky-500 h-[40vh] w-full relative top-0 shadow-xl overflow-x-hidden'>
          <div className='w-full h-full absolute overflow-x-hidden'>
            <Image
              src={"https://www.nti.org/wp-content/uploads/2017/11/HEADER_IMAGE-Placards-Credit_to_National_Model_United_Nations-1000x356.jpg"}
              fill
              priority
              className="mix-blend-overlay brightness-90 object-cover"
              alt="Preview"
            />
          </div>
          <div className='mx-auto w-full h-full px-4 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56 overflow-x-hidden'>
            <div className='text-white my-auto mx-auto flex flex-col text-center'>
              <div className='text-6xl font-bold mb-2'><span className="">Resources</span></div>
              <div>
                Are you new to Model UN? Look through our resources to get a quick start.
              </div>
            </div>
          </div>
        </div>

        {/* how to debate section */}
        <div className='mx-auto w-full pt-10 px-10 overflow-x-hidden'>
          {/* Title */}
          <div className='text-3xl font-semibold text-center lg:mx-40 border-b border-purple-500 pb-4 mb-6 overflow-x-hidden'>
            How to <span className='text-purple-500 font-bold'>Debate</span>
          </div>
          <motion.div initial="hidden" animate="show" variants={variants} className="overflow-x-hidden">
            <div className="flex flex-wrap items-center gap-4 justify-center lg:mx-32 xl:mx-48 3xl:mx-96 overflow-x-hidden">
            {
              debate.map((preview, index) => (
                <motion.div key={index} variants={items} className="overflow-x-hidden">
                <div
                  className="relative brightness-75 group hover:brightness-100 blur-[0.5px] 
                            hover:blur-none transition-all cursor-pointer rounded-lg overflow-hidden
                            h-[250px] w-[350px] md:h-[250px] md:w-[325px] lg:h-[250px] lg:w-[375px] overflow-x-hidden">
                  {
                    index != 2 ? (
                        <a href={`${preview.redirect}`}>
                          <Image
                            src={preview.source}
                            fill
                            alt='preview'
                            className='object-cover'
                          />
                          <div className="absolute -bottom-10 group-hover:bottom-0 right-0 h-[30px] 
                          text-black w-full text-right bg-slate-500 opacity-40 transition-all" />
                          <div className='absolute -bottom-10 group-hover:bottom-0 right-0 px-2 
                          text-white font-semibold py-1'>
                            {preview.format}
                          </div>
                          <div className='absolute -bottom-10 group-hover:bottom-0 left-0 px-2 text-white font-semibold py-1'>
                            Click to view
                          </div>
                        </a>
                    ) : (
                      <Link href="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftips.5f83f95a.jpg&w=640&q=75">
                          <Image
                            src={preview.source}
                            fill
                            alt='preview'
                            className='object-cover'
                          />
                          <div className="absolute -bottom-10 group-hover:bottom-0 right-0 h-[30px] 
                          text-black w-full text-right bg-slate-500 opacity-40 transition-all" />
                          <div className='absolute -bottom-10 group-hover:bottom-0 right-0 px-2 
                          text-white font-semibold py-1'>
                            {preview.format}
                          </div>
                          <div className='absolute -bottom-10 group-hover:bottom-0 left-0 px-2 text-white font-semibold py-1'>
                            Click to view
                          </div>
                        </Link>
                    )
                  }
                  </div>
                </motion.div>
              ))
            }
          </div>
          </motion.div>
        </div>

        {/* Position papers */}
        <div className='mx-auto w-full pt-10 px-10 overflow-x-hidden'>
          {/* Title */}
          <div className='text-3xl font-semibold text-center lg:mx-40 border-b border-purple-500 pb-4 mb-6 overflow-x-hidden'>
            <span className='text-purple-500 font-bold'>Position</span> Papers
          </div>
          <motion.div initial="hidden" animate="show" variants={variants} >
            <div className="flex flex-wrap items-center gap-4 justify-center lg:mx-32 xl:mx-48 3xl:mx-96 overflow-x-hidden">
              {
                pPapers.map((preview, index) => (
                  <motion.div key={preview.redirect} variants={items} className="overflow-x-hidden">
                    <div
                    className="relative brightness-75 group hover:brightness-100 blur-[0.5px] 
                                hover:blur-none transition-all cursor-pointer rounded-lg overflow-hidden
                                h-[250px] w-[350px] md:h-[250px] md:w-[325px] lg:h-[250px] lg:w-[375px] overflow-x-hidden">
                      <a href={`${preview.redirect}`}>
                        <Image
                          src={preview.source}
                          fill
                          alt='preview'
                          className='object-cover'
                        />
                        <div className="absolute -bottom-10 group-hover:bottom-0 right-0 h-[30px] 
                        text-black w-full text-right bg-slate-500 opacity-40 transition-all" />
                        <div className='absolute -bottom-10 group-hover:bottom-0 right-0 px-2 
                        text-white font-semibold py-1'>
                          {preview.format}
                        </div>
                        <div className='absolute -bottom-10 group-hover:bottom-0 left-0 px-2 text-white font-semibold py-1'>
                          Click to view
                        </div>
                      </a>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>

        {/* Resolution Papers */}
        <div className='mx-auto w-full pt-10 px-10 overflow-x-hidden'>
          {/* Title */}
          <div className='text-3xl font-semibold text-center lg:mx-40 border-b border-purple-500 pb-4 mb-6 overflow-x-hidden'>
            <span className='text-purple-500 font-bold'>Resolution</span> Papers
          </div>
          <motion.div initial="hidden" animate="show" variants={variants}
            className="flex flex-wrap items-center gap-4 justify-center lg:mx-32 xl:mx-48 3xl:mx-96 overflow-x-hidden">
            {
              rPapers.map((preview, index) => (
                <motion.div
                  variants={items}
                  key={preview.source}
                  className="relative brightness-75 group hover:brightness-100 blur-[0.5px] 
                            hover:blur-none transition-all cursor-pointer rounded-lg overflow-hidden
                            h-[250px] w-[350px] md:h-[250px] md:w-[325px] lg:h-[250px] lg:w-[375px] overflow-x-hidden">
                  <a href={`${preview.redirect}`}>
                    <Image
                      src={preview.source}
                      fill
                      alt='preview'
                      className='object-cover'
                    />
                    <div className="absolute -bottom-10 group-hover:bottom-0 right-0 h-[30px] 
                    text-black w-full text-right bg-slate-500 opacity-40 transition-all" />
                    <div className='absolute -bottom-10 group-hover:bottom-0 right-0 px-2 
                    text-white font-semibold py-1'>
                      {preview.format}
                    </div>
                    <div className='absolute -bottom-10 group-hover:bottom-0 left-0 px-2 text-white font-semibold py-1'>
                      Click to view
                    </div>
                  </a>
                </motion.div>
              ))
            }
          </motion.div>
        </div>

        {/* Important Terms */}
        <div className='mx-auto w-full pt-10 px-10 mb-14 overflow-x-hidden'>
          {/* Title */}
          <div className='text-3xl font-semibold text-center lg:mx-40 border-b border-purple-500 pb-4 mb-6 overflow-x-hidden'>
            Important <span className='text-purple-500 font-bold'>Terms</span>
          </div>
          <motion.div initial="hidden" animate="show" variants={variants} className="overflow-x-hidden">
            <div className="flex flex-wrap items-center gap-4 justify-center lg:mx-32 xl:mx-48 3xl:mx-96 overflow-x-hidden">
              {
                terms.map((preview, index) => (
                  <motion.div key={preview.format} variants={items} className="overflow-x-hidden">
                    <div
                      className="relative brightness-75 group hover:brightness-100 blur-[0.5px] 
                            hover:blur-none transition-all cursor-pointer rounded-lg overflow-hidden
                            h-[250px] w-[350px] md:h-[250px] md:w-[325px] lg:h-[250px] lg:w-[375px] overflow-x-hidden">
                          <Link href={`${preview.redirect}`}>
                            <Image
                              src={preview.source}
                              fill
                              alt='preview'
                              className='object-cover'
                            />
                            <div className="absolute -bottom-10 group-hover:bottom-0 right-0 h-[30px] 
                          text-black w-full text-right bg-slate-500 opacity-40 transition-all" />
                            <div className='absolute -bottom-10 group-hover:bottom-0 right-0 px-2 
                          text-white font-semibold py-1'>
                              {preview.format}
                            </div>
                            <div className='absolute -bottom-10 group-hover:bottom-0 left-0 px-2 text-white font-semibold py-1'>
                              Click to view
                            </div>
                          </Link>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default resources