import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiCamera } from "react-icons/fi";
// import { HiOutlineArrowNarrowLeft, HiOutlineChevronLeft } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
// import MobileTabs from "../tabs/MobileTabs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import {
//   CountryDropdown,
//   RegionDropdown,
//   CountryRegionData,
// } from "react-country-region-selector";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { HiOutlineChevronLeft } from "react-icons/hi";

type FormData = {
  fullName: string;
  email: string;
  storeName: string;
  storeId: number;
  streetAddress: string;
  location: string;
  phoneNumber: string;
};

interface IAccount {
  setShowTab: React.Dispatch<React.SetStateAction<boolean>>;
}
const AccountInfo = ({ setShowTab }: IAccount) => {
  const [, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  // const [country, setCountry] = useState("");
  const [email, ] = useState("");
  const [storeName, ] = useState("");
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    storeName: Yup.string()
      .required("Store Name is required")
      .min(6, "Username must be at least 6 characters")
      .max(50, "Username must not exceed 50 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string().required("Address is required"),
    storeId: Yup.string().required("Store ID is required"),

    streetAddress: Yup.string().required("Street Address is required"),

    location: Yup.string().required("Location is required"),

    phoneNumber: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(12, "Valid Phone Number must not exceed 12 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  console.log({ errors });

  const onSubmit = (data: FormData) => {
    data.phoneNumber = phoneNumber;

    data.email = email;
    data.storeName = storeName;

    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteConfirmed = () => {
    // Perform the delete operation
    // ...
    setIsModalOpen(false);
  };

  const handleDeleteCancelled = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="flex items-center gap-2  ">
        <div onClick={() => setShowTab((prev) => !prev)}>
          <HiOutlineChevronLeft size={20} />
        </div>
        <span className="flex gap-1 items-center text-[#197b30] text-[16px] md:leading-[19px]">
          <MdOutlinePerson size={24} />
          Account Information
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F4F4F4] mt-4 py-8 px-4 rounded-md mb-10"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center border border-slate-400 rounded-full">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="uploaded image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className="w-28 h-28 rounded-full cursor-pointer"
              />
            ) : (
              <>
                <label htmlFor="file" className="">
                  <FiCamera size={20} className="text-gray-400" />
                  <span className=" cursor-pointer  my-auto text-[#197B30]"></span>{" "}
                </label>

                <input
                  id="file"
                  type="file"
                  name="file"
                  onClick={handleImage}
                  className=" hidden appearance-none outline-none text-sm cursor-pointer"
                />
              </>
            )}
          </div>

          <h3 className=" text-[18px] leading-[21px]  text-[#333333] pt-2 font-semibold">
            John Doe
          </h3>
          <label
            htmlFor="file"
            className="text-sm flex items-center gap-2 text-right"
          >
            <FiCamera className="text-[#197B30]" />
            <span className=" cursor-pointer  my-auto text-[#197B30] text-[13px] leading-[15px] py-4 font-medium">
              Change profile picture
            </span>{" "}
          </label>
        </div>

        <div
          className="flex flex-col gap-4"
          style={{
            transitionDelay: "0.2s",
            transition: "opacity 0 0.5s ease-in",
          }}
        >
          <div className=" w-full ">
            <label
              className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor=""
            >
              FullName
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter Your Full Name"
              className={`w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1  ${
                errors.fullName ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.fullName?.message}
            </div>
          </div>

          <div className="w-full xxs:mt-3 md:mt-0">
            <label
              className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor=""
            >
              Store Name
            </label>
            <input
              type="text"
              {...register("storeName")}
              placeholder="Enter Your Last Name"
              className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5  focus:outline-[#197b30] focus:outline-1 ${
                errors.storeName ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.storeName?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor=""
            >
              Email Address
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="Enter Your Email Address"
              className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-sm placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                errors.email ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.email?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor=""
            >
              Store ID
            </label>
            <input
              type="number"
              {...register("storeId")}
              placeholder="Enter Store ID"
              className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-sm placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                errors.storeId ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.storeId?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor=""
            >
              Street Address
            </label>
            <input
              type="text"
              {...register("streetAddress")}
              placeholder="Enter Street Address"
              className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-sm placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                errors.streetAddress ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.streetAddress?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor=""
            >
              Location
            </label>
            <input
              type="text"
              {...register("location")}
              placeholder="Enter Location"
              className={` w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-sm placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-5 focus:outline-[#197b30] focus:outline-1 ${
                errors.location ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.location?.message}
            </div>
          </div>

          <div className="mb-3 input ">
            <label
              className="  text-[#333333] text-[14px] block leading-[16px] font-normal mb-1"
              htmlFor="phonenumber"
            >
              Phone Number
            </label>
            <PhoneInput
              country={"ng"}
              value={phoneNumber}
              // {...register("phonenumber")}
              onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
              inputProps={{
                name: "phonenumber",

                id: "phonenumber",
                className: `w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-sm placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-12 focus:outline-[#197b30] focus:outline-1 ${
                  errors.phoneNumber ? "border-[#dd1313]" : ""
                }`,
              }}
            />
            <div className="text-[#dd1313] text-sm">
              {errors.phoneNumber?.message}
            </div>
          </div>

          <div className="flex items-center justify-between  pt-3 pb-8">
            <div
              onClick={handleDeleteClick}
              className="border border-[#F91919] px-6 py-4  text-[#F91919]  rounded text-[14px] leading-[16px] font-semibold"
            >
              Delete Account{" "}
            </div>
            <button
              type="submit"
              className="bg-[#197B30] border-[#197B30] border text-white px-8 py-4 rounded text-[14px] leading-[16px]  font-semibold"
            >
              Save Changes{" "}
            </button>
          </div>
        </div>
      </form>

      {/* Render the modal if open */}
      {isModalOpen && (
        <DeleteConfirmationModal
          onDelete={handleDeleteConfirmed}
          onCancel={handleDeleteCancelled}
        />
      )}
    </div>
  );
};

export default AccountInfo;

// Modal component
const DeleteConfirmationModal = ({
  onDelete,
  onCancel,
}: {
  onDelete: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
      <div className="bg-white w-80 p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl text-[#197B30] font-medium mb-4">
          Delete Confirmation
        </h2>
        <p className="text-[#F91919]">
          Are you sure you want to delete your account?
        </p>
        <p className="text-[#797979] text-sm mt-3 border-t border-b py-2">
          Note: When you delete your account, all your information will be
          deleted permanently and cannot be recovered back after deletion.
        </p>
        <div className="flex justify-end mt-6">
          <button
            className="px-4 py-2 mr-2 bg-red-500 border border-[#F91919] text-white rounded "
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 bg-[#197B30] text-[#fff] rounded "
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
