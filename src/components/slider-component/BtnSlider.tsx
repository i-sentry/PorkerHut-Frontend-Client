import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import "./Slider.css";

interface BtnSliderProps {
  
  moveSlide: () => void;
  direction: string;
  customClass?: string;
}


export default function BtnSlider({ direction, moveSlide, customClass }: BtnSliderProps) {
  
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <RxCaretRight/> : <RxCaretLeft/>}
    </button>
  );
}
