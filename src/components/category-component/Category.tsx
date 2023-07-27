import React, { useRef } from "react";
import { productData } from "../../utils/productData";
import Card from "../category-card-component/Card";
import Header from "../header-component/Header";
import MobileCard from "../category-card-component/MobileCard";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";

export interface ICategory {
  createdAt: string;
  description: string;
  featuredImage: string;
  name: string;
  subcategories: Subcategory[];
  updatedAt: string;
  __v: number;
  _id: string;
}

interface Subcategory {
  _id: string;
  name: string;
}

const Category = () => {
  // @ts-ignore
  const menuItems = [...new Set(productData.map((d: any) => d.category))];
  console.log(menuItems, "kk");
  const { data: allCategories, error, isLoading } = useGetAllCategories();
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
    // {
    //   id: 4,
    //   src: "./images/Feed.jpg",
    //   title: "Feed",
    //   path: "/feed",
    // },
    // {
    //   id: 5,
    //   src: "./images/Feed.jpg",
    //   title: "Feed",
    //   path: "/feed",
    // },
    // {
    //   id: 6,
    //   src: "./images/Feed.jpg",
    //   title: "Feed",
    //   path: "/feed",
    // },
    // {
    //   id: 7,
    //   src: "./images/Feed.jpg",
    //   title: "Feed",
    //   path: "/feed",
    // },
  ];

  console.log(allCategories?.data);

  for (let i = 0; i < datas.length; i++) {
    datas[i].title = menuItems[i];
  }
  let temp = datas[0].title;
  datas[0].title = datas[2].title;
  datas[2].title = temp;

  const TCard = ({ src, title, path }: { src: any; title: any; path: any }) => {
    return (
      <div className="relative w-72 h-72 rounded-md overflow-hidden shadow-lg cursor-pointer">
        <img
          src={src}
          alt=""
          className="object-cover rounded-sm transition duration-1000 ease-in hover:transform hover:scale-125 w-full h-full opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>
      </div>
    );
  };

  return (
    <div className=" xxs:p-3 lg:p-0 ">
      <div>
        <div className="flex justify-center items-center ">
          <h1 className="font-medium md:text-[40px]   xxs:text-[20px] xxs:leading-[23px]  sm:text-[40px] sm:leading-normal text-[#333333]">
            Shop by Categories
          </h1>
        </div>
        <div className="flex items-center justify-center  mt-2">
          <div className=" block h-1.5 w-24 bg-[#197B30]"></div>
        </div>
      </div>
      <div className="  mx-auto  overflow-x-scroll">
        <div className="lg:flex gap-10 p-14 xxs:hidden md:flex">
          {isLoading
            ? // Render skeleton loaders when loading
            Array.from({ length: 3 }).map((_, index) => (
                //@ts-ignore
                <Card key={index} item={null} />
              ))
            : // Render cards when data is available
              allCategories?.data.map((item: ICategory, index: number) => (
                <Card key={index} item={item} />
              ))}
        </div>

        {/* <div className="container mx-auto px-4 overflow-x-scroll">
          <div className="flex gap-8 py-8">
            {datas.map((data) => (
              <TCard
                key={data.id}
                src={data.src}
                title={data.title}
                path={data.path}
              />
            ))}
          </div>
        </div> */}
        <div className="w-full flex  gap-4  whitespace-no wrap max-w-full  overflow-x-scroll py-10 lg:mt-4 -z-50 sm:hidden ">
          {allCategories?.data.map((item: ICategory, index: number) => (
            <MobileCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

const CardsSection = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const { data: allCategories, error } = useGetAllCategories();
  const handleRightButtonClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const handleLeftButtonClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="lg:flex gap-8 py-8 xxs:hidden relative">
      <div ref={cardContainerRef} className="flex">
        {allCategories?.data.map((item: ICategory, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <button
        className="absolute top-1/2 -translate-y-1/2 left-0 bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform duration-300 transform hover:-translate-x-full"
        onClick={handleLeftButtonClick}
      >
        Left Button
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-0 bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform duration-300 transform hover:translate-x-full"
        onClick={handleRightButtonClick}
      >
        Right Button
      </button>
    </div>
  );
};

export const SkeletonLoader = () => {
  return (
    // <div className="animate-pulse bg-gray-400 rounded-sm w-full h-[400px] relative "></div>
    <div className="overflow-hidden relative w-full">
      <div className="skeleton-loader"></div>
    </div>
  );
};
