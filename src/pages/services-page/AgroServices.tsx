
// import NavBar from "../../components/nav-component/NavBar";
// import Footer from "../../components/footer-component/Footer";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import AgroservImg from "../../../src/assets/images/AgroservImg.png";
import FarmingImg from "../../../src/assets/images/FarmingImg.png";
import FeedImg from "../../../src/assets/images/FeedImg.png";
import livestock1 from "../../../src/assets/livestock/livestock3.png";
import PigFarmingImg from "../../../src/assets/images/PigFarmingImg.png";
import { useLocation } from "react-router-dom";
import AppLayout from "../../components/utility/AppLayout";
// import ServiceForm from "../../components/services-component/ServiceForm";
// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";




interface AgroServicesProps {
  fullName: string;
  email: string;
  message: string;
  phone: number;
  location: string;
  subject: string;
}

const AgroServices = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  // const agroService = query.get("agro-service");

  const {
    register,
    handleSubmit,
    // getValues,
    // control,
    reset,
    formState: { errors },
  } = useForm<AgroServicesProps>();


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
      <div className="">
        <div className="lg:w-full lg:mb-12">
          <div
            className="  flex   items-center lg:justify-start xxs:justify-center w-full lg:h-[300px] xxs:h-[300px] bg-cover bg-center  lg:px-14"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${AgroservImg}')`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className=" ">
              <h1 className="mb-2 font-normal tracking-tight lg:text-[32px] lg:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
                Agro Services
              </h1>

              <BreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "Agro Services",
                    link: "/agro-services",
                  },
                ]}
              />
            </div>
          </div>
          <div className="lg:px-14 pt-16 ">
            <div className="bg-[#F4F4F4] lg:flex ">
              <div className="lg:w-1/2 xxs:px-4 xxs:pt-16 lg:pt-0 flex-1 flex justify-center lg:pl-10 flex-col lg:pr-8">
                <h1 className="lg:font-medium  lg:text-[32px] lg:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333] whitespace-nowrap  mb-2">
                  What our Agro services is <br className=" xxs:hidden lg:flex" /> all
                  about
                </h1>
                <p className="leading-6 xxs:text-[14px] lg:text-[14px] text-[#797979] text-justify">
                  Agro services play a crucial role in pork meat production and
                  supply chain, which involves farrow-to-finish operations,
                  genetics, feed formulation, animal health, and waste
                  management services. These services are essential in
                  delivering high-quality, sustainable, and healthy pork meat
                  that meets the needs and preferences of customers. As a
                  provider of agro services, we take pride in our commitment to
                  animal welfare, nutrition, and sustainability, which ensures
                  that our products not only taste great but also promote the
                  health of our customers and the environment.
                </p>
              </div>
              <div className="lg:w-1/2 ">
                <figure>
                  <img
                    className="object-cover w-full xxs:py-10 h-full  xxs:px-4 lg:p-0"
                    src={FarmingImg}
                    alt="AgroImage"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className=" text-center my-12 xxs:mt-14 ">
            <h1 className="font-medium  lg:text-[32px] lg:leading-[47px] xxs:text-[20px] xxs:leading-[23px] text-[#333333]  ">
              Our Agro Services
              <div className=" xxs:w-20 h-1.5 w-14 bg-[#197B30] m-auto mt-2"></div>
            </h1>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:px-14 lg:gap-10 xxs:mb-12 lg:mb-0">
            <div
              className="card-container lg:mt-2 lg:p-4 xxs:p-3 relative xxs:h-[340px] lg:h-[480px] xxs:mb-4 lg:mb-0 xxs:mx-4 lg:mx-0 rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${PigFarmingImg})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-[#E6E6E6] lg:text-[32px] lg:leading-[28px] font-medium xxs:text-[16px] xxs:leading-[19px]">
                  Pig Farming
                </h1>
                <p className="text-[#E6E6E6] mt-3 lg:text-[14px] leading-[24px] font-normal xxs:text-[13px] text-justify">
                  Pig animal farming is better for the world. This is why we
                  raise our livestock on pasture based farms which are
                  environmentally beneficial and allows our livestock produce
                  healthier meat. In combination with their diet and care,
                  produce high-quality meat with fine-grained marbling, a
                  beautiful pink color, and rich flavor that can stand on its
                  own — beating anything you'll find at your grocery store.
                </p>
              </div>
            </div>

            <div
              className="card-container lg:mt-2 lg:p-4 xxs:p-3  relative xxs:h-[340px] lg:h-[480px] xxs:mb-4 lg:mb-0 xxs:mx-4 lg:mx-0 rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${FeedImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4 ">
                <h1 className="text-[#E6E6E6] lg:text-[32px] lg:leading-[28px] font-medium xxs:text-[16px] xxs:leading-[19px]">
                  Feed and Nutrition
                </h1>
                <p className="text-[#E6E6E6] mt-3 lg:text-[14px] leading-[24px] font-normal xxs:text-[13px] text-justify">
                  Proper feed and nutrition are essential for the health and
                  growth of pigs. Feed and nutrition services provide farmers
                  with the knowledge and resources to formulate and deliver
                  balanced diets that meet the specific nutritional needs of
                  their pigs. This results in healthier pigs that are able to
                  reach their full growth potential and produce high-quality
                  meat that meets consumer demands.
                </p>
              </div>
            </div>

            <div
              className="card-container lg:mt-2 lg:p-4 xxs:p-3  relative xxs:h-[340px] lg:h-[480px] xxs:mb-4 lg:mb-0 xxs:mx-4 lg:mx-0 rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${livestock1})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-[#E6E6E6] lg:text-[32px] lg:leading-[28px] font-medium xxs:text-[16px] xxs:leading-[19px]">
                  Animal Health
                </h1>
                <p className="text-[#E6E6E6] mt-3 lg:text-[14px] leading-[24px] font-normal xxs:text-[13px] text-justify">
                  A healthy herd of pigs is essential for a successful pork
                  production. Animal health services provide farmers with the
                  tools and expertise to prevent and treat diseases, improve
                  herd health, and maintain biosecurity. This leads to a
                  reduction in the spread of diseases, increased productivity,
                  and a safer food supply for consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full h-full mb-6">
        <div className="flex flex-col items-center justify-center md:p-4 h-full">
          <div className="md:max-w-[500px] xxs:w-full ">
            <div className="md:max-w-[700px] xxs:w-full bg-[#F4F4F4] md:p-8 xxs:px-5 xxs:py-10  rounded ">
              <h1 className="md:text-[24px] md:leading-[28px] text-[#333333] xxs:text-[20px] xxs:leading-[23px] font-medium ">
                Let’s Talk Agro Services
              </h1>
              <p className="text-[16px] leading-[24px] xxs:text-[14px] xxs:leading-[20px] justify-end  text-[#797979] mt-3 mb-6 font-normal ">
                How can we help? Please contact us and we will get back to you as soon as
                possible. If you have an inquiry about our agro service, you can respond directly to the
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
                    id="fullName"
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
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className={`appearance-none  relative block w-full px-[14px] py-[10px] border-2 border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] placeholder:text-[14px] placeholder:leading-[16px] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm h-12 
                        }`}
                    placeholder="Where are you located?"
                    {...register("location")}
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

export default AgroServices;
