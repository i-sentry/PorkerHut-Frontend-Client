import React from "react";
import { StepLayoutProps } from "../../pages/Authentication/CreateSellersAcc";
import SellerStepper from "./SellerStepper";
import { SellersStepsContext } from "../../context/SellersStepsContext";

const StepLayout = ({
  checkoutSteps,
  currentStep,
  handleClick,
  displayStep,
}: StepLayoutProps) => {
  return (
    <div className="main-div mb-24 mt-32 ">
      <SellerStepper checkoutSteps={checkoutSteps} currentStep={currentStep} />
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
  );
};

export default StepLayout;
