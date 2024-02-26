import React from "react";
import Breadcrumbs from "../utility/BreadCrumbs";
import blog from "../../assets/blog.png";

const BlogBanner = () => {
  return (
    <div
      className="  flex   w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center md:h-[300px] md:justify-start  md:px-14"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${blog}')`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      <div className=" ">
        <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] md:text-[32px]  md:leading-[47px]">
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
            className="justify-center md:justify-start"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
