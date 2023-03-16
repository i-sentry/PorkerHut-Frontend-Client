import React from "react";
import BusinessImg from "../../assets/images/BusinessImg.png";
import { TbMessageDots } from "react-icons/tb";

export {};

const SellersHome = () => {
  return (
    <>
      <div className=" bg-[#F4F4F4]">
        <div className="buiness-banner">
          <img className="h-[280px] w-full" src={BusinessImg} alt="" />
        </div>
      </div>
      <div className="xxs:mb-32 md:flex md:flex-1 lg:flex-1 gap-5">
        <div className="upper-announce md:w-[680px]">
          <div className="announcement-div mt-5">
            <div className=" bg-[#F4F4F4] rounded-t-md">
              <p className=" text-base text-[#A2A2A2] flex items-center justify-between p-6 rounded-t-lg border-t-[#F4F4F4]">
                Announcements
                <TbMessageDots size={25} style={{ color: "red" }} />
              </p>
            </div>
          </div>
          <div className="border">
            <div className="p-6 my-5 md:my-5">
              <div className="">
                <h1 className="text-[16px] mb-4 text-[#333333]">Dec 3</h1>
                <h1 className="font-bold text-[#333333] text-[18px] mb-3">
                  December Sales!!!
                </h1>
              </div>
              <div className="">
                <h1 className="text-sm text-[#333333]">
                  Prepare for the December sales and stock up your products
                  because we will be experiencing high traffic on our site.
                  It...
                </h1>
              </div>
            </div>
            <div className=" p-7 border-t border-[#A2A2A2] my-5">
              <h1 className="text-[16px] mb-4 text-[#333333]">Nov 2</h1>
              <h1 className="font-bold text-[#333333] text-[18px] mb-3">
                Saturday Delivery!!!
              </h1>
              <p className="text-sm text-[#333333]">
                Prepare for the December sales and stock up your products
                because we will be experiencing high traffic on our site. It...
              </p>
            </div>
            <div className=" p-7 border-[#A2A2A2] border-t my-5">
              <h1 className="text-[16px] mb-4 text-[#333333]">Sept 28</h1>
              <h1 className="font-bold text-[#333333] text-[18px] mb-3">
                Welcome to Poker Hut!!!
              </h1>
              <p className="text-sm text-[#333333]">
                Dear vendor, welcome to porker hut, experience sales like never
                before. Needing any help navigating through your seller
                dashboard...
              </p>
            </div>
          </div>
        </div>

        <div className="lower-review md:flex-1 ">
          <div className="pending-div mt-5">
            <div className=" bg-[#F4F4F4] rounded-t-md">
              <p className=" text-base text-[#A2A2A2] flex items-center justify-between p-6 rounded-t-lg border-t-[#F4F4F4]">
                Total Pending Order
              </p>
            </div>
          </div>
          <div className="border">
            <div className="p-7 my-5 md:my-5">
              <div className="flex justify-between items-center">
                <h1 className="text-[16px] md:mb-4 mb-4 text-[#333333]">Today</h1>
                <h1 className="font-bold text-[#333333] text-[18px] mb-3">
                  12
                </h1>
              </div>
            </div>
            <div className="p-7 my-5 md:my-5  border-t">
              <div className="flex justify-between items-center">
                <h1 className="text-[16px] mb-4 text-[#333333]">Yesterday</h1>
                <h1 className="font-bold text-[#333333] text-[18px] mb-3">4</h1>
              </div>
            </div>
            <div className="p-7 my-5 md:my-5 border-t">
              <div className="flex justify-between items-center">
                <h1 className="text-[16px] mb-4 text-[#333333]">Older</h1>
                <h1 className="font-bold text-[#333333] text-[18px] mb-3">3</h1>
              </div>
            </div>
          </div>
          <div className=" mt-5 border">
            <div className="review-div ">
              <div className=" bg-[#F4F4F4] rounded-t-md ">
                <p className=" text-base text-[#A2A2A2] flex items-center justify-between p-6 rounded-t-lg ">
                  Review
                </p>
              </div>
              <div className=" p-7 my-3 flex justify-between items-center  ">
                <h1 className="text-[16px] mb-4 text-[#333333]">
                  Average Customer Rating
                  <p className=" text-[#22C55E] text-sm mt-2">Excellent</p>
                </h1>
                <h1 className="font-bold text-[#333333] text-[18px] mb-3">
                  4.67
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SellersHome;
