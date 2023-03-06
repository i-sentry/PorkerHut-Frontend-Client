import React, { useState } from "react";
import SellersAccountInfo from "../../components/sellers-onboarding/SellersAccountInfo";
import BankAccountInfo from "../../components/sellers-onboarding/BankAccountInfo";
import BusinessInfo from "../../components/sellers-onboarding/BusinessInfo";
import SummaryInfo from "../../components/sellers-onboarding/SummaryInfo";
import StepLayout from "../../components/sellers-onboarding/StepLayout";

export const sellersStep = [
  "Seller Account",
  "Business Information",
  "Bank Account",
  "Summary",
];

export interface StepLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  checkoutSteps: string[];
  currentStep: number;
  handleClick: (direction: string) => void;
  displayStep: (sellersStep: any) => JSX.Element | undefined;
}

const CreateSellersAcc = () => {
  const formData = [];

  const [currentStep, setCurrentStep] = useState(1);
  const checkoutSteps = sellersStep;

  const displayStep = (sellersStep: any) => {
    switch (sellersStep) {
      case 1:
        return <SellersAccountInfo />;
      case 2:
        return <BusinessInfo />;
      case 3:
        return <BankAccountInfo />;
      case 4:
        return <SummaryInfo />;
      default:
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= checkoutSteps?.length && setCurrentStep(newStep);
  };

  return (
    <StepLayout
      checkoutSteps={checkoutSteps}
      currentStep={currentStep}
      handleClick={handleClick}
      displayStep={displayStep}
    />
  );
};

export default CreateSellersAcc;
