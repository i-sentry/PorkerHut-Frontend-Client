import React, { useState, useEffect } from "react";
import Filter from "../components/accordion-component/Accordion";
import Sort from "../components/accordion-component/Sort";
import NavBar from "../components/nav-component/NavBar";

import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { MdOutlineFilterAlt } from "react-icons/md";
import { productData } from "../utils/productData";
import FilterSidebar from "../components/accordion-component/FilterSidebarModal";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../components/featured-product-component/ProductCard";
import { chunkArray } from "../helper/chunck";
import AppLayout from "../components/utility/AppLayout";
import { AiFillStar } from "react-icons/ai";

const StorePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [data, setData] = useState(productData);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];

    useEffect(() => setData(productData), [productData]);
    
     const [rating, setRating] = useState(0);
     const [hover, setHover] = useState(0);

  return (
    <AppLayout>
      <div className="bg-[#EEEEEE] overflow-hidden relative">
        {/* <NavBar /> */}
        <FilterSidebar open={openModal} onClose={() => setOpenModal(false)} />
        <div className="bg-[#EEEEEE] pt-24">
          <div className="px-8">
            <ProductsBreadCrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Dangote Farm Store",
                  link: "/store-page",
                },
              ]}
            />
          </div>

          <div className="md:flex">
            <div className="md:w-1/4 static h-full top-[50px]  xxs:hidden md:block overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="bg-white px-6 mx-6 py-2 rounded-sm">
                  <div className=" border-b">
                    <h1 className=" font-medium">Dangote Farm Store</h1>
                    <span className="text-xs">Location covered: Abuja</span>
                  </div>
                  <div>
                    <span className="font-medium">Average Rating: 4.7/5</span>
                    <div className="flex text-yellow-500 cursor-pointer">
                      {[...Array(5)].map((start, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label className="">
                            <input
                              type="radio"
                              name="rating"
                              className="hidden"
                              value={ratingValue}
                              onClick={() => setRating(ratingValue)}
                            />
                            <AiFillStar
                              size={20}
                              color={
                                ratingValue <= (hover || rating)
                                  ? "#fe6600"
                                  : "#e4e5e9"
                              }
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(0)}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 mx-6">
                  <Filter setData={setData} menuItem={menuItems} />
                </div>
              </div>
            </div>
            <div className="md:w-3/4 bg-white xxs:w-full">
              <div className="flex items-center justify-between  pl-3">
                <div className="md:flex md:items-center md:justify-between md:gap-16 xxs:py-4">
                  <h1 className="text-xl font-medium">Dangote Farm Store</h1>
                  <div>
                    <p className="text-l text-gray-700">
                      Showing{" "}
                      <span className="font-medium">{currentPageIndex}</span> -{" "}
                      <span className="font-medium">{itemsPerPage}</span> of{" "}
                      <span className="font-medium">{data?.length}</span>{" "}
                      results
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <span className="pt-2 ml-14 text-base font-normal text-[#BDBDBD] xxs:hidden md:block">
                    Sort by:
                  </span>
                  <span className="xxs:hidden md:block">
                    <Sort />
                  </span>
                  <div className="md:hidden xxs:block flex justify-center items-end gap-2 px-2">
                    <MdOutlineFilterAlt
                      className="inline"
                      size={22}
                      onClick={() => setOpenModal(true)}
                    />
                    <span className="text-sm">Filter Products</span>
                  </div>
                </div>
              </div>

              {data?.length ? (
                <div className="grid md:grid-cols-4 mb-6 xxs:grid-cols-2">
                  {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
                    (Tdata, index) => {
                      console.log(Tdata, "Tdata");
                      return <ProductCard item={Tdata} key={Tdata.id} />;
                    }
                  )}
                </div>
              ) : (
                <div>Fetching Data...</div>
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
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </AppLayout>
  );
};

export default StorePage;