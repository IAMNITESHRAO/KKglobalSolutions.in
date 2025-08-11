// import React from 'react';
// import {
//   FaArrowRight,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaPhoneAlt,
//   FaTwitter,
//   FaYoutube,
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <>
//       {/* ================== Footer One Start ==================*/}
//       <footer className="footer-area bg-black bg-cover">
//         <div className="footer-subscribe">
//           <div className="container">
//             <div
//               className="footer-subscribe-inner bg-cover"
//               style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
//             >
//               <div className="row">
//                 <div className="col-lg-6">
//                   <h2 className="mb-lg-0 mb-3">Subscribe To Our Newsletter</h2>
//                 </div>
//                 <div className="col-lg-6 align-self-center text-lg-end">
//                   <input type="text" placeholder="Your e-mail address" />
//                   <Link className="btn btn-black border-radius-0" to="#">
//                     Submit now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <div className="widget widget_about">
//                 <div className="thumb">
//                   <img src="assets/img/kklogo.png" alt="img" />
//                 </div>
//                 <div className="details">
//                   <p>
//                     Securing Your Digital Future, Globally.
//                   </p>
//                   {/* <p className="mt-3">
//                     <FaPhoneAlt /> (+888) 123 456 765
//                   </p>
//                   <p className="mt-2">
//                     <FaEnvelope /> (+888) 123 456 765
//                   </p> */}
//                   {/* <ul className="social-media">
//                     <li>
//                       <Link to="#">
//                         <FaFacebookF />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#">
//                         <FaTwitter />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#">
//                         <FaInstagram />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#">
//                         <FaYoutube />
//                       </Link>
//                     </li>
//                   </ul> */}
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="widget widget_nav_menu">
//                 <h4 className="widget-title">Our Service</h4>
//                 <ul>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Application Security Testing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Web Development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Network Penetration Testing{' '}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Source Code Analysis
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Phishing Simulation
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Awareness Drills
//                     </Link>
//                   </li>
//                    <li>
//                     <Link to="/service">
//                       <FaArrowRight /> CIS Benchmarks & Hardening Assessments
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="widget widget_nav_menu">
//                 <h4 className="widget-title">Quick Links</h4>
//                 <ul>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/about">
//                       <FaArrowRight /> About Us{' '}
//                     </Link>
//                   </li>
                  
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Career
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Contact Us{' '}
//                     </Link>
//                   </li>
//                   {/* <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Reasearch sector
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/service">
//                       <FaArrowRight /> Finance Sector
//                     </Link>
//                   </li> */}
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="widget widget-recent-post">
//                 <h4 className="widget-title">Contact us</h4>
//               <div className="widget widget_about">
                
//                 <div className="details">
//                   <p className="mt-3">
//                     <FaPhoneAlt /> +91 84332 13907
//                   </p>
//                   <p className="mt-3">
//                     <FaPhoneAlt /> +91 8273059938
//                   </p>
//                   <p className="mt-2">
//                     <FaEnvelope /> info.kkglobalsolutions.in
//                   </p>
//                   <ul className="social-media">
//                     <li>
//                       <Link to="https://www.linkedin.com/company/kk-global-solutions/">
//                         <FaLinkedin />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="https://x.com/Kk_global_sol?t=lx00rGHyg3pVqXCBJle1Kw&s=09">
//                         <FaTwitter />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="https://www.instagram.com/kkglobalsolutions/profilecard/?igsh=d3FzNWh0bWd0aDk2">
//                         <FaInstagram />
//                       </Link>
//                     </li>
//                     {/* <li>
//                       <Link to="#">
//                         <FaYoutube />
//                       </Link>
//                     </li> */}
//                   </ul>
//                 </div>
//                 {/* <ul>
//                   <li>
//                     <div className="media">
//                       <div className="media-left">
//                         <img src="assets/img/widget/1.png" alt="blog" />
//                       </div>
//                       <div className="media-body align-self-center">
//                         <div className="post-info mb-2">
//                           <FaCalendarAlt />
//                           <span>january 11, 2023</span>
//                         </div>
//                         <h6 className="title mb-0">
//                           <Link to="/blog-details">
//                             Social Media For Promote Business.
//                           </Link>
//                         </h6>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="media">
//                       <div className="media-left">
//                         <img src="assets/img/widget/2.png" alt="blog" />
//                       </div>
//                       <div className="media-body align-self-center">
//                         <div className="post-info mb-2">
//                           <FaCalendarAlt />
//                           <span>january 11, 2023</span>
//                         </div>
//                         <h6 className="title mb-0">
//                           <Link to="/blog-details">
//                             Marketing For Base market watch
//                           </Link>
//                         </h6>
//                       </div>
//                     </div>
//                   </li>
//                 </ul> */}
//               </div>
//               </div>
//               </div>
//             </div>
//         </div>
//         <div className="footer-bottom">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 align-self-center">
//                 <p>© kkglobalsolutions 2025 | All Rights Reserved</p>
//               </div>
//               <div className="col-md-6 text-lg-end">
//                 <Link to="#">Terms &amp; Condition</Link>
//                 <Link to="#">Privacy Policy</Link>
//                 <Link to="#">Contact Us</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* ================== Footer One  end ==================*/}
//     </>
//   );
// };

// export default Footer;


import React from 'react';
import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Subscribe To Our Newsletter</h2>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-black border-radius-0" to="#">
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            {/* About Widget */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/kklogo.png" alt="img" />
                </div>
                <div className="details">
                  <p>Securing Your Digital Future, Globally.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li><Link to="/service"><FaArrowRight /> Application Security Testing</Link></li>
                  <li><Link to="/service"><FaArrowRight /> Web Development</Link></li>
                  <li><Link to="/service"><FaArrowRight /> Network Penetration Testing</Link></li>
                  <li><Link to="/service"><FaArrowRight /> Source Code Analysis</Link></li>
                  <li><Link to="/service"><FaArrowRight /> Phishing Simulation</Link></li>
                  <li><Link to="/service"><FaArrowRight /> Awareness Drills</Link></li>
                  <li><Link to="/service"><FaArrowRight /> CIS Benchmarks & Hardening Assessments</Link></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li><Link to="/"><FaArrowRight /> Home</Link></li>
                  <li><Link to="/service"><FaArrowRight /> Services</Link></li>
                  <li><Link to="/about"><FaArrowRight /> About Us</Link></li>
                  <li><Link to="/careers"><FaArrowRight /> Career</Link></li>
                  <li><Link to="/contact"><FaArrowRight /> Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <h4 className="widget-title">Contact us</h4>
                <div className="details">
                  <p className="mt-3"><FaPhoneAlt /> +91 84332 13907</p>
                  <p className="mt-3"><FaPhoneAlt /> +91 8273059938</p>
                  <p className="mt-2"><FaEnvelope /> info@kkglobalsolutions.in</p>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/kk-global-solutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/Kk_global_sol?t=lx00rGHyg3pVqXCBJle1Kw&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/kkglobalsolutions/profilecard/?igsh=d3FzNWh0bWd0aDk2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© kkglobalsolutions 2025 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link to="#">Terms &amp; Condition</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One End ==================*/}
    </>
  );
};

export default Footer;
