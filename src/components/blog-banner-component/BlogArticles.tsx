import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { chunkArray } from "../../helper/chunck";
import { useGetAllBlogs } from "../../services/hooks/blog";

export interface IBlog {
  _id: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
  comments: any;
  content: string;
  title: string;
}

const BlogArticles = () => {
  const getAllBlogs = useGetAllBlogs();

  const [data, setData] = useState(getAllBlogs?.data?.data?.blogs);
  let itemsPerPage = 8;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  useEffect(() => setData(getAllBlogs?.data?.data?.blogs), [getAllBlogs?.data?.data?.blogs]);
  console.log({ getAllBlogs });

  if (getAllBlogs?.status === "loading") {
    return (
      <div className="h-full justify-center flex flex-col mt-16">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {getAllBlogs?.data?.data?.blogs?.length ? (
        <>
          <div className="p-1 grid md:grid-cols-3 xxs:grid-cols-1 items-center justify-center md:gap-10 xxs:gap-6">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (blog: any, index: any) => {
                return <BlogCard blog={blog} key={index} />;
              }
            )}
          </div>
          <div className="flex items-center justify-center gap-1    bg-white px-4 py-3 sm:px-6 mt-10">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              className={
                (currentPageIndex === 1 ? "no-item" : "") +
                " border border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white  rounded-l-md "
              }
            >
              <RxCaretLeft size={22} />
            </button>
            <div className="pagination flex gap-1 items-center">
              {chunkArray(data, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={` border   border-[#A2A2A2]  ${
                      currentPageIndex === index + 1
                        ? "active-page-index    rounded-md text-[#197B30] border-[#197B30] bg-[#3b554115]"
                        : "border-[#A2A2A2] text-[#A2A2A2]  hover:bg-slate-100 rounded-md"
                    }`}
                  >
                    <span className="text-sm px-1.5">{index + 1}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                currentPageIndex !== chunkArray(data, itemsPerPage).length
                  ? setCurrentPageIndex(currentPageIndex + 1)
                  : null
              }
              className={
                (currentPageIndex === chunkArray(data, itemsPerPage).length
                  ? "no-items"
                  : "") +
                " border border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white  rounded-r-md"
              }
            >
              <span className="">
                <RxCaretRight size={22} />
              </span>
            </button>
          </div>
        </>
      ) : (
        <div>Fetching Data...</div>
      )}
    </>
  );
};

export default BlogArticles;


function Spinner() {
  return (
      <div className='flex items-center justify-center'>
          <svg className="animate-spin h-16 w-16 mr-3 text-white" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="black"/>
            <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="green"/>
            </svg>
      </div>
  )
}