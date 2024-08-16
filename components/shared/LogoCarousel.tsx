"use client"

import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
    images: string[];
}

const LogoCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            if (currentIndex === images.length) {
                setIsTransitioning(false);
                setCurrentIndex(0);
            } else {
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, 3000); // Change slide every 2 seconds

        return () => {
            resetTimeout();
        };
    }, [currentIndex, images.length]);

    const handlePrevious = () => {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full flex flex-col justify-center">
            {/* Slides */}
            <div className='w-full max-w-[1400px] relative flex overflow-hidden mx-auto'>
                <button
                    onClick={handlePrevious}
                    className="text-[50px] z-10 absolute left-0 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 rounded-full"
                >
                    {`<`}
                </button>
                <button
                    onClick={handleNext}
                    className="text-[50px] z-10 absolute right-0 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 rounded-full"
                >
                    {`>`}
                </button>
                <div
                    className={`flex transition-transform ${isTransitioning ? 'duration-500 ease-in-out' : ''}`}
                    style={{ transform: `translateX(-${(currentIndex * 100) / images.length / 2}%)` }}>

                    {[...images, ...images].map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-[200px] h-[200px] p-4">
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}

                </div>

            </div>

            {/* Navigation Arrows
            <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            >
                Prev
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            >
                &rarr;
            </button> */}

            {/* Dots Navigation */}
            <div className=" bottom-0 flex justify-center space-x-2 p-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;

























// {/* Slides */}
// <div className='w-[1400px]   flex  overflow-hidden'>
//     {images.map((image, index) => (
//         <div
//             className="relative bg-black left-2/4 transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//             <img
//                 key={index}
//                 src={image}
//                 alt={`Slide ${index}`}
//                 className="w-[100px] h-64 object-contain"
//             />
//         </div>
//     ))}
// </div>