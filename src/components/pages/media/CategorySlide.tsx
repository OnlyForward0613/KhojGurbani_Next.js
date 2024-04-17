"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";

import { useCallback, useRef } from 'react';
import Link from 'next/link';

export default function SlideCategory(props: { featuredCategories: any; showCount: any; }) {

    const featuredCategories = props.featuredCategories.featured_categories;
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
                    {featuredCategories?.map((item: { name: string; id: string; attachment_name: string; }) => (
                        <SwiperSlide key={item.id}>
                            <Link 
                                href={`/Media/Category/${item.id}`}
                                className="cursor-pointer"
                            >
                                <Image
                                    src={item.attachment_name}
                                    alt={item.name}
                                    className='w-full'
                                    width={100}
                                    height={100}
                                />
                                <div className="text-[#252638] text-[15px] mt-2">{item.name}</div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button
                onClick={() => navigateToNextSlide()}
                className='bg-[#4F4F4F] bg-opacity-50 rounded-full p-2 absolute top-[calc(50%-16px)] right-2 xl:right-[-36px] z-10 transition-all'
            >
                <Image src='/images/svg/arrow_right.svg' alt='right' width={16} height={16} />
            </button>
        </div>
    );
}