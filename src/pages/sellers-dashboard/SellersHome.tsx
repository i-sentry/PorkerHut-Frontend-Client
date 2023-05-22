import React, { useState, useEffect, useMemo } from "react";
import banner1 from "../../assets/images/SellerHomeBanner.png";

import Modal from "../../components/announcement-component/Modal";
import Select from "react-select";
import { AiOutlineSound } from "react-icons/ai";
import RowModal from "../../components/announcement-component/RowModal";
import { announcementData } from "../../utils/announcementData";

import { RiMessage2Line } from "react-icons/ri";

interface SliderProps {
  sliderImages: never[];
}

const items = [
  {
    date: "Dec 3",
    title: "December Sales!!!",
    description:
      "Prepare for the December sales and stock up your products because we will be experiencing high traffic on our site. It...",
  },
  {
    date: "April 3",
    title: "April Offer!",
    description:
      "Check out our latest collection of products. We have added exciting new items that you do not want to miss.",
  },
  {
    date: "May 04",
    title: "May Offer!",
    description:
      "Don't miss our special limited-time offer. Grab your favorite products at discounted prices before it ends!",
  },
  {
    date: "June 1",
    title: "Upcoming Event Announcement",
    description:
      "Mark your calendars! We have an exciting event coming up. Stay tuned for more details and join us for a memorable experience.",
  },
];

const totalItem = [
  {
    day: "Today",
    total: 12,
  },
  {
    day: "Yesterday",
    total: 30,
  },
  {
    day: "Older",
    total: 12,
  },
];

const SellersHome: React.FC<SliderProps> = ({ sliderImages }: SliderProps) => {
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);
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

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(id);
  }, [slideIndex, sliderImages]);

  const moveDot = (index: any) => {
    setSlideIndex(index);
  };

  return (
    <div className="pb-40">
      <div className="relative">
        <div className=" w-full h-[200px] ">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={index}
                className={`w-full h-full absolute opacity-0 transition-opacity duration-400 ${
                  slideIndex === index + 1 ? "active-anim opacity-100" : ""
                }`}
              >
                <img
                  src={obj.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className=" absolute mx-auto left-[50%] transform -translate-x-1/2 flex mt-4">
          {dataSlider.map((_, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={`w-[6px] h-[6px]  border-3 rounded-full mr-2 ${
                slideIndex === index + 1
                  ? "bg-[#197B30] border-[#197B30]"
                  : "bg-gray-300 border-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-10 ">
        <div className="">
          <div className="flex items-center justify-between bg-[#F4F4F4] py-4 px-4">
            <span className="text-[24px] leading-[24px] font-normal text-[#A2A2A2] tracking-[0.15px]">
              Announcements
            </span>
            <RiMessage2Line size={20} className="text-[#c5a0a0]" />
          </div>

          {items.map((item, index) => (
            <div key={index} className="flex gap-10 px-4 py-4 border">
              <span className="whitespace-nowrap text-[16px] leading-[24px] font-normal">
                {item.date}
              </span>

              <div className="flex gap-1 flex-col">
                <span className="block text-[20px] leading-[24px] font-medium">
                  {item.title}
                </span>
                <span className="text-[16px] font-normal leading-[24px]">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="border-r border-l ">
            <div className=" bg-[#F4F4F4] py-4 px-6">
              <span className="text-[24px] leading-[24px] font-normal text-[#A2A2A2] tracking-[0.15px]">
                Total Pending Orders
              </span>
            </div>

            {totalItem.map((item, index) => (
              <div key={index} className="">
                <div className="flex items-center justify-between px-[32px] py-[50px] border-b">
                  <span className="text-[24px] leading-[24px] font-normal">
                    {item.day}
                  </span>
                  <span className="text-[24px] leading-[24px] font-normal">
                    {item.total}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-r border-l ">
            <div className=" bg-[#F4F4F4] py-4 px-4">
              <span className="text-[24px] leading-[24px] font-normal text-[#A2A2A2] tracking-[0.15px]">
                Your Rating
              </span>
            </div>

            <div className="">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-[24px] leading-[24px] font-normal">
                  Average Customer Rating
                </span>
                <span className="text-[24px] leading-[24px] font-normal">
                  12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersHome;
