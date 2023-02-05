import React from "react";
import BlogArticles from "../components/blog-banner-component/BlogArticles";
import BlogBanner from "../components/blog-banner-component/BlogBanner";
import Footer from "../components/footer-component/Footer";
import NavBar from "../components/nav-component/NavBar";

const BlogPage = () => {
  return (
    <>
      <NavBar />
      <BlogBanner />
      <BlogArticles />
      <Footer />
    </>
  );
};

export default BlogPage;
