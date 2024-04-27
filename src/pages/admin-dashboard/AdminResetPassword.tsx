import React, { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import { useRestPassword } from "../../services/hooks/users";
import AppLayout from "../../components/utility/AppLayout";
import { ToastContainer, toast } from "react-toastify";
import PorkerLogo from "../../assets/images/porker.png";

const AdminResetPassword = () => {
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
        toast.success(`Congratulations! ${res.data.message}`);
        navigate("/login");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        toast.error("Error.. please try again!");
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

  const passwordref = useRef({});
  passwordref.current = watch("password", "");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 w-full border-b border-neutral-100 bg-white py-3">
        <ToastContainer />
        <div className="flex items-center justify-between px-4">
          <div
            className="inline-flex items-center gap-2"
            onClick={() => navigate("/admin")}
          >
            <img src={PorkerLogo} alt="" className="h-9 md:cursor-pointer" />
            <h1 className="porker select-none font-Roboto-slab font-bold text-[#197B30]  xxs:text-lg md:text-xl">
              Porker Hut
            </h1>
          </div>
        </div>
      </header>
      <div className="flex h-screen items-center justify-center bg-[#F5F5F5] md:py-6">
        <div className=" mb-5 flex w-[600px] flex-col items-center justify-center bg-[#F5F5F5] xxs:p-3">
          <div className="max-auto w-full max-w-xl  bg-[#fff] p-4 shadow-md sm:p-8">
            <div>
              <h1 className="text-left   text-lg font-semibold text-[#333333]  ">
                Reset Password
              </h1>
              <p className="mt-1 text-left text-base font-light text-[#797979]">
                Enter a new password for your account:
              </p>
            </div>

            <form className="mt-8" onSubmit={onSubmit}>
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
    </>
  );
};

export default AdminResetPassword;
