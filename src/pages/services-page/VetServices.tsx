import React from "react";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import VetImg from "../../assets/images/VetImg.png";
import PigImg from "../../assets/images/PigImg.png";
import VetDrImg from "../../assets/images/VetDrImg.png";
import AppLayout from "../../components/utility/AppLayout";
import { useForm } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import Select from "react-select";
import ComingSoon from "../../components/ComingSoon";
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
  const purpose = [
    { value: "preventive_care", label: "Preventive Care" },
    { value: "vaccination", label: "Vaccinations" },
    { value: "parasite_control", label: "Parasite Control" },
    {
      value: "dental_care",
      label: "Dental Care",
    },
    {
      value: "household_hazards",
      label: "Household Hazards",
    },
    {
      value: "others",
      label: "Others",
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
      border: "2px solid #D9D9D9" ? "" : "1px solid rgba(0, 0, 0, 0.07)",
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
    // getValues,
    // control,
    reset,
    // formState: { isValid, errors },
  } = useForm<VetServiceProps>();

  const submitData = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

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
        {true ? (
          <div>
            <ComingSoon
              className="pt-5"
              pendingPage="Veterinary Service"
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
        ) : (
          <>
            <div className="overflow-x-hidden">
              <div className="lg:mb-16 lg:w-full">
                <div
                  className="  flex   w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center lg:h-[300px] lg:justify-start  lg:px-14"
                  style={{
                    backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${VetImg}')`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                  }}
                >
                  <div className="">
                    <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] lg:text-[32px]  lg:leading-[47px]">
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
                <div className=" flex flex-1 flex-col justify-center xxs:px-4 xxs:pt-16 lg:w-1/2 lg:pt-0 lg:pl-10 lg:pr-8">
                  <h1 className="mb-2  flex justify-self-start whitespace-nowrap font-bold text-[#333333] xxs:text-[20px] xxs:font-normal xxs:leading-[23px] lg:text-[32px] lg:font-medium  lg:leading-[47px]">
                    Our Veterinary Services
                  </h1>
                  <p className=" text-justify text-[14px]  leading-6 text-[#797979]">
                    Are you looking for a partner to help your pigs reach their
                    full potential? Turn to Porkerhut. We understand that the
                    health and well-being of your animals are critical to the
                    success of your pig farming business. That's why we offer
                    comprehensive veterinary services to help optimize the
                    productivity and profitability of your operation.  Our
                    experienced team of veterinary professionals provides
                    personalized care tailored to the unique needs of your pigs.
                    From maintaining healthy herds to optimizing feed and
                    nutrition, we are dedicated to helping you overcome the
                    challenges of pig farming.  We take a holistic approach to
                    pig farming, focusing on preventative care and regular
                    check-ups to identify health issues early and improve the
                    overall well-being of your pigs. In addition to expert
                    veterinary care, we offer herd management assistance,
                    including customized solutions for feed consultation and
                    nutritional analysis, to help you maintain a healthy and
                    productive environment for your pigs. Choose Porkerhut for
                    exceptional veterinary care and experience the difference
                    for yourself.
                  </p>
                </div>
                <figure className="lg:w-1/2">
                  <img
                    className="h-full object-cover py-6 px-4 lg:p-0 lg:py-6 lg:px-6"
                    src={VetDrImg}
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="mt-16 mb-14 bg-[#F5F9F6]  xxs:py-12 xxs:px-3  lg:h-[100%] lg:w-[100%] lg:p-14">
              <div className="mb-10 flex items-center justify-center ">
                <h1 className="mb-4  font-normal text-[#333333] xxs:text-[20px] xxs:leading-[23px] lg:text-[32px] lg:leading-[47px] ">
                  What We Provide
                  <div className=" m-auto h-1.5 w-14 bg-[#197B30] xxs:w-20"></div>
                </h1>
              </div>

              <div className=" w-full xxs:grid xxs:grid-cols-2 xxs:gap-3 lg:relative lg:flex lg:h-[40rem] lg:items-center lg:justify-center ">
                {/* <div> */}
                <div className=" rounded-lg border bg-white   xxs:p-3 lg:absolute  lg:top-10 lg:left-0 lg:mb-4 lg:h-[299px] lg:w-[373px] lg:p-6 ">
                  <h1 className=" text-left font-medium xxs:text-[32px] xxs:leading-[38px] lg:text-[32px] lg:leading-[30px] ">
                    01
                  </h1>
                  <h1 className="text-left xxs:text-[14px] xxs:font-normal xxs:leading-[20px]  lg:text-[16px] lg:font-medium lg:leading-[30px]">
                    Comprehensive Health Check-ups
                  </h1>
                  <p className=" mt-2 text-justify text-[#797979] xxs:text-[13px] xxs:leading-[20px] lg:text-[14px] lg:leading-[24px]">
                    Regular check-ups with our veterinarians ensure the overall
                    health of your pigs. We'll perform thorough exams, check for
                    underlying health issues, monitor weight and body condition,
                    and ensure proper nutrition.
                  </p>
                </div>

                <div className=" rounded-lg border bg-white xxs:h-fit xxs:px-3 xxs:py-2 lg:absolute lg:top-0  lg:right-0 lg:mb-4 lg:h-[251px] lg:w-[373px] lg:px-6 lg:py-4">
                  <h1 className="text-left font-medium xxs:text-[32px] xxs:leading-[38px] lg:text-[32px] lg:leading-[56px]">
                    02
                  </h1>
                  <h1 className="text-left xxs:text-[14px] xxs:font-normal xxs:leading-[16px] lg:text-[16px] lg:font-medium lg:leading-[30px]">
                    Feed Consultation
                  </h1>
                  <p className="  mt-2 text-justify text-[#797979] xxs:text-[13px] xxs:leading-[20px] lg:text-[16px] lg:leading-[24px]">
                    Our vets help determine the best feed for your pigs to
                    promote optimal growth and health. This includes nutritional
                    analysis and personalized recommendations.
                  </p>
                </div>

                <div className=" rounded-lg  border bg-white  xxs:h-fit xxs:px-3 xxs:py-2 lg:absolute  lg:bottom-0 lg:left-20 lg:mt-14 lg:mb-4 lg:h-[251px] lg:w-[373px] lg:px-6 lg:py-4">
                  <h1 className="text-left font-medium xxs:text-[32px] xxs:leading-[38px] lg:text-[32px] lg:leading-[56px]">
                    03
                  </h1>
                  <h1 className="text-left xxs:text-[14px] xxs:font-normal xxs:leading-[20px]  lg:text-[16px] lg:font-medium lg:leading-[30px]">
                    Herd Management Assistance
                  </h1>
                  <p className=" mt-2 text-justify text-[#797979] xxs:text-[13px] xxs:leading-[20px] lg:text-[14px] lg:leading-[24px]">
                    We help keep your pig herd healthy and productive with our
                    herd management services, including vaccination programs,
                    parasite control, and bio-security protocols.
                  </p>
                </div>

                <img
                  src={PigImg}
                  alt="livestock"
                  className="w-[40%] object-cover xxs:hidden lg:block"
                />

                <div className=" rounded-lg  border bg-white xxs:h-fit  xxs:px-3 xxs:py-2 lg:absolute lg:bottom-0 lg:right-10 lg:mb-4 lg:mt-14 lg:h-[300px] lg:w-[373px] lg:px-6 lg:py-4 ">
                  <h1 className="text-left font-medium xxs:text-[32px] xxs:leading-[38px] lg:text-[32px] lg:leading-[56px]">
                    04
                  </h1>
                  <h1 className="text-left xxs:text-[14px] xxs:font-normal xxs:leading-[16px]  lg:text-[16px] lg:font-medium lg:leading-[30px]">
                    Reproductive Health
                  </h1>
                  <p className="mt-2 text-justify text-[#797979] xxs:text-[13px] xxs:leading-[20px] lg:text-[14px] lg:leading-[24px]">
                    Reproductive health is critical for maintaining the
                    productivity of your pig farming business. Our veterinarians
                    offer a range of services to optimize the reproductive
                    health of your pigs, including artificial insemination,
                    pregnancy diagnosis, and fertility assessments.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
            <section className="mb-6 h-full w-full">
              <div className="flex h-full flex-col items-center justify-center md:p-4">
                <div className="xxs:w-full md:max-w-[500px] ">
                  <div className="rounded bg-[#F4F4F4] xxs:w-full xxs:px-5 xxs:py-10 md:max-w-[700px]  md:p-8 ">
                    <h1 className="font-medium text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[24px] md:leading-[28px] ">
                      Let’s vet for you
                    </h1>
                    <p className="mt-3 mb-6 justify-end text-[16px] font-normal  leading-[24px] text-[#797979] xxs:text-[14px] xxs:leading-[20px] ">
                      How can we help? Please contact us and we will get back to
                      you as soon as possible. If you have an inquiry about your
                      order, you can respond directly to the order confirmation
                      email or contact us via chat.
                    </p>
                    <form onSubmit={handleSubmit(submitData)}>
                      <div className="my-2 mb-5 w-full">
                        <label
                          htmlFor=""
                          className={`"after:content-['*'] after:text-red-500" } } mb-[6px] block
                        text-[14px] font-normal leading-[16px]
                        text-[#333333] after:ml-0.5`}
                        >
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          // required={(required === "Yes" || required === true) ? true : false}
                          className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                          placeholder="Enter your full name"
                          {...register("fullName")}
                        />
                      </div>
                      <div className="my-2 mb-5 w-full">
                        <label
                          htmlFor=""
                          className={`"after:content-['*'] after:text-red-500" } } mb-[6px] block
                        text-[14px] font-normal leading-[16px]
                        text-[#333333] after:ml-0.5`}
                        >
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                          placeholder="Enter email address"
                          {...register("email")}
                        />
                      </div>

                      <div className="my-2 mb-5 w-full">
                        <label
                          htmlFor=""
                          className={`mb-[6px] block text-[14px] font-normal leading-[16px] text-[#333333]
                        `}
                        >
                          Phone number
                        </label>
                        <input
                          id="phone"
                          type="number"
                          className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                          placeholder="Enter your phone number"
                          {...register("phone")}
                        />
                      </div>

                      <div className="my-2 mb-5 w-full">
                        <label
                          htmlFor=""
                          className={`mb-[6px] block text-[14px] font-normal leading-[16px] text-[#333333]
                        `}
                        >
                          Location
                        </label>
                        <input
                          id="location"
                          type="text"
                          className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                          placeholder="Where is your farm located?"
                          {...register("location")}
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="my-2 mb-5 w-full">
                          <label
                            htmlFor=""
                            className={`mb-[6px] block text-[14px] font-normal leading-[16px] text-[#333333]
                        `}
                          >
                            Appointment purpose
                          </label>

                          <Select
                            options={purpose}
                            styles={colorStyle}
                            placeholder="select options"
                          />
                        </div>
                        <div className="my-2 mb-5 w-full ">
                          <label
                            htmlFor=""
                            className={`mb-[6px] block text-[14px] font-normal leading-[16px] text-[#333333]
                        `}
                          >
                            Breed of pig
                          </label>
                          <Select options={breeds} styles={colorStyle} />
                        </div>
                      </div>

                      <div className="my-2 mb-2 w-full">
                        <label
                          htmlFor=""
                          className={`"after:content-['*'] " } } mb-[6px]
                        block text-[14px] leading-[16px] text-[#333333]
                        after:ml-0.5 after:text-red-500`}
                        >
                          Message
                        </label>
                        <textarea
                          className={`resize:  none focus:ring-primaryDark focus:border-primaryDark }  relative block w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                          placeholder="Type message here"
                          {...register("message")}
                          rows={6}
                          cols={73.4}
                          name="message"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="rounded-sm bg-[#197B30] p-3 px-10  text-[14px] leading-[24px] text-[#fff]  transition-all duration-300 ease-in-out active:scale-90 xxs:mt-4 md:mt-6"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div>
                    <div className="hidden md:grid md:grid-cols-3 md:gap-2">
                      {contactInfo.map((data, index) => (
                        <div className="mt-8 flex h-36 w-full flex-col  items-center justify-center bg-[#f4f4f4] p-3">
                          <figure className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D9D9] bg-[#fff] text-center">
                            {data?.icon}
                          </figure>
                          <p className="mt-4 text-center text-sm font-medium text-[#333333]">
                            {data?.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="mt-7 hidden text-center text-[16px] font-medium leading-[24px] text-[#797979] md:block">
                        Line is open between 8:00AM WAT & 4:00PM WAT
                      </p>
                    </div>
                  </div>
                  <div className="mx-5 mb-10">
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
            </section>
          </>
        )}
      </AppLayout>
    </>
  );
};

export default VetServices;

// color: #4A4A4A;
// font-family: Roboto;
// font-size: 20px;
// font-style: normal;
// font-weight: 700;
// line-height: normal;
// this are the properties for the nnumbering

// color: #323232;
// font-family: Roboto;
// font-size: 48px;
// font-style: normal;
// font-weight: 700;
// line-height: normal;
