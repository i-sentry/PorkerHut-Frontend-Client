import React, { useState, useContext } from "react";
import CustomSelect from "../components/utility/CustomSelect";
import { sellersShopInfo, sellersformData } from "../utils/formData";
import { Link } from "react-router-dom";
import StepperController from "../components/sellers-onboarding/StepperController";
import { ISellerInfo, useAppState } from "../context/SellerInfoContext";
import CustomDND, { IFile } from "../components/utility/CustomDND";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { VetPartnerContexts } from "../context/VetPartnerContext";
import Header from "../components/vet-form/Header";
import { useNavigate } from "react-router-dom";

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

type UserData = {
  accountName: string;
  businessName: string;
  businessAddress: string;
  email: string;
  phone: string;
  companyRcNumber: string;
}

type UserBillingInfo = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const VetPartnerMobileFormA = ({ accountName, businessName, businessAddress, email, phone, companyRcNumber, updateFields }: UserBillingInfo) => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({

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
                <div className="my-2 w-full ">
                  <label
                    htmlFor="name"
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Name
                  </label>
                  <input
                    required
                    autoFocus
                    type="text"
                    value={accountName}
                    onChange={(e) => updateFields({ accountName: e.target.value })}
                    placeholder="Enter your name"
                    className={`relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.name ? " border-[1px] border-[#dd1313]" : ""
                      }`}
                  />

                  <div className="text-[#dd1313] text-sm">

                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    This is the name of the person managing this account. This
                    is the contact name we will <br /> primarily address you
                    with.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Business Name
                  </label>
                  <input
                    required
                    type="text"
                    value={businessName}
                    onChange={(e) => updateFields({ businessName: e.target.value })}
                    // {...register("businessName")}
                    placeholder="Enter your business name"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.businessName ? " border-[#dd1313]" : ""
                      }`}
                  />

                  <div className="text-[#dd1313] text-sm">
                    {/* {errors.businessName?.message} */}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    This is the name that will appear on porker hut! Please do
                    not use a trademark name without brand authorisation.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Business Address
                  </label>
                  <input
                    required
                    type="text"
                    // {...register("businessAddress")}
                    value={businessAddress}
                    onChange={(e) => updateFields({ businessAddress: e.target.value })}

                    placeholder="Enter business address"
                    className={`  relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.businessAddress ? "border-[#dd1313]" : ""
                      }`}
                  />

                  <div className="text-[#dd1313] text-sm">

                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    Please indicate the official address of the entity. If you
                    are an individual indicate your address.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Official Email Address
                  </label>
                  <input
                    required
                    type="email"
                    // {...register("email")}
                    value={email}
                    onChange={(e) => updateFields({ email: e.target.value })}

                    placeholder="Enter email address"
                    className={`relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.email ? "border-[#dd1313]" : ""
                      }`}
                  />

                  <div className="text-[#dd1313] text-sm">
                    {/* {errors.email?.message} */}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    This is will be one of the means we can use to reach out to
                    you or pass important information.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="number"
                    // {...register("phone")}
                    value={phone}
                    onChange={(e) => updateFields({ phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"}  ${errors.phone ? "border-[#dd1313] border" : ""
                      }`}
                  />

                  <div className="text-[#dd1313] text-sm">
                    {/* {errors.phone?.message} */}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    When we need to contact you urgently, this is the number we
                    will reach out to.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor `}
                  >
                    Company Rc Number
                  </label>
                  <input
                    required
                    type="number"
                    // {...register("companyRc")}
                    value={companyRcNumber}
                    onChange={(e) => updateFields({ companyRcNumber: e.target.value })}
                    placeholder="Enter your rc number"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${errors.companyRc ? "border-[#dd1313]" : ""
                      }`}
                  />

                  <div className="text-[#dd1313] text-sm">
                    {/* {errors.companyRc?.message} */}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    We need your company registration number.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
              </div>


              <div className="flex items-center justify-center mt-8 gap-4">
                <button

                  className={`h-3 w-3 rounded-full focus:outline-none bg-gray-300`}
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

export default VetPartnerMobileFormA;
