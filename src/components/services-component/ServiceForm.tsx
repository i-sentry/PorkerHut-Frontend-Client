import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { formData } from "../../utils/formData";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useContactForm } from "../../services/hooks/users";
import { toast, ToastContainer } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";
interface contactProps {
  text: string;
  title: string;
}
const ServiceForm = ({ text, title }: contactProps) => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: Yup.string()
      .required("Valid Phone Number is required")
      .min(6, "Valid Phone Number must be at least 6 characters")
      .max(12, "Valid Phone Number must not exceed 12 characters"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(validationSchema) });
  const contact = useContactForm();
  // const [userData, setUserData] = useState<{
  //   [name: string]: string | boolean;
  // }>();

  const submitData = (data: any) => {
    setLoading(true);
    contact
      .mutateAsync(data)
      .then((res: any) => {
        toast.success(
          "Form Submitted Successfully. PorkerHut will get back to you soon",
        );
        setLoading(false);
        reset();
      })
      .catch((err: any) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const textData = [
    {
      label: "message",
      name: "message",
      place_holder: "Type Message",
      error_message: "Message is Required",
      type: "text",
      required: true,
    },
  ];

  const contactInfo = [
    {
      icon: <MdPhoneEnabled />,
      text: "+2348057808076",
      url: "tel:+2348057808076",
    },
    {
      icon: <IoMail />,
      text: "info@porkerhut.com",
      url: "mailto:info@porkerhut.com",
    },
    {
      icon: <IoLocationSharp />,
      text: "Plot No. 41198 Cadastral Zone D24, Kapa, Kugwaru, Nasarawa State, Nigeria",
      url: "https://www.google.com/maps?q=Plot+No.+41198+Cadastral+Zone+D24,+Kapa,+Kugwaru,+Nasarawa+State,+Nigeria",
    },
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center md:p-4">
      {/* <ToastContainer /> */}
      <div className="xxs:w-full md:max-w-[500px] ">
        <div className="rounded bg-[#F4F4F4] xxs:w-full xxs:px-5 xxs:py-10 md:max-w-[700px]  md:p-8 ">
          <h1 className="font-medium text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[24px] md:leading-[28px] ">
            {title}
          </h1>
          <p className="mt-3 mb-6 justify-end text-[16px] font-normal  leading-[24px] text-[#797979] xxs:text-[14px] xxs:leading-[20px] ">
            {text}
          </p>
          <form onSubmit={handleSubmit(submitData)}>
            {formData.map((data, index) => (
              <div className="my-2 mb-5 w-full" key={index}>
                <label
                  htmlFor={data.name}
                  className={`mb-[6px] block text-[14px] font-normal leading-[16px] text-[#333333] ${
                    data.required &&
                    "after:ml-0.5 after:text-red-500 after:content-['*']"
                  } }`}
                >
                  {data.label}
                </label>
                <input
                  id={data.name}
                  type={data.type}
                  // required={(required === "Yes" || required === true) ? true : false}
                  className={`relative  block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:border-green-700 focus:outline-none focus:ring-green-700 sm:text-sm ${
                    errors[data.name] ? "border-[#dd1313]" : ""
                  }`}
                  placeholder={data.place_holder}
                  {...register(data.name)}
                />
                <p className="my-2 text-xs text-[#dd1313]">
                  {" "}
                  {errors[data.name] ? data?.error_message : ""}
                </p>
              </div>
            ))}
            {textData.map((data, index) => (
              <div className="my-2 mb-2 w-full">
                <label
                  htmlFor={data.name}
                  className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                    data.required &&
                    "after:ml-0.5 after:text-red-500 after:content-['*']"
                  } }`}
                >
                  {data.label}
                </label>
                <textarea
                  className={`relative  block w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:border-green-700 focus:outline-none focus:ring-green-700 sm:text-sm  ${
                    errors[data.name] ? "border-[#dd1313]" : ""
                  }`}
                  placeholder={data.place_holder}
                  {...register(data.name)}
                  rows={6}
                  cols={73.4}
                  name={data.name}
                ></textarea>
                <p className="my-2 text-xs text-[#dd1313]">
                  {" "}
                  {errors[data.name] ? data?.error_message : ""}
                </p>
              </div>
            ))}
            <button
              disabled={loading}
              type="submit"
              className={`${loading && "opacity-50"} inline-flex items-center justify-center rounded-sm bg-[#197B30] p-3 px-10  text-[14px] leading-[24px] text-[#fff]  transition-all duration-300 ease-in-out active:scale-90 xxs:mt-4 md:mt-6`}
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <CgSpinner size={20} className="animate-spin" />
                  Sending...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
        <div>
          <div className="hidden md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-3.5">
            {contactInfo.map((data, index) => (
              <div
                key={index}
                className={`flex h-36 w-full flex-col items-center  justify-center bg-[#f4f4f4] p-3 md:w-[calc(50%_-_5px)] ${index === 2 && "flex-grow"}`}
              >
                <figure className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D9D9] bg-[#fff] text-center">
                  {data?.icon}
                </figure>
                <Link
                  to={data.url}
                  className="mt-4 block text-center text-sm font-medium text-[#333333]"
                >
                  {data?.text}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <p className="mt-7 hidden text-center text-[16px] font-medium leading-[24px] text-[#797979] md:block">
              Line is open between 8:00AM WAT & 4:00PM WAT
            </p>
          </div>
        </div>
        <div className="mx-5 mb-10 mt-5">
          <div className="mt-16 grid  grid-rows-3 gap-6 md:hidden">
            {contactInfo.map((data, index) => (
              <div className="flex h-36 w-full flex-col items-center  justify-center bg-[#f4f4f4]  p-3">
                <figure className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D9D9] bg-[#fff] text-center">
                  {data?.icon}
                </figure>
                <p className="mt-4 text-center  text-sm font-medium text-[#333333]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
          <div className="my-8">
            <p className="block  whitespace-nowrap text-center text-[16px] font-medium leading-[24px] text-[#797979] md:hidden">
              Line is open between 8:00AM - 4:00PM WAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
