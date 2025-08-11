import React from "react";
import NavBar from "../components/NavBar";
import CounterArea from "../components/CounterArea";
import ContactArea from "../components/ContactArea";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TeamArea from "../components/TeamArea";
import ChallengesCarousel from "../components/ChallengesCarousel";
import ServicesCarousel from "../components/ServicesCarousel";

const bannerData = {
  bgImage: "./assets/img/banner/0.png",
  subtitle: "SECURING THE FUTURE  ",
  title: "Fortifying",
  highlight: "Your Digital World ",
  Subhighlight: "with Cutting-Edge Cybersecurity",
  description: "Cyber threats never rest — and neither do we. At KK Global Solutions, we provide next-generation cybersecurity solutions that safeguard your business 24/7, ensuring relentless protection and peace of mind.",
  buttonText: "Discover More",
  buttonLink: "/about",
  decoration1: "assets/img/banner/2.png",
  decoration2: "assets/img/banner/5.svg",
  bannerAnimate1: "assets/img/banner/2.png",
  bannerAnimate2: "assets/img/banner/3.svg",
  bannerAnimate3: "assets/img/banner/4.svg",
  mainImage: "assets/img/banner/image1.jpg",
};

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner  */}
      <Banner data={bannerData} />

      {/* About Area  */}
      {/* <AboutArea /> */}

      {/* Service Area */}
      <ServicesCarousel/>

      {/* FAQ Area  */}
      {/* <FaqArea /> */}

      {/* Case Study Area */}
      {/* <CaseStudyArea /> */}

      {/* Team Area  */}
      <TeamArea />

      {/* ChallengesCarousel */}
      <ChallengesCarousel/>

      {/* Counter Area  */}
      <CounterArea />

      {/* Contact Area  */}
      <ContactArea />

      {/* Work Process */}
      {/* <WorkProcess /> */}
      {/* <WorkProcess
        data={workProcessData}
        subtitle="OUR SIMPLE PROCESS"
        title="World Best Step Our IT Process"
      /> */}

      {/* Pricing Area  */}
      {/* <PricingArea /> */}

      {/* Blog Area */}
      {/* <BlogArea /> */}


      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
