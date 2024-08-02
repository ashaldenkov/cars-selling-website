'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Controller } from 'swiper/modules';
import useWindowsize from '@/app/hooks/useWindowsize';

import Image from 'next/image'
import Arrow from '@/app/_images/ImageArrow.png'
import 'swiper/css';
import 'swiper/css/pagination';



 const imgData = ['https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',
'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__',

]


const paginationClasses = `[&_.swiper-pagination]:right-0 [&_.swiper-pagination]:left-auto [&_.swiper-pagination]:mb-2 [&_.swiper-pagination]:mr-2 
        [&_.swiper-pagination]:w-fit [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination]:bg-[#1E1E1EB2] [&_.swiper-pagination]:text-xs	
        [&_.swiper-pagination]:text-white [&_.swiper-pagination]:py-2.5 [&_.swiper-pagination]:px-4 [&_.swiper-pagination]:rounded-full [&_.swiper-pagination]:cursor-default`


const ImageCarousel = () => {
    const [firstSwiper, setFirstSwiper] = useState<any>(null);
    const [secondSwiper, setSecondSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const size = useWindowsize();

  return (
    <div className='w-full z-0'>
        {/*Main slider*/}
        <Swiper
        modules={[Pagination, Controller]}
        className={`w-full h-auto relative lg:rounded-md ${paginationClasses}`}
        slidesPerView={1}
        pagination={{type: 'fraction'}}
        onSlideChange={(clicked) => setActiveIndex(clicked.activeIndex)}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        >

            {imgData.map((imageLink, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div>
                            <Image
                            className='object-cover'
                            src={imageLink}
                            priority={true}
                            width={1024}
                            height={768}
                            alt="Car image"
                            />
                        </div>
                    </SwiperSlide>
                )
            })}

        {/*arrow controls*/}

            <button className={`absolute top-1/2 -translate-y-1/2 z-10`} onClick={() => {firstSwiper.slidePrev()}}>
                <Image
                className='ml-5'
                src={Arrow}
                width={14}
                height={26}
                alt="control arrow"
                />
            </button>
            <button className={`absolute top-1/2 -translate-y-1/2 z-10 right-0`} onClick={() => {firstSwiper.slideNext()}}>
                <Image
                className='mr-5 rotate-180'
                src={Arrow}
                width={14}
                height={26}
                alt="control arrow"
                />
            </button>


        </Swiper>

        {/*Thumbs pc*/}
        <ul className='flex flex-wrap gap-5 mt-5 max-[720px]:hidden'>
            {imgData.map((imageLink, index) => {
                    return (
                        <li key={index} className='w-[100px] h-[100px]'>
                            <button onClick={() => firstSwiper.slideTo(index)}>
                                <Image
                                className='h-[100px] w-[100px] object-cover rounded-md'
                                priority={true}
                                src={imageLink}
                                width={1024}
                                height={768}
                                alt="Car preview"
                                />
                            </button>
                        </li>
                    )
                })}
        </ul> 

        {/*Thumbs mobile*/}
        {(size?.width && size?.width <= 720) ? (
                    <Swiper
                    slidesPerView={3.5}
                    className='mt-2 min-[720px]:hidden'
                    spaceBetween={8}
                    modules={[Controller]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                  >
                        {imgData.map((imageLink, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div onClick={() => firstSwiper.slideTo(index)}>
                                        <Image
                                        className={`object-cover h-[100px] ${ activeIndex==index ? 'scale-[0.85]' : null}`}
                                        priority={true}
                                        src={imageLink}
                                        width={1024}
                                        height={768}
                                        alt="Car image"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                  </Swiper> 
        ): null
        }

    </div>
  )
}

export default ImageCarousel