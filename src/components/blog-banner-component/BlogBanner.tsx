import React from "react";
import BreadCrumb from "../BreadCrumbs";
let blog = require("../../assets/images/BlogBanner.jpg");

const BlogBanner = () => {
  return (
    <div className="mb-10">
      <div className="h-96 w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
        <img
          src={blog}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="pl-20 pt-28 ">
          <h1 className="font-bold text-3xl text-white md:inline xxs:hidden">
            Our Latest Blogs & Articles
          </h1>

          <h1 className="md:hidden font-bold text-3xl text-white">
            Our Latest Blogs &
          </h1>
          <span className="md:hidden font-bold text-3xl text-white xxs:pl-16">
            Articles
          </span>
        </div>
        {/* <div className="flex items-center justify-center">
          <BreadCrumb
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Blogs",
                link: "/blog",
              },
            ]}
          />
        </div> */}
      </div>
    </div>
  );
};

export default BlogBanner;
