import React, { useEffect, useRef, useState } from "react";
import { StepLayoutProps } from "../../pages/Authentication/CreateSellersAcc";

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
    <div className="mx-4 p-4 flex justify-between items-center font-semibold">
      {newStep?.map((step, index) => (
        <div
          key={index}
          className={
            index !== newStep.length - 1
              ? "w-full flex items-center"
              : "flex items-center"
          }
        >
          <div className="relative flex  items-center">
            <div
              className={` transition duration-500 ease-in-out border-2 border-primary h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 flex items-center justify-center py-3 ${
                step.selected
                  ? "bg-button text-button"
                  : "opacity-90 border-gray-400"
              }`}
            >
              {step.completed ? <span>&#10003;</span> : index + 1}
            </div>
            <div
              className={`text-center   uppercase text-xs sm:text-sm ${
                step.highlighted ? "" : "opacity-70"
              }`}
            >
              {step.description}
            </div>
          </div>
          <div
            className={`flex-auto  transition duration-500 ease-in-out ${
              step.completed ? "border-primary" : "border-gray-400"
            }`}
          >hhhhhh</div>
        </div>
      ))}
    </div>
  );
};

export default SellerStepper;
