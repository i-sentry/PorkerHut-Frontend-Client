import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { useCreateVet } from "../services/hooks/service/vet";
import { FileContext } from "../context/FileContext";
import { RiCloseLine } from "react-icons/ri";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import PorkerLogo from "../assets/images/porker.png";
import VertPartnerFormMobile from "./VertPartnerFormMobile";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
} | null;

interface FileData {
  name: string;
  file: File;
}

type UserBillingInfo = {
  name: string;
  businessName: string;
  businessAddress: string;
  email: string;
  phone: string;
  companyRc: string;
  state: string;
  city: string;
  country: string;
  yearOfOperation: number;
  typeOfVet: string;
  checkbox: string;
  aboutYou: string;
  license: string;
};
interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Uint8Array | undefined;
}
interface ExtendedUserBillingInfo extends UserBillingInfo {
  businessDocUrl: IFile[] | undefined;
}

const LogisticsPatnerAccount = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const [, setIsOpen] = useState(false);
  const [error, setError] = useState<any>(null);

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

  const createVet = useCreateVet();

  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    businessName: Yup.string()
      .required("Business Name is required")
      .min(0, "Business Name must be at least 0 characters")
      .max(100, "Business Name must not exceed 100 characters"),
    businessAddress: Yup.string().required("Business Address is requires"),
    email: Yup.string()
      .required("Official Email Address is required")
      .email("Email is invalid"),
    typeOfVet: Yup.string().required("Type of Vet is required"),
    aboutYou: Yup.string().required("Type of Vet is required"),
    checkbox: Yup.boolean().oneOf([true], "Agree to the terms and conditions"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),

    city: Yup.string().required("City is required"),
    companyRc: Yup.string().required("Company Rc number is required"),
    yearOfOperation: Yup.number().required("Year of Operation is required"),

    phone: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(12, "Valid Phone Number must not exceed 12 characters"),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<ExtendedUserBillingInfo>({
    resolver: yupResolver(validationSchema),
  });

  const appendFilesToFormData = (
    fieldName: string,
    files: FileData[] | null,
    formData: FormData,
  ) => {
    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
      }
    }
  };

  const onSubmit = (data: ExtendedUserBillingInfo) => {
    setIsLoading(true);
    const formData = new FormData();

    if (!selecFiles) {
      setIsLoading(false);
      alert("Please attached a document!");
    } else {
      formData.append("accountName", data.name);
      formData.append("businessName", data.businessName);
      formData.append("businessAddress", data.businessAddress);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("aboutYou", data.aboutYou);
      formData.append("companyRcNumber", data.companyRc.toString());
      formData.append("state", data.state);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("yearsOfOperation", data.yearOfOperation.toString());
      formData.append("vetType", data.typeOfVet);
      formData.append("checkbox", data.checkbox);

      appendFilesToFormData("vetLicense", selecFiles, formData);

      appendFilesToFormData("additionalDocuments", seFiles, formData);

      createVet
        .mutateAsync(formData)
        .then((res) => {
          setIsOpen(true);
          setIsLoading(false);
          navigate("/vet-success");
        })
        .catch((err) => {
          const error = err.response?.data?.message || err.message;
          setIsLoading(false);
          if (error.includes("duplicate key error")) {
            setError("Email already registered. Please use a different email.");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div>
        <div className="xxs:px-2 lg:px-[4%]">
          <nav className="mb-4 flex items-center justify-between">
            <div className="flex cursor-pointer select-none items-center gap-2">
              <img src={PorkerLogo} alt="" className="h-9 lg:cursor-pointer" />
              <NavLink
                to="/"
                className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-xl"
              >
                Porker Hut
              </NavLink>
            </div>

            <div>
              <h1 className="mt-4 text-sm  font-medium text-[#A2A2A2]">
                Help Line: <br className="lg:hidden" />
                <span className="mt-4 text-center text-sm font-medium text-[#333333]">
                  support@porkerhut.com
                </span>
              </h1>
              <span className="mt-4 text-center text-sm font-medium text-[#333333]">
                +2348164602635
              </span>
            </div>
          </nav>
          <hr />
        </div>
        <div className=" bg-[#eee] px-2 py-3 lg:px-[4%]">
          <ProductsBreadCrumbs
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Affiliate",
                link: "/affiliate",
              },
              {
                name: "Logistics Partner",
                link: "/affiliate/logistics-partner-account",
              },
            ]}
          />
        </div>
        <div className="pb-20">
          <div className="mb-6 bg-[#197B30] lg:mx-auto lg:my-16 lg:w-[80%]">
            <div className="p-8 px-4 lg:p-10">
              <h1 className="flex items-center justify-center pb-4 text-[20px] font-medium leading-[23px] text-[#FFFFFF] md:text-[40px] md:leading-[47px]">
                Becoming a Logistics Partner
              </h1>
              <p className="flex items-center justify-center text-[14px]   text-[#FFFFFF] md:text-[16px] md:leading-[150%] ">
                Are you passionate about ensuring the seamless delivery of
                premium-quality pork products? At Porker Hut, we are on a
                mission to provide our customers with the freshest, healthiest
                and most delicious pork items crafted to perfection. We invite
                dedicated logistics partners to join hands with us in our
                commitment to excellence.
              </p>
              <p className="mt-2  text-[14px] text-[#FFFFFF] md:text-[16px] md:leading-[150%] ">
                Discover the unparalleled satisfaction of partnering with Porker
                Hut Logistics. As a trusted logistics partner, you will play a
                pivotal role in delivering our responsibly sourced, high-quality
                pork products to satisfied customers around the region. Join us
                in our pursuit of delivering more than just pork - a promise of
                exceptional taste, reliablity and customer satisfaction.
              </p>
            </div>
          </div>

          <div>
            {" "}
            <div>
              <div className="mx-[16px] min-h-[600px] max-w-[680px] rounded-md bg-[#F4F4F4] py-[40px] px-[16px] md:mx-auto md:px-[40px]">
                <div className=" mb-8">
                  <h1 className="mb-4  font-medium leading-[28px] text-[#333333] sm:text-xl md:text-[24px]">
                    Logistic Partner Information
                  </h1>
                  <p className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    Please fill in the necessary information.{" "}
                  </p>
                </div>
                <div>
                  <div>
                    {error && (
                      <p className=" my-3 flex items-center justify-between rounded">
                        <span className="text-sm text-[#dd1313]">{error}</span>

                        <span
                          onClick={() => setError(false)}
                          className="h-6 w-6 cursor-pointer rounded-full text-center"
                        ></span>
                      </p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name")}
                        placeholder="Enter your name"
                        className={`relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                          errors.name ? " border-[1px] border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.name?.message}
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                        This is the name of the person managing this account.
                        This is the contact name we will <br /> primarily
                        address you with.
                      </span>
                      <p className="my-2 text-xs text-[red]"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        {...register("businessName")}
                        placeholder="Enter your business name"
                        className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                          errors.businessName ? " border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.businessName?.message}
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                        This is the name that will appear on porker hut! Please
                        do not use a trademark name without brand authorisation.
                      </span>
                      <p className="my-2 text-xs text-[red]"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                      >
                        Business Address
                      </label>
                      <input
                        type="text"
                        id="businessAddress"
                        {...register("businessAddress")}
                        placeholder="Enter business address"
                        className={`  relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                          errors.businessAddress ? "border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.businessAddress?.message}
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                        Please indicate the official address of the entity. If
                        you are an individual indicate your address.
                      </span>
                      <p className="my-2 text-xs text-[red]"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                      >
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Enter email address"
                        className={`relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                          errors.email ? "border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.email?.message}
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                        This is will be one of the means we can use to reach out
                        to you or pass important information.
                      </span>
                      <p className="my-2 text-xs text-[red]"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        {...register("phone")}
                        placeholder="Enter your phone number"
                        className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"}  ${
                          errors.phone ? "border border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.phone?.message}
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                        When we need to contact you urgently, this is the number
                        we will reach out to.
                      </span>
                      <p className="my-2 text-xs text-[red]"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] `}
                      >
                        Company Rc Number
                      </label>
                      <input
                        type="number"
                        id="companyRc"
                        {...register("companyRc")}
                        placeholder="Enter your rc number"
                        className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                          errors.companyRc ? "border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.companyRc?.message}
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                        We need your company registration number.
                      </span>
                      <p className="my-2 text-xs text-[red]"></p>
                    </div>

                    <div className="input mb-3">
                      <label
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                        htmlFor="country"
                      >
                        Country
                      </label>

                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <CountryDropdown
                            value={field.value}
                            onChange={field.onChange}
                            classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                              errors.country ? "border-[#dd1313]" : ""
                            }`}
                          />
                        )}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.country?.message}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="my-2 w-full">
                        <label
                          className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                          htmlFor="state"
                        >
                          State
                        </label>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <RegionDropdown
                              country={watch("country")}
                              value={field.value}
                              onChange={field.onChange}
                              classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                                errors.country ? "border-[#dd1313]" : ""
                              }`}
                            />
                          )}
                        />

                        <div className="text-sm text-[#dd1313]">
                          {errors.state?.message}
                        </div>
                      </div>
                      <div className="my-2 w-full ">
                        <label
                          htmlFor=""
                          className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                        >
                          City / Town
                        </label>
                        <input
                          type="text"
                          {...register("city")}
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
                    </div>
                    <div className="flex gap-4">
                      <div className="my-2 w-full ">
                        <label
                          htmlFor=""
                          className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                        >
                          Years of Operation
                        </label>
                        <input
                          type="number"
                          {...register("yearOfOperation")}
                          placeholder="Number of years"
                          className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                            errors.yearOfOperation ? "border-[#dd1313]" : ""
                          }`}
                        />
                        <div className="text-sm text-[#dd1313]">
                          {errors.yearOfOperation?.message}
                        </div>
                        <span className="text-[14px] font-normal leading-[24px] text-[#797979]"></span>
                        <p className="my-2 text-xs text-[red]"></p>
                      </div>
                      <div className="my-2 w-full ">
                        <label
                          htmlFor=""
                          className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                        >
                          Number of Vehicles
                        </label>
                        <input
                          type="text"
                          id="typeOfVet"
                          {...register("typeOfVet")}
                          placeholder="Enter your plate number"
                          className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                            errors.typeOfVet ? "border-[#dd1313]" : ""
                          }`}
                        />
                        <div className="text-sm text-[#dd1313]">
                          {errors.typeOfVet?.message}
                        </div>
                        <span className="text-[14px] font-normal leading-[24px] text-[#797979]"></span>
                        <p className="my-2 text-xs text-[red]"></p>
                      </div>
                    </div>

                    <div className="my-2 w-full ">
                      <>
                        <span
                          className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                        >
                          Upload a copy of Operational License
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
                                onChange={(event) =>
                                  handleFileChange(event, "se")
                                }
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
                                        <span>{file.name}</span>
                                        <button
                                          className="p-2"
                                          onClick={(event) =>
                                            removeFile(
                                              event,
                                              index,
                                              seFiles,
                                              "se",
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
                            Documents allowed are images and PDF files.
                          </span>
                        </div>
                      </>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                      >
                        About You
                      </label>
                      <textarea
                        {...register("aboutYou")}
                        name="aboutYou"
                        className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                          errors.aboutYou ? " border-[#dd1313]" : ""
                        }`}
                      />

                      <div className="text-sm text-[#dd1313]">
                        {errors.aboutYou?.message}
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="flex items-center ">
                        <input
                          {...register("checkbox")}
                          type="checkbox"
                          name="checkbox"
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

                      <div className="text-sm text-[#dd1313]">
                        {errors.checkbox?.message}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`my-8 ml-auto flex justify-end rounded bg-[#197B30] px-6 py-3 text-[14px] font-semibold leading-[24px] text-[#FFFFFF] ${
                        loading ? "pointer-events-none opacity-50" : ""
                      }`}
                    >
                      {loading ? (
                        <div className="flex items-center justify-end px-6 py-3">
                          <ReactLoading
                            type="spin"
                            color="#FFFFFF"
                            height={20}
                            width={20}
                          />
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogisticsPatnerAccount;
