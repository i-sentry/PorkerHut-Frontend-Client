import React, { useState, useEffect } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../components/featured-product-component/ProductCard";
import { chunkArray } from "../helper/chunck";
import { productData } from "../utils/productData";
import AppLayout from "../components/utility/AppLayout";
const FavouriteProductPage = () => {
  const [data, setData] = useState<any[]>(productData);
  let itemsPerPage = 8;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  useEffect(() => setData(productData), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AppLayout>
      <div className="mt-24">
        <div className="flex justify-center items-center">
          <h1 className="font-medium md:text-2xl xxs:text-lg">My Favorite</h1>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
      </div>
      {data.length ? (
        <>
          <div className="grid md:grid-cols-4 xxs:gap-5 md:px-10 xxs:px-4 xxs:grid-cols-2">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (item: any) => {
                return <ProductCard item={item} />;
              }
            )}
          </div>
          <div className="flex items-center justify-center gap-1    bg-white px-4 py-3 sm:px-6 xxs:pt-8">
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
      ) : (
        <div className="flex justify-center items-center h-90%">
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-8">
            <div>Empty state</div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default FavouriteProductPage;
