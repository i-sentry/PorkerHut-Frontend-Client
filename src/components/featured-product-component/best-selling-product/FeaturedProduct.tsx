import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { productData } from "../../../utils/productData";
import ProductCard from "../ProductCard";
import { chunkArray } from "../../../helper/chunck";
import { useGetAllProducts } from "../../../services/hooks/users/products";
import { SkeletonLoader } from "../../category-component/Category";

const FeaturedProduct = () => {
  const [data, setData] = useState(productData);
  let itemsPerPage = 12;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  useEffect(() => setData(productData), [productData]);

  const { data: getAllProducts } = useGetAllProducts();
  console.log(getAllProducts);

  return (
    <>
      {getAllProducts?.data?.length ? (
        <div className="w-full grid lg:grid-cols-4 lg:gap-3  xxs:gap-4 xxs:grid-cols-2 lg:px-6 xxs:px-0 ">
          {chunkArray(
            getAllProducts?.data.filter(
              (product: any) => product.images.length > 0
            ),
            itemsPerPage
          )[currentPageIndex - 1]?.map((item: any) => {
            return <ProductCard item={item} />;
          })}
        </div>
      ) : (
        <div className="w-full grid lg:grid-cols-4 lg:gap-3  xxs:gap-4 xxs:grid-cols-2 lg:px-6 xxs:px-0 ">
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonLoader />
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedProduct;
