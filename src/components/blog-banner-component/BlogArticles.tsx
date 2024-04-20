import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { chunkArray } from "../../helper/chunck";
import { useGetAllBlogs } from "../../services/hooks/users/blog";
import { orderBy } from "lodash";
import { SkeletonLoader } from "../category-component/Category";
import { BsNewspaper } from "react-icons/bs";

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
  const [data, setData] = useState<IBlog[]>([]);
  const { data: getAllBlogs, isLoading } = useGetAllBlogs();
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (getAllBlogs?.data) {
      const sortedData = orderBy(getAllBlogs?.data, ["createdAt"], ["desc"]);
      setData(sortedData);
    }
  }, [getAllBlogs?.data]);

  // if (getAllBlogs?.status === "loading") {
  //   return (
  //     <div className="mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
  //       {Array.from({ length: 6 }, (_, index) => {
  //         return <SkeletonLoader key={index} />;
  //       })}
  //     </div>
  //   );
  // }

  console.log(getAllBlogs?.data, getAllBlogs);

  return (
    <>
      {isLoading && (
        <div className="grid grid-cols-1 gap-2 py-10 px-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => {
            return <SkeletonLoader key={index} />;
          })}
        </div>
      )}
      {getAllBlogs?.data?.length && (
        <>
          <div className="grid items-center justify-center p-1 xxs:grid-cols-1 xxs:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (blog: any, index: any) => {
                return <BlogCard blog={blog} key={index} />;
              },
            )}
          </div>
          <div className="mt-10 flex items-center justify-center    gap-1 bg-white px-4 py-3 sm:px-6">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              className={
                (currentPageIndex === 1 ? "no-item" : "") +
                " rounded-l-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white "
              }
            >
              <RxCaretLeft size={22} />
            </button>
            <div className="pagination flex items-center gap-1">
              {chunkArray(data, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={` border   border-[#A2A2A2]  ${
                      currentPageIndex === index + 1
                        ? "active-page-index    rounded-lg border-[#197B30] bg-[#3b554115] text-[#197B30]"
                        : "rounded-lg border-[#A2A2A2]  text-[#A2A2A2] hover:bg-slate-100"
                    }`}
                  >
                    <span className="px-1.5 text-sm">{index + 1}</span>
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
                " rounded-r-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white"
              }
            >
              <span className="">
                <RxCaretRight size={22} />
              </span>
            </button>
          </div>
        </>
      )}

      {!isLoading && getAllBlogs?.data?.length < 1 && (
        <div className="flex flex-col items-center">
          <span className="mb-2 text-neutral-500">
            <BsNewspaper size={32} />
          </span>
          <p>No Blog post available...</p>
        </div>
      )}
    </>
  );
};

export default BlogArticles;

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="mr-3 h-16 w-16 animate-spin text-white"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="black"
        />
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill="green"
        />
      </svg>
    </div>
  );
}
