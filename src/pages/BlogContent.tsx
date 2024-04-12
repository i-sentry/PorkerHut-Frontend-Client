import React, { useEffect, useState } from "react";
import AppLayout from "../components/utility/AppLayout";
import Breadcrumbs from "../../src/components/utility/BreadCrumbs";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../services/hooks/users/blog";
import { imageUrl } from "../services/api";
import { convertFromRaw, EditorState } from "draft-js";

const BlogContent = () => {
  const { id } = useParams();
  const getSingleBlog = useGetBlog(id);

  console.log(getSingleBlog, "getSinleblog");

  const img = imageUrl;

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  let [contentText, setContentText] = useState("");

  useEffect(() => {
    try {
      const parsedContent = JSON.parse(getSingleBlog?.data?.data?.content);
      const editorState = EditorState.createWithContent(
        convertFromRaw(parsedContent),
      );
      const contentText = editorState.getCurrentContent().getPlainText();
      setContentText(contentText);
    } catch (error) {
      setContentText(getSingleBlog?.data?.data?.content);
    }
  }, [getSingleBlog]);

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
        <div className="max-w-screen-xl text-center lg:text-left ">
          <div
            className=" flex   w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center lg:h-[300px] lg:justify-start  lg:px-14"
            style={{
              backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${getSingleBlog?.data?.data?.featuredImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="text-center lg:text-left">
              <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] lg:text-[32px]  lg:leading-[47px]">
                {getSingleBlog?.data?.data?.title}
              </h1>
              <div className="flex w-full justify-center lg:justify-start">
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
        <div className="relative top-[-90px] max-w-screen-lg border bg-white py-8 xxs:m-5 lg:m-auto ">
          <div className="mb-8">
            <p className="mb-5 text-center text-[16px] leading-[19px] text-[#B4B4B4]">
              {formattedDate}
            </p>
            <h2 className="text-center font-medium text-[#333333]  xxs:text-base lg:text-[32px] lg:leading-[47px]">
              {getSingleBlog?.data?.data?.title}
            </h2>
            <div className="mx-auto mt-2 h-1.5 w-40 bg-[#197B30]"></div>
          </div>
          <div className="text-justify  xxs:w-full  lg:w-3/4  ">
            <div className="py-4 px-8">
              <p className="mb-4 leading-[19px] xxs:text-base lg:text-[14px]">
                {contentText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogContent;
