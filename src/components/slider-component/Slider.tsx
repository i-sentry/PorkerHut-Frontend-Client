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
      ((slideIndex - 2 + dataSlider.length) % dataSlider.length) + 1
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
      <div className="w-full xxs:h-[80vh] md:h-[90vh] overflow-hidden">
        {dataSlider.map((obj, index) => (
          <div
            key={obj.id}
            className={`w-full h-full absolute opacity-0 transition-opacity duration-400 ${
              slideIndex === index + 1 ? "active-anim opacity-100" : ""
            }`}
          >
            <img src={obj.src} alt="" className="w-full h-full object-cover" />
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

      <div className="absolute mx-auto left-[50%] -bottom-5 transform -translate-x-1/2 flex mt-4">
        {dataSlider.map((obj, index) => (
          <div
            key={obj.id}
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
    <div className="h-8 flex justify-between items-center bg-red-400 ">
      <form className="min-w-full" onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center min-w-full ">
          <label className="flex relative">
            <input
              autoFocus
              className={`placeholder:text-slate-400 block bg-[#F4F4F4] w-[366px] md:w-[700px] border-0  py-4  pl-5 shadow-sm  sm:text-sm disabled:opacity-10 h-full placeholder:text-[12px] placeholder:leading-[14px] placeholder:font-normal rounded outline-none `}
              placeholder="Search here"
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onBlur={handleBlur}
            />
            <button
              className="absolute font-bold right-1 top-[25%] text-[#A2A2A2]"
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
