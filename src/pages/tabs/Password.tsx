import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
import { useVendorRecoverPassword } from "../../services/hooks/Vendor";
import { toast } from "react-toastify";
import Ripples from "react-ripples";
import { IEmail } from "../sellers-dashboard/VendorForgetPassword";
import { CgSpinner } from "react-icons/cg";

const Password = ({ setShowTab }: any) => {
  const [loading, setLoading] = useState(false);
  const recoverPassword = useVendorRecoverPassword();
  const storedVendor = JSON.parse(localStorage.getItem("vendor") as string);

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<IEmail>();

  const onSubmit = handleSubmit((data: any, e: any) => {
    setLoading(true);
    recoverPassword
      .mutateAsync({ email: data?.email?.toLowerCase() })
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message);
        e?.target.reset();
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.response.data.message.replace("User", "Admin"));
      });
  });

  return (
    <div>
      <div className="flex items-center gap-2  py-4">
        <div
          onClick={() => setShowTab((prev: any) => !prev)}
          className="flex cursor-pointer items-center"
        >
          <HiOutlineChevronLeft size={20} color="#197b30" />
          <span className="flex items-center gap-1 text-[16px] text-[#197b30] md:leading-[19px]">
            <MdOutlineEnhancedEncryption size={24} color="#197b30" />
            Change Password
          </span>
        </div>
      </div>

      <div className="bg-neutral-50 p-6">
        <div className="mb-3">
          <h1 className="text-[20px] font-medium leading-[28px] text-[#333333]">
            You can request a password reset below. We will send a link to the
            email address.
          </h1>
          <p className="mt-1  text-left text-sm font-light text-[#797979]"></p>
        </div>
        <div className="mt-8 max-w-md">
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
                defaultValue={
                  storedVendor?.vendor?.sellerAccountInformation.email
                }
                // onFocus={() => setIsError("")}
                className={`mt-1 w-full appearance-none rounded  border p-3 pl-4 lowercase placeholder:text-sm placeholder:text-[#A2A2A2] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
                  errors.email
                    ? "border-[#e10] focus-within:border-[#e10] focus:ring-[#e10]"
                    : "border-[##EEEEEE] "
                }`}
              />
            </div>

            <div className="mt-4">
              <Ripples color="#f5f5f550" during={2000} className="w-full">
                <button
                  type="submit"
                  className="w-fit select-none rounded bg-[#197b30] py-3 px-4 tracking-wider text-white disabled:cursor-not-allowed disabled:bg-[#568a62]"
                >
                  {loading ? (
                    <div className="mx-auto flex items-center justify-center">
                      <CgSpinner size={24} className="animate-spin" />
                    </div>
                  ) : (
                    "Recover"
                  )}
                </button>
              </Ripples>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
