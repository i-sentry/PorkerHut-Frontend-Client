import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineArrowNarrowLeft, HiOutlineChevronLeft } from "react-icons/hi";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface PasswordProp {
  setShowTab: React.Dispatch<React.SetStateAction<boolean>>;
}

const Password = ({ setShowTab }: any) => {
  const [eyeState, setEyeState] = useState(false);

  const validationSchema = yup.object().shape({
    oldPassword: yup.string().required("Old password is required"),
    newPassword: yup.string().required("New password is required"),
    repeatPassword: yup
      .string()
      .required("Repeat password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data); // Perform form submission or other actions
  };

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center gap-2  py-4">
        <div
          onClick={() => setShowTab((prev: any) => !prev)}
          className=" text-[]"
        >
          <HiOutlineChevronLeft size={20} />
        </div>
        <span className="flex gap-1 items-center text-[#197b30] text-[16px] md:leading-[19px]">
          <MdOutlineEnhancedEncryption size={24} />
          Change Password
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F4F4F4] py-6 px-2 flex flex-col gap-3"
      >
        <div className=" relative">
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
            className={` w-full p-2 pl-4  border placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
              errors.oldPassword
                ? "border-[#e10] focus-within:border-[#e10]"
                : "border-[##EEEEEE] "
            }`}
          />
          <button
            className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
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
            className="text-[14px] leading-[16px] block text-[#333333]"
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
            className={` w-full p-2 pl-4  border  placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
              errors.newPassword
                ? "border-[#e10] focus-within:border-[#e10]"
                : "border-[##EEEEEE] "
            }`}
          />
          <button
            className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
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
            className={` w-full p-2 pl-4  border  placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${
              errors.repeatPassword
                ? "border-[#e10] focus-within:border-[#e10]"
                : "border-[##EEEEEE] "
            }`}
          />
          <button
            className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
            onClick={toggleEye}
          >
            {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
          {errors.repeatPassword && (
            <p className="text-[#F91919]">{"Repeat password is required"}</p>
          )}
        </div>

        <div className="flex items-center justify-center mt-8  ">
          <button
            type="submit"
            className="bg-[#197B30] py-4 px-7 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
