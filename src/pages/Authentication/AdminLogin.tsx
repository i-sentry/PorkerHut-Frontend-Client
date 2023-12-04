import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PorkerLogo from "../../assets/porker hut 1 1.png";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../../assets/Admin.png";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import Footer from "../../components/footer-component/Footer";


const AdminLogin = () => {
  const navigate = useNavigate();
  // const [eyeState, setEyeState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // const onSubmit = handleSubmit((data, e) => {
  //   setLoading(true);
  //   login
  //     .mutateAsync(data)
  //     .then((res) => {
  //       setLoading(false);
  //       navigate("/vendor");
  //       localStorage.removeItem("accessToken");
  //       localStorage.removeItem("vendor");
  //       localStorage.removeItem("user");
  //       localStorage.setItem("accessToken", res?.data?.accessToken);
  //       localStorage.setItem("vendor", JSON.stringify(res?.data));
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       setLoading(false);

  //       setIsError(e?.response?.data?.message);

  //     });
  // });

  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-start gap-9 mb-40 px-[80px] pt-[122px] w-full hide-scroll-bar">
        <div className="w-1/2">
          <div className="border-b border-[#D9D9D9] pb-[9px] flex justify-between items-center">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img
                src={PorkerLogo}
                alt="Poker Logo"
                className="lg:cursor-pointer h-9"
              />
              <h1 className="porker sm:text-xl font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
                Porker Hut
              </h1>
            </div>
            <h1 className="text-[36px] font-bold text-black">
              ADMIN<span className="font-normal">CENTER</span>
            </h1>
          </div>
          <div className="w-[720px] h-[439px] mx-auto mt-6 ">
            <img src={Admin} alt="Admin img" />
          </div>
        </div>
        <div className="w-1/2 p-[50px] border-[#D9D9D9] border h-[520px]">
          <h2 className="text-black text-2xl font-medium mb-4">Login</h2>
          <p className="text-neutral-500 text-base font-normal mb-[30px]">
            Enter your login details
          </p>
          <form action="">
            <div className="mt-2">
              <label htmlFor="" className="text-zinc-800 text-sm font-normal">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Enter your email address"
                id="email"
                className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                  errors.email
                    ? "border-[#e10] focus-within:border-[#e10]"
                    : "border-[##EEEEEE] "
                }`}
              />
            </div>

            <div className="mt-[28px] relative">
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
            <div className="">
              <p className="text-zinc-800 text-base font-medium mt-2 leading-normal text-right ">
                Forgot password?
              </p>

              <div className="mt-6">
                <button
                  type="submit"
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
              </div>
              <div className="mt-8">
                <p className="text-[#A2A2A2] font-normal text-center">
                  No account account?{" "}
                  <Link
                    to="/admin-sign-up"
                    className="font-normal hover:underline cursor-pointer text-[#197b30]"
                  >
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
