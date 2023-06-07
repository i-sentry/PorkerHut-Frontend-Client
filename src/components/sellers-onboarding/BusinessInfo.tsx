import React, { useContext, useState } from "react";
import {
  businessCac,
  businessTIN,
  sellersBusinessformData,
} from "../../utils/formData";
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

const documents = [
  { id: 1, value: "driver_license", label: "Driver's License" },
  { id: 2, value: "permanent_voter_card", label: "Permanent Voter's Card" },
  {
    id: 3,
    value: "national_identification_number",
    label: "National Identification Number (NIN)",
  },
  { id: 4, value: "international_passport", label: "International Passport" },
];

const BusinessInfo = () => {

  const { checkoutSteps, currentStep, handleClick, userData, setUserData } =
    useContext(SellersStepsContext);
  const [val, setVal] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [vatRegistered, setVatRegistered] = useState<SelectOptionType>(null);
  const [IDType, setIDType] = useState<SelectOptionType>(null);
  const [select, setSelect] = useState<string>("");
  const onSelect = (code: string): void => setSelect(code);
  const [IDFile, setIDFile] = useState<FormData>();
  const [cacFile, setCACFile] = useState<FormData>();
  const [tinFile, setTINFile] = useState<FormData>();
  const [docType, setInvoice] = useState("ID");
  const [cac, setCac] = useState("CAC");
  const [tin, setTin] = useState("TIN");

  const vat = [
    {
      id: 1,
      name: "Yes",
    },
    {
      id: 2,
      name: "No",
    },
  ];

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

  const getID = (files: any) => {
    const formData = new FormData();
    files.forEach((file: string | Blob, index: any) => {
      formData.append(`documents`, file);
    });
    formData.append("ID", docType);
    setIDFile(formData);
    if (formData) {
      setUserData((prevUserData: any) => ({
        ...prevUserData,
        IDFile: IDFile || [],
      }));
    }
  };
  const getCAC = (files: any) => {
    const formData = new FormData();
    files.forEach((file: string | Blob, index: any) => {
      formData.append(`documents`, file);
    });
    formData.append("cac", cac);
    setCACFile(formData);
    if (formData) {
      setUserData((prevUserData: any) => ({
        ...prevUserData,
        CACCertificateFile: cacFile || [],
      }));
    }
  };
  const getTAX = (files: any) => {
    const formData = new FormData();
    files.forEach((file: string | Blob, index: any) => {
      formData.append(`documents`, file);
    });
    formData.append("tin", tin);
    setTINFile(formData);
    if (formData) {
      setUserData((prevUserData: any) => ({
        ...prevUserData,
        TINCertificateFile: tinFile || [],
      }));
    }
  };

  const handleChange = (e: any) => {
    console.log(e);
    const { name, value, checked } = e.target;
    setUserData({ ...userData, [name]: value });
  };

 const updateUserData = (property: string, value: string | number | undefined) => {
   setUserData((prevUserData: any) => ({
     ...prevUserData,
     [property]: value || "",
   }));
 };

 React.useEffect(() => {
   updateUserData("VATRegistered", vatRegistered?.value);
 }, [vatRegistered]);

 React.useEffect(() => {
   updateUserData("IDType", IDType?.value);
 }, [IDType]);

 React.useEffect(() => {
   updateUserData("Country", select);
 }, [select]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      {" "}
      <div>
        <div className="max-w-[600px] m-auto min-h-[600px] p-5   bg-[#F4F4F4] rounded-md">
          <div className=" mb-8">
            <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px]">
              Business Information
            </h1>
            <p className="text-[#797979] text-[14px] leading-[16px] mt-3">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              {sellersBusinessformData.map((data, index) => (
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
              <>
                <span className="text-[#333333] text-[14px] leading-[16px]">
                  Choose country of operation
                </span>
                <ReactFlagsSelect className="bg-white" {...flagsSelectProps} />
              </>

              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="block text-[14px] leading-[16px] mb-[6px] text-[#333333]"
                  >
                    Business owner or legal representative ID type
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={IDType}
                    setSelectOption={setIDType}
                    placeholder={"-Choose an option-"}
                    options={documents || []}
                  />
                </div>
              </>
              <>
                <span className="text-[#333333] text-[14px] leading-[16px]">
                  Upload a copy of the ID
                </span>
                <div className="mt-2">
                  <CustomDND getFiles={getID} inputId={"ID"} />
                  <span className=" text-[#797979]  text-[12px] leading-none">
                    Documents allowed are images, PDF files and MS word
                    documents.
                  </span>
                </div>
              </>

              {businessCac.map((data, index) => (
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
                  {/* <span className="text-[#797979] text-[12px] leading-none">
                    {data.info}
                  </span> */}
                  <p className="my-2 text-[red] text-xs">
                    {/* {errors[data.name] && errors[data.name].message} */}
                  </p>
                </div>
              ))}
              <>
                <span className="text-[#333333] text-[14px] leading-[16px] mb-10">
                  Upload a copy of your CAC Certificate
                </span>
                <div className="mt-2">
                  <CustomDND getFiles={getCAC} inputId={"cac"} />
                  <span className=" text-[#797979] text-[12px] leading-none">
                    Please ensure that the document that you provide includes
                    the list of the company ultimate beneficial owners. Porker
                    Hut reserves the right to contact you to confirm.
                  </span>
                </div>
              </>
              <div className="mt-3">
                <span className="text-[#333333] text-[14px] leading-[16px]">
                  Upload a copy of your Tax Identification Number(TIN)
                  certificate
                </span>
                <div className="mt-2">
                  <CustomDND getFiles={getTAX} inputId={"tax"} />
                  <span className=" text-[#797979] text-[12px] leading-none">
                    Tin is required for all individuals and corporate deriving
                    income Under Nigeria’s legislation.
                  </span>
                </div>
              </div>

              {businessTIN.map((data, index) => (
                <div className="my-2 w-full " key={index}>
                  <label
                    htmlFor={data.name}
                    className={`block text-[14px] leading-[16px] mb-[6px] text-HeadingColor ${
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
                    className="block text-[14px] leading-[16px] mb-[6px] text-[#333333]"
                  >
                    Are you VAT registered?
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={vatRegistered}
                    setSelectOption={setVatRegistered}
                    placeholder={"-Choose an option-"}
                    options={vat || []}
                  />
                </div>
              </>

              <div className="">
                {currentStep !== checkoutSteps?.length && (
                  <StepperController
                 
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
