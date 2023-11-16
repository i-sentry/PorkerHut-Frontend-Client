import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
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
const navigate = useNavigate()

  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useUserLogin();
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

        // setAuth(res);
        navigate("/");
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
      <div className="bg-[#F5F5F5] h-full pb-6">
        <div className="mb-20 bg-[#F5F5F5]"></div>
        <div className=" md:hidden xxs:flex xxs:justify-end w-56 ml-auto py-5 px-3">
          <button
            onClick={() => navigate("/sign-in?q=vendor")}
            className="rounded border-2 border-[#197b30] py-2 px-4 w-full text-[#197b30] bg-[#fff] tracking-wider select-none "
          >
            Login as a Seller
          </button>
        </div>

        <>
          <div className="flex items-center justify-center  h-full xxs:p-3 md:py-8">
            <div className="max-w-xl w-full   bg-[#fff] sm:p-8 p-4 shadow-md rounded">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="text-left text-lg  text-[#333333] font-bold ">
                    Login
                  </h1>
                  <p className="text-left  text-[#797979] text-base mt-1 font-light">
                    Enter your login details
                  </p>
                </div>
                <div>
                  {isError && (
                    <span className="text-[#f91919] bg-red-200 p-2 rounded-md text-sm">
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
                    className={`w-full p-3 pl-4  border placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                      errors.email
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                </div>
                <div className="mt-3 relative">
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
                    className={`w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                      errors.password
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-[#A2A2A2] absolute right-0 pt-4 pr-5"
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
                      to={"/forgot_password"}
                      className=" text-password font-medium text-sm text-[#197B30] "
                    >
                      Forgot Password?
                    </Link>

                  </div>
                </div>
                <div className="mt-10">
                  <Ripples color="#f5f5f550" during={2000} className="w-full">
                    <button
                      // disabled={true}
                      className="bg-[#197b30] py-3 px-4 w-full text-white tracking-wider select-none disabled:bg-[#568a62] disabled:cursor-not-allowed rounded"
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
                <div className="text-center mt-3">
                  <p className="text-[#A2A2A2] font-normal">
                    Don't have an account yet?{" "}
                    <a
                      href="/sign-up"
                      className="font-normal hover:underline cursor-pointer text-[#197b30]"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
              <div className="mt-3 hidden md:block">
                <Ripples className="w-full" color="#197b307a" during={2000}>
                  <button
                    onClick={() => navigate("/sign-in?q=vendor")}
                    className="rounded border border-[#197b30] py-3 px-4 w-full text-[#197b30] bg-[#fff] tracking-wider select-none"
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
