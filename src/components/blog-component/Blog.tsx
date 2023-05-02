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
    <section className="w-full md:h-[550px] xxs:h-[1150px] my-16">
      <div>
        <div className="flex justify-center items-center md:mx-10 xxs:mt-4">
          <h1 className="font-normal tracking-tight md:text-3xl xxs:text-lg">
            Latest Blogs
          </h1>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className=" block h-1 w-14 bg-[#197B30]"></div>
        </div>
      </div>
      <>
        <div className="xxs:px-4 md:px-10 grid md:grid-cols-3 xxs:grid-cols-1 items-center  gap-6 ">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (blog: any, index: any) => {
              return <BlogCard blog={blog} key={index} />;
            }
          )}
        </div>
      </>

      <Link
        to="/blog"
        className="my-10 flex items-center justify-center hover:text-[#197b30]"
      >
        <span className="text-sm mr-2 underline font-medium ">VIEW ALL</span>
        <AiOutlineRight />
      </Link>
    </section>
  );
};

export default Blog;
