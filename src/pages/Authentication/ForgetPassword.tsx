import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Ripples from "react-ripples";
import { useRecoverPassword } from "../../services/hooks/users";
import ReactLoading from "react-loading";
import AppLayout from "../../components/utility/AppLayout";
import { ToastContainer, toast } from "react-toastify";

export interface IEmail {
  email: string;
}

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const recoverPassword = useRecoverPassword();
  // const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEmail>();

  const onSubmit = handleSubmit((data, e) => {
    setLoading(true);
    recoverPassword
      .mutateAsync(data)
      .then((res) => {
        console.log(res, "res");
        setLoading(false);
        toast.success(res.data.message);
        e?.target.reset();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e, "err");
        toast.error(e.response.data.message);
      });
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="bg-[#F5F5F5] h-full pb-6">
        <div className="mb-20 bg-[#F5F5F5]"></div>

        <ToastContainer style={{ width: "500px" }} />
        <>
          <div className="flex items-center justify-center  h-full xxs:p-3 md:py-8">
            <div className="max-w-xl w-full   bg-[#fff] sm:p-8 p-4 shadow-md rounded">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="text-left text-lg  text-[#333333] font-bold ">
                    Recover Password
                  </h1>
                  <p className="text-left  text-[#797979] text-base mt-1 font-light">
                    You can request a password reset below. We will send a link
                    to the email address.
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
                    onFocus={() => setIsError("")}
                    className={`w-full p-3 pl-4  border placeholder:text-sm placeholder:text-[#A2A2A2] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
                      errors.email
                        ? "border-[#e10] focus-within:border-[#e10]"
                        : "border-[##EEEEEE] "
                    }`}
                  />
                </div>

                <div className="mt-10">
                  <Ripples color="#f5f5f550" during={2000} className="w-full">
                    <button
                      type="submit"
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
                        "Recover"
                      )}
                    </button>
                  </Ripples>
                </div>
                <div className="text-center mt-3">
                  <p className="text-[#A2A2A2] font-normal">
                    Remember your password?{" "}
                    <a
                      href="/login"
                      className="font-normal hover:underline cursor-pointer text-[#197b30]"
                    >
                      Back to login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </AppLayout>
  );
};

export default ForgetPassword;
