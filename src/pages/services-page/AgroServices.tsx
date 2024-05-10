import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";
import { toast } from "react-toastify";
import AgroservImg from "../../../src/assets/images/AgroservImg.png";
import FarmingImg from "../../../src/assets/images/FarmingImg.png";
import FeedImg from "../../../src/assets/images/FeedImg.png";
import PigFarmingImg from "../../../src/assets/images/PigFarmingImg.png";
import livestock1 from "../../../src/assets/livestock/livestock3.png";
import AppLayout from "../../components/utility/AppLayout";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import { useAgroForm } from "../../services/hooks/users";
// import AgroVideo from "../../assets/agro.mp4";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//   fullName: yup.string().required("Enter your full name"),
//   email: yup.string().required("Enter your email"),
//   message: yup.string().required("Enter your message"),
//   subject: yup.string().required("Enter your subject"),
//   address: yup.string().required("Enter your address"),
//   city: yup.string().required("Enter your city/town"),
//   phoneNumber: yup.string().required("Enter your phone number"),
// });

interface AgroServicesProps {
  fullName: string;
  email: string;
  message: string;
  phoneNumber: number;
  address: string;
  city: string;
  subject: string;
}

const AgroServices = () => {
  const [loading, setLoading] = useState(false);

  // const location = useLocation();
  // const query = new URLSearchParams(location.search);
  // const agroService = query.get("agro-service");
  const agroForm = useAgroForm();

  const {
    register,
    handleSubmit,
    // getValues,
    // control,
    reset,
    formState: { errors },
  } = useForm<AgroServicesProps>();

  const submitData = (data: any) => {
    setLoading(true);
    agroForm
      .mutateAsync(data)
      .then((res: any) => {
        toast.success(
          "Thank you for submitting the form! PorkerHut team will get back to you soon",
        );
        setLoading(false);
        reset();
      })
      .catch((err: any) => {
        toast.error(err.message);
        setLoading(false);
      });
    // reset();
  };

  const contactInfo = [
    {
      icon: <MdPhoneEnabled />,
      text: "+234804589322",
    },
    {
      icon: <IoMail />,
      text: "info@porkerhut.com",
    },
    {
      icon: <IoLocationSharp />,
      text: "Plot No. 41198 Cadastral Zone D24, Kapa, Kugwaru, Nasarawa State, Nigeria",
    },
  ];

  return (
    <AppLayout>
      <div className="">
        <div className="lg:mb-12 lg:w-full">
          <div
            className="  flex   w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center lg:h-[300px] lg:justify-start  lg:px-14"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${AgroservImg}')`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className=" ">
              <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] lg:text-[32px]  lg:leading-[47px]">
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
          <div className="pt-16 lg:px-14 ">
            <div className="bg-[#F4F4F4] lg:flex ">
              <div className="flex flex-1 flex-col justify-center xxs:px-4 xxs:pt-16 lg:w-1/2 lg:pt-0 lg:pl-10 lg:pr-8">
                <h1 className="mb-2  flex justify-self-start whitespace-nowrap font-bold text-[#333333] xxs:text-[20px] xxs:font-normal xxs:leading-[23px] lg:text-[32px] lg:font-medium  lg:leading-[47px]">
                  What our Agro services is{" "}
                  <br className=" xxs:hidden lg:flex" /> all about
                </h1>
                <p className="text-justify leading-6 text-[#797979] xxs:text-[14px] lg:text-[14px]">
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
                <figure className="h-[350px] overflow-hidden">
                  <img
                    className=" h-full w-full object-cover xxs:py-10  xxs:px-4 lg:p-0"
                    src={FarmingImg}
                    alt="AgroImage"
                  />
                  {/* <video
                    src={AgroVideo}
                    width={800}
                    height={`100%`}
                    muted
                    autoPlay
                    loop
                    preload="true"
                    className=" h-full w-full object-cover object-center"
                  /> */}
                </figure>
              </div>
            </div>
          </div>

          <div className=" my-12 text-center xxs:mt-14 ">
            <h1 className="font-medium  text-[#333333] xxs:text-[20px] xxs:leading-[23px] lg:text-[32px] lg:leading-[47px]  ">
              Our Agro Services
              <div className=" m-auto mt-2 h-1.5 w-14 bg-[#197B30] xxs:w-20"></div>
            </h1>
          </div>

          <div className="xxs:mb-12 lg:mb-0 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-14">
            <div
              className="card-container relative rounded-sm xxs:mx-4 xxs:mb-4 xxs:h-[340px] xxs:p-3 lg:mx-0 lg:mt-2 lg:mb-0 lg:h-[480px] lg:p-4"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${PigFarmingImg})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="font-medium text-[#E6E6E6] xxs:text-[16px] xxs:leading-[19px] lg:text-[32px] lg:leading-[28px]">
                  Pig Farming
                </h1>
                <p className="mt-3 text-justify font-normal leading-[24px] text-[#E6E6E6] xxs:text-[13px] lg:text-[14px]">
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
              className="card-container relative rounded-sm xxs:mx-4  xxs:mb-4 xxs:h-[340px] xxs:p-3 lg:mx-0 lg:mt-2 lg:mb-0 lg:h-[480px] lg:p-4"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${FeedImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4 ">
                <h1 className="font-medium text-[#E6E6E6] xxs:text-[16px] xxs:leading-[19px] lg:text-[32px] lg:leading-[28px]">
                  Feed and Nutrition
                </h1>
                <p className="mt-3 text-justify font-normal leading-[24px] text-[#E6E6E6] xxs:text-[13px] lg:text-[14px]">
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
              className="card-container relative rounded-sm xxs:mx-4  xxs:mb-4 xxs:h-[340px] xxs:p-3 lg:mx-0 lg:mt-2 lg:mb-0 lg:h-[480px] lg:p-4"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${livestock1})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="font-medium text-[#E6E6E6] xxs:text-[16px] xxs:leading-[19px] lg:text-[32px] lg:leading-[28px]">
                  Animal Health
                </h1>
                <p className="mt-3 text-justify font-normal leading-[24px] text-[#E6E6E6] xxs:text-[13px] lg:text-[14px]">
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

      <section className="mb-6 h-full w-full">
        <div className="flex h-full flex-col items-center justify-center md:p-4">
          <div className="xxs:w-full md:max-w-[500px] ">
            <div className="rounded bg-[#F4F4F4] xxs:w-full xxs:px-5 xxs:py-10 md:max-w-[700px]  md:p-8 ">
              <h1 className="font-medium text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[24px] md:leading-[28px] ">
                Let’s Talk Agro Services
              </h1>
              <p className="mt-3 mb-6 justify-end text-[16px] font-normal  leading-[24px] text-[#797979] xxs:text-[14px] xxs:leading-[20px] ">
                How can we help? Please contact us and we will get back to you
                as soon as possible. If you have an inquiry about our agro
                service, you can respond directly to the order confirmation
                email or contact us via chat.
              </p>
              <form onSubmit={handleSubmit(submitData)}>
                <div className="my-2 mb-5 w-full">
                  <label
                    htmlFor="fullName"
                    className={`mb-[6px] block text-[14px] font-normal
                        leading-[16px] text-[#333333] after:ml-0.5
                        after:text-red-500 after:content-['*']`}
                  >
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    id="fullName"
                    type="text"
                    required
                    // required={(required === "Yes" || required === true) ? true : false}
                    className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                    placeholder="Enter your full name"
                  />
                  {/* {errors?.fullName?.message && (
                    <p className="mt-1.5 text-red-600">
                      {errors?.fullName?.message}
                    </p>
                  )} */}
                </div>
                <div className="my-2 mb-5 w-full">
                  <label
                    htmlFor=""
                    className={`mb-[6px] block text-[14px] font-normal
                        leading-[16px] text-[#333333] after:ml-0.5
                        after:text-red-500 after:content-['*']`}
                  >
                    Email address
                  </label>
                  <input
                    id="fullName"
                    type="email"
                    required
                    className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                    placeholder="Enter email address"
                    {...register("email")}
                  />
                </div>
                <div className="my-2 mb-5 w-full">
                  <label
                    htmlFor="phoneNumber"
                    className={`mb-[6px] block text-[14px] font-normal
                        leading-[16px] text-[#333333] after:ml-0.5
                        after:text-red-500 after:content-['*']`}
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="number"
                    required
                    className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                    placeholder="Enter your phone number"
                    {...register("phoneNumber")}
                  />
                </div>
                <div className="my-2 mb-5 w-full">
                  <label
                    htmlFor=""
                    className={`mb-[6px] block text-[14px] font-normal
                        leading-[16px] text-[#333333] after:ml-0.5
                        after:text-red-500 after:content-['*']`}
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                    placeholder="Where are you located?"
                    {...register("address")}
                  />
                </div>
                <div className="my-2 mb-5 w-full">
                  <label
                    htmlFor="city"
                    className={`mb-[6px] block text-[14px] font-normal
                        leading-[16px] text-[#333333] after:ml-0.5
                        after:text-red-500 after:content-['*']`}
                  >
                    City/Town
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                    placeholder="Where are you located?"
                    {...register("city")}
                  />
                </div>
                <div className="my-2 mb-5 w-full">
                  <label
                    htmlFor="subject"
                    className={`mb-[6px] block text-[14px] font-normal leading-[16px] text-[#333333] after:text-red-500 after:content-['*']
                        `}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className={`focus:ring-primaryDark  focus:border-primaryDark } relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                    placeholder="Enter subject here"
                    {...register("subject")}
                  />
                </div>

                <div className="my-2 mb-2 w-full">
                  <label
                    htmlFor="message"
                    className={`mb-[6px] block text-[14px] font-normal
                        leading-[16px] text-[#333333] after:ml-0.5
                        after:text-red-500 after:content-['*']`}
                  >
                    Message
                  </label>
                  <textarea
                    required
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
            <div className="mt-3">
              <div className="hidden md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-3.5">
                {contactInfo.map((data, index) => (
                  <div
                    key={index}
                    className={`flex h-36 w-full flex-col items-center  justify-center bg-[#f4f4f4] p-3 md:w-[calc(50%_-_5px)] ${index === 2 && "flex-grow"}`}
                  >
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
    </AppLayout>
  );
};

export default AgroServices;
