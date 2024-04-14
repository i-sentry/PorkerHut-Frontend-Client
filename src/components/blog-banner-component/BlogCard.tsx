import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReadingTime } from "react-hook-reading-time";
import { imageUrl } from "../../services/api";
import moment from "moment";
import Image from "../../assets/defaultBlogImg.png";
import { convertFromRaw, EditorState } from "draft-js";

const Loader = () => (
  <div className="relative w-full overflow-hidden">
    <div className="skeleton-loader"></div>
    <div className="header-loader"></div>
    <div className="text-loader"></div>
    <div className="text-loader"></div>
    <div className="btn-loader"></div>
  </div>
);

const BlogCard = ({ blog }: { blog: any }) => {
  const {
    featuredImage,
    title,
    createdAt,
    content,
    _id,
    slug,
  } = blog || {};
  const { minutes } = useReadingTime(content);

  const formattedDate = moment(createdAt).format("MMMM Do YYYY");
  const [contentText, setContentText] = useState("");

  useEffect(() => {
    try {
      const parsedContent = JSON.parse(content);
      const editorState = EditorState.createWithContent(
        convertFromRaw(parsedContent),
      );
      const conText = editorState.getCurrentContent().getPlainText();
      setContentText(conText);
    } catch (error) {
      setContentText(content);
    }
  }, []);

    const truncatedString = contentText?.slice(0, 150) + "...";


  return (
    <div className="group max-w-[500px] overflow-hidden rounded-md bg-white hover:shadow-md">
      {blog ? (
        <>
          <Link to="#" className="">
            <img
              className="h-[300px] w-full overflow-hidden rounded-t object-cover"
              // src={imgUrl}
              src={featuredImage ?? "/public/defaultBlogImg.png"}
              alt=""
            />
          </Link>
          <div className="flex items-center justify-between">
            <p className="py-3 px-2 font-normal text-[#333333] xxs:text-[13px] xxs:leading-[15px] md:text-[12px] md:leading-[16px]">
              {formattedDate}
            </p>
            <p className="py-3 px-2 font-normal text-[#333333] xxs:text-[13px] xxs:leading-[15px] md:text-[12px] md:leading-[16px]">
              ({minutes} min read)
            </p>
          </div>
          <div className="px-2 pb-3">
            <h1 className="whitespace-pre-line text-[24px] font-medium leading-[26px] text-[#333333]">
              {title}
            </h1>
            <p className="my-3 mb-3 text-left text-[16px] font-normal leading-[19px] tracking-[0.04em] text-[#797979] xxs:text-[14px] xxs:leading-[16px]">
              {truncatedString}
            </p>
            <Link
              to={`/blog/${_id}`}
              className="inline-flex items-center rounded bg-[#197B30] px-6 py-2 text-center text-[14px] font-medium leading-[24px] text-white hover:bg-[#197b30c8] focus:outline-none focus:ring-4 focus:ring-[#69a477] "
            >
              Read more
            </Link>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogCard;
