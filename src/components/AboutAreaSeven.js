import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaSeven = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area pd-top-0 pd-bottom-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="main-img m-md-4"
                  src="assets/img/about/32.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center   "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0 mb-0 ps-lg-4">
                <h6 className="bg-none color-base mb-3">SERVICES</h6>
                <h2 className="title">
                  Preventing Cyber Attacks Before They Happen
                </h2>
                <p className="content mb-4">
                  We proactively identify security risks through audits and
                  testing to secure your systems before threats emerge.
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <img src="assets/img/about/31.png" alt="img" />
                  </div>
                  <div className="col-md-9 align-self-center">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Risk Assessment
                      </li>
                      <li>
                        <FaCheckCircle /> Vulnerability Testing
                      </li>
                      <li>
                        <FaCheckCircle /> Threat Detection
                      </li>
                      <li>
                        <FaCheckCircle /> Data Protection
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  <strong>
                    Cybersecurity shields your digital assets from evolving
                    threats and ensures data confidentiality and resilience.
                  </strong>
                </p>
                <Link className="btn btn-base mt-0 me-3" to="#">
                  Explore Now
                </Link>
                <img
                  src="assets/img/about/kkglobalsign.png"
                  alt="KK Global Signature"
                  style={{ maxWidth: "150px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaSeven;
