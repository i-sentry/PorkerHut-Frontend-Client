import React, { useState, useEffect } from "react";
import Sort from "../../components/accordion-component/Sort";

import ProductsBreadCrumbs from "../../components/story-components/ProductsBreadCrumbs";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../../components/featured-product-component/ProductCard";
import { chunkArray } from "../../helper/chunck";
import AppLayout from "../../components/utility/AppLayout";
import { useLocation, useParams } from "react-router-dom";
// import ProductFilter from "./ProductFilter";
import { SkeletonLoader } from "../../components/category-component/Category";
import { useGetOneCategory } from "../../services/hooks/Vendor/category";
import { cap } from "../../components/category-card-component/Card";
import { useGetAllProducts } from "../../services/hooks/Vendor/products";
import FilterSidebar from "../../components/accordion-component/FilterSidebarModal";
import Filtercomp from "../../components/custom-filter/FilterComp";
import { IProduct } from "../ProductPage";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const ProductCategory: React.FC<iProps> = ({ handleClick }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  // const getCategory = useGetOneCategory(id);
  const { data: getAllProducts, isLoading } = useGetAllProducts();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [q]);

  //@ts-ignore
  const menuItems = getAllProducts?.data
    .filter((d: any) => d.vendor !== undefined)
    .map((d: any) => d.vendor.businessInformation.city);

  useEffect(() => {
    const filter = (id: any) => {
      const newItems = getAllProducts?.data.filter((data: any) => {
        return data?.information?.category?.name === q;
      });
      //@ts-ignore
      setData(newItems);
      setFilteredData(newItems);
    };
    filter(id);
  }, [getAllProducts?.data, id]);

  const handleApplyClick = () => {
    const lowerCaseSelectedItems = selectedItems.map((item) =>
      item.toLowerCase(),
    );

    // Check if selectedItems array is empty
    if (lowerCaseSelectedItems.length === 0) {
      // If empty, set filteredData to the original data
      setFilteredData(data);
      return;
    }

    // Filter the data based on selectedItems, city, and price range
    const newFilteredData = data.filter((item) => {
      const categoryMatch = lowerCaseSelectedItems.includes(
        item.information.subcategory.name.toLowerCase(),
      );
      const cityMatch = lowerCaseSelectedItems.includes(
        item.vendor.businessInformation.city.toLowerCase(),
      );

      // Adjust the logic based on your requirements
      return categoryMatch || cityMatch;
      // return categoryMatch && cityMatch && priceMatch;
    });

    // Update filteredData state
    setFilteredData(newFilteredData);
  };
  const handleClear = () => {
    setSelectedItems([]);
    setFilteredData(data);
  };

  return (
    <AppLayout>
      <div className="relative overflow-hidden bg-[#EEEEEE]">
        <FilterSidebar
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          data={data}
          handleApplyClick={handleApplyClick}
          handleClear={handleClear}
        />
        <div className="mt-3.5 bg-[#EEEEEE] xxs:px-0 lg:mt-[32px] lg:px-4">
          <div className="xxs:px-4 lg:px-0">
            <ProductsBreadCrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  //@ts-ignore
                  name: cap(q),
                  link: "/pork",
                },
              ]}
            />
          </div>

          <div className="gap-8 lg:flex">
            <div className="static top-[50px] h-full overflow-hidden rounded-sm bg-white p-6 xxs:hidden lg:block lg:w-1/4">
              <Filtercomp
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                data={data}
                handleApplyClick={handleApplyClick}
                handleClear={handleClear}
              />
            </div>
            <div className="bg-white xxs:w-full lg:w-3/4">
              <div className="flex items-center justify-between border-b  pl-3">
                <div className="gap-5 xxs:py-4 lg:flex lg:items-center lg:justify-between">
                  <h1 className="text-[24px] font-medium leading-normal text-[#333333]">
                    {/* @ts-ignore */}
                    {cap(q)}
                  </h1>
                  <div>
                    <p className="text-[13px] leading-normal text-[#A2A2A2]">
                      Showing <span className="">{currentPageIndex}</span> -{" "}
                      <span className="">{itemsPerPage}</span> of{" "}
                      <span className="">{data?.length}</span> results
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <span className="ml-14 pt-2 text-base font-normal text-[#BDBDBD] xxs:hidden lg:block">
                    Sort by:
                  </span>
                  <span className="xxs:hidden lg:block">
                    <Sort data={data} setData={setData} />
                  </span>
                  <div className="flex items-end justify-center gap-2 px-2 xxs:block lg:hidden">
                    <MdOutlineFilterAlt
                      className="inline"
                      size={22}
                      onClick={() => setOpenModal(true)}
                    />
                    <span className="text-sm">Filter Products</span>
                  </div>
                </div>
              </div>

              {isLoading && (
                <div className="mb-6 grid xxs:grid-cols-2 xxs:gap-4 xxs:px-4  lg:grid-cols-3  lg:gap-3 lg:px-4 ">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonLoader key={index} />
                  ))}
                </div>
              )}

              {!isLoading && filteredData?.length ? (
                <div className="mb-6 grid xxs:grid-cols-2 xxs:gap-4 xxs:px-4  lg:grid-cols-3  lg:gap-3 lg:px-0">
                  {chunkArray(filteredData, itemsPerPage)[
                    currentPageIndex - 1
                  ]?.map((Tdata, index) => {
                    //@ts-ignore
                    return (
                      <ProductCard item={Tdata} key={`product-${index}`} />
                    );
                  })}
                </div>
              ) : (
                <div className="my-16 flex flex-col items-center justify-center">
                  <svg
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 3a2 2 0 11-4 0 2 2 0 014 0zM4 8a2 2 0 100 4h16a2 2 0 100-4H4z"></path>
                    <path
                      d="M4 14v5a2 2 0 002 2h12a2 2 0 002-2v-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">
                    No products available.
                  </p>
                </div>
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
                    " rounded-l-md border-2  border-[#A2A2A2] p-1  hover:bg-[#A2A2A2] hover:text-white"
                  }
                >
                  <RxCaretLeft size={16} />
                </button>
                <div className="pagination flex items-center gap-1">
                  {chunkArray(filteredData, itemsPerPage).map((_, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentPageIndex(index + 1)}
                        className={` border-2   border-[#A2A2A2]  ${
                          currentPageIndex === index + 1
                            ? "active-page-index flex-1 rounded-md  border-[#197B30] p-[1px] px-2 text-[#197B30]"
                            : "flex-1 rounded-md border-[#A2A2A2] p-[1px] px-2 text-[#A2A2A2] hover:bg-slate-100"
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() =>
                    currentPageIndex !== chunkArray(data, itemsPerPage)?.length
                      ? setCurrentPageIndex(currentPageIndex + 1)
                      : null
                  }
                  className={
                    (currentPageIndex === chunkArray(data, itemsPerPage)?.length
                      ? "no-items"
                      : "") +
                    " rounded-r-md border-2  border-[#A2A2A2] p-1 hover:bg-[#A2A2A2] hover:text-white"
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

export default ProductCategory;
