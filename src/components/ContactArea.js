// import React from 'react';
// import { Link } from 'react-router-dom';

// const ContactArea = () => {
//   return (
//     <>
//       {/* ========================= contact Area One start =========================*/}
//       <div className="contact-area">
//         <div className="container">
//           <div className="contact-inner-1">
//             <img
//               className="top_image_bounce animate-img-1"
//               src="assets/img/banner/2.png"
//               alt="img"
//             />
//             <img
//               className="top_image_bounce animate-img-2"
//               src="assets/img/about/6.png"
//               alt="img"
//             />
//             <div className="row">
//               <div
//                 className="col-lg-8"
//                 data-aos="fade-right"
//                 data-aos-delay="200"
//                 data-aos-duration="1500"
//               >
//                 <img className="w-100" src="assets/img/contact.png" alt="img" />
//               </div>
//               <div
//                 className="col-lg-4 wow animated fadeInRight"
//                 data-aos="fade-left"
//                 data-aos-delay="200"
//                 data-aos-duration="1500"
//               >
//                 <div className="section-title mb-0">
//                   <h6 className="sub-title">GET IN TOUCH</h6>
//                   <h2 className="title">
//                     Empowering Your <span>Digital Security</span> Vision
//                   </h2>
//                   <p className="content">
//                     From strategy to execution — we provide expert guidance, tailor-made solutions, and hands-on support to secure your business against evolving cyber threats. Trusted by industry leaders.
//                   </p>
//                   <form className="mt-4">
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <div className="single-input-inner style-border">
//                           <input type="text" placeholder="Your Name" />
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="single-input-inner style-border">
//                           <input type="text" placeholder="Your Email" />
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="single-input-inner style-border">
//                           <input type="text" placeholder="Your Phone" />
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="single-input-inner style-border">
//                           <input type="text" placeholder="Your Subject" />
//                         </div>
//                       </div>
//                       <div className="col-lg-12">
//                         <div className="single-input-inner style-border">
//                           <textarea placeholder="Message" defaultValue={''} />
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <Link
//                           className="btn btn-black mt-0 w-100 border-radius-5"
//                           to="#"
//                         >
//                           Submit now
//                         </Link>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*========================= contact-inner One end =========================*/}
//     </>
//   );
// };

// export default ContactArea;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactArea = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    'service_d7030re',
    'template_nhssdzp',
    form.current,
    'Fk4DfT2CMNwN_7BBM' // ✅ Pass public key as string
  )

      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Message Sent Successfully!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
            form.current[4].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Message Not Sent!');
          }
        },
      );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
<>
      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="assets/img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="assets/img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div
                className="col-lg-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img className="w-100" src="assets/img/contact.png" alt="img" />
              </div>
              <div
                className="col-lg-4 wow animated fadeInRight"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mb-0">
                  <h6 className="sub-title">GET IN TOUCH</h6>
                  <h2 className="title">
                    Empowering Your <span>Digital Security</span> Vision
                  </h2>
                  <p className="content">
                    From strategy to execution — we provide expert guidance,
                    tailor-made solutions, and hands-on support to secure your
                    business against evolving cyber threats. Trusted by industry
                    leaders.
                  </p>

                  {/* FORM */}
                  <form className="mt-4" ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Your Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea
                            name="message"
                            placeholder="Message"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-black mt-0 w-100 border-radius-5"
                        >
                          Submit now
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* END FORM */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default ContactArea;
