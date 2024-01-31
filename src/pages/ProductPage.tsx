import React, { useState, useEffect } from "react";
import Filter from "../components/accordion-component/Accordion";
import Sort from "../components/accordion-component/Sort";

import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import FilterSidebar from "../components/accordion-component/FilterSidebarModal";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../components/featured-product-component/ProductCard";
import { chunkArray } from "../helper/chunck";
import AppLayout from "../components/utility/AppLayout";
import { FiSettings } from "react-icons/fi";
import { useGetAllProducts } from "../services/hooks/users/products";
import { SkeletonLoader } from "../components/category-component/Category";
import Spinner from "../components/Spinner/Spinner";
import { useGetAllCategories } from "../services/hooks/Vendor/category";
import { TbLoader3 } from "react-icons/tb";
import Filtercomp from "../components/custom-filter/FilterComp";
import { CgSpinnerAlt } from "react-icons/cg";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const ProductPage: React.FC<iProps> = ({ handleClick }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  const { data: getAllProducts, isLoading } = useGetAllProducts();

  // console.log({ menuItems }, "here");
  useEffect(
    () =>
      setData(
        getAllProducts?.data?.filter(
          (product: any) => product?.approvalStatus === "approved"
        )
      ),
    [getAllProducts?.data]
  );
  useEffect(() => {
    // Initialize filteredData with the original data when data changes
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const prev = () => {
    if (currentPageIndex !== chunkArray(data, itemsPerPage).length) {
      setCurrentPageIndex(currentPageIndex + 1);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    if (currentPageIndex !== 1) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(selectedItems, "selectedItems");
  console.log(data, "data");

  const handleApplyClick = () => {
    const lowerCaseSelectedItems = selectedItems.map((item) =>
      item.toLowerCase()
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
        item.information.subcategory.name.toLowerCase()
      );
      const cityMatch = lowerCaseSelectedItems.includes(
        item.vendor.businessInformation.city.toLowerCase()
      );

      // Adjust the logic based on your requirements
      return categoryMatch || cityMatch;
      // return categoryMatch && cityMatch && priceMatch;
    });

    console.log("Filtered Data:", newFilteredData);
    console.log("Selected Items:", selectedItems);

    // Update filteredData state
    setFilteredData(newFilteredData);
  };
  const handleClear = () => {
    setSelectedItems([]);
    setFilteredData(data);
  };

  return (
    <>
      <FilterSidebar
        open={openModal}
        onClose={() => setOpenModal(false)}
        setData={setData}
        // menuItem={allCategories?.data}
        handleClick={handleClick}
      />

      <AppLayout>
        <div className="bg-[#EEEEEE] overflow-hidden relative lg:pb-10">
          <div className="bg-[#EEEEEE] mt-24 lg:px-14 xxs:px-0 ">
            <div className="lg:px-0 xxs:px-4">
              <ProductsBreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "Product",
                    link: "/products",
                  },
                ]}
              />
            </div>

            <div className="lg:flex gap-8 ">
              <div className="lg:w-1/4 static h-full top-[50px] bg-white p-6 xxs:hidden lg:block overflow-hidden rounded-sm">
                <Filtercomp
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  data={data}
                  handleApplyClick={handleApplyClick}
                  handleClear={handleClear}
                />
              </div>

              <div className="xxs:w-full lg:w-3/4">
                {filteredData && filteredData?.length >= 1 ? (
                  <div className=" bg-white w-full">
                    <div className="flex items-center justify-between border-b   pl-3">
                      <div className="lg:flex lg:items-center lg:justify-between lg:gap-8 xxs:py-4">
                        <h1 className="lg:text-xl xxs:text-lg text-[#333333] font-medium xxs:pl-0 ">
                          All Products
                        </h1>
                        <div className="flex items-center gap-3">
                          {filteredData?.length && !isLoading && (
                            <p className="text-sm text-[#A2A2A2] ">
                              Showing{" "}
                              <span className="font-medium">
                                {currentPageIndex}
                              </span>{" "}
                              -{" "}
                              <span className="font-medium">
                                {itemsPerPage}
                              </span>{" "}
                              of{" "}
                              <span className="font-medium">
                                {filteredData?.length}
                              </span>{" "}
                              results
                            </p>
                          )}

                          {isLoading && (
                            <TbLoader3 size={24} className="animate-spin" />
                          )}
                        </div>
                      </div>

                      <div className="flex items-center ">
                        <span className="pt-2 ml-14 text-sm font-normal text-[#BDBDBD] xxs:hidden lg:block">
                          Sort by:
                        </span>
                        <span className="xxs:hidden lg:block">
                          <Sort data={filteredData} setData={setData} />
                        </span>
                        <div className="lg:hidden xxs:flex justify-center items-end gap-2 px-3 font-medium ">
                          <FiSettings
                            className="rotate-90 "
                            size={22}
                            onClick={() => setOpenModal(true)}
                          />
                          <span
                            onClick={() => setOpenModal(true)}
                            className="text-sm"
                          >
                            Filter Products
                          </span>
                        </div>
                      </div>
                    </div>
                    {filteredData?.length ? (
                      <div className="grid lg:grid-cols-3 mb-6 xxs:grid-cols-2 lg:gap-3  xxs:gap-4  lg:px-0 xxs:px-4">
                        {chunkArray(Object.values(filteredData), itemsPerPage)[
                          currentPageIndex - 1
                        ]?.map((Tdata, index) => {
                          return <ProductCard item={Tdata} key={index} />;
                        })}
                      </div>
                    ) : (
                      <div className="grid lg:grid-cols-3 mb-6 xxs:grid-cols-2 lg:gap-3  xxs:gap-4  lg:px-4 xxs:px-4 ">
                        {Array.from({ length: 12 }).map((_, index) => (
                          <SkeletonLoader />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-center gap-1    bg-white px-4 py-3 sm:px-6">
                      <button
                        onClick={next}
                        className={
                          (currentPageIndex === 1 ? "no-item" : "") +
                          " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white  rounded-l-md p-1"
                        }
                      >
                        <RxCaretLeft size={16} />
                      </button>
                      <div className="pagination flex gap-1 items-center">
                        {chunkArray(filteredData, itemsPerPage).map(
                          (_, index) => {
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
                          }
                        )}
                      </div>

                      <button
                        onClick={prev}
                        className={
                          (currentPageIndex ===
                          chunkArray(filteredData, itemsPerPage).length
                            ? "no-items"
                            : "") +
                          " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white p-1 rounded-r-md"
                        }
                      >
                        <RxCaretRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center my-16">
                    {/* <svg
                      className="w-12 h-12 text-gray-400"
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
                    </p> */}

                    <CgSpinnerAlt size={80} className="animate-spin" />
                    <p className="mt-4">Fetching Products...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default ProductPage;

export interface IProduct {
  _id: string;
  approvalStatus: string;
  avgRating: number;
  createdAt: string;
  details: {
    deliveryDetails: string;
    nutritionalValue: string;
    productContent: string;
    productDescription: string;
    productWeight: number;
  };
  featured: boolean;
  images: string[];
  information: {
    category: {
      _id: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    categoryQuestions: {
      // Define the structure of categoryQuestions if available
    }[];
    productName: string;
    subcategory: {
      _id: string;
      name: string;
      description: string;
      parent: string;
      createdAt: string;
      updatedAt: string;
    };
  };
  pricing: {
    productPrice: number;
    quantity: number;
    saleEndDate: string;
    saleStartDate: string;
    _id: string;
  };
  reviews: any[];
  updatedAt: string;
  vendor: {
    businessInformation: {
      CACCertificateFile: string;
      CACRegistrationNumber: string;
      IDFile: string;
      IDType: string;
      TINCertificateFile: string;
      VATRegistered: string;
      address1: string;
      address2: string;
      businessOwnerName: string;
      city: string;
      companyRegisteredName: string;
      dateOfBirth: string;
    };
    pickupAddresses: any[];
    profilePhoto: string;
    sellerAccountInformation: {
      accountOwnersName: string;
      additionalPhoneNumber: string;
      email: string;
      entityType: string;
      password: string;
      phoneNumber: string;
      shopName: string;
    };
    storeStatus: string;
    vendorBankAccount: {
      bankName: string;
      accountName: string;
      accountNumber: string;
    };
    __v: number;
    _id: string;
  };
  visibilityStatus: string;
  __v: number;
}
