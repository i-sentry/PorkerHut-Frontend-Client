import React from "react";
import Accordion from "../utility/Accordion";
import { BsX } from "react-icons/bs";

const StoreProfileOverlay = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      className={`fixed top-16 left-0 z-50 flex h-full w-full justify-center bg-black bg-opacity-50 py-5 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative h-screen w-1/2 pb-20">
        <span
          className="absolute top-8 right-4 z-20 cursor-pointer bg-[#F4F4F4]"
          onClick={() => setIsOpen(false)}
        >
          <BsX size={32} />
        </span>
        <div className="hide-scroll-bar h-full overflow-auto bg-[#F4F4F4] p-8">
          <Accordion height="h-auto" />
        </div>
      </div>
    </div>
  );
};

export default StoreProfileOverlay;
