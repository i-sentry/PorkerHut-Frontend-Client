import React from "react";
import BreadCrumb from "../utility/BreadCrumbs";
import blog from "../../assets/images/BlogBanner.png";

const BlogBanner = () => {
  return (
    <div className="mb-10">
      <div className="h-[350px] w-full relative bg-gradient-to-r from-slate-600 to to bg-slate-700">
        <img
          src={blog}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="xxs:absolute md:top-10 xxs:top-0 mt-32 px-14">
          <h1 className="mb-2 text-3xl font-normal tracking-tight text-left   text-[#fff]">
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
