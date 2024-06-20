import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AppLayout from "../utility/AppLayout";
import { useVendorLogin } from "../../services/hooks/Vendor";
import ReactLoading from "react-loading";

interface ILoginProps {
  email: string;
  password: string;
  checkbox?: string;
}
const VendorLogin = () => {
  const [eyeState, setEyeState] = useState(false);

  const navigate = useNavigate();
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useVendorLogin();
  // const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginProps>();
  const [val, setVal] = useState(false);
  const onSubmit = handleSubmit((data, e) => {
    setLoading(true);
    login
      .mutateAsync(data)
      .then((res) => {
        setLoading(false);
        navigate("/vendor");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("vendor");
        localStorage.removeItem("user");
        localStorage.setItem("accessToken", res?.data?.token);
        localStorage.setItem("vendor", JSON.stringify(res?.data));
      })
      .catch((e) => {
        setLoading(false);

        setIsError(e?.response?.data?.message);
      });
  });

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <AppLayout>
      <div className="h-full bg-[#F5F5F5] pb-6">
        <div className="mb-20 bg-[#F5F5F5]"></div>
        <div className=" ml-auto w-56 py-5 px-3 xxs:flex xxs:justify-end md:hidden">
          <button
            onClick={() => navigate("/login?q=customer")}
            className="w-full select-none rounded border-2 border-[#197b30] bg-[#fff] py-2 px-4 tracking-wider text-[#197b30] "
          >
            Login as a Customer
          </button>
        </div>
        <div className="flex items-center justify-center xxs:p-3 md:py-8 ">
          <div className="max-auto w-full max-w-xl  rounded bg-[#fff] p-4 shadow-md sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-left text-lg font-bold text-[#333333]">
                  Seller's Login
                </h1>
                <p className="mt-1 text-left  text-base  font-light text-[#797979]">
                  Enter your store login details
                </p>
              </div>
              <div>
                {isError && (
                  <span className="rounded-md bg-red-200 p-2 text-sm text-[#f91919]">
                    {isError}
                  </span>
                )}
              </div>
            </div>

            <form className="mt-8" onSubmit={onSubmit}>
              <div>
                <label htmlFor="" className="text-base font-normal">
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
                  className={`mt-1 w-full appearance-none  rounded border p-3 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
                    errors.email
                      ? "border-[#e10] focus-within:border-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>
              <div className="relative mt-3">
                <label htmlFor="" className="text-base font-normal">
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
                  className={`mt-1 w-full appearance-none  rounded border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
                    errors.password
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
              <div className="mt-3 flex items-center justify-between">
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
                    className="h-4 w-4 cursor-pointer rounded  accent-[#197B30] checked:bg-[#197B30]"
                  />
                  <label htmlFor="" className="ml-2 text-sm text-slate-500">
                    Remember me
                  </label>
                </div>
                <div className="">
                  <Link
                    to={"/vendors/forgot_password"}
                    className=" text-password text-sm font-medium text-[#197B30] "
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  // disabled={true}
                  className="w-full select-none rounded bg-[#197b30] py-3 px-4 tracking-wider text-white disabled:cursor-not-allowed disabled:bg-[#568a62]"
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
                    "Login"
                  )}
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="font-normal text-[#A2A2A2]">
                  Don't have an account yet?{" "}
                  <Link
                    to="/sign-up"
                    className="cursor-pointer font-normal text-[#197b30] hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
            <div className="mt-3 hidden md:block">
              <button
                onClick={() => navigate("/login?q=customer")}
                className="w-full select-none rounded border border-[#197b30] bg-[#fff] py-3 px-4 tracking-wider text-[#197b30]"
              >
                Login as a Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default VendorLogin;
