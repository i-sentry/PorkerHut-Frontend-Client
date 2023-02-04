// import React, { useState, useEffect} from "react";
// import { RxCaretLeft, RxCaretRight, RxDotFilled } from "react-icons/rx";
// import "./Slider.css";

// interface Props {
//   images: string[];
// }

// const SLIDES = [
//   {
//     src: "./images/Banner.jpg",
//   },
//   {
//     src: "./images/Banner1.jpg",
//   },
//   {
//     src: "./images/Banner2.jpg",
//   },
// ];

// const Slider: React.FC<Props> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(1);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? SLIDES.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const nextSlide = () => {
//     const isLastSlide = currentIndex === SLIDES.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const gotoSlide = (slideIndex: any) => {
//     setCurrentIndex(slideIndex);
//   };

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     nextSlide();
  //   }, 3000);
      

//     return () => clearInterval(id);
//   }, [currentIndex, images]);

//    const moveDot = (index: React.SetStateAction<number>) => {
//      setCurrentIndex(index);
//    };

//   return (
//     <div className="h-[400px] w-sreen m-auto relative group md:mb-20 xxs:mb-10">
//       <div
//         style={{ backgroundImage: `url(${SLIDES[currentIndex].src})` }}
//         className="w-screen h-full bg-center bg-cover duration-500"
//       ></div>
//       {/* {Left arrow} */}
//       <div className=" hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-4 bg-black/20 text-white cursor-pointer">
//         <RxCaretLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* {Right Arrow} */}
//       <div className=" hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-4 bg-black/20 text-white cursor-pointer">
//         <RxCaretRight onClick={nextSlide} size={30} />
//       </div>

//       <div className="flex justify-center py-2 absolute md:top-[360px] md:left-[48%] xxs:bottom-0 xxs:left-[44%]">
//         {SLIDES.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => gotoSlide(slideIndex)}
//             className="text-md cursor-pointer text-white"
//           >
//             {Array.from({ length: 1 }).map((item, index) => (
//               <RxDotFilled
//                 key={index}
//                 onClick={() => moveDot(index + 1)}
//                 className={slideIndex === index + 1 ? "dot active" : "dot"}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;




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
            key={obj.id}
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