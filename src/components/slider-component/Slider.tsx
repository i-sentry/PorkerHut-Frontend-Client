import React, { useState, useEffect } from "react";
import BtnSlider from "./BtnSlider";
import { useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { ISearch, useSearchStore } from "../../store/showSearch";

interface SliderProps {
  sliderImages: never[];
}

const Slider: React.FC<SliderProps> = ({ sliderImages }: SliderProps) => {
  const dataSlider = [
    {
      id: 1,
      src: "./images/Banner.jpg",
      name: "banner_img",
    },
    {
      id: 2,
      src: "./images/Banner1.jpg",
      name: "banner_img",
    },
    {
      id: 3,
      src: "./images/Banner2.jpg",
      name: "banner_img",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);
  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);

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
    <div className="relative  ">
      <div className=" w-full xxs:h-[80vh] md:h-[90vh] overflow-hidden">
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
        <BtnSlider
          moveSlide={nextSlide}
          direction={"next"}
          customClass="top-1/2 left-20 transform -translate-y-1/2"
        />
        <BtnSlider
          moveSlide={prevSlide}
          direction={"prev"}
          customClass="top-1/2 right-20 transform -translate-y-1/2"
        />
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
      {/* <div className="xxs:hidden md:block text-left absolute ">
        <OverLay />
      </div> */}
    </div>
  );
};

export default Slider;

const OverLay = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-full z-50 h-screen flex justify-center items-center ">
        <div className="max-w-2xl  bg-gradient-to-b from-[rgba(251,196,124,0.1)] to-slate-[rgba(226, 190, 113, 0.35)] text-[#1c0708] backdrop-blur-[4em] border-[1px] border-solid border-white border-opacity-10  shadow-black/50  overflow-hidden shadow-2xl  hover:shadow-black/75 hover:backdrop-blur-[2em] transition ">
          <div className=" place-items-center grid-cols-6 gap-2 pl-4 pb-3">
            <div className="col-span-3 p-8">
              <h2 className="font-bold text-2xl mb-4 text-[#fff] tracking-wide">
                Porker Hut Naija
              </h2>
              <p className=" text-[#fff] font-light">
                Porker Hut is dedicated to ethical and responsible animal
                rearing, sourcing only the freshest, high-quality pigs from
                local farms. Our selection of premium pork products includes
                succulent chops, savory bacon, and mouth-watering sausages to
                satisfy every taste. Experience the difference of our
                farm-to-table approach with convenient online ordering and
                delivery options. Choose Porker Hut for unparalleled quality in
                every bite.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="mt-6 py-3 px-5 inline-flex bg-[#197b30] hover:bg-[#197b3098] transition-colors text-gray-200 font-bold rounded-md text-sm"
              >
                Shop now
              </button>
            </div>
            {/* <div className="col-span-3 -mt-5 -mb-10"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const SearchBar = ({
  setShowSearch,
}: {
  setShowSearch: (shouldShowSearch: any) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      const value = searchValue.replaceAll(" ", "+");
      navigate(`/search?q=${value.toLocaleLowerCase()}`);
    }
  };

  function handleClearClick() {
    setSearchValue("");
  }

  function handleBlur() {
    if (searchValue === "") {
      handleClearClick();
    }
  }

  return (
    <div className="h-8 flex justify-between items-center bg-red-400 ">
      <form className="min-w-full" onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center min-w-full ">
          <label className="flex relative">
            <input
              autoFocus
              className={`placeholder:text-slate-400 block bg-[#F4F4F4] w-[366px] border-0  py-4  pl-2 shadow-sm  sm:text-sm disabled:opacity-10 h-full placeholder:text-[12px] placeholder:leading-[14px] placeholder:font-normal rounded outline-none `}
              placeholder="search"
              type="type"
              name="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onBlur={handleBlur}
            />

            <button
              className=" absolute font-bold right-1 top-[25%] text-[#A2A2A2]"
              onClick={() => setShowSearch(false)}
            >
              <IoClose size={22} />
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};
