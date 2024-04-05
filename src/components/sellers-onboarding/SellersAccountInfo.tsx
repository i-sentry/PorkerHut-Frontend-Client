import React, { useState, useContext } from "react";
import CustomSelect from "../utility/CustomSelect";
import { useForm } from "react-hook-form";
import { sellersShopInfo, sellersformData } from "../../utils/formData";
import { Link } from "react-router-dom";
import StepperController from "./StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import { ISellerInfo, useAppState } from "../../context/SellerInfoContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactPasswordChecklist from "react-password-checklist";
import { FiEye, FiEyeOff } from "react-icons/fi";
export type SelectOptionType = {
  label: string | number;
  value: string;
  description?: string;
} | null;

export const vendorType = [
  {
    id: 1,
    label: "Individual",
    value: "individual",
  },
  {
    id: 2,
    label: "Business Entity",
    value: "business",
  },
];

const schema = yup.object().shape({
  ["sellerAccountInformation.shopName"]: yup.string().required(),
  // age: yup.number().required(),
});
const SellersAccountInfo = () => {
  const { checkoutSteps, currentStep, userData, setUserData, handleChange } =
    useContext(SellersStepsContext);
  // const [val] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  // const [vatRegistered, setVatRegistered] = useState<SelectOptionType>(null);
  // const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  // const [accountInfoFilled, setAccountInfoFilled] = useState(false);
  const [error, setError] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);

  React.useEffect(() => {
    setUserData((prevUserData: ISellerInfo) => ({
      ...prevUserData,
      sellerAccountInformation: {
        ...prevUserData.sellerAccountInformation,
        entityType: dropOption?.value || "",
      },
    }));
  }, [dropOption?.value, setUserData]);

  const { state } = useAppState();
  const sellerInfocheck =
    userData.sellerAccountInformation.accountOwnersName === "" ||
    userData.sellerAccountInformation.email === "" ||
    userData.sellerAccountInformation.entityType === "" ||
    userData.sellerAccountInformation.password === "" ||
    userData.sellerAccountInformation.phoneNumber === "" ||
    userData.sellerAccountInformation.shopName === "";

  const {
    formState: { errors },
    setValue,
    register,
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: state,
    mode: "onSubmit",
  });
  const [val, setVal] = useState(false);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  console.log({ userData }, sellerInfocheck, "ifo chec");
  console.log(dropOption?.value);

  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

  return (
    <div>
      {" "}
      <div>
        <div className="m-auto min-h-[600px] max-w-[600px] rounded-md   bg-[#F4F4F4] p-5">
          <div className=" mb-8">
            <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
              Seller Account Information
            </h1>
            <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              {sellersShopInfo.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = userData[section][field]; // Access the nested property value

                return (
                  <div className="my-2 w-full" key={index}>
                    <label
                      htmlFor={data.name}
                      className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                        data.required
                          ? 'after:ml-0.5 after:text-red-500 after:content-["*"]'
                          : ""
                      }`}
                    >
                      {data.label}
                    </label>
                    <input
                      id={data.name}
                      type={data.type}
                      placeholder={data.place_holder}
                      name={data.name}
                      onChange={handleChange}
                      value={value || ""}
                      className={`relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-700 focus:outline-none focus:ring-green-700 sm:text-sm ${
                        errors[data.name] ? "border-red-600" : ""
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
                    className="mb-[6px] block whitespace-nowrap text-[14px] leading-[16px] text-[#333333] after:ml-0.5 after:text-red-500 after:content-['*']"
                  >
                    Are you an individual or Business Entity/Company
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={dropOption}
                    setSelectOption={setDropOption}
                    placeholder={"-Choose an option-"}
                    options={vendorType}
                    // defaultValue={{
                    //   value: userData.sellerAccountInformation.entityType,
                    //   label: userData.sellerAccountInformation.entityType,
                    // }}
                  />
                </div>
              </>

              {sellersformData.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = userData[section][field]; // Access the nested property value
                console.log(section, field, "hshshshsh");

                if (
                  section === "sellerAccountInformation" &&
                  field === "password"
                ) {
                  return (
                    <div className="my-2 w-full" key={index}>
                      <label
                        htmlFor={data.name}
                        className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                          data.required
                            ? 'after:ml-0.5 after:text-red-500 after:content-["*"]'
                            : ""
                        }`}
                      >
                        <span>{data.label}</span>
                      </label>
                      <div className="relative">
                        <input
                          id={data.name}
                          type={eyeState2 ? "text" : data.type}
                          placeholder={data.place_holder}
                          name={data.name}
                          onChange={handleChange}
                          value={value || ""}
                          className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                            errors[data.name] ? "border-ErrorBorder" : ""
                          }`}
                        />

                        <button
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-center text-gray-500 outline-[#0eb683]"
                          onClick={toggleConfirmEye}
                        >
                          {eyeState2 ? (
                            <FiEye size={20} />
                          ) : (
                            <FiEyeOff size={20} />
                          )}
                        </button>
                      </div>
                      <span className="text-[12px] leading-none text-[#797979]">
                        {data.info}
                      </span>
                      <p className="my-2 text-xs text-[red]">
                        {/* {errors[data.name] && errors[data.name].message} */}
                      </p>

                      <div className="mt-3">
                        {value !== "" && (
                          <ReactPasswordChecklist
                            rules={[
                              "minLength",
                              "specialChar",
                              "number",
                              "capital",
                            ]}
                            minLength={8}
                            value={value}
                            invalidTextColor={"#e10"}
                            onChange={(isValid) => {}}
                          />
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="my-2 w-full" key={index}>
                    <label
                      htmlFor={data.name}
                      className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                        data.required
                          ? 'after:ml-0.5 after:text-red-500 after:content-["*"]'
                          : ""
                      }`}
                    >
                      {data.label}
                    </label>
                    <input
                      id={data.name}
                      type={data.type}
                      placeholder={data.place_holder}
                      name={data.name}
                      onChange={handleChange}
                      value={value || ""}
                      className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                        errors[data.name] ? "border-ErrorBorder" : ""
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
                <div className="flex items-center ">
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    name="checkbox"
                    onChange={(e: any) => {
                      setValue("checkbox", e.target.checked ? "yes" : "no");
                      setVal(!val);
                    }}
                    checked={val}
                    className="hover:bg-green-[#197B30] form-checkbox h-4 w-4 cursor-pointer rounded text-[#197B30]  accent-[#197B30] checked:bg-[#197B30] focus:ring-[#197B30] "
                  />
                  <label htmlFor="" className="ml-2 text-sm text-slate-500">
                    I have read and accepted{" "}
                    <Link to={""} className="text-[#197B30] underline">
                      Porker Hut E-contract
                    </Link>
                  </label>
                </div>
              </>
              <div className="">
                {currentStep !== checkoutSteps?.length &&
                sellerInfocheck === false ? (
                  <StepperController />
                ) : (
                  <div className="parent-class my-5 flex  w-full flex-wrap justify-center gap-3 lg:justify-end">
                    {error && (
                      <p className="w-full text-red-500">
                        Please Fill all required fields with asterisk(*)
                      </p>
                    )}

                    <button
                      disabled={currentStep === 1}
                      className={`rounded border border-[#197B30] bg-[#fff] px-8 py-2.5 text-[#197B30]  shadow-lg duration-100 ease-in-out  disabled:bg-[#ddddddfd] ${
                        currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={error}
                      onClick={(e: any) => {
                        e.preventDefault();
                        setError(true);
                      }}
                      className="text-button  rounded border border-[#197b30] bg-[#197b30] px-10 py-2.5 text-white shadow-lg   duration-100 ease-in-out hover:opacity-50 disabled:bg-[#197b30ac]"
                    >
                      {currentStep === checkoutSteps?.length
                        ? "Get Started"
                        : "Next"}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersAccountInfo;
