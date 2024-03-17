import React, { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavBar from "../nav-component/NavBar";
import Footer from "../footer-component/Footer";
import ReactLoading from "react-loading";
import { useUserSignUp } from "../../services/hooks/users";
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
        email: email.toLowerCase(),
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

  // const handleCreateUserAcc = () => {};

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
      <div className="bg-[#F5F5F5] md:py-6">
        <div className="mt-3 w-72 py-5 px-3 xxs:ml-auto xxs:flex xxs:justify-end md:hidden">
          <Link
            to={"/create-account"}
            className="w-full select-none rounded border border-[#197b30] bg-[#fff] py-3 px-4 font-medium tracking-wider text-[#197b30] hover:bg-[#197b39] hover:text-[#fff] "
          >
            Create a Sellers Account
          </Link>
        </div>

        <div className=" mb-5 flex flex-col items-center justify-center bg-[#F5F5F5] xxs:p-3">
          <div className="max-auto w-full max-w-xl  bg-[#fff] p-4 shadow-md sm:p-8">
            <div>
              <h1 className="text-left   text-lg font-semibold text-[#333333]  ">
                Create an account
              </h1>
              <p className="mt-1 text-left text-base font-light text-[#797979]">
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
                  className={`mt-1 w-full appearance-none rounded  border border-[##EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                  className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                  className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
                    errors.email
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>
              <div className="relative mt-2">
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
                  className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none active:border-[#197B30] focus:ring-[#197b30]${
                    errors.password
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
                <button
                  className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                  onClick={toggleConfirmEye}
                >
                  {eyeState2 ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>
              <div className="relative mt-2">
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
                  className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none active:border-[#197B30] focus:ring-[#197b30]${
                    errors.confirmPassword
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
                <button
                  className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                  onClick={toggleEye}
                >
                  {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>

              <div className="mt-12">
                <button
                  // disabled={true}
                  className="w-full select-none rounded bg-[#197b30] py-3 px-4 font-normal tracking-wider text-white disabled:cursor-not-allowed disabled:bg-[#568a62] "
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
              <div className="mt-3 text-center">
                <p className="text-sm font-normal text-[#A2A2A2]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="cursor-pointer font-normal text-[#197b30] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>

            <div className="mt-3 hidden md:block">
              <button
                onClick={() => navigate("/create-account")}
                className="w-full select-none rounded border border-[#197b30] bg-[#fff] py-3 px-4 font-normal tracking-wider  text-[#197b30] disabled:cursor-not-allowed "
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
                  "Create a seller account"
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
