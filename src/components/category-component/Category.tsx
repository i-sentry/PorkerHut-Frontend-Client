import React, { useEffect } from "react";
// import { productData } from "../../utils/productData";
import Card from "../category-card-component/Card";
// import Header from "../header-component/Header";
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
  const { data: allCategories, isLoading } = useGetAllCategories();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  console.log(allCategories?.data, "time");

  return (
    <div>
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
      <div className="  mx-auto lg:overflow-x-scroll px-[4%]">
        <div className="lg:flex gap-10 p-14 px-0 xxs:hidden md:flex justify-between">
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
        <div className="w-full flex  gap-4  whitespace-no wrap max-w-full  overflow-x-scroll py-10 lg:mt-4 -z-50 md:hidden ">
          {allCategories?.data.map((item: ICategory, index: number) => (
            <MobileCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

// const CardsSection = () => {
//   const cardContainerRef = useRef<HTMLDivElement>(null);
//   const { data: allCategories, error } = useGetAllCategories();
//   const handleRightButtonClick = () => {
//     if (cardContainerRef.current) {
//       cardContainerRef.current.scrollBy({
//         left: 200, // Adjust the scroll amount as needed
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleLeftButtonClick = () => {
//     if (cardContainerRef.current) {
//       cardContainerRef.current.scrollBy({
//         left: -200, // Adjust the scroll amount as needed
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="lg:flex gap-8 py-8 xxs:hidden relative">
//       <div ref={cardContainerRef} className="flex">
//         {allCategories?.data.map((item: ICategory, index: number) => (
//           <Card key={index} item={item} />
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 -translate-y-1/2 left-0 bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform duration-300 transform hover:-translate-x-full"
//         onClick={handleLeftButtonClick}
//       >
//         Left Button
//       </button>
//       <button
//         className="absolute top-1/2 -translate-y-1/2 right-0 bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform duration-300 transform hover:translate-x-full"
//         onClick={handleRightButtonClick}
//       >
//         Right Button
//       </button>
//     </div>
//   );
// };

export const SkeletonLoader = () => {
  return (
    // <div className="animate-pulse bg-gray-400 rounded-sm w-full h-[400px] relative "></div>
    <div className="overflow-hidden relative w-full">
      <div className="skeleton-loader"></div>
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          <div className="text-loader"></div>
          <div className="text-loader"></div>
        </div>
        <div className="w-full">
          <div className="text-loader"></div>
          <div className="text-loader"></div>
        </div>
      </div>
    </div>
  );
};
