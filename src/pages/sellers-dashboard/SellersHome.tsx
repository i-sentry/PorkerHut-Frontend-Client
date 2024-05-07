import React, { useState, useEffect, useCallback } from "react";
import banner1 from "../../assets/images/SellerHomeBanner.png";
import { RiMessage2Line } from "react-icons/ri";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { CgSpinner } from "react-icons/cg";
import { useGetAllAnnoucement } from "../../services/hooks/Vendor";
import { MdOutlineAnnouncement } from "react-icons/md";
import moment from "moment";

interface SliderProps {
  sliderImages: never[];
}

const SellersHome: React.FC<SliderProps> = ({ sliderImages }: SliderProps) => {
  const vendor = JSON.parse(localStorage.getItem("vendor") as string);
  const [announcement, setAnnouncement] = useState<any[]>([]);
  const { data: annouce, isLoading: loading } = useGetAllAnnoucement();

  const { data, isLoading } = useGetVendorOrders(vendor?.vendor?._id);
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  useEffect(() => {
    if (annouce?.data?.data?.length > 0) {
      const currentDate = new Date().getTime();
      const filteredNews = annouce?.data?.data.filter((item: any) => {
        const newsDate = new Date(item?.endDate).getTime();
        return newsDate >= currentDate;
      });
      setAnnouncement(filteredNews);
    }
  }, [annouce?.data?.data]);


  const vendorOrders = data?.data?.orders;
  const todayOrder = vendorOrders?.filter((order: any) => {
    const todayDate = new Date().getTime();
    const orderDate = new Date(order?.orderDate).getTime();

    return orderDate === todayDate && order?.status === "pending";
  }).length;

  const yesterdayOrder = vendorOrders?.filter((order: any) => {
    const curDate = new Date().setDate(new Date().getDate() - 1);
    const orderDate = new Date(order?.orderDate).getTime();

    return orderDate === curDate && order?.status === "pending";
  }).length;

  const olderOrders = vendorOrders?.filter((order: any) => {
    const todayDate = new Date().getTime();
    const yesterdayDate = new Date().setDate(new Date().getDate() - 1);
    const orderDate = new Date(order?.orderDate).getTime();

    return (
      orderDate !== todayDate &&
      orderDate !== yesterdayDate &&
      order?.status === "pending"
    );
  }).length;

  const ratings = vendorOrders?.flatMap((order: any) =>
    order?.productDetails?.map((item: any) => item?.productID?.avgRating),
  );
  const sumOfRatings = ratings?.reduce(
    (total: any, rating: any) => total + rating,
    0,
  );

  const averageRating = sumOfRatings / ratings?.length;

  // Rating thresholds
  const poorThreshold = 2.5;
  const excellentThreshold = 4.0;

  const totalItem = [
    {
      day: "Today",
      total: todayOrder,
    },
    {
      day: "Yesterday",
      total: yesterdayOrder,
    },
    {
      day: "Older",
      total: olderOrders,
    },
  ];

  const dataSlider = [
    {
      id: 1,
      src: banner1,
      name: "banner_img",
    },
    {
      id: 2,
      src: banner1,
      name: "banner_img",
    },
    {
      id: 3,
      src: banner1,
      name: "banner_img",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = useCallback(() => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  }, [dataSlider.length, slideIndex]);

  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1);
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(dataSlider.length);
  //   }
  // };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(id);
  }, [nextSlide]);

  const moveDot = (index: any) => {
    setSlideIndex(index);
  };

  return (
    <div className="mb-20">
      <div className="relative">
        <div className=" h-[320px] w-full  ">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={index}
                className={`duration-400 absolute h-full w-full px-0 opacity-0 transition-opacity ${
                  slideIndex === index + 1 ? "active-anim opacity-100" : ""
                }`}
              >
                <img
                  src={obj.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className=" absolute left-[50%] mx-auto mt-4 flex -translate-x-1/2 transform">
          {dataSlider.map((_, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={`border-3 mr-2  h-[6px] w-[6px] rounded-full ${
                slideIndex === index + 1
                  ? "border-[#197B30] bg-[#197B30]"
                  : "border-gray-300 bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-28 grid xxs:grid-rows-1 xxs:gap-14 xxs:px-4 md:grid-cols-2 md:gap-10">
        <div className="">
          <div className="flex items-center justify-between rounded-t-md bg-[#F4F4F4] py-8 px-4">
            <span className="font-normal leading-[24px] tracking-[0.15px]  text-[#A2A2A2] xxs:text-[16px] md:text-[24px]">
              Announcements
            </span>
            <RiMessage2Line size={26} className="text-[#F91919]" />
          </div>
          {loading && (
            <div className="flex flex-col items-center justify-center border border-t-0 border-[#A2A2A2] px-4 py-10">
              <span>
                Loading<span className="animate-pulse">...</span>
              </span>
            </div>
          )}
          {announcement?.length > 0 && (
            <>
              {announcement?.map((item, index) => (
                <div
                  key={index}
                  className="flex border border-t-0 border-[#A2A2A2] px-4 py-10 xxs:flex-col xxs:gap-8 md:flex-row md:gap-10"
                >
                  <span className="whitespace-nowrap text-[16px] font-normal leading-[24px]">
                    {moment(item?.startDate).format("DD MMM")}
                  </span>

                  <div className="flex flex-col gap-2">
                    <span className=" text-[18px] font-medium leading-[24px]">
                      {item?.subject}
                    </span>
                    <span className="text-[16px] font-normal leading-[24px] text-[#333333]">
                      {item?.content}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
          {!loading && announcement?.length < 1 && (
            <div className="flex flex-col  items-center justify-center border border-t-0 border-[#A2A2A2] px-4 py-10">
              <MdOutlineAnnouncement size={32} className="text-neutral-600" />
              <span className="mt-2 text-center">
                No Announcement yet.
                <br /> Stay tuned!!!
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-10">
          <div className=" ">
            <div className=" rounded-t-md bg-[#F4F4F4] py-8 px-4">
              <span className="font-normal leading-[24px] tracking-[0.15px]  text-[#A2A2A2] xxs:text-[16px] md:text-[24px]">
                Total Pending Orders
              </span>
            </div>

            {totalItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-t-0 border-[#A2A2A2] px-4 py-10 "
              >
                <span className="font-normal leading-[24px] text-[#333333] xxs:text-[14px] md:text-[16px]">
                  {item.day}
                </span>
                <span className="font-normal leading-[24px] text-[#333333] xxs:text-[14px] md:text-[16px]">
                  {isLoading ? (
                    <CgSpinner size={20} className=" animate-spin" />
                  ) : (
                    item.total || 0
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className=" ">
            <div className=" bg-[#F4F4F4] py-8 px-4">
              <span className="font-normal leading-[24px] tracking-[0.15px]  text-[#A2A2A2] xxs:text-[16px] md:text-[18px]">
                Your Rating
              </span>
            </div>

            <div className="flex items-start justify-between border border-t-0 border-[#A2A2A2] px-4 py-4">
              <div className=" ">
                <p className="font-normal leading-[24px] tracking-[0.15px]  text-[#333333] xxs:text-[16px] md:text-[16px]">
                  Average Customer Rating
                </p>
                {averageRating >= excellentThreshold && (
                  <p className="mt-2 inline-block rounded-sm bg-[#22C55E] px-2 py-0.5 text-[13px] leading-[24px] text-white">
                    Excellent
                  </p>
                )}
                {averageRating >= poorThreshold &&
                  averageRating < excellentThreshold && (
                    <p className="mt-2 inline-block rounded-sm bg-orange-600 px-2 py-0.5 text-[13px] leading-[24px] text-white">
                      Good
                    </p>
                  )}
                {averageRating < poorThreshold && (
                  <p className="mt-2 inline-block rounded-sm bg-red-600 px-2 py-0.5 text-[13px] leading-[24px] text-white">
                    Poor
                  </p>
                )}
              </div>
              <span className="font-normal leading-[24px] text-[#333333] xxs:text-[16px] md:text-[18px]">
                {isLoading ? (
                  <CgSpinner size={20} className=" animate-spin" />
                ) : (
                  averageRating?.toFixed(2) || 0
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersHome;
