"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";

import { useCallback, useRef } from 'react';
import { useAudioPlayer } from '@/contexts/AudioPlayerContext';

export default function SlideRadio(props: { radios: any; showCount: any; }) {

    const radios = props.radios.data;
    const showCount = props.showCount;

    const swiperRef = useRef<any>(null);

    const navigateToNextSlide = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    const navigateToPrevSlide = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    // const { playAudio } = useAudioPlayer();

    return (
        <div className='gap-2 items-center relative'>
            <button
                onClick={() => navigateToPrevSlide()}
                className='bg-[#4F4F4F] bg-opacity-50 rounded-full p-2 absolute top-[calc(50%-16px)] left-2 xl:left-[-36px] z-10 transition-all'
            >
                <Image src='/Images/SVG/arrow_left.svg' alt='prev' width={16} height={16} />
            </button>
            <div className='w-full'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={16}
                    slidesPerView={showCount}
                    speed={showCount === 1 ? 500 : 1000}
                >
                    {radios?.map((item: { title: string; id: string; img: string; src: string; }) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className="cursor-pointer relative"
                                // onClick={() => playAudio(item.src, item.title, item.id)}
                            >
                                <img
                                    src={"/images/" + item.img}
                                    alt={item.title}
                                    className='w-full'
                                />
                                <div className="text-white text-lg text-center absolute bottom-[95px] w-full">{item.title}</div>
                                <div className="absolute bottom-[25px] w-full flex justify-center">
                                    <button className='text-white text-sm bg-blue-primary px-[10px] py-[4px] border border-white rounded-full flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
                                            <path fill="#FFFFFF"
                                                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" />
                                            <path fill="#0B79BE" d="M20 31L20 17 32 24z" />
                                        </svg>
                                        Play Radio
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button
                onClick={() => navigateToNextSlide()}
                className='bg-[#4F4F4F] bg-opacity-50 rounded-full p-2 absolute top-[calc(50%-16px)] right-2 xl:right-[-36px] z-10 transition-all'
            >
                <Image src='/Images/SVG/arrow_right.svg' alt='right' width={16} height={16} />
            </button>
        </div>
    );
}