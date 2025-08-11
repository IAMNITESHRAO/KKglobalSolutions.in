// import React, { useEffect, useRef } from 'react';

// const ChallengesCarousel = () => {
//   const trackRef = useRef(null);

//   const challenges = [
//     {
//       title: 'Comprehensive Scanner',
//       text: 'Our intelligent scanner finds issues that other pentests often miss.',
//     },
//     {
//       title: 'Collaborative Dashboard',
//       text: 'Seamlessly collaborate with your team members, CXOs and our security experts.',
//     },
//     {
//       title: 'Industry-recognized Certificate',
//       text: 'Build trust among customers and partners with a security certificate.',
//     },
//     {
//       title: 'Real-time, Expert Support',
//       text: 'Get support from security experts right within your dashboard.',
//     },
//   ];

//   // Duplicate cards to make seamless scroll
//   const repeatedChallenges = [...challenges, ...challenges, ...challenges];

//   useEffect(() => {
//     const track = trackRef.current;
//     let animationFrame;
//     let pos = 0;

//     const animate = () => {
//       pos -= 0.5; // Speed of scroll
//       if (Math.abs(pos) >= track.scrollWidth / 3) {
//         pos = 0; // Reset for seamless loop
//       }
//       track.style.transform = `translateX(${pos}px)`;
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <div style={{ padding: '60px 20px', backgroundColor: '#f8f8f8', overflow: 'hidden' }}>
//       <div style={{ overflow: 'hidden', width: '100%' }}>
//         <div
//           ref={trackRef}
//           style={{
//             display: 'flex',
//             width: 'max-content',
//             whiteSpace: 'nowrap',
//           }}
//         >
//           {repeatedChallenges.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 minWidth: '320px',
//                 maxWidth: '420px',
//                 backgroundColor: '#fff',
//                 borderRadius: '10px',
//                 margin: '0 10px',
//                 padding: '30px 20px',
//                 textAlign: 'center',
//                 boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                 flexShrink: 0,
//               }}
//             >
//               <img
//                 src="https://cdn.prod.website-files.com/5f80230f2eb0ba0ee5a95589/67587870f501acb159c22b3e_challenge2.webp"
//                 alt="icon"
//                 style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '20px' }}
//               />
//               <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
//                 {item.title}
//               </div>
//               <p style={{ fontSize: '1rem', color: '#555' }}>{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChallengesCarousel;



import React, { useEffect, useRef } from 'react';

