import React, { useEffect, useState } from "react";
import AppLayout from "../components/utility/AppLayout";
import Breadcrumbs from "../../src/components/utility/BreadCrumbs";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../services/hooks/users/blog";
import { imageUrl } from "../services/api";

const BlogContent = () => {
  const { id } = useParams();
  const getSingleBlog = useGetBlog(id);

  console.log(getSingleBlog, "getSinleblog");

  const img = imageUrl;
  const [,] = useState<any>({
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
        <div className="text-center lg:text-left max-w-screen-xl ">
          <div
            className=" flex   items-center lg:justify-start xxs:justify-center w-full lg:h-[300px] xxs:h-[300px] bg-cover bg-center  lg:px-14"
            style={{
              backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${img}/${getSingleBlog?.data?.data?.featuredImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="text-center lg:text-left">
              <h1 className="mb-2 font-normal tracking-tight lg:text-[32px] lg:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
                {getSingleBlog?.data?.data?.title}
              </h1>
              <div className="flex justify-center lg:justify-start w-full">
                <div className="text-center lg:text-left">
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
          </div>
        </div>
        <div className="max-w-screen-lg lg:m-auto py-8 bg-white relative top-[-90px] xxs:m-5 border ">
          <div className="mb-8">
            <p className="text-[16px] leading-[19px] text-[#B4B4B4] text-center mb-5">
              {formattedDate}
            </p>
            <h2 className="lg:text-[32px] lg:leading-[47px] font-medium  text-center xxs:text-base text-[#333333]">
              {getSingleBlog?.data?.data?.title}
            </h2>
            <div className="w-40 h-1.5 bg-[#197B30] mx-auto mt-2"></div>
          </div>
          <div className="xxs:w-full  lg:w-3/4  text-justify  ">
            <div className="py-4 px-8">
              <p className="mb-4 lg:text-[14px] xxs:text-base leading-[19px]">
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
