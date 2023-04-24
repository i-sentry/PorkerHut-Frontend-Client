import React, { useEffect, useState } from "react";
import storeData from "../../utils/json/storeData.json";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { chunkArray } from "../../helper/chunck";
import { BsSearch } from "react-icons/bs";
import StoreCard from "../../components/admin-dashboard-components/StoreCard";
const itemsPerPage = 12;
const StoreProfile = () => {
  const [data, setData] = useState(storeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);

  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const handleChange = (value: any) => {
    setSearchValue(value);
    setData(
      storeData.filter(
        (item: { store_name: string; company_address: string; id: any }) =>
          item.store_name.toLowerCase().includes(value.toLowerCase()) ||
          item.company_address.toLowerCase().includes(value.toLowerCase()) ||
          item.id === value.toLowerCase()
      )
    );
    setCurrentPage(1);
  };
  useEffect(() => setData(storeData), [storeData]);
  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="flex items-center justify-between">
        <div className="mb-5">
          <h1 className="text-2xl font-medium ">Store Profile</h1>
          <span className="text-[#A2A2A2] font-light text-sm">
            Here you can check all available details of each store.
          </span>
        </div>
        <div>
          <div className="flex w-full items-center justify-between gap-4 relative ">
            <input
              type="search"
              value={searchValue}
              placeholder={
                "Search store name, company address or ID number...."
              }
              className="xxs:w-full md:w-[500px] bg-[#F4F4F4] focus:outline-none active:outline-none rounded-md px-3 py-2 placeholder:text-xs placeholder:font-light text-base text-[#333333] font-normal"
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {!isSearchFocused && (
              <div className="absolute right-3">
                <BsSearch />
              </div>
            )}
          </div>
        </div>
      </div>
      {data.length ? (
        <div className="grid grid-cols-4 gap-5 py-5">
          {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
            (item, index) => (
              <div key={index}>
                <StoreCard {...item} />
              </div>
            )
          )}
        </div>
      ) : (
        <div>Fetching Store Data...</div>
      )}
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
    </div>
  );
};

export default StoreProfile;
