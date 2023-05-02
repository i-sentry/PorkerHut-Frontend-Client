import React, { useEffect, useState } from "react";
import AppLayout from "../components/utility/AppLayout";
import Breadcrumbs from "../../src/components/utility/BreadCrumbs";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../services/hooks/blog";
import { imageUrl } from "../services/api";

const BlogContent = () => {
  const { id } = useParams();
  const getSingleBlog = useGetBlog(id);

  console.log(getSingleBlog, "getSinleblog");

  const img = imageUrl;
  const [blog, setBlog] = useState<any>({
    _id: "",
    title: "",
    createdAt: "",
    content: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const moment = require("moment");
  const myDate = new Date(getSingleBlog?.data?.data?.createdAt);
  const momentDate = moment(myDate);

  const formattedDate = momentDate.format("MMMM Do YYYY");
  return (
    <AppLayout>
      <div className="">
        {/* <nav className="mb-20">
        <NavBar />
      </nav> */}
        <div className="  max-w-screen-xl ">
          <div
            className=" md:block xxs:flex flex-col  w-full md:h-[330px] bg-cover bg-center py-20 md:px-14 xxs:px-5"
            style={{
              backgroundImage: ` url('${img}/${getSingleBlog?.data?.data?.featuredImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <h1 className="mt-16 xxs:text-lg font-normal  tracking-tight md:text-3xl md:text-left xxs:text-center   text-[#fff]">
              {getSingleBlog?.data?.data?.title}
            </h1>
            <div className="xxs:flex xxs:justify-center md:text-left w-full">
              <Breadcrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "blog",
                    link: "/blog",
                  },
                  {
                    name: `content`,
                    link: "/contact-us",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg md:m-auto py-8 bg-white relative top-[-90px] xxs:m-5 border ">
          <div className="mb-8">
            <p className="text-xs text-slate-400 text-center mb-5">
              {formattedDate}
            </p>
            <h2 className="md:text-3xl font-bold  text-center xxs:text-base">
              {getSingleBlog?.data?.data?.title}
            </h2>
            <div className="w-40 h-1 bg-[#197B30] mx-auto"></div>
          </div>
          <div className="xxs:w-full  md:w-3/4  text-justify  ">
            <div className="py-4 px-8">
              <p className="mb-4 md:text-lg xxs:text-base leading-relaxed">
                {getSingleBlog?.data?.data?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogContent;
