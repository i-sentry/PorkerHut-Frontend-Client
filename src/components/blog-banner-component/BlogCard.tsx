import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }: any) => {
  const {featuredImage, title, readDuration, createdAt, content, _id } = blog;

  // console.log(featuredImage);
  
  
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  console.log(`${imgUrl}/${featuredImage}`)
  

  const moment = require("moment");
  const myDate = new Date(createdAt);
  const momentDate = moment(myDate);
  const truncatedString = content.slice(0, 200) + "...";

  const formattedDate = momentDate.format("MMMM Do YYYY");
  return (
    <>
      <div className="max-w-[500px] bg-white rounded-md hover:shadow-md group overflow-hidden">
        <Link to="#" className="">
          <img className="rounded-t overflow-hidden h-[300px] object-cover w-full" src={`${imgUrl}/${featuredImage}`} alt="" />
      
        </Link>
        <p className=" pt-2 font-normal text-[#333333] text-xs px-2">
          {formattedDate}
        </p>
        <div className="py-2 px-2">
          <Link to="#">
            <h1 className=" text-xl font-bold tracking-tight text-[#333333] whitespace-pre-line">
              {title}
            </h1>
            <p>({readDuration} read)</p>
          </Link>

          <p className="mb-3 font-normal text-[#797979] text-left text-xs ">
            {truncatedString}
          </p>
          <Link
            to={`/blog/${_id}`}
            
            
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#197B30] rounded hover:bg-[#197b30c8]focus:ring-4 focus:outline-none focus:ring-[#69a477] "
          >
            Read more
          </Link>
        </div>
        {/* <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div> */}
      </div>
    </>
  );
};

export default BlogCard;
