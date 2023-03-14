import * as React from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import StepperController from "../sellers-onboarding/StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
interface IAccordionPros {
  title: string;
  children: React.ReactNode;
  onToggle: () => void;
  isExpanded: boolean;
}
const AccordionSection = ({
  title,
  children,
  isExpanded,
  onToggle,
}: IAccordionPros) => {
  //@ts-ignore

  return (
    <div className="border-b pb-5 mt-3">
      <div className="flex items-center gap-2">
        <button
          onClick={onToggle}
          className="text-[#2B2B2B] text-xs font-medium py-0.5 transition duration-500 active:scale-90"
        >
          {isExpanded ? <IoChevronDown size={20} /> : <IoChevronUp size={20} />}
        </button>
        <h1 className="text-[#2B2B2B] font-light text-lg">{title}</h1>
      </div>
      <div
        className={
          (isExpanded ? "flex" : "hidden") +
          " transition-all duration-700 ease-in-out"
        }
      >
        {children}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [isBusinessInfoExpanded, setIsBusinessInfoExpanded] =
    React.useState(false);
  const [isAccountInfoExpanded, setIsAccountInfoExpanded] =
    React.useState(false);
    const [isBankInfoExpanded, setIsBankInfoExpanded] = React.useState(false);
    //@ts-ignore
    const { checkoutSteps, currentStep, handleClick } =
      React.useContext(SellersStepsContext);

  return (
    <div className="rounded-md w-full md:max-w-2xl h-fit px-5 py-3 flex flex-col mb-4">
      <h1 className="text-[#2B2B2B] font-medium text-xl">Summary</h1>
      <AccordionSection
        title="Seller Account Information"
        isExpanded={isAccountInfoExpanded}
        onToggle={() => setIsAccountInfoExpanded((prev) => !prev)}
      >
        <div>hello</div>
      </AccordionSection>
      <AccordionSection
        title="Business Information"
        isExpanded={isBusinessInfoExpanded}
        onToggle={() => setIsBusinessInfoExpanded((prev) => !prev)}
      >
        <div>business</div>
      </AccordionSection>
      <AccordionSection
        title="Bank Account"
        isExpanded={isBankInfoExpanded}
        onToggle={() => setIsBankInfoExpanded((prev) => !prev)}
      >
        <div>Bank Account</div>
      </AccordionSection>
      <div className="">
        {currentStep !== checkoutSteps?.length - 1  && (
          <StepperController
            checkoutSteps={checkoutSteps}
            currentStep={currentStep}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Accordion;
