import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import "./Slider.css";

interface BtnSliderProps {
  direction: string;
  moveSlide: () => void;
}


export default function BtnSlider({ direction, moveSlide }: BtnSliderProps) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <RxCaretRight/> : <RxCaretLeft/>}
    </button>
  );
}
