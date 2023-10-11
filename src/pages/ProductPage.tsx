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
import { useParams } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { useGetAllProducts } from "../services/hooks/users/products";
import { Card } from "@material-tailwind/react";
import { SkeletonLoader } from "../components/category-component/Category";
import Spinner from "../components/Spinner/Spinner";
import { useGetAllCategories } from "../services/hooks/Vendor/category";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

interface Product {
  id: string;
  title: string;
  type?: any;
  category: string;
  price: string;
  rating?: any;
  product: {
    location: string;
    name: string;
    weight: string;
    productName: string;
  };
  img: string;
  status: string;
  desc: string;
}

const ProductPage: React.FC<iProps> = ({ handleClick }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState([]);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  const { data: getAllProducts } = useGetAllProducts();

  const { data: allCategories, error, isLoading } = useGetAllCategories();
  console.log(getAllProducts?.data, "donedeal")

  //@ts-ignore
  const menuItems = [...new Set(allCategories?.data?.map((d: any) => d?.name))];
  console.log({menuItems}, "here")
  useEffect(
    () => setData(getAllProducts?.data),
  [getAllProducts?.data]);



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

  return (
    <>
      <FilterSidebar
        open={openModal}
        onClose={() => setOpenModal(false)}
        setData={setData}
        menuItem={allCategories?.data}
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
                <Filter
                  setData={setData}
                  menuItem={allCategories?.data}
                  handleClick={handleClick}
                />
              </div>
              <div className="lg:w-3/4 bg-white xxs:w-full">
                <div className="flex items-center justify-between border-b   pl-3">
                  <div className="lg:flex lg:items-center lg:justify-between lg:gap-8 xxs:py-4">
                    <h1 className="lg:text-xl xxs:text-lg text-[#333333] font-medium xxs:pl-0 ">
                      All Products
                    </h1>
                    <div className="flex items-center gap-3 border">
                      {data?.length ? (
                        <p className="text-sm text-[#A2A2A2] ">
                          Showing{" "}
                          <span className="font-medium">
                            {currentPageIndex}
                          </span>{" "}
                          - <span className="font-medium">{itemsPerPage}</span>{" "}
                          of <span className="font-medium">{data?.length}</span>{" "}
                          results
                        </p>
                      ) : (
                        <Spinner />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <span className="pt-2 ml-14 text-sm font-normal text-[#BDBDBD] xxs:hidden lg:block">
                      Sort by:
                    </span>
                    <span className="xxs:hidden lg:block">
                      <Sort data={data} setData={setData} />
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
                {data?.length ? (
                  <div className="grid lg:grid-cols-3 mb-6 xxs:grid-cols-2 lg:gap-3  xxs:gap-4  lg:px-0 xxs:px-4">
                    {chunkArray(data, itemsPerPage)[
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
                    onClick={prev}
                    className={
                      (currentPageIndex ===
                      chunkArray(data, itemsPerPage).length
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
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default ProductPage;
