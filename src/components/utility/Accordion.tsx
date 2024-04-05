import React, { useState, useContext } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import StepperController from "../sellers-onboarding/StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import CustomSelect, { SelectOptionType } from "./CustomSelect";
import {
  sellersBusinessformData,
  sellersShopInfo,
  sellersformData,
} from "../../utils/formData";
import { useForm } from "react-hook-form";
import { useAppState } from "../../context/SellerInfoContext";
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
  // const setBankData = useBankStore((state) => state.setBankData);
  //  const bankData = useBankStore((state) => state.bankData);
  //@ts-ignore

  useContext(SellersStepsContext);

  // console.log(bankData, "pp");
  // console.log({ userData });
  return (
    <div className="mt-3 border-b pb-5">
      <div className="flex items-center gap-2">
        <button
          onClick={onToggle}
          className="py-0.5 text-xs font-medium text-[#2B2B2B] transition duration-500 active:scale-90"
        >
          {isExpanded ? <IoChevronDown size={20} /> : <IoChevronUp size={20} />}
        </button>
        <div className="text-[20px] font-normal leading-[24px] text-[#333333]">
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

const Accordion = ({ height }: { height?: string }) => {
  const [isBusinessInfoExpanded, setIsBusinessInfoExpanded] =
    React.useState(false);
  const [isAccountInfoExpanded, setIsAccountInfoExpanded] =
    React.useState(false);
  const [isBankInfoExpanded, setIsBankInfoExpanded] = React.useState(false);
  const bankData = useBankStore((state) => state.bankData);
  const { state } = useAppState();
  const {
    formState: { errors },
  } = useForm<any>({ defaultValues: state, mode: "onSubmit" });
  //@ts-ignore
  const { checkoutSteps, currentStep, handleChange, userData } =
    useContext(SellersStepsContext);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  // const [formData, setFormData] = useState(userData);

  // const foundObject = bankData.find((obj) => obj.value === userData?.bank);
  // console.log({ foundObject });

  // const handleChange = (e: any) => {
  //   console.log(e);
  //   const { name, value, checked } = e.target;
  //   setUserData({ ...userData, [name]: value });

  //   // setValue("checkbox", checked ? "yes" : "no");
  //   // setVal(!val);
  //   // setUserData({ ...userData, [name]: value, val });
  // };

  // const handleChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const getNestedValue = (object: any, path: string): any => {
    const keys = path.split(".");
    let value = object;
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        return undefined;
      }
    }
    return value;
  };

  React.useEffect(() => {
    console.log({ userData });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [userData]);

  return (
    <div
      className={`mb-4 flex ${height || "h-fit"} w-full flex-col rounded-md px-0 py-3 md:max-w-2xl lg:px-5`}
    >
      <h1 className=" text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
        Summary
      </h1>
      <p className="mb-8 text-[#333333]">
        Please kindly review your filled information
      </p>
      <AccordionSection
        title="Seller Account Information"
        isExpanded={isAccountInfoExpanded}
        onToggle={() => setIsAccountInfoExpanded((prev) => !prev)}
      >
        <form>
          {sellersShopInfo.map((data, index) => {
            console.log(data, "rhr");
            return (
              <div className="my-2 w-full " key={index}>
                <label
                  htmlFor={data.name}
                  className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                    data.required &&
                    "after:ml-0.5 after:text-red-500 after:content-['*']"
                  } }`}
                >
                  {data?.label}
                </label>
                <input
                  id={data.name}
                  type={data.type}
                  name={data.name}
                  defaultValue={getNestedValue(userData, data.name) || ""}
                  placeholder={data.place_holder}
                  onChange={handleChange}
                  // defaultValue={userData[data?.name]}
                  className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                    errors[data.name] && "border-ErrorBorder"
                  }`}
                />
                <span className="text-[12px] leading-none text-[#797979]">
                  {data.info}
                </span>
                <p className="my-2 text-xs text-[red]">
                  {/* {errors[data.name] && errors[data.name].message} */}
                </p>
              </div>
            );
          })}

          <>
            <div className="my-2 w-full">
              <label
                htmlFor={"asset"}
                className="mb-[6px] block text-[14px] leading-[16px] text-[#333333] after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                Are you an individual or Business Entity/Company
              </label>
              {/* Custom Field */}
              <CustomSelect
                selectedOption={dropOption}
                defaultValue={{
                  label: `${userData?.sellerAccountInformation?.entityType.slice(0, 1).toUpperCase() + userData?.sellerAccountInformation?.entityType}`,
                  value:
                    userData?.sellerAccountInformation?.entityType?.toLowerCase(),
                }}
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
                className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                  data.required &&
                  "after:ml-0.5 after:text-red-500 after:content-['*']"
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
                defaultValue={getNestedValue(userData, data.name) || ""}
                className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[12px] leading-none text-[#797979]">
                {data.info}
              </span>
              <p className="my-2 text-xs text-[red]">
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
                className={`text-HeadingColor mb-[6px] block text-[16px] ${
                  data.required &&
                  "after:ml-0.5 after:text-red-500 after:content-['*']"
                } }`}
              >
                {data?.label}
              </label>
              <input
                id={data.name}
                type={data.type}
                name={data.name}
                defaultValue={getNestedValue(userData, data.name) || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[12px] leading-none text-[#797979]">
                {data.info}
              </span>
              <p className="my-2 text-xs text-[red]">
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
                className="text-HeadingColor mb-[6px] block text-[16px] after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                Select Bank
              </label>
              {/* Custom Field */}
              <CustomSelect
                selectedOption={dropOption}
                // selectedOption={dropOption === null ? foundObject : dropOption}
                setSelectOption={setDropOption}
                placeholder={"Select bank"}
                options={bankData || []}
                defaultValue={{
                  label: userData?.vendorBankAccount?.bankName,
                  value: userData?.vendorBankAccount?.bankName?.toLowerCase(),
                }}
              />
            </div>
          </>
          {BankInfo.map((data, index) => (
            <div className="my-2 w-full " key={index}>
              <label
                htmlFor={data.name}
                className={`text-HeadingColor mb-[6px] block text-[16px] ${
                  data.required &&
                  "after:ml-0.5 after:text-red-500 after:content-['*']"
                } }`}
              >
                {data.label}
              </label>
              <input
                id={data.name}
                type={data.type}
                name={data.name}
                defaultValue={getNestedValue(userData, data.name) || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
              />
              <span className="text-[12px] leading-none text-[#797979]">
                {data.info}
              </span>
              <p className="my-2 text-xs text-[red]">
                {/* {errors[data.name] && errors[data.name].message} */}
              </p>
            </div>
          ))}
        </form>
      </AccordionSection>
      <div className="">
        {currentStep !== checkoutSteps?.length - 1 && <StepperController />}
      </div>
    </div>
  );
};

export default Accordion;

const BankInfo = [
  {
    label: "Bank account name",
    name: "vendorBankAccount.accountName",
    place_holder: "Enter full name",
    error_message: "Business owner Name is Required",
    type: "text",
    info: "Please fill in your account name as it appears on your bvn",
    required: true,
  },
  {
    label: "Bank account number",
    name: "vendorBankAccount.accountNumber",
    place_holder: "Enter account number ",
    error_message: "Account Number is Required",
    type: "number",
    info: "Please fill in your account number",
    required: true,
  },
];
