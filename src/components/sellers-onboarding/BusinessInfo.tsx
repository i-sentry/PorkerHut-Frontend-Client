import React, { useContext, useState } from "react";
import {
  businessCac,
  businessTIN,
  sellersBusinessformData,
} from "../../utils/formData";
import CustomSelect from "../utility/CustomSelect";
import { useForm } from "react-hook-form";
import CustomDND, { IFile } from "../utility/CustomDND";
import ReactFlagsSelect from "react-flags-select";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import StepperController, { IFormFiles } from "./StepperController";
import { ISellerInfo } from "../../context/SellerInfoContext";
import { FileContext } from "../../context/FileContext";

interface IFlagsSelectProps {
  selected: string;
  onSelect: (code: string) => void;
  countries: string[];
}
export type SelectOptionType = {
  label: string;
  value: string;
  description: string;
} | null;
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

interface FileData {
  name: string;
  file: File;
}

const BusinessInfo = () => {
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    userData,
    setUserData,
    handleChange,
  } = useContext(SellersStepsContext);
  const [val, setVal] = useState(false);
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [vatRegistered, setVatRegistered] = useState<SelectOptionType>(null);
  const [IDType, setIDType] = useState<SelectOptionType>(null);
  const [select, setSelect] = useState<string>("");
  const onSelect = (code: string): void => setSelect(code);
  const [componentFiles, setComponentFiles] = useState<File[]>([]);
  const [filenames, setFilenames] = useState<string[]>([]);
  const [docsUrl, setDocsUrl] = useState<FormData>();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selecFile, setSelecFile] = useState<any>(null);
  const [seFile, setSeFile] = useState<any>(null);
  const [documentType, setDocumentType] = useState("Incorporation Document");
  // const fileContext = useContext<FileContextProps>(FileContext);
  const { setFiles, seFiles, selecFiles, selectedFiles } = useContext(FileContext);

  console.log(seFiles,"seFiles");
  console.log(selecFiles,"selecFiles");
  console.log(selectedFiles, "selectedFiles");

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

  const files: any = {
    selectedFile: selectedFile,
    selecFile: selecFile,
    seFile: seFile,
  };


  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    console.log(event, "jio,");
    const selectedFiles = Array.from(event.target.files || []);

    const updatedFiles: FileData[] = selectedFiles.map((file) => ({
      name: file.name,
      file: file,
    }));

    console.log(updatedFiles[0].name, "hhhyuyuy");

    setFiles(field, updatedFiles);
  };


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

  const handleGetFiles = (files: File[], fieldName: string) => {
    console.log(files, "handle");
    if (files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append(fieldName, file);
      setComponentFiles([...componentFiles, file]);
      setFilenames([...filenames, file.name]);
      //@ts-ignore
      setUserData((prevUserData: ISellerInfo) => ({
        ...prevUserData,
        businessInformation: {
          ...prevUserData.businessInformation,
          [fieldName]: formData,
        },
      }));

      console.log("File name:", file.name);
      console.log("File data:", file);
    }
  };

  const getDocs = (files: any) => {
    // console.log(files, "getfike")
    const formData = new FormData();
    files.forEach((file: string | Blob, index: any) => {
      formData.append(`documents`, file);
    });
    formData.append("documentType", documentType);
    setDocsUrl(formData);
  };
  console.log(files, "gyguygyg");
  const updateUserData = (property: string, value: string) => {
    setUserData((prevUserData: ISellerInfo) => ({
      ...prevUserData,
      businessInformation: {
        ...prevUserData.businessInformation,
        [property]: value || "",
      },
    }));
  };

  React.useEffect(() => {
    if (vatRegistered) {
      updateUserData("VATRegistered", vatRegistered.value);
    }
  }, [vatRegistered]);

  React.useEffect(() => {
    if (IDType) {
      updateUserData("IDType", IDType.value);
    }
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
              {sellersBusinessformData.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = userData[section][field]; // Access the nested property value

                return (
                  <div className="my-2 w-full" key={index}>
                    <label
                      htmlFor={data.name}
                      className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] ${
                        data.required
                          ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
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
                      className={`appearance-none relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                        errors[data.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                    <span className="text-[#797979] text-[12px] leading-none">
                      {data.info}
                    </span>
                    <p className="my-2 text-[red] text-xs">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}
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


                  <div className="flex flex-col">
                    <div className="dnd bg-[#fff] h-12 flex items-center justify-end border rounded-md relative">
                      <label
                        htmlFor={"inputId"}
                        className="text-sm  bg-[#D9D9D9] h-full flex  text-right"
                      >
                        <span className="text-[#333333] cursor-pointer px-8 my-auto">
                          Select file
                        </span>{" "}
                      </label>
                      <input
                        onChange={(event) =>
                          handleFileChange(event, "selected")
                        }
                        className="hidden"
                        accept="image/*,.pdf,.docx,.doc,.txt"
                        type="file"
                        name={"inputId"}
                        id={"inputId"}
                      />

                      <div className="uploaded flex flex-wrap gap-1 text-sm py-3 absolute left-2">

                          <div

                            className="text-xs shrink-0 bg-emerald-600 text-white px-2 rounded-md flex items-center"
                          >
                            <span>{selectedFile?.name}</span>
                            {/* <button className="p-2" onClick={() => removeFile(index)}>
              <RiCloseLine />
            </button> */}
                          </div>

                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="file"
                      onChange={(event) => handleFileChange(event, "selected")}
                    />
                    {/* <button onClick={() => handleFileUpload("IDFile")}>
                      Upload
                    </button>{" "} */}
                  </div>

                  {/* <CustomDND inputId="dkke" getFiles={getDocs} /> */}
                  <span className=" text-[#797979]  text-[12px] leading-none">
                    Documents allowed are images, PDF files and MS word
                    documents.
                  </span>
                </div>
              </>

              {businessCac.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = userData[section][field]; // Access the nested property value

                return (
                  <div className="my-2 w-full" key={index}>
                    <label
                      htmlFor={data.name}
                      className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] ${
                        data.required
                          ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
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
                      className={`appearance-none relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                        errors[data.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                    <span className="text-[#797979] text-[12px] leading-none">
                      {/* {data.info} */}
                    </span>
                    <p className="my-2 text-[red] text-xs">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}
              <>
                <span className="text-[#333333] text-[14px] leading-[16px] mb-10">
                  Upload a copy of your CAC Certificate
                </span>
                <div className="mt-2">
                  <CustomDND
                    getFiles={(files: File[]) =>
                      handleGetFiles(files, "CACCertificateFile")
                    }
                    inputId={"cac"}
                    // componentFiles={componentFiles}
                    // filenames={filenames}
                  />

                  <div>
                    <input
                      type="file"
                      onChange={(event) => handleFileChange(event, "selec")}
                    />
                    {/* <button onClick={() => handUpload("CACCertificateFile")}>
                      Upload
                    </button>{" "} */}
                  </div>
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
                  <CustomDND
                    getFiles={(files: File[]) =>
                      handleGetFiles(files, "TINCertificateFile")
                    }
                    inputId={"tax"}
                    // componentFiles={componentFiles}
                    // filenames={filenames}
                  />
                  <div>
                    <input
                      type="file"
                      onChange={(event) => handleFileChange(event, "se")}
                    />
                    {/* <button onClick={() => Upload("TINCertificateFile")}>
                      Upload
                    </button>{" "} */}
                  </div>
                  <span className=" text-[#797979] text-[12px] leading-none">
                    Tin is required for all individuals and corporate deriving
                    income Under Nigeria’s legislation.
                  </span>
                </div>
              </div>

              {businessTIN.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = userData[section][field]; // Access the nested property value

                return (
                  <div className="my-2 w-full" key={index}>
                    <label
                      htmlFor={data.name}
                      className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] ${
                        data.required
                          ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
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
                      className={`appearance-none relative block w-full px-[14px] py-[15px] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                        errors[data.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                    <span className="text-[#797979] text-[12px] leading-none">
                      {/* {data.info} */}
                    </span>
                    <p className="my-2 text-[red] text-xs">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}
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
                  <StepperController formFiles={files} />
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
