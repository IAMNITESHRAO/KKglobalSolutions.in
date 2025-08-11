import React from "react";

const AboutArea = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className="about-area pd-top-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="animate-img-1 top_image_bounce"
                  src="assets/img/about/2.png"
                  alt="img"
                  style={{ left: "1px" }}
                />
                <img
                  className="animate-img-2 left_image_bounce"
                  src="assets/img/about/3.png"
                  alt="img"
                />
                <img
                  className="animate-img-3 top_image_bounce"
                  src="assets/img/banner/5.svg"
                  alt="img"
                />
                <img
                  className="main-img"
                  src="assets/img/about/image4.jpg"
                  alt="img"
                  // style={{ width: "660px", height: "630px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">
                  Who We Are : <span>KK-Global</span> Solutions
                </h2>
                <p className="content mb-4 mb-xl-5">
                  KK-Global Solutions is a premier Indian cybersecurity firm delivering advanced threat defense and compliance-driven solutions through a blend of expert manual testing and intelligent automation.
                </p>
                <p>
                  "Where Expertise Drives Innovation and Automation Ensures
                  Precision."
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Mission</h5>
                        <p>
                          At KK-Global Solutions, we are dedicated to delivering
                          resilient cybersecurity solutions that safeguard
                          business continuity and protect data integrity. Our
                          mission is to enable organizations to concentrate on
                          their core operations, assured of their security
                          posture.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Vision</h5>
                        <p>
                          At KK-Global Solutions, we aim to be a global leader
                          in cybersecurity, renowned for our excellence,
                          innovation, and commitment to defending organizations
                          from evolving digital threats while ensuring their
                          operational resilience and business continuity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutArea;
