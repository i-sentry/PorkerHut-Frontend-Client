import React, { useState, useEffect } from "react";
import BtnSlider from "./BtnSlider";

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
    <div className="relative">
      <div className=" w-full xxs:h-[450px] md:h-[580px] overflow-hidden">
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
            className={`w-[5px] h-[5px]  border-3 rounded-full mr-2 ${
              slideIndex === index + 1
                ? "bg-slate-500 border-slate-500"
                : "bg-gray-300 border-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
