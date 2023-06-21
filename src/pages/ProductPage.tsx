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
import { GoSettings } from "react-icons/go";
import { useGetAllProducts } from "../services/hooks/users/products";

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
  const [data, setData] = useState(productData);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];
  useEffect(() => setData(productData), [productData]);
  console.log({ menuItems });
  

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
    <AppLayout>
      <div className="bg-[#EEEEEE] overflow-hidden relative md:pb-10">
        <FilterSidebar
          open={openModal}
          onClose={() => setOpenModal(false)}
          setData={setData}
          menuItem={menuItems}
          handleClick={handleClick}
        />
        <div className="bg-[#EEEEEE] mt-24 md:px-14 xxs:px-0 ">
          <div className="md:px-0 xxs:px-4">
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

          <div className="md:flex gap-8 ">
            <div className="md:w-1/4 static h-full top-[50px] bg-white p-6 xxs:hidden md:block overflow-hidden rounded-sm">
              <Filter
                setData={setData}
                menuItem={menuItems}
                handleClick={handleClick}
              />
            </div>
            <div className="md:w-3/4 bg-white xxs:w-full">
              <div className="flex items-center justify-between  pl-3">
                <div className="md:flex md:items-center md:justify-between md:gap-8 xxs:py-4">
                  <h1 className="md:text-xl xxs:text-lg text-[#333333] font-medium xxs:pl-0 ">
                    All Products
                  </h1>
                  <div>
                    <p className="text-sm text-[#A2A2A2] ">
                      Showing{" "}
                      <span className="font-medium">{currentPageIndex}</span> -{" "}
                      <span className="font-medium">{itemsPerPage}</span> of{" "}
                      <span className="font-medium">{data?.length}</span>{" "}
                      results
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <span className="pt-2 ml-14 text-sm font-normal text-[#BDBDBD] xxs:hidden md:block">
                    Sort by:
                  </span>
                  <span className="xxs:hidden md:block">
                  
                    <Sort data ={data } setData={setData} />
                  </span>
                  <div className="md:hidden xxs:flex justify-center items-end gap-2 px-3 font-medium ">
                    <GoSettings
                      className="rotate-90 "
                      size={22}
                      onClick={() => setOpenModal(true)}
                    />
                    <span className="text-sm">Filter Products</span>
                  </div>
                </div>
              </div>

              {data?.length ? (
                <div className="grid md:grid-cols-3 mb-6 xxs:grid-cols-2 md:gap-3  xxs:gap-4  md:px-0 xxs:px-4">
                  {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
                    (Tdata, index) => {
                      return <ProductCard item={Tdata} key={Tdata.id} />;
                    }
                  )}
                </div>
              ) : (
                <div>Fetching Data...</div>
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
        </div>
      </div>
    </AppLayout>
  );
};

export default ProductPage;
