import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceAreaSix from "../components/ServiceAreaSix";
import AboutAreaSeven from "../components/AboutAreaSeven";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service'} />

      {/* Banner Six */}
      {/* <BannerSix /> */}

      {/* About Seven */}
      <AboutAreaSeven />

      {/* Service Area Six */}
      <ServiceAreaSix />

      {/* ServiceAreaGroup */}
      {/* <ServiceAreaGroup /> */}

      {/* Pricing Area */}
      {/* <PricingArea /> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Service;
