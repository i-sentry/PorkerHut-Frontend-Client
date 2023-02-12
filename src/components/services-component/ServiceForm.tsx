import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";
interface contactProps{
  text: string;
  title: string;
}
const ServiceForm = ({ text, title }: contactProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm<any>();
  const [userData, setUserData] = useState<{
    [name: string]: string | boolean;
  }>();

  const submitData = async (values: any) => {
    setUserData(values);
    reset();
  };

  // console.log({ userData });

  const formData = [
    {
      label: "Full Name",
      name: "full_name",
      place_holder: "Enter Full Name",
      error_message: "Full Name is Required",
      type: "text",
      required: true,
    },
    {
      label: "Email Address",
      name: "email_address",
      place_holder: "Enter Email Address",
      error_message: "Email Address is Required",
      type: "text",
      required: true,
    },
    {
      label: "Phone Number",
      name: "phone_number",
      place_holder: "Enter Phone Number",
      error_message: "Phone Number is Required",
      type: "text",
      required: true,
    },

    {
      label: "Subject",
      name: "subject",
      place_holder: "Enter Subject",
      error_message: "Subject is Required",
      type: "text",
      required: true,
    },
  ];

  const textData = [
    {
      label: "Message",
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
      text: "+234804589322",
    },
    {
      icon: <IoMail />,
      text: "support@pokerhut.com",
    },
    {
      icon: <IoLocationSharp />,
      text: "No.1, Victoria Island Lagos off, Kosofe close, Nigeria",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-4 h-full">
      <div className="max-w-[514px] ">
        <div className="max-w-[514px] w-full bg-[#F4F4F4] p-8  rounded ">
          <h1 className="text-xl font-semibold ">{title}</h1>
          <p className="text-sm justify-end  text-[ #797979] mt-3 font-light tracking-tight">
            {text}
          </p>
          <form onSubmit={handleSubmit(submitData)}>
            {formData.map((data, index) => (
              <div className="my-2 mb-4 w-full" key={index}>
                <label
                  htmlFor={data.name}
                  className={`block text-[14px] mb-[6px] text-HeadingColor ${
                    data.required &&
                    "after:content-['*'] after:ml-0.5 after:text-red-500"
                  } }`}
                >
                  {data.label}
                </label>
                <input
                  id={data.name}
                  type={data.type}
                  // required={(required === "Yes" || required === true) ? true : false}
                  className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-gray-900 placeholder:text-sm rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 ${
                    errors[data.name] && "border-ErrorBorder"
                  }`}
                  placeholder={data.place_holder}
                  {...register(data.name, {
                    required: data.required ? data.error_message : undefined,
                    minLength: 1,
                  })}
                />
                <p className="my-2 text-ErrorColor text-xs">
                  {/* {errors[data.name] && errors[data.name].message} */}
                </p>
              </div>
            ))}
            {textData.map((data, index) => (
              <div className="my-2 mb-2 w-full">
                <label
                  htmlFor={data.name}
                  className={`block text-[14px] mb-[6px] text-HeadingColor ${
                    data.required &&
                    "after:content-['*'] after:ml-0.5 after:text-red-500"
                  } }`}
                >
                  {data.label}
                </label>
                <textarea
                  className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] placeholder:text-sm text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm  ${
                    errors[data.name] && "border-ErrorBorder"
                  }`}
                  placeholder={data.place_holder}
                  {...register(data.name, {
                    required: data.required ? data.error_message : undefined,
                    minLength: 1,
                  })}
                  rows={6}
                  cols={73.4}
                  name={data.name}
                ></textarea>
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#197B30] md:mt-6 text-[#fff] p-3 tracking-wider rounded-md px-10 active:scale-90 duration-300 transition-all ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <div className="hidden md:grid md:grid-cols-3 md:gap-2">
            {contactInfo.map((data, index) => (
              <div className="bg-[#f4f4f4] flex flex-col h-36 w-full  items-center justify-center mt-8 p-3">
                <figure className="text-center h-8 w-8 bg-[#fff] flex items-center justify-center rounded-full">
                  {data?.icon}
                </figure>
                <p className="text-sm font-medium text-center mt-4 text-[#333333]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="hidden md:block text-center font-medium text-sm mt-4 text-[#797979]">
              Line is open between 8:00AM WAT & 4:00PM WAT
            </p>
          </div>
        </div>
        <div>
          <div className="md:hidden grid  grid-rows-3 gap-4 mt-8">
            {contactInfo.map((data, index) => (
              <div className="bg-[#f4f4f4] flex flex-col h-36 w-full  items-center justify-center  p-3">
                <figure className="text-center h-8 w-8 bg-[#fff] flex items-center justify-center rounded-full">
                  {data?.icon}
                </figure>
                <p className="text-sm font-medium  text-center mt-4 text-[#333333]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="md:hidden mt-4 block font-medium text-center text-sm text-[#797979]">
              Line is open between 8:00AM WAT & 4:00PM WAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
