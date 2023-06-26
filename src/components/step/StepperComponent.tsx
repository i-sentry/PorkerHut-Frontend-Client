import { useEffect, useState } from "react";
import { productStepsContext } from "../../context/StepperContext";
import Account from "./Account";

import ProductPricing from "./ProductPricing";
import Stepper from "./Steppers";
import { AiOutlineLine } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { GoChevronRight } from "react-icons/go";
import {
  IProductInfo,
  useProductState,
} from "../../context/ProductInfoContext";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

export const steps = [
  "Product Information",
  "More Product Details",
  "Product Pricing",
  "Images",
];

function StepperComponent() {
  const { state: productData, setState: setProductData } = useProductState();
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const checkoutSteps = steps;
  const numSteps = 4;
  const [progress, setProgress] = useState(25);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const subcategory = queryParams.get("subcategory");

  console.log(productData, "LL");
  if (typeof setProductData === "function") {
    console.log("oooooooolll");
  } else {
    console.log("function is not defined.");
  }

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <ProductDetails />;
      case 3:
        return <ProductPricing />;
      case 4:
        return <ProductImage />;
      default:
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    // Split the name into nested properties
    const [section, field] = name.split(".");

    // Update the userData state
    setProductData((prevUserData: IProductInfo) => ({
      ...prevUserData,
      [section]: {
        ...prevUserData[section],
        [field]: value,
      },
    }));
    // isFormFilled();
  };

  const handleClick = (direction: any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  useEffect(() => {
    const stepProgress = Math.round((currentStep / numSteps) * 100);
    setProgress(stepProgress);
  }, [currentStep, numSteps]);

  return (
    <div className=" ">
      <div className="lg:flex md:hidden hidden items-center gap-2 py-5">
        <h1 className="md:text-[36px] md:leading-[42px] md:font-medium  xxs:font-normal  mb-3 xxs:text-[20px] xxs:leading-[23px] text-[#1F1F1F]">
          Create Products
        </h1>

        <div className="flex items-center gap-2">
          <AiOutlineLine size={30} />
          <span className="text-[16px] leading-[19px] font-normal text-[#A2A2A2]">
            {category}
          </span>
          <GoChevronRight className="text-[#A2A2A2]" />

          <span className="ext-[16px] leading-[19px] font-normal text-[#A2A2A2]">
            {subcategory}
          </span>
        </div>
      </div>
      {/* Stepper */}
      <div className="horizontal lg:flex md:hidden hidden ">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="md:flex flex items-center gap-5 lg:hidden mx-3">
        <div className="w-20 my-6">
          <CircularProgressbar
            value={progress}
            text={`${currentStep} of 4`}
            styles={{
              // Customize the root svg element
              root: {},

              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `#197b30`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "#d6d6d6",
              },
              // Customize the text
              text: {
                // Text color
                fill: "#197b30",
                // Text size
                fontSize: "22px",
                // Vertical alignment of text
                dominantBaseline: "middle",
                // Horizontal alignment of text
                textAnchor: "middle",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#197b30",
              },
            }}
          />
        </div>
        <div>
          <h1 className="text-[#333333] font-semibold text-base">
            Step {currentStep}
          </h1>
          <p className="text-base font-light">
            {checkoutSteps[currentStep - 1]}
          </p>
        </div>
      </div>
      <div className="lg:my-10 md:my-0 my-0 lg:px-0 xxs:px-4">
        <productStepsContext.Provider
          //@ts-ignore
          value={{
            productData,
            setProductData,
            finalData,
            setFinalData,
            checkoutSteps,
            currentStep,
            handleClick,
            handleChange,
          }}
        >
          {displayStep(currentStep)}
        </productStepsContext.Provider>
      </div>

      {/* navigation button */}
      {/* {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )} */}
    </div>
  );
}

export default StepperComponent;
