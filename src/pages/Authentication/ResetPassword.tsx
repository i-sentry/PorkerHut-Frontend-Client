import React, { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import ReactLoading from "react-loading";
import { useRestPassword, useUserSignUp } from "../../services/hooks/users";
import AppLayout from "../../components/utility/AppLayout";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword: any = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const resetPassword = useRestPassword(token);
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = handleSubmit((data, e) => {
    setLoading(true);

    resetPassword
      .mutateAsync(data)
      .then((res) => {
        e?.target.reset();
        toast.success(`Congratulations!! ${res.data.message}`);
        navigate("/login");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        toast.error("Error.. please try again or contact admin");
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
    <AppLayout>
      <div className="mb-20"></div>
      <ToastContainer style={{ width: "500px" }} />
      <div className="bg-[#F5F5F5] md:py-6">
        <div className=" bg-[#F5F5F5] flex flex-col justify-center items-center xxs:p-3 mb-5">
          <div className="max-w-xl w-full max-auto  bg-[#fff] sm:p-8 p-4 shadow-md">
            <div>
              <h1 className="text-left   text-[#333333] font-semibold text-lg  ">
                Reset Password
              </h1>
              <p className="text-left text-[#797979] text-base mt-1 font-light">
                Enter a new password for your account:
              </p>
            </div>

            <form className="mt-8" onSubmit={onSubmit}>
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
                  className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]${
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
                  className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]${
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

              <div className="mt-12">
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
                    "Reset"
                  )}
                </button>
              </div>
              {/* <div className="text-center mt-3">
                <p className="text-[#A2A2A2] font-normal text-sm">
                  Already have an account?{" "}
                  <a
                    href="/login  "
                    className="font-normal hover:underline cursor-pointer text-[#197b30]"
                  >
                    Sign in
                  </a>
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ResetPassword;
