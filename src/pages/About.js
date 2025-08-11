import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import NavBar from '../components/NavBar';
import AboutArea from '../components/AboutArea';
import ServiceArea from '../components/ServiceArea';
import TeamArea from '../components/TeamArea';
import CounterArea from '../components/CounterArea';
import ContactArea from '../components/ContactArea';
import WorkProcess from '../components/WorkProcess';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'} />

      {/* About Area */}
      <AboutArea />

      {/* ServiceArea */}
      <ServiceArea />

      {/* FAQ Area*/}
      {/* <FaqArea /> */}

      {/* Team Area */}
      <TeamArea />

      {/* Counter Area */}
      <CounterArea />

      {/* Contact Area */}
      <ContactArea />

      {/* Work Process */}
      <WorkProcess />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
