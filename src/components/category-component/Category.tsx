
import React from "react";
import Card from "../category-card-component/Card";
import Header from "../header-component/Header";




const Category = () => {
  const datas = [
    {
      id: 1,
      src: "./images/Meat.jpg",
      title: "Pork Meat",
    },
    {
      id: 2,
      src: "./images/Feed.jpg",
      title: "Animal Feed",
    },
    {
      id: 3,
      src: "./images/Livestock.jpg",
      title: "Livestocks",
    },
  ];
  return (
    <div className="md:px-6 xxs:px-4">
      <div>
        <div className="flex justify-center items-center  xxs:mt-4 px-">
          <h1 className="font-semibold text-2xl">Shop by Category</h1>
        </div>
        <div className="flex items-center justify-center mb-10">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-6 xxs:overflow-x-auto md:overflow-hidden h-full xxs:flex">
        {datas.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
