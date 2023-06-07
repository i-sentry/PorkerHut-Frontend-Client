import React, { useState, useEffect, useContext, useMemo } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import StepperController from "../sellers-onboarding/StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import CustomSelect, { SelectOptionType } from "./CustomSelect";
import {
  sellersBankInfo,
  sellersBusinessformData,
  sellersShopInfo,
  sellersformData,
} from "../../utils/formData";
import { useForm } from "react-hook-form";
import { useAppState } from "../../context/SellerInfoContext";
import { useGetBankList } from "../../services/hooks/users/banks";
import { IBankData } from "../../services/serviceType";
import { useBankStore } from "../../store";
import { vendorType } from "../sellers-onboarding/SellersAccountInfo";
interface IAccordionPros {
  title: any;
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
  const setBankData = useBankStore((state) => state.setBankData);
  const bankData = useBankStore((state) => state.bankData);
  //@ts-ignore
  const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
    useContext(SellersStepsContext);

  console.log(bankData, "pp");
  console.log({ userData });
  return (
    <div className="border-b pb-5 mt-3">
      <div className="flex items-center gap-2">
        <button
          onClick={onToggle}
          className="text-[#2B2B2B] text-xs font-medium py-0.5 transition duration-500 active:scale-90"
        >
          {isExpanded ? <IoChevronDown size={20} /> : <IoChevronUp size={20} />}
        </button>
        <div className="text-[#333333] font-normal text-[20px] leading-[24px]">
          {title}
        </div>
      </div>
      <div
        className={
          (isExpanded ? "flex flex-col" : "hidden") +
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
  const bankData = useBankStore((state) => state.bankData);
  const { state, setState } = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({ defaultValues: state, mode: "onSubmit" });
  //@ts-ignore
  const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
    useContext(SellersStepsContext);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);

  // const foundObject = bankData.find((obj) => obj.value === userData?.bank);
  // console.log({ foundObject });

  const handleChange = (e: any) => {
    console.log(e);
    const { name, value, checked } = e.target;
    setUserData({ ...userData, [name]: value });

    // setValue("checkbox", checked ? "yes" : "no");
    // setVal(!val);
    // setUserData({ ...userData, [name]: value, val });
  };
  React.useEffect(() => {
    console.log({ userData });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="rounded-md w-full md:max-w-2xl h-fit px-5 py-3 flex flex-col mb-4">
      <h1 className=" sm:text-xl mb-8 font-medium text-[#333333] text-[24px] leading-[28px] ">
        Summary
      </h1>
      <AccordionSection
        title="Seller Account Information"
        isExpanded={isAccountInfoExpanded}
        onToggle={() => setIsAccountInfoExpanded((prev) => !prev)}
      >
        <form>
          {sellersShopInfo.map((data, index) => (
            <div className="my-2 w-full " key={index}>
              <label
                htmlFor={data.name}
                className={`block text-[14px] leading-[16px] mb-[6px] text-[#333333] ${
                  data.required &&
                  "after:content-['*'] after:ml-0.5 after:text-red-500"
                } }`}
              >
                {data?.label}
              </label>
              <input
                id={data.name}
                type={data.type}
                name={data.name}
                // value={userData[data?.name] || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                // defaultValue={userData[data?.name]}
                className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[#797979] text-[12px] leading-none">
                {data.info}
              </span>
              <p className="my-2 text-[red] text-xs">
                {/* {errors[data.name] && errors[data.name].message} */}
              </p>
            </div>
          ))}

          <>
            <div className="my-2 w-full">
              <label
                htmlFor={"asset"}
                className="block leading-[16px] text-[14px] mb-[6px] text-[#333333]"
              >
                Are you an individual or Business Entity/Company
              </label>
              {/* Custom Field */}
              <CustomSelect
                selectedOption={dropOption}
                // selectedOption={dropOption || userData.entitytype}
                setSelectOption={setDropOption}
                placeholder={"-Choose an option-"}
                options={vendorType || []}
              />
            </div>
          </>

          {sellersformData.map((data, index) => (
            <div className="my-2 w-full " key={index}>
              <label
                htmlFor={data.name}
                className={`block leading-[16px] text-[14px] mb-[6px] text-[#333333] ${
                  data.required &&
                  "after:content-['*'] after:ml-0.5 after:text-red-500"
                } }`}
              >
                {data?.label}
              </label>
              <input
                id={data.name}
                type={data.type}
                placeholder={data.place_holder}
                name={data.name}
                onChange={handleChange}
                // value={userData[data?.name] || ""}
                className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[#797979] text-[12px] leading-none">
                {data.info}
              </span>
              <p className="my-2 text-[red] text-xs">
                {/* {errors[data.name] && errors[data.name].message} */}
              </p>
            </div>
          ))}
        </form>
      </AccordionSection>
      <AccordionSection
        title="Business Information"
        isExpanded={isBusinessInfoExpanded}
        onToggle={() => setIsBusinessInfoExpanded((prev) => !prev)}
      >
        <form>
          {sellersBusinessformData.map((data, index) => (
            <div className="my-2 w-full " key={index}>
              <label
                htmlFor={data.name}
                className={`block text-[16px] mb-[6px] text-HeadingColor ${
                  data.required &&
                  "after:content-['*'] after:ml-0.5 after:text-red-500"
                } }`}
              >
                {data?.label}
              </label>
              <input
                id={data.name}
                type={data.type}
                name={data.name}
                // value={userData[data?.name] || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[#797979] text-[12px] leading-none">
                {data.info}
              </span>
              <p className="my-2 text-[red] text-xs">
                {/* {errors[data.name] && errors[data.name].message} */}
              </p>
            </div>
          ))}
        </form>
      </AccordionSection>
      <AccordionSection
        title="Bank Account"
        isExpanded={isBankInfoExpanded}
        onToggle={() => setIsBankInfoExpanded((prev) => !prev)}
      >
        <form>
          <>
            <div className="my-2 w-full">
              <label
                htmlFor={"asset"}
                className="block text-[16px] mb-[6px] text-HeadingColor"
              >
                Select Bank
              </label>
              {/* Custom Field */}
              <CustomSelect
                selectedOption={dropOption }
                // selectedOption={dropOption === null ? foundObject : dropOption}
                setSelectOption={setDropOption}
                placeholder={"Select bank"}
                options={bankData || []}
              />
            </div>
          </>
          {BankInfo.map((data, index) => (
            <div className="my-2 w-full " key={index}>
              <label
                htmlFor={data.name}
                className={`block text-[16px] mb-[6px] text-HeadingColor ${
                  data.required &&
                  "after:content-['*'] after:ml-0.5 after:text-red-500"
                } }`}
              >
                {data.label}
              </label>
              <input
                id={data.name}
                type={data.type}
                name={data.name}
                // value={userData[data?.name] || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[#797979] text-[12px] leading-none">
                {data.info}
              </span>
              <p className="my-2 text-[red] text-xs">
                {/* {errors[data.name] && errors[data.name].message} */}
              </p>
            </div>
          ))}
        </form>
      </AccordionSection>
      <div className="">
        {currentStep !== checkoutSteps?.length - 1 && (
          <StepperController
            // checkoutSteps={checkoutSteps}
            // currentStep={currentStep}
            // handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Accordion;

const BankInfo = [
  {
    label: "Bank account name",
    name: "accountName",
    place_holder: "Enter full name",
    error_message: "Business owner Name is Required",
    type: "text",
    info: "Please fill in your account name as it appears on your bvn",
    required: true,
  },
  {
    label: "Bank account number",
    name: "bank_account",
    place_holder: "Enter account number ",
    error_message: "Account Number is Required",
    type: "number",
    info: "Please fill in your account number",
    required: true,
  },
];
