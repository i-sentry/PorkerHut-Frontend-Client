import { log } from "console";
import React from "react";
import { useParams } from "react-router-dom";
import List from "../list/List";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Filter from "../components/accordion-component/Accordion";
import Sort from "../components/accordion-component/Sort";
import NavBar from "../components/nav-component/NavBar";

import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";

const ProductPage = ({ item }: any) => {
  return (
    <div className="bg-[#EEEEEE]">
      <NavBar />
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
          <div className="md:w-1/4 static h-full top-[50px] bg-white p-6 mx-6 xxs:hidden md:block ">
            <Filter />
          </div>
          <div className="md:w-3/4 bg-white xxs:w-full">
            <div className="flex items-center justify-between  pl-3">
              <div className="flex items-center justify-between gap-16">

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
                <span className="pt-2 ml-14 text-base font-normal text-[#BDBDBD]">
                  Sort by:
                </span>
                <span>
                  <Sort />
                </span>
              </div>
            </div>
            <hr className="mx-3 bg-[#D9D9D9] border my-2" />

            <List />
            <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
              
              <div className="">
                
                <div className="">
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
              
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                      ...
                    </span>
                    <a
                      href="#"
                      className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      9
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      10
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
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
