import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Footer from "../footer-component/Footer";
import Ripples from "react-ripples";
interface ILoginProps {
  email: string;
  password: string;
  checkbox: string;
}
const Login = () => {
  const [eyeState, setEyeState] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginProps>();
  const [val, setVal] = useState(false);
  const [customersLogin, setcustomersLogin] = useState(true);
  const onSubmit = handleSubmit((data, e) => {
    console.log(data);
    e?.target.reset();
  });

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  return (
    <>
      {customersLogin ? (
        <>
          <div className="flex items-center justify-center ">
            <div className="max-w-xl w-full   bg-[#fff] p-8 shadow-md rounded">
              <div className="mt-3 mb-3">
                <Ripples
                  className="w-full flex justify-end"
                  color="#197b307a"
                  during={2000}
                >
                  <button
                    // onClick={async () => setcustomersLogin((prev) => !prev)}
                    className=" md:hidden rounded border border-[#197b30] py-2 px-4 xxs:w-[200px] md:w-full text-[#197b30] bg-[#fff] tracking-wider select-none"
                  >
                    Login as a Seller
                  </button>
                </Ripples>
              </div>
              <div className="flex justify-start flex-col">
                <h1 className="md:text-left text-center text-[#333333] font-bold ">
                  Customer's Login
                </h1>
                <p className="md:text-left text-center text-[#797979] text-sm mt-1 font-semibold">
                  Enter your login details
                </p>
              </div>

              <form className="mt-3" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="" className="text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        message: "Enter a valid email",
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      },
                    })}
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    id="email"
                    className={`w-full p-2 pl-4  border placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                      errors.email
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                </div>
                <div className="mt-3 relative">
                  <label htmlFor="" className="text-sm font-semibold">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                    })}
                    autoComplete="on"
                    type={eyeState ? "text" : "password"}
                    name="password"
                    placeholder="**********"
                    id="password"
                    className={`w-full p-2 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                      errors.password
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center ">
                    <input
                      {...register("checkbox")}
                      type="checkbox"
                      name="checkbox"
                      onChange={(e: any) => {
                        setValue("checkbox", e.target.checked ? "yes" : "no");
                        setVal(!val);
                      }}
                      checked={val}
                      className="h-4 w-4 accent-[#197B30] checked:bg-[#197B30]  cursor-pointer rounded"
                    />
                    <label htmlFor="" className="ml-2 text-sm text-slate-500">
                      Remember me
                    </label>
                  </div>
                  <div className="">
                    <Link
                      to={""}
                      className=" text-password font-medium text-sm text-[#197B30] "
                    >
                      Forgot Password?
                    </Link>
                    {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out"></span> */}
                  </div>
                </div>
                <div className="mt-3">
                  <Ripples color="#f5f5f550" during={2000} className="w-full">
                    <button
                      // disabled={true}
                      className="bg-[#197b30] py-2 px-4 w-full text-white tracking-wider select-none disabled:bg-[#568a62] disabled:cursor-not-allowed rounded"
                    >
                      Login
                    </button>
                  </Ripples>
                </div>
                <div className="text-center mt-3">
                  <p className="text-[#A2A2A2] font-semibold">
                    Don't have an account yet?{" "}
                    <a
                      href="/sign-up"
                      className="font-bold hover:underline cursor-pointer text-[#197b30]"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
              <div className="mt-3">
                <Ripples className="w-full" color="#197b307a" during={2000}>
                  <button
                    // onClick={async () => setcustomersLogin((prev) => !prev)}
                    className="rounded border border-[#197b30] py-2 px-4 w-full text-[#197b30] bg-[#fff] tracking-wider select-none"
                  >
                    Login as a Seller
                  </button>
                </Ripples>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col justify-center items-center ">
          <div className="max-w-xl w-full max-auto mt-4 bg-[#fff] p-8 shadow-md rounded">
            <div className="">
              <h1 className="md:text-left text-center text-[#333333] font-bold ">
                Sellers's Login
              </h1>
              <p className="md:text-left text-center text-[#797979] text-sm mt-1 font-semibold">
                Enter your store login details
              </p>
            </div>

            <form className="mt-3" onSubmit={onSubmit}>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      message: "Enter a valid email",
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  id="email"
                  className={`w-full p-2 pl-4  border placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                    errors.email
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>
              <div className="mt-3 relative">
                <label htmlFor="" className="text-sm font-semibold">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  autoComplete="on"
                  type={eyeState ? "text" : "password"}
                  name="password"
                  placeholder="**********"
                  id="password"
                  className={`w-full p-2 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                    errors.password
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
                <button
                  className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                  onClick={toggleEye}
                >
                  {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center ">
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    name="checkbox"
                    onChange={(e: any) => {
                      setValue("checkbox", e.target.checked ? "yes" : "no");
                      setVal(!val);
                    }}
                    checked={val}
                    className="h-4 w-4 accent-[#197B30] checked:bg-[#197B30]  cursor-pointer rounded"
                  />
                  <label htmlFor="" className="ml-2 text-sm text-slate-500">
                    Remember me
                  </label>
                </div>
                <div className="">
                  <Link
                    to={""}
                    className=" text-password font-medium text-sm text-[#197B30] "
                  >
                    Forgot Password?
                  </Link>
                  {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out"></span> */}
                </div>
              </div>
              <div className="mt-3">
                <button
                  // disabled={true}
                  className="bg-[#197b30] py-2 px-4 w-full text-white tracking-wider select-none disabled:bg-[#568a62] disabled:cursor-not-allowed rounded"
                >
                  Login
                </button>
              </div>
              <div className="text-center mt-3">
                <p className="text-[#A2A2A2] font-semibold">
                  Don't have an account yet?{" "}
                  <a
                    href="/sign-up"
                    className="font-bold hover:underline cursor-pointer text-[#197b30]"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
            <div className="mt-3">
              <button
                onClick={() => setcustomersLogin((prev) => !prev)}
                className="rounded border border-[#197b30] py-2 px-4 w-full text-[#197b30] bg-[#fff] tracking-wider select-none"
              >
                Login as a Buyer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
