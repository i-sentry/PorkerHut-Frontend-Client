import React, {  useContext, useEffect, useState } from "react";
import {
  sellersBankInfo,

} from "../../utils/formData";
import CustomSelect from "../utility/CustomSelect";
import { SelectOptionType } from "./SellersAccountInfo";
import { useForm } from "react-hook-form";
import CustomDND, { IFile } from "../utility/CustomDND";
import axios from "axios";
import StepperController from "./StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";

const BankAccountInfo = () => {
  //@ts-ignore
  const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
    useContext(SellersStepsContext);
  const [val, setVal] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [businessDocUrl, setBusinessDocUrl] = useState<IFile[]>();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid, errors },
  } = useForm<any>();

 const handleChange = (e: any) => {
   console.log(e);
   const { name, value, checked } = e.target;
   setUserData({ ...userData, [name]: value });
 };

   React.useEffect(()=>{
 window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
  return (
    <div>
      {" "}
      <div>
        <div className="max-w-[600px] m-auto min-h-[400px] p-5   bg-[#F4F4F4] rounded-md">
          <div className=" mb-8">
            <h1 className="sm:text-xl font-medium text-[#333333] text-base ">Bank Account</h1>
            <p className="text-[#797979] text-sm">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
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
                    selectedOption={dropOption}
                    setSelectOption={setDropOption}
                    placeholder={"Select bank"}
                    options={[]}
                  />
                </div>
              </>
              {sellersBankInfo.map((data, index) => (
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
                    value={userData[data?.name] || ""}
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
