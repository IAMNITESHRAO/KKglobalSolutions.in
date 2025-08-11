// import React from "react";

// const WorkProcess = () => {
//   return (
//     <>
//       {/*==================== Work Process One start ====================*/}
//       <div className='work-process-area pd-top-40 '>
//         <div className='container'>
//           <div className='section-title text-center'>
//             <h6 className='sub-title'>OUR SIMPLE PROCESS</h6>
//             <h2 className='title'>
//               World <span>Best Step</span> Our It Process
//             </h2>
//           </div>
//           <div className='row'>
//             <div className='col-xl-3 col-md-6'>
//               <div className='single-work-process-inner'>
//                 <div className='thumb mb-3'>
//                   <img src='assets/img/icon/9.svg' alt='img' />
//                 </div>
//                 <div className='details'>
//                   <p className='process-count'>Work 01</p>
//                   <h5 className='mb-3'>Software Research</h5>
//                   <p className='content'>
//                     Research ipsum dolor sit consec tetur sed diam in the
//                     aliquam tempor
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='col-xl-3 col-md-6'>
//               <div className='single-work-process-inner'>
//                 <div className='thumb mb-3'>
//                   <img src='assets/img/icon/10.svg' alt='img' />
//                 </div>
//                 <div className='details'>
//                   <p className='process-count'>Work 02</p>
//                   <h5 className='mb-3'>Create Programs</h5>
//                   <p className='content'>
//                     Create ipsum dolor sit consec tetur sed diam in the aliquam
//                     tempor
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='col-xl-3 col-md-6'>
//               <div className='single-work-process-inner'>
//                 <div className='thumb mb-3'>
//                   <img src='assets/img/icon/11.svg' alt='img' />
//                 </div>
//                 <div className='details'>
//                   <p className='process-count'>Work 03</p>
//                   <h5 className='mb-3'>Develope Software</h5>
//                   <p className='content'>
//                     Develope ipsum dolor sit consec tetur sed diam in the
//                     aliquam tempor
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='col-xl-3 col-md-6'>
//               <div className='single-work-process-inner'>
//                 <div className='thumb mb-3'>
//                   <img src='assets/img/icon/12.svg' alt='img' />
//                 </div>
//                 <div className='details'>
//                   <p className='process-count'>Work 04</p>
//                   <h5 className='mb-3'>Shop software</h5>
//                   <p className='content'>
//                     Shop ipsum dolor sit consec tetur Malesuada sed diam in the
//                     aliquam tempor
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ==================== Work Process One end ====================*/}
//     </>
//   );
// };

// export default WorkProcess;

import React from "react";

const WorkProcess = ({ data, subtitle, title }) => {
  return (
    <div className="work-process-area pd-top-40">
      <div className="container">
        <div className="section-title text-center">
          {subtitle && <h6 className="sub-title">{subtitle}</h6>}
          {title && (
            <h2 className="title">
              {title.split(" ").map((word, i) =>
                i === 1 ? <span key={i}>{word} </span> : `${word} `
              )}
            </h2>
          )}
        </div>
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src={item.icon} alt={`step-${index}`} />
                </div>
                <div className="details">
                  <p className="process-count">{`Work ${index + 1}`}</p>
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="content">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;

