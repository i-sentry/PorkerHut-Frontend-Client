import React, { useEffect, useState } from "react";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import OrderCart, { IUser } from "../components/order-component/OrderCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppLayout from "../components/utility/AppLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useForm, Controller  } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import {
  useBillingInfo,
  useMyBillingInfo,
  useUpdateBillingInfo,
} from "../services/hooks/payment";
import { useProtectedInfo } from "../store";

import LoginProtectedModal from "../components/auth-component/LoginProtectedModal";
import ReactLoading from "react-loading";
import Ripples from "react-ripples";
import PaymentFailedStatus from "./product-category/PaymentFailedStatus";
import PaymentSuccessPage from "./PaymentSuccessPage";
import { MdKeyboardArrowDown } from "react-icons/md";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  phoneNumber: Yup.string()
    .required("Valid Phone Number is required")
    // .matches(/^[0-9]*$/, "Invalid Phone Number")
    .min(6, "Valid Phone Number must be at least 6 characters")
    .max(15, "Valid Phone Number must not exceed 12 characters"),
});

type ProductDetail = {
  productID: string;
  quantity: number;
  price: number;
  totalPrice: number;
  vendor: string;
  deliveryOption?: string;
  pickupAddress?: string;
};

type BillingInformation = string; // Adjust this type based on the actual structure

