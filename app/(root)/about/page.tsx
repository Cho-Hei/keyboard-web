import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className='2xl:max-container relative flex py-10 lg:py-20'>
      <div className='flex flex-col justify-center items-center px-40'>
        <div className='flex flex-col w-full'>
          <div className='relative'>
            <div className=' h-[400px]'>
              <Image
                src='/team.jpg'
                alt='Team banner'
                fill
                sizes='100vw'
                className='object-cover'
              />
            </div>
          </div>
        </div>
        <h1 className='text-[60px] text-center my-4'>About us</h1>
        <div className='text-[20px]'>
          <p>
            At GeekKeys, we’re passionate about enhancing your typing
            experience. Whether you’re a gamer, programmer, or simply someone
            who spends hours at the keyboard, we’ve got you covered. Our mission
            is to provide top-quality products that elevate your computing
            journey.
          </p>
          <br />
          <h2 className='text-xl font-bold'>Our Story</h2>
          <p>
            Our Story GeekKeys was born out of a shared love for all things
            tech. Our founder, Alex Chen, a seasoned software engineer, noticed
            a gap in the market for high-performance keyboards and peripherals.
            Fueled by this vision, Alex assembled a team of like-minded geeks
            (hence the name!) to create a haven for keyboard enthusiasts.
          </p>
          <br />
          <h2 className='text-xl font-bold'>What Sets Us Apart</h2>
          <p>
            When you shop at GeekKeys, you’re not just buying a keyboard; you’re
            joining a community. We’re committed to delivering exceptional
            products, outstanding customer service, and a dash of geeky
            camaraderie. Ready to level up your typing game? Explore our
            collection today!
          </p>
          <br />
          <p>
            Feel free to customize this section further to align with your
            brand’s unique voice and values. If you need any additional details
            or have specific preferences, don’t hesitate to reach out. GeekKeys
            is here to geek out with you! 🎮🖥️🔍
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
