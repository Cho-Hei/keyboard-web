"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SLIDEIMAGES } from "@/data";

type ItemType = {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
};

const SlideShow = () => {
  const [slide, setSlide] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDEIMAGES.length);
    }, 8000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [intervalRef]);

  const handlePrevPage = () => {
    if (slide === 0) {
      setSlide(SLIDEIMAGES.length - 1);
    } else setSlide((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (slide === SLIDEIMAGES.length - 1) {
      setSlide(0);
    } else setSlide((prev) => prev + 1);
  };

  return (
    <div className='relative flex w-full flex-col justify-center items-start'>
      <div className='relative overflow-hidden w-full h-full'>
        <div
          className='flex h-[calc(100vh-500px)] w-auto transition ease-out duration-500'
          style={{ transform: `translateX(-${slide * 100}%)` }}>
          {SLIDEIMAGES.map((item) => (
            <div key={item.id} className='w-full flex-shrink-0 relative'>
              <Image
                src={item.imageUrl}
                alt='Keyboard banner'
                fill
                sizes='100vw'
                placeholder='blur'
                className='object-cover'
                blurDataURL='/accessories2.jpg'
              />
              <div className='absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg'>
                <h2 className='text-4xl text-white'>{`${item.title}`}</h2>
                <p className='text-2xl mt-4 text-purple-200'>{`${item.body}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* left arrow */}
      <div
        onClick={handlePrevPage}
        className='z-10 absolute bottom-1/2 left-4 text-2xl font-semibold'>
        <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-violet-600'>
          &lt;-
        </span>
      </div>

      {/* Right arrow */}
      <div
        onClick={handleNextPage}
        className='z-10  absolute bottom-1/2 right-4 text-2xl font-semibold'>
        <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-violet-600'>
          -&gt;
        </span>
      </div>
    </div>
  );
};

export default SlideShow;
