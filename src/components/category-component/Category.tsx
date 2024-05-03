import React, { useEffect } from "react";
// import { productData } from "../../utils/productData";
import Card from "../category-card-component/Card";
// import Header from "../header-component/Header";
import MobileCard from "../category-card-component/MobileCard";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { divide } from "lodash";
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
        <div className="flex items-center justify-center ">
          <h1 className="font-medium text-[#333333]   xxs:text-[20px] xxs:leading-[23px]  sm:text-[40px] sm:leading-normal md:text-[40px]">
            Shop by Categories
          </h1>
        </div>
        <div className="mt-2 flex items-center  justify-center">
          <div className=" block h-1.5 w-24 bg-[#197B30]"></div>
        </div>
      </div>
      <div className="hide-scroll-bar mx-auto my-6  flex overflow-x-scroll px-4 md:px-[4%]">
        {/* <div className="flex space-x-4 p-14 px-0 xxs:hidden md:flex lg:flex">
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
        </div> */}
        {isLoading && (
          // Render skeleton loaders when loading
          <div className="flex w-full space-x-4">
            {Array.from({ length: 3 }).map((_, index) => (
              //@ts-ignore
              <SkeletonLoader
                key={index}
                className={`sm:w-[calc(50%_-_10px)] md:w-[calc(33%_-_10px)] ${index === 1 && "hidden sm:block"} ${index === 2 && "hidden"} md:block `}
              />
            ))}
          </div>
        )}

        {!isLoading && allCategories?.data?.length >= 1 && (
          // <Swiper
          //   spaceBetween={30}
          //   slidesPerView={1}
          //   cssMode={true}
          //   // navigation={true}
          //   // pagination={true}
          //   breakpoints={{
          //     640: {
          //       slidesPerView: 2,
          //       spaceBetween: 20,
          //     },
          //     768: {
          //       slidesPerView: 3,
          //       spaceBetween: 30,
          //     },
          //   }}
          //   mousewheel={true}
          //   keyboard={true}
          //   modules={[Navigation, Mousewheel, Keyboard]}
          //   className={` mySwiper flex space-x-4 p-14 px-0 xxs:hidden md:flex lg:flex`}
          // >
          //   {allCategories?.data.map((item: ICategory, index: number) => (
          //     <SwiperSlide>
          //       <Card key={index} item={item} />
          //     </SwiperSlide>
          //   ))}

          // </Swiper>

          <div className="hide-scroll-bar flex w-full overflow-x-auto">
            {allCategories?.data?.map((item: ICategory, index: number) => (
              <div
                key={index}
                className={`m-2 flex h-[300px] flex-none items-center  justify-center bg-gray-200 ${allCategories?.data?.length <= 3 ? "w-[90%] sm:w-[45%] lg:w-1/3" : "w-[90%] sm:w-[45%] lg:w-[30%]"}`}
              >
                <Card key={index} item={item} />
              </div>
            ))}
          </div>
        )}

        {!isLoading && allCategories?.data?.length < 1 && (
          <div>No category available</div>
        )}

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
        <div className="-z-50 hidden space-x-4 py-10 lg:mt-4 ">
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

export const SkeletonLoader = ({ className }: { className?: any }) => {
  return (
    // <div className="animate-pulse bg-gray-400 rounded-sm w-full h-[400px] relative "></div>
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="skeleton-loader"></div>
      <div className="flex w-full items-center justify-between">
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
