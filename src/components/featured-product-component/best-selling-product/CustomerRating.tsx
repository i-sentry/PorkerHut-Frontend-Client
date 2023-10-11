import React, { useEffect, useState } from "react";
import { MdMessage } from "react-icons/md";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import { NavLink } from 'react-router-dom'
import { chunkArray } from "../../../helper/chunck";
// import RatingWidget from '../../RatingWidget'
import ProductsBreadCrumbs from "../../story-components/ProductsBreadCrumbs";
import StarRating from "./ProductDetailRating";
const ratingData = [
  {
    id: 1,
    name: "John Doe",
    date: "2023-03-10",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Alice Smith",
    date: "2023-03-12",
    rating: 3.0,
  },
  {
    id: 3,
    name: "Bob Johnson",
    date: "2023-03-15",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Emily Wong",
    date: "2023-03-09",
    rating: 2.5,
  },
  {
    id: 5,
    name: "Michael Chen",
    date: "2023-03-06",
    rating: 4.0,
  },
  {
    id: 6,
    name: "Jessica Lee",
    date: "2023-03-03",
    rating: 4.5,
  },
  {
    id: 8,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 9,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 10,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 11,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 12,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 13,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 14,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 15,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 16,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },

  {
    id: 17,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 18,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 19,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
  {
    id: 20,
    name: "David Kim",
    date: "2023-03-08",
    rating: 3.5,
  },
];
const CustomerRating = () => {
  const [data, setData] = useState(ratingData);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  // const menuItems = [...new Set(ratingData.map((d: any) => d.category))];
  useEffect(() => setData(ratingData), []);
  return (
    <>
      <div className="px-6 py-6 bg-[#EEEEEE]">
        <ProductsBreadCrumbs
          items={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Products",
              link: "/products",
            },
            {
              name: "Product Details",
              link: "/product/:id",
            },
            {
              name: "Product Review",
              link: "/product/:id/rating-page",
            },
          ]}
        />
        <div className="py-2">
          <StarRating rating={0} />
        </div>

        <div className="md:grid md:gap-4 md:grid-cols-3 md:mt-10 bg-white px-6 py-6">
          {ratingData.map((data) => (
            <div
              key={data.id}
              className="bg-[#F4F4F4] h-28 p-2 flex flex-col gap-3 rounded-sm xxs:mb-4 md:mb-0"
            >
              <div className="flex justify-between">
                <div className="items-center flex gap-2">
                  <MdMessage size={20} />
                  <h1 className="inline">{data.name}</h1>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-xs">{data.date}</span>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#FE6600]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#FE6600]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#FE6600]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#FE6600]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>

              <div>
                <span className=" text-sm">
                  Awesome products and swift delivery to my doorstep
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#EEEEEE] gap-1 bg- px-4 py-3 sm:px-6">
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
  );
};

export default CustomerRating;
