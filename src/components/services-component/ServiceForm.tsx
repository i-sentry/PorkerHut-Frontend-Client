import React from "react";
import { useForm } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { formData } from "../../utils/formData";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
interface contactProps {
  text: string;
  title: string;
}
const ServiceForm = ({ text, title }: contactProps) => {
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("Full Name is required"),
    email_address: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    phone_number: Yup.string()
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
  // const [userData, setUserData] = useState<{
  //   [name: string]: string | boolean;
  // }>();

  const submitData = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
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
      text: "+234804589322",
    },
    {
      icon: <IoMail />,
      text: "support@porkerhut.com",
    },
    {
      icon: <IoLocationSharp />,
      text: "No.1, Victoria Island Lagos off, Kosofe close, Nigeria",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center md:p-4 h-full">
      <div className="md:max-w-[500px] xxs:w-full ">
        <div className="md:max-w-[700px] xxs:w-full bg-[#F4F4F4] md:p-8 xxs:px-5 xxs:py-10  rounded ">
          <h1 className="md:text-[24px] md:leading-[28px] text-[#333333] xxs:text-[20px] xxs:leading-[23px] font-medium ">
            {title}
          </h1>
          <p className="text-[16px] leading-[24px] xxs:text-[14px] xxs:leading-[20px] justify-end  text-[#797979] mt-3 mb-6 font-normal ">
            {text}
          </p>
          <form onSubmit={handleSubmit(submitData)}>
            {formData.map((data, index) => (
              <div className="my-2 mb-5 w-full" key={index}>
                <label
                  htmlFor={data.name}
                  className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333] ${
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
                  className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 ${
                    errors[data.name] ? "border-[#dd1313]" : ""
                  }`}
                  placeholder={data.place_holder}
                  {...register(data.name)}
                />
                <p className="my-2 text-[#dd1313] text-xs">
                  {" "}
                  {errors[data.name] ? data?.error_message : ""}
                </p>
              </div>
            ))}
            {textData.map((data, index) => (
              <div className="my-2 mb-2 w-full">
                <label
                  htmlFor={data.name}
                  className={`block text-[14px] leading-[16px] mb-[6px] text-[#333333] ${
                    data.required &&
                    "after:content-['*'] after:ml-0.5 after:text-red-500"
                  } }`}
                >
                  {data.label}
                </label>
                <textarea
                  className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm  ${
                    errors[data.name] ? "border-[#dd1313]" : ""
                  }`}
                  placeholder={data.place_holder}
                  {...register(data.name)}
                  rows={6}
                  cols={73.4}
                  name={data.name}
                ></textarea>
                <p className="my-2 text-[#dd1313] text-xs">
                  {" "}
                  {errors[data.name] ? data?.error_message : ""}
                </p>
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#197B30] md:mt-6 text-[#fff] p-3  rounded-sm px-10 active:scale-90  text-[14px] leading-[24px] duration-300 transition-all ease-in-out xxs:mt-4"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <div className="hidden md:grid md:grid-cols-3 md:gap-2">
            {contactInfo.map((data, index) => (
              <div className="bg-[#f4f4f4] flex flex-col h-36 w-full  items-center justify-center mt-8 p-3">
                <figure className="text-center h-8 w-8 bg-[#fff] flex items-center justify-center rounded-full border border-[#D9D9D9]">
                  {data?.icon}
                </figure>
                <p className="text-sm font-medium text-center mt-4 text-[#333333]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="hidden md:block text-center font-medium text-[16px] leading-[24px] mt-7 text-[#797979]">
              Line is open between 8:00AM WAT & 4:00PM WAT
            </p>
          </div>
        </div>
        <div className="mx-5 mb-10">
          <div className="md:hidden grid  grid-rows-3 gap-6 mt-16">
            {contactInfo.map((data, index) => (
              <div className="bg-[#f4f4f4] flex flex-col h-36 w-full  items-center justify-center  p-3">
                <figure className="text-center h-8 w-8 bg-[#fff] flex items-center justify-center rounded-full border border-[#D9D9D9]">
                  {data?.icon}
                </figure>
                <p className="text-sm font-medium  text-center mt-4 text-[#333333]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
          <div className="my-8">
            <p className="md:hidden  block font-medium text-center text-[16px] leading-[24px] text-[#797979] whitespace-nowrap">
              Line is open between 8:00AM - 4:00PM WAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
