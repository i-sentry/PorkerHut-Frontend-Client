import React, {useState, useEffect} from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { chunkArray } from "../../helper/chunck";
import { IBlog, blogData } from "../../utils/blogData";
import BlogCard from "../blog-banner-component/BlogCard";


const Blog = () => {
   const [data, setData] = useState(blogData);
   let itemsPerPage = 4;
   let currentPage = 1;
   const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
   useEffect(() => setData(blogData), [blogData]);
  return (
    <section className="w-full md:h-[550px] xxs:h-[1100px]">
      <div>
        <div className="flex justify-center items-center md:mx-10 xxs:mt-4">
          <h1 className="font-semibold text-2xl">Latest Blogs & Articles</h1>
        </div>
        <div className="flex items-center justify-center mb-10">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
      </div>
      <>
        <div className="p-2 grid md:grid-cols-4 xxs:grid-cols-2 items-center justify-center gap-3">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (blog: IBlog, index: any) => {
              return <BlogCard blog={blog} key={index} />;
            }
          )}
        </div>
      </>

      <div className="xxs:mt-10 md:mt-5 flex items-center justify-center ">
        <Link to="#" className="text-sm pr-4 underline font-medium">
          VIEW ALL
        </Link>
        <AiOutlineRight />
      </div>
    </section>
  );
};

export default Blog;
