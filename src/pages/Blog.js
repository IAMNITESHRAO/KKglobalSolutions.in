import React from "react";
import BlogGroup from "../components/BlogGroup";
import Breadcrumb from "../components/Breadcrumb";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Blog;
