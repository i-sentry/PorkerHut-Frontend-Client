import React from "react";
import { useImageOverlay } from "../../store/overlay";
import { IoMdClose } from "react-icons/io";

const ImageOverLay = () => {
  const setShowOverlay = useImageOverlay((state) => state.setShowOverlays);
  const image = useImageOverlay((state) => state.image);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#000000d2]   ">
      <span
        onClick={() => setShowOverlay(false)}
        className="text-[#fff] absolute top-5 right-5 cursor-pointer"
      >
        <IoMdClose size={30} />
      </span>
      <div className="">
        <img src={image} alt={` img`} className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default ImageOverLay;
