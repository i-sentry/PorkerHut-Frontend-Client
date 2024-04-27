import React, { useState } from "react";
import Ripples from "react-ripples";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";
import PorkerLogo from "../../assets/images/porker.png";
import { Link, useNavigate } from "react-router-dom";
import { useRecoverPassword } from "../../services/hooks/users";
import { ToastContainer, toast } from "react-toastify";

export interface IEmail {
  email: string;
}

const AdminForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<IEmail>();
  const recoverPassword = useRecoverPassword();

  const onSubmit = handleSubmit((data: any, e: any) => {
    setLoading(true);
    recoverPassword
      .mutateAsync({ email: data?.email?.toLowerCase() })
      .then((res) => {
        console.log(res, "res");
        setLoading(false);
        toast.success(res.data.message);
        e?.target.reset();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e, "err");
        toast.error(e.response.data.message.replace("User", "Admin"));
      });
  });

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

      <div className="h-screen bg-[#F5F5F5] py-16">
        <div className="flex h-full items-center  justify-center xxs:p-3 md:py-8">
          <div className="w-full max-w-xl  rounded border border-neutral-200 bg-white p-4 shadow-[0_0_30px_-10px_rgba(0,0,0,0.2)] sm:p-8">
            <div className="flex items-center justify-between">
              <div className="">
                <h1 className="text-left text-lg  font-bold text-[#333333] ">
                  Recover Password
                </h1>
                <p className="mt-1  text-left text-base font-light text-[#797979]">
                  You can request a password reset below. We will send a link to
                  the email address.
                </p>
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
                  // onFocus={() => setIsError("")}
                  className={`mt-1 w-full appearance-none rounded  border p-3 pl-4 lowercase placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
                    errors.email
                      ? "border-[#e10] focus-within:border-[#e10] focus:ring-[#e10]"
                      : "border-[##EEEEEE] "
                  }`}
                />
              </div>

              <div className="mt-10">
                <Ripples color="#f5f5f550" during={2000} className="w-full">
                  <button
                    type="submit"
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
                      "Recover"
                    )}
                  </button>
                </Ripples>
              </div>
              <div className="mt-3 text-center">
                <p className="font-normal text-[#A2A2A2]">
                  Remember your password?{" "}
                  <Link
                    to="/admin-login"
                    className="cursor-pointer font-normal text-[#197b30] hover:underline"
                  >
                    Back to login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminForgetPassword;
