import React, { useContext, useEffect } from "react";
import { BsX } from "react-icons/bs";
import CustomInput from "../utility/Input/CustomInput";
import { useForm } from "react-hook-form";
import { FileContext } from "../../context/FileContext";
import { RiCloseLine } from "react-icons/ri";

const basicInfo = [
  {
    name: "basicInfo.name",
    type: "text",
    label: "Name",
    info: "This is the name of the person managing this account. This is the contact name we will primarily address you with.",
    required: true,
  },
  {
    name: "basicInfo.businessName",
    type: "text",
    label: "Business Name",
    info: "This is the name that will appear on porker hut! Please do not use a trademark name without brand authorisation.",
    required: true,
  },
  {
    name: "basicInfo.businessAddress",
    type: "text",
    label: "Business Address",
    info: "Please indicate the official address of the entity. If you are an individual indicate your address.",
    required: true,
  },
  {
    name: "basicInfo.officialEmailAddress",
    type: "email",
    label: "Official Email Address",
    info: "This is will be one of the means we can use to reach out to you or pass important information.",
    required: true,
  },
  {
    name: "basicInfo.phoneNumber",
    type: "number",
    label: "Phone Number",
    info: "When we need to contact you urgently, this is the number we will reach out to.",
    required: true,
  },
  {
    name: "basicInfo.companyRcNumber",
    type: "number",
    label: "Company Rc Number",
    info: "We need your company registration number.",
    required: false,
  },
];

const personalInfo = [
  {
    name: "personalInfo.stateOfOperation",
    type: "text",
    label: "State of Operation",
    info: "",
    required: true,
  },
  {
    name: "personalInfo.city/Town",
    type: "text",
    label: "City / Town",
    info: "",
    required: true,
  },
  {
    name: "personalInfo.yearsOfOperation",
    type: "text",
    label: "Years of Operation",
    info: "",
    required: true,
  },
  {
    name: "personalInfo.typeOfVet",
    type: "text",
    label: "Type of Vet",
    info: "",
    required: true,
  },
];

const documentInfo = [
  {
    name: "license",
    type: "",
    label: "Upload a copy of Vet License",
    info: "Documents allowed are images and PDF files.",
    required: true,
  },
  {
    name: "docs",
    type: "",
    label: "Additional Document",
    info: "Documents allowed are images and PDF files.",
    required: false,
  },
];

interface FileData {
  name: string;
  file: File;
}

const VetProfileOverlay = ({
  isOpen,
  setIsOpen,
  item,
}: {
  isOpen: boolean;
  setIsOpen: any;
  item: any;
}) => {
  const {
    register,
    control,
    // getValues,
    reset, // Function to reset form value
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      personalInfo: {
        name: item?.accountName || "",
        businessName: item?.businessName || "",
        businessAddress: item?.businessAddress || "",
        officialEmailAddress: item?.email || "",
        phoneNumber: item?.phone || "",
        companyRcNumber: item?.companyRcNumber || "",
      },
      basicInfo: {},
    },
  });

  useEffect(() => {
    reset({
      personalInfo: {
        name: item?.accountName || "",
        businessName: item?.businessName || "",
        businessAddress: item?.businessAddress || "",
        officialEmailAddress: item?.email || "",
        phoneNumber: item?.phone || "",
        companyRcNumber: item?.companyRcNumber || "",
      },
      basicInfo: {},
    });
  });

  const { setFiles, selecFiles, selectedFiles } = useContext(FileContext);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    const selectedFiles = Array.from(event.target.files || []);

    const updatedFiles: FileData[] = selectedFiles.map((file) => ({
      name: file.name,
      file: file,
    }));

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
      setFiles(field, updatedFiles);
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 flex h-full w-full items-start justify-center bg-black bg-opacity-50 pt-10  ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="w-6/12 rounded-lg bg-[#F4F4F4] p-8">
        <div className="relative mb-8">
          <h2 className="text-2xl font-semibold text-[#333333]">
            Vet Partner Information
          </h2>
          <p className="text-[#797979]">
            Please fill in the necessary information
          </p>

          <span
            className="absolute top-0 right-0 cursor-pointer text-[#A2A2A2]"
            onClick={() => setIsOpen(false)}
          >
            <BsX size={28} />
          </span>
        </div>

        <div className="space-y-4">
          <form
            id="vetInfo"
            className="flex flex-wrap justify-between space-y-4"
          >
            {basicInfo?.map((data: any, index: number) => {
              // <label key={index} htmlFor={data.name} className="block">
              //   <span>
              //     {data.label}{" "}
              //     {data.required ? <span className="text-red-600">*</span> : ""}
              //   </span>

              // </label>

              return (
                <div key={index} className="w-full">
                  <CustomInput
                    defaultValues
                    data={data}
                    register={register}
                    errors={errors}
                    control={control}
                    infoColor={"#797979"}
                  />
                </div>
              );
            })}
            {personalInfo?.map((data: any, index: number) => {
              return (
                <div key={index} className="w-[calc(50%_-_10px)]">
                  <CustomInput
                    defaultValues
                    data={data}
                    register={register}
                    errors={errors}
                    control={control}
                    infoColor={"#797979"}
                  />
                </div>
              );
            })}
            <div className="w-full">
              <div>
                {documentInfo[0].label}
                {documentInfo[0].required ? (
                  <span className="text-red-600">*</span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative flex h-12 w-full items-center justify-between rounded-md border bg-[#fff]">
                <span className="ml-3 text-left text-sm text-neutral-600">
                  -My vet license-
                </span>
                <label
                  htmlFor={"selected"}
                  className="flex  h-full bg-[#D9D9D9] text-right  text-sm"
                >
                  <span className="my-auto cursor-pointer px-8 text-[#333333]">
                    Select file
                  </span>{" "}
                </label>
                <input
                  onChange={(event) => handleFileChange(event, "selected")}
                  className="hidden"
                  accept="image/*,.pdf,.docx,.doc,.txt"
                  type="file"
                  name={"selected"}
                  id={"selected"}
                />
                {selectedFiles && Array.isArray(selectedFiles) && (
                  <div className="uploaded absolute left-2 flex flex-wrap gap-1 py-3 text-sm">
                    {selectedFiles.map((file, index) => {
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
            <div className="w-full">
              <div>
                {documentInfo[1].label}
                {documentInfo[1].required ? (
                  <span className="text-red-600">*</span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative flex h-12 w-full items-center justify-between rounded-md border bg-[#fff]">
                <span className="ml-3 text-left text-sm text-neutral-600">
                  -Other Certification-
                </span>
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
                      return (
                        <div
                          key={index}
                          className="flex shrink-0 items-center rounded-md bg-emerald-600 px-2 text-xs text-white"
                        >
                          <span>{file.name}</span>
                          <button
                            className="p-2"
                            onClick={(event) =>
                              removeFile(event, index, selecFiles, "selec")
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
            <label htmlFor="about" className="w-full">
              <span>About You</span>
              <textarea
                name="about"
                id="about"
                className="form-textarea h-[120px] w-full resize-y rounded-lg focus:border-green-600 focus:shadow-none focus:ring-green-600"
              ></textarea>
            </label>

            <button className="mt-8 self-end rounded-md border border-red-600 px-5 py-2.5 text-red-600">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VetProfileOverlay;
