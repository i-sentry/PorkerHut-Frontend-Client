import React, { useState, useContext } from "react";
import CustomSelect from "../components/utility/CustomSelect";
import { sellersShopInfo, sellersformData } from "../utils/formData";
import { Link } from "react-router-dom";
import StepperController from "../components/sellers-onboarding/StepperController";
import { ISellerInfo, useAppState } from "../context/SellerInfoContext";
import { SellersStepsContext } from "../context/SellersStepsContext";
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

const LogisticPartnerMobileFormB: React.FC = () => {
  const [businessDocUrl, setBusinessDocUrl] = useState<IFile[]>();
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);

  // const getBusinessDocFromInput = (files: File[]) => {
  //   // setBusinessDocUrl(files);
  // };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
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
  console.log(phoneNumber);
  console.log(state);
  console.log(country);

  console.log({ errors });
  const onSubmit = (data: UserBillingInfo) => {
    data.phone = phoneNumber;
    data.country = country;
    data.state = state;
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  const handleChange = (e: any) => {
    // console.log(e)
    const { name, value, checked } = e.target;
    console.log(name);
    console.log(value);
    // setUserData({
    //   ...userData,
    //   [name]: value,
    //   // value[entity_type]: dropOption?.value,
    // });
    // isFormFilled();
    // setValue("checkbox", checked ? "yes" : "no");
    // setVal(!val);
    // setUserData({ ...userData, [name]: value, val });
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <div className="bg-[#197B30] md:h-[275px] md:my-[80px] md:mx-20 xxs:my-[61px]">
        <div className="p-10">
          <h1 className="text-[20px] leading-[23px] md:text-[40px] md:leading-[47px] font-medium text-[#FFFFFF] flex items-center justify-center pb-4">
            Join our Logistic Team
          </h1>
          <p className="text-[14px] leading-[16px] flex items-center justify-center md:text-[16px] md:leading-[19px] font-medium text-[#FFFFFF] ">
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
          <div className="max-w-[680px] md:mx-auto min-h-[600px] py-[20px] md:px-[40px] px-[16px] mx-[16px] bg-[#F4F4F4] rounded-md">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor `}
                  >
                    Company Rc Number
                  </label>
                  <input
                    type="number"
                    {...register("companyRc")}
                    placeholder="Enter your rc number"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30] mb-1 sm:text-sm ${"border-ErrorBorder"} ${
                      errors.companyRc ? "border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-[#dd1313] text-sm">
                    {errors.companyRc?.message}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal ">
                    We need your company registration number.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>

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
                    // style={{
                    //   backgroundColor: "blue",
                    //   color: "white",
                    //   fontSize: 20,
                    //   borderColor:
                    // }}
                    onChange={(val) => setCountry(val)}
                    classes={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                      errors.country ? "border-[#dd1313]" : ""
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
                    blankOptionLabel=""
                    defaultOptionLabel="Select State"
                    id="state"
                    country={country}
                    value={state}
                    onChange={(val) => setState(val)}
                    classes={`w-full px-[14px] py-[15px] text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                      errors.state ? "border-[#dd1313]" : ""
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
                    {...register("city")}
                    placeholder="Enter city/town"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.city ? "border-[#dd1313]" : ""
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
                    {...register("yearOfOperation")}
                    placeholder="Number of years"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.yearOfOperation ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.yearOfOperation?.message}
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
                    {...register("typeOfVet")}
                    placeholder="Enter the type of vet you are"
                    className={` relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-gray-500 text-gray-900 rounded-md focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.typeOfVet ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.typeOfVet?.message}
                  </div>
                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>

                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor ${"after:content-['*'] after:ml-0.5 after:text-red-500"} }`}
                  >
                    Upload a copy of Vet License
                  </label>
                  {/* <CustomDND
                    getFiles={getBusinessDocFromInput}
                    inputId={"uuudd"} componentFiles={[]} filenames={[]}                  /> */}

                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal"></span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-3 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor  `}
                  >
                    Additional Document.
                  </label>
                  {/* <CustomDND
                    getFiles={getBusinessDocFromInput}
                    inputId={"uuudd"} componentFiles={[]} filenames={[]}                  /> */}

                  <span className="text-[#797979] text-[14px] leading-[24px] font-normal">
                    Documents allowed are images and PDF files.
                  </span>
                  <p className="my-2 text-[red] text-xs"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`block text-[16px] mb-[6px] text-HeadingColor  `}
                  >
                    About You
                  </label>
                  <textarea
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
                    onChange={handleChange}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticPartnerMobileFormB;
