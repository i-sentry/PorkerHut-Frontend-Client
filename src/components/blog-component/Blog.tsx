import React, {useState, useEffect} from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { chunkArray } from "../../helper/chunck";
import { IBlog, blogData } from "../../utils/blogData";
import BlogCard from "../blog-banner-component/BlogCard";


const Blog = () => {
   const [data, setData] = useState(blogData);
   let itemsPerPage = 3;
   let currentPage = 1;
   const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
   useEffect(() => setData(blogData), [blogData]);
  return (
    <section className="w-full md:h-[550px] xxs:h-[1150px] mb-16">
      <div>
        <div className="flex justify-center items-center md:mx-10 xxs:mt-4">
          <h1 className="font-normal tracking-tight text-3xl">Latest Blogs & Articles</h1>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
      </div>
      <>
        <div className="px-10 grid md:grid-cols-3 xxs:grid-cols-2 items-center justify-center gap-6 ">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (blog: IBlog, index: any) => {
              return <BlogCard blog={blog} key={index} />;
            }
          )}
        </div>
      </>

      <div className="xxs:mt-10 md:mt-8 flex items-center justify-center">
        <Link to="/blog" className="text-sm pr-4 underline font-medium">
          VIEW ALL
        </Link>
        <AiOutlineRight />
      </div>
    </section>
  );
};

export default Blog;
