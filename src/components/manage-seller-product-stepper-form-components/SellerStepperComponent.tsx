import { useParams } from "react-router-dom";
import { useState } from "react";
import { StepperContextProvider } from "../../context/StepperContext";
import SellerPricing from "./SellerPricing";
import SellerDetails from "./SellerDetails";
import SellerAccount from "./SellerAccount";
import SellerImages from "./SellerImages";
import Stepper from "../step/Steppers";
import StepperControl from "../stepper/StepperControl";

interface Order {
  id: number;
  name: string;
  create: string;
  product_id: number;
  price: string;
  quantity: number;
  visible?: any;
  active?: any;
  action?: any;
  steps: string[];
}

type OrdersArray = Order[];

function StepperComponent() {
  const { id } = useParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Product Information",
    "More Product Details",
    "Product Pricing",
    "Images",
  ];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <SellerAccount orderId={id ? id : ''} />;
      case 2:
        return <SellerDetails />;
      case 3:
        return <SellerPricing  />;
      case 4:
        return <SellerImages />;
      default:
    }
  };

  const handleClick = (direction: any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="pl-8 pr-4 h-[800px]">
      <h1 className=" text-xl font-medium">Create Products</h1>
      {/* Stepper */}
      <div className="horizontal mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 ">
          <StepperContextProvider>
            {displayStep(currentStep)}
          </StepperContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default StepperComponent;

