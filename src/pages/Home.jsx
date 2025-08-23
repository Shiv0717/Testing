import React from 'react';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services';
import AboutSection from '../Components/About';
import Testimonials from '../Components/Testimonials';
import CTA from '../Components/CTA';
import Faqs from '../Components/Faqs';
import Achievements from '../Components/Achievements';
import Tools from '../Components/Tools';
import CompanySlider from '../Components/CompanySlider';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Achievements/>
      <Services/>
      <Tools/>
      <AboutSection/>
      <CompanySlider/>
      <Testimonials/>
      <Faqs/>
    </div>
  );
}

export default Home;
