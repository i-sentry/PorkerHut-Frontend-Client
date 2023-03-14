import React from "react";
import { StepLayoutProps } from "../../pages/Authentication/CreateSellersAcc";
import SellerStepper from "./SellerStepper";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import TopNav from "./TopNav";
import Footer from "../footer-component/Footer";

const StepLayout = ({
  checkoutSteps,
  currentStep,
  handleClick,
  displayStep,
}: StepLayoutProps) => {
  return (
    <>
      <TopNav />
      <div className="main-div mb-24 mt-24 ">
        <div>
          <div className="flex justify-center items-center  mt-4">
            <h1 className="font-semibold text-2xl">
              Create your own seller account
            </h1>
          </div>
          <div className="flex items-center justify-center ">
            <div className=" block h-1 w-20 bg-[#197B30]"></div>
          </div>
        </div>
        <div>

        <SellerStepper
          checkoutSteps={checkoutSteps}
          currentStep={currentStep}
        />
        </div>
        <div>
             <div className="flex items-center justify-center -m-6 overflow-hidden bg-white ">
            <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-red-300"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                />
              <circle
                className="text-blue-100"
                stroke-width="10"

                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
               />
            </svg>
            <span className="absolute text-2xl text-blue-700">3</span>
          </div>
        </div>
        <div>
          <SellersStepsContext.Provider
            //@ts-ignore
            value={{
              // userData,
              // setUserData,
              // finalData,
              // setFinalData,
              checkoutSteps,
              currentStep,
              handleClick,
            }}
          >
            {displayStep(currentStep)}
          </SellersStepsContext.Provider>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default StepLayout;
