import React, { useState, useContext } from "react";
import CustomSelect from "../utility/CustomSelect";
import { useForm } from "react-hook-form";
import { sellersShopInfo, sellersformData } from "../../utils/formData";
import { Link } from "react-router-dom";
import StepperController from "./StepperController";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import { ISellerInfo, useAppState } from "../../context/SellerInfoContext";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
} | null;

export const vendorType = [
  {
    id: 1,
    name: "Individual",
  },
  {
    id: 2,
    name: "Business Entity",
  },
];

const SellersAccountInfo = () => {
  const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
    useContext(SellersStepsContext);
  const [val, setVal] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [vatRegistered, setVatRegistered] = useState<SelectOptionType>(null);
  // const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [accountInfoFilled, setAccountInfoFilled] = useState(false);

  React.useEffect(() => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,

      entityType: dropOption?.value || "",
    }));
  }, [dropOption?.value]);

  function isFormFilled() {
    return console.log(Object.values(userData).every((value) => value !== ""));
  }
  const { state, setState } = useAppState();

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");

  const handleChange = (e: any) => {
    // console.log(e)
    const { name, value, checked } = e.target;
    console.log(name);
    console.log(value);
    setUserData({
      ...userData,
      [name]: value,
      // value[entity_type]: dropOption?.value,
    });
    isFormFilled();
    // setValue("checkbox", checked ? "yes" : "no");
    // setVal(!val);
    // setUserData({ ...userData, [name]: value, val });
  };
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  console.log({ userData });
  console.log(dropOption?.value);
  return (
    <div>
      {" "}
      <div>
        <div className="max-w-[600px] m-auto min-h-[600px] p-8   bg-[#F4F4F4] rounded-md">
          <div className=" mb-8">
            <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px] ">
              Seller Account Information
            </h1>
            <p className="text-[#797979] text-[14px] leading-[24px] mt-3">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
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
                    {errors[data.name] && data.error_message}
                  </p>
                </div>
              ))}

              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="block text-[14px] leading-[16px] text-[#333333] mb-[6px] whitespace-nowrap"
                  >
                    Are you an individual or Business Entity/Company
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={dropOption}
                    setSelectOption={setDropOption}
                    placeholder={"-Choose an option-"}
                    options={vendorType}
                  />
                </div>
              </>

              {sellersformData.map((data, index) => (
                <div className="my-2 w-full " key={index}>
                  <label
                    htmlFor={data.name}
                    className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px]  ${
                      data.required &&
                      "after:content-['*'] after:ml-0.5 after:text-red-500"
                    } }`}
                  >
                    {data.label}
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
              <>
                <div className="flex items-center ">
                  <input
                    // {...register("checkbox")}
                    type="checkbox"
                    name="checkbox"
                    onChange={handleChange}
                    checked={val}
                    className="h-4 w-4 accent-[#197B30] checked:bg-[#197B30]  cursor-pointer rounded"
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
                {currentStep !== checkoutSteps?.length && <StepperController />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersAccountInfo;
