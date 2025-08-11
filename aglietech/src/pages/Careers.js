import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkProcessOne from "../components/WorkProcessOne";
import BannerFour from "../components/BannerFour";
import WorkProcessThree from "../components/WorkProcessThree";

const Careers = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Careers"} />

      <BannerFour/>

      <WorkProcessThree/>

      {/* Blog Group */}
      {/* <BlogGroup /> */}

      <WorkProcessOne/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Careers;
