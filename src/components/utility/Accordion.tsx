import React, { useState, useContext, useEffect } from "react";
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

const Accordion = ({
  height,
  storeInfo,
  item,
}: {
  height?: string;
  storeInfo?: boolean;
  item?: any;
}) => {
  const [isBusinessInfoExpanded, setIsBusinessInfoExpanded] =
    React.useState(false);
  const [isAccountInfoExpanded, setIsAccountInfoExpanded] =
    React.useState(false);
  const [isBankInfoExpanded, setIsBankInfoExpanded] = React.useState(false);
  const bankData = useBankStore((state) => state.bankData);
  const { state, setState } = useAppState();
  const {
    reset,
    formState: { errors },
  } = useForm<any>({ defaultValues: state, mode: "onSubmit" });
  //@ts-ignore
  const { checkoutSteps, currentStep, handleChange, userData, setUserData } =
    useContext(SellersStepsContext);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);

  useEffect(() => {
    if (storeInfo === true && item?._id) {
      setState({
        sellerAccountInformation: {
          shopName: item?.sellerAccountInformation?.shopName || "",
          entityType: item?.sellerAccountInformation?.entityType || "",
          accountOwnersName:
            item?.sellerAccountInformation?.accountOwnersName || "",
          email: item?.sellerAccountInformation?.email || "",
          phoneNumber: item?.sellerAccountInformation?.phoneNumber || "",
          additionalPhoneNumber:
            item?.sellerAccountInformation?.additionalPhoneNumber || "",
          password: "",
        },
        businessInformation: {
          companyRegisteredName:
            item?.businessInformation?.companyRegisteredName || "",
          address1: item?.businessInformation?.address1 || "",
          address2: item?.businessInformation?.address2 || "",
          city: item?.businessInformation?.city || "",
          businessOwnerName: item?.businessInformation?.businessOwnerName || "",
          TINRegistrationNumber:
            item?.businessInformation?.TINRegistrationNumber || "",
          dateOfBirth: item?.businessInformation?.dateOfBirth || "",
          IDType: item?.businessInformation?.IDType || "",
          CACRegistrationNumber:
            item?.businessInformation?.CACRegistrationNumber || "",
          VATRegistered: item?.businessInformation?.VATRegistered || "",
        },
        vendorBankAccount: {
          bankName: item?.vendorBankAccount?.bankName || "",
          accountName: item?.vendorBankAccount?.accountName || "",
          accountNumber: item?.vendorBankAccount?.accountNumber || "",
        },
      });
    }
  }, [item, item?._id, state]);

  console.log(item, "ieee", state, storeInfo);

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
                  defaultValue={getNestedValue(state, data.name) || ""}
                  placeholder={data.place_holder}
                  onChange={handleChange}
                  // defaultValue={userData[data?.name]}
                  className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                    errors[data.name] && "border-ErrorBorder"
                  }`}
                  disabled={storeInfo}
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
              {storeInfo && (
                <input
                  id={"sellerAccountInformation.entityType"}
                  type={"text"}
                  name={"sellerAccountInformation.entityType"}
                  defaultValue={
                    getNestedValue(
                      state,
                      "sellerAccountInformation.entityType",
                    ) || ""
                  }
                  placeholder={"-Choose an option-"}
                  onChange={handleChange}
                  className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                    errors["sellerAccountInformation.entityType"] &&
                    "border-ErrorBorder"
                  }`}
                  disabled={storeInfo}
                />
              )}
              {!storeInfo && (
                <CustomSelect
                  selectedOption={dropOption}
                  isDisabled={storeInfo}
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
              )}
            </div>
          </>

          {sellersformData.map((data, index) => {
            if (storeInfo && data?.label === "Password") {
              return;
            }
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
                  placeholder={data.place_holder}
                  name={data.name}
                  onChange={handleChange}
                  defaultValue={getNestedValue(state, data.name) || ""}
                  className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                    errors[data.name] && "border-ErrorBorder"
                  }`}
                  disabled={storeInfo}
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
                defaultValue={getNestedValue(state, data.name) || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
                disabled={storeInfo}
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
              {storeInfo && (
                <input
                  id={"vendorBankAccount.bankName"}
                  type={"text"}
                  name={"vendorBankAccount.bankName"}
                  defaultValue={
                    getNestedValue(state, "vendorBankAccount.bankName") || ""
                  }
                  placeholder={"Select bank"}
                  onChange={handleChange}
                  className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                    errors["vendorBankAccount.bankName"] && "border-ErrorBorder"
                  }`}
                  disabled={storeInfo}
                />
              )}
              {!storeInfo && (
                <CustomSelect
                  selectedOption={dropOption}
                  // selectedOption={dropOption === null ? foundObject : dropOption}
                  setSelectOption={setDropOption}
                  placeholder={"Select bank"}
                  options={bankData || []}
                  isDisabled={storeInfo}
                  defaultValue={{
                    label: state?.vendorBankAccount?.bankName,
                    value: state?.vendorBankAccount?.bankName?.toLowerCase(),
                  }}
                />
              )}
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
                defaultValue={getNestedValue(state, data.name) || ""}
                placeholder={data.place_holder}
                onChange={handleChange}
                className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                  errors[data.name] && "border-ErrorBorder"
                }`}
                disabled={storeInfo}
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

      {!storeInfo && (
        <div className="">
          {currentStep !== checkoutSteps?.length - 1 && <StepperController />}
        </div>
      )}
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
