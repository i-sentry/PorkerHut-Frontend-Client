import { useState } from "react";

import { StepperContextProvider } from "../../context/StepperContext";

import Account from "./Account";
import Details from "./Details";
import Payment from "./Pricing"
import Final from "./Image";
import StepperControl from "./StepperControl";
import Stepper from "./Steppers";

interface Isteps {
    steps: string[]
}


function StepperComponent() {
  const [currentStep, setCurrentStep] = useState(1);

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
      {/* Stepper */}
      <div className="horizontal mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 ">
          <StepperContextProvider>{displayStep(currentStep)}</StepperContextProvider>
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
