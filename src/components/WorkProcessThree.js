import React from "react";

const WorkProcessThree = () => {
  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div className='work-process-area pd-top-40 pd-bottom-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-9'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>APPLICATION PROCESS</h6>
                <h2 className='title'>
                  Streamlined <span>hiring</span> to find perfect fit.
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-work-process-inner-3 text-center'>
                <h2 className='process-count mb-2 color-base'>01.</h2>
                <h5 className='mb-4'>Apply Online</h5>
                <img src='assets/img/testimonial/15.jpg' alt='img' />
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-work-process-inner-3 text-center'>
                <h2 className='process-count mb-2 color-base'>02.</h2>
                <h5 className='mb-4'>Initial Screening</h5>
                <img src='assets/img/testimonial/19.jpeg' alt='img' />
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-work-process-inner-3 text-center'>
                <h2 className='process-count mb-2 color-base'>03.</h2>
                <h5 className='mb-4'>Technical&nbsp;Interview</h5> {/* 💡 Fixed line break */}
                <img src='assets/img/testimonial/17.png' alt='img' />
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-work-process-inner-3 text-center'>
                <h2 className='process-count mb-2 color-base'>04.</h2>
                <h5 className='mb-4'>Final Interview</h5>
                <img src='assets/img/testimonial/16.jpeg' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessThree;
