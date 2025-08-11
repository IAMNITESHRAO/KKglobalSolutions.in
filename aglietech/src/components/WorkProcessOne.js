import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className="work-process-area pd-top-50 pd-bottom-60">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
            <h2 className="title">
              Why <span>Join</span> Us?
            </h2>
          </div>
          <div className="row">
            {/* Career Growth */}
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/9.svg" alt="Career Growth Icon" />
                </div>
                <div className="details">
                  <p className="process-count">Step 01</p>
                  <h5 className="mb-3">Career Growth</h5>
                  <p className="content">
                    Accelerate your learning curve with hands-on exposure to cutting-edge cybersecurity technologies and industry-leading methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Development */}
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/10.svg" alt="Skill Development Icon" />
                </div>
                <div className="details">
                  <p className="process-count">Step 02</p>
                  <h5 className="mb-3">Skill Development</h5>
                  <p className="content">
                    Continuous growth through expert-led training sessions and hands-on projects that sharpen your cybersecurity skills and industry knowledge.
                  </p>
                </div>
              </div>
            </div>

            {/* Work-Life Balance */}
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/11.svg" alt="Work-Life Balance Icon" />
                </div>
                <div className="details">
                  <p className="process-count">Step 03</p>
                  <h5 className="mb-3">Work-Life Balance</h5>
                  <p className="content">
                    Enjoy flexible working hours, remote work options, and comprehensive health benefits designed to support your well-being and promote a healthy, productive lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Culture */}
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/12.svg" alt="Team Culture Icon" />
                </div>
                <div className="details">
                  <p className="process-count">Step 04</p>
                  <h5 className="mb-3">Team Culture</h5>
                  <p className="content">
                    Thrive in a collaborative environment blending experienced professionals’ expertise with the agility, innovation, and entrepreneurial spirit of a startup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
