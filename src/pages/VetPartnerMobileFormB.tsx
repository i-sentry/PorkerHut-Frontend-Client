import React, { useState, useContext } from "react";
import CustomSelect from "../components/utility/CustomSelect";
import { sellersShopInfo, sellersformData } from "../utils/formData";
import { Link } from "react-router-dom";
import { ISellerInfo, useAppState } from "../context/SellerInfoContext";
import { SellersStepsContext } from "../context/SellersStepsContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useForm } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import { useCreateVet } from "../services/hooks/service/vet";
import { FileContext } from "../context/FileContext";
import { RiCloseLine } from "react-icons/ri";
import Header from "../components/vet-form/Header";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
} | null;

const vendorType = [
  {
    id: 1,
    name: "Individual",
  },
  {
    id: 2,
    name: "Business Entity",
  },
];


interface FileData {
  name: string;
  file: File;
}

type UserData = {
  state: string;
  city: string;
  country: string;
  yearsOfOperation: string;
  vetType: string;
  aboutYou: string;
  chexbox: string;
  error: null,


};

type UserBillingInfo = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
  selecFiles: FileData[] | null;
  seFiles: FileData[] | null;
};

const VetPartnerMobileB = ({ country, city, state, yearsOfOperation, vetType, aboutYou, chexbox, updateFields, error }: UserBillingInfo) => {







  const { setFiles, seFiles, selecFiles } = useContext(FileContext);
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

  const appendFilesToFormData = (
    fieldName: string,
    files: FileData[] | null,
    formData: FormData
  ) => {

    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
        console.log(fileData.file);
      }
    }
  };



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserBillingInfo>({

  });




  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <div className="bg-[#197B30] md:h-[275px] md:my-[80px] md:mx-20 xxs:my-[61px]">
        <Header />

      </div>

      <div>
        {" "}
        <div>
          <div className="max-w-[680px] md:mx-auto min-h-[600px] py-[20px] md:px-[40px] px-[16px] mx-[16px] bg-[#F4F4F4] rounded-md">

            <div>
              {error && (
                <p className=" my-3 flex items-center justify-between rounded">
                  <span className="text-[#dd1313] text-sm">{error}</span>

                  <span
                    // onClick={() => setError(false)}
                    className="rounded-full w-6 h-6 cursor-pointer text-center"
                  >

                  </span>
                </p>
              )}
            </div>
            <div>
              <div>


                <div className=" w-full">
                  <label
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <CountryDropdown
                    id="country"
                    value={country}
                    onChange={(val) => updateFields({ country: val })}

                    classes={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${errors.country ? "border-[#dd1313]" : ""
                      }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.country?.message}
                  </div>
                </div>

                <div className="my-6 w-full">
                  <label
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                    htmlFor="state"
                  >
                    State
                  </label>
                  <RegionDropdown
                    country={country}
                    id="state"
                    value={state}
                    onChange={(val) => updateFields({ state: val })}
                    classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${errors.state ? "border-[#dd1313]" : ""
                      }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.state?.message}
                  </div>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    City / Town
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => updateFields({ city: e.target.value })}
                    placeholder="Enter city/town"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.city ? "border-[#dd1313]" : ""
                      }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.city?.message}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>

                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Years of Operation
                  </label>
                  <input
                    type="number"
                    value={yearsOfOperation}
                    onChange={(e) => updateFields({ yearsOfOperation: e.target.value })}
                    placeholder="Number of years"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} `}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {/* {errors.yearOfOperation?.message} */}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Type of Vet
                  </label>
                  <input
                    type="text"
                    value={vetType}
                    onChange={(e) => updateFields({ vetType: e.target.value })}
                    placeholder="Enter the type of vet you are"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"}`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {/* {errors.typeOfVet?.message} */}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>

                <div className="my-6 w-full ">
                  <div className="my-2 w-full ">

                  </div>
                </div>
                <div className="my-2 w-full ">


                  <>
                    <span className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}>
                      Upload a copy of Vet License
                    </span>
                    <div className="mt-2">
                      <div className="flex flex-col">
                        <div className="dnd bg-[#fff] h-12 flex items-center justify-end border rounded-md relative">
                          <label
                            htmlFor={"selec"}
                            className="text-sm  bg-[#D9D9D9] h-full flex  text-right"
                          >
                            <span className="text-[#333333] cursor-pointer px-8 my-auto">
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
                            <div className="uploaded flex flex-wrap gap-1 text-sm py-3 absolute left-2">
                              {selecFiles.map((file, index) => {
                                console.log(file, "filess");
                                return (
                                  <div
                                    key={index}
                                    className="text-xs shrink-0 bg-emerald-600 text-white px-2 rounded-md flex items-center"
                                  >
                                    <span>{file.name.substring(0, 20) + "..."}</span>
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


                    </div>


                  </>
                </div>
                <div className="my-2 w-full ">

                  <>
                    <span className="text-[#333333] text-[16px] leading-[16px]">
                      Additional Document.
                    </span>
                    <div className="mt-2">
                      <div className="flex flex-col">
                        <div className="dnd bg-[#fff] h-12 flex items-center justify-end border rounded-md relative">
                          <label
                            htmlFor={"se"}
                            className="text-sm  bg-[#D9D9D9] h-full flex  text-right"
                          >
                            <span className="text-[#333333] cursor-pointer px-8 my-auto">
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
                            <div className="uploaded flex flex-wrap gap-1 text-sm py-3 absolute left-2">
                              {seFiles.map((file, index) => {
                                console.log(file, "filess");
                                return (
                                  <div
                                    key={index}
                                    className="text-xs shrink-0 bg-emerald-600 text-white px-2 rounded-md flex items-center"
                                  >
                                    <span>{file.name.substring(0, 20) + "..."}</span>
                                    <button
                                      className="p-2"
                                      onClick={(event) => removeFile(event, index, seFiles, "se")}
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

                      <span className=" text-[#797979]  text-[12px] leading-none">
                        Documents allowed are images and PDF files.
                      </span>
                    </div>
                  </>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor  `}
                  >
                    About You
                  </label>
                  <textarea
                    value={aboutYou}
                    onChange={(e) => updateFields({ aboutYou: e.target.value })}
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] h-32 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${"border-ErrorBorder"}`}
                  />

                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>

                <div className="flex items-center mt-10">
                  <input
                    // {...register("checkbox")}
                    type="checkbox"
                    name="checkbox"

                    // checked={val}
                    className="h-4 w-4 accent-[#197B30] checked:bg-[#197B30]  cursor-pointer rounded"
                  />
                  <label
                    htmlFor=""
                    className="ml-2 text-[14px] leading-[16px] font-normal text-slate-500"
                  >
                    I have read and accepted{" "}
                    <Link to={""} className="text-[#197B30] underline">
                      Porker Hut E-contract
                    </Link>
                  </label>
                </div>
              </div>


              <div className="flex items-center justify-center mt-8 gap-4">
                <button

                  className={`h-3 w-3 rounded-full focus:outline-none bg-[#197b30]`}
                ></button>

                <button

                  className={`h-3 w-3 rounded-full  focus:outline-none  bg-[#197b30]`}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetPartnerMobileB;
