import React from "react";
import ProductCard from "../components/featured-product-component/ProductCard";

const List = ({ Data }: any) => {
  return (
    <div className="grid md:grid-cols-4 mb-6 xxs:grid-cols-2">
      {Data?.map((item: any) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
