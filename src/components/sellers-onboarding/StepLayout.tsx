import React, { useEffect, useState } from "react";
import { StepLayoutProps } from "../../pages/Authentication/CreateSellersAcc";
import SellerStepper from "./SellerStepper";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import TopNav from "./TopNav";
import Footer from "../footer-component/Footer";
import { CircularProgressbar } from "react-circular-progressbar";


const StepLayout = ({
  checkoutSteps,
  currentStep,
  handleClick,
  displayStep,
}: StepLayoutProps) => {
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
 const numSteps = 4;
 const [progress, setProgress] = useState(25);

 useEffect(() => {
   const stepProgress = Math.round((currentStep / numSteps) * 100);
   setProgress(stepProgress);
 }, [currentStep, numSteps]);


  return (
    <>
      <TopNav />
      <div className="main-div mb-24 mt-24 ">
        <div>
          <div className="flex justify-center items-center  mt-4">
            <h1 className="font-normal sm:text-2xl text-xl">
              Create your seller account
            </h1>
          </div>
          <div className="flex items-center justify-center ">
            <div className=" block h-1.5 w-20 bg-[#197B30]"></div>
          </div>
        </div>
        <div>
          <SellerStepper
            checkoutSteps={checkoutSteps}
            currentStep={currentStep}
          />
        </div>
        <div className="flex items-center gap-5 sm:hidden mx-3">
          <div className="w-20 my-6">
            <CircularProgressbar
              value={progress}
              text={`${currentStep} of 4`}
              styles={{
                // Customize the root svg element
                root: {},

                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `#197b30`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "#d6d6d6",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#197b30",
                  // Text size
                  fontSize: "22px",
                  // Vertical alignment of text
                  dominantBaseline: "middle",
                  // Horizontal alignment of text
                  textAnchor: "middle",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#197b30",
                },
              }}
            />
          </div>
          <div>
            <h1 className="text-[#333333] font-semibold text-base">
              Step {currentStep}
            </h1>
            <p className="text-base font-light">{checkoutSteps[currentStep-1]}</p>
          </div>
        </div>

        <div>
          <SellersStepsContext.Provider
            //@ts-ignore
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
              checkoutSteps,
              currentStep,
              handleClick,
            }}
          >
            {displayStep(currentStep)}
          </SellersStepsContext.Provider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StepLayout;
