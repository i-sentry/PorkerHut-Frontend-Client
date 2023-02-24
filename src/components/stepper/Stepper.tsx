import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Stepper.css";

const Stepper = () => {
  const step = [
    {
      id: 1,
      label: "Order Placed",
      time: "Monday 15-01-2023",
    },
    {
      id: 2,
      label: "Pending Confirmation",
      time: "Monday 15-01-2023",
    },
    {
      id: 3,
      label: "Shipped",
      time: "Monday 16-01-2023",
    },
    {
      id: 4,
      label: "Delivered",
      time: "Monday 16-01-2023",
    },
  ];
  return (
    <div className="">
      <ul
        className=" relative m-0 list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
        data-te-stepper-init
        data-te-stepper-type="vertical"
      >
        <li
          data-te-stepper-step-ref
          className="relative h-20 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-[2px] after:bg-[#197B30] after:content-[''] dark:after:bg-neutral-600"
        >
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline"
          >
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#197B30] text-sm font-medium text-white"
            >
              <BiCheck size={20} />
            </span>
            <div className="flex flex-col">
              <span className=" text-xs">Order Placed</span>
              <span className=" text-sm">Monday 15-01-2023</span>
            </div>
          </div>
        </li>
        <li
          data-te-stepper-step-ref
          className="relative h-20 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-[2px] after:bg-[#197B30] after:content-[''] dark:after:bg-neutral-600"
        >
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#197B30] text-sm font-medium text-white"
            >
              <BiCheck size={20} />
            </span>
            <div className="flex flex-col">
              <span className=" text-xs">Pending Confirmation</span>
              <span className=" text-sm">Monday 15-01-2023</span>
            </div>
          </div>
        </li>
        <li
          data-te-stepper-step-ref
          className="relative h-20 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-[2px] after:bg-[#197B30]"
        >
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#197B30] text-sm font-medium text-white"
            >
              <BiCheck size={20} />
            </span>
            <div className="flex flex-col">
              <span className=" text-xs">Shipped</span>
              <span className=" text-sm">Monday 15-01-2023</span>
            </div>
          </div>
        </li>
        <li data-te-stepper-step-ref className="relative h-20">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] "
          >
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#197B30] text-sm font-medium text-white"
            >
              <BiCheck size={20} />
            </span>
            <div className="flex flex-col">
              <span className=" text-xs">Delivered</span>
              <span className=" text-sm">Monday 15-01-2023</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stepper;
