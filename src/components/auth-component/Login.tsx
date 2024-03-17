import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Ripples from "react-ripples";
import { useUserLogin } from "../../services/hooks/users";
import ReactLoading from "react-loading";
import AppLayout from "../utility/AppLayout";

// import { useAppDispatch } from "../../redux/hook";

interface ILoginProps {
  email: string;
  password: string;
  checkbox?: string;
}
const Login = () => {
  const [eyeState, setEyeState] = useState(false);
  const navigate = useNavigate();

  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useUserLogin();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const qParams = searchParams.get("q");
  const billingParams = searchParams.get("billing");

  console.log(qParams, billingParams, "paramst");
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
    const { email, password } = data;
    login
      .mutateAsync({
        email: email.toLowerCase(),
        password: password,
      })
      .then((res) => {
        setLoading(false);
        // dispatch(
        //   addOption(
        //     // res?.data?.accessToken
        //     res?.data?.email,
        //     res?.data?.firstName,
        //     res?.data?.isAdmin,
        //     res?.data?.lastName,
        //     res?.data?._id
        //   )
        // );
        e?.target.reset();
        // setIsOpen(true);
        if (billingParams === "true") {
          navigate("/billing");
        } else {
          navigate("/");
        }
        // setAuth(res);

        // setIsLogin(true);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("user", JSON.stringify(res?.data));
        // Cookies.set("accessToken", res?.data?.accessToken, { expires: 7 });
        console.log(res);
      })
      .catch((e) => {
        setLoading(false);

        setIsError(e?.response?.data);
      });
  });
  // console.log(localStorage.getItem("user"), "oookk");
  // console.log("gggoookk");

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="h-full bg-[#F5F5F5] pb-6">
        <div className="mb-20 bg-[#F5F5F5]"></div>
        <div className=" ml-auto w-56 py-5 px-3 xxs:flex xxs:justify-end md:hidden">
          <button
            onClick={() => navigate("/sign-in?q=vendor")}
            className="w-full select-none rounded border-2 border-[#197b30] bg-[#fff] py-2 px-4 tracking-wider text-[#197b30] "
          >
            Login as a Seller
          </button>
        </div>

        <>
          <div className="flex h-full items-center  justify-center xxs:p-3 md:py-8">
            <div className="w-full max-w-xl   rounded bg-[#fff] p-4 shadow-md sm:p-8">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="text-left text-lg  font-bold text-[#333333] ">
                    Login
                  </h1>
                  <p className="mt-1  text-left text-base font-light text-[#797979]">
                    Enter your login details
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
                    onFocus={() => setIsError("")}
                    className={`mt-1 w-full appearance-none  rounded border p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                    onFocus={() => setIsError("")}
                    className={`mt-1 w-full appearance-none  rounded border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
                      errors.password
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                  <button
                    className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-[#A2A2A2] outline-[#0eb683]"
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
                      to={"/forgot_password"}
                      className=" text-password text-sm font-medium text-[#197B30] "
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="mt-10">
                  <Ripples color="#f5f5f550" during={2000} className="w-full">
                    <button
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
                  </Ripples>
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
                <Ripples className="w-full" color="#197b307a" during={2000}>
                  <button
                    onClick={() => navigate("/sign-in?q=vendor")}
                    className="w-full select-none rounded border border-[#197b30] bg-[#fff] py-3 px-4 tracking-wider text-[#197b30]"
                  >
                    Login as a Seller
                  </button>
                </Ripples>
              </div>
            </div>
          </div>
        </>
      </div>
    </AppLayout>
  );
};

export default Login;
