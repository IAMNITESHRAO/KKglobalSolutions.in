import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerFour = () => {
  return (
    <>
    <style>{`
        .banner-area-3 .bg-gray {
          padding: 40px 0;
          position: relative;
        }
      `}</style>
      
      {/* ================== BannerFour Start ==================*/}
      <div className="banner-area banner-area_4 bg-relative banner-area-3">
        <div className="container custom-container">
          <div className="bg-gray">
            <img
              className="img-right"
              src="assets/img/banner-4/7566.jpg"
              alt="img"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 align-self-center">
                  <div className="banner-inner">
                    <h6
                      className="subtitle "
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                    >
                      SECURING THE FUTURE
                    </h6>
                    <h2
                      className="title "
                      data-aos="fade-right"
                      data-aos-delay="250"
                      data-aos-duration="1500"
                    >
                      Join Our <span>Cybersecurity</span> Team
                    </h2>
                    <Link
                      className="mt-3 btn btn-border-base"
                      data-aos="fade-right"
                      data-aos-delay="400"
                      data-aos-duration="1500"
                      to="/contact"
                    >
                      Apply Now <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFour End ==================*/}
    </>
  );
};

export default BannerFour;
