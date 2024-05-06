import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

import { useForm } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { FileContext } from "../context/FileContext";
import { RiCloseLine } from "react-icons/ri";
import Header from "../components/vet-form/Header";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
} | null;

// const vendorType = [
//   {
//     id: 1,
//     name: "Individual",
//   },
//   {
//     id: 2,
//     name: "Business Entity",
//   },
// ];

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
  error: null;
};

type UserBillingInfo = UserData & {
  updateFields: (fields: Partial<UserData>) => void | any;
  selecFiles: FileData[] | null;
  seFiles: FileData[] | null;
};

const VetPartnerMobileB = ({
  country,
  city,
  state,
  yearsOfOperation,
  vetType,
  aboutYou,
  chexbox,
  updateFields,
  error,
}: UserBillingInfo) => {
  const { setFiles, seFiles, selecFiles } = useContext(FileContext);
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

  const {
    formState: { errors },
  } = useForm<UserBillingInfo>({});

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <div className="bg-[#197B30] xxs:my-[61px] md:my-[80px] md:mx-20 md:h-[275px]">
        <Header />
      </div>

      <div>
        {" "}
        <div>
          <div className="mx-[16px] min-h-[600px] max-w-[680px] rounded-md bg-[#F4F4F4] py-[20px] px-[16px] md:mx-auto md:px-[40px]">
            <div>
              {error && (
                <p className=" my-3 flex items-center justify-between rounded">
                  <span className="text-sm text-[#dd1313]">{error}</span>

                  <span
                    // onClick={() => setError(false)}
                    className="h-6 w-6 cursor-pointer rounded-full text-center"
                  ></span>
                </p>
              )}
            </div>
            <div>
              <div>
                <div className=" w-full">
                  <label
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <CountryDropdown
                    id="country"
                    value={country}
                    onChange={(val) => updateFields({ country: val })}
                    classes={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                      errors.country ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-sm text-[#dd1313]">
                    {errors.country?.message}
                  </div>
                </div>

                <div className="my-6 w-full">
                  <label
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                    htmlFor="state"
                  >
                    State
                  </label>
                  <RegionDropdown
                    country={country}
                    id="state"
                    value={state}
                    onChange={(val) => updateFields({ state: val })}
                    classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                      errors.state ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-sm text-[#dd1313]">
                    {errors.state?.message}
                  </div>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    City / Town
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => updateFields({ city: e.target.value })}
                    placeholder="Enter city/town"
                    className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.city ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-sm text-[#dd1313]">
                    {errors.city?.message}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]"></span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>

                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Years of Operation
                  </label>
                  <input
                    type="number"
                    value={yearsOfOperation}
                    onChange={(e) =>
                      updateFields({ yearsOfOperation: e.target.value })
                    }
                    placeholder="Number of years"
                    className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} `}
                  />
                  <div className="text-sm text-[#dd1313]">
                    {/* {errors.yearOfOperation?.message} */}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]"></span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Type of Vet
                  </label>
                  <input
                    type="text"
                    value={vetType}
                    onChange={(e) => updateFields({ vetType: e.target.value })}
                    placeholder="Enter the type of vet you are"
                    className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"}`}
                  />
                  <div className="text-sm text-[#dd1313]">
                    {/* {errors.typeOfVet?.message} */}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]"></span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>

                <div className="my-6 w-full ">
                  <div className="my-2 w-full "></div>
                </div>
                <div className="my-2 w-full ">
                  <>
                    <span
                      className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                    >
                      Upload a copy of Vet License
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
                            onChange={(event) =>
                              handleFileChange(event, "selec")
                            }
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
                                    <span>
                                      {file.name.substring(0, 20) + "..."}
                                    </span>
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
                    </div>
                  </>
                </div>
                <div className="my-2 w-full ">
                  <>
                    <span className="text-[16px] leading-[16px] text-[#333333]">
                      Additional Document.
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
                                return (
                                  <div
                                    key={index}
                                    className="flex shrink-0 items-center rounded-md bg-emerald-600 px-2 text-xs text-white"
                                  >
                                    <span>
                                      {file.name.substring(0, 20) + "..."}
                                    </span>
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
                        Documents allowed are images and PDF files.
                      </span>
                    </div>
                  </>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px]  `}
                  >
                    About You
                  </label>
                  <textarea
                    value={aboutYou}
                    onChange={(e) => updateFields({ aboutYou: e.target.value })}
                    className={`focus:ring-primaryDark  focus:border-primaryDark relative block h-32 w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[10px] text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm ${"border-ErrorBorder"}`}
                  />

                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]"></span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>

                <div className="mt-10 flex items-center">
                  <input
                    // {...register("checkbox")}
                    type="checkbox"
                    name="checkbox"
                    // checked={val}
                    className="h-4 w-4 cursor-pointer rounded  accent-[#197B30] checked:bg-[#197B30]"
                  />
                  <label
                    htmlFor=""
                    className="ml-2 text-[14px] font-normal leading-[16px] text-slate-500"
                  >
                    I have read and accepted{" "}
                    <Link to={""} className="text-[#197B30] underline">
                      Porker Hut E-contract
                    </Link>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  className={`h-3 w-3 rounded-full bg-[#197b30] focus:outline-none`}
                ></button>

                <button
                  className={`h-3 w-3 rounded-full  bg-[#197b30]  focus:outline-none`}
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
