import React from "react";
import Breadcrumbs from "../utility/BreadCrumbs";
import blog from "../../assets/blog.png";

const BlogBanner = () => {
  return (
    <div
      className="  flex   items-center md:justify-start xxs:justify-center w-full md:h-[300px] xxs:h-[300px] bg-cover bg-center  md:px-14"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${blog}')`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      <div className=" ">
        <h1 className="mb-2 font-normal tracking-tight md:text-[32px] md:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
          Our Latest Blog
        </h1>
        <div className="xxs:text-center">
          <Breadcrumbs
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
  );
};

export default BlogBanner;
