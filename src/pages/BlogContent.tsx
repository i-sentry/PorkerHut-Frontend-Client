import React, { useEffect, useState } from "react";
import AppLayout from "../components/utility/AppLayout";
import Breadcrumbs from "../../src/components/utility/BreadCrumbs";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../services/hooks/users/blog";
import { imageUrl } from "../services/api";
import { convertFromRaw, EditorState } from "draft-js";
import { RiLoader4Line } from "react-icons/ri";
// import "tailwindcss/tailwind.css";

const BlogContent = () => {
  const { id } = useParams();
  const getSingleBlog = useGetBlog(id);

  const img = imageUrl;

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  let [isLoading, setIsLoading] = useState(true);
  let [contentText, setContentText] = useState("");

  useEffect(() => {
    if (getSingleBlog?.data?.data) {
      try {
        const parsedContent = JSON.parse(getSingleBlog.data.data.content);
        const editorState = EditorState.createWithContent(
          convertFromRaw(parsedContent)
        );
        const contentText = editorState.getCurrentContent().getPlainText();
        setContentText(contentText);
      } catch (error) {
        setContentText(getSingleBlog.data.data.content);
      }
      setIsLoading(false);
    }
  }, [getSingleBlog]);

  const moment = require("moment");
  const myDate = new Date(getSingleBlog?.data?.data?.createdAt);
  const momentDate = moment(myDate);

  const formattedDate = momentDate.format("MMMM Do YYYY");

  return (
    <AppLayout>
      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <RiLoader4Line className="animate-spin text-4xl text-gray-500" />
          <p className="ml-2">fetching blog...</p>
        </div>
      ) : (
        <div className="">
          <div className="max-w-screen-xl text-center lg:text-left">
            <div
              className="flex w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center lg:h-[300px] lg:justify-start  lg:px-14"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${getSingleBlog?.data?.data?.featuredImage}')`,
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
          <div className="relative top-[-90px] max-w-screen-lg border bg-white py-8 xxs:m-5 lg:m-auto">

            <div className="mb-8">
              <p className="mb-5 text-center text-[16px] leading-[19px] text-[#B4B4B4]">
                {formattedDate}
              </p>
              <h2 className="text-center font-medium text-[#333333]  xxs:text-base lg:text-[32px] lg:leading-[47px]">
                {getSingleBlog?.data?.data?.title}
              </h2>
              <div className="mx-auto mt-2 h-1.5 w-40 bg-[#197B30]"></div>
            </div>
            <div className="w-full ">
              <div className="py-4 px-8">
                {contentText && (
                  <div>
                    {contentText.split("\n").map((paragraph, index) => (
                      <React.Fragment key={index}>
                        <p className="mb-2 leading-[19px] xxs:text-base lg:text-[14px]">
                          {paragraph}
                        </p>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default BlogContent;