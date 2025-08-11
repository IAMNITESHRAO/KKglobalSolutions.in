import React from 'react';
import { Link } from 'react-router-dom';

const ServiceAreaSix = () => {
  return (
    <>
      {/*=================== service area six start ===================*/}
      <div
        className="service-area bg-cover pd-top-0 pd-bottom-90 pd-top-40 pd-bottom-90"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-8">
              <div className="section-title text-center">
                <h6 className="bg-none color-base mb-3">Our Best service</h6>
                <h2 className="title">
                  Protecting Your Data, One Byte At A Time
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/1.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Application Security Testing</Link>
                  </h5>
                  <p className="mb-0">
                    We assess your applications using static and dynamic methods to find issues like XSS, SQLi, and weak authentication before attackers do.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/2.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Web Development</Link>
                  </h5>
                  <p className="mb-0">
                    We build fast, secure, scalable, responsive, and SEO-friendly websites using the latest tech stacks to meet your business goals and ensure a strong user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/3.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Network Penetration Testing</Link>
                  </h5>
                  <p className="mb-0">
                    We simulate real-world cyberattacks to detect and exploit network flaws, helping you fix them before they become actual threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/4.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Source Code Analysis</Link>
                  </h5>
                  <p className="mb-0">
                    We review your source code line by line to identify hidden bugs, insecure patterns, and logic flaws missed by automated tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/5.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Phishing Simulation</Link>
                  </h5>
                  <p className="mb-0">
                    We design realistic phishing emails to test your team's alertness and improve awareness against email-based social engineering.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/6.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Awareness Drills</Link>
                  </h5>
                  <p className="mb-0">
                    We conduct training exercises and mock scenarios to teach your employees how to spot and respond to cyber threats effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaSix;
