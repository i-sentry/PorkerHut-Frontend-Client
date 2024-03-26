import React from "react";
import Accordion from "../utility/Accordion";
import { BsX } from "react-icons/bs";

const StoreProfileOverlay = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      className={`absolute top-0 left-0 z-50 flex h-full w-full justify-center bg-black bg-opacity-50 py-10 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative h-min w-1/2 bg-[#F4F4F4] p-8">
        <span
          className="absolute top-8 right-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <BsX size={32} />
        </span>
        <Accordion height="h-auto" />
      </div>
    </div>
  );
};

export default StoreProfileOverlay;
