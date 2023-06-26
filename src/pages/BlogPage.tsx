import React from "react";
import BlogArticles from "../components/blog-banner-component/BlogArticles";
import BlogBanner from "../components/blog-banner-component/BlogBanner";

import AppLayout from "../components/utility/AppLayout";

const BlogPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);


  return (
    <AppLayout>

      <BlogBanner />
      <div className="lg:p-14 lg: xxs:p-2">
        <BlogArticles />
      </div>

    </AppLayout>
  );
};

export default BlogPage;
