"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

export type ImageSliderProps = {
    title: string,
    subtitle?: string,
    description: string,
    titleColor: string,
    subtitleColor?: string,
}

const images = [
    '/mine/cars/slide1/img1.jpg',
    '/mine/cars/slide1/img2.jpg',
    '/mine/cars/slide1/img3.jpg',
    '/mine/cars/slide1/img4.jpg',

];

const ImageSlider = ({ title, subtitle, description, titleColor, subtitleColor }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />

                </div>
            ))}
            {/* Black overlay over the image  */}
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                {/* Subtitle  */}
                <h2 className={`${subtitleColor} text-center text-[18px] sm:text-[20px] md:text-[23px] lg:text-[25px] xl:text-[28px] font-extrabold tracking-widest`} >{subtitle}</h2>
                {/* Title  */}
                <h1 className={`${titleColor} text-center text-[30px] sm:text-[33px] md:text-[40px] lg:text-[50px] xl:text-[64px] font-extrabold`}>{title}</h1>
                {/* Description  */}
                <p className=' text-center text-white mt-2 mb-8 sm:text-[16px] md:text-[20px]  lg:text-[25px] xl:text-[22px]'>{description}</p>
                {/* Button  */}
                <Button >Rent Now</Button>
            </div>
        </div>
    )
}

export default ImageSlider