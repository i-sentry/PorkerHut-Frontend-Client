import React from "react";
import BlogArticles from "../components/blog-banner-component/BlogArticles";
import BlogBanner from "../components/blog-banner-component/BlogBanner";
import Footer from "../components/footer-component/Footer";
import NavBar from "../components/nav-component/NavBar";
import AppLayout from "../components/utility/AppLayout";

const BlogPage = () => {
  return (
    <AppLayout>
      {/* <NavBar /> */}
      <BlogBanner />
      <div className="p-4">
        <BlogArticles />
      </div>
      {/* <Footer /> */}
    </AppLayout>
  );
};

export default BlogPage;
