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
        navigate("/admin");
        // setIsLogin(true);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("admin");
        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("admin", JSON.stringify(res?.data));
        // Cookies.set("accessToken", res?.data?.accessToken, { expires: 7 });
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
      <div className="hide-scroll-bar mb-40 flex w-full items-start justify-between gap-9 px-[56px] py-12">
        <div className="w-[calc(55%_-_20px)]">
          <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-[9px]">
            <div
              onClick={() => navigate("/")}
              className="flex cursor-pointer select-none items-center gap-2"
            >
              <img
                src={PorkerLogo}
                alt="Poker Logo"
                className="h-7 cursor-pointer"
              />
              <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-lg">
                Porker Hut
              </h1>
            </div>
            <h1 className="text-xl font-bold text-black">
              ADMIN<span className="font-normal">CENTER</span>
            </h1>
          </div>
          <div className="mt-6 h-[420px] w-full ">
            <img
              src={Admin}
              className="mx-auto h-full w-11/12 object-cover object-center"
              alt="Admin img"
            />
          </div>
        </div>
        <div className="h-[auto] w-[calc(45%_-_20px)] border border-[#D9D9D9] p-8">
          <h2 className="mb-3 text-2xl font-medium text-black">Login</h2>
          <p className="mb-6 text-base font-normal text-neutral-500">
            Enter your login details
          </p>
          <div></div>
          <form action="" id="admin-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="text-sm font-normal text-zinc-800"
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
                className={`mt-1 w-full appearance-none  rounded border border-[#EEEEEE] p-3 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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

            <div className="relative mt-5">
              <label
                htmlFor="password"
                className="text-sm font-normal text-zinc-800"
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
                className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none active:border-[#197B30] focus:ring-[#197b30]${
                  errors.password
                    ? "border-[#e10] focus-within:border-[#e10]"
                    : "border-[#EEEEEE] "
                }`}
              />
              <button
                className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
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
              <p
                onClick={() => navigate("/admin/forget_password")}
                className="mt-2 cursor-pointer text-right text-base font-medium text-zinc-800 hover:text-green-700"
              >
                Forgot password?
              </p>

              <div className="mt-6">
                <Ripples color="#f5f5f550" during={2000} className="w-full">
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
