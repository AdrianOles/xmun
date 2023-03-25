import React from 'react';
import Image from 'next/image';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const pictures = [
    {
        link: 'https://i.pinimg.com/564x/cd/70/76/cd707680cf620d2af05c55918717d76b.jpg',
        alt: 'Photo 1'
    },
    {
        link: 'https://i.pinimg.com/564x/36/99/7c/36997cebbb811cdd07a118f2964f554f.jpg',
        alt: 'Photo 2'
    },
    {
        link: 'https://i.pinimg.com/564x/69/2f/e7/692fe76ebd03e537542fae3e30f365bc.jpg',
        alt: 'Photo 3'
    },
    {
        link: 'https://i.pinimg.com/564x/f7/44/f2/f744f2c7363184d3a909d718a7f6ea37.jpg',
        alt: 'Photo 4'
    },
    {
        link: 'https://i.pinimg.com/564x/8b/7c/05/8b7c05db63c5944720b43469f4f1078d.jpg',
        alt: 'Photo 5'
    },
]

function ImgSlider() {
    return (
        <div className='bg-transparent rounded-xl overflow-hidden'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    pictures.map((index) => (
                        <SwiperSlide key={index} className="py-auto bg-transparent pb-10 px-0 rounded-xl overflow-hidden">
                            <div className='relative h-[300px] rounded-xl overflow-hidden'>
                                <Image
                                    placeholder="blur"
                                    blurDataURL="https://cdn-icons-png.flaticon.com/512/6356/6356659.png"
                                    src={index.link}
                                    sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                                    fill
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ImgSlider