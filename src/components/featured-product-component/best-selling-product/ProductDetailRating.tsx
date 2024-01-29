import React from "react";
import { IoMdStarOutline } from "react-icons/io";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      <div className="md:flex md:items-center gap-10 xxs:hidden">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-[#797979] font-medium whitespace-nowrap">
            Customer Reviews
          </h1>
          <span className="text-zinc-800 text-[64px] font-semibold">5.00</span>
          <span className="text-[#797979] font-medium whitespace-nowrap">
            Based on 5600 reviews
          </span>
        </div>

        <div className="w-full h-full">
          <div className="flex items-center mt-4">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>

            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4">
              <div className="h-5 bg-[#FE6600] rounded w-[90%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">5600</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4">
              <div className="h-5 bg-[#FE6600] rounded w-[80%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">4000</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4">
              <div className="h-5 bg-[#FE6600] rounded w-[8%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">3500</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4">
              <div className="h-5 bg-[#FE6600] rounded w-[4%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">2400</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4">
              <div className="h-5 bg-[#FE6600] rounded w-[1%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">1000</span>
          </div>
        </div>
      </div>
      <div className="w-full mt-14 flex justify-between items-center">
        <p className="text-neutral-500 text-sm">
          Thank you very much for the reviews! These are actual, unfiltered and
          real reviews from our customers.
        </p>

        <div>
          <label htmlFor="sort">
            <span>Sort By:&nbsp;</span>
            <select
              name="sort"
              id="sort"
              className="form-select bg-transparent border-none focus:border-none"
            >
              <option value="most-recent">Most Recent</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default StarRating;
