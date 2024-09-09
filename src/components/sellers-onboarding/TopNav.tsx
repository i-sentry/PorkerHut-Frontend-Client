import React from "react";
import PorkerLogo from "../../assets/images/porker.png";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed  top-0 z-50 w-full bg-white px-[4%] md:py-0  ">
      <div className="flex h-16  items-center justify-between border-b border-b-[#D9D9D9] ">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer select-none items-center gap-2"
        >
          <img
            src={PorkerLogo}
            alt="logo"
            className="h-[40px] md:cursor-pointer"
          />
          <h1 className="porker select-none whitespace-nowrap font-Roboto-slab  text-lg font-bold text-[#197B30] sm:text-2xl">
            Porker Hut
          </h1>
        </div>
        <div className="mt-4  text-right text-xs sm:mt-0">
          <p className="whitespace-nowrap text-[#A2A2A2]">
            {" "}
            Help Line: <span className="text-[#000]">info@porkerhut.com </span>
          </p>
          <p>+2348057808076</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
