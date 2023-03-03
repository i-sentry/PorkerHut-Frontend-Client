import React from "react";

const StepperControl = ({ handdleClick, currentStep, steps }: any) => {
  return (
    <div className="container flex justify-center gap-6 mt-4 mb-8">
      {/* back button */}
      <button
        onClick={() => handdleClick()}
        className={`"bg-[#F4F4F4] text-[#197B30] text-sm py-2 px-8 font-normal rounded-md cursor-pointer border border-[#197B30] ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>

      {/* next button */}
      <button
        className="bg-[#197B30] text-white text-sm py-2 px-6 rounded-md font-normal cursor-pointer border"
        onClick={() => handdleClick("next")}
      >
        {currentStep === steps.length - 0 ? "Confirm" : "Continue"}
      </button>
    </div>
  );
};

export default StepperControl;
