import React, { useState, useEffect, useCallback } from "react";
import banner1 from "../../assets/images/SellerHomeBanner.png";

// import Modal from "../../components/announcement-component/Modal";
// import Select from "react-select";
// import { AiOutlineSound } from "react-icons/ai";
// import RowModal from "../../components/announcement-component/RowModal";
// import { announcementData } from "../../utils/announcementData";

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

  const nextSlide = useCallback(() => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  },[dataSlider.length, slideIndex]);

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
  }, [nextSlide, slideIndex, sliderImages]);

  const moveDot = (index: any) => {
    setSlideIndex(index);
  };

  return (
    <div className="mb-20">
      <div className="relative">
        <div className=" w-full h-[320px]  ">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={index}
                className={`w-full h-full absolute opacity-0 transition-opacity duration-400 xxs:px-5 md:px-0 ${
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
      <div className="my-8 overflow-y-scroll no-scrollbar">
      <p className="marquee w-full text-center whitespace-nowrap ">
        jsdfskhfhdgsuy5thhgfhshfdsahfdhghfjhjgjghgdgfdgfjghgdsfdgjhsgdhghsgfdgffgfdafsdadsaffhgghgxdfsfgjhggjkhfjdfsfdssaddhgfkjhghcgfsgfdzshggfsjgskjjsghsdfgsgfdghdhfhffhfgfgsj</p>
      </div>

      <div className="mt-28 grid md:grid-cols-2 xxs:grid-rows-1 md:gap-10 xxs:px-4 xxs:gap-14">
        <div className="">
          <div className="flex items-center justify-between bg-[#F4F4F4] py-8 px-4 rounded-t-md">
            <span className="md:text-[24px] leading-[24px] xxs:text-[16px]  font-normal text-[#A2A2A2] tracking-[0.15px]">
              Announcements
            </span>
            <RiMessage2Line size={26} className="text-[#F91919]" />
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="flex xxs:flex-col md:flex-row md:gap-10 xxs:gap-8 px-4 py-10 border-t-0 border border-[#A2A2A2]"
            >
              <span className="whitespace-nowrap text-[16px] leading-[24px] font-normal">
                {item.date}
              </span>

              <div className="flex gap-2 flex-col">
                <span className=" text-[18px] leading-[24px] font-medium">
                  {item.title}
                </span>
                <span className="text-[16px] font-normal leading-[24px] text-[#333333]">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className=" ">
            <div className=" bg-[#F4F4F4] py-8 px-4 rounded-t-md">
              <span className="md:text-[24px] leading-[24px] xxs:text-[16px]  font-normal text-[#A2A2A2] tracking-[0.15px]">
                Total Pending Orders
              </span>
            </div>

            {totalItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-10 border border-t-0 border-[#A2A2A2] "
              >
                <span className="md:text-[16px] xxs:text-[14px] leading-[24px] font-normal text-[#333333]">
                  {item.day}
                </span>
                <span className="md:text-[16px] xxs:text-[14px] leading-[24px] font-normal text-[#333333]">
                  {item.total}
                </span>
              </div>
            ))}
          </div>
          <div className=" ">
            <div className=" bg-[#F4F4F4] py-8 px-4">
              <span className="md:text-[18px] leading-[24px] xxs:text-[16px]  font-normal text-[#A2A2A2] tracking-[0.15px]">
                Your Rating
              </span>
            </div>


              <div className="flex items-center justify-between px-4 py-4 border-t-0 border border-[#A2A2A2]">
                <div className=" ">
                  <p className="md:text-[16px] leading-[24px] xxs:text-[16px]  font-normal text-[#333333] tracking-[0.15px]">
                    Average Customer Rating
                  </p>
                  <p className="text-[#22C55E] text-[13px] leading-[24px] mt-2">
                    Excellent
                  </p>
                </div>
                <span className="md:text-[18px] xxs:text-[16px] leading-[24px] font-normal text-[#333333]">
                  12
                </span>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersHome;
