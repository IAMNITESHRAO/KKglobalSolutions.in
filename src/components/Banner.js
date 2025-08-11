// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <>
//       {/* ================== BannerOne Start ==================*/}
//       <div
//         className='banner-area bg-relative banner-area-1 pd-bottom-60 bg-cover'
//         style={{ backgroundImage: 'url("./assets/img/banner/0.png")' }}
//       >
//         <img
//           className='animate-img-1 top_image_bounce'
//           src='assets/img/banner/2.png'
//           alt='img'
//         />
//         <img
//           className='animate-img-2 left_image_bounce'
//           src='assets/img/banner/5.svg'
//           alt='img'
//         />
//         <div className='container'>
//           <div className='row'>
//             <div className='col-lg-6 align-self-center'>
//               <div className='banner-inner pe-xl-5'>
//                 <h6
//                   className='subtitle'
//                   data-aos='fade-right'
//                   data-aos-delay='100'
//                   data-aos-duration='1500'
//                 >
//                   SECURING THE FUTURE
//                 </h6>
//                 <h2
//                   className='title'
//                   data-aos='fade-right'
//                   data-aos-delay='200'
//                   data-aos-duration='1500'
//                 >
//                   Fortifying <span>Your Digital World</span> with Cutting-Edge Cybersecurity
//                 </h2>
//                 <p
//                   className='content pe-xl-5'
//                   data-aos='fade-right'
//                   data-aos-delay='250'
//                   data-aos-duration='1500'
//                 >
//                   Cyber threats never rest — and neither do we. At KK Global Solutions, we provide next-generation cybersecurity solutions that safeguard your business 24/7, ensuring relentless protection and peace of mind.
//                 </p>
//                 <Link
//                   className='btn btn-border-base'
//                   data-aos='fade-right'
//                   data-aos-delay='300'
//                   data-aos-duration='1500'
//                   to='/about'
//                 >
//                   Discover More <FaPlus />
//                 </Link>
//               </div>
//             </div>
//             <div className='col-xl-4 col-lg-5 col-md-8 offset-xl-2 offset-lg-1'>
//               <div
//                 className='banner-thumb mt-5 mt-lg-0 ms-4 ms-lg-0'
//                 data-aos='fade-left'
//                 data-aos-delay='100'
//                 data-aos-duration='1500'
//               >
//                 <img
//                   className='banner-animate-img banner-animate-img-1 top_image_bounce'
//                   src='assets/img/banner/2.png'
//                   alt='img'
//                 />
//                 <img
//                   className='banner-animate-img banner-animate-img-2'
//                   src='assets/img/banner/3.svg'
//                   alt='img'
//                 />
//                 <img
//                   className='banner-animate-img banner-animate-img-3 left_image_bounce'
//                   src='assets/img/banner/4.svg'
//                   alt='img'
//                 />
//                 <img
//                   className='main-img'
//                   src='assets/img/banner/image1.jpg'
//                   alt='img'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ================== BannerOne End ==================*/}
//     </>
//   );
// };

// export default Banner;


import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
  if (!data) return null;

  return (
    <div
      className='banner-area bg-relative banner-area-1 pd-bottom-60 bg-cover'
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      {data.decoration1 && (
        <img className='animate-img-1 top_image_bounce' src={data.decoration1} alt='decoration' />
      )}
      {data.decoration2 && (
        <img className='animate-img-2 left_image_bounce' src={data.decoration2} alt='decoration' />
      )}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 align-self-center'>
            <div className='banner-inner pe-xl-5'>
              <h6 className='subtitle' data-aos='fade-right' data-aos-delay='100' data-aos-duration='1500'>
                {data.subtitle}
              </h6>
              <h2 className='title' data-aos='fade-right' data-aos-delay='200' data-aos-duration='1500'>
                {data.title} <span>{data.highlight}</span>{data.Subhighlight}
              </h2>
              <p className='content pe-xl-5' data-aos='fade-right' data-aos-delay='250' data-aos-duration='1500'>
                {data.description}
              </p>
              {data.buttonText && data.buttonLink && (
                <Link
                  className='btn btn-border-base'
                  to={data.buttonLink}
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                >
                  {data.buttonText} <FaPlus />
                </Link>
              )}
            </div>
          </div>
          <div className='col-xl-4 col-lg-5 col-md-8 offset-xl-2 offset-lg-1'>
            <div className='banner-thumb mt-5 mt-lg-0 ms-4 ms-lg-0' data-aos='fade-left' data-aos-delay='100' data-aos-duration='1500'>
              {data.bannerAnimate1 && (
                <img className='banner-animate-img banner-animate-img-1 top_image_bounce' src={data.bannerAnimate1} alt='decor' />
              )}
              {data.bannerAnimate2 && (
                <img className='banner-animate-img banner-animate-img-2' src={data.bannerAnimate2} alt='decor' />
              )}
              {data.bannerAnimate3 && (
                <img className='banner-animate-img banner-animate-img-3 left_image_bounce' src={data.bannerAnimate3} alt='decor' />
              )}
              <img className='main-img' src={data.mainImage} alt='main' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
