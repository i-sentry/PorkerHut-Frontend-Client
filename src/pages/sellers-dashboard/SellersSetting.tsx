import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiShieldQuarter } from "react-icons/bi";
import { FiCamera, FiEye, FiEyeOff } from "react-icons/fi";
import {
  MdOutlineEnhancedEncryption,
  MdOutlineNotifications,
  MdOutlinePerson,
} from "react-icons/md";
// import { RxBell } from "react-icons/rx";
// import { TfiLock } from "react-icons/tfi";
import SellersNotificationTable from "../../components/vendors-component/SellersNotificationTable";
import MobileTabs from "../tabs/MobileTabs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";

type FormData = {
  fullName: string;
  email: string;
  storeName: string;
  storeId: string;
  streetAddress: string;
  location: string;
  phoneNumber: string;
  address: string;
};

function SettingssTab() {
  const [vendor, setVendor] = useState<any>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [eyeState3] = useState(false);

  const [, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const tab = searchParams.get("tab") || "account";

  const handleClick = (tabName: string) => {
    setSearchParams({ tab: tabName });
    //setTab(tabIndex);
  };

  //  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
  //    const file = e.target.files && e.target.files[0];
  //    if (file) {
  //      setImage(file);
  //      setImageUrl(URL.createObjectURL(file));
  //    }
  //    handleImage(e, img);
  //  };

  const handleImage = (e: any) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      console.log(file, "file");
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
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

  // const [email] = useState("");
  // const [storeName] = useState("");
  useEffect(() => {
    //@ts-ignore
    const storedVendor = JSON.parse(localStorage.getItem("vendor"));

    if (storedVendor !== null) {
      setVendor(storedVendor);
    }
  }, []);

  console.log(vendor);
  const vendorName = vendor?.vendor?.businessInformation?.businessOwnerName;
  // const accountOwnersName =
  //   vendor?.vendor?.sellerAccountInformation?.accountOwnersName;
  const phone = vendor?.vendor?.sellerAccountInformation.phoneNumber;
  const storeEmail = vendor?.vendor?.sellerAccountInformation.email;
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    storeName: Yup.string()
      .required("Store Name is required")
      .min(6, "Store Name must be at least 6 characters")
      .max(50, "Store Name must not exceed 50 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    storeId: Yup.string().required("Store ID is required"),
    streetAddress: Yup.string().required("Street Address is required"),
    location: Yup.string().required("Location is required"),
    phoneNumber: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(14, "Valid Phone Number must not exceed 14 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: vendor?.vendor?.businessInformation?.businessOwnerName || "",
      storeName: vendor?.vendor?.sellerAccountInformation.shopName || "",
      email: vendor?.vendor?.sellerAccountInformation.email || "",
      storeId: vendor?.vendor?._id || "",
      streetAddress: vendor?.vendor?.businessInformation.address1 || "",
      location: vendor?.vendor?.businessInformation.city || "",
      phoneNumber: vendor?.vendor?.sellerAccountInformation.phoneNumber || "",
    },
  });

  useEffect(() => {
    if (vendor) {
      reset({
        fullName: vendor?.vendor?.businessInformation?.businessOwnerName || "",
        storeName: vendor?.vendor?.sellerAccountInformation.shopName || "",
        email: vendor?.vendor?.sellerAccountInformation.email || "",
        storeId: vendor?.vendor?._id || "",
        streetAddress: vendor?.vendor?.businessInformation.address1 || "",
        location: vendor?.vendor?.businessInformation.city || "",
        phoneNumber: vendor?.vendor?.sellerAccountInformation.phoneNumber || "",
      });
    }
  }, [reset, vendor]);

  // console.log({ errors });

  const onSubmit = (data: FormData) => {
    // data.phoneNumber = phoneNumber;

    // data.email = email;
    // data.storeName = storeName;
    console.log(data.storeName);
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <>
      <div className=" mb-20 flex flex-col justify-center xxs:hidden md:block ">
        <div className="mb-8  flex flex-col gap-2">
          <h1 className="font-medium text-[#1F1F1F] xxs:text-[20px] xxs:leading-[23px] md:text-[36px] md:leading-[42px]">
            Settings
          </h1>
          <span className="mt-1 font-normal text-[#A2A2A2] xxs:text-[14px] xxs:leading-[16px] md:text-[16px] md:leading-[18.75px]">
            All information's available.
          </span>
        </div>
        <section className=" space-y-1 rounded-[4px]  bg-[#F4F4F4]">
          <div className=" flex w-full flex-row flex-wrap items-stretch justify-center xl:items-stretch xl:justify-between">
            <div className="overflow-hidden px-8 lg:px-0 xl:h-full xl:w-1/4 xl:overflow-visible xl:px-4">
              <div className="hide-scroll-bar flex  justify-start gap-4 overflow-x-auto py-4 md:w-full md:flex-row md:items-center md:border-gray-400 lg:items-start xl:h-screen xl:flex-col xl:space-y-2 xl:overflow-visible xl:border-r">
                <button
                  onClick={() => handleClick("account")}
                  className={` cursor-pointer py-2 md:rounded md:bg-[#ffffff] md:px-3 xl:rounded-none xl:bg-transparent xl:px-0  ${
                    tab === "account" ? " text-[#197B30] " : "text-[#797979]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdOutlinePerson size={24} />
                    <span className="whitespace-nowrap text-[16px] font-normal leading-[19px] ">
                      Account Information
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => handleClick("quality-control")}
                  className={` cursor-pointer py-2 md:rounded md:bg-[#ffffff] md:px-3 xl:rounded-none xl:bg-transparent xl:px-0 ${
                    tab === "quality-control"
                      ? " text-[#197B30]"
                      : "text-[#797979]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BiShieldQuarter size={24} />

                    <span className="whitespace-nowrap text-[16px] font-normal leading-[19px] ">
                      Quality Control
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => handleClick("notification")}
                  className={` cursor-pointer py-2 md:rounded md:bg-[#ffffff] md:px-3 xl:rounded-none xl:bg-transparent xl:px-0 ${
                    tab === "notification"
                      ? "z-20 text-[#197B30]"
                      : "text-[#797979]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdOutlineNotifications size={24} />
                    <span className="whitespace-nowrap text-[16px] font-normal leading-[19px] ">
                      Notification
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => handleClick("change-password")}
                  className={` cursor-pointer py-2 md:rounded md:bg-[#ffffff] md:px-3 xl:rounded-none xl:bg-transparent xl:px-0 ${
                    tab === "change-password"
                      ? "z-20 text-[#197B30]"
                      : "text-[#797979]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdOutlineEnhancedEncryption size={24} />
                    <span className="whitespace-nowrap text-[16px] font-normal leading-[19px] ">
                      Change Password
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="px-8 pt-6 md:w-full xl:w-3/4 xl:px-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-2-2 "
                style={{ display: tab === "account" ? "block" : "none" }}
              >
                <div className="m-auto">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-black">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="uploaded"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        className="h-28 w-28 cursor-pointer rounded-full object-cover"
                      />
                    ) : (
                      <>
                        <label htmlFor="file" className="">
                          <FiCamera size={20} className="text-gray-400" />
                          <span className=" my-auto  cursor-pointer text-[#197B30]"></span>{" "}
                        </label>

                        <input
                          id="file"
                          type="file"
                          name="file"
                          onClick={handleImage}
                          className=" hidden appearance-none text-sm outline-none "
                        />
                      </>
                    )}
                  </div>
                </div>

                <h3
                  className=" pt-2 text-[24px]  font-semibold leading-[28px] text-[#333333]"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  {vendorName}
                </h3>
                <label
                  htmlFor="file"
                  className="flex items-center gap-2 text-right text-sm"
                >
                  <FiCamera className="text-[#197B30]" />
                  <span className=" my-auto  cursor-pointer py-4 text-[14px] font-medium leading-[16px] text-[#197B30]">
                    Change profile picture
                  </span>{" "}
                </label>

                <div
                  className="mt-8 flex flex-col gap-4"
                  style={{
                    transitionDelay: "0.2s",
                    transition: "opacity 0 0.5s ease-in",
                  }}
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" w-full ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor="fullName"
                      >
                        FullName
                      </label>
                      <input
                        type="text"
                        {...register("fullName")}
                        placeholder="Enter Your Full Name"
                        className={`h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30]  ${
                          errors.fullName ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-sm text-[#dd1313]">
                        {errors.fullName?.message}
                      </div>
                    </div>

                    <div className="w-full xxs:mt-3 md:mt-0">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Store Name
                      </label>
                      <input
                        type="text"
                        {...register("storeName")}
                        placeholder="Enter Your Store Name"
                        className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2]  focus:outline-1 focus:outline-[#197b30] ${
                          errors.storeName ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-sm text-[#dd1313]">
                        {errors.storeName?.message}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" input my-1 ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter Your Email Address"
                        className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                          errors.email ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-sm lowercase text-[#dd1313]">
                        {errors.email?.message}
                      </div>
                    </div>

                    <div className=" input my-1 ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Store ID
                      </label>
                      <input
                        type="text"
                        disabled
                        {...register("storeId")}
                        placeholder="Enter Store ID"
                        className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                          errors.storeId ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-sm text-[#dd1313]">
                        {errors.storeId?.message}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className=" input my-1 ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        {...register("streetAddress")}
                        placeholder="Enter Street Address"
                        className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 capitalize text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                          errors.streetAddress ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-sm text-[#dd1313]">
                        {errors.streetAddress?.message}
                      </div>
                    </div>

                    <div className=" input my-1 ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        {...register("location")}
                        placeholder="Enter Location"
                        className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                          errors.location ? "border-[#dd1313]" : ""
                        }`}
                      />
                      <div className="text-sm text-[#dd1313]">
                        {errors.location?.message}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="input mb-3">
                      <label
                        className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor="phonenumber"
                      >
                        Phone Number
                      </label>
                      <PhoneInput
                        country={"ng"}
                        value={phoneNumber || phone}
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
                      <div className="text-sm text-[#dd1313]">
                        {errors.phoneNumber?.message}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 pt-3 pb-8">
                    <button
                      type="submit"
                      className="h-12 rounded  border border-[#F91919] px-[16px] text-[14px] font-semibold leading-[16px] text-[#F91919]"
                    >
                      Delete Account{" "}
                    </button>
                    <button
                      type="submit"
                      className="h-12 rounded bg-[#197B30] px-[16px] text-[14px] font-semibold leading-[16px]  text-white"
                    >
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </form>
              <div
                className=""
                style={{
                  display: tab === "quality-control" ? "block" : "none",
                }}
              >
                <h3
                  className="flex items-center justify-center text-[24px] font-medium leading-[28px]"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  What is Quality Check?
                </h3>
                <div className="mt-2 flex items-center justify-center">
                  <div className=" block h-1 w-20 bg-[#197B30]"></div>
                </div>
                <div className="px-[20px] pt-[24px] pb-[80px]">
                  <p className="text-left text-[16px] font-normal leading-[150%]">
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
                style={{ display: tab === "notification" ? "block" : "none" }}
              >
                <div
                  className="py-4 text-xl font-bold leading-tight"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  <SellersNotificationTable storeEmail={storeEmail} />
                </div>
              </div>
              <div
                className="mb-6 space-y-3"
                style={{
                  display: tab === "change-password" ? "block" : "none",
                }}
              >
                <div className="mb-3">
                  <h1 className="text-[20px] font-medium leading-[28px] text-[#333333]">
                    Change Password
                  </h1>
                  {/* <span className="text-[#A2A2A2] text-sm font-light">
                All information available.
              </span> */}
                </div>
                <div className="my-4 w-full xl:w-[60%]">
                  <div className="w-full ">
                    <div className="relative mt-2">
                      <label
                        htmlFor=""
                        className="text-[14px] font-normal leading-[16px]"
                      >
                        Old password
                      </label>
                      <input
                        autoComplete="on"
                        type={eyeState2 ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        id="password"
                        className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 py-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]

                    `}
                      />
                      <button
                        className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                        onClick={toggleConfirmEye}
                      >
                        {eyeState2 ? (
                          <FiEye size={20} />
                        ) : (
                          <FiEyeOff size={20} />
                        )}
                      </button>
                    </div>
                    <div className="relative mt-2">
                      <label
                        htmlFor=""
                        className="text-[14px] font-normal leading-[16px]"
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
                        className={`mt-1 w-full appearance-none rounded border border-[#EEEEEE] p-3 py-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]`}
                      />
                      <button
                        className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                        onClick={toggleEye}
                      >
                        {eyeState ? (
                          <FiEye size={20} />
                        ) : (
                          <FiEyeOff size={20} />
                        )}
                      </button>
                    </div>
                    <div className="relative mt-2">
                      <label
                        htmlFor=""
                        className="text-[14px] font-normal leading-[16px]"
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
                        className={`mt-1 w-full appearance-none rounded border border-[#EEEEEE] p-3 py-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]`}
                      />
                      <button
                        className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
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
                  <div className="py-2 text-justify text-sm  text-[#A2A2A2]">
                    <p className="text-justify text-[14px] font-normal leading-[16px] ">
                      {" "}
                      The password should be at least 8 characters long. it must{" "}
                      <br />
                      contain upper and lower case characters and at least one
                      number.
                    </p>
                  </div>
                  <div className="mt-5 flex justify-start">
                    <button className="rounded bg-[#197B30] px-6 py-3 text-[14px]  font-semibold leading-[16px] text-white">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="xxs:block md:hidden ">
        <MobileTabs />
      </div>
      {/* <Snackbar message="successfull  "/> */}
    </>
  );
}

export default SettingssTab;
