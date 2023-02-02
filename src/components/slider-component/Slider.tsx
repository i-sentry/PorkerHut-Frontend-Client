import React, { useState, useEffect} from "react";
import { RxCaretLeft, RxCaretRight, RxDotFilled } from "react-icons/rx";

interface Props {
  images: string[];
}

const SLIDES = [
  {
    src: "./images/Banner.jpg",
  },
  {
    src: "./images/Banner1.jpg",
  },
  {
    src: "./images/Banner2.jpg",
  },
];

const Slider: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SLIDES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === SLIDES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
      

    return () => clearInterval(id);
  }, [currentIndex, images]);
  return (
    <div className="h-[400px] w-sreen m-auto relative group mb-20">
      <div
        style={{ backgroundImage: `url(${SLIDES[currentIndex].src})` }}
        className="w-screen h-full bg-center bg-cover duration-500"
      ></div>
      {/* {Left arrow} */}
      <div className=" hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-4 bg-black/20 text-white cursor-pointer">
        <RxCaretLeft onClick={prevSlide} size={30} />
      </div>
      {/* {Right Arrow} */}
      <div className=" hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-4 bg-black/20 text-white cursor-pointer">
        <RxCaretRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex justify-center py-2 absolute top-[360px] left-[50%]">
        {SLIDES.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => gotoSlide(slideIndex)}
            className="text-md cursor-pointer text-white"
          >
            
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
