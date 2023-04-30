import React from "react";
import { productData } from "../../utils/productData";
import Card from "../category-card-component/Card";
import Header from "../header-component/Header";
import MobileCard from "../category-card-component/MobileCard";


const Category = () => {
  // @ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];
  console.log(menuItems, "kk");
  const datas = [
    {
      id: 1,
      src: "./images/Meat.jpg",
      title: "Pork",
      path: "/pork",
    },
    {
      id: 2,
      src: "./images/Livestock.jpg",
      title: "Livestock",
      path: "/livestock",
    },
    {
      id: 3,
      src: "./images/Feed.jpg",
      title: "Feed",
      path: "/feed",
    },
  ];

  for (let i = 0; i < datas.length; i++) {
    datas[i].title = menuItems[i];
  }
  let temp = datas[0].title;
  datas[0].title = datas[2].title;
  datas[2].title = temp;

  return (
    <div className="md:p-6 xxs:px-4 md:px-12">
      <div>
        <div className="flex justify-center items-center  xxs:mt-4">
          <h1 className="font-normal tracking-tight text-3xl">
            Shop by Categories
          </h1>
        </div>
        <div className="flex items-center justify-center mb-[3rem] mt-2">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
      </div>
      <div className="md:grid grid-cols-3 gap-9 overflow-x-scroll md:overflow-hidden md:h-full xxs:hidden">
        {datas.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <div className="xxs:grid grid-cols-3 gap-9 overflow-x-scroll md:overflow-hidden md:h-full md:hidden">
        {datas.map((item) => (
          <MobileCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
