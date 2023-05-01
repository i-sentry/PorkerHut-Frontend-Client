import React from "react";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-white  fixed top-0 w-full z-50 md:py-0 px-[4%]  ">
      <div className="flex items-center  justify-between h-16 border-b border-b-[#D9D9D9] ">
        <div onClick={()=> navigate("/")} className="flex items-center gap-2 cursor-pointer select-none">
          <img
            src={PorkerLogo}
            alt="logo"

            className="md:cursor-pointer h-[40px]"
          />
          <h1 className="porker sm:text-2xl font-bold text-[#197B30]  font-Roboto-slab select-none whitespace-nowrap text-lg">
            Porker Hut
          </h1>
        </div>
        <div className="text-right  text-xs sm:mt-0 mt-4">
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
