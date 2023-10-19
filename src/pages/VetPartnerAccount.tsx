import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector";

import { useCreateVet } from "../services/hooks/service/vet";
import { FileContext } from "../context/FileContext";
import { RiCloseLine } from "react-icons/ri";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import PorkerLogo from "../assets/images/porker.png";
import VertPartnerFormMobile from "./VertPartnerFormMobile";



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

const VetPartnerAccount = () => {
  const navigate = useNavigate()
  const [loading, setIsLoading] = useState(false)
  const [, setIsOpen] = useState(false);
  const [error, setError] = useState<any>(null);

  const { setFiles, seFiles, selecFiles } = useContext(FileContext);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {

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
    formData: FormData
  ) => {

    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
        console.log(fileData.file);
      }
    }
  };

  console.log({ errors });
  const onSubmit = (data: ExtendedUserBillingInfo) => {
    console.log(data)
    setIsLoading(true)
    const formData = new FormData();
    console.log("submit");

    if (!selecFiles) {
      setIsLoading(false)
      alert("Please attached a document!")

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

      console.log(formData, "FORMDATA");

      createVet.mutateAsync(formData)
        .then((res) => {
          setIsOpen(true);
          setIsLoading(false)
          navigate('/vet-success');
        })
        .catch((err) => {
          const error = err.response?.data?.message || err.message;
          setIsLoading(false)
          // console.log(error);
          if (error.includes("duplicate key error")) {
            setError("Email already registered. Please use a different email.");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        })

    }


    ;

  };



  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

  }, []);


  return (
    <>

      <div>


        <div className='mb-20 lg:px-[4%] xxs:px-2'>
          <nav className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <img src={PorkerLogo} alt="" className="lg:cursor-pointer h-9" />
              <NavLink to="/" className="porker sm:text-xl font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
                Porker Hut
              </NavLink>
            </div>

            <div>
              <h1 className="text-sm font-medium  mt-4 text-[#A2A2A2]">Help Line: <br className="lg:hidden" /><span className="text-sm font-medium text-center mt-4 text-[#333333]">support@porkerhut.com</span></h1>
              <span className="text-sm font-medium text-center mt-4 text-[#333333]">
                +2348164602635</span>
            </div>


          </nav>
          <hr />

        </div>


        <div className="pb-20 xxs:hidden md:block">
          <div className="bg-[#197B30] md:h-[275px] md:my-[80px] md:mx-20 xxs:my-[61px]">
            <div className="p-10">
              <h1 className="text-[20px] leading-[23px] md:text-[40px] md:leading-[47px] font-medium text-[#FFFFFF] flex items-center justify-center pb-4">
                Become a Vet Partner
              </h1>
              <p className="text-[14px] leading-[16px] flex items-center justify-center md:text-[16px] md:leading-[19px] font-medium text-[#FFFFFF] ">
                Lorem ipsum dolor sit amet consectetur. Volutpat sed bibendum eget
                a morbi nulla scelerisque enim. Fringilla fringilla felis non
                magna erat at facilisi. Ligula elementum praesent interdum
                adipiscing eu convallis tellus augue. Et tempor mauris donec
                mattis enim sapien a nibh. Pretium felis maecenas suspendisse eros
                nibh arcu quis. Tellus quam ultricies sodales at ac odio diam
                risus. Facilisis aliquet tempus tristique donec integer pretium
                cursus mi a. Integer laoreet commodo diam erat erat amet. Tellus
                congue sapien convallis maecenas tortor auctor. Morbi tincidunt a
                libero interdum. Enim enim turpis rutrum egestas malesuada turpis
                amet tempor potenti. Nulla tincidunt sit amet at enim sit commodo
                condimentum curabitur. Nisl netus sed arcu eros hendrerit ut. Dui
                lorem at ligula et diam pellentesque mi maecenas. Aliquet congue
                nunc porta risus morbi et. Ac habitant metus sem malesuada ac
                faucibus. Dapibus natoque mi sed ipsum facilisis felis aliquet
                sit.{" "}
              </p>
            </div>
          </div>

          <div>
            {" "}
            <div>
              <div className="max-w-[680px] md:mx-auto min-h-[600px] py-[40px] md:px-[40px] px-[16px] mx-[16px] bg-[#F4F4F4] rounded-md">
                <div className=" mb-8">
                  <h1 className="sm:text-xl  text-[#333333] md:text-[24px] leading-[28px] font-medium mb-4">
                    Vet Partner Information
                  </h1>
                  <p className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    Please fill in the necessary information.{" "}
                  </p>
                </div>
                <div>
                  <div>
                    {error && (
                      <p className=" my-3 flex items-center justify-between rounded">
                        <span className="text-[#dd1313] text-sm">{error}</span>

                        <span
                          onClick={() => setError(false)}
                          className="rounded-full w-6 h-6 cursor-pointer text-center"
                        >

                        </span>
                      </p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name")}
                        placeholder="Enter your name"
                        className={`relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.name ? " border-[1px] border-[#dd1313]" : ""
                          }`}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.name?.message}
                      </div>
                      <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                        This is the name of the person managing this account. This
                        is the contact name we will <br /> primarily address you
                        with.
                      </span>
                      <p className="my-2 text-[red] text-xs"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        {...register("businessName")}
                        placeholder="Enter your business name"
                        className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.businessName ? " border-[#dd1313]" : ""
                          }`}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.businessName?.message}
                      </div>
                      <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                        This is the name that will appear on porker hut! Please do
                        not use a trademark name without brand authorisation.
                      </span>
                      <p className="my-2 text-[red] text-xs"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                      >
                        Business Address
                      </label>
                      <input
                        type="text"
                        id="businessAddress"
                        {...register("businessAddress")}
                        placeholder="Enter business address"
                        className={`  relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.businessAddress ? "border-[#dd1313]" : ""
                          }`}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.businessAddress?.message}
                      </div>
                      <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                        Please indicate the official address of the entity. If you
                        are an individual indicate your address.
                      </span>
                      <p className="my-2 text-[red] text-xs"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                      >
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Enter email address"
                        className={`relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.email ? "border-[#dd1313]" : ""
                          }`}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.email?.message}
                      </div>
                      <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                        This is will be one of the means we can use to reach out
                        to you or pass important information.
                      </span>
                      <p className="my-2 text-[red] text-xs"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        {...register("phone")}
                        placeholder="Enter your phone number"
                        className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"}  ${errors.phone ? "border-[#dd1313] border" : ""
                          }`}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.phone?.message}
                      </div>
                      <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                        When we need to contact you urgently, this is the number
                        we will reach out to.
                      </span>
                      <p className="my-2 text-[red] text-xs"></p>
                    </div>
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor `}
                      >
                        Company Rc Number
                      </label>
                      <input
                        type="number"
                        id="companyRc"
                        {...register("companyRc")}
                        placeholder="Enter your rc number"
                        className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.companyRc ? "border-[#dd1313]" : ""
                          }`}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.companyRc?.message}
                      </div>
                      <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                        We need your company registration number.
                      </span>
                      <p className="my-2 text-[red] text-xs"></p>
                    </div>



                    <div className="mb-3 input">
                      <label
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
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
                            classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${errors.country ? "border-[#dd1313]" : ""
                              }`}
                          />
                        )}
                      />

                      <div className="text-[#dd1313] text-sm">
                        {errors.country?.message}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="my-2 w-full">
                        <label
                          className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
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
                              classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${errors.country ? "border-[#dd1313]" : ""
                                }`}
                            />
                          )}
                        />

                        <div className="text-[#dd1313] text-sm">
                          {errors.state?.message}
                        </div>
                      </div>
                      <div className="my-2 w-full ">
                        <label
                          htmlFor=""
                          className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                        >
                          City / Town
                        </label>
                        <input
                          type="text"
                          {...register("city")}
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
                    </div>
                    <div className="flex gap-4">
                      <div className="my-2 w-full ">
                        <label
                          htmlFor=""
                          className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                        >
                          Years of Operation
                        </label>
                        <input
                          type="number"
                          {...register("yearOfOperation")}
                          placeholder="Number of years"
                          className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.yearOfOperation ? "border-[#dd1313]" : ""
                            }`}
                        />
                        <div className="text-[#dd1313] text-sm">
                          {errors.yearOfOperation?.message}
                        </div>
                        <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                        <p className="my-2 text-[red] text-xs"></p>
                      </div>
                      <div className="my-2 w-full ">
                        <label
                          htmlFor=""
                          className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                        >
                          Type of Vet
                        </label>
                        <input
                          type="text"
                          id="typeOfVet"
                          {...register("typeOfVet")}
                          placeholder="Enter the type of vet you are"
                          className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.typeOfVet ? "border-[#dd1313]" : ""
                            }`}
                        />
                        <div className="text-[#dd1313] text-sm">
                          {errors.typeOfVet?.message}
                        </div>
                        <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                        <p className="my-2 text-[red] text-xs"></p>
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
                                        <span>{file.name}</span>
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
                    <div className="my-2 w-full ">
                      <label
                        htmlFor=""
                        className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                      >
                        About You
                      </label>
                      <textarea
                        {...register("aboutYou")}
                        name="aboutYou"
                        className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.aboutYou ? " border-[#dd1313]" : ""
                          }`}

                      />


                      <div className="text-[#dd1313] text-sm">
                        {errors.aboutYou?.message}
                      </div>
                    </div>




                    <div className="mt-10">

                      <div className="flex items-center ">
                        <input
                          {...register("checkbox")}
                          type="checkbox"
                          name="checkbox"
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

                      <div className="text-[#dd1313] text-sm">
                        {errors.checkbox?.message}
                      </div>

                    </div>

                    <button

                      type="submit"
                      className={`text-[14px] leading-[24px] font-semibold bg-[#197B30] px-6 py-3 rounded text-[#FFFFFF] my-8 ml-auto flex justify-end ${loading ? 'opacity-50 pointer-events-none' : ''
                        }`}
                    >
                      {loading ? (
                        <div className="flex items-center px-6 py-3 justify-end">
                          <ReactLoading type="spin" color="#FFFFFF" height={20} width={20} />

                        </div>
                      ) : (
                        'Submit'
                      )}
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="md:hidden xxs:block">
        <VertPartnerFormMobile />
      </div>
    </>
  );
};

export default VetPartnerAccount;
