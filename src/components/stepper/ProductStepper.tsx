import React, { useEffect, useState, useRef } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const CreateProductStepper = ({ steps, currentStep }: any) => {
  const [newStep, setNewStep] = useState<any[]>([]);

  const stepRef = useRef();

  const updateStep = (stepNumber: number, steps: any) => {
    const newSteps = [...steps];
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
    // create object
    const stepState = steps.map((step: string, index: number) =>
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
    stepRef.current = stepState;
    const current: any = updateStep(currentStep - 1, stepRef.current);

    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index === newStep.length - 1
            ? "w-full flex   items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center">
          {/* <div
            className={` transition duration-500 ease-in-out border  text-black h-12 w-12 flex items-center justify-center py-3 ${
              step.selected ? "bg-[#197B30] text-white" : ""
            } `}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div> */}

          <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
            {/* Description */}
            {/* display Description */}
          </div>
        </div>
        <div
          className={`flex justify-between items-center gap-8 transition duration-500 ease-in-out text-[#197B30] ${
            step.completed ? "text-[#197B30]" : "text-gray-200"
          }`}
        >
          <span className="">{step.description}</span>
          <HiOutlineChevronDoubleRight />

          {/* Dispaly Line */}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-center items-center gap-2">
      {displaySteps}
    </div>
  );
};

export default CreateProductStepper;
