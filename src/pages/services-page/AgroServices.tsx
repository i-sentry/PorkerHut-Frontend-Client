import React from "react";
import NavBar from "../../components/nav-component/NavBar";
import Footer from "../../components/footer-component/Footer";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import AgroservImg from "../../../src/assets/images/AgroservImg.png";
import FarmingImg from "../../../src/assets/images/FarmingImg.png";
import FeedImg from "../../../src/assets/images/FeedImg.png";
import LivestockFarmingImg from "../../../src/assets/images/LivestockFarmingImg.png";
import PigFarmingImg from "../../../src/assets/images/PigFarmingImg.png";
import { useLocation } from "react-router-dom";
import AppLayout from "../../components/utility/AppLayout";

const AgroServices = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const agroService = query.get("agro-service");

  // console.log(agroService);
  return (
    <AppLayout>
      <div className="overflow-hidden">
        {/* <nav className="mb-20">
          <NavBar />
        </nav> */}
        <div className="md:max-w-screen-xl md:mb-6">
          <div
            className=" md:block xxs:flex md:flex-col  md:items-center justify-center w-full md:h-[350px] xxs:h-[300px] bg-cover bg-center md:py-20 md:px-14 xxs:relative"
            style={{
              backgroundImage: ` url('${AgroservImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className=" xxs:absolute md:top-10 xxs:top-0 mt-32">
              <h1 className="mb-2 font-normal tracking-tight text-3xl   text-[#fff]">
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

          <div className=" bg-[#F4F4F4] mt-12 rounded-md max-w-[1350px] m-auto md:flex md:mx-10 xxs:py-10 md:py-0 xxs:px-3 md:px-0">
            <div className=" md:px-10 flex-1 flex flex-col  justify-center ">
              <h1 className=" md:font-normal md:tracking-tight md:text-3xl flex justify-self-start font-bold text-[#333]  whitespace-nowrap mb-2">
                What our Agro services is <br className="md:hidden"/> all about
              </h1>
              <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
                Agro services play a crucial role in pork meat production and
                supply chain, which involves farrow-to-finish operations,
                genetics, feed formulation, animal health, and waste management
                services. These services are essential in delivering
                high-quality, sustainable, and healthy pork meat that meets the
                needs and preferences of customers. As a provider of agro
                services, we take pride in our commitment to animal welfare,
                nutrition, and sustainability, which ensures that our products
                not only taste great but also promote the health of our
                customers and the environment.
              </p>
            </div>
            <figure className=" flex-1">
              <img
                className="object-cover h-full xxs:py-4 md:py-0 xxs:px-2 md:px-0"
                src={FarmingImg}
                alt=""
              />
            </figure>
          </div>

          <div className=" text-center mt-12 text-[20px]">
            <h1 className="font-normal tracking-tight md:text-3xl mb-4 text-[#333]">
              Our Agro Services
              <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto mt-1"></div>
            </h1>
          </div>

          <div className="md:grid md:grid-cols-3 md:px-6">
            <div className=" card-container md:mt-2 md:p-4 xxs:p-3 relative inline-block h-[350px]">
              <img
                className=" brightness-50 rounded bg-cover h-full"
                src={PigFarmingImg}
                alt=""
              />

              <div className="absolute top-5 bottom-0 mt-[70px] md:mt-20">
                <h1 className=" text-[#E6E6E6] text-lg font-semibold px-5 ">
                  Pig Farming
                </h1>
                <p className=" px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
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

            <div className=" card-container md:mt-2 md:p-4 xxs:p-3  relative h-[350px]">
              <img
                className=" brightness-50 rounded h-full bg-cover"
                src={FeedImg}
                alt=""
              />

              <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24]">
                <h1 className=" text-[#E6E6E6] text-lg font-semibold px-5 ">
                  Feed and Nutrition
                </h1>
                <p className=" px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
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
            <div className=" card-container md:mt-2 md:p-4 xxs:p-3  relative h-[350px]">
              <img
                className=" brightness-50 rounded-md h-full bg-cover"
                src={LivestockFarmingImg}
                alt=""
              />

              <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
                <h1 className=" text-[#E6E6E6] text-lg font-semibold  px-5  ">
                  Animal Health
                </h1>
                <p className=" px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
                  A healthy herd of pigs is essential for a successful pork
                  production. Animal health services provide farmers with
                  thetools and expertise to prevent and treat diseases, improve
                  herd health, and maintain biosecurity. This leads to a
                  reduction in the spread of diseases, increased productivity,
                  and a safer food supply for consumers.
                </p>
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </AppLayout>
  );
};

export default AgroServices;
