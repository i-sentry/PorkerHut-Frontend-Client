import React, {useState, useEffect} from "react";
import BlogCard from "./BlogCard";
import { IBlog, blogData } from "../../utils/blogData";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { chunkArray } from "../../helper/chunck";

const BlogArticles = () => {

  const [data, setData] = useState(blogData);
  let itemsPerPage = 8;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  useEffect(() => setData(blogData), [blogData]);
  return (
    <>
      {blogData?.length ? (
        <>
          <div className="p-2 grid md:grid-cols-4 xxs:grid-cols-2 items-center justify-center gap-3">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (blog: IBlog, index: any) => {
                return <BlogCard blog={blog} key={index} />;
              }
            )}
          </div>
          <div className="flex items-center justify-center gap-1    bg-white px-4 py-3 sm:px-6">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              className={
                (currentPageIndex === 1 ? "no-item" : "") +
                " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white  rounded-l-md p-1"
              }
            >
              <RxCaretLeft size={16} />
            </button>
            <div className="pagination flex gap-1 items-center">
              {chunkArray(data, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={` border-2   border-[#A2A2A2]  ${
                      currentPageIndex === index + 1
                        ? "active-page-index px-2 p-[1px]  flex-1 rounded-md text-[#197B30] border-[#197B30]"
                        : "border-[#A2A2A2] text-[#A2A2A2] flex-1 p-[1px] px-2 hover:bg-slate-100 rounded-md"
                    }`}
                  >
                    {index + 1}
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
                " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white p-1 rounded-r-md"
              }
            >
              <RxCaretRight size={16} />
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
