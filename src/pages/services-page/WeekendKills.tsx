import React from "react";
import NavBar from "../../components/nav-component/NavBar";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import BlogBanner from "../../assets/images/BlogBanner.png";
import SuyaImg from "../../assets/images/SuyaImg.png";
import ServiceForm from "../../components/services-component/ServiceForm";
import Footer from "../../components/footer-component/Footer";
import AppLayout from "../../components/utility/AppLayout";
import { useForm, Controller } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";

interface WeekendKillProps {
  fullName: string;
  email: string;
  message: string;
  phone: number;
  subject: string;
  address: string;
  city: string;
}

const WeekendKills = () => {


  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm<WeekendKillProps>();


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
    <AppLayout>
      <div>
        <div className="">
          <div className="">
            <div
              className="flex   items-center lg:justify-start xxs:justify-center w-full lg:h-[300px] xxs:h-[300px] bg-cover bg-center  lg:px-14"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${BlogBanner}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
              }}
            >
              <div className="">
                <h1 className="mb-2 font-normal tracking-tight lg:text-[32px] lg:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
                  Weekend Kills
                </h1>
                <div className="">
                  <BreadCrumbs
                    items={[
                      {
                        name: "Home",
                        link: "/",
                      },
                      {
                        name: "Weekend Kills",
                        link: "/weekend",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-14 pt-16 ">
        <div className=" bg-[#F4F4F4]     lg:flex">
          <div className=" lg:w-1/2 xxs:px-4 xxs:pt-16 lg:pt-0 flex-1 flex justify-center lg:pl-10 flex-col lg:pr-8">
            <h1 className="lg:font-medium  lg:text-[32px] lg:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333]   mb-2">
              Why Weekend Kills
            </h1>
            <p className=" leading-6 xxs:text-[14px] lg:text-[14px] text-[#797979] text-justify">
              Looking for an affordable and ethical way to enjoy high-quality
              pork? Look no further than Porker Hut. We are committed to
              providing you with locally sourced and ethically raised pork that
              is not only delicious but also sustainably produced. Our weekend
              kill program offers a cost-effective solution for customers to
              purchase and share a whole pig at a reduced price by partnering
              with other like-minded individuals. And, our delivery service
              ensures that your pork arrives fresh and ready for your enjoyment.
              At Porker Hut, we believe in transparency and traceability. We
              carefully select our pigs and use environmentally responsible
              rearing practices, providing them with access to natural resources
              such as fresh air, water, and high-quality grain feed. We also
              offer veterinary services to ensure the health and well-being of
              our animals. Place your order today and experience the difference
              that high-quality, locally sourced-pork can make.
            </p>
          </div>
          <figure className="lg:w-1/2">
            <img
              className="object-cover w-full xxs:py-10 h-full  xxs:px-4 lg:p-0"
              src={SuyaImg}
              alt="weekendImg"
            />
          </figure>
        </div>
      </div>

      <section className="w-full h-full mb-6">
        <div className="flex flex-col items-center justify-center md:p-4 h-full">
          <div className="md:max-w-[500px] xxs:w-full ">
            <div className="md:max-w-[700px] xxs:w-full bg-[#F4F4F4] md:p-8 xxs:px-5 xxs:py-10  rounded ">
              <h1 className="md:text-[24px] md:leading-[28px] text-[#333333] xxs:text-[20px] xxs:leading-[23px] font-medium ">
                Reach out for Weekend Kills
              </h1>
              <p className="text-[16px] leading-[24px] xxs:text-[14px] xxs:leading-[20px] justify-end  text-[#797979] mt-3 mb-6 font-normal ">
                How can we help? Please contact us and we will get back to you as soon as
                possible. If you have an inquiry about your order, you can respond directly to the
                order confirmation email or contact us via chat.
              </p>
              <form onSubmit={handleSubmit(submitData)}>

                <div className="my-2 mb-5 w-full" >
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        "after:content-['*'] after:ml-0.5 after:text-red-500"
                        } }`}
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    // required={(required === "Yes" || required === true) ? true : false}
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Enter your full name"
                    {...register("fullName")}
                  />

                </div>
                <div className="my-2 mb-5 w-full" >
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        "after:content-['*'] after:ml-0.5 after:text-red-500"
                        } }`}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Enter email address"
                    {...register("email")}
                  />

                </div>
                <div className="my-2 mb-5 w-full" >
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        "after:content-['*'] after:ml-0.5 after:text-red-500"
                        } }`}
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Enter your address"
                    {...register("address")}
                  />

                </div>
                <div className="my-2 mb-5 w-full" >
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        "after:content-['*'] after:ml-0.5 after:text-red-500"
                        } }`}
                  >
                    City/Town
                  </label>
                  <input
                    id="city"
                    type="text"
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Enter  your city/town"
                    {...register("city")}
                  />

                </div>
                <div className="my-2 mb-5 w-full" >
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        `}
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="number"
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Enter your phone number"
                    {...register("phone")}
                  />

                </div>

                <div className="my-2 mb-5 w-full" >
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        `}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Enter subject here"
                    {...register("subject")}
                  />

                </div>


                <div className="my-2 mb-2 w-full">
                  <label
                    htmlFor=""
                    className={`block text-[14px] leading-[16px] mb-[6px] text-[#333333]
                        "after:content-['*'] after:ml-0.5 after:text-red-500"
                        } }`}
                  >
                    Message
                  </label>
                  <textarea
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm 
                        }`}
                    placeholder="Type message here"
                    {...register("message")}
                    rows={6}
                    cols={73.4}
                    name="message"
                  ></textarea>

                </div>

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
      </section>
    </AppLayout>
  );
};

export default WeekendKills;
