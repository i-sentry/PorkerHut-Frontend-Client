import React from "react";
import { Link } from "react-router-dom";
import { useReadingTime } from "react-hook-reading-time";
import { imageUrl } from "../../services/api";
import moment from "moment";

const Loader = () => (
  <div className="overflow-hidden relative w-full">
    <div className="skeleton-loader"></div>
    <div className="header-loader"></div>
    <div className="text-loader"></div>
    <div className="text-loader"></div>
    <div className="btn-loader"></div>
  </div>
);

const BlogCard = ({ blog }: { blog: any }) => {
  const {
    featuredImage = "/public/defaultBlogImg.png",
    title,
    createdAt,
    content,
    _id,
  } = blog || {};
  const { minutes } = useReadingTime(content);
  const imgUrl = `${imageUrl}/${featuredImage}`;
  const truncatedString = content?.slice(0, 250) + "...";
  const formattedDate = moment(createdAt).format("MMMM Do YYYY");

  return (
    <div className="max-w-[500px] bg-white rounded-md hover:shadow-md group overflow-hidden">
      {blog ? (
        <>
          <Link to="#" className="">
            <img
              className="rounded-t overflow-hidden h-[300px] object-cover w-full"
              src={imgUrl}
              alt=""
            />
          </Link>
          <p className="py-3 font-normal text-[#333333] xxs:text-[13px] xxs:leading-[15px] md:text-[12px] md:leading-[16px] px-2">
            {formattedDate}
          </p>
          <div className="pb-3 px-2">
            <h1 className="text-[24px] leading-[26px] font-medium text-[#333333] whitespace-pre-line">
              {title}
              <span className="block">({minutes} min read)</span>
            </h1>
            <p className="mb-3 font-normal text-[#797979] text-left text-[16px] leading-[19px] tracking-[0.04em] my-3 xxs:text-[14px] xxs:leading-[16px]">
              {truncatedString}
            </p>
            <Link
              to={`/blog/${_id}`}
              className="inline-flex items-center px-6 py-2 text-[14px] leading-[24px] font-medium text-center text-white bg-[#197B30] rounded hover:bg-[#197b30c8] focus:ring-4 focus:outline-none focus:ring-[#69a477] "
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
