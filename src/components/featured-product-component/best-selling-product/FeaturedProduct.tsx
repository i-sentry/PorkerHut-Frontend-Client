import React, { useState, useEffect } from "react";
import { productData } from "../../../utils/productData";
import ProductCard from "../ProductCard";
import { chunkArray } from "../../../helper/chunck";
import { useGetAllProducts } from "../../../services/hooks/users/products";
import { SkeletonLoader } from "../../category-component/Category";

const FeaturedProduct = () => {
  const [, setData] = useState(productData);
  let itemsPerPage = 12;
  let currentPage = 1;
  const [currentPageIndex] = useState(currentPage);
  useEffect(() => setData(productData), []);

  const { data: getAllProducts, isLoading } = useGetAllProducts();

  if (isLoading) {
    return (
      <div className="grid w-full px-[4%] xxs:grid-cols-2  xxs:gap-4 lg:grid-cols-4 lg:gap-3 ">
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      {getAllProducts && getAllProducts?.data?.length < 1 ? (
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
          <p className="mt-2 text-sm text-gray-500">No products available.</p>
        </div>
      ) : (
        <div className="grid w-full px-[4%] xxs:grid-cols-2  xxs:gap-4 lg:grid-cols-4 lg:gap-3 ">
          {chunkArray(
            getAllProducts?.data.filter(
              (product: any) =>
                product?.images.length > 0 &&
                product?.approvalStatus === "approved",
            ),
            itemsPerPage,
          )[currentPageIndex - 1]?.map((item: any, index: number) => {
            return <ProductCard item={item} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default FeaturedProduct;
