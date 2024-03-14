import React, { useContext, useEffect, useMemo, useState } from "react";
import { sellersBankInfo } from "../../utils/formData";
import CustomSelect from "../utility/CustomSelect";
import { SelectOptionType } from "./SellersAccountInfo";
import { useForm } from "react-hook-form";

import StepperController from "./StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import { useGetBankList } from "../../services/hooks/users/banks";
import { IBankData } from "../../services/serviceType";
import useSWR from "swr";
import { BASEURL } from "../../services/api";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { useBankStore } from "../../store";
import { ISellerInfo } from "../../context/SellerInfoContext";

const BankAccountInfo = () => {
  const setBankData = useBankStore((state) => state.setBankData);
  // const bankData = useBankStore((state) => state.bankData);
  const { data: bankList, isLoading: isBankLoading } = useGetBankList();
  //@ts-ignore
  const {
    checkoutSteps,
    currentStep,

    userData,
    setUserData,
    handleChange,
  } = useContext(SellersStepsContext);

  // const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [fetch, setFetch] = useState(false);
  const [, setAccountName] = useState("");

  const [accName, setAccName] = useState("");

  const bankAccount = userData.vendorBankAccount.accountNumber;
  const bankCode = dropOption?.value;
  console.log(bankAccount && bankCode, "hhh");
  const url = `${BASEURL}/api/pay/account-details?account_number=${encodeURIComponent(
    bankAccount,
  )}&bank_code=${bankCode}`;

  const { data: resolveBankNameResult, isLoading } = useSWR(
    fetch ? url : null,
    fetchResolveBankName,
  );

  const {
    // register,
    // handleSubmit,
    // control,
    // setValue,
    formState: { errors },
  } = useForm<any>();

  React.useEffect(() => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      vendorBankAccount: {
        ...prevUserData.vendorBankAccount,
        bankName: "" || dropOption?.label,
      },
    }));
  }, [dropOption?.label, setUserData]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.length;
    console.log(value, "value");
    if (value === 10) {
      console.log("feting.ddedeedeedeeeeedeeded.");
      setFetch(true);
    }
    handleChange(e);
  };
  useEffect(() => {
    setAccName(resolveBankNameResult?.data?.account_name);
    setAccountName(resolveBankNameResult?.data);
    setUserData((prevUserData: ISellerInfo) => ({
      ...prevUserData,
      vendorBankAccount: {
        ...prevUserData.vendorBankAccount,
        accountName: accName || "",
      },
    }));
  }, [resolveBankNameResult, accName, setUserData]);

  const [,] = useState<{
    label?: string;
    value?: string;

    bank?: IBankData;
  }>({});

  const bankOptions = useMemo(
    () =>
      bankList?.data?.data?.map((bank: any) => ({
        label: bank.name,
        value: bank.code,
        bank,
      })),
    [bankList?.data],
  );
  console.log(bankOptions, "bankList");
  // console.log(resolveBankNameResult, "userData");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [setBankData]);
  React.useEffect(() => {
    setBankData(bankOptions);
  }, [bankOptions, setBankData]);
  return (
    <div>
      {" "}
      <div>
        <div className="m-auto min-h-[400px] max-w-[600px] rounded-md   bg-[#F4F4F4] p-5">
          {isBankLoading && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-[#cccc] bg-opacity-75">
              <FaSpinner className="h-8 w-8 animate-spin text-gray-600" />
              <span>fetching bank...</span>
            </div>
          )}

          <div className=" mb-8">
            <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
              Bank Account
            </h1>
            <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="mb-[6px] block text-[14px] leading-[16px] text-[#333333] after:ml-0.5 after:text-red-500 after:content-['*']"
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
              {sellersBankInfo?.map((data, index) => (
                <>
                  <div className="my-2 w-full" key={index + 1}>
                    <label
                      htmlFor={data.name}
                      className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
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
                      // value={userData[data?.name] || ""}
                      placeholder={data.place_holder}
                      onChange={onChange}
                      maxLength={10} // Add maxLength attribute to limit input to 10 characters
                      className={`focus:ring-primaryDark  focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                        errors[data.name] && "border-ErrorBorder"
                      }`}
                    />
                    <span className="text-[12px] leading-none text-[#797979]">
                      {data.info}
                    </span>
                    <p className="my-2 text-xs text-[#F91919]">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                </>
              ))}
              <div className="relative my-2 w-full">
                {isLoading && (
                  <div className="absolute top-[-5%] right-4 bottom-0 flex items-center justify-center bg-transparent">
                    <ImSpinner2 className="h-5 w-5 animate-spin text-[#197b30]" />
                  </div>
                )}
                <label
                  htmlFor={"account_name"}
                  className={`"after:content-['*'] after:text-red-500" } mb-[6px] block
                    text-[14px] leading-[16px] text-[#333333]
                   after:ml-0.5`}
                >
                  Account Name
                </label>
                <input
                  id="account_name"
                  type="text"
                  name="account_name"
                  value={accName}
                  // placeholder={`${
                  //   isLoading
                  //     ? "Resolving Account Name.."
                  //     : "Account name will be auto generated"
                  // }`}
                  disabled
                  className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm`}
                />
                {/* {resolveErr && (
                  <p className="my-2 text-[#F91919] text-xs">
                    Error:Please check inputted values and try again!
                  </p>
                )} */}
              </div>

              <div className="">
                {currentStep !== checkoutSteps?.length && <StepperController />}
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
