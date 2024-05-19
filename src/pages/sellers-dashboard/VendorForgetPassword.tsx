import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Ripples from "react-ripples";

import ReactLoading from "react-loading";
import AppLayout from "../../components/utility/AppLayout";
import { ToastContainer, toast } from "react-toastify";
import { useVendorRecoverPassword } from "../../services/hooks/Vendor";

export interface IEmail {
  email: string;
}

const VendorForgetPassword = () => {
  // const navigate = useNavigate();

  // const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const recoverPassword = useVendorRecoverPassword();
  // const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<IEmail>();

  const onSubmit = handleSubmit((data, e) => {
    // setLoading(true);
    // recoverPassword
    //   .mutateAsync(data)
    //   .then((res) => {
    //     setLoading(false);
    //     toast.success(res.data.message);
    //     e?.target.reset();
    //   })
    //   .catch((e) => {
    //     setLoading(false);
    //     toast.error(e.response.data.message);
    //   });
  
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="h-full bg-[#F5F5F5] pb-6">
        <div className="mb-20 bg-[#F5F5F5]"></div>

        <ToastContainer style={{ width: "500px" }} />
        <>
          <div className="flex h-full items-center  justify-center xxs:p-3 md:py-8">
            <div className="w-full max-w-xl   rounded bg-[#fff] p-4 shadow-md sm:p-8">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="text-left text-lg  font-bold text-[#333333] ">
                    Recover Password
                  </h1>
                  <p className="mt-1  text-left text-base font-light text-[#797979]">
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
                    // onFocus={() => setIsError("")}
                    className={`mt-1 w-full appearance-none  rounded border p-3 pl-4 placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
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
                    <a
                      href="sign-in?q=vendor"
                      className="cursor-pointer font-normal text-[#197b30] hover:underline"
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

export default VendorForgetPassword;
