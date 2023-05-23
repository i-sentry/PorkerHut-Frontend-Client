import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useReadingTime } from "react-hook-reading-time";
import { imageUrl } from "../../services/api";

const BlogCard = ({ blog }: any) => {
  const log = console.log;
  const { featuredImage, title, createdAt, readDuration, content, _id } = blog;
  const {
    text, // 1 min read
    minutes, // 1
    words, // 168
    time, // 0.5309090909090909
  } = useReadingTime(content);
  log(blog);
  const imgUrl = imageUrl;

  const moment = require("moment");
  const myDate = new Date(createdAt);
  const momentDate = moment(myDate);
  const truncatedString = content.slice(0, 250) + "...";

  const formattedDate = momentDate.format("MMMM Do YYYY");
  return (
    <>
      <div className="max-w-[500px] bg-white rounded-md hover:shadow-md group overflow-hidden">
        <Link to="#" className="">
          <img
            className="rounded-t overflow-hidden h-[300px] object-cover w-full"
            src={`${imgUrl}/${featuredImage}`}
            alt=""
          />
        </Link>
        <p className=" pt-2 font-normal text-[#333333] xxs:text-[13px] xxs:leading-[15px] text-[14px] leading-[16px] px-2">
          {formattedDate}
        </p>
        <div className="py-2 px-2">
          <Link to="#">
            <h1 className=" text-[24px] leading-[26px] font-medium  text-[#333333] whitespace-pre-line">
              {title}
            </h1>
            <p>({minutes} min read)</p>
          </Link>

          <p className="mb-3 font-normal text-[#797979] text-left text-[16px] leading-[19px] tracking-[0.04em] my-3 xxs:text-[14px] xxs:leading-[16px]">
            {truncatedString}
          </p>
          <Link
            to={`/blog/${_id}`}
            className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[#197B30] rounded hover:bg-[#197b30c8]focus:ring-4 focus:outline-none focus:ring-[#69a477] "
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
