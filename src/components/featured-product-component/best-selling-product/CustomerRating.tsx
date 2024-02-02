import React, { useEffect, useState } from "react";
import { MdMessage } from "react-icons/md";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import { NavLink } from 'react-router-dom'
import { chunkArray } from "../../../helper/chunck";
// import RatingWidget from '../../RatingWidget'
import ProductsBreadCrumbs from "../../story-components/ProductsBreadCrumbs";
import StarRating from "./ProductDetailRating";
import NavBar from "../../nav-component/NavBar";
import Footer from "../../footer-component/Footer";
import { useGetRatingDetails } from "../../../services/hooks/users/products";
import { IoMdStarOutline } from "react-icons/io";
import moment from "moment";
import RatingStars from "../../RatingStars";
import { useParams } from "react-router-dom";
// const ratingData = [
//   {
//     id: 1,
//     name: "John Doe",
//     date: "2023-03-10",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Alice Smith",
//     date: "2023-03-12",
//     rating: 3.0,
//   },
//   {
//     id: 3,
//     name: "Bob Johnson",
//     date: "2023-03-15",
//     rating: 5.0,
//   },
//   {
//     id: 4,
//     name: "Emily Wong",
//     date: "2023-03-09",
//     rating: 2.5,
//   },
//   {
//     id: 5,
//     name: "Michael Chen",
//     date: "2023-03-06",
//     rating: 4.0,
//   },
//   {
//     id: 6,
//     name: "Jessica Lee",
//     date: "2023-03-03",
//     rating: 4.5,
//   },
//   {
//     id: 8,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 9,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 10,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 11,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 12,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 13,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 14,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 15,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 16,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },

//   {
//     id: 17,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 18,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 19,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
//   {
//     id: 20,
//     name: "David Kim",
//     date: "2023-03-08",
//     rating: 3.5,
//   },
// ];
const CustomerRating = () => {
  const { id } = useParams();

  const storedUser = JSON.parse(localStorage.getItem("user") as string);
  // const { data: ratings, isLoading } = useGetAllProductRating(id as string);
  const { data: ratingDetails, isLoading } = useGetRatingDetails(id as string);
  const [data, setData] = useState<any>({});
  let itemsPerPage = 20;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  //@ts-ignore
  // const menuItems = [...new Set(ratingData.map((d: any) => d.category))];
  const allProductRatings = ratingDetails?.data?.ratingStatistics[0];
  useEffect(() => setData(allProductRatings), [allProductRatings]);

  console.log(allProductRatings, "User, All Ratings");
  console.log(ratingDetails, "Product Rating Details");
  return (
    <>
      <NavBar />
      <div className="px-6 mt-16 py-6 bg-[#EEEEEE]">
        <ProductsBreadCrumbs
          items={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Products",
              link: "/products",
            },
            {
              name: "Product Details",
              link: `/product/${id}`,
            },
            {
              name: "Product Review",
              link: `/product/${id}/rating`,
            },
          ]}
        />
        <div className="py-2 pt-8">
          <StarRating rating={0} data={data} />
        </div>

        <div className="md:grid md:gap-4 md:grid-cols-3 md:mt-5 bg-white px-6 py-6">
          {isLoading && <SkeletonLoader />}

          {data &&
            data?.ratings?.map((review: any, index: number) => (
              <div
                key={index}
                className="bg-[#F4F4F4] p-4 flex flex-col gap-3 rounded-sm xxs:mb-4 md:mb-0"
              >
                <div className="flex justify-between">
                  <div className="items-center flex gap-2">
                    <MdMessage size={20} />
                    <h1 className="inline">
                      {`${review?.userDetails?.firstName} ${review?.userDetails?.lastName}`}
                    </h1>
                  </div>
                  <div>
                    <span className="text-[#040303] text-xs">
                      {moment(review?.created_at).format("DD-MM-YYYY")}
                    </span>
                  </div>
                </div>
                <RatingStars
                  maxRating={5}
                  defaultRating={review?.rating}
                  iconSize={24}
                  canRate={false}
                />
                <div>
                  <span className=" text-sm">{review?.comment}</span>
                </div>
              </div>
            ))}      
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#EEEEEE] gap-1 bg- px-4 py-3 sm:px-6">
        <button
          onClick={() =>
            currentPageIndex !== 1
              ? setCurrentPageIndex(currentPageIndex - 1)
              : null
          }
          className={
            (currentPageIndex === 1 ? "no-item" : "") +
            " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white  rounded-l-md p-1"
          }
        >
          <RxCaretLeft size={16} />
        </button>
        <div className="pagination flex gap-1 items-center">
          {chunkArray(data, itemsPerPage).map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPageIndex(index + 1)}
                className={` border-2   border-[#A2A2A2]  ${
                  currentPageIndex === index + 1
                    ? "active-page-index px-2 p-[1px]  flex-1 rounded-md text-[#197B30] border-[#197B30]"
                    : "border-[#A2A2A2] text-[#A2A2A2] flex-1 p-[1px] px-2 hover:bg-slate-100 rounded-md"
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <button
          onClick={() =>
            currentPageIndex !== chunkArray(data, itemsPerPage).length
              ? setCurrentPageIndex(currentPageIndex + 1)
              : null
          }
          className={
            (currentPageIndex === chunkArray(data, itemsPerPage).length
              ? "no-items"
              : "") +
            " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white p-1 rounded-r-md"
          }
        >
          <RxCaretRight size={16} />
        </button>
      </div>

      <Footer />
    </>
  );
};

export default CustomerRating;

const SkeletonLoader = () => {
  return (
    <>
      <div className="skeleton-loader w-full h-[200px_!important]"></div>
      <div className="skeleton-loader w-full h-[200px_!important]"></div>
      <div className="skeleton-loader w-full h-[200px_!important]"></div>
      <div className="skeleton-loader w-full h-[200px_!important]"></div>
    </>
    // <div className="animate-pulse bg-gray-400 rounded-sm w-full h-[400px] relative "></div>
    // <div className="overflow-hidden relative w-full bg-white p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //   {/* <div className="skeleton-loader"></div> */}
    // </div>
  );
};
