import React from "react";
// import NavBar from "../../components/nav-component/NavBar";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import BlogBanner from "../../assets/images/BlogBanner.png";
import SuyaImg from "../../assets/images/SuyaImg.png";
// import ServiceForm from "../../components/services-component/ServiceForm";
// import Footer from "../../components/footer-component/Footer";
import AppLayout from "../../components/utility/AppLayout";
import { useForm } from "react-hook-form";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import ComingSoon from "../../components/ComingSoon";
import { Link } from "react-router-dom";

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
    // getValues,
    // control,
    reset,
    // formState: { isValid, errors },
  } = useForm<WeekendKillProps>();

  const submitData = (data: any) => {
    reset();
  };

  // const textData = [
  //   {
  //     label: "message",
  //     name: "message",
  //     place_holder: "Type Message",
  //     error_message: "Message is Required",
  //     type: "text",
  //     required: true,
  //   },
  // ];

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
    <AppLayout>
      <div>
        <div className="hidden">
          <div className="">
            <div
              className="flex   w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center lg:h-[300px] lg:justify-start  lg:px-14"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${BlogBanner}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
              }}
            >
              <div className="">
                <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] lg:text-[32px]  lg:leading-[47px]">
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
          <div className="bg-[#F4F4F4] pt-16  lg:px-14">
            <div className="     lg:flex">
              <div className=" flex flex-1 flex-col justify-center xxs:px-4 xxs:pt-16 lg:w-1/2 lg:pt-0 lg:pl-10 lg:pr-8">
                <h1 className="mb-2  flex justify-self-start font-bold text-[#333333] xxs:text-[20px] xxs:font-normal xxs:leading-[23px] lg:text-[32px] lg:font-medium   lg:leading-[47px]">
                  Why Weekend Kills
                </h1>
                <p className=" text-justify leading-6 text-[#797979] xxs:text-[14px] lg:text-[14px]">
                  Looking for an affordable and ethical way to enjoy
                  high-quality pork? Look no further than Porker Hut. We are
                  committed to providing you with locally sourced and ethically
                  raised pork that is not only delicious but also sustainably
                  produced. Our weekend kill program offers a cost-effective
                  solution for customers to purchase and share a whole pig at a
                  reduced price by partnering with other like-minded
                  individuals. And, our delivery service ensures that your pork
                  arrives fresh and ready for your enjoyment. At Porker Hut, we
                  believe in transparency and traceability. We carefully select
                  our pigs and use environmentally responsible rearing
                  practices, providing them with access to natural resources
                  such as fresh air, water, and high-quality grain feed. We also
                  offer veterinary services to ensure the health and well-being
                  of our animals. Place your order today and experience the
                  difference that high-quality, locally sourced-pork can make.
                </p>
              </div>
              <figure className="lg:w-1/2">
                <img
                  className="h-full w-full object-cover xxs:py-10  xxs:px-4 lg:p-0"
                  src={SuyaImg}
                  alt="weekendImg"
                />
              </figure>
            </div>
          </div>

          <section className="mb-6 h-full w-full">
            <div className="flex h-full flex-col items-center justify-center md:p-4">
              <div className="xxs:w-full md:max-w-[500px] ">
                <div className="rounded bg-[#F4F4F4] xxs:w-full xxs:px-5 xxs:py-10 md:max-w-[700px]  md:p-8 ">
                  <h1 className="font-medium text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[24px] md:leading-[28px] ">
                    Reach out for Weekend Kills
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
                        className={`"after:content-['*'] after:text-red-500" } } mb-[6px] block
                        text-[14px] font-normal leading-[16px]
                        text-[#333333] after:ml-0.5`}
                      >
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                        placeholder="Enter your address"
                        {...register("address")}
                      />
                    </div>
                    <div className="my-2 mb-5 w-full">
                      <label
                        htmlFor=""
                        className={`"after:content-['*'] after:text-red-500" } } mb-[6px] block
                        text-[14px] font-normal leading-[16px]
                        text-[#333333] after:ml-0.5`}
                      >
                        City/Town
                      </label>
                      <input
                        id="city"
                        type="text"
                        className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                        placeholder="Enter  your city/town"
                        {...register("city")}
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
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                        placeholder="Enter subject here"
                        {...register("subject")}
                      />
                    </div>

                    <div className="my-2 mb-2 w-full">
                      <label
                        htmlFor=""
                        className={`"after:content-['*'] after:text-red-500" } } mb-[6px]
                        block text-[14px] leading-[16px]
                        text-[#333333] after:ml-0.5`}
                      >
                        Message
                      </label>
                      <textarea
                        className={`focus:ring-primaryDark  focus:border-primaryDark } relative block w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
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
                      <div
                        key={index}
                        className="mt-8 flex h-36 w-full flex-col  items-center justify-center bg-[#f4f4f4] p-3"
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
                <div className="mx-5 mb-10">
                  <div className="mt-16 grid  grid-rows-3 gap-6 md:hidden">
                    {contactInfo.map((data, index) => (
                      <div
                        key={index}
                        className="flex h-36 w-full flex-col items-center  justify-center bg-[#f4f4f4]  p-3"
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
                  <div className="my-8">
                    <p className="block  whitespace-nowrap text-center text-[16px] font-medium leading-[24px] text-[#797979] md:hidden">
                      Line is open between 8:00AM - 4:00PM WAT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ComingSoon
          className="pt-5"
          pendingPage="Weekend Kills"
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
    </AppLayout>
  );
};

export default WeekendKills;