export type Order = {
  customer: string;
  productDetails: ProductDetail[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  totalAmount: number;
  billingInformation: BillingInformation;
};

const BillingPage = ({ isMyBilling }: { isMyBilling: boolean }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    reset: resetForm2,
    control: controlForm2,
    getValues: getValuesForm2,
    watch: watchForm2,
    setValue: setValueForm2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState("default");
  const [val, setVal] = useState(false);
  const createBilling = useBillingInfo();
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [billingId, setBillingId] = useState("");
  const storedUser = JSON.parse(localStorage.getItem("user") as string);
  const myBillingInfo = useMyBillingInfo(storedUser?._id);
  const showModay = useProtectedInfo((state) => state.isAuthenticated);
  const setShowModal = useProtectedInfo((state) => state.setIsAuthenticated);
  const tempBilling = JSON.parse(localStorage.getItem("tempBilling") as string);
  const myBillings = myBillingInfo?.data?.data?.billing;
  const defaultBillingInfo = myBillingInfo?.data?.data?.billing.find(
    (info: { isDefault: any }) => info.isDefault === true,
  );
  const upDateInfo = useUpdateBillingInfo(
    (defaultBillingInfo?._id as string) ?? (billingId as string),
  );
  useEffect(() => {
    if (isMyBilling === true) {
      //  debugger;
      setValue("firstName", defaultBillingInfo?.firstName);
      setValue("lastName", defaultBillingInfo?.lastName);
      setValue("email", defaultBillingInfo?.email);
      setValue("phoneNumber", defaultBillingInfo?.phoneNumber);
      setValue("address", defaultBillingInfo?.address || "");
      setValue("country", defaultBillingInfo?.country);
      setValue("state", defaultBillingInfo?.state);
      setValue("city", defaultBillingInfo?.city);
      setValue("isDefault", defaultBillingInfo?.isDefault);

      // FORM 2
      setValueForm2("firstName", "");
      setValueForm2("lastName", "");
      setValueForm2("email", "");
      setValueForm2("phoneNumber", "");
      setValueForm2("address", "");
      setValueForm2("country", "");
      setValueForm2("state", "");
      setValueForm2("city", "");
      setValueForm2("isDefault", "");
    }

    if (tempBilling && defaultBillingInfo === undefined) {
      setValueForm2("firstName", tempBilling?.firstName);
      setValueForm2("lastName", tempBilling?.lastName);
      setValueForm2("email", tempBilling?.email);
      setValueForm2("phoneNumber", tempBilling?.phoneNumber);
      setValueForm2("address", tempBilling?.address || "");
      setValueForm2("country", tempBilling?.country);
      setValueForm2("state", tempBilling?.state);
      setValueForm2("city", tempBilling?.city);
      setValueForm2("isDefault", tempBilling?.isDefault);
    }
  }, [defaultBillingInfo, setValue, isMyBilling, setValueForm2]);

  const onSubmit = (data: any) => {
    if (user) {
      setLoading(true);
      if (defaultBillingInfo) {
        setTemp(true);
        setBillingId(defaultBillingInfo?._id);
        localStorage.removeItem("tempBilling");
      }
    } else {
      setShowModal(true);
      setLoading(false);
      localStorage.setItem("tempBilling", JSON.stringify(getValuesForm2()));
    }
  };

  const handleCreateBilling = (data: any) => {
    if (user) {
      setLoading(true);
      if (data.isDefault === true && defaultBillingInfo) {
        handleUpdateInfo(data);
        localStorage.removeItem("tempBilling");
      }
      createBilling
        .mutateAsync(data)
        .then((res) => {
          setBillingId(res._id);
          reset();
          setTemp(true);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setShowModal(true);
      setLoading(false);
      localStorage.setItem("tempBilling", JSON.stringify(getValuesForm2()));
    }
  };

  const handleUpdateInfo = (data: any) => {
    upDateInfo
      .mutateAsync(data)
      .then((res) => {})
      .catch(() => {});
  };

  useEffect(() => {
    // setTemp(false);
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      //@ts-ignore
      setUser(null);
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const statusParam = searchParams.get("status");
    setStatus(statusParam || "default");
  }, [location.search]);

  if (status === "success") {
    return <PaymentSuccessPage />;
  }
  if (status === "error") {
    return <PaymentFailedStatus />;
  }

  return (
    <AppLayout>
      <LoginProtectedModal
        isOpen={showModay}
        onClose={() => setShowModal(false)}
      />
      <div className="  my-20 min-h-screen bg-[#F5F5F5] xxs:px-4 lg:px-12">
        <div className=" xxs:pt-4 xxs:pb-6 lg:py-6">
          <ProductsBreadCrumbs
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Cart",
                link: "/my-cart",
              },
              {
                name: "Billing",
                link: "/billing",
              },
            ]}
          />
        </div>

        <div className="relative flex  gap-8 pb-10 ">
          <div className=" flex flex-col gap-4 rounded-lg bg-white py-6 xxs:w-full xxs:px-3 lg:w-2/3 lg:px-6 ">
            <h1 className=" mb-4 font-medium text-[#333333] xxs:text-[18px] xxs:leading-[21px] lg:text-[24px] lg:leading-[28px]">
              Billing Informations
            </h1>
            <div className="tabs relative mb-4 flex">
              <Link
                to={"/billing/me"}
                className={`${defaultBillingInfo === undefined ? "hidden" : "flex"} flex-1 items-center justify-center p-4 text-sm font-semibold md:text-lg ${
                  !isMyBilling ? "text-[#333333]" : "text-[#197B30]"
                }`}
              >
                Use Existing Information
              </Link>
              <Link
                to={"/billing"}
                className={`${defaultBillingInfo === undefined ? "justify-start after:absolute after:bottom-0 after:left-0 after:inline-block after:h-1 after:w-[230px] after:bg-green-700" : "justify-center "} relative flex flex-1 items-center  p-1 text-sm font-semibold md:p-4 md:text-lg ${
                  isMyBilling ? "text-[#333333]" : "text-[#197B30]"
                }`}
              >
                Enter New Information
              </Link>
              <div
                className={`indicator ${defaultBillingInfo === undefined && "hidden"} absolute bottom-0 h-[2px] w-1/2 bg-[#197B30] transition-all duration-500 ${
                  isMyBilling ? "left-0" : "left-[50%]"
                } rounded-xl`}
              ></div>
            </div>
            <div className="flex overflow-x-hidden">
              <div
                className={`w-full shrink-0 transition-all duration-1000 ${
                  isMyBilling
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="gap-6 xxs:block lg:flex">
                    <div className=" w-full ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        First Name
                      </label>
                      <input
                        disabled
                        type="text"
                        {...register("firstName")}
                        placeholder="Enter Your First Name"
                        className={`h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30]  ${
                          errors.firstName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <span className="text-sm text-[#dd1313]">
                          {String(errors.firstName?.message)}
                        </span>
                      )}
                    </div>

                    <div className="w-full xxs:mt-3 lg:mt-0">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Last Name
                      </label>
                      <input
                        disabled
                        type="text"
                        {...register("lastName")}
                        placeholder="Enter Your Last Name"
                        className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2]  focus:outline-1 focus:outline-[#197b30] ${
                          errors.lastName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <span className="text-sm text-[#dd1313]">
                          {String(errors.lastName?.message)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className=" input my-3 ">
                    <label
                      className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor=""
                    >
                      Email Address
                    </label>
                    <input
                      disabled
                      type="text"
                      {...register("email")}
                      placeholder="Enter Your Email Address"
                      className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                        errors.email ? "border-[#dd1313]" : ""
                      }`}
                      required
                    />
                    {errors.email && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors.email?.message)}
                      </span>
                    )}
                  </div>

                  <div className="input mb-3">
                    <label
                      className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>

                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          // disabled
                          defaultCountry={"ng"}
                          value={value}
                          onChange={onChange}
                          countrySelectorStyleProps={{
                            buttonClassName: "h-12 border-[#fff_!important]",
                          }}
                          className={`h-12 w-full items-center rounded-lg border border-[#D9D9D9] px-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                            errors.phoneNumber ? "border-[#dd1313]" : ""
                          }`}
                          inputProps={{
                            name: "phoneNumber",
                            id: "phoneNumber",
                          }}
                          inputClassName="flex-grow h-12 border-[#fff_!important] focus:ring-[#fff_!important] focus:border-[#fff_!important] placeholder"
                          inputStyle={{ fontSize: "16px", border: "none" }}
                        />
                      )}
                    />

                    {errors.phoneNumber && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors.phoneNumber.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor=""
                    >
                      Address
                    </label>
                    <input
                      disabled
                      type="text"
                      required
                      {...register("address")}
                      placeholder="Enter Delivery Address"
                      className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                        errors.address ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors.address && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors.address?.message)}
                      </span>
                    )}
                  </div>

                  <div className="input mb-3">
                    <label
                      className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor="country"
                    >
                      Country
                    </label>

                    <Controller
                      control={control}
                      name="country"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <CountryDropdown
                          disabled
                          id="country"
                          value={value}
                          onChange={(val) => {
                            onChange(val);
                            // Clear the state when the country changes
                            reset({ ...getValues(), state: "" });
                          }}
                          classes={`w-full h-12 text-[#333333] border border-[#D9D9D9] pl-5 rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-[#197b30] focus:outline-1  ${
                            errors.country ? "border-[#dd1313]" : ""
                          }`}
                        />
                      )}
                    />
                    {errors.country && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors.country?.message)}
                      </span>
                    )}
                  </div>
                  <div className="input mb-3">
                    <label
                      className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <Controller
                      control={control}
                      name="state"
                      render={({ field: { onChange, value } }) => (
                        <RegionDropdown
                          disabled
                          blankOptionLabel=""
                          defaultOptionLabel="Select State"
                          id="state"
                          country={watch("country")}
                          value={value}
                          onChange={onChange}
                          classes={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                            errors.state ? "border-[#dd1313]" : ""
                          }`}
                        />
                      )}
                    />

                    {errors.state && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors.state?.message)}
                      </span>
                    )}
                  </div>

                  <div className=" mb-3">
                    <h1 className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]">
                      City/Town/Street
                    </h1>
                    <input
                      disabled
                      type="text"
                      required
                      {...register("city")}
                      placeholder="Enter City/Town/Street"
                      className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                        errors.city ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors.city && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors.city?.message)}
                      </span>
                    )}
                  </div>
                  {/* <div className="flex items-center ">
                    <input
                      {...register("isDefault")}
                      type="checkbox"
                      name="isDefault"
                      onChange={(e: any) => {
                        setVal(!val);
                      }}
                      checked={val}
                      className="h-4 w-4 accent-[#197B30] checked:bg-[#197B30]  cursor-pointer rounded"
                    />
                    <label htmlFor="" className="ml-2 text-sm text-slate-500">
                      Should we save this as your default billing information?
                    </label>
                  </div> */}

                  <div className="flex flex-1 flex-col gap-3 rounded-lg pb-4 text-center xxs:py-10 lg:flex-row lg:justify-end lg:rounded-t-none lg:bg-white lg:py-4">
                    <div className="">
                      <button
                        onClick={() => navigate("/products")}
                        className="w-full select-none whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#fff] py-4 text-[16px] font-medium tracking-wider text-[#197B30] lg:inline-block lg:py-3 lg:px-6 lg:text-[14px]"
                      >
                        Continue to Shopping
                      </button>
                    </div>
                    <div>
                      <Ripples
                        className="w-full"
                        color="#f5f5f550"
                        during={2000}
                      >
                        <button
                          type="submit"
                          className="inline-flex w-full select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#197B30] py-4  text-[16px] font-medium tracking-wider text-[#fff] lg:py-3 lg:px-6 lg:text-[14px]"
                        >
                          {loading ? (
                            <svg
                              className="h-5 w-5 animate-spin  text-white"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.2"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                fill="white"
                              />
                              <path
                                d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                                fill="white"
                              />
                            </svg>
                          ) : (
                            "Proceed to Payments"
                          )}
                        </button>
                      </Ripples>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className={` w-full shrink-0 transition-all duration-1000 ${
                  !isMyBilling
                    ? "-translate-x-full opacity-100"
                    : "translate-x-100 opacity-0"
                }`}
              >
                <form onSubmit={handleSubmitForm2(handleCreateBilling)}>
                  <div className="gap-6 xxs:block lg:flex">
                    <div className=" w-full ">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        {...registerForm2("firstName")}
                        placeholder="Enter Your First Name"
                        className={`h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30]  ${
                          errors2.firstName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors2.firstName && (
                        <span className="text-sm text-[#dd1313]">
                          {String(errors2.firstName?.message)}
                        </span>
                      )}
                    </div>

                    <div className="w-full xxs:mt-3 lg:mt-0">
                      <label
                        className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                        htmlFor=""
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...registerForm2("lastName")}
                        placeholder="Enter Your Last Name"
                        className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2]  focus:outline-1 focus:outline-[#197b30] ${
                          errors2.lastName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors2.lastName && (
                        <span className="text-sm text-[#dd1313]">
                          {String(errors2.lastName?.message)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className=" input my-3 ">
                    <label
                      className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor=""
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      {...registerForm2("email")}
                      placeholder="Enter Your Email Address"
                      className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                        errors2.email ? "border-[#dd1313]" : ""
                      }`}
                      required
                    />
                    {errors2.email && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors2.email?.message)}
                      </span>
                    )}
                  </div>

                  <div className="input mb-3">
                    <label
                      className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>

                    <Controller
                      control={controlForm2}
                      name="phoneNumber"
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          defaultCountry={"ng"}
                          value={value}
                          onChange={onChange}
                          countrySelectorStyleProps={{
                            buttonClassName: "h-12 border-[#fff_!important]",
                          }}
                          className={`h-12 w-full items-center rounded-lg border border-[#D9D9D9] px-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                            errors2.phoneNumber ? "border-[#dd1313]" : ""
                          }`}
                          inputProps={{
                            name: "phoneNumber",
                            id: "phoneNumber",
                          }}
                          inputClassName="flex-grow h-12 border-[#fff_!important] focus:ring-[#fff_!important] focus:border-[#fff_!important] placeholder"
                          inputStyle={{ fontSize: "16px", border: "none" }}
                        />
                      )}
                    />

                    {errors2.phoneNumber && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors2.phoneNumber.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor=""
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      {...registerForm2("address")}
                      placeholder="Enter Delivery Address"
                      className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                        errors2.address ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors2.address && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors2.address?.message)}
                      </span>
                    )}
                  </div>

                  <div className="input relative mb-3">
                    <label
                      className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor="country"
                    >
                      Country
                    </label>

                    <Controller
                      control={controlForm2}
                      name="country"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <CountryDropdown
                          id="country"
                          value={value}
                          onChange={(val) => {
                            onChange(val);
                            // Clear the state when the country changes
                            resetForm2({ ...getValuesForm2(), state: "" });
                          }}
                          classes={`w-full h-12 text-[#333333] appearance-none border border-[#D9D9D9] pl-5 rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-[#197b30] focus:outline-1  ${
                            errors2.country ? "border-[#dd1313]" : ""
                          }`}
                        />
                      )}
                    />
                    <span className="pointer-events-none absolute top-[34px] right-3 hidden">
                      <MdKeyboardArrowDown size={24} color="#a2a2a2" />
                    </span>
                    {errors2.country && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors2.country?.message)}
                      </span>
                    )}
                  </div>
                  <div className="input relative mb-3 after:content-[`hello`]">
                    <label
                      className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <Controller
                      control={controlForm2}
                      name="state"
                      render={({ field: { onChange, value } }) => (
                        <RegionDropdown
                          blankOptionLabel=""
                          defaultOptionLabel="Select State"
                          id="state"
                          country={watchForm2("country")}
                          value={value}
                          onChange={onChange}
                          classes={`w-full h-12 text-[#333333] appearance-none border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] defaultOptionLabel:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                            errors2.state ? "border-[#dd1313]" : ""
                          }`}
                        />
                      )}
                    />
                    <span className="pointer-events-none absolute top-[34px] right-3 hidden">
                      <MdKeyboardArrowDown size={24} color="#a2a2a2" />
                    </span>
                    {errors2.state && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors2.state?.message)}
                      </span>
                    )}
                  </div>

                  <div className=" mb-3">
                    <h1 className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]">
                      City/Town/Street
                    </h1>
                    <input
                      type="text"
                      required
                      {...registerForm2("city")}
                      placeholder="Enter City/Town/Street"
                      className={` h-12 w-full rounded-lg border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                        errors2.city ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors2.city && (
                      <span className="text-sm text-[#dd1313]">
                        {String(errors2.city?.message)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center ">
                    <input
                      {...registerForm2("isDefault")}
                      type="checkbox"
                      name="isDefault"
                      onChange={(e: any) => {
                        setVal(!val);
                      }}
                      checked={val}
                      className="h-4 w-4 cursor-pointer rounded checked:bg-[#197B30] checked:hover:bg-[#197B30] focus:border-[#197B30] focus:ring-0 checked:focus:bg-[#197B30]"
                    />
                    {myBillingInfo?.data?.data?.billing.length < 1 ? (
                      <label
                        htmlFor=""
                        className="ml-2 whitespace-nowrap text-xs text-slate-500 md:text-sm"
                      >
                        Should we save this as your default billing information?
                      </label>
                    ) : (
                      <label
                        htmlFor=""
                        className="ml-2 text-xs text-slate-500 md:text-sm"
                      >
                        Should we update your default billing information with
                        details provided?
                      </label>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-lg pb-4 text-center xxs:py-10  lg:flex-row lg:justify-end lg:rounded-t-none lg:bg-white lg:py-4">
                    <div className="w-full">
                      <button
                        onClick={() => navigate("/products")}
                        className="w-full select-none whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#fff] py-4 text-[16px] font-medium tracking-wider text-[#197B30] lg:inline-block lg:py-3 lg:px-6 lg:text-[14px]"
                      >
                        Continue to Shopping
                      </button>
                    </div>
                    <div className="w-full">
                      <Ripples
                        className="w-full"
                        color="#f5f5f550"
                        during={2000}
                      >
                        <button
                          type="submit"
                          className="flex w-full select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#197B30] py-4 text-[16px] font-medium tracking-wider text-[#fff] lg:inline-block lg:py-3 lg:px-6 lg:text-[14px]"
                        >
                          {loading ? (
                            <svg
                              className="h-5 w-5 animate-spin text-white"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.2"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                fill="white"
                              />
                              <path
                                d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                                fill="white"
                              />
                            </svg>
                          ) : (
                            " Proceed to Payments"
                          )}
                        </button>
                      </Ripples>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/3 xxs:hidden lg:block">
            <OrderCart
              temp={temp}
              setLoading={setLoading}
              billingId={defaultBillingInfo?._id ?? (billingId as string)}
              //@ts-ignore
              user={user}
              setTemp={setTemp}
            />
          </div>
        </div>
        {/* <div className="flex-1 flex-col gap-3 rounded-lg text-center xxs:hidden xxs:pb-10 lg:hidden lg:flex-row lg:justify-end lg:rounded-t-none lg:bg-white lg:py-4 ">
          <div>
            <button
              onClick={() => handleSubmit(onSubmit)}
              type="submit"
              className="w-full select-none whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#197B30] py-4 text-[16px] font-medium tracking-wider text-[#fff] lg:inline-block lg:py-3 lg:px-6 lg:text-[14px]"
            >
              {loading ? (
                <div className="mx-auto flex items-center justify-center">
                  <ReactLoading
                    type={"spin"}
                    color={"#fff"}
                    height={"5%"}
                    width={"5%"}
                  />
                </div>
              ) : (
                " Proceed to Payments mob"
              )}
            </button>
          </div>
          <div className="">
            <Ripples className="w-full" color="#197b307a" during={2000}>
              <button
                onClick={() => navigate("/products")}
                className="w-full select-none whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#fff] py-4 text-[16px] font-medium tracking-wider text-[#197B30] lg:inline-block lg:py-3 lg:px-6 lg:text-[14px]"
              >
                Continue to Shopping
              </button>
            </Ripples>
          </div>
        </div> */}
      </div>
    </AppLayout>
  );
};

export default BillingPage;
