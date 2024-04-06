import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  businessCac,
  businessTIN,
  sellersBusinessformData,
} from "../../utils/formData";
import CustomSelect from "../utility/CustomSelect";
// import CustomDND, { IFile } from "../utility/CustomDND";
import ReactFlagsSelect from "react-flags-select";
import { RiCloseLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import { FileContext } from "../../context/FileContext";
import { ISellerInfo } from "../../context/SellerInfoContext";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import StepperController from "./StepperController";

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
  const { checkoutSteps, currentStep, userData, setUserData, handleChange } =
    useContext(SellersStepsContext);

  const [vatRegistered, setVatRegistered] = useState<SelectOptionType>(null);
  const [IDType, setIDType] = useState<SelectOptionType>(null);
  const [select, setSelect] = useState<string>("");
  const onSelect = (code: string): void => setSelect(code);
  // const [componentFiles, setComponentFiles] = useState<File[]>([]);
  // const [filenames, setFilenames] = useState<string[]>([]);

  const [selectedFile] = useState<any>(null);
  const [selecFile] = useState<any>(null);
  const [seFile] = useState<any>(null);
  const { handleClick } = useContext(SellersStepsContext);
  const [error, setError] = useState(false);
  // const [documentType, setDocumentType] = useState("Incorporation Document");
  const [,] = useState({
    selected1: "",
    selected2: "",
    selected3: "",
  });
  const { setFiles, seFiles, selecFiles, selectedFiles } =
    useContext(FileContext);

  console.log(seFiles, "seFiles");
  console.log(selecFiles, "selecFiles");
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
    field: string,
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
  const removeFile = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
    files: FileData[] | null,
    field: string,
  ) => {
    event.preventDefault();
    if (files) {
      const updatedFiles = [...files];
      updatedFiles.splice(index, 1);
      console.log(updatedFiles, "updatedFiles");
      setFiles(field, updatedFiles);
    }
  };

  const {
    // register,
    // handleSubmit,
    // control,
    // setValue,
    formState: { errors },
  } = useForm<any>();

  const flagsSelectProps: IFlagsSelectProps = {
    selected: select,
    onSelect: onSelect,
    countries: ["NG", "GH", "KE", "UG", "ZA", "TZ"],
  };

  // const handleGetFiles = (files: File[], fieldName: string) => {
  //   console.log(files, "handle");
  //   if (files.length > 0) {
  //     const file = files[0];
  //     const formData = new FormData();
  //     formData.append(fieldName, file);
  //     setComponentFiles([...componentFiles, file]);
  //     setFilenames([...filenames, file.name]);
  //     //@ts-ignore
  //     setUserData((prevUserData: ISellerInfo) => ({
  //       ...prevUserData,
  //       businessInformation: {
  //         ...prevUserData.businessInformation,
  //         [fieldName]: formData,
  //       },
  //     }));

  //     console.log("File name:", file.name);
  //     console.log("File data:", file);
  //   }
  // };

  // const getDocs = (files: any) => {
  //   // console.log(files, "getfike")
  //   const formData = new FormData();
  //   files.forEach((file: string | Blob, index: any) => {
  //     formData.append(`documents`, file);
  //   });
  //   formData.append("documentType", documentType);
  //   setDocsUrl(formData);
  // };
  // console.log(selecFile, selectedFile, "gyguygyg");
  const updateUserData = (property: string, value: string) => {
    setUserData((prevUserData: ISellerInfo) => ({
      ...prevUserData,
      businessInformation: {
        ...prevUserData.businessInformation,
        [property]: value || "",
      },
    }));
  };

  const useUpdateUserDataEffect = (property: string, value: any) => {
    React.useEffect(() => {
      if (value) {
        updateUserData(property, value);
      }
    }, [value, property]);
  };

  useUpdateUserDataEffect("VATRegistered", vatRegistered);
  useUpdateUserDataEffect("IDType", IDType);
  useUpdateUserDataEffect("Country", select);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const bizCheck =
    userData.businessInformation.city === "" ||
    userData.businessInformation.address1 === "" ||
    userData.businessInformation.companyRegisteredName === "" ||
    userData.businessInformation.businessOwnerName === "" ||
    userData.businessInformation.dateOfBirth === "" ||
    userData.businessInformation.IDType === "" ||
    userData.businessInformation.CACRegistrationNumber === "";

  return (
    <div>
      <ToastContainer />{" "}
      <div>
        <div className="m-auto min-h-[600px] max-w-[600px] rounded-md   bg-[#F4F4F4] p-5">
          <div className=" mb-8">
            <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl">
              Business Information
            </h1>
            <p className="mt-3 text-[14px] leading-[16px] text-[#797979]">
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
                <span className="text-[14px] leading-[16px] text-[#333333] after:text-red-500 after:content-['*']">
                  Choose country of operation
                </span>
                <ReactFlagsSelect className="bg-white" {...flagsSelectProps} />
              </>

              <>
                <div className="my-2 w-full">
                  <label
                    htmlFor={"asset"}
                    className="mb-[6px] block text-[14px] leading-[16px] text-[#333333]  after:text-red-500 after:content-['*']"
                  >
                    Business owner or legal representative ID type
                  </label>
                  {/* Custom Field */}
                  <CustomSelect
                    selectedOption={IDType}
                    setSelectOption={setIDType}
                    placeholder={"-Choose an option-"}
                    options={documents || []}
                    // defaultValue={userData.sellerAccountInformation.entityType}
                  />
                </div>
              </>
              <>
                <span className="text-[14px] leading-[16px] text-[#333333] after:text-red-500 after:content-['*']">
                  Upload a copy of the ID
                </span>
                <div className="mt-2">
                  <div className="flex flex-col">
                    <div className="dnd relative flex h-12 items-center justify-end rounded-md border bg-[#fff]">
                      <label
                        htmlFor={"selected"}
                        className="flex  h-full bg-[#D9D9D9] text-right  text-sm"
                      >
                        <span className="my-auto cursor-pointer px-8 text-[#333333]">
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
                        name={"selected"}
                        id={"selected"}
                      />
                      {selectedFiles && Array.isArray(selectedFiles) && (
                        <div className="uploaded absolute left-2 flex flex-wrap gap-1 py-3 text-sm">
                          {selectedFiles.map((file, index) => {
                            console.log(file, "filess");
                            return (
                              <div
                                key={index}
                                className="flex shrink-0 items-center rounded-md bg-emerald-600 px-2 text-xs text-white"
                              >
                                <span>{file.name}</span>
                                <button
                                  className="p-2"
                                  onClick={(event) =>
                                    removeFile(
                                      event,
                                      index,
                                      selectedFiles,
                                      "selected",
                                    )
                                  }
                                >
                                  <RiCloseLine />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className=" text-[12px]  leading-none text-[#797979]">
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
                      {/* {data.info} */}
                    </span>
                    <p className="my-2 text-xs text-[red]">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}

              <>
                <span className="text-[14px] leading-[16px] text-[#333333] after:text-red-500 after:content-['*']">
                  Upload a copy of your CAC Certificate
                </span>
                <div className="mt-2">
                  <div className="flex flex-col">
                    <div className="dnd relative flex h-12 items-center justify-end rounded-md border bg-[#fff]">
                      <label
                        htmlFor={"selec"}
                        className="flex  h-full bg-[#D9D9D9] text-right  text-sm"
                      >
                        <span className="my-auto cursor-pointer px-8 text-[#333333]">
                          Select file
                        </span>{" "}
                      </label>

                      <input
                        onChange={(event) => handleFileChange(event, "selec")}
                        className="hidden"
                        accept="image/*,.pdf,.docx,.doc,.txt"
                        type="file"
                        name={"selec"}
                        id={"selec"}
                      />
                      {selecFiles && Array.isArray(selecFiles) && (
                        <div className="uploaded absolute left-2 flex flex-wrap gap-1 py-3 text-sm">
                          {selecFiles.map((file, index) => {
                            console.log(file, "filess");
                            return (
                              <div
                                key={index}
                                className="flex shrink-0 items-center rounded-md bg-emerald-600 px-2 text-xs text-white"
                              >
                                <span>{file.name}</span>
                                <button
                                  className="p-2"
                                  onClick={(event) =>
                                    removeFile(
                                      event,
                                      index,
                                      selecFiles,
                                      "selec",
                                    )
                                  }
                                >
                                  <RiCloseLine />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className=" text-[12px]  leading-none text-[#797979]">
                    Please ensure that the document that you provide includes
                    the list of the company ultimate beneficial owners. Porker
                    Hut reserves the right to contact you to confirm.
                  </span>
                </div>
              </>

              <>
                <span className="text-[14px] leading-[16px] text-[#333333] after:text-red-500 after:content-['*']">
                  Upload a copy of your Tax Identification Number(TIN)
                  certificate
                </span>
                <div className="mt-2">
                  <div className="flex flex-col">
                    <div className="dnd relative flex h-12 items-center justify-end rounded-md border bg-[#fff]">
                      <label
                        htmlFor={"se"}
                        className="flex  h-full bg-[#D9D9D9] text-right  text-sm"
                      >
                        <span className="my-auto cursor-pointer px-8 text-[#333333]">
                          Select file
                        </span>{" "}
                      </label>

                      <input
                        onChange={(event) => handleFileChange(event, "se")}
                        className="hidden"
                        accept="image/*,.pdf,.docx,.doc,.txt"
                        type="file"
                        name={"se"}
                        id={"se"}
                      />
                      {seFiles && Array.isArray(seFiles) && (
                        <div className="uploaded absolute left-2 flex flex-wrap gap-1 py-3 text-sm">
                          {seFiles.map((file, index) => {
                            console.log(file, "filess");
                            return (
                              <div
                                key={index}
                                className="flex shrink-0 items-center rounded-md bg-emerald-600 px-2 text-xs text-white"
                              >
                                <span>{file.name}</span>
                                <button
                                  className="p-2"
                                  onClick={(event) =>
                                    removeFile(event, index, seFiles, "se")
                                  }
                                >
                                  <RiCloseLine />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className=" text-[12px]  leading-none text-[#797979]">
                    Tin is required for all individuals and corporate deriving
                    income Under Nigeria’s legislation.
                  </span>
                </div>
              </>
              {businessTIN.map((data, index) => {
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
                      className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${
                        errors[data.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                    <span className="text-[12px] leading-none text-[#797979]">
                      {/* {data.info} */}
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
                    className="mb-[6px] block text-[14px] leading-[16px] text-[#333333]"
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

              {/* <div>
                {currentStep !== checkoutSteps?.length && (
                  <StepperController formFiles={files} />
                )}
              </div> */}

              <div className="">
                {currentStep !== checkoutSteps?.length &&
                bizCheck === false &&
                seFiles?.length &&
                selecFiles?.length &&
                selectedFiles?.length ? (
                  <StepperController formFiles={files} />
                ) : (
                  <div className="parent-class my-5 flex  w-full flex-wrap justify-center gap-3 lg:justify-end">
                    {error && (
                      <p className="w-full text-red-500">
                        Please Fill all required fields with asterisk(*)
                      </p>
                    )}

                    <button
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleClick("");
                      }}
                      disabled={currentStep < 1}
                      className={`rounded border border-[#197B30] bg-[#fff] px-8 py-2.5 text-[#197B30]  shadow-lg duration-100 ease-in-out hover:opacity-50 disabled:bg-[#ddddddfd] ${
                        currentStep < 1 ? "cursor-not-allowed" : ""
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
export default BusinessInfo;
