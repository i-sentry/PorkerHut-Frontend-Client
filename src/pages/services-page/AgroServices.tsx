import React from "react";
import NavBar from "../../components/nav-component/NavBar";
import Footer from "../../components/footer-component/Footer";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import AgroservImg from "../../../src/assets/images/AgroservImg.png";
import FarmingImg from "../../../src/assets/images/FarmingImg.png";
import FeedImg from "../../../src/assets/images/FeedImg.png";
import livestock1 from "../../../src/assets/livestock/livestock3.png";
import PigFarmingImg from "../../../src/assets/images/PigFarmingImg.png";
import { useLocation } from "react-router-dom";
import AppLayout from "../../components/utility/AppLayout";
import ServiceForm from "../../components/services-component/ServiceForm";

const AgroServices = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const agroService = query.get("agro-service");

  return (
    <AppLayout>
      <div className="">
        <div className="md:w-full md:mb-12">
          <div
            className="  flex   items-center md:justify-start xxs:justify-center w-full md:h-[400px] xxs:h-[300px] bg-cover bg-center  md:px-14"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${AgroservImg}')`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className=" ">
              <h1 className="mb-2 font-normal tracking-tight md:text-[40px] md:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
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
          <div className="md:px-14 pt-16 ">
            <div className="bg-[#F4F4F4]     md:flex ">
              <div className="md:w-1/2 xxs:px-3 xxs:pt-16 md:pt-0 flex-1 flex justify-center md:pl-20 flex-col md:pr-8">
                <h1 className="md:font-medium  md:text-[35px] md:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333] whitespace-nowrap  mb-2">
                  What our Agro services is <br className="md:hidden" /> all
                  about
                </h1>
                <p className="leading-6 xxs:text-[14px] md:text-[16px] text-[#797979] text-justify">
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
              <div className="md:w-1/2 ">
                <figure>
                  <img
                    className="object-cover w-full xxs:py-10 h-full  xxs:px-3 md:p-0"
                    src={FarmingImg}
                    alt="AgroImage"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className=" text-center my-12 xxs:mt-14 ">
            <h1 className="font-medium  md:text-[40px] md:leading-[47px] xxs:text-[20px] xxs:leading-[23px] text-[#333333]  ">
              Our Agro Services
              <div className=" xxs:w-20 h-1.5 w-14 bg-[#197B30] m-auto mt-2"></div>
            </h1>
          </div>

          <div className="md:grid md:grid-cols-3 md:px-14 md:gap-10 xxs:mb-12 md:mb-0">
            <div
              className="card-container md:mt-2 md:p-4 xxs:p-3 relative xxs:h-[340px] md:h-[480px] xxs:mb-4 md:mb-0 xxs:mx-3 md:mx-0 rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${PigFarmingImg})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-[#E6E6E6] md:text-[24px] md:leading-[28px] font-medium xxs:text-[16px] xxs:leading-[19px]">
                  Pig Farming
                </h1>
                <p className="text-[#E6E6E6] mt-3 md:text-[16px] leading-[24px] font-normal xxs:text-[13px]">
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
              className="card-container md:mt-2 md:p-4 xxs:p-3  relative xxs:h-[340px] md:h-[480px] xxs:mb-4 md:mb-0 xxs:mx-3 md:mx-0 rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${FeedImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4 ">
                <h1 className="text-[#E6E6E6] md:text-[24px] md:leading-[28px] font-medium xxs:text-[16px] xxs:leading-[19px]">
                  Feed and Nutrition
                </h1>
                <p className="text-[#E6E6E6] mt-3 md:text-[16px] leading-[24px] font-normal xxs:text-[13px]">
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
              className="card-container md:mt-2 md:p-4 xxs:p-3  relative xxs:h-[340px] md:h-[480px] xxs:mb-4 md:mb-0 xxs:mx-3 md:mx-0 rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${livestock1})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-[#E6E6E6] md:text-[24px] md:leading-[28px] font-medium xxs:text-[16px] xxs:leading-[19px]">
                  Animal Health
                </h1>
                <p className="text-[#E6E6E6] mt-3 md:text-[16px] leading-[24px] font-normal xxs:text-[13px]">
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
        <ServiceForm
          text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
          title="Let's Talk Agro Services"
        />
      </section>
    </AppLayout>
  );
};

export default AgroServices;
