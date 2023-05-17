import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { BiShieldQuarter } from "react-icons/bi";
import { FiCamera, FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { RxBell } from "react-icons/rx";
import { TfiLock } from "react-icons/tfi";
import SellersNotificationTable from "../../components/sellers-order-page-component/SellersNotificationTable";
import MobileTabs from "../tabs/MobileTabs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormData = {
  fullName: string;
  email: string;
  storeName: string;
  storeId: number;
  streetAddress: string;
  location: string;
  phoneNumber: string;
};

function SettingssTab() {
  const [tab, setTab] = useState(1);
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [eyeState3, setEyeState3] = useState(false);

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = (tabIndex: SetStateAction<number>) => {
    setTab(tabIndex);
  };

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState("");
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    storeName: Yup.string()
      .required("Store Name is required")
      .min(6, "Username must be at least 6 characters")
      .max(50, "Username must not exceed 50 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string().required("Address is required"),
    storeId: Yup.string().required("Store ID is required"),

    streetAddress: Yup.string().required("Street Address is required"),

    location: Yup.string().required("Location is required"),

    phoneNumber: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(12, "Valid Phone Number must not exceed 12 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  console.log({ errors });

  const onSubmit = (data: FormData) => {
    data.phoneNumber = phoneNumber;

    data.email = email;
    data.storeName = storeName;

    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <>
      <div className=" flex mb-32 flex-col justify-center md:block xxs:hidden ">
      <div className="flex  flex-col gap-2 mb-8">
          <h1 className="text-[36px] leading-[42px] font-medium">Settings</h1>
          <span className="text-[#A2A2A2] text-[16px] leading-[18.75px] font-normal">
            All information available.
          </span>
        </div>
        <section className=" space-y-1 bg-[#F4F4F4]  rounded-[4px]">
          <div className=" flex flex-row items-stretch justify-between w-full">
            <div className="flex flex-col justify-start w-1/4 space-y-2 md:border-r md:border-gray-400 p-4">
              <button
                onClick={() => handleClick(1)}
                className={` py-2 text-base ${
                  tab === 1 ? "z-20 text-[#197B30] " : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <MdOutlinePerson size={24} />
                  <span className="text-[16px] leading-[18.75px] font-normal">
                    Account Information
                  </span>
                </div>
              </button>
              <a
                href="#"
                onClick={() => handleClick(2)}
                className={` py-2 text-base ${
                  tab === 2 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <BiShieldQuarter size={24} />

                  <span className="text-[16px] leading-[18.75px] font-normal">
                    Quality Control
                  </span>
                </div>
              </a>
              <a
                href="#"
                onClick={() => handleClick(3)}
                className={` py-2 text-base ${
                  tab === 3 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <RxBell size={24} />
                  <span className="text-[16px] leading-[18.75px] font-normal">
                    Notification
                  </span>
                </div>
              </a>
              <a
                href="#"
                onClick={() => handleClick(4)}
                className={` py-2 ${
                  tab === 4 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <TfiLock size={24} />
                  <span className="text-[16px] leading-[18.75px] font-normal">
                    Change Password
                  </span>
                </div>
              </a>
            </div>

            <div className="w-3/4 pt-6 pl-10 pr-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-2-2 "
                style={{ display: tab === 1 ? "block" : "none" }}
              >
                <div className="m-auto">
                  <div className="w-16 h-16 flex items-center justify-center border border-black rounded-full">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="uploaded image"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        className="w-28 h-28 rounded-full cursor-pointer"
                      />
                    ) : (
                      <>
                        <label htmlFor="file" className="">
                          <FiCamera size={20} className="text-gray-400" />
                          <span className=" cursor-pointer  my-auto text-[#197B30]"></span>{" "}
                        </label>

                        <input
                          id="file"
                          type="file"
                          name="file"
                          onClick={handleImage}
                          className=" hidden appearance-none outline-none text-sm "
                        />
                      </>
                    )}
                  </div>
                </div>

                <h3
                  className=" text-[24px] leading-[28px]  text-[#333333] pt-2 font-semibold"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  John Doe
                </h3>
                <label
                  htmlFor="file"
                  className="text-sm flex items-center gap-2 text-right"
                >
                  <FiCamera className="text-[#197B30]" />
                  <span className=" cursor-pointer  my-auto text-[#197B30] text-[14px] leading-[16px] py-4 font-medium">
                    Change profile picture
                  </span>{" "}
                </label>

                <div
                  className="flex flex-col gap-4"
                  style={{
                    transitionDelay: "0.2s",
                    transition: "opacity 0 0.5s ease-in",
                  }}
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" w-full ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        FullName
                      </label>
                      <input
                        type="text"
                        {...register("fullName")}
                        placeholder="Enter Your Full Name"
                        className={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1  ${
                          errors.fullName ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.fullName?.message}
                      </div>
                    </div>

                    <div className="w-full xxs:mt-3 md:mt-0">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Store Name
                      </label>
                      <input
                        type="text"
                        {...register("storeName")}
                        placeholder="Enter Your Last Name"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5  focus:outline-[#197b30] focus:outline-1 ${
                          errors.storeName ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.storeName?.message}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" input my-1 ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        {...register("email")}
                        placeholder="Enter Your Email Address"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                          errors.email ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.email?.message}
                      </div>
                    </div>

                    <div className=" input my-1 ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Store ID
                      </label>
                      <input
                        type="number"
                        {...register("storeId")}
                        placeholder="Enter Store ID"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                          errors.storeId ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.storeId?.message}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" input my-1 ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        {...register("streetAddress")}
                        placeholder="Enter Street Address"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                          errors.streetAddress ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.streetAddress?.message}
                      </div>
                    </div>

                    <div className=" input my-1 ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        {...register("location")}
                        placeholder="Enter Location"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                          errors.location ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.location?.message}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="mb-3 input">
                      <label
                        className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor="phonenumber"
                      >
                        Phone Number
                      </label>
                      <PhoneInput
                        country={"ng"}
                        value={phoneNumber}
                        // {...register("phonenumber")}
                        onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                        inputProps={{
                          name: "phonenumber",

                          id: "phonenumber",
                          className: `w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-12 focus:outline-[#197b30] focus:outline-1 ${
                            errors.phoneNumber ? "border-[#dd1313]" : ""
                          }`,
                        }}
                      />
                      <div className="text-[#dd1313] text-sm">
                        {errors.phoneNumber?.message}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 pt-3 pb-8">
                    <button
                      type="submit"
                      className="border border-[#F91919]  text-[#F91919] h-12 px-[16px] rounded text-[14px] leading-[16px] font-semibold"
                    >
                      Delete Account{" "}
                    </button>
                    <button
                      type="submit"
                      className="bg-[#197B30] text-white h-12 px-[16px] rounded text-[14px] leading-[16px]  font-semibold"
                    >
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </form>
              <div
                className=""
                style={{ display: tab === 2 ? "block" : "none" }}
              >
                <h3
                  className="text-[24px] leading-[28px] font-medium flex items-center justify-center"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  What is Quality Check?
                </h3>
                <div className="flex items-center justify-center">
                  <div className=" block h-1 w-20 bg-[#197B30]"></div>
                </div>
                <div className="px-[20px] pt-[24px] pb-[80px]">
                  <p className="text-left text-[16px] leading-[19px] font-normal">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum magnam quam beatae quo recusandae optio commodi
                    totam doloribus, nihil, laudantium itaque error reiciendis
                    quidem. Provident optio excepturi laborum quis quidem, rem
                    maiores accusamus voluptas amet sequi itaque culpa enim
                    consequuntur architecto cupiditate nesciunt reiciendis eum,
                    veniam laudantium, minus quaerat quod? Excepturi, aut nisi
                    consequuntur vel ut consequatur natus accusamus magni. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt
                    impedit nostrum, obcaecati accusantium dicta deserunt
                    perspiciatis, quas cupiditate corrupti veritatis maiores
                    culpa commodi ab cum debitis hic? Corporis sint harum magni
                    eaque officiis nobis repudiandae praesentium eum facilis,
                    eveniet, omnis nulla labore dignissimos obcaecati
                    voluptatibus cumque quibusdam illo fugiat sequi molestias
                    reprehenderit rerum! Repudiandae at cum quibusdam nostrum
                    voluptate optio, vero eius magnam adipisci cupiditate nobis
                    esse labore rerum perspiciatis quas fugiat excepturi enim,
                    obcaecati voluptas aspernatur, molestiae ratione
                    reprehenderit maxime facilis. Ut consequatur beatae
                    blanditiis eos asperiores consectetur reiciendis cupiditate
                    dolores odit! Alias beatae voluptatem quibusdam omnis
                    accusantium in.
                  </p>
                </div>
              </div>
              <div
                className="space-y-6"
                style={{ display: tab === 3 ? "block" : "none" }}
              >
                <div
                  className="text-xl font-bold leading-tight py-4"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  <SellersNotificationTable />
                </div>
              </div>
              <div
                className="space-y-3 mb-6"
                style={{ display: tab === 4 ? "block" : "none" }}
              >
                <div className="mb-3">
                  <h1 className="text-[20px] leading-[28px] font-medium text-[#333333]">
                    Change Password
                  </h1>
                  {/* <span className="text-[#A2A2A2] text-sm font-light">
                All information available.
              </span> */}
                </div>
                <div className="w-[60%] my-4">
                  <div className="w-full ">
                    <div className="mt-2 relative">
                      <label
                        htmlFor=""
                        className="text-[14px] leading-[16px] font-normal"
                      >
                        Old password
                      </label>
                      <input
                        autoComplete="on"
                        type={eyeState2 ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        id="password"
                        className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]

                    `}
                      />
                      <button
                        className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                        onClick={toggleConfirmEye}
                      >
                        {eyeState2 ? (
                          <FiEye size={20} />
                        ) : (
                          <FiEyeOff size={20} />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 relative">
                      <label
                        htmlFor=""
                        className="text-[14px] leading-[16px] font-normal"
                      >
                        New Password
                      </label>
                      <input
                        // {...register("confirmPassword", {
                        //   required: true,
                        //   validate: (value) =>
                        //     value === passwordref.current ||
                        //     "The passwords do not match",
                        // })}
                        type={eyeState ? "text" : "password"}
                        name="confirmPassword"
                        autoComplete="on"
                        placeholder="**********"
                        id="confirmPassword"
                        className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]`}
                      />
                      <button
                        className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                        onClick={toggleEye}
                      >
                        {eyeState ? (
                          <FiEye size={20} />
                        ) : (
                          <FiEyeOff size={20} />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 relative">
                      <label
                        htmlFor=""
                        className="text-[14px] leading-[16px] font-normal"
                      >
                        Repeat Password
                      </label>
                      <input
                        // {...register("confirmPassword", {
                        //   required: true,
                        //   validate: (value) =>
                        //     value === passwordref.current ||
                        //     "The passwords do not match",
                        // })}
                        type={eyeState3 ? "text" : "password"}
                        name="confirmPassword"
                        autoComplete="on"
                        placeholder="**********"
                        id="confirmPassword"
                        className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]`}
                      />
                      <button
                        className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                        onClick={toggleEye}
                      >
                        {eyeState ? (
                          <FiEye size={20} />
                        ) : (
                          <FiEyeOff size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-[#A2A2A2] py-2  text-justify">
                    <p className="text-justify text-[14px] leading-[16px] font-normal font-light">
                      {" "}
                      The password should be at least 8 characters long. it must{" "}
                      <br />
                      contain upper and lower case characters and at least one
                      number.
                    </p>
                  </div>
                  <div className="flex justify-start ">
                    <button className="px-6 py-3 text-[14px] leading-[16px] font-semibold font-light bg-[#197B30] text-white rounded">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="md:hidden xxs:block ">
        <MobileTabs />
      </div>
    </>
  );
}

export default SettingssTab;
