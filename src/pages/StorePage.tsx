import React, { useState, useEffect } from "react";
// import Filter from "../components/accordion-component/Accordion";
import Sort from "../components/accordion-component/Sort";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";

// import { productData } from "../utils/productData";
import FilterSidebar from "../components/accordion-component/FilterSidebarModal";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../components/featured-product-component/ProductCard";
import { chunkArray } from "../helper/chunck";
import AppLayout from "../components/utility/AppLayout";
// import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useGetApprovedProductByVendor } from "../services/hooks/Vendor/products";
import { LuSettings2 } from "react-icons/lu";
import Filtercomp from "../components/custom-filter/FilterComp";
import RatingStars from "../components/RatingStars";

// import { GoSettings } from "react-icons/go";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const StorePage: React.FC<iProps> = ({ handleClick }) => {
  const { id } = useParams();
  // const { store } = useParams();
  const { data: getApprovedProducts, isLoading } =
    useGetApprovedProductByVendor(id);
  const [data, setData] = useState<any>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  // const menuItems = [...new Set(productData.map((d: any) => d.category))];

  const handleApplyClick = () => {
    const lowerCaseSelectedItems = selectedItems.map((item: any) =>
      item.toLowerCase(),
    );

    // Check if selectedItems array is empty
    if (lowerCaseSelectedItems.length === 0) {
      // If empty, set filteredData to the original data
      setFilteredData(data);
      return;
    }

    // Filter the data based on selectedItems, city, and price range
    const newFilteredData = data.filter((item: any) => {
      const categoryMatch = lowerCaseSelectedItems.includes(
        item?.information?.subcategory?.name.toLowerCase(),
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
    setOpenModal(false);
  };

  const handleClear = () => {
    setSelectedItems([]);
    setFilteredData(data);
  };

  useEffect(() => {
    setData(getApprovedProducts?.data);
  }, [getApprovedProducts?.data, isLoading]);

  useEffect(() => {
    // Initialize filteredData with the original data when data changes
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const totalRating = data
    ?.map((rating: any) => rating?.avgRating)
    ?.reduce((acc: any, cur: any) => acc + cur, 0);

  const avgRating = totalRating / data?.length;

  return (
    <AppLayout>
      <div className="relative overflow-hidden bg-[#EEEEEE] pb-10 md:px-4">
        {/* <NavBar /> */}
        <FilterSidebar
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          data={data}
          handleApplyClick={handleApplyClick}
          handleClear={handleClear}
        />
        <div className="bg-[#EEEEEE] pt-6 ">
          <div className="mb-2 block px-4">
            <ProductsBreadCrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Products",
                  link: "/products",
                },
                {
                  name: `${isLoading ? "" : getApprovedProducts?.data?.[0].vendor?.sellerAccountInformation?.shopName}`,
                  link: "/store-page",
                },
              ]}
            />
          </div>

          {isLoading && (
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="flex flex-grow flex-col gap-4">
                <div className="h-[200px] space-y-5 bg-white p-4">
                  <div className="text-loader h-[20px_!important]"></div>
                  <div className="text-loader"></div>
                  <hr className="my-4 animate-pulse" />
                  <div className="text-loader"></div>
                  <div className="text-loader"></div>
                </div>
                <div className="hidden h-[400px] space-y-5 bg-white p-4 lg:block">
                  <div className="text-loader"></div>
                  <div className="text-loader h-[20px_!important]"></div>
                  <div className="text-loader h-[20px_!important]"></div>
                  <div className="text-loader h-[20px_!important]"></div>
                  <div className="text-loader h-[20px_!important]"></div>
                </div>
              </div>
              <div className="space-y-5 bg-white p-4 xxs:w-full lg:w-3/4">
                <div className="text-loader h-[30px_!important]"></div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="skeleton-loader"></div>
                  <div className="skeleton-loader"></div>
                  <div className="skeleton-loader"></div>
                  <div className="skeleton-loader"></div>
                  <div className="skeleton-loader"></div>
                  <div className="skeleton-loader"></div>
                </div>
              </div>
            </div>
          )}

          {!isLoading && data && (
            <div className="gap-8 lg:flex">
              <div className="static top-[50px] h-full overflow-hidden  lg:block lg:w-1/4">
                <div className="flex flex-col gap-4">
                  <div className="mx-4 mb-4 rounded-sm bg-white px-6 xxs:py-6 md:mx-0 md:mb-0 md:py-4">
                    <div className=" border-b">
                      <h1 className="mb-2 pb-2 text-[18px] font-medium capitalize leading-[12px] md:pb-0">
                        {
                          getApprovedProducts?.data?.[0].vendor
                            ?.sellerAccountInformation?.shopName
                        }
                      </h1>

                      <div className="mb-2">
                        <span className="text-sm font-normal text-zinc-800">
                          {" "}
                          Location Covered:{" "}
                        </span>
                        <span className="text-[16px] font-normal capitalize leading-[16px] text-[#333333] ">
                          {
                            getApprovedProducts?.data?.[0].vendor
                              ?.businessInformation?.city
                          }
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2">
                        <span className="mt-2  pb-2 text-lg  font-medium leading-[12px] text-zinc-800">
                          Average Rating: {avgRating}
                          /5
                        </span>
                      </div>
                      <div className="mt-2 flex cursor-pointer text-yellow-500">
                        <RatingStars
                          maxRating={5}
                          iconSize={24}
                          canRate={false}
                          defaultRating={avgRating}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 xxs:hidden lg:block">
                    <Filtercomp
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                      data={data}
                      handleApplyClick={handleApplyClick}
                      handleClear={handleClear}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white px-4 xxs:w-full lg:mt-0 lg:w-3/4">
                <div className="flex items-center justify-between ">
                  <div className="xxs:py-4 md:flex md:items-center md:justify-between md:gap-16">
                    <h1 className="text-xl font-medium md:pl-4">
                      {
                        getApprovedProducts?.data?.[0].vendor
                          ?.sellerAccountInformation?.shopName
                      }
                    </h1>
                    <div>
                      <p className="text-base text-neutral-400">
                        Showing{" "}
                        <span className="font-medium">{currentPageIndex}</span>{" "}
                        - <span className="font-medium">{itemsPerPage}</span> of{" "}
                        <span className="font-medium">{data?.length}</span>{" "}
                        results
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <span className="ml-14 pt-2 text-base font-normal text-[#BDBDBD] xxs:hidden lg:block">
                      Sort by:
                    </span>
                    <span className="xxs:hidden lg:block">
                      <Sort data={filteredData} setData={setData} />
                    </span>
                    <div
                      onClick={() => setOpenModal(true)}
                      className="flex cursor-pointer items-end justify-center gap-2 px-2 lg:hidden"
                    >
                      <LuSettings2 className=" " size={22} />
                      <span className="text-sm">Filter Products</span>
                    </div>
                  </div>
                </div>

                {filteredData && filteredData?.length >= 1 ? (
                  <div className="mb-6 grid gap-4 xxs:grid-cols-2 md:grid-cols-3">
                    {chunkArray(filteredData, itemsPerPage)[
                      currentPageIndex - 1
                    ]?.map((Tdata, index) => {
                      return <ProductCard item={Tdata} key={index} />;
                    })}
                  </div>
                ) : (
                  <div className="my-16 flex flex-col items-center justify-center">
                    <svg
                      className="h-5 w-5 text-gray-400"
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
                      currentPageIndex !==
                      chunkArray(filteredData, itemsPerPage).length
                        ? setCurrentPageIndex(currentPageIndex + 1)
                        : null
                    }
                    className={
                      (currentPageIndex ===
                      chunkArray(filteredData, itemsPerPage).length
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
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default StorePage;
