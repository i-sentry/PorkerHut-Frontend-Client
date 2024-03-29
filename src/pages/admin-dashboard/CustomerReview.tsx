import React from "react";
import { TbRefresh } from "react-icons/tb";
import RatingStars from "../../components/RatingStars";

const CustomerReview: React.FC<{ rating: number }> = ({ rating }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="h-[255px] w-[60%] bg-[#F4F4F4] px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className=" whitespace-nowrap font-medium">Customer Reviews</h1>
        <TbRefresh
          size={24}
          className="hover:cursor-pointeryar text-[#197B30]"
        />
      </div>

      <div className="mt-5 grid grid-cols-[1fr_2fr] items-center justify-center gap-3">
        <div className="flex flex-col items-start justify-start gap-4">
          <RatingStars
            maxRating={5}
            defaultRating={4}
            iconSize={32}
            canRate={false}
          />
          <span className="block text-6xl font-black">5.0</span>
          <span className="text-xs  text-[#797979]">Based on 5600 reviews</span>
        </div>

        <div className="grid grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-[#333333]">
              <h1 className="whitespace-nowrap">Excellent</h1>
            </div>
            <div className="text-sm font-medium text-[#333333]">
              <h1 className="whitespace-nowrap">Good</h1>
            </div>
            <div className="text-sm font-medium text-[#333333]">
              <h1 className="whitespace-nowrap">Average</h1>
            </div>
            <div className="text-sm font-medium text-[#333333]">
              <h1 className="whitespace-nowrap">Below Average</h1>
            </div>

            <div className="text-sm font-medium text-[#333333] ">
              <h1 className="whitespace-nowrap">Poor</h1>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-full  overflow-hidden rounded-[50px] bg-green-200">
                <div className="h-2 w-[90%] rounded-[50px]  bg-[#17C06B]"></div>
              </div>
              <span className="text-sm font-medium text-[#797979]">4000</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-full  overflow-hidden rounded-[50px] bg-green-100">
                <div className="h-2 w-[80%] rounded-[50px]  bg-[#42D98E]"></div>
              </div>
              <span className="text-sm font-medium text-[#797979]">3500</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-full  overflow-hidden rounded-[50px] bg-yellow-200">
                <div className="h-2 w-[60%] rounded-[50px]   bg-[#FFC631]"></div>
              </div>
              <span className="text-sm font-medium text-[#797979]">2400</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-full  overflow-hidden rounded-[50px] bg-yellow-300">
                <div className="h-2 w-[40%] rounded-[50px]  bg-[#E7A53D]"></div>
              </div>
              <span className="text-sm font-medium text-[#797979]">1000</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-full  overflow-hidden rounded-[50px] bg-red-300">
                <div className="h-2 w-[20%] rounded-[50px]  bg-[#F03333]"></div>
              </div>
              <span className="text-sm font-medium text-[#797979]">1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
