import React, { useContext, useEffect, useMemo, useState } from "react";
import { sellersBankInfo } from "../../utils/formData";
import CustomSelect from "../utility/CustomSelect";
import { SelectOptionType } from "./SellersAccountInfo";
import { useForm } from "react-hook-form";
import { IFile } from "../utility/CustomDND";

import StepperController from "./StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import {
  useGetBankList,
  useResolveBankName,
} from "../../services/hooks/users/banks";
import { IBankData } from "../../services/serviceType";
import useSWR from "swr";
import { BASEURL } from "../../services/api";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { useBankStore } from "../../store";

const BankAccountInfo = () => {
  const setBankData = useBankStore((state) => state.setBankData);
  const bankData = useBankStore((state) => state.bankData);
  const { data: bankList, error, isLoading: isBankLoading } = useGetBankList();
  //@ts-ignore
  const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
    useContext(SellersStepsContext);

  console.log(bankList);

  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [accountName, setAccountName] = useState("");
  const [ID, setID] = useState<FormData>();
  const [invoice, setInvoice] = useState("Payment Invoice");
  const [accName, setAccName] = useState("");
  const shouldFetchData =
    userData.bank_account?.length === 10 && dropOption?.value !== "";

  const url = shouldFetchData
    ? `${BASEURL}/api/pay/account-details?account_number=${userData.bank_account}&bank_code=${dropOption?.value}`
    : null;
  const {
    data: resolveBankNameResult,
    error: resolveErr,
    isLoading,
  } = useSWR(url, fetchResolveBankName);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid, errors },
  } = useForm<any>();

  React.useEffect(() => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      bank: dropOption?.value || "",
    }));
  }, [dropOption?.value]);

  const handleChange = (e: any) => {
    console.log(e);
    const { name, value, checked } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    setAccName(resolveBankNameResult?.data?.account_name);
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      accountName: accName || "",
    }));
  }, [resolveBankNameResult, accName]);

  const [bank, setBank] = useState<{
    label?: string;
    value?: string;

    bank?: IBankData;
  }>({});

  const bankOptions = useMemo(
    () =>
      bankList?.data?.data.map((bank: any) => ({
        label: bank.name,
        value: bank.code,
        bank,
      })),
    [bankList?.data]
  );
  console.log(bankOptions, "bankList");
  console.log(resolveBankNameResult, "userData");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  React.useEffect(() => {
    setBankData(bankOptions);
  }, [bankOptions]);
  return (
    <div>
      {" "}
      <div>
        <div className="max-w-[600px] m-auto min-h-[400px] p-5   bg-[#F4F4F4] rounded-md">
          {isBankLoading && (
            <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-[#cccc] bg-opacity-75 z-50">
              <FaSpinner className="animate-spin w-8 h-8 text-gray-600" />
              <span>fetching bank...</span>
            </div>
          )}

          <div className=" mb-8">
            <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px] ">
              Bank Account
            </h1>
            <p className="text-[#797979] text-[14px] leading-[24px] mt-3">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="block text-[14px] leading-[16px] mb-[6px] text-[#333333]"
                  >
                    Select Bank
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={dropOption}
                    setSelectOption={setDropOption}
                    placeholder={"Select bank"}
                    options={bankOptions || []}
                  />
                </div>
              </>
              {sellersBankInfo.map((data, index) => (
                <>
                  <div className="my-2 w-full " key={index}>
                    <label
                      htmlFor={data.name}
                      className={`block text-[14px] leading-[16px] mb-[6px] text-[#333333] ${
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
                      value={userData[data?.name] || ""}
                      placeholder={data.place_holder}
                      onChange={handleChange}
                      maxLength={10} // Add maxLength attribute to limit input to 10 characters
                      className={`appearance-none  relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                        errors[data.name] && "border-ErrorBorder"
                      }`}
                    />
                    <span className="text-[#797979] text-[12px] leading-none">
                      {data.info}
                    </span>
                    <p className="my-2 text-[#F91919] text-xs">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                </>
              ))}
              <div className="my-2 w-full relative">
                {isLoading && (
                  <div className="absolute top-[-5%] right-4 bottom-0 flex items-center justify-center bg-transparent">
                    <ImSpinner2 className="animate-spin w-5 h-5 text-[#197b30]" />
                  </div>
                )}
                <label
                  htmlFor={"account_name"}
                  className={`block text-[14px] leading-[16px] mb-[6px] text-[#333333]
                    "after:content-['*'] after:ml-0.5 after:text-red-500"
                   }`}
                >
                  Account Name
                </label>
                <input
                  id="account_name"
                  type="text"
                  name="account_name"
                  value={accName}
                  placeholder={`${
                    isLoading
                      ? "Resolving Account Name.."
                      : "Account name will be auto generated"
                  }`}
                  disabled
                  className={`appearance-none relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm`}
                />
                {resolveErr && (
                  <p className="my-2 text-[#F91919] text-xs">
                    Error:Please check inputted values and try again!
                  </p>
                )}
              </div>

              <div className="">
                {currentStep !== checkoutSteps?.length && (
                  <StepperController
                    checkoutSteps={checkoutSteps}
                    currentStep={currentStep}
                    handleClick={handleClick}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountInfo;

const fetchResolveBankName = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch bank name");
  }
  const data = await response.json();
  return data;
};
