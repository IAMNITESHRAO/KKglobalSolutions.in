import React from "react";
import {  FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamArea = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div className="team-area bg-relative pd-top-40 ">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">MEET OUR EXPERTS</h6>
            <h2 className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="assets/img/team/Aniket.png"
                    alt="img"
                    style={{
                      width: "100%", // You can adjust this like '200px' or '80%'
                      height: "200px", // Maintains aspect ratio
                      maxWidth: "250px", // Optional: set a max width
                      objectFit: "cover", // Ensures the image fills container nicely
                      borderRadius: "8px", // Optional: smooth corners
                    }}
                  />
                  <ul className="team-social-inner">
                    {/* <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li> */}
                    <li>
                      <Link to="https://www.linkedin.com/in/aniket-kumar-1864251b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/AniketK84028841?t=Qk2nOX0AliF6oga9-RZ7rA&s=08">
                        <FaTwitter />
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Aniket Kumar</Link>
                  </h5>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="assets/img/team/Nitesh2.png"
                    alt="img"
                    style={{
                      width: "100%", // You can adjust this like '200px' or '80%'
                      height: "200px", // Maintains aspect ratio
                      maxWidth: "250px", // Optional: set a max width
                      objectFit: "cover", // Ensures the image fills container nicely
                      borderRadius: "8px", // Optional: smooth corners
                    }}
                  />
                  <ul className="team-social-inner">
                    {/* <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li> */}
                    <li>
                      <Link to="https://www.linkedin.com/in/im-nitesh-kumar/">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/iamNiteshRao">
                        <FaTwitter />
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Nitesh Kumar</Link>
                  </h5>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="assets/img/team/Kartik.png"
                    alt="img"
                    style={{
                      width: "100%", // You can adjust this like '200px' or '80%'
                      height: "200px", // Maintains aspect ratio
                      maxWidth: "250px", // Optional: set a max width
                      objectFit: "cover", // Ensures the image fills container nicely
                      borderRadius: "8px", // Optional: smooth corners
                    }}
                  />

                  <ul className="team-social-inner">
                    {/* <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li> */}
                    <li>
                      <Link to="https://www.linkedin.com/in/kartik-garg-6370b6232/">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/kartikxwd?t=fOPntATT_dGQ9mt1aUzzOw&s=09">
                        <FaTwitter />
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Kartik Garg</Link>
                  </h5>
                  <p>Security Analyst</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="/assets/img/team/shashank.png"
                    alt="img"
                    style={{
                      width: "100%", // You can adjust this like '200px' or '80%'
                      height: "200px", // Maintains aspect ratio
                      maxWidth: "250px", // Optional: set a max width
                      objectFit: "cover", // Ensures the image fills container nicely
                      borderRadius: "8px", // Optional: smooth corners
                    }}
                  />
                  <ul className="team-social-inner">
                    {/* <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li> */}
                    <li>
                      <Link to="https://www.linkedin.com/in/shashank-chaudhary-a42892275/">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/shashankch20388">
                        <FaTwitter />
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Shashank Chaudhary</Link>
                  </h5>
                  <p>Sales Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamArea;
