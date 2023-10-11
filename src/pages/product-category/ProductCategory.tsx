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
import { useLocation, useParams } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import { SkeletonLoader } from "../../components/category-component/Category";
import { useGetOneCategory } from "../../services/hooks/Vendor/category";
import { cap } from "../../components/category-card-component/Card";
import { useGetAllProducts } from "../../services/hooks/Vendor/products";

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const ProductCategory: React.FC<iProps> = ({ handleClick }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const [data, setData] = useState([]);
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  const getCategory = useGetOneCategory(id);
  const { data: getAllProducts } = useGetAllProducts();

  console.log(getCategory, "getCategory");
  console.log(getAllProducts?.data, "getAllProducts");

  //@ts-ignore
 const menuItems = getAllProducts?.data
   .filter((d: any) => d.vendor !== undefined)
   .map((d: any) => d.vendor.businessInformation.city);


  console.log(menuItems, "h");

  // const { approvalStatus, vendor } = getAllProducts?.data;
  // console.log(approvalStatus, vendor);

  // useEffect(() => setData(productData), [productData]);
  const filter = (id: any) => {
    const newItems = getAllProducts?.data.filter((data: any) => {
      return data.category === id;
    });
    //@ts-ignore
    setData(newItems);
  };
  useEffect(() => filter(id), []);

  console.log(data, "data");

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="bg-[#EEEEEE] overflow-hidden relative">
        <FilterSidebar
          open={openModal}
          onClose={() => setOpenModal(false)}
          setData={undefined}
          menuItem={undefined}
          handleClick={handleClick}
        />
        <div className="bg-[#EEEEEE] mt-24 lg:px-14 xxs:px-0">
          <div className="lg:px-0 xxs:px-4">
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

          <div className="lg:flex gap-8">
            <div className="lg:w-1/4 static h-full top-[50px] bg-white p-6 xxs:hidden lg:block overflow-hidden rounded-sm">
              {/* <Filter setData={setData} menuItem={menuItems} /> */}
              <ProductFilter setData={setData} menuItem={menuItems} />
            </div>
            <div className="lg:w-3/4 bg-white xxs:w-full">
              <div className="flex items-center justify-between border-b  pl-3">
                <div className="lg:flex lg:items-center lg:justify-between gap-5 xxs:py-4">
                  <h1 className="text-[24px] leading-normal text-[#333333] font-medium">
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
                  <span className="pt-2 ml-14 text-base font-normal text-[#BDBDBD] xxs:hidden lg:block">
                    Sort by:
                  </span>
                  <span className="xxs:hidden lg:block">
                    <Sort data={data} setData={setData} />
                  </span>
                  <div className="lg:hidden xxs:block flex justify-center items-end gap-2 px-2">
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
                <div className="grid lg:grid-cols-3 mb-6 xxs:grid-cols-2 lg:gap-3  xxs:gap-4  lg:px-0 xxs:px-4">
                  {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
                    (Tdata, index) => {
                      //@ts-ignore
                      return <ProductCard item={Tdata} key={Tdata.id} />;
                    }
                  )}
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
