import React from 'react';
import Image from 'next/image';

// TODO match it with theme

import menuImage from '@public/menu.png';
import dashboardImage from '@public/dashboard.png';
import notificationImage from '@public/notifications.png';

import LaptopMockupComponent from './miscs/LaptopMockup.component';
import { FeatureComponentTexts } from '@data/texts';

const FeatureComponent = () => {
  return (
    <section className='bg-white p-10'>
      <div className='grid px-8 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center'>
        <div className='lg:col-start-2'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
            {FeatureComponentTexts.Heading}
          </h1>
          <ul className='mt-5'>
            <li>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-20 h-20 text-white bg-white rounded-md'>
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
            <li className='mt-5'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-20 h-20 text-white bg-white rounded-md'>
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
            <li className='mt-5'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-20 h-20 text-white bg-white rounded-md'>
                    <Image
                      src={notificationImage}
                      width={100}
                      height={100}
                      alt='notificationImage'
                    />
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
        <div className='relative mt-5 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1'>
          <LaptopMockupComponent />
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
