import React, { useState } from "react";
import VetPartnerMobileA from "./VetPartnerMobileFormA";
import VetPartnerMobileB from "./VetPartnerMobileFormB";

const LogisticPartnerMobileForm: React.FC = () => {
    const [currentForm, setCurrentForm] = useState(1);
    
    const title = "Becoming a Logistics Partner"

  const handleNextForm = () => {
    console.log("Next button clicked");
    if (currentForm === 1) {
      setCurrentForm(2);
    }
  };

  const handlePrevForm = () => {
    if (currentForm === 2) {
      setCurrentForm(1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="w-full max-w-md">
        {currentForm === 1 && <VetPartnerMobileA title={title} onNext={handleNextForm} />}
        {currentForm === 2 && <VetPartnerMobileB onPrev={handlePrevForm} />}
      </div>
      <div className="flex flex-col items-center justify-center">
        {currentForm === 2 && (
          <div className="mt-6">
            <button
              className="h-14 w-40 bg-[#197b30] text-white text-[14px] leading-[24px] font-semibold rounded"
              onClick={handlePrevForm}
            >
              Back
            </button>
          </div>
        )}
        {currentForm === 1 && (
          <div className="mt-6">
            <button
              className="h-14 w-40 bg-[#197b30] text-white text-[14px] leading-[24px] font-semibold rounded"
              onClick={handleNextForm}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogisticPartnerMobileForm;
