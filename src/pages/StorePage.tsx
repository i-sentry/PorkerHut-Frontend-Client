import React, { useState, useEffect } from "react";
import Filter from "../components/accordion-component/Accordion";
import Sort from "../components/accordion-component/Sort";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";

import { productData } from "../utils/productData";
import FilterSidebar from "../components/accordion-component/FilterSidebarModal";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../components/featured-product-component/ProductCard";
import { chunkArray } from "../helper/chunck";
import AppLayout from "../components/utility/AppLayout";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { useGetApprovedProductByVendor } from "../services/hooks/Vendor/products";


// import { GoSettings } from "react-icons/go";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const StorePage: React.FC<iProps> = ({ handleClick }) => {
  const { id } = useParams()
  const { store } = useParams()
  console.log(store, "letsGo")

  // const getAllProducts = useGetProductByVendor(id)
  const {data: getApprovedProducts} = useGetApprovedProductByVendor(id)

  // console.log(getAllProducts, "Store")
  console.log(getApprovedProducts, "Page")
 

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [data, setData] = useState([]);
  console.log(data, "data")
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];

  // console.log(${getApprovedProducts?.data?.information?.productName}, "page")

  useEffect(() => setData(getApprovedProducts?.data), [getApprovedProducts?.data]);
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // useEffect(() => {
  //   const filteredData = productData.filter(
  //     (item) => item.title === id
  //   );
  //   setData(filteredData);
  // }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="bg-[#EEEEEE] overflow-hidden relative pb-10 md:px-14">
        {/* <NavBar /> */}
        <FilterSidebar
          open={openModal}
          onClose={() => setOpenModal(false)}
          handleClick={handleClick}
          setData={setData}
          menuItem={menuItems}

        />
        <div className="bg-[#EEEEEE] pt-24 ">
          <div className="xxs:hidden md:block">
            <ProductsBreadCrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: `${getApprovedProducts?.data?.[0].vendor?.sellerAccountInformation?.shopName}`,
                  link: "/store-page",
                },
              ]}
            />
          </div>

          <div className="md:flex gap-8">
            <div className="md:w-1/4 static h-full top-[50px]  md:block overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="bg-white px-6 xxs:py-6 md:py-4 rounded-sm mx-4 mb-10 md:mb-0 md:mx-0">
                  <div className=" border-b">
                    <h1 className="text-[18px] leading-[12px] font-medium pb-2 md:pb-0">
                    {getApprovedProducts?.data?.[0].vendor?.sellerAccountInformation?.shopName}
                    </h1>

                    <div className="mb-2">
                      <span className="text-[14px] leading-[16px] font-normal text-[#333333] ">
                        Location covered: Abuja
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <span className="text-[18px] leading-[12px] font-medium pb-2 mt-2">
                        Average Rating: 4.7/5
                      </span>
                    </div>
                    <div className="flex text-yellow-500 cursor-pointer mt-2">
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
                <div className="bg-white p-6 xxs:hidden md:block">
                  <Filter
                    setData={setData}
                    menuItem={menuItems}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-3/4 bg-white xxs:w-full px-4">
              <div className="flex items-center justify-between ">
                <div className="md:flex md:items-center md:justify-between md:gap-16 xxs:py-4">
                  <h1 className="text-xl font-medium md:pl-4">{getApprovedProducts?.data?.[0].vendor?.sellerAccountInformation?.shopName}</h1>
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
                    <Sort data={data} setData={setData} />
                  </span>
                  <div className="md:hidden flex justify-center items-end gap-2 px-2">
                    <FiSettings
                      className="rotate-90 "
                      size={22}
                      onClick={() => setOpenModal(true)}
                    />
                    <span className="text-sm">Filter Products</span>
                  </div>
                </div>
              </div>

              {data?.length ? (
                <div className="grid md:grid-cols-3 gap-4 mb-6 xxs:grid-cols-2">
                  {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
                    (Tdata, index) => {
                      console.log(Tdata, "Tdata");
                      return <ProductCard item={Tdata} key={index} />;
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
