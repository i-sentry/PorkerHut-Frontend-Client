import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { chunkArray } from "../../helper/chunck";
import BlogCard from "../blog-banner-component/BlogCard";
import { useGetAllBlogs } from "../../services/hooks/users/blog";
import { orderBy } from "lodash";

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
  const [currentPageIndex] = useState(1);

  useEffect(() => {
    if (getAllBlogs?.data?.data) {
      // Sort the data by createdAt field in descending order
      const sortedData = orderBy(
        getAllBlogs.data.data,
        ["createdAt"],
        ["desc"],
      );
      setData(sortedData);
    }
  }, [getAllBlogs]);

  return (
    <section className="my-16  w-full">
      <div className="mb-16">
        <div className="llg:mx-10 mb-2 flex items-center justify-center xxs:mt-4">
          <h1 className="font-medium tracking-tight text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[40px] lg:text-[40px] lg:leading-[47px]">
            Latest Blogs & Articles
          </h1>
        </div>

        <div className="flex items-center justify-center ">
          <div className="  h-1.5 w-24 bg-[#197B30]"></div>
        </div>
      </div>
      <>
        <div className="grid items-center px-[4%] xxs:grid-cols-1 xxs:gap-12 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-12 ">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (blog, index: number) => {
              return <BlogCard blog={blog} key={index} />;
            },
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
        <span className="mr-2 text-[16px] font-medium leading-[19px] tracking-[0.08em] underline ">
          VIEW ALL
        </span>
        <AiOutlineRight />
      </Link>
    </section>
  );
};

export default Blog;
