import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";

import AgroservImg from "../../src/assets/images/AgroservImg.png";
import FarmingImg from "../../src/assets/images/FarmingImg.png";
import FeedImg from "../../src/assets/images/FeedImg.png";
import LivestockFarmingImg from "../../src/assets/images/LivestockFarmingImg.png";
import PigFarmingImg from "../../src/assets/images/PigFarmingImg.png";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/utility/BreadCrumbs";

const AgroServices = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const agroService = query.get("agro-service");

  // console.log(agroService);
  return (
    <>
      
      <div className="overflow-x-hidden">
      <nav className="mb-20">
        <NavBar />
      </nav>
      <div className="container  max-w-screen-xl ">
        <div
          className=" md:block xxs:flex flex-col items-center justify-center w-full md:h-[330px] bg-cover bg-center py-20 px-14"
          style={{
            backgroundImage: ` url('${AgroservImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
          }}
        >
          <h1 className="mb-2 text-3xl font-medium  text-left   text-[#fff]">
            Contact Us
          </h1>

          <BreadCrumbs
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Contact Us",
                link: "/contact-us",
              },
            ]}
          />
        </div>

        <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1350px] m-auto md:flex">
          <div className=" p-6 flex-1 md:p-2 md:ml-16">
            <h1 className=" text-[20px] md:text-[40px] mb-4 font-bold text-[#333] md:mt-28">
              Our Agro Services
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Agro services provide crucial support in the production and supply
              chain of pork meat through various services such as breeding and
              genetics, feed and nutrition, animal health, and waste management,
              resulting in a sustainable and efficient production of
              high-quality, safe and consumer-demanded pork meat
            </p>
          </div>
          <figure className=" flex-1">
            <img
              className="object-cover h-full p-6 md:p-0"
              src={FarmingImg}
              alt=""
            />
          </figure>
        </div>

        <div className=" text-center mt-12 text-[20px]">
          <h1 className=" text-[20px] mb-4 font-bold text-[#333]">
            Our Agro Services
            <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
          </h1>
        </div>

        <div className="flex-row md:flex gap-8 md:ml-[100px]">
          <div className=" card-container mt-2 p-4 relative inline-block">
            <img
              className=" brightness-50 rounded-md md:max-w-[420px]"
              src={PigFarmingImg}
              alt=""
            />

            <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
              <h1 className=" text-[#E6E6E6] font-[16px] px-5 md:font-24px ">
                Pig Farming
              </h1>
              <p className=" px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
                Pig animal farming is better for the world. This is why we raise
                our livestock on pasture based farms which are environmentally
                beneficial and allows our livestock produce healthier meat. In
                combination with their diet and care, produce high-quality meat
                with fine-grained marbling, a beautiful pink color, and rich
                flavor that can stand on its own — beating anything you'll find
                at your grocery store.
              </p>
            </div>
          </div>

          <div className=" card-container mt-2 p-4  relative ">
            <img
              className=" brightness-50 rounded-md md:max-w-[420px]"
              src={FeedImg}
              alt=""
            />

            <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
              <h1 className=" text-[#E6E6E6] font-[16px] px-5 md:font-24px ">
                Feed and Nutrition
              </h1>
              <p className=" px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
                Proper feed and nutrition are essential for the health and
                growth of pigs. Feed and nutrition services provide farmers with
                the knowledge and resources to formulate and deliver balanced
                diets that meet the specific nutritional needs of their pigs.
                This results in healthier pigs that are able to reach their full
                growth potential and produce high-quality meat that meets
                consumer demands.
              </p>
            </div>
          </div>
          <div className=" card-container mt-2 p-4  relative inline-block">
            <img
              className=" brightness-50 rounded-md md:max-w-[420px]"
              src={LivestockFarmingImg}
              alt=""
            />

            <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
              <h1 className=" text-[#E6E6E6] font-[16px] px-5 md:font-24px ">
                Animal Health
              </h1>
              <p className=" px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
                A healthy herd of pigs is essential for a successful pork
                production. Animal health services provide farmers with thetools
                and expertise to prevent and treat diseases, improve herd
                health, and maintain biosecurity. This leads to a reduction in
                the spread of diseases, increased productivity, and a safer food
                supply for consumers.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
    </>
  );
};

export default AgroServices;
