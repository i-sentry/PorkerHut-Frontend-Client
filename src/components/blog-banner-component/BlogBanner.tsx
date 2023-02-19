import React from "react";
import BreadCrumb from "../BreadCrumbs";
import blog from "../../assets/images/BlogBanner.png";

const BlogBanner = () => {
  return (
    <div className="mb-10">
      <div className="h-[330px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
        <img
          src={blog}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="pl-20 pt-28 absolute">
          <h1 className="font-bold text-3xl text-white md:inline xxs:hidden">
            Our Latest Blogs & Articles
          </h1>

          <h1 className="md:hidden font-bold text-3xl text-white">
            Our Latest Blogs &
          </h1>
          <span className="md:hidden font-bold text-3xl text-white xxs:pl-16">
            Articles
          </span>

          <div className="md:flex md:items-center xxs:pl-14 md:pl-0">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
