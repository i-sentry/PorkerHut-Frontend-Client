import React, { useState, useEffect } from "react";
import Filter from "../../components/accordion-component/Accordion";
import Sort from "../../components/accordion-component/Sort";
import NavBar from "../../components/nav-component/NavBar";

import Footer from "../../components/footer-component/Footer";
import ProductsBreadCrumbs from "../../components/story-components/ProductsBreadCrumbs";
import { MdOutlineFilterAlt } from "react-icons/md";
import { productData } from "../../utils/productData";
import FilterSidebar from "../../components/accordion-component/FilterSidebarModal";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ProductCard from "../../components/featured-product-component/ProductCard";
import { chunkArray } from "../../helper/chunck";
import AppLayout from "../../components/utility/AppLayout";
import { useParams } from "react-router-dom";
import ProductFilter from "./ProductFilter";

const ProductCategory = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const params = useParams();
  const [data, setData] = useState([]);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);

  const filter = (cate: any) => {
    const newItems = productData.filter((newVal: any) => {
      return newVal.category === cate;
    });
    //@ts-ignore
    setData(newItems);
  };
  //@ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];
  const { title } = params;
  console.log({ params });
  // useEffect(() => setData(productData), [productData]);
  useEffect(() => filter(title), []);

  
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);


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
                  name: title,
                  link: "/pork",
                },
              ]}
            />
          </div>

          <div className="md:flex">
            <div className="md:w-1/4 static h-full rounded-sm px-6 bg-white mx-6 xxs:hidden md:block overflow-hidden pt-4">
              {/* <Filter setData={setData} menuItem={menuItems} /> */}
              <ProductFilter setData={setData} menuItem={menuItems} />
            </div>
            <div className="md:w-3/4 bg-white xxs:w-full">
              <div className="flex items-center justify-between  pl-3">
                <div className="md:flex md:items-center md:justify-between md:gap-16 xxs:py-4">
                  <h1 className="text-xl font-medium">{title}</h1>
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
                      //@ts-ignore
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

export default ProductCategory;
