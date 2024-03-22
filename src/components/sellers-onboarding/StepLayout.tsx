import React, { useEffect, useState } from "react";
import SellerStepper from "./SellerStepper";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import TopNav from "./TopNav";
import Footer from "../footer-component/Footer";
import { CircularProgressbar } from "react-circular-progressbar";
import { ISellerInfo, useAppState } from "../../context/SellerInfoContext";
import SellersAccountInfo from "./SellersAccountInfo";
import BusinessInfo from "./BusinessInfo";
import BankAccountInfo from "./BankAccountInfo";
import SummaryInfo from "./SummaryInfo";
import { useSignUpState } from "../../store/overlay";
import SuccessScreen from "../../pages/sellers-dashboard/SuccessScreen";

export const sellersStep = [
  "Seller Account",
  "Business Information",
  "Bank Account",
  "Summary",
];

/* 


  const sellerInfocheck =
    userData.sellerAccountInformation.accountOwnersName === "" ||
    userData.sellerAccountInformation.email === "" ||
    userData.sellerAccountInformation.entityType === "" ||
    userData.sellerAccountInformation.password === "" ||
    userData.sellerAccountInformation.phoneNumber === "" ||
    userData.sellerAccountInformation.shopName === "";

  const bizCheck =
    userData.businessInformation.city === "" ||
    userData.businessInformation.address1 === "";

*/

const StepLayout = () => {
  const { state: userData, setState: setUserData } = useAppState();
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const checkoutSteps = sellersStep;
  const numSteps = 4;
  const isOpen = useSignUpState((state) => state.isOpen);
  const setIsOpen = useSignUpState((state) => state.setIsOpen);

  const [progress, setProgress] = useState(25);

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

  useEffect(() => setIsOpen(false), []);
  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= checkoutSteps?.length && setCurrentStep(newStep);
  };

  useEffect(() => {
    const stepProgress = Math.round((currentStep / numSteps) * 100);
    setProgress(stepProgress);
  }, [currentStep, numSteps]);

  function isFormFilled() {
    return console.log(
      Object.values(userData).every((value) => value !== ""),
      "filled?",
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    // Split the name into nested properties
    const [section, field] = name.split(".");

    // Update the userData state
    setUserData((prevUserData: ISellerInfo) => ({
      ...prevUserData,
      [section]: {
        ...prevUserData[section],
        [field]: value,
      },
    }));
    isFormFilled();
  };

  // const handleGetFiles = (files: File[], fieldName: string) => {
  //   if (files.length > 0) {
  //     const file = files[0];
  //     const formData = new FormData();
  //     formData.append(fieldName, file);
  //     //@ts-ignore
  //     setUserData((prevUserData: ISellerInfo) => ({
  //       ...prevUserData,
  //       businessInformation: {
  //         ...prevUserData.businessInformation,
  //         [fieldName]: formData,
  //       },
  //     }));

  //     console.log("File name:", file.name);
  //     console.log("File data:", file);
  //   }
  // };

  // const updateUserData = (property: string, value: string) => {
  //   setUserData((prevUserData: ISellerInfo) => ({
  //     ...prevUserData,
  //     businessInformation: {
  //       ...prevUserData.businessInformation,
  //       [property]: value || "",
  //     },
  //   }));
  // };

  // if (isOpen) {
  //   return (
  //     <SuccessScreen
  //       title={"Account Created Successfully"}
  //       msg={"Please proceed to login to access your dashboard"}
  //       url={"/sign-in?q=vendor"}
  //     />
  //   );
  // }

  return (
    <>
      <TopNav />
      <div className="main-div relative mb-24 mt-24">
        <div>
          <div className="mt-4 flex items-center  justify-center">
            <h1 className="text-[20px] font-medium leading-[27px] text-[#333333] md:leading-[] lg:text-[40px] lg:leading-[47px]">
              Create your seller account
            </h1>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <div className=" block h-1.5 w-20 bg-[#197B30]"></div>
          </div>
        </div>
        <div>
          <SellerStepper
            checkoutSteps={checkoutSteps}
            currentStep={currentStep}
          />
        </div>
        <div className="mx-3 flex items-center gap-5 sm:hidden">
          <div className="my-6 w-20">
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
            <h1 className="text-base font-semibold text-[#333333]">
              Step {currentStep}
            </h1>
            <p className="text-base font-light">
              {checkoutSteps[currentStep - 1]}
            </p>
          </div>
        </div>

        <div>
          <SellersStepsContext.Provider
            //@ts-ignore
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
              checkoutSteps,
              currentStep,
              handleClick,
              handleChange,
            }}
          >
            {displayStep(currentStep)}
          </SellersStepsContext.Provider>
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-white">
            <SuccessScreen
              title={"Account Created Successfully"}
              msg={"Please proceed to login to access your dashboard"}
              url={"/sign-in?q=vendor"}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default StepLayout;
