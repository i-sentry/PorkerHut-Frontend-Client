import React, { useContext, useEffect, useRef, useState } from "react";
// import { StepLayoutProps } from "../../pages/Authentication/CreateSellersAcc";
import { SiAcclaim } from "react-icons/si";
import { SellersStepsContext, SellersStepsContextValue } from "../../context/SellersStepsContext";

type Step = {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
};

const SellerStepper = ({
  checkoutSteps,
  currentStep,
}: {
  checkoutSteps: string[];
  currentStep: number;
}) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);


  const updateStep = (stepNumber: number, checkoutSteps: any) => {
    const newSteps = [...checkoutSteps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepsState = checkoutSteps?.map((step: any, index: number) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);

    setNewStep(current);
  }, [checkoutSteps, currentStep]);
  return (
    <div className="m-4 p-4 md:flex justify-center items-center font-semibold gap-5 xxs:hidden">
      {newStep?.map((step, index) => (
        <div
          key={index}
          className={
            index !== newStep.length - 1
              ? " flex items-center"
              : "flex items-center"
          }
        >
          <div className="relative flex  items-center gap-3">
            <div
              className={` transition duration-500 ease-in-out  h-5 w-5 sm:h-11 sm:w-11 md:h-10 md:w-10 flex items-center justify-center py-3 ${
                step.selected
                  ? "text-[#fff] bg-[#197B30]"
                  : "opacity-90  bg-[#A2A2A2] text-[#fff]"
              }`}
            >
              {step.completed ? index + 1 : index + 1}
            </div>
            <div
              className={`text-center ${
                step.completed
                  ? "text-[#197B30] font-medium "
                  : "text-[#A2A2A2]"
              } text-[16px] leading-[19px] font-normal sm:text-sm ${
                step.highlighted ? "" : " opacity-70"
              }`}
            >
              {step.description}
            </div>
            <div
              className={`flex-auto rotate-90 transition duration-500 ease-in-out ${
                step.completed ? "text-[#197B30]" : "text-[#A2A2A2]"
              }`}
            >
              <span className="">
                <SiAcclaim size={15} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellerStepper;
