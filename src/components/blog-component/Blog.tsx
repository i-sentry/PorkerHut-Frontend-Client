import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { chunkArray } from "../../helper/chunck";
import BlogCard from "../blog-banner-component/BlogCard";
import { useGetAllBlogs } from "../../services/hooks/blog";

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

  const [data, setData] = useState(getAllBlogs?.data?.data);
  console.log(data, "Blog");

  let itemsPerPage = 3;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  useEffect(() => setData(getAllBlogs?.data?.data), [getAllBlogs?.data?.data]);
  return (
    <section className="w-full  my-16">
      <div className="mb-16">
        <div className="flex justify-center items-center md:mx-10 xxs:mt-4 mb-2">
          <h1 className="font-medium tracking-tight md:text-[40px] md:leading-[47px] xxs:text-lg text-[#333333]">
            Latest Blogs & Articles
          </h1>
        </div>

        <div className="flex items-center justify-center ">
          <div className="  h-1.5 w-24 bg-[#197B30]"></div>
        </div>
      </div>
      <>
        <div className="xxs:px-4 md:px-16 grid md:grid-cols-3 xxs:grid-cols-1 items-center  gap-12 ">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (blog: any, index: any) => {
              return <BlogCard blog={blog} key={index} />;
            }
          )}
        </div>
      </>

      <Link
        to="/blog"
        className="my-16 flex items-center justify-center text-[#333333] hover:text-[#197b30]"
      >
        <span className="text-[16px] leading-[19px] tracking-[0.08em] mr-2 underline font-medium ">VIEW ALL</span>
        <AiOutlineRight />
      </Link>
    </section>
  );
};

export default Blog;
