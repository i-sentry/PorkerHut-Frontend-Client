import React, { useContext, useState } from "react";
import { businessCac, businessTIN, sellersBusinessformData } from "../../utils/formData";
import CustomSelect from "../utility/CustomSelect";
import { SelectOptionType } from "./SellersAccountInfo";
import { useForm } from "react-hook-form";
import CustomDND, { IFile } from "../utility/CustomDND";
import ReactFlagsSelect from "react-flags-select";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import StepperController from "./StepperController";

interface IFlagsSelectProps {
  selected: string;
  onSelect: (code: string) => void;
  countries: string[];
}

const BusinessInfo = () => {
  //@ts-ignore
  const { checkoutSteps, currentStep, handleClick , userData, setUserData } =
    useContext(SellersStepsContext);
  const [val, setVal] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [businessDocUrl, setBusinessDocUrl] = useState<IFile[]>();
  const [select, setSelect] = useState<string>("");
  const onSelect = (code: string): void => setSelect(code);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid, errors },
  } = useForm<any>();

  const flagsSelectProps: IFlagsSelectProps = {
    selected: select,
    onSelect: onSelect,
    countries: ["NG", "GH", "KE", "UG", "ZA", "TZ"],
  };

  const getBusinessDocFromInput = (files: IFile[]) => {
    setBusinessDocUrl(files);
  };
  const handleChange = (e: any) => {
    console.log(e)
    const { name, value, checked } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div>
      {" "}
      <div>
        <div className="max-w-[600px] m-auto min-h-[600px] p-5   bg-[#F4F4F4] rounded-md">
          <div>
            <h1 className="text-xl font-medium text-[#333333]">
              Business Information
            </h1>
            <p className="text-[#797979] text-sm">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
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
              <>
                <span className="text-[#333333] ">
                  Choose country of operation
                </span>
                <ReactFlagsSelect className="bg-white" {...flagsSelectProps} />
              </>

              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="block text-[16px] mb-[6px] text-HeadingColor"
                  >
                    Business owner or legal representative ID type
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={dropOption}
                    setSelectOption={setDropOption}
                    placeholder={"-Choose an option-"}
                    options={[]}
                  />
                </div>
              </>
              <>
                <span className="text-[#333333] ">Upload a copy of the ID</span>
                <div className="mt-2">
                  <CustomDND
                    getFiles={getBusinessDocFromInput}
                    inputId={"uuudd"}
                  />
                  <span className="text-sm text-[#797979] leading-none">
                    Documents allowed are images, PDF files and MS word
                    documents.
                  </span>
                </div>
              </>

              {businessCac.map((data, index) => (
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
                  {/* <span className="text-[#797979] text-[12px] leading-none">
                    {data.info}
                  </span> */}
                  <p className="my-2 text-[red] text-xs">
                    {/* {errors[data.name] && errors[data.name].message} */}
                  </p>
                </div>
              ))}
              <>
                <span className="text-[#333333] mb-10">
                  Upload a copy of your CAC Certificate
                </span>
                <div className="mt-2">
                  <CustomDND
                    getFiles={getBusinessDocFromInput}
                    inputId={"uuudd"}
                  />
                  <span className="text-sm text-[#797979] leading-none">
                    Please ensure that the document that you provide includes
                    the list of the company ultimate beneficial owners. Porker
                    Hut reserves the right to contact you to confirm.
                  </span>
                </div>
              </>
              <div className="mt-3">
                <span className="text-[#333333] ">
                  Upload a copy of your Tax Identification Number(TIN)
                  certificate
                </span>
                <div className="mt-2">
                  <CustomDND
                    getFiles={getBusinessDocFromInput}
                    inputId={"uuudd"}


                  />
                  <span className="text-sm text-[#797979] leading-none">
                    Tin is required for all individuals and corporates deriving
                    income.Under Nigeria’s legislation.
                  </span>
                </div>
              </div>

              {businessTIN.map((data, index) => (
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
                  {/* <span className="text-[#797979] text-[12px] leading-none">
                    {data.info}
                  </span> */}
                  <p className="my-2 text-[red] text-xs">
                    {/* {errors[data.name] && errors[data.name].message} */}
                  </p>
                </div>
              ))}
              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="block text-[16px] mb-[6px] text-HeadingColor"
                  >
                    Are you VAT registered?
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={dropOption}
                    setSelectOption={setDropOption}
                    placeholder={"-Choose an option-"}
                    options={[]}
                  />
                </div>
              </>
              
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
export default BusinessInfo;
