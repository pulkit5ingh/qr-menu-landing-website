import React from 'react';

import NavbarComponent from '@components/Navbar.component';
import HeroComponent from '@components/Hero.component';
import FeatureComponent from '@components/Feature.component';
import FooterComponent from '@components/Footer.component';

const Page = () => {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <FeatureComponent />
      <FooterComponent />
    </div>
  );
};

export default Page;
