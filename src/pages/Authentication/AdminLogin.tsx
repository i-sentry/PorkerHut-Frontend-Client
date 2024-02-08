import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PorkerLogo from "../../assets/porker hut 1 1.png";
import Ripples from "react-ripples";
import { useNavigate } from "react-router-dom";
import Admin from "../../assets/Admin.png";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import Footer from "../../components/footer-component/Footer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateAdminAcct from "../../components/admin-dashboard-components/CreateAdminAcct";
import { useUserLogin } from "../../services/hooks/users";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

interface AdminLoginProps {
  email: string;
  password: string;
}

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [eyeState, setEyeState] = useState(false);
  const [openModal, setOpenModal] = useState(false);
    const [isError, setIsError] = useState("");
const login = useUserLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginProps>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<AdminLoginProps> = (data, e) => {
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

            // setAuth(res);
            navigate("/");
            // setIsLogin(true);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("admin");
            localStorage.setItem("accessToken", res?.data?.accessToken);
            localStorage.setItem("admin", JSON.stringify(res?.data));
            // Cookies.set("accessToken", res?.data?.accessToken, { expires: 7 });
            console.log(res);
          })
          .catch((e) => {
            setLoading(false);

            setIsError(e?.response?.data);
          });
  };

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-start gap-9 mb-40 px-[56px] py-12 w-full hide-scroll-bar">
        <div className="w-[calc(55%_-_20px)]">
          <div className="border-b border-[#D9D9D9] pb-[9px] flex justify-between items-center">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img
                src={PorkerLogo}
                alt="Poker Logo"
                className="cursor-pointer h-7"
              />
              <h1 className="porker sm:text-lg font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
                Porker Hut
              </h1>
            </div>
            <h1 className="text-xl font-bold text-black">
              ADMIN<span className="font-normal">CENTER</span>
            </h1>
          </div>
          <div className="w-full h-[420px] mt-6 ">
            <img
              src={Admin}
              className="w-11/12 h-full object-cover object-center mx-auto"
              alt="Admin img"
            />
          </div>
        </div>
        <div className="w-[calc(45%_-_20px)] p-8 border-[#D9D9D9] border h-[auto]">
          <h2 className="text-black text-2xl font-medium mb-3">Login</h2>
          <p className="text-neutral-500 text-base font-normal mb-6">
            Enter your login details
          </p>
          <div></div>
          <form action="" id="admin-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="text-zinc-800 text-sm font-normal"
              >
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
                autoComplete="off"
                id="email"
                className={`rounded w-full p-3  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] ${
                  errors.email
                    ? "border-[#e10] focus-within:border-[#e10]"
                    : "border-[##EEEEEE] "
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-[#e10]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-5 relative">
              <label
                htmlFor="password"
                className="text-zinc-800 text-sm font-normal"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                autoComplete="on"
                type={eyeState ? "text" : "password"}
                name="password"
                placeholder="**********"
                id="password"
                className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]${
                  errors.password
                    ? "border-[#e10] focus-within:border-[#e10]"
                    : "border-[#EEEEEE] "
                }`}
              />
              <button
                className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                onClick={toggleEye}
              >
                {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
              {errors.password && (
                <p className="mt-1 text-sm text-[#e10]">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="">
              <p className="text-zinc-800 text-base font-medium text-right mt-2">
                Forgot password?
              </p>

              <div className="mt-6">
                <Ripples color="#f5f5f550" during={2000} className="w-full">
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
                </Ripples>
              </div>
              {/* <div className="mt-6">
                <p className="text-[#A2A2A2] font-normal text-center">
                  No account account?
                  <button
                    onClick={() => setOpenModal((s) => !s)}
                    className="font-normal hover:underline cursor-pointer text-[#197b30]"
                  >
                    Create one
                  </button>
                </p>
              </div> */}
            </div>
          </form>
        </div>
      </div>
      {/* <CreateAdminAcct openModal={openModal} closeModal={setOpenModal} email={email} /> */}
      <Footer />
    </>
  );
};

export default AdminLogin;
