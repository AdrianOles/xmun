import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

function photos() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

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
    <motion.div initial="hidden" animate="show" variants={variants} className="flex flex-wrap w-full gap-4 p-4 items-center justify-center overflow-x-hidden">
      {
        numbers.map((index) => (
          <motion.div variants={items} key={index} className="w-[70%] sm:w-[40%] md:w-[40%] h-[200px] md:h-[250px] lg:w-[20%] lg:h-[200px] relative">
              {
                index === 1 && (
                  <Image
                    src={"https://i.pinimg.com/564x/32/a5/5c/32a55c107eaffe151b94877ae8f411c7.jpg"}
                    fill
                    alt="image"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                  />
                )
              }
            {
              index === 2 && (
                <Image
                  src={"https://i.pinimg.com/564x/97/48/f7/9748f702e94e2049fa5312ee1f86cd6b.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 3 && (
                <Image
                  src={"https://i.pinimg.com/564x/4a/57/a5/4a57a5cb564b46cff22a80dfc272ecde.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 4 && (
                <Image
                  src={"https://i.pinimg.com/564x/cd/70/76/cd707680cf620d2af05c55918717d76b.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 5 && (
                <Image
                  src={"https://i.pinimg.com/564x/3a/70/e8/3a70e87102bd716ea5b3a192d2aad25c.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 6 && (
                <Image
                  src={"https://i.pinimg.com/564x/36/99/7c/36997cebbb811cdd07a118f2964f554f.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 7 && (
                <Image
                  src={"https://i.pinimg.com/564x/d3/0d/4e/d30d4e6a47e54ecf4dbb4cc85fbfe5b2.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 8 && (
                <Image
                  src={"https://i.pinimg.com/564x/fe/29/bd/fe29bd23d66282dc79a0730d1050535a.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 9 && (
                <Image
                  src={"https://i.pinimg.com/564x/ff/9e/ad/ff9ead1f94d622de165a69bc6d3dcdcb.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 10 && (
                <Image
                  src={"https://i.pinimg.com/564x/94/dc/32/94dc32e07c29e6a879dc4aa9ae3c018c.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 11 && (
                <Image
                  src={"https://i.pinimg.com/564x/69/2f/e7/692fe76ebd03e537542fae3e30f365bc.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 12 && (
                <Image
                  src={"https://i.pinimg.com/564x/f7/44/f2/f744f2c7363184d3a909d718a7f6ea37.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 13 && (
                <Image
                  src={"https://i.pinimg.com/564x/8b/7c/05/8b7c05db63c5944720b43469f4f1078d.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 14 && (
                <Image
                  src={"https://i.pinimg.com/564x/3c/1a/c8/3c1ac8b86b3156c35ed89ec7e55407d6.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 15 && (
                <Image
                  src={"https://i.pinimg.com/564x/53/4b/44/534b44ca7f03ecaa5e2c247212181f97.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 16 && (
                <Image
                  src={"https://i.pinimg.com/564x/d9/4b/b4/d94bb4edb972f7d4db21918f7bf286b6.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
            {
              index === 17 && (
                <Image
                  src={"https://i.pinimg.com/564x/00/32/78/00327848487c829f5731bff8b424e1c1.jpg"}
                  fill
                  alt="image"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                />
              )
            }
          </motion.div>
        ))
      }
    </motion.div>
  )
}

export default photos