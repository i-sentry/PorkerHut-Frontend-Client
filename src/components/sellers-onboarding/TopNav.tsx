import React from "react";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";

const TopNav = () => {
  return (
    <div className="bg-white  fixed top-0 w-full z-50 md:py-0 px-[4%]  ">
      <div className="flex items-center  justify-between h-16 border-b border-b-[#D9D9D9]">
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img
            src={PorkerLogo}
            alt="logo"
            style={{ height: "40px" }}
            className="md:cursor-pointer "
          />
          <h1 className="porker text-2xl font-bold text-[#197B30]  font-Roboto-slab select-none">
            Porker Hut
          </h1>
        </div>
        <div className="text-right  text-xs ">
          <p className="whitespace-nowrap text-[#A2A2A2]">
            {" "}
            Help Line:{" "}
            <span className="text-[#000]">support@porkerhut.com </span>
          </p>
          <p>+2348164602635</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
