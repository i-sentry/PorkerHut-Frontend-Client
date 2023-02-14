
import React, { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

interface SliderProps {
  sliderImages: never[];
}

const Slider: React.FC<SliderProps> = ({sliderImages}: SliderProps) => {
  const dataSlider = [
    {
    id: 1,
    src: "./images/Banner.jpg",
  },
    {
    id: 2,
    src: "./images/Banner1.jpg",
  },
    {
    id: 3,
    src: "./images/Banner2.jpg",
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
  
      

  const moveDot = (index: React.SetStateAction<number>) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.src} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;