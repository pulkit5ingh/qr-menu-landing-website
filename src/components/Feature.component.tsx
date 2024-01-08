import React from 'react';
import Image from 'next/image';

// TODO match it with theme

import dashboardImage from '@public/dashboard.png';
import menuImage from '@public/menu.png';

import LaptopMockupComponent from './miscs/LaptopMockup.component';
import { FeatureComponentTexts } from '@data/texts';

const FeatureComponent = () => {
  return (
    <div className='relative p-10 bg-white'>
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center'>
        <div className='lg:col-start-2 md:pl-20'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
            {FeatureComponentTexts.Heading}
          </h1>
          <ul className='mt-10'>
            <li>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-20 h-20 text-white bg-white rounded-md'>
                    {/* <svg
                      width={20}
                      height={20}
                      fill='currentColor'
                      className='w-20 h-20'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
                    </svg> */}
                    <Image
                      src={menuImage}
                      width={100}
                      height={100}
                      alt='menuImage'
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <h2 className='text-xl font-bold leading-6 text-gray-900'>
                    {FeatureComponentTexts.QrMenuFeature.Heading}
                  </h2>
                  <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>
                    {FeatureComponentTexts.QrMenuFeature.Description}
                  </p>
                </div>
              </div>
            </li>
            <li className='mt-10'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-20 h-20 text-white bg-white rounded-md'>
                    {/* <svg
                      width={20}
                      height={20}
                      fill='currentColor'
                      className='w-20 h-20'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
                    </svg> */}
                    <Image
                      src={dashboardImage}
                      width={100}
                      height={100}
                      alt='dashboardImage'
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <h2 className='text-xl font-bold leading-6 text-gray-900'>
                    {FeatureComponentTexts.ManageOrderFeature.Heading}
                  </h2>
                  <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl300'>
                    {FeatureComponentTexts.ManageOrderFeature.Description}
                  </p>
                </div>
              </div>
            </li>
            <li className='mt-10'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-20 h-20 text-white bg-indigo-500 rounded-md'>
                    <svg
                      width={20}
                      height={20}
                      fill='currentColor'
                      className='w-20 h-20'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
                    </svg>
                  </div>
                </div>
                <div className='ml-4'>
                  <h2 className='text-xl font-bold leading-6 text-gray-900'>
                    {FeatureComponentTexts.LastPoint.Heading}
                  </h2>
                  <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>
                    {FeatureComponentTexts.LastPoint.Description}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1'>
          <LaptopMockupComponent />
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
