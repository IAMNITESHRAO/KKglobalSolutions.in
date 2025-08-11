// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// const ServiceAreaGroup = () => {
//   return (
//     <>
//       {/* service area start */}
//       <div className="service-area bg-relative pd-top-40">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-md-6">
//               <div className="single-work-process-inner">
//                 <div className="thumb mb-4">
//                   <img src="assets/img/icon/18.svg" alt="img" />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-3">Web Development</h5>
//                   <p className="content mb-3">
//                     Research ipsum dolor sit consec tetur sed diam in the
//                     aliquam tempor
//                   </p>
//                   <Link className="read-more-text" to="/service-details">
//                     Read More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-work-process-inner">
//                 <div className="thumb mb-3">
//                   <img src="assets/img/icon/16.svg" alt="img" />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-3">Big Data Analytics</h5>
//                   <p className="content mb-3">
//                     Create ipsum dolor sit consec tetur sed diam in the aliquam
//                     tempor
//                   </p>
//                   <Link className="read-more-text" to="/service-details">
//                     Read More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-work-process-inner">
//                 <div className="thumb mb-3">
//                   <img src="assets/img/icon/17.svg" alt="img" />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-3">Cyber security</h5>
//                   <p className="content mb-3">
//                     Develope ipsum dolor sit consec tetur sed diam in the
//                     aliquam tempor
//                   </p>
//                   <Link className="read-more-text" to="/service-details">
//                     Read More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-work-process-inner">
//                 <div className="thumb mb-3">
//                   <img src="assets/img/icon/20.svg" alt="img" />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-3">Mobile App</h5>
//                   <p className="content mb-3">
//                     Shop ipsum dolor sit consec tetur Malesuada sed diam in the
//                     tempor
//                   </p>
//                   <Link className="read-more-text" to="/service-details">
//                     Read More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-work-process-inner">
//                 <div className="thumb mb-4">
//                   <img src="assets/img/icon/18.svg" alt="img" />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-3">Web Development</h5>
//                   <p className="content mb-3">
//                     Research ipsum dolor sit consec tetur sed diam in the
//                     aliquam
//                   </p>
//                   <Link className="read-more-text" to="/service-details">
//                     Read More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-work-process-inner">
//                 <div className="thumb mb-3">
//                   <img src="assets/img/icon/16.svg" alt="img" />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-3">Big Data Analytics</h5>
//                   <p className="content mb-3">
//                     Create ipsum dolor sit consec tetur sed diam in the aliquam
//                   </p>
//                   <Link className="read-more-text" to="/service-details">
//                     Read More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* service area end */}
//     </>
//   );
// };

// export default ServiceAreaGroup;


// import React, { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';

// const services = [
//   {
//     title: 'Web Development',
//     icon: 'assets/img/icon/18.svg',
//     summary: 'Research ipsum dolor sit consec tetur sed diam in the aliquam tempor',
//     moreContent: 'We build scalable, responsive, and high-performance websites tailored to your business needs using the latest tech stack and development practices.'
//   },
//   {
//     title: 'Big Data Analytics',
//     icon: 'assets/img/icon/16.svg',
//     summary: 'Create ipsum dolor sit consec tetur sed diam in the aliquam tempor',
//     moreContent: 'We help you derive actionable insights from your data using modern analytics tools, ensuring smarter business decisions and measurable outcomes.'
//   },
//   {
//     title: 'Cyber Security',
//     icon: 'assets/img/icon/17.svg',
//     summary: 'Develope ipsum dolor sit consec tetur sed diam in the aliquam tempor',
//     moreContent: 'Our cybersecurity experts assess vulnerabilities and implement robust security layers to protect your digital infrastructure from evolving threats.'
//   },
//   {
//     title: 'Mobile App',
//     icon: 'assets/img/icon/20.svg',
//     summary: 'Shop ipsum dolor sit consec tetur Malesuada sed diam in the tempor',
//     moreContent: 'From iOS to Android, we design and develop mobile apps that are user-friendly, fast, and optimized for high engagement and conversions.'
//   },
// ];

// const ServiceAreaGroup = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleReadMore = (index) => {
//     setActiveIndex(prev => (prev === index ? null : index));
//   };

