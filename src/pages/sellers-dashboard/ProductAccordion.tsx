import { useState } from "react";
import CreateProduct from "./CreateProduct";
import RecentCreatedProduct from "./RecentCreatedProduct";

export default function ProductAccordion() {
  // const [open, setOpen] = useState(0);
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
  // const handleOpen = (value: any) => {
  //   setOpen(open === value ? 0 : value);
  // };

  return (
    <div className="px-4 pt-6 md:pt-4 lg:pt-[60px]">
      <div className="md:flex md:items-center md:justify-between ">
        <div className="">
          <div className="mb-10">
            <h1 className="mb-3 text-[#1F1F1F] xxs:text-[20px]  xxs:font-normal  xxs:leading-[23px] md:text-[36px] md:font-medium md:leading-normal">
              Create Products
            </h1>
            <span className="mt-1 font-normal text-[#A2A2A2] xxs:text-[13px] xxs:leading-[15px] md:text-[16px] md:leading-[18.75px]">
              Please select a primary category for your product
            </span>
          </div>

          <div className="mb-8 flex gap-10 xxs:hidden md:flex">
            <button
              onClick={handleCategory}
              className={` text-[16px] font-normal leading-[19px] ${
                category
                  ? "rounded-md border-[1px] border-[#197B30] px-3 py-2 text-[#197b30] "
                  : "underline"
              } `}
            >
              Browse Categories
            </button>
            <button
              onClick={handleRecent}
              className={`hidden text-[16px] font-normal leading-[19px] ${
                recent
                  ? "rounded-md border-[1px] border-[#197B30] px-3 py-2 text-[#197b30]"
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
