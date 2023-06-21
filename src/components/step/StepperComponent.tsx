import { useState } from "react";
import { StepperContextProvider } from "../../context/StepperContext";
import Account from "./Account";
import Details from "./Details";
import Payment from "./Pricing";
import Final from "./Image";
import StepperControl from "./StepperControl";
import Stepper from "./Steppers";
import { AiOutlineLine } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface Isteps {
  steps: string[];
}

function StepperComponent() {
  const [currentStep, setCurrentStep] = useState(1);

  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
  const subcategory = queryParams.get('subcategory');
  
  console.log({subcategory});
  

  const steps = [
    "Product Information",
    "More Product Details",
    "Product Pricing",
    "Images",
  ];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction: any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="pl-8 pr-4 h-[800px]">
      <div className="flex items-center gap-2 py-5">
        <h1 className="md:text-[36px] md:leading-[42px] md:font-medium  xxs:font-normal  mb-3 xxs:text-[20px] xxs:leading-[23px] text-[#1F1F1F]">
          Create Products
        </h1>

        <div className="flex items-center gap-2">
          <AiOutlineLine size={30} />
          <span className="text-[16px] leading-[19px] font-medium text-[#A2A2A2]">
            {category}
          </span>
          <FaAngleRight size={24} className="text-[#A2A2A2]" />

          <span className="ext-[16px] leading-[19px] font-normal text-[#A2A2A2]">
            {subcategory}
          </span>
        </div>
      </div>
      {/* Stepper */}
      <div className="horizontal ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 ">
          <StepperContextProvider>
            {displayStep(currentStep)}
          </StepperContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default StepperComponent;
