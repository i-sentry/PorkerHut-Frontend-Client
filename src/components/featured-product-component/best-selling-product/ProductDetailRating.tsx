import React, { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import Sort from "../../accordion-component/Sort";
import RatingSort from "../../accordion-component/RatingSort";

const StarRating: React.FC<{
  rating: number;
  data?: any;
  setData?: any;
  dataCard?: any;
}> = ({ rating, data, setData, dataCard }) => {
  console.log(data, "start data");

  const ratingPercentage = (totalRating: number, totalStars: number) =>
    (totalStars / totalRating) * 100;

  const aggregate =
    (5 * data?.total5Star +
      4 * data?.total4Star +
      3 * data?.total3Star +
      2 * data?.total2Star +
      1 * data?.total1Star) /
    data?.totalRatings;

  return (
    <>
      <div className="md:flex md:items-center gap-10 hidden">
        <div className="flex flex-col justify-center">
          <h1 className="text-neutral-500 font-medium whitespace-nowrap">
            Customer Reviews
          </h1>
          <span className="text-zinc-800 text-[64px] font-semibold">
            {aggregate.toFixed(2)}
          </span>
          <span className="text-neutral-500 font-medium whitespace-nowrap">
            Based on {data?.totalRatings} reviews
          </span>
        </div>

        <div className="w-full h-full">
          <div className="flex items-center">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
            </div>

            <div className="h-3 mx-4 overflow-hidden w-1/4 bg-neutral-300">
              <div
                style={{
                  width: `${ratingPercentage(
                    data?.totalRatings,
                    data?.total5Star
                  )}`,
                }}
                className="h-5 bg-[#FE6600]"
              ></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">
              {data?.total5Star}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-3 mx-4 overflow-hidden w-1/4 bg-neutral-300">
              <div
                style={{
                  width: `${ratingPercentage(
                    data?.totalRatings,
                    data?.total4Star
                  )}%`,
                }}
                className="h-5 bg-[#FE6600]"
              ></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">
              {data?.total4Star}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-3 mx-4 overflow-hidden w-1/4 bg-neutral-300">
              <div
                style={{
                  width: `${ratingPercentage(
                    data?.totalRatings,
                    data?.total3Star
                  )}`,
                }}
                className="h-5 bg-[#FE6600]"
              ></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">
              {data?.total3Star}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-3 mx-4 overflow-hidden w-1/4 bg-neutral-300">
              <div
                style={{
                  width: `${ratingPercentage(
                    data?.totalRatings,
                    data?.total2Star
                  )}`,
                }}
                className="h-5 bg-[#FE6600]"
              ></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">
              {data?.total2Star}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-500 flex">
              <IoMdStarOutline size={24} color="#FE6600" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
              <IoMdStarOutline size={24} color="#777777" />
            </div>
            <div className="h-3 mx-4 overflow-hidden w-1/4 bg-neutral-300">
              <div
                style={{
                  width: `${ratingPercentage(
                    data?.totalRatings,
                    data?.total1Star
                  )}`,
                }}
                className="h-5 bg-[#FE6600]"
              ></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">
              {data?.total1Star}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full hidden mt-14 md:flex  justify-between items-center">
        <p className="text-neutral-500 text-sm w-2/3">
          Thank you very much for the reviews! These are actual, unfiltered and
          real reviews from our customers.
        </p>

        <div className="inline-flex items-start w-1/3 justify-end">
          <span>Sort by:&nbsp;</span>
          <RatingSort data={dataCard} setData={setData} />
        </div>
      </div>
    </>
  );
};

export default StarRating;
