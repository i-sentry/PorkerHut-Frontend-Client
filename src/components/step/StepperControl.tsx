import { useContext } from "react";
import { productStepsContext } from "../../context/StepperContext";

export default function StepperControl() {
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);
console.log(checkoutSteps?.length);
console.log(currentStep, "currentStep");
  return (
    <div className="flex justify-center gap-8 mt-10">
      <button
        disabled={currentStep === 1}
        onClick={() => {
          handleClick("");
        }}
        className={`bg-[#fff] border border-[#197B30] text-[#197B30] px-8 py-2.5 rounded  shadow-lg hover:opacity-50 duration-100 ease-in-out disabled:bg-[#ddddddfd] ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        // disabled
        onClick={() => handleClick("next")}
        className="bg-[#197b30]  text-white border border-[#197b30] px-10 py-2.5 disabled:bg-[#197b30ac] rounded text-button   shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps?.length ? "Confirm" : "Continue"}
      </button>
    </div>
  );
}
