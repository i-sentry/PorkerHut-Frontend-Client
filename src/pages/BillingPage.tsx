import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import OrderCart from "../components/order-component/OrderCart";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/utility/AppLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

type UserBillingInfo = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  address: string;
  state: string;
  city: string;
};

const BillingPage = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string()
      .required("Last Name is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string().required("Address is required"),

    state: Yup.string().required("State is required"),

    city: Yup.string().required("State is required"),

    phonenumber: Yup.string()
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
    console.log(JSON.stringify(data, null, 2));
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="  bg-[#F5F5F5] min-h-screen mt-20">


            <div className=" ">
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
                    name: "Checkout",
                    link: "/billing",
                  },
                ]}
              />
            </div>

        </div>

        <div className="md:flex gap-8 mx-12 pb-10 relative xxs:hidden">
          <div className=" w-2/3 bg-white px-6 flex flex-col gap-4 py-6 rounded-lg">
            <h1 className=" text-[20px] text-[#333333] font-semibold">
              Billing Information
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-6">
                <div className=" w-full">
                  <label
                    className=" text-[#333333] text-[14px] block"
                    htmlFor=""
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstname")}
                    placeholder="Enter Your First Name"
                    className={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1  ${
                      errors.firstname ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.firstname?.message}
                  </div>
                </div>

                <div className="w-full">
                  <label
                    className=" text-[#333333] text-[14px]  block"
                    htmlFor=""
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastname")}
                    placeholder="Enter Your Last Name"
                    className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5  focus:outline-[#197b30] focus:outline-1 ${
                      errors.lastname ? "border-[#dd1313]" : ""
                    }`}
                  />
                  <div className="text-[#dd1313] text-sm">
                    {errors.lastname?.message}
                  </div>
                </div>
              </div>
              <div className=" input my-2 ">
                <label className=" text-[#333333] text-[14px] mb-1" htmlFor="">
                  Email Address
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Enter Your First Email Address"
                  className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                    errors.email ? "border-[#dd1313]" : ""
                  }`}
                />
                <div className="text-[#dd1313] text-sm">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mb-2 input">
                <label className=" text-[#333333] text-[14px] mb-1" htmlFor="">
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phonenumber")}
                  placeholder="+234-555-666-6669"
                  className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                    errors.phonenumber ? "border-[#dd1313]" : ""
                  }`}
                />
                <div className="text-[#dd1313] text-sm">
                  {errors.phonenumber?.message}
                </div>
              </div>

              <h1 className=" text-[20px] text-[#333333] font-semibold lg:hidden">
                Delivery Information
              </h1>
              <div className="mb-2">
                <label className=" text-[#333333] text-[14px] mb-1" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address")}
                  placeholder="Enter Delivery Address"
                  className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                    errors.address ? "border-[#dd1313]" : ""
                  }`}
                />
                <div className="text-[#dd1313] text-sm">
                  {errors.address?.message}
                </div>
              </div>
              <div className="mb-2 input">
                <h1 className=" text-[#333333] text-[14px] mb-1">State</h1>
                <input
                  type="text"
                  {...register("state")}
                  placeholder="Enter State"
                  className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                    errors.state ? "border-[#dd1313]" : ""
                  }`}
                />
                <div className="text-[#dd1313] text-sm">
                  {errors.state?.message}
                </div>
              </div>
              <div className=" mb-2">
                <h1 className=" text-[#333333] text-[14px] mb-1">
                  City/Town/Street
                </h1>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="Enter City/Town/Street"
                  className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder-text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                    errors.city ? "border-[#dd1313]" : ""
                  }`}
                />
                <div className="text-[#dd1313] text-sm">
                  {errors.city?.message}
                </div>
              </div>

              <div className=" text-center lg:bg-white rounded-md lg:rounded-t-none p-4 flex flex-col gap-3 lg:justify-end lg:flex-row flex-1 pb-4">
                <div className="">
                  <button className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#197B30] bg-[#fff] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                    Continue to Shopping
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap"
                    // onClick={() => navigate("/pay-card")}
                  >
                    Proceed to Payments
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" w-1/3">
            <OrderCart />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BillingPage;
