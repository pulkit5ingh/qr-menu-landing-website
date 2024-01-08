import React from 'react';

import { HeroComponentTexts } from '@data/texts';
import PhoneMockUpComponent from '@components/miscs/PhoneMockUp.components';

const HeroComponent = () => {
  return (
    <section className='bg-white p-10'>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
            {HeroComponentTexts.Heading}
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl '>
            {HeroComponentTexts.SubHeading}
          </p>
          <button
            type='button'
            className='inline-flex items-center mr-4 justify-center h-12 px-6 font-medium tracking-wide border border-gray-900 text-gray-900 transition duration-200 bg-white-900 rounded-lg hover:bg-gray-800 hover:text-white focus:shadow-outline focus:outline-none'
          >
            Get Started
          </button>
          <a
            href='#_'
            className='inline-flex items-center mr-4 justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none'
          >
            Know More
          </a>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <PhoneMockUpComponent />
          {/* <img
            src='https://google.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
            alt='mockup'
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
