import React, { useState } from "react";
import { IFile } from "../components/utility/CustomDND";
import "react-international-phone/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
} | null;

type UserBillingInfo = {
  name: string;
  businessName: string;
  businessAddress: string;
  email: string;
  phone: string;
  companyRc: number;
  state: string;
  city: string;
  country: string;
  yearOfOperation: number;
  typeOfVet: string;
};

const LogisticPartnerMobileFormA: React.FC = () => {
  const [,] = useState<IFile[]>();

  // const getBusinessDocFromInput = (files: IFile[]) => {
  //   setBusinessDocUrl(files);
  // };

  const [phoneNumber] = useState("");
  const [country] = useState("");
  const [state] = useState("");
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

    state: Yup.string().required("State is required"),

    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    companyRc: Yup.number().required("Company Rc number is required"),
    yearOfOperation: Yup.number().required("Year of Operation is required"),

    phone: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(12, "Valid Phone Number must not exceed 12 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserBillingInfo>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserBillingInfo) => {
    data.phone = phoneNumber;
    data.country = country;
    data.state = state;
    reset();
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <div className="bg-[#197B30] xxs:my-[61px] md:my-[80px] md:mx-20 md:h-[275px]">
        <div className="p-10">
          <h1 className="flex items-center justify-center pb-4 text-[20px] font-medium leading-[23px] text-[#FFFFFF] md:text-[40px] md:leading-[47px]">
            Becoming a Logistics Partner hype
          </h1>
          <p className="flex items-center justify-center text-[14px] font-medium leading-[16px] text-[#FFFFFF] md:text-[16px] md:leading-[19px] ">
            Lorem ipsum dolor sit amet consectetur. Volutpat sed bibendum eget a
            morbi nulla scelerisque enim. Fringilla fringilla felis non magna
            erat at facilisi. Ligula elementum praesent interdum adipiscing eu
            convallis tellus augue. Et tempor mauris donec mattis enim sapien a
            nibh. Pretium felis maecenas suspendisse eros nibh arcu quis. Tellus
            quam ultricies sodales at ac odio diam risus. Facilisis aliquet
            tempus tristique donec integer pretium cursus mi a. Integer laoreet
            commodo diam erat erat amet. Tellus congue sapien convallis maecenas
            tortor auctor. Morbi tincidunt a libero interdum. Enim enim turpis
            rutrum egestas malesuada turpis amet tempor potenti. Nulla tincidunt
            sit amet at enim sit commodo condimentum curabitur. Nisl netus sed
            arcu eros hendrerit ut. Dui lorem at ligula et diam pellentesque mi
            maecenas. Aliquet congue nunc porta risus morbi et. Ac habitant
            metus sem malesuada ac faucibus. Dapibus natoque mi sed ipsum
            facilisis felis aliquet sit.{" "}
          </p>
        </div>
      </div>

      <div>
        {" "}
        <div>
          <div className="mx-[16px] min-h-[600px] max-w-[680px] rounded-md bg-[#F4F4F4] py-[20px] px-[16px] md:mx-auto md:px-[40px]">
            <div className=" mb-8">
              <h1 className="mb-4  font-medium leading-[28px] text-[#333333] sm:text-xl md:text-[24px]">
                Logistic Partner Information
              </h1>
              <p className="text-[14px] font-normal leading-[24px] text-[#797979]">
                Please fill in the necessary information.{" "}
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-2 w-full ">
                  <label
                    htmlFor="name"
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
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
                    This is the name of the person managing this account. This
                    is the contact name we will <br /> primarily address you
                    with.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
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
                    This is the name that will appear on porker hut! Please do
                    not use a trademark name without brand authorisation.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Business Address
                  </label>
                  <input
                    type="text"
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
                    Please indicate the official address of the entity. If you
                    are an individual indicate your address.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Official Email Address
                  </label>
                  <input
                    type="email"
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
                    This is will be one of the means we can use to reach out to
                    you or pass important information.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
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
                    When we need to contact you urgently, this is the number we
                    will reach out to.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] `}
                  >
                    Company Rc Number
                  </label>
                  <input
                    type="number"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticPartnerMobileFormA;
