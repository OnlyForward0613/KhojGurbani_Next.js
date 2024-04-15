"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import { getData } from "@/utils/fetch_server";

export default function SlideRecent(props: { showCount: any; }) {

    const [recents, setRecents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const machineUUID = localStorage.getItem('machineUUID');
            const recently_played = await getData(`/media/recently-played?machine_id=${machineUUID}&user_id=`);
            setRecents(recents);
        };

        fetchData();
    }, []);

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
                <Image src='/images/svg/arrow_left.svg' alt='prev' width={16} height={16} />
            </button>
            <div className='w-full'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={16}
                    slidesPerView={showCount}
                    speed={showCount === 1 ? 500 : 1000}
                >
                    {recents?.map((item: { title: string; id: string; img: string; duration: string; author_name: string; attachment_name: string; }) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className="cursor-pointer text-[#252638] hover:text-blue-primary text-[15px]"
                                // onClick={() => playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id)}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className='w-full'
                                />
                                <div className='flex justify-between'>
                                    <div className="">{item.title}</div>
                                    <div className="text-[#767373] text-sm">{item.duration}</div>
                                </div>
                                <div className="text-[#767373] text-sm">{item.author_name}</div>
                            </div>
                        </SwiperSlide>
                    )).reverse()}
                </Swiper>
            </div>
            <button
                onClick={() => navigateToNextSlide()}
                className='bg-[#4F4F4F] bg-opacity-50 rounded-full p-2 absolute top-[calc(50%-16px)] right-2 xl:right-[-36px] z-10 transition-all'
            >
                <Image src='/images/svg/arrow_right.svg' alt='right' width={16} height={16} />
            </button>
        </div >
    );
}