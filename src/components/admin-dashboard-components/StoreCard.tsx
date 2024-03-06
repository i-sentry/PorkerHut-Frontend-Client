import React, { useState } from "react";
import { Tooltip } from "../utility/ToolTip";
import { TbDots } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import Popover from "../utility/PopOver";
import StoreProfileOverlay from "./StoreProfileOverlay";

// interface IStoreCardProps {
//   store_name: any;
//   id: number;
//   email: string;
//   company_address: string;
//   phone: string;
//   total_orders: number;
//   total_failed_orders: number;
//   data_joined: string;
//   status: string;
// }

const StoreCard = ({ item, setIsOpen }: any) => {
  const { storeStatus } = item;
  console.log(item, "storee items");

  return (
    <>
      <div
        className={`relative h-auto w-full rounded-md border border-[#D9D9D9]  p-5 ${
          storeStatus === "deactivated" ? "" : ""
        }`}
      >
        {storeStatus === "deactivated" && (
          <div className="absolute inset-0 rounded-md  bg-[#181717c7] ">
            <div className="flex h-full items-center justify-center">
              <p
                className="z-10 flex select-none items-center justify-center text-xl font-normal text-[#F91919]
         "
              >
                Deactivated
              </p>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-6 mt-1 cursor-pointer">
          <Popover
            buttonContent={<TbDots size={24} className="  cursor-pointer" />}
            placementOrder={"left"}
            closeOnClick={true}
          >
            <div className="w-[150px] py-2">
              <button
                className="w-full border-b py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                onClick={() => setIsOpen(true)}
              >
                Store Information
              </button>
              <button className="w-full border-b py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]">
                Activate
              </button>
              <button className="w-full border-b py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]">
                Deactivate
              </button>
              <button className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]">
                Delete
              </button>
            </div>
          </Popover>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full">
            <FaUserCircle size={42} color="#A2A2A2" />
          </div>
          <div className="mb-3 text-center">
            <span className=" text-xl font-semibold capitalize text-[#333333] ">
              {item?.sellerAccountInformation?.shopName}
            </span>
          </div>
        </div>

        <ul className="mt-2 space-y-3">
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              ID:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              <Tooltip message={item?._id}>
                {item?._id?.slice(0, 10)}...
              </Tooltip>
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              Email:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {item?.sellerAccountInformation?.email}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              Company Address:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              <Tooltip message={item?.businessInformation?.address1}>
                <span className="w-28 truncate whitespace-nowrap">
                  {item?.businessInformation?.address1}
                </span>
              </Tooltip>
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              Phone:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {item?.sellerAccountInformation?.phoneNumber}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              Total Orders:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {/* {item?.sellerAccountInformation?.phoneNumber} */}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              Total Failed Orders:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {/* {item?.sellerAccountInformation?.phoneNumber} */}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-medium text-[#A2A2A2] xl:text-base">
              Joined:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {/* {item?.sellerAccountInformation?.phoneNumber} */}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StoreCard;
