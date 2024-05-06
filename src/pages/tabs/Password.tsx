import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
// import { TfiLock } from "react-icons/tfi";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Password = ({ setShowTab }: any) => {
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [eyeState3] = useState(false);

  const validationSchema = yup.object().shape({
    oldPassword: yup.string().required("Old password is required"),
    newPassword: yup.string().required("New password is required"),
    repeatPassword: yup
      .string()
      .required("Repeat password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });

  const {
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
  };

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 bg-[#F4F4F4] py-6 px-2"
      >
        {/* <div className=" relative">
          <label
            htmlFor=""
            className=" block text-[14px] leading-[16px] text-[#333333]"
          >
            Old password
          </label>
          <input
            {...register("oldPassword")}
            type={eyeState ? "text" : "password"}
            name="oldPassword"
            placeholder="*********"
            id="oldPassword"
            className={` mt-1 w-full appearance-none  rounded border p-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
              errors.oldPassword
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
          {errors.oldPassword && (
            <p className="text-[#F91919]">{"Old password is required"}</p>
          )}
        </div>
        <div className=" relative">
          <label
            htmlFor=""
            className="block text-[14px] leading-[16px] text-[#333333]"
          >
            New password
          </label>
          <input
            {...register("newPassword", {
              required: true,
            })}
            type={eyeState ? "text" : "password"}
            name="newPassword"
            placeholder="**********"
            id="newPassword"
            className={` mt-1 w-full appearance-none  rounded  border p-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
              errors.newPassword
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
          {errors.newPassword && (
            <p className="text-[#F91919]">{"New password is required"}</p>
          )}
        </div>
        <div className=" relative">
          <label
            htmlFor=""
            className=" block text-[14px] leading-[16px] text-[#333333]"
          >
            Repeat password
          </label>
          <input
            {...register("repeatPassword", {
              required: true,
            })}
            type={eyeState ? "text" : "password"}
            name="repeatPassword"
            placeholder="**********"
            id="repeatPassword"
            className={` mt-1 w-full appearance-none  rounded  border p-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30] ${
              errors.repeatPassword
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
          {errors.repeatPassword && (
            <p className="text-[#F91919]">{"Repeat password is required"}</p>
          )}
        </div> */}

        <div className="w-full ">
          <div className="relative mt-2">
            <label
              htmlFor=""
              className="text-[14px] font-normal leading-[16px]"
            >
              Old password
            </label>
            <input
              autoComplete="on"
              type={eyeState2 ? "text" : "password"}
              name="password"
              placeholder="**********"
              id="password"
              className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 py-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]

                    `}
            />
            <button
              className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
              onClick={toggleConfirmEye}
            >
              {eyeState2 ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
          <div className="relative mt-2">
            <label
              htmlFor=""
              className="text-[14px] font-normal leading-[16px]"
            >
              New Password
            </label>
            <input
              // {...register("confirmPassword", {
              //   required: true,
              //   validate: (value) =>
              //     value === passwordref.current || "The passwords do not match",
              // })}
              type={eyeState ? "text" : "password"}
              name="confirmPassword"
              autoComplete="on"
              placeholder="**********"
              id="confirmPassword"
              className={`mt-1 w-full appearance-none rounded border border-[#EEEEEE] p-3 py-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]`}
            />
            <button
              className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
              onClick={toggleEye}
            >
              {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
          <div className="relative mt-2">
            <label
              htmlFor=""
              className="text-[14px] font-normal leading-[16px]"
            >
              Repeat Password
            </label>
            <input
              // {...register("confirmPassword", {
              //   required: true,
              //   validate: (value) =>
              //     value === passwordref.current ||
              //     "The passwords do not match",
              // })}
              type={eyeState3 ? "text" : "password"}
              name="confirmPassword"
              autoComplete="on"
              placeholder="**********"
              id="confirmPassword"
              className={`mt-1 w-full appearance-none rounded border border-[#EEEEEE] p-3 py-2 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]`}
            />
            <button
              className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
              onClick={toggleEye}
            >
              {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
        </div>
        <div className="py-2 text-justify text-sm  text-[#A2A2A2]">
          <p className="text-justify text-[14px] font-normal leading-[16px] ">
            {" "}
            The password should be at least 8 characters long. it must <br />
            contain upper and lower case characters and at least one number.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center  ">
          <button
            type="submit"
            className="rounded bg-[#197B30] py-4 px-7 text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
