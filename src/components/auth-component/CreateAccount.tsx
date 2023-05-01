import React, { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavBar from "../nav-component/NavBar";
import Footer from "../footer-component/Footer";
import ReactLoading from "react-loading";
import Ripples from "react-ripples";
import { useUserSignUp } from "../../services/hooks/users";
import { ISignUpUser } from "../../services/serviceType";
import AccountCreationModal from "../modal-component/AccountCreationModal";

const CreateAccount: any = () => {
  const navigate = useNavigate();
  const createUserAcc = useUserSignUp();
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = handleSubmit((data, e) => {
    setLoading(true);
    const { firstName, lastName, email, password } = data;
    createUserAcc
      //@ts-ignore
      .mutateAsync({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => {
        e?.target.reset();
        setIsOpen(true);
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  });

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

  const handleCreateUserAcc = () => {};

  const passwordref = useRef({});
  passwordref.current = watch("password", "");


    React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
    }, []);
  return (
    <>
      <div className="mb-20">
        <NavBar />
      </div>
      <div className="bg-[#F5F5F5] ">
        <div className="mt-3 md:hidden xxs:flex w-72 xxs:justify-end xxs:ml-auto py-5 px-3">
          <Link
            to={"/create-account"}
            className="rounded border border-[#197b30] py-3 px-4 w-full text-[#197b30] bg-[#fff] tracking-wider font-medium select-none hover:bg-[#197b39] hover:text-[#fff] "
          >
            Create a Sellers Account
          </Link>
        </div>

        <div className=" bg-[#F5F5F5] flex flex-col justify-center items-center xxs:p-3">
          <div className="max-w-xl w-full max-auto  bg-[#fff] sm:p-8 p-4 shadow-md">
            <div>
              <h1 className="text-left   text-[#333333] font-semibold text-lg  ">
                Create an account
              </h1>
              <p className="text-left text-[#797979] text-base mt-1 font-light">
                Register your account by filling the form below
              </p>
            </div>

            <form className="mt-8" onSubmit={onSubmit}>
              <div>
                <label htmlFor="" className="text-base font-normal">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  name="firstName"
                  placeholder="Enter your firstName"
                  id="firstName"
                  className={`rounded w-full p-3 pl-4  border border-[##EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                    errors.firstName
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-base font-normal">
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  name="lastName"
                  placeholder="Enter your Lastname"
                  id="lastName"
                  className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                    errors.lastName
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-base font-normal">
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Enter your email "
                  id="email"
                  className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                    errors.email
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>
              <div className="mt-2 relative">
                <label htmlFor="" className="text-base font-normal">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  autoComplete="on"
                  type={eyeState2 ? "text" : "password"}
                  name="password"
                  placeholder="**********"
                  id="password"
                  className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]${
                    errors.password
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
                <button
                  className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                  onClick={toggleConfirmEye}
                >
                  {eyeState2 ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>
              <div className="mt-2 relative">
                <label htmlFor="" className="text-base font-normal">
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === passwordref.current ||
                      "The passwords do not match",
                  })}
                  type={eyeState ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="on"
                  placeholder="**********"
                  id="confirmPassword"
                  className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]${
                    errors.confirmPassword
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

              <div className="mt-5">
                <button
                  // disabled={true}
                  className="rounded bg-[#197b30] py-3 px-4 w-full text-white tracking-wider select-none disabled:bg-[#568a62] disabled:cursor-not-allowed font-normal "
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
                    "Sign Up"
                  )}
                </button>
              </div>
              <div className="text-center mt-3">
                <p className="text-[#A2A2A2] font-normal text-sm">
                  Already have an account?{" "}
                  <a
                    href="/login  "
                    className="font-normal hover:underline cursor-pointer text-[#197b30]"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </form>

            <div className="mt-3 hidden md:block">
              <button
                onClick={() => navigate("/create-account")}
                className="rounded bg-[#fff] py-3 px-4 w-full text-[#197b30] border border-[#197b30] tracking-wider select-none  disabled:cursor-not-allowed font-normal "
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
                  " Create a seller account"
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && <AccountCreationModal isOpen={isOpen} onClose={setIsOpen} />}
      </div>
      <Footer />
    </>
  );
};

export default CreateAccount;
