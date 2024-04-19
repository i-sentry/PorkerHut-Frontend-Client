import React, { useState, useEffect } from "react";
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
import { TbLoader3 } from "react-icons/tb";
import Filtercomp from "../components/custom-filter/FilterComp";
import { CgSpinnerAlt } from "react-icons/cg";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
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

  console.log(isLoading, "isLoading");
  console.log(getAllProducts, "isLoading");

  useEffect(
    () =>
      setData(
        getAllProducts?.data?.filter(
          (product: any) =>
            product?.approvalStatus === "approved" &&
            product?.visibilityStatus === "active",
        ),
      ),
    [getAllProducts?.data],
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
    setOpenModal(false);
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
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        data={data}
        handleApplyClick={handleApplyClick}
        handleClear={handleClear}
      />

      <AppLayout>
        <div className="relative overflow-hidden bg-[#EEEEEE] lg:pb-10">
          <div className="mt-5 bg-[#EEEEEE] xxs:px-0 lg:mt-7 lg:px-4 ">
            <div className="xxs:px-4 lg:px-0">
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

            <div className="gap-8 lg:flex ">
              <div className="static top-[50px] h-full overflow-hidden rounded-sm bg-white p-6 xxs:hidden lg:block lg:w-1/4">
                <Filtercomp
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  data={data}
                  handleApplyClick={handleApplyClick}
                  handleClear={handleClear}
                />
              </div>

              <div className="xxs:w-full lg:w-3/4">
                {isLoading && (
                  // <div className="my-16 flex flex-col items-center justify-center">
                  //   <CgSpinnerAlt size={80} className="animate-spin" />
                  //   <p className="mt-4">Fetching Products...</p>
                  // </div>
                  <div className="mb-6 grid xxs:grid-cols-2 xxs:gap-4 xxs:px-4  lg:grid-cols-3  lg:gap-3 lg:px-4 ">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <SkeletonLoader key={index} />
                    ))}
                  </div>
                )}
                {!isLoading && filteredData && filteredData?.length >= 1 && (
                  <div className=" w-full bg-white">
                    <div className="flex items-center justify-between border-b   pl-3">
                      <div className="xxs:py-4 lg:flex lg:items-center lg:justify-between lg:gap-8">
                        <h1 className="font-medium text-[#333333] xxs:pl-0 xxs:text-lg lg:text-xl ">
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
                        <span className="ml-14 pt-2 text-sm font-normal text-[#BDBDBD] xxs:hidden lg:block">
                          Sort by:
                        </span>
                        <span className="xxs:hidden lg:block">
                          <Sort data={filteredData} setData={setData} />
                        </span>
                        <div className="cursor-pointer items-end justify-center gap-2 px-3 font-medium xxs:flex lg:hidden ">
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
                      <div className="mb-6 grid xxs:grid-cols-2 xxs:gap-4 xxs:px-4 md:grid-cols-3  lg:gap-3 lg:px-0">
                        {chunkArray(Object.values(filteredData), itemsPerPage)[
                          currentPageIndex - 1
                        ]?.map((Tdata, index) => {
                          return <ProductCard item={Tdata} key={index} />;
                        })}
                      </div>
                    ) : (
                      <div className="mb-6 grid xxs:grid-cols-2 xxs:gap-4 xxs:px-4  lg:grid-cols-3  lg:gap-3 lg:px-4 ">
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
                          " rounded-l-md border-2  border-[#A2A2A2] p-1  hover:bg-[#A2A2A2] hover:text-white"
                        }
                      >
                        <RxCaretLeft size={16} />
                      </button>
                      <div className="pagination flex items-center gap-1">
                        {chunkArray(filteredData, itemsPerPage).map(
                          (_, index) => {
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
                          },
                        )}
                      </div>

                      <button
                        onClick={prev}
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
                )}
                {!isLoading && filteredData?.length < 1 && (
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
