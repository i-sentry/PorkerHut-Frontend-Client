import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { productData } from "../../../utils/productData";
import ProductCard from "../ProductCard";
import { chunkArray } from "../../../helper/chunck";

const FeaturedProduct = () => {
  const [data, setData] = useState(productData);
  let itemsPerPage = 12;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  useEffect(() => setData(productData), [productData]);

  return (
    <>
      <div className="w-full grid md:grid-cols-4 md:gap-3  xxs:gap-4 xxs:grid-cols-2 md:px-6 xxs:px-0 ">
        {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
          (item: any) => {
            return <ProductCard item={item} />;
          }
        )}
      </div>
    </>
  );
};

export default FeaturedProduct;
