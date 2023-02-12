import { log } from "console";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import List from "../list/List";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Filter from "../components/accordion-component/Accordion";
import Sort from "../components/accordion-component/Sort";
import NavBar from "../components/nav-component/NavBar";

import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { MdOutlineFilterAlt } from "react-icons/md";
import { productData } from "../utils/productData";
import FilterSidebar from "../components/accordion-component/FilterSidebarModal";

const ProductPage = ({}) => {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [post, setPost] = useState<any[]>([])
  const [number, setNumber] = useState(1)
  const postPerPage = 20
  
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage
  const currentPost = post.slice(firstPost, lastPost)
  const [data, setData] = useState(productData);
  
  const pageNumber = []
  for (let i = 1; 1 <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i)
  }


  

  console.log(pageNumber, "pageNumber");
  //@ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];

  return (
    <div className="bg-[#EEEEEE] overflow-hidden relative">
      <NavBar/>
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
                name: "Blogs",
                link: "/blog",
              },
            ]}
          />
        </div>

        <div className="md:flex">
          <div className="md:w-1/4 static h-full top-[50px] bg-white p-6 mx-6 xxs:hidden md:block overflow-hidden">
            <Filter setData={setData} menuItem={menuItems} />
          </div>
          <div className="md:w-3/4 bg-white xxs:w-full">
            <div className="flex items-center justify-between  pl-3">
              <div className="md:flex md:items-center md:justify-between md:gap-16 xxs:py-4">
                <h1 className="text-xl font-medium">All Products</h1>
                <div>
                  <p className="text-l text-gray-700">
                    Showing <span className="font-medium">1</span> -{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">97</span> results
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
                  <MdOutlineFilterAlt className="inline" size={22} onClick={() => setOpenModal(true)} />
                  <span className="text-sm">Filter Products</span>
                </div>
              </div>
            </div>
            <hr className="mx-3 bg-[#D9D9D9] border my-2" />

            <List Data={data} />
            <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
              <div className="">
                <div className="">
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    {pageNumber.map((p) => {
                      console.log(p, "ppppp");

                      return (
                        <button
                          aria-current="page"
                          className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                        >
                          {p}
                        </button>
                      );
                    })}

                    <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
