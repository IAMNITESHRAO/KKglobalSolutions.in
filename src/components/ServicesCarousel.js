// import React, { useEffect, useRef } from 'react';

// const services = [
//   { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', icon: '🛡️' },
//   { title: 'Cybersecurity Consulting', icon: '🔐' },
//   { title: 'Web Application Security', icon: '🌐' },
//   { title: 'Content Marketing', icon: '📝' },
//   { title: 'Mobile App Development', icon: '📱' },
//   { title: 'E-commerce Solutions', icon: '🛒' },
// ];

// // Duplicate cards for seamless infinite effect
// const duplicatedServices = [...services, ...services, ...services];

// const ServicesCarousel = () => {
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     let start = null;

//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const elapsed = timestamp - start;

//       if (track) {
//         // Scroll speed control
//         track.scrollLeft += 0.5;

//         // Reset to start once scrolled past 1/3rd
//         if (track.scrollLeft >= track.scrollWidth / 3) {
//           track.scrollLeft = 0;
//         }
//       }

//       requestAnimationFrame(step);
//     };

//     requestAnimationFrame(step);
//   }, []);

//   return (
//     <div
//       style={{
//         width: '100%',
//         overflow: 'hidden',
//         backgroundColor: '#f4f8ff',
//         padding: '40px 0',
//       }}
//     >
//       <div
//         ref={trackRef}
//         style={{
//           display: 'flex',
//           overflow: 'hidden',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         {duplicatedServices.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               flex: '0 0 auto',
//               minWidth: '300px',
//               maxWidth: '320px',
//               margin: '0 12px',
//               background: '#fff',
//               borderRadius: '12px',
//               padding: '20px',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px',
//             }}
//           >
//             <div style={{ fontSize: '24px' }}>{item.icon}</div>
//             <div style={{ fontSize: '1rem', fontWeight: 600, color: '#333' }}>
//               {item.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesCarousel;


// import React, { useEffect, useRef } from 'react';

// const services = [
//   { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', icon: '🛡️' },
//   { title: 'Cybersecurity Consulting', icon: '🔐' },
//   { title: 'Web Application Security', icon: '🌐' },
//   { title: 'Content Marketing', icon: '📝' },
//   { title: 'Mobile App Development', icon: '📱' },
//   { title: 'E-commerce Solutions', icon: '🛒' },
// ];

// const ServicesCarousel = () => {
//   const containerRef = useRef(null);

//   // Duplicate content to enable infinite scroll
//   const fullList = [...services, ...services, ...services];

//   useEffect(() => {
//     const container = containerRef.current;
//     let animationFrame;
//     let scrollPos = container.scrollWidth / 3; // Start from middle

//     container.scrollLeft = scrollPos;

//     const scroll = () => {
//       scrollPos += 0.5; // Adjust scroll speed here

//       if (scrollPos >= (2 * container.scrollWidth) / 3) {
//         scrollPos = container.scrollWidth / 3; // Reset to middle
//       }

//       container.scrollLeft = scrollPos;
//       animationFrame = requestAnimationFrame(scroll);
//     };

//     animationFrame = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: '100%',
//         overflowX: 'scroll',
//         display: 'flex',
//         whiteSpace: 'nowrap',
//         scrollBehavior: 'auto',
//         backgroundColor: '#f8f8f8',
//         padding: '40px 0',
//       }}
//     >
//       {fullList.map((item, idx) => (
//         <div
//           key={idx}
//           style={{
//             minWidth: '300px',
//             margin: '0 10px',
//             backgroundColor: '#fff',
//             borderRadius: '10px',
//             padding: '20px',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//             flexShrink: 0,
//           }}
//         >
//           <span style={{ fontSize: '24px' }}>{item.icon}</span>
//           <span style={{ fontWeight: 600, color: '#333' }}>{item.title}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicesCarousel;
import React, { useEffect, useRef } from 'react';

const services = [
  { title: 'Application Security Testing', icon: '🔐' },         // Represents testing/security check
  { title: 'Cybersecurity Consulting', icon: '🛡️' },            // Consulting & protection
  { title: 'Network Penetration Testing', icon: '🌐' },         // Network/Internet based
  { title: 'CIS Benchmarks & Hardening Assessments', icon: '📊' }, // Benchmarking/report
  { title: 'Awareness Drills', icon: '🎯' },                    // Targeted training
  { title: 'Phishing Simulation', icon: '📱' },                 // 🎣 = "phishing" pun
  { title: 'Web Development', icon: '💻' },                     // Web & code
  { title: 'Source Code Analysis', icon: '📝' },                // Deep code inspection
];


const ServicesCarousel = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 0.5; // adjust as needed

  useEffect(() => {
    const container = containerRef.current;

    // Start from center
    container.scrollLeft = container.scrollWidth / 3;

    let animationFrame;

    const scroll = () => {
      container.scrollLeft -= scrollSpeed;

      // Reset to middle if we're near the beginning
      if (container.scrollLeft <= container.scrollWidth / 3 / 10) {
        container.scrollLeft = container.scrollWidth / 3;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const repeated = [...services, ...services, ...services]; // Repeat for loop

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        background: '#f8faff',
        padding: '40px 0',
        scrollBehavior: 'auto',
      }}
    >
      <div style={{ display: 'inline-flex' }}>
        {repeated.map((item, idx) => (
          <div
            key={idx}
            style={{
              minWidth: '300px',
              margin: '0 12px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <span style={{ fontWeight: 600, color: '#333' }}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
