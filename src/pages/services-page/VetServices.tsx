import React, { useState } from "react";
import NavBar from "../../components/nav-component/NavBar";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import VetImg from "../../assets/images/VetImg.png";
import PigImg from "../../assets/images/PigImg.png";
import VetDrImg from "../../assets/images/VetDrImg.png";
import Footer from "../../components/footer-component/Footer";
import ServiceForm from "../../components/services-component/ServiceForm";
import AppLayout from "../../components/utility/AppLayout";
import { useForm, Controller } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import Select from "react-select";
interface VetServiceProps {
  fullName: string;
  email: string;
  message: string;
  phone: number;
  subject: string;
  address: string;
  location: string;
}

const VetServices = () => {

  const [accountType, setAccountType] = useState("");

  const purpose = [
    { value: "preventive_care", label: "Preventive Care" },
    { value: "vaccination", label: "Vaccinations" },
    { value: "parasite_control", label: "Parasite Control" },
    {
      value: "dental_care", label: "Dental Care",
    },
    {
      value: "household_hazards", label: "Household Hazards",
    },
    {
      value: "others", label: "Others",
    },
  ];
  const breeds = [
    { value: "berkshire", label: "Berkshire" },
    { value: "chester_white", label: "Chester White" },
    { value: "duroc", label: "Duroc" },
    { value: "hampshire", label: "Hampshire" },
    { value: "landrace", label: "Landrace" },
    { value: "poland_china", label: "Poland China" },
    { value: "spotted", label: "Spotted" },
    { value: "yorkshire", label: "YorkShire" },
  ];


  const colorStyle = {
    control: (styles: any) => ({
      ...styles,
      border: "2px solid #D9D9D9"
        ? ""
        : "1px solid rgba(0, 0, 0, 0.07)",
      paddingLeft: "6px",
      paddingTop: "2px",
      paddingBottom: "2px",
      fontFamily: "sans-serif",
      fontSize: "15px",
      fontWeight: "400",
      color: "#495057",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "",
      fontFamily: "Lato, sans-serif",
    }),
    placeholder: (styles: any) => ({
      ...styles,
      fontFamily: "sans-serif",
      color: "#A2A2A2",
      fontSize: "14px",
      fontWeight: "400",
    }),
    option: (styles: any) => ({
      ...styles,
      color: "#495057",
      fontWeight: "500",
      fontSize: "15px",
      fontFamily: " sans-serif",
    }),
  };

  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm<VetServiceProps>();


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
    <>
      <AppLayout>
        <div className="overflow-x-hidden">
          <div className="lg:w-full lg:mb-16">
            <div
              className="  flex   items-center lg:justify-start xxs:justify-center w-full lg:h-[300px] xxs:h-[300px] bg-cover bg-center  lg:px-14"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${VetImg}')`,

                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
              }}
            >
              <div className="">
                <h1 className="mb-2 font-normal tracking-tight lg:text-[32px] lg:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
                  Veterinary Services
                </h1>

                <BreadCrumbs
                  items={[
                    {
                      name: "Home",
                      link: "/",
                    },
                    {
                      name: "Veterinary",
                      link: "/vet",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-14  ">
          <div className=" bg-[#F4F4F4]     lg:flex">
            <div className=" lg:w-1/2 xxs:px-4 xxs:pt-16 lg:pt-0 flex-1 flex justify-center lg:pl-10 flex-col lg:pr-8">
              <h1 className="lg:font-medium  lg:text-[32px] lg:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333] whitespace-nowrap  mb-2">
                Our Veterinary Services
              </h1>
              <p className=" leading-6 text-[14px]  text-[#797979] text-justify">
                Are you looking for a partner to help your pigs reach their full
                potential? Turn to Porkerhut. We understand that the health and
                well-being of your animals are critical to the success of your
                pig farming business. That's why we offer comprehensive
                veterinary services to help optimize the productivity and
                profitability of your operation.  Our experienced team of
                veterinary professionals provides personalized care tailored to
                the unique needs of your pigs. From maintaining healthy herds to
                optimizing feed and nutrition, we are dedicated to helping you
                overcome the challenges of pig farming.  We take a holistic
                approach to pig farming, focusing on preventative care and
                regular check-ups to identify health issues early and improve
                the overall well-being of your pigs. In addition to expert
                veterinary care, we offer herd management assistance, including
                customized solutions for feed consultation and nutritional
                analysis, to help you maintain a healthy and productive
                environment for your pigs. Choose Porkerhut for exceptional
                veterinary care and experience the difference for yourself.
              </p>
            </div>
            <figure className="lg:w-1/2">
              <img
                className="object-cover h-full py-6 px-4 lg:py-6 lg:px-6 lg:p-0"
                src={VetDrImg}
                alt=""
              />
            </figure>
          </div>
        </div>

        <div className="mt-16 mb-14 xxs:py-12  bg-[#F5F9F6] lg:p-14  xxs:px-3 lg:h-[100%] lg:w-[100%]">
          <div className="flex items-center justify-center mb-10 ">
            <h1 className="font-normal  lg:text-[32px] mb-4 text-[#333333] lg:leading-[47px] xxs:text-[20px] xxs:leading-[23px] ">
              What We Provide
              <div className=" xxs:w-20 h-1.5 w-14 bg-[#197B30] m-auto"></div>
            </h1>
          </div>

          <div className=" lg:relative lg:flex lg:items-center lg:justify-center lg:h-[40rem] w-full xxs:grid xxs:grid-cols-2 xxs:gap-3 ">
            {/* <div> */}
            <div className=" lg:h-[299px] lg:w-[373px] border   bg-white lg:mb-4  rounded-lg lg:p-6 xxs:p-3 lg:absolute lg:top-10 lg:left-0 ">
              <h1 className=" font-medium lg:text-[32px] lg:leading-[30px] text-left xxs:text-[32px] xxs:leading-[38px] ">
                01
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[20px] text-left">
                Comprehensive Health Check-ups
              </h1>
              <p className=" lg:text-[14px] text-justify lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px]">
                Regular check-ups with our veterinarians ensure the overall
                health of your pigs. We'll perform thorough exams, check for
                underlying health issues, monitor weight and body condition, and
                ensure proper nutrition.
              </p>
            </div>

            <div className=" xxs:h-fit lg:h-[251px] lg:w-[373px] border xxs:px-3 xxs:py-2 bg-white lg:mb-4  lg:px-6 lg:py-4 rounded-lg lg:absolute lg:top-0 lg:right-0">
              <h1 className="font-medium lg:text-[32px] lg:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                02
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal xxs:text-[14px] xxs:leading-[16px] text-left">
                Feed Consultation
              </h1>
              <p className="  lg:text-[16px] lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                Our vets help determine the best feed for your pigs to promote
                optimal growth and health. This includes nutritional analysis
                and personalized recommendations.
              </p>
            </div>

            <div className=" xxs:h-fit  lg:h-[251px] lg:w-[373px]  border xxs:px-3 xxs:py-2 lg:mt-14  bg-white lg:mb-4 rounded-lg lg:px-6 lg:py-4 lg:absolute lg:bottom-0 lg:left-20">
              <h1 className="font-medium lg:text-[32px] lg:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                03
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[20px] text-left">
                Herd Management Assistance
              </h1>
              <p className=" lg:text-[14px] lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                We help keep your pig herd healthy and productive with our herd
                management services, including vaccination programs, parasite
                control, and bio-security protocols.
              </p>
            </div>

            <img
              src={PigImg}
              alt="livestock"
              className="object-cover w-[40%] xxs:hidden lg:block"
            />

            <div className=" xxs:h-fit  lg:h-[300px] lg:w-[373px] border  bg-white lg:mb-4 xxs:px-3 xxs:py-2 lg:px-6 lg:py-4 rounded-lg lg:mt-14 lg:absolute lg:bottom-0 lg:right-10 ">
              <h1 className="font-medium lg:text-[32px] lg:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                04
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[16px] text-left">
                Reproductive Health
              </h1>
              <p className="lg:text-[14px] lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                Reproductive health is critical for maintaining the productivity
                of your pig farming business. Our veterinarians offer a range of
                services to optimize the reproductive health of your pigs,
                including artificial insemination, pregnancy diagnosis, and
                fertility assessments.
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
        <section className="w-full h-full mb-6">
          <div className="flex flex-col items-center justify-center md:p-4 h-full">
            <div className="md:max-w-[500px] xxs:w-full ">
              <div className="md:max-w-[700px] xxs:w-full bg-[#F4F4F4] md:p-8 xxs:px-5 xxs:py-10  rounded ">
                <h1 className="md:text-[24px] md:leading-[28px] text-[#333333] xxs:text-[20px] xxs:leading-[23px] font-medium ">
                  Let’s vet for you
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
                      placeholder="Where is your farm located?"
                      {...register("location")}
                    />

                  </div>


                  <div className="flex items-center gap-4">
                    <div className="my-2 mb-5 w-full" >
                      <label
                        htmlFor=""
                        className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        `}
                      >
                        Appointment purpose
                      </label>

                      <Select options={purpose}
                        styles={colorStyle}
                        placeholder="select options"
                      />



                    </div>
                    <div className="my-2 mb-5 w-full " >
                      <label
                        htmlFor=""
                        className={`block text-[14px] leading-[16px] font-normal mb-[6px] text-[#333333]
                        `}
                      >
                        Breed of pig
                      </label>
                      <Select options={breeds}
                        styles={colorStyle}
                      />


                    </div>

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
    </>
  );
};

export default VetServices;
