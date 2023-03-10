import React from 'react'

const StepperController = ({
  checkoutSteps,
  currentStep,
  handleClick,
}: {
  checkoutSteps: string[];
  currentStep: number;
  handleClick: (direction?: string) => void;
    }) => {

    console.log(checkoutSteps, "checkoutSteps");
    console.log(currentStep, "currentStep");
  return (
    <div className="flex gap-4 ml-auto w-full my-5 ">
      <button
        onClick={() => handleClick()}
        className={`bg-[#fff] border border-[#197B30] text-[#197B30] px-8 py-2.5 rounded  mx-2  shadow-lg hover:opacity-50 duration-100 ease-in-out ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick("next")}
        className="bg-[#197b30] hover:bg-[#197b60] text-white border border-[#197b30] px-10 py-2.5 rounded text-button  mx-2  shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps?.length  ? "Get Started" : "Next"}
      </button>
    </div>
  );
};

export default StepperController

//  <div className="flex gap-4 ml-auto mt-5">
//         <button className="bg-[#fff] border border-[#197B30] text-[#197B30] px-8 py-2.5 rounded">
//           Back
//         </button>
//         <button className="bg-[#197b30] hover:bg-[#197b60] text-white border border-[#197b30] px-10 py-2.5 rounded">
//           Get Started
//         </button>
//       </div>