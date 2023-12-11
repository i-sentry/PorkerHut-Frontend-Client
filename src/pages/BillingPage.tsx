import React, { useEffect, useState } from "react";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import OrderCart, { IUser } from "../components/order-component/OrderCart";
import { Link, useNavigate } from "react-router-dom";
import AppLayout from "../components/utility/AppLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useForm, Controller  } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import {
  useBillingInfo,
  useMakePayment,
  useMyBillingInfo,
  useUpdateBillingInfo,
} from "../services/hooks/payment";
import { useCartTotalAmount, useProtectedInfo } from "../store";

import LoginProtectedModal from "../components/auth-component/LoginProtectedModal";
import ReactLoading from "react-loading";
import { ImSpinner6 } from "react-icons/im";
import Ripples from "react-ripples";
import { useCreateOrder } from "../services/hooks/orders";

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
    .matches(/^[0-9]*$/, "Invalid Phone Number")
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
  const navigate = useNavigate();
  const makePayment = useMakePayment();
  const [val, setVal] = useState(false);
  const cartTotal = useCartTotalAmount((state) => state.cartTotal);
  const createBilling = useBillingInfo();
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [billingId, setBillingId] = useState("");
  const myBillingInfo = useMyBillingInfo();
  const showModay = useProtectedInfo((state) => state.isAuthenticated);
  const setShowModal = useProtectedInfo((state) => state.setIsAuthenticated);

  console.log(myBillingInfo?.data?.billing, "myBillingInfo");

  const defaultBillingInfo = myBillingInfo?.data?.billing.find(
    (info: { isDefault: any }) => info.isDefault === true
  );
  const upDateInfo = useUpdateBillingInfo(
    (defaultBillingInfo?._id as string) ?? (billingId as string)
  );
  // Use defaultBillingInfo to set default values for the form
  useEffect(() => {
    if (isMyBilling === true) {
      //  debugger;
      setValue("firstName", defaultBillingInfo?.firstName);
      setValue("lastName", defaultBillingInfo?.lastName);
      setValue("email", defaultBillingInfo?.email);
      setValue("phoneNumber", defaultBillingInfo?.phoneNumber);
      setValue("address", defaultBillingInfo?.address || ""); // Note: address is optional in the interface
      setValue("country", defaultBillingInfo?.country);
      setValue("state", defaultBillingInfo?.state);
      setValue("city", defaultBillingInfo?.city);
      setValue("isDefault", defaultBillingInfo?.isDefault);
    }
  }, [defaultBillingInfo, setValue, isMyBilling]);

  console.log(isMyBilling, "isMyBilling");

  const onSubmit = (data: any) => {
    if (user) {
      setLoading(true);
      if (defaultBillingInfo) {
        setTemp(true);
        setBillingId(defaultBillingInfo?._id);
      }
    } else {
      setShowModal(true);
      setLoading(false);
    }
  };
  const handleCreateBilling = (data: any) => {
    if (user) {
      setLoading(true);
      if (data.isDefault === true && defaultBillingInfo) {
        handleUpdateInfo(data);
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
    }
  };

  const handleUpdateInfo = (data: any) => {
    upDateInfo
      .mutateAsync(data)
      .then((res) => {
        console.log(res, "update");
      })
      .catch(() => {});
  };

  useEffect(() => {
    // setTemp(false);
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      //@ts-ignore
      setUser(null);
    }
  }, []);

  console.log(user, "user");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex flex-col  items-center justify-center h-screen bg-[#A2A2A2] ">
  //       <span className="animate-spin">
  //         <ImSpinner6 size={30} />
  //       </span>
  //       Please wait..
  //     </div>
  //   );
  // }

  return (
    <AppLayout>
      <LoginProtectedModal
        isOpen={showModay}
        onClose={() => setShowModal(false)}
      />
      <div className="  bg-[#F5F5F5] min-h-screen my-20 lg:px-12 xxs:px-4">
        <div className=" lg:py-6 xxs:pt-4 xxs:pb-6">
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

        <div className="flex gap-8  pb-10 relative ">
          <div className=" lg:w-2/3 xxs:w-full bg-white lg:px-6 xxs:px-3 flex flex-col gap-4 py-6 rounded-lg">
            <h1 className=" lg:text-[24px] lg:leading-[28px] text-[#333333] font-medium xxs:text-[18px] xxs:leading-[21px] mb-4">
              Billing Information
            </h1>
            <div className="tabs flex relative mb-4">
              <Link
                to={"/billing/me"}
                className={`flex items-center justify-center text-sm md:text-lg font-semibold flex-1 p-4 ${
                  !isMyBilling ? "text-[#333333]" : "text-[#197B30]"
                }`}
              >
                Use Existing Information
              </Link>
              <Link
                to={"/billing"}
                className={`flex items-center justify-center text-sm  md:text-lg font-semibold flex-1 p-1 md:p-4 ${
                  isMyBilling ? "text-[#333333]" : "text-[#197B30]"
                }`}
              >
                Enter New Information
              </Link>
              <div
                className={`indicator h-[2px] w-1/2 bg-[#197B30] transition-all duration-500 absolute bottom-0 ${
                  isMyBilling ? "left-0" : "left-[50%]"
                } rounded-xl`}
              ></div>
            </div>
            <div className="flex ">
              <div
                className={`w-full transition-all duration-1000 shrink-0 ${
                  isMyBilling
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="lg:flex xxs:block gap-6">
                    <div className=" w-full ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        First Name
                      </label>
                      <input
                        disabled
                        type="text"
                        {...register("firstName")}
                        placeholder="Enter Your First Name"
                        className={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1  ${
                          errors.firstName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <span className="text-[#dd1313] text-sm">
                          {String(errors.firstName?.message)}
                        </span>
                      )}
                    </div>

                    <div className="w-full xxs:mt-3 lg:mt-0">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Last Name
                      </label>
                      <input
                        disabled
                        type="text"
                        {...register("lastName")}
                        placeholder="Enter Your Last Name"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5  focus:outline-[#197b30] focus:outline-1 ${
                          errors.lastName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <span className="text-[#dd1313] text-sm">
                          {String(errors.lastName?.message)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className=" input my-3 ">
                    <label
                      className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                      htmlFor=""
                    >
                      Email Address
                    </label>
                    <input
                      disabled
                      type="text"
                      {...register("email")}
                      placeholder="Enter Your Email Address"
                      className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                        errors.email ? "border-[#dd1313]" : ""
                      }`}
                      required
                    />
                    {errors.email && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.email?.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 input">
                    <label
                      className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>

                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <PhoneInput
                          disabled
                          country={"ng"}
                          value={value}
                          onChange={onChange}
                          inputProps={{
                            name: "phoneNumber",
                            id: "phoneNumber",
                            className: `w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-12 focus:outline-[#197b30] focus:outline-1 ${
                              errors.phoneNumber ? "border-[#dd1313]" : ""
                            }`,
                          }}
                        />
                      )}
                    />

                    {errors.phoneNumber && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.phoneNumber.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
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
                      className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                        errors.address ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors.address && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.address?.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 input">
                    <label
                      className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
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
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.country?.message)}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 input">
                    <label
                      className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
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
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.state?.message)}
                      </span>
                    )}
                  </div>

                  <div className=" mb-3">
                    <h1 className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1">
                      City/Town/Street
                    </h1>
                    <input
                      disabled
                      type="text"
                      required
                      {...register("city")}
                      placeholder="Enter City/Town/Street"
                      className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                        errors.city ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors.city && (
                      <span className="text-[#dd1313] text-sm">
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

                  <div className="xxs:hidden text-center lg:bg-white rounded-lg lg:rounded-t-none lg:py-4 xxs:py-10 lg:flex flex-col gap-3 lg:justify-end lg:flex-row flex-1 pb-4">
                    <div className="">
                      <button
                        onClick={() => navigate("/products")}
                        className="w-full border border-[#479559] lg:text-[14px] text-[16px] lg:py-3 lg:px-6 py-4 rounded-[4px] text-[#197B30] bg-[#fff] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap"
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
                          className="w-full border border-[#479559] lg:text-[14px] text-[16px] lg:py-3 lg:px-6 py-4 rounded-[4px] text-[#fff] bg-[#197B30]  select-none tracking-wider font-medium whitespace-nowrap"
                        >
                          {loading ? (
                            <svg
                              className="animate-spin h-5 w-5  text-white"
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
                className={` w-full transition-all duration-1000 shrink-0 ${
                  !isMyBilling
                    ? "-translate-x-full opacity-100"
                    : "translate-x-100 opacity-0"
                }`}
              >
                <form onSubmit={handleSubmit(handleCreateBilling)}>
                  <div className="lg:flex xxs:block gap-6">
                    <div className=" w-full ">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName")}
                        placeholder="Enter Your First Name"
                        className={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1  ${
                          errors.firstName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <span className="text-[#dd1313] text-sm">
                          {String(errors.firstName?.message)}
                        </span>
                      )}
                    </div>

                    <div className="w-full xxs:mt-3 lg:mt-0">
                      <label
                        className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                        htmlFor=""
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName")}
                        placeholder="Enter Your Last Name"
                        className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5  focus:outline-[#197b30] focus:outline-1 ${
                          errors.lastName ? "border-[#dd1313]" : ""
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <span className="text-[#dd1313] text-sm">
                          {String(errors.lastName?.message)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className=" input my-3 ">
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
                      className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                        errors.email ? "border-[#dd1313]" : ""
                      }`}
                      required
                    />
                    {errors.email && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.email?.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 input">
                    <label
                      className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>

                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <PhoneInput
                          country={"ng"}
                          value={value}
                          onChange={onChange}
                          inputProps={{
                            name: "phoneNumber",
                            id: "phoneNumber",
                            className: `w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-12 focus:outline-[#197b30] focus:outline-1 ${
                              errors.phoneNumber ? "border-[#dd1313]" : ""
                            }`,
                          }}
                        />
                      )}
                    />

                    {errors.phoneNumber && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.phoneNumber.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                      htmlFor=""
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      {...register("address")}
                      placeholder="Enter Delivery Address"
                      className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                        errors.address ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors.address && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.address?.message)}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 input">
                    <label
                      className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                      htmlFor="country"
                    >
                      Country
                    </label>

                    <Controller
                      control={control}
                      name="country"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <CountryDropdown
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
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.country?.message)}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 input">
                    <label
                      className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <Controller
                      control={control}
                      name="state"
                      render={({ field: { onChange, value } }) => (
                        <RegionDropdown
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
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.state?.message)}
                      </span>
                    )}
                  </div>

                  <div className=" mb-3">
                    <h1 className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1">
                      City/Town/Street
                    </h1>
                    <input
                      type="text"
                      required
                      {...register("city")}
                      placeholder="Enter City/Town/Street"
                      className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-lg placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                        errors.city ? "border-[#dd1313]" : ""
                      }`}
                    />
                    {errors.city && (
                      <span className="text-[#dd1313] text-sm">
                        {String(errors.city?.message)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center ">
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
                    {myBillingInfo?.data?.billing.length < 1 ? (
                      <label
                        htmlFor=""
                        className="ml-2 text-xs md:text-sm text-slate-500 whitespace-nowrap"
                      >
                        Should we save this as your default billing information?
                      </label>
                    ) : (
                      <label
                        htmlFor=""
                        className="ml-2 text-xs md:text-sm text-slate-500 whitespace-nowrap"
                      >
                        Should we update your default billing information with
                        details provided?
                      </label>
                    )}
                  </div>

                  <div className="xxs:hidden text-center lg:bg-white rounded-lg lg:rounded-t-none lg:py-4 xxs:py-10 lg:flex flex-col gap-3 lg:justify-end lg:flex-row flex-1 pb-4">
                    <div className="">
                      <button
                        onClick={() => navigate("/products")}
                        className="w-full border border-[#479559] lg:text-[14px] text-[16px] lg:py-3 lg:px-6 py-4 rounded-[4px] text-[#197B30] bg-[#fff] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap"
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
                          className="w-full border border-[#479559] lg:text-[14px] text-[16px] lg:py-3 lg:px-6 py-4 rounded-[4px] text-[#fff] bg-[#197B30] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap"
                        >
                          {loading ? (
                            <svg
                              className="animate-spin h-5 w-5 text-white"
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
          <div className="lg:block xxs:hidden w-1/3">
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
        <div className="lg:hidden text-center lg:bg-white rounded-lg lg:rounded-t-none lg:py-4 xxs:pb-10 xxs:flex flex-col gap-3 lg:justify-end lg:flex-row flex-1 ">
          <div>
            <button
              type="submit"
              className="w-full border border-[#479559] lg:text-[14px] text-[16px] lg:py-3 lg:px-6 py-4 rounded-[4px] text-[#fff] bg-[#197B30] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap"
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
                " Proceed to Payments"
              )}
            </button>
          </div>
          <div className="">
            <Ripples className="w-full" color="#197b307a" during={2000}>
              <button
                onClick={() => navigate("/products")}
                className="w-full border border-[#479559] lg:text-[14px] text-[16px] lg:py-3 lg:px-6 py-4 rounded-[4px] text-[#197B30] bg-[#fff] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap"
              >
                Continue to Shopping
              </button>
            </Ripples>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BillingPage;
