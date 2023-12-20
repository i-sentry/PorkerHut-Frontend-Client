import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { chunkArray } from "../../helper/chunck";
import BlogCard from "../blog-banner-component/BlogCard";
import { useGetAllBlogs } from "../../services/hooks/users/blog";

export interface IBlog {
  _id: string;
  featuredImage: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
  comments: any;
  content: string;
  title: string;
}

const Blog = () => {
  const getAllBlogs = useGetAllBlogs();
  const [data, setData] = useState<IBlog[]>([]);
  const itemsPerPage = 3;
  const [currentPageIndex, ] = useState(1);

  useEffect(() => {
    if (getAllBlogs?.data?.data?.blogs) {
      setData(getAllBlogs.data.data.blogs);
    }
  }, [getAllBlogs]);


  return (
    <section className="w-full  my-16">
      <div className="mb-16">
        <div className="flex justify-center items-center llg:mx-10 xxs:mt-4 mb-2">
          <h1 className="font-medium md:text-[40px] tracking-tight lg:text-[40px] lg:leading-[47px] xxs:text-[20px] text-[#333333] xxs:leading-[23px]">
            Latest Blogs & Articles
          </h1>
        </div>

        <div className="flex items-center justify-center ">
          <div className="  h-1.5 w-24 bg-[#197B30]"></div>
        </div>
      </div>
      <>
        <div className="px-[4%] grid lg:grid-cols-3 xxs:grid-cols-1 md:grid-cols-3 items-center xxs:gap-12 lg:gap-12 md:gap-3 ">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (blog, index: number) => {
              return <BlogCard blog={blog} key={index} />;
            }
          )}
        </div>
        {/* <div className="xxs:px-4 lg:px-16 grid lg:grid-cols-3 xxs:grid-cols-1 md:grid-cols-3 items-center xxs:gap-12 lg:gap-12 md:gap-3 ">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <BlogCard key={index} blog={null} />
              ))
            : chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
                (blog, index: number) => <BlogCard blog={blog} key={index} />
              )}
        </div> */}
      </>

      <Link
        to="/blog"
        className="my-16 flex items-center justify-center text-[#333333] hover:text-[#197b30]"
      >
        <span className="text-[16px] leading-[19px] tracking-[0.08em] mr-2 underline font-medium ">
          VIEW ALL
        </span>
        <AiOutlineRight />
      </Link>
    </section>
  );
};

export default Blog;
