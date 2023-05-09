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
    <div className=" xxs:p-3 md:p-0 ">
      <div>
        <div className="flex justify-center items-center ">
          <h1 className="font-medium tracking-tight xxs:text-[20px] xxs:leading-[23px]  sm:text-[40px] sm:leading-[47px] text-[#333333]">
            Shop by Categories
          </h1>
        </div>
        <div className="flex items-center justify-center  mt-2">
          <div className=" block h-1.5 w-24 bg-[#197B30]"></div>
        </div>
      </div>
      <div className=" md:p-12 my-8">
        <div className="md:grid grid-cols-3 gap-12 overflow-x-scroll md:overflow-hidden md:h-[420px] xxs:hidden">
          {datas.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <div className="w-full flex  gap-4  whitespace-no wrap max-w-full  overflow-x-scroll xxs:mt-0 md:mt-4 -z-50 sm:hidden ">
          {datas.map((item) => (
            <MobileCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