//   return (
//     <div className="service-area bg-relative pd-top-40">
//       <div className="container">
//         <div className="row">
//           {services.map((service, index) => (
//             <div className="col-lg-4 col-md-6 mb-4" key={index}>
//               <div className="single-work-process-inner p-3 border rounded shadow-sm h-100">
//                 <div className="thumb mb-3">
//                   <img src={service.icon} alt={service.title} style={{ width: '60px' }} />
//                 </div>
//                 <div className="details">
//                   <h5 className="mb-2">{service.title}</h5>
//                   <p className="mb-3">{service.summary}</p>
//                   <button
//                     className="read-more-text btn btn-link p-0 text-primary"
//                     onClick={() => toggleReadMore(index)}
//                   >
//                     {activeIndex === index ? 'Hide Details' : 'Read More'} <FaArrowRight />
//                   </button>
//                   <div
//                     style={{
//                       maxHeight: activeIndex === index ? '200px' : '0',
//                       overflow: 'hidden',
//                       transition: 'max-height 0.4s ease',
//                       opacity: activeIndex === index ? 1 : 0,
//                       paddingTop: activeIndex === index ? '10px' : '0',
//                     }}
//                   >
//                     <p className="text-muted">{service.moreContent}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceAreaGroup;


import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Grouped service cards
const services = [
  [
    {
      title: 'Web Development',
      icon: 'assets/img/icon/18.svg',
      summary: 'Research ipsum dolor sit consec tetur sed diam in the aliquam tempor',
      moreContent:
        'We build scalable, responsive, and high-performance websites tailored to your business needs using the latest tech stack and development practices.',
    },
    {
      title: 'Big Data Analytics',
      icon: 'assets/img/icon/16.svg',
      summary: 'Create ipsum dolor sit consec tetur sed diam in the aliquam tempor',
      moreContent:
        'We help you derive actionable insights from your data using modern analytics tools, ensuring smarter business decisions and measurable outcomes.',
    },
    {
      title: 'Cyber Security',
      icon: 'assets/img/icon/17.svg',
      summary: 'Develope ipsum dolor sit consec tetur sed diam in the aliquam tempor',
      moreContent:
        'Our cybersecurity experts assess vulnerabilities and implement robust security layers to protect your digital infrastructure from evolving threats.',
    },
  ],
  [
    {
      title: 'Mobile App',
      icon: 'assets/img/icon/20.svg',
      summary: 'Shop ipsum dolor sit consec tetur Malesuada sed diam in the tempor',
      moreContent:
        'From iOS to Android, we design and develop mobile apps that are user-friendly, fast, and optimized for high engagement and conversions.',
    },
    {
      title: 'AI & ML',
      icon: 'assets/img/icon/21.svg',
      summary: 'Implement AI-driven solutions to automate and optimize processes intelligently.',
      moreContent:
        'We create custom AI/ML solutions for classification, prediction, recommendation systems, and automation tailored to business use cases.',
    },
    {
      title: 'UI/UX Design',
      icon: 'assets/img/icon/22.svg',
      summary: 'Design pixel-perfect UI experiences that improve usability and conversions.',
      moreContent:
        'Our UX designers craft intuitive interfaces that deliver exceptional user experiences, ensuring high retention and satisfaction rates.',
    },
  ],
];

const ServiceAreaGroup = () => {
  // activeIndex per row
  const [activeIndices, setActiveIndices] = useState(Array(services.length).fill(null));

  const toggleCard = (rowIdx, colIdx) => {
    setActiveIndices((prev) =>
      prev.map((val, idx) => (idx === rowIdx ? (val === colIdx ? null : colIdx) : val))
    );
  };

  return (
    <div className="service-area bg-relative pd-top-40 py-5 px-4">
      <div className="container">
        {services.map((row, rowIdx) => (
          <div className="row mb-4" key={rowIdx}>
            {row.map((service, colIdx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={colIdx}>
                <div className="single-work-process-inner p-3 border rounded shadow-sm h-100">
                  <div className="thumb mb-3">
                    <img src={service.icon} alt={service.title} style={{ width: '60px' }} />
                  </div>
                  <div className="details">
                    <h5 className="mb-2">{service.title}</h5>
                    <p className="mb-3">{service.summary}</p>
                    <button
                      className="read-more-text btn btn-link p-0 text-primary"
                      onClick={() => toggleCard(rowIdx, colIdx)}
                    >
                      {activeIndices[rowIdx] === colIdx ? 'Hide Details' : 'Read More'}{' '}
                      <FaArrowRight
                        className={`transition-transform ms-1 ${
                          activeIndices[rowIdx] === colIdx ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    <div
                      style={{
                        maxHeight: activeIndices[rowIdx] === colIdx ? '200px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease, opacity 0.4s ease',
                        opacity: activeIndices[rowIdx] === colIdx ? 1 : 0,
                        paddingTop: activeIndices[rowIdx] === colIdx ? '10px' : '0',
                      }}
                    >
                      <p className="text-muted">{service.moreContent}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreaGroup;
