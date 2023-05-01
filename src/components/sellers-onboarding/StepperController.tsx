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

  return (
    <div className="flex gap-3 w-full my-5 parent-class justify-end">
      <button
        disabled={currentStep === 1}
        onClick={() => {
          handleClick();
        }}
        className={`bg-[#fff] border border-[#197B30] text-[#197B30] px-8 py-2.5 rounded  shadow-lg hover:opacity-50 duration-100 ease-in-out disabled:bg-[#ddddddfd] ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        disabled
        onClick={() => handleClick("next")}
        className="bg-[#197b30]  text-white border border-[#197b30] px-10 py-2.5 disabled:bg-[#197b30ac] rounded text-button   shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps?.length ? "Get Started" : "Next"}
      </button>
    </div>
  );
};

export default StepperController
