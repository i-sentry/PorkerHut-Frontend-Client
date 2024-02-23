import React, { useEffect, useState } from "react";
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
import { FaUserCircle } from "react-icons/fa";

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
  const [vendor, setVendor] = useState<any>({});
  const [, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImage = (e: any) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      console.log(file, "file");
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  // const [country, setCountry] = useState("");
  // const [email] = useState("");
  // const [storeName] = useState("");

  useEffect(() => {
    //@ts-ignore
    const storedVendor = JSON.parse(localStorage.getItem("vendor"));

    if (storedVendor !== null) {
      setVendor(storedVendor);
    }
  }, []);

  console.log(vendor);
  const vendorName = vendor?.vendor?.businessInformation?.businessOwnerName;

  // const validationSchema = Yup.object().shape({
  //   fullName: Yup.string().required("Full Name is required"),
  //   storeName: Yup.string()
  //     .required("Store Name is required")
  //     .min(6, "Username must be at least 6 characters")
  //     .max(50, "Username must not exceed 50 characters"),
  //   email: Yup.string().required("Email is required").email("Email is invalid"),
  //   address: Yup.string().required("Address is required"),
  //   storeId: Yup.string().required("Store ID is required"),

  //   streetAddress: Yup.string().required("Street Address is required"),

  //   location: Yup.string().required("Location is required"),

  //   phoneNumber: Yup.string()
  //     .required("Valid Phone Number is required")
  //     .min(6, "Valid Phone Number must be at least 6 characters")
  //     .max(12, "Valid Phone Number must not exceed 12 characters"),
  // });

  const phone = vendor?.vendor?.sellerAccountInformation.phoneNumber;

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    storeName: Yup.string()
      .required("Store Name is required")
      .min(6, "Store Name must be at least 6 characters")
      .max(50, "Store Name must not exceed 50 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    storeId: Yup.string().required("Store ID is required"), // Assuming it's a number
    streetAddress: Yup.string().required("Street Address is required"),
    location: Yup.string().required("Location is required"),
    phoneNumber: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(14, "Valid Phone Number must not exceed 14 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: vendor?.vendor?.businessInformation?.businessOwnerName || "",
      storeName: vendor?.vendor?.sellerAccountInformation.shopName || "",
      email: vendor?.vendor?.sellerAccountInformation.email || "",
      storeId: vendor?.vendor?._id || "",
      streetAddress: vendor?.vendor?.businessInformation.address1 || "",
      location: vendor?.vendor?.businessInformation.city || "",
      phoneNumber: vendor?.vendor?.sellerAccountInformation.phoneNumber || "",
    },
  });

  useEffect(() => {
    if (vendor) {
      reset({
        fullName: vendor?.vendor?.businessInformation?.businessOwnerName || "",
        storeName: vendor?.vendor?.sellerAccountInformation.shopName || "",
        email: vendor?.vendor?.sellerAccountInformation.email || "",
        storeId: vendor?.vendor?._id || "",
        streetAddress: vendor?.vendor?.businessInformation.address1 || "",
        location: vendor?.vendor?.businessInformation.city || "",
        phoneNumber: vendor?.vendor?.sellerAccountInformation.phoneNumber || "",
      });
    }
  }, [reset, vendor]);

  const onSubmit = (data: FormData) => {
    console.log(data.storeName);

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
        <div
          onClick={() => setShowTab((prev) => !prev)}
          className="flex cursor-pointer items-center"
        >
          <HiOutlineChevronLeft size={20} color="#197b30" />
          <span className="flex items-center gap-1 text-[16px] text-[#197b30] md:leading-[19px]">
            <MdOutlinePerson size={24} />
            Account Information
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 mb-10 rounded-md bg-[#F4F4F4] py-8 px-4"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-400">
            {/* {imageUrl ? (
              <img
                src={imageUrl}
                alt="uploaded"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className="h-28 w-28 cursor-pointer rounded-full object-cover"
              />
            ) : (
              <>
                <label htmlFor="file" className="">
                  <FiCamera size={20} className="text-gray-400" />
                  <span className=" my-auto  cursor-pointer text-[#197B30]"></span>{" "}
                </label>

                <input
                  id="file"
                  type="file"
                  name="file"
                  onClick={handleImage}
                  className=" hidden appearance-none text-sm outline-none "
                />
              </>
            )} */}
            <FaUserCircle size={60} className="text-neutral-300" />
          </div>

          <h3 className=" mb-6 pt-2 text-[18px] font-semibold leading-[21px] text-[#333333]">
            {vendorName}
          </h3>
          {/* <label
            htmlFor="file"
            className="flex items-center gap-2 text-right text-sm"
          >
            <FiCamera className="text-[#197B30]" />
            <span className=" my-auto  cursor-pointer py-4 text-[13px] font-medium leading-[15px] text-[#197B30]">
              Change profile picture
            </span>{" "}
          </label> */}
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
              className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor=""
            >
              FullName
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter Your Full Name"
              className={`h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30]  ${
                errors.fullName ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.fullName?.message}
            </div>
          </div>

          <div className="w-full xxs:mt-3 md:mt-0">
            <label
              className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor=""
            >
              Store Name
            </label>
            <input
              type="text"
              {...register("storeName")}
              placeholder="Enter Your Last Name"
              className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2]  focus:outline-1 focus:outline-[#197b30] ${
                errors.storeName ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.storeName?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor=""
            >
              Email Address
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="Enter Your Email Address"
              className={` h-12 w-full rounded-sm border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                errors.email ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.email?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor=""
            >
              Store ID
            </label>
            <input
              type="text"
              disabled
              {...register("storeId")}
              placeholder="Enter Store ID"
              className={` h-12 w-full rounded-md border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                errors.storeId ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.storeId?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor=""
            >
              Street Address
            </label>
            <input
              type="text"
              {...register("streetAddress")}
              placeholder="Enter Street Address"
              className={` h-12 w-full rounded-sm border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                errors.streetAddress ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.streetAddress?.message}
            </div>
          </div>

          <div className=" input my-1 ">
            <label
              className=" mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor=""
            >
              Location
            </label>
            <input
              type="text"
              {...register("location")}
              placeholder="Enter Location"
              className={` h-12 w-full rounded-sm border border-[#D9D9D9] pl-5 text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:outline-1 focus:outline-[#197b30] ${
                errors.location ? "border-[#dd1313]" : ""
              }`}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.location?.message}
            </div>
          </div>

          <div className="input mb-3 ">
            <label
              className="  mb-1 block text-[14px] font-normal leading-[16px] text-[#333333]"
              htmlFor="phonenumber"
            >
              Phone Number
            </label>
            <PhoneInput
              country={"ng"}
              value={phoneNumber || phone}
              // {...register("phonenumber")}
              onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
              inputProps={{
                name: "phonenumber",
                id: "phonenumber",
                className: `w-full h-12 text-[#333333] border border-[#D9D9D9] rounded-md placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] pl-12 focus:outline-[#197b30] focus:outline-1 ${
                  errors.phoneNumber ? "border-[#dd1313]" : ""
                }`,
              }}
            />
            <div className="text-sm text-[#dd1313]">
              {errors.phoneNumber?.message}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 pt-3  pb-8 xs:flex-row">
            <div
              onClick={handleDeleteClick}
              className="w-full cursor-pointer rounded border border-[#F91919] px-6 py-4 text-center  text-[14px]  font-semibold leading-[16px] text-[#F91919] xs:w-auto"
            >
              Delete Account{" "}
            </div>
            <button
              type="submit"
              className="w-full rounded border border-[#197B30] bg-[#197B30] px-8 py-4 text-[14px] font-semibold leading-[16px] text-white  xs:w-auto"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
      <div className="relative w-80 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-medium text-[#197B30]">
          Delete Confirmation
        </h2>
        <p className="text-[#F91919]">
          Are you sure you want to delete your account?
        </p>
        <p className="mt-3 border-t border-b py-2 text-sm text-[#797979]">
          Note: When you delete your account, all your information will be
          deleted permanently and cannot be recovered back after deletion.
        </p>
        <div className="mt-6 flex justify-end">
          <button
            className="mr-2 rounded border border-[#F91919] bg-red-500 px-4 py-2 text-white "
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="rounded bg-[#197B30] px-4 py-2 text-[#fff] "
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
