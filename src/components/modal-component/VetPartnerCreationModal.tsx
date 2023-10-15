import React from "react";
import vetVerify from "../../assets/images/vetVerify.png";
import PorkerLogo from "../../assets/images/porker.png";
import { NavLink } from "react-router-dom";

const VetPartnerCreationModal = () => {
  return (
    <div>
      <div className="mb-20 lg:px-[4%] xxs:px-2">
        <nav className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <img src={PorkerLogo} alt="" className="lg:cursor-pointer h-9" />
            <h1 className="porker sm:text-xl font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
              Porker Hut
            </h1>
          </div>

          <div>
            <h1 className="text-sm font-medium  mt-4 text-[#A2A2A2]">
              Help Line: <br className="lg:hidden" />{" "}
              <span className="text-sm font-medium text-center mt-4 text-[#333333]">
                support@porkerhut.com
              </span>
            </h1>
            <span className="text-sm font-medium text-center mt-4 text-[#333333]">
              +2348164602635
            </span>
          </div>
        </nav>
        <hr />
      </div>

      <div className=" max-w-[1568px] h-fit md:max-w-[1568px] bg-white    mx-8 mb-20 rounded-lg">
        <div className=" flex flex-col items-center text-center mt-24 md:mt-32">
          <div className=" ">
            <div className="flex items-center justify-center">
              <img src={vetVerify} alt="" className="w-24 h-24" />
            </div>
            <h1 className=" pt-4 text-[18px] md:text-base leading-7 text-[#333333] font-medium mb-4">
              Your Submission has been received!
            </h1>
            <p className="lg:text-xs xxs:text-sm md:text-sm text-[#333333] mb-8">
              We’re on it! Porker Hut representative will be reaching out
              shortly.
            </p>
            <NavLink
              to="/"
              className=" border xxs:text-[14px] border-[#479559] md:text-[14px] text-[8px] md:py-3 md:px-10 py-4 px-[45px]  rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap mt-6"
            >
              Back to Home Page
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetPartnerCreationModal;
