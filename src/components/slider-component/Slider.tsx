import React, { useState, useEffect, useCallback } from "react";
import BtnSlider from "./BtnSlider";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface SliderProps {
  sliderImages: never[];
}

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

const Slider: React.FC<SliderProps> = ({ sliderImages }: SliderProps) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = useCallback(() => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  const prevSlide = () => {
    setSlideIndex(
      ((slideIndex - 2 + dataSlider.length) % dataSlider.length) + 1,
    );
  };

  useEffect(() => {
    const id = setInterval(nextSlide, 3000);
    return () => clearInterval(id);
  }, [nextSlide, slideIndex, sliderImages]);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const scaleInImage = () => {
      const image = document.querySelector(".scale-in-image");
      if (image) {
        setTimeout(() => {
          image.classList.add("scale-in");
        }, 1000);
      }
    };

    scaleInImage();
  }, []);

  return (
    <div className="relative">
      <div className="w-full overflow-hidden xxs:h-[46vh] md:h-[60vh] lg:h-[90vh]">
        {dataSlider.map((obj, index) => (
          <div
            key={obj.id}
            className={`duration-400 absolute h-full w-full opacity-0 transition-opacity ${
              slideIndex === index + 1 ? "active-anim opacity-100" : ""
            }`}
          >
            <img src={obj.src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        <BtnSlider
          moveSlide={nextSlide}
          direction="next"
          customClass="top-1/2 left-20 transform -translate-y-1/2"
        />
        <BtnSlider
          moveSlide={prevSlide}
          direction="prev"
          customClass="top-1/2 right-20 transform -translate-y-1/2"
        />
      </div>

      <div className="absolute left-[50%] -bottom-5 mx-auto mt-4 flex -translate-x-1/2 transform">
        {dataSlider.map((obj, index) => (
          <div
            key={obj.id}
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
  );
};

export default Slider;

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
    <div className="flex h-8 items-center justify-between bg-red-400 ">
      <form className="min-w-full" onSubmit={(e) => onSubmit(e)}>
        <div className="flex min-w-full items-center ">
          <label className="relative flex">
            <input
              autoFocus
              className={`block h-full w-[366px] rounded border-0 bg-[#F4F4F4]  py-4  pl-5 shadow-sm  outline-none placeholder:text-[12px] placeholder:font-normal placeholder:leading-[14px] placeholder:text-slate-400 disabled:opacity-10 sm:text-sm md:w-[700px] `}
              placeholder="Search here"
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onBlur={handleBlur}
            />
            <button
              className="absolute right-1 top-[25%] font-bold text-[#A2A2A2]"
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
