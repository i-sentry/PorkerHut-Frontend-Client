import React from "react";
import vetVerify from "../../assets/images/vetVerify.png";
import PorkerLogo from "../../assets/images/porker.png";
import { NavLink } from "react-router-dom";

const VetPartnerCreationModal = () => {
  return (
    <div>
      <div className="mb-20 xxs:px-2 lg:px-[4%]">
        <nav className="mb-4 flex items-center justify-between">
          <div className="flex cursor-pointer select-none items-center gap-2">
            <img src={PorkerLogo} alt="" className="h-9 lg:cursor-pointer" />
            <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-xl">
              Porker Hut
            </h1>
          </div>

          <div>
            <h1 className="mt-4 text-sm  font-medium text-[#A2A2A2]">
              Help Line: <br className="lg:hidden" />{" "}
              <span className="mt-4 text-center text-sm font-medium text-[#333333]">
                info@porkerhut.com
              </span>
            </h1>
            <span className="mt-4 text-center text-sm font-medium text-[#333333]">
              +2348057808076
            </span>
          </div>
        </nav>
        <hr />
      </div>

      <div className=" mx-8 mb-20 h-fit max-w-[1568px]    rounded-lg bg-white md:max-w-[1568px]">
        <div className=" mt-24 flex flex-col items-center text-center md:mt-32">
          <div className=" ">
            <div className="flex items-center justify-center">
              <img src={vetVerify} alt="" className="h-24 w-24" />
            </div>
            <h1 className=" mb-4 pt-4 text-[18px] font-medium leading-7 text-[#333333] md:text-base">
              Your Submission has been received!
            </h1>
            <p className="mb-8 text-[#333333] xxs:text-sm md:text-sm lg:text-xs">
              We’re on it! Porker Hut representative will be reaching out
              shortly.
            </p>
            <NavLink
              to="/"
              className=" mt-6 select-none whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#197B30] py-4 px-[45px]  text-[8px] font-medium tracking-wider text-[#fff] xxs:text-[14px] md:inline-block md:py-3 md:px-10 md:text-[14px]"
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
