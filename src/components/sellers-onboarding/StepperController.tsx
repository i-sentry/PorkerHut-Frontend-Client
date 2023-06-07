import React, { useContext } from 'react'
import { useVendorSignUp } from '../../services/hooks/Vendor';
import { SellersStepsContext, SellersStepsContextValue } from '../../context/SellersStepsContext';

const StepperController = () => {
 const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
   useContext(SellersStepsContext);
  const onboardVendor = useVendorSignUp();

  // const submitDetails = () => {
  //   handleClick("next");
  //   if (currentStep === checkoutSteps?.length) {
  //     onboardVendor
  //       .mutateAsync(userData)
  //       .then((res) => {
  //         console.log(res)
  //       })
  //       .catch((err) => {});
  //   }
  // };

  const submitDetails = () => {
    handleClick("next");
    if (currentStep === checkoutSteps?.length) {
      const formData = new FormData();

      // Convert userData to FormData
      for (const property in userData) {
        // formData.append(property, userData[property]);
      }

      onboardVendor
        //@ts-ignore
        .mutateAsync(formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          // Handle error
        });
    }
  };

  console.log(checkoutSteps, "checkoutSteps");
  console.log(currentStep, "currentStep");
  return (
    <div className="flex gap-3 w-full my-5 parent-class justify-end">
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
        onClick={submitDetails}
        className="bg-[#197b30]  text-white border border-[#197b30] px-10 py-2.5 disabled:bg-[#197b30ac] rounded text-button   shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps?.length ? "Get Started" : "Next"}
      </button>
    </div>
  );
};

export default StepperController