const ChallengesCarousel = () => {
  const trackRef = useRef(null);

//   const reviews = [
//   {
//     quote:
//       '“Lawactive is thrilled with KK Global Solution. They flawlessly delivered our cybersecurity project and proactively identified critical issues, greatly improving our security.”',
//     name: 'Lawactive',
//     logo: 'https://media.licdn.com/dms/image/v2/C560BAQHX7c4p-cyL7A/company-logo_200_200/company-logo_200_200/0/1630639083700/lawactive_logo?e=1757548800&v=beta&t=KS6KCJ9bGOP9nOelqDd48qJPCWBqrNoGZ11rEI2tICk',
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     quote:
//       '“Heygoldie was impressed with KK Global Solution’s expertise. They completed our project seamlessly and reported numerous vulnerabilities, strengthening our defenses.”',
//     name: 'Heygoldie',
//     logo: 'https://media.licdn.com/dms/image/v2/C560BAQGFwKv8uNPmaQ/company-logo_200_200/company-logo_200_200/0/1668436653085/heygoldie_logo?e=1757548800&v=beta&t=wDg-gxxgHrK4Z4nHOcvzxyfB7LBixnpt5cXkdkjt8CA',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     quote:
//       '“HeyJobs GmbH found KK Global Solution outstanding. Their thorough work uncovered crucial flaws we didn’t know about, making us far more secure.”',
//     name: 'HeyJobs GmbH',
//     logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGJ1u3FhxMC-w/company-logo_200_200/company-logo_200_200/0/1689078778536/heyjobs_logo?e=1757548800&v=beta&t=PucOwI83TDvvdrsVZGe2RgIag0ymxCIDDjwt9CqxcW4',
//     avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
//   },
//   {
//     quote:
//       '“Municipality of Súdwest-Fryslân had an exceptional experience with KK Global Solution. Their proactive reporting of vulnerabilities greatly enhanced our resilience.”',
//     name: 'Municipality of Súdwest-Fryslân',
//     logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGVkVvsMdP7KQ/company-logo_200_200/company-logo_200_200/0/1657535414761/eam_trusted_advisor_gmbh_logo?e=1757548800&v=beta&t=-SZJi6CDowpoBkNdIctPKQEMne313JbNABxMimmpUWY',
//     avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
//   },
//   {
//     quote:
//       '“Conveyor Inc. is now much more secure thanks to KK Global Solution. They handled our cybersecurity project with professionalism and precision.”',
//     name: 'Conveyor Inc.',
//     logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFVWWDVNQf8oQ/company-logo_200_200/company-logo_200_200/0/1631328784511?e=1757548800&v=beta&t=eQFeEt4vmX_keKKyABpN-ourtYPo9YrMtWiV8pa28y0',
//     avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
//   },
//   {
//     quote:
//       '“Trusted GmbH received outstanding service from KK Global Solution. Their flawless execution and vulnerability reports significantly strengthened our protection.”',
//     name: 'Trusted GmbH',
//     logo: 'https://cdn-icons-png.flaticon.com/512/732/732244.png',
//     avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
//   },
// ];

const reviews = [
  {
    quote:
      '“KK Global Solution didn’t just finish the job — they spotted risks we hadn’t even considered. Lawactive feels far more secure now.”',
    name: 'Lawactive',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQHX7c4p-cyL7A/company-logo_200_200/company-logo_200_200/0/1630639083700/lawactive_logo?e=1757548800&v=beta&t=KS6KCJ9bGOP9nOelqDd48qJPCWBqrNoGZ11rEI2tICk',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      '“Smooth process from start to finish. KK Global Solution handled everything and even uncovered security gaps we could fix right away.”',
    name: 'Heygoldie',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQGFwKv8uNPmaQ/company-logo_200_200/company-logo_200_200/0/1668436653085/heygoldie_logo?e=1757548800&v=beta&t=wDg-gxxgHrK4Z4nHOcvzxyfB7LBixnpt5cXkdkjt8CA',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      '“Honestly, I was expecting a regular audit, but KK Global Solution went deeper than we imagined. They found and explained every hidden flaw.”',
    name: 'HeyJobs GmbH',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGJ1u3FhxMC-w/company-logo_200_200/company-logo_200_200/0/1689078778536/heyjobs_logo?e=1757548800&v=beta&t=PucOwI83TDvvdrsVZGe2RgIag0ymxCIDDjwt9CqxcW4',
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    quote:
      '“Their team didn’t just tick boxes — they genuinely cared about making us safer. That proactive attitude made all the difference for us.”',
    name: 'Municipality of Súdwest-Fryslân',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGVkVvsMdP7KQ/company-logo_200_200/company-logo_200_200/0/1657535414761/eam_trusted_advisor_gmbh_logo?e=1757548800&v=beta&t=-SZJi6CDowpoBkNdIctPKQEMne313JbNABxMimmpUWY',
    avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    quote:
      '“We’ve worked with security vendors before, but KK Global Solution’s attention to detail was on another level. Our systems feel rock solid now.”',
    name: 'Conveyor Inc.',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFVWWDVNQf8oQ/company-logo_200_200/company-logo_200_200/0/1631328784511?e=1757548800&v=beta&t=eQFeEt4vmX_keKKyABpN-ourtYPo9YrMtWiV8pa28y0',
    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    quote:
      '“What stood out for me was how fast they worked without cutting corners. KK Global Solution’s reports gave us clear fixes we could apply instantly.”',
    name: 'Trusted GmbH',
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732244.png',
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
];


  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    let animationFrameId;
    let pos = 0;

    const animate = () => {
      if (track) {
        pos -= 0.5;
        if (Math.abs(pos) >= track.scrollWidth / 3) {
          pos = 0;
        }
        track.style.transform = `translateX(${pos}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f8f8f8', overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            width: 'max-content',
            whiteSpace: 'nowrap',
          }}
        >
          {repeatedReviews.map((item, index) => (
            <div
              key={index}
              style={{
                minWidth: '320px',
                maxWidth: '420px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                margin: '0 12px',
                padding: '30px 24px',
                textAlign: 'left',
                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                }}
              >
                {item.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <img
                  src={item.avatar}
                  alt="avatar"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '12px' }}
                />
                <div>
                  <strong style={{ fontSize: '1rem', color: '#222' }}>{item.name}</strong>
                  <div style={{ fontSize: '0.85rem', color: '#777' }}>{item.title}</div>
                </div>
                <img
                  src={item.logo}
                  alt="logo"
                  style={{ width: '30px', height: '30px', marginLeft: 'auto' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesCarousel;


// import React, { useEffect, useRef } from 'react';

// const ChallengesCarousel = () => {
//   const trackRef = useRef(null);

//   const reviews = [
//     {
//       quote:
//         '“CyberSec Pro helped us identify critical security flaws. Their Slack-based communication and Jira integration ensured smooth collaboration.”',
//       name: 'Aarav Mehta',
//       title: 'CTO, SecureSphere',
//       logo: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
//       avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//       quote:
//         '“Our development cycle was faster thanks to their real-time feedback and expert-guided resolution. Truly impressive service!”',
//       name: 'Samantha Roy',
//       title: 'VP Engineering, CodeWorks',
//       logo: 'https://cdn-icons-png.flaticon.com/512/732/732244.png',
//       avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//     {
//       quote:
//         '“We loved how simple and user-friendly the platform was. Our audit process improved by 40% using their continuous review feature.”',
//       name: 'Rohan Kapoor',
//       title: 'Head of IT, FinEdge',
//       logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
//       avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
//     },
//     {
//       quote:
//         '“Their support team was always available on Slack, and their integration with GitHub was a game-changer for our DevSecOps.”',
//       name: 'Divya Sharma',
//       title: 'Security Lead, DevMatrix',
//       logo: 'https://cdn-icons-png.flaticon.com/512/732/732219.png',
//       avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
//     },
//   ];

//   const repeatedReviews = [...reviews, ...reviews, ...reviews];

//   useEffect(() => {
//     const track = trackRef.current;
//     let animationFrameId;
//     let pos = 0;

//     const animate = () => {
//       if (track) {
//         pos -= 0.5;
//         if (Math.abs(pos) >= track.scrollWidth / 3) {
//           pos = 0;
//         }
//         track.style.transform = `translateX(${pos}px)`;
//       }
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div style={{ padding: '60px 20px', backgroundColor: '#f8f8f8', overflow: 'hidden' }}>
//       <div style={{ overflow: 'hidden', width: '100%' }}>
//         <div
//           ref={trackRef}
//           style={{
//             display: 'flex',
//             whiteSpace: 'nowrap',
//             width: 'max-content',
//           }}
//         >
//           {repeatedReviews.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 minWidth: '320px',
//                 maxWidth: '420px',
//                 backgroundColor: '#fff',
//                 borderRadius: '12px',
//                 margin: '0 12px',
//                 padding: '30px 24px',
//                 textAlign: 'left',
//                 boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
//                 flexShrink: 0,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//               }}
//             >
//               <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.6', marginBottom: '24px' }}>
//                 {item.quote}
//               </p>
//               <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
//                 <img
//                   src={item.avatar}
//                   alt="avatar"
//                   style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '12px' }}
//                 />
//                 <div>
//                   <strong style={{ fontSize: '1rem', color: '#222' }}>{item.name}</strong>
//                   <div style={{ fontSize: '0.85rem', color: '#777' }}>{item.title}</div>
//                 </div>
//                 <img
//                   src={item.logo}
//                   alt="logo"
//                   style={{ width: '30px', height: '30px', marginLeft: 'auto' }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChallengesCarousel;



// import React from 'react';

// const ChallengesCarousel = () => {
//   const challenges = [
//     {
//       title: 'Comprehensive Scanner',
//       text: 'Our intelligent scanner finds issues that other pentests often miss.',
//     },
//     {
//       title: 'Collaborative Dashboard',
//       text: 'Seamlessly collaborate with your team members, CXOs and our security experts.',
//     },
//     {
//       title: 'Industry-recognized Certificate',
//       text: 'Build trust among customers and partners with a security certificate.',
//     },
//     {
//       title: 'Real-time, Expert Support',
//       text: 'Get support from security experts right within your dashboard.',
//     },
//   ];

//   return (
//     <div style={{ padding: '60px 20px', backgroundColor: '#f8f8f8' }}>
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           gap: '20px',
//         }}
//       >
//         {challenges.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               width: '100%',
//               maxWidth: '360px',
//               backgroundColor: '#fff',
//               borderRadius: '10px',
//               padding: '30px 20px',
//               textAlign: 'center',
//               boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//               flex: '1 1 300px',
//             }}
//           >
//             <img
//               src="https://cdn.prod.website-files.com/5f80230f2eb0ba0ee5a95589/67587870f501acb159c22b3e_challenge2.webp"
//               alt="icon"
//               style={{
//                 width: '80px',
//                 height: '80px',
//                 objectFit: 'contain',
//                 marginBottom: '20px',
//               }}
//             />
//             <div
//               style={{
//                 fontSize: '1.2rem',
//                 fontWeight: 'bold',
//                 marginBottom: '10px',
//                 color: '#333',
//               }}
//             >
//               {item.title}
//             </div>
//             <p style={{ fontSize: '1rem', color: '#555' }}>{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChallengesCarousel;

