import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import RecentCreatedProduct from "./RecentCreatedProduct";

export default function ProductAccordion() {
  const [open, setOpen] = useState(0);
  const [category, setCategory] = useState(true);
  const [recent, setRecent] = useState(false);

  const handleCategory = () => {
    setCategory(true);
    setRecent(false);
  };

  const handleRecent = () => {
    setRecent(true);
    setCategory(false);
  };
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" xxs:px-4 md:px-0">
      <div className="md:flex md:items-center md:justify-between ">
        <div className="">
          <div className="mb-10">
            <h1 className="md:text-[36px] md:leading-[42px] md:font-medium  xxs:font-normal  mb-3 xxs:text-[20px] xxs:leading-[23px] text-[#1F1F1F]">
              Create Products
            </h1>
            <span className="text-[#A2A2A2] md:text-[16px] md:leading-[18.75px] font-normal xxs:text-[13px] xxs:leading-[15px] mt-1">
              Please select a primary category for your product
            </span>
          </div>

          <div className="mb-8 flex gap-10 xxs:hidden md:flex">
            <button
              onClick={handleCategory}
              className={` text-[16px] leading-[19px] font-normal ${
                category
                  ? "border-[1px] rounded-md border-[#197B30] px-3 text-[#197b30] py-2 "
                  : "underline"
              } `}
            >
              Browse Categories
            </button>
            <button
              onClick={handleRecent}
              className={`text-[16px] leading-[19px] font-normal ${
                recent
                  ? "border-[1px] rounded-md border-[#197B30] px-3 py-2 text-[#197b30]"
                  : "underline"
              } `}
            >
              Recently Used Categories
            </button>
          </div>
        </div>

        {/* <div className="xxs:mb-10 md:mb-0">
          <div className="relative flex items-center justify-center md:px-5 ">
            <div className="text-[#1F1F1F] absolute top-1/2 -translate-y-1/2 md:left-[350px] xxs:left-[300px] h-9 bg-[#F4F4F4] w-10 flex items-center justify-center rounded-r-lg">
              <HiOutlineSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Order  number, item name or other criteria"
              className="text-sm focus:outline-none active:outline-none h-9 w-[350px] bg-[#F4F4F4] rounded-l-lg pl-4 rounded-r-lg"
            />
          </div>
        </div> */}
      </div>

      <div>
        {category && <CreateProduct />}
        {recent && <RecentCreatedProduct />}
      </div>
    </div>
  );
}
