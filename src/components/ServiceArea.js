// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import serviceList from "../scripts/serviceList";

// const ServiceArea = () => {
//   return (
//     <>
//       {/*=================== service area start ===================*/}
//       <div className='service-area bg-relative pd-top-40'>
//         <img
//           className='position-bottom-left top_image_bounce'
//           src='assets/img/icon/4.png'
//           alt='img'
//         />
//         <div className='container'>
//           <div className='section-title text-center'>
//             <h6 className='sub-title'>CREATIVE SERVICES</h6>
//             <h2 className='title'>
//               Your Partner In <span>Digital</span> Success
//             </h2>
//           </div>
//           <div className='row'>
//             {serviceList.slice(0, 6).map((data, index) => (
//               <div className='col-lg-4 col-md-6' key={index}>
//                 <div className='single-service-inner text-center'>
//                   <div className='thumb'>
//                     <img src={data.img} alt='img' />
//                   </div>
//                   <div className='details'>
//                     <h5>
//                       <Link to='/service-details'>{data.title}</Link>
//                     </h5>
//                     <p>{data.des}</p>
//                     <Link className='btn btn-border-base' to='/service-details'>
//                       Touch More <FaPlus />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* =================== service area end ===================*/}
//     </>
//   );
// };

// export default ServiceArea;

import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceDetailsList from "../scripts/serviceDetailsList";

const ServiceArea = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area bg-relative pd-top-40">
        <img
          className="position-bottom-left top_image_bounce"
          src="assets/img/icon/4.png"
          alt="decor"
        />
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">CREATIVE SERVICES</h6>
            <h2 className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row">
            {serviceDetailsList.slice(0, 6).map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-service-inner text-center">
                  <div className="thumb">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="details">
                    <h5>
                      <Link to={`/service-details/${service.id}`}>
                        {service.title}
                      </Link>
                    </h5>
                    <p>{service.description1.slice(0, 100)}...</p>
                    <Link
                      className="btn btn-border-base"
                      to={`/service-details/${service.id}`}
                    >
                      Touch More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceArea;



// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import serviceList from "../scripts/serviceList";

// const ServiceArea = () => {
//   return (
//     <>
//       {/*=================== service area start ===================*/}
//       <div className='service-area bg-relative pd-top-40'>
//         <img
//           className='position-bottom-left top_image_bounce'
//           src='assets/img/icon/4.png'
//           alt='img'
//         />
//         <div className='container'>
//           <div className='section-title text-center'>
//             <h6 className='sub-title'>CREATIVE SERVICES</h6>
//             <h2 className='title'>
//               Your Partner In <span>Digital</span> Success
//             </h2>
//           </div>
//           <div className='row'>
//             {serviceList.slice(0, 6).map((data, index) => (
//               <div className='col-lg-4 col-md-6' key={index}>
//                 <div className='single-service-inner text-center'>
//                   <div className='thumb'>
//                     <img src={data.img} alt='img' />
//                   </div>
//                   <div className='details'>
//                     <h5>
//                       <Link to={`/service-details/${data.id}`}>{data.title}</Link>
//                     </h5>
//                     <Link className='btn btn-border-base' to={`/service-details/${data.id}`}>
//                       Touch More <FaPlus />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* =================== service area end ===================*/}
//     </>
//   );
// };

// export default ServiceArea;
