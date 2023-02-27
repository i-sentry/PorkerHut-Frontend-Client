import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import AgroservImg from "../../src/assets/images/AgroservImg.png";
import FarmingImg from "../../src/assets/images/FarmingImg.png";
import FeedImg from "../../src/assets/images/FeedImg.png";
import LivestockFarmingImg from "../../src/assets/images/LivestockFarmingImg.png";
import PigFarmingImg from "../../src/assets/images/PigFarmingImg.png";
import ServiceForm from "../components/services-component/ServiceForm";

import { useLocation } from "react-router-dom";

const AgroServices = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const agroService = query.get("agro-service");

  // console.log(agroService);
  return (
    <>
      <nav className="mb-20">
        <NavBar />
      </nav>
      <div className="mb-10 ">
        <div className=" md:block xxs:flex flex-col items-center justify-center h-[300px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
          <img
            src={AgroservImg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className=" md:pt-28 absolute">
            <h1 className="md:ml-8  font-bold text-3xl text-white md:inline-block ">
              Agro Services
            </h1>
            <div className="md:flex md:items-center xxs:ml-2 md:ml-8">
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
        </div>
      </div>

      <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1550px] m-auto md:flex">
        <div className=" p-6 flex-1 md:p-20">
          <h1 className=" text-4xl mb-4 font-bold text-[#333] ">
            Agro Services Offers
          </h1>
          <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
            Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla
            mollis dui in in in aliquet. Dapibus aenean sed felis adipiscing
            habitant a amet volutpat. Auctor donec at nisl justo vel ut
            faucibus. Ornare elit aenean at nunc integer facilisis at facilisi
            velit. Lorem ipsum dolor sit amet consectetur. Tristique rhoncus
            nulla mollis dui in in in aliquet. Dapibus aenean sed felis
            adipiscing habitant a amet volutpat. Auctor donec at nisl justo vel
            ut faucibus. Ornare elit aenean at nunc integer facilisis at
            facilisi velit.Lorem ipsum dolor sit amet consectetur. Tristique
            rhoncus nulla mollis dui in in in aliquet. Dapibus aenean sed felis
            adipiscing habitant a amet volutpat. Auctor donec at nisl justo vel
            ut faucibus. Ornare elit aenean at nunc integer facilisis at
            facilisi velit.
          </p>
        </div>
        <figure className=" flex-1">
          <img
            className="object-cover h-full p-6 md:p-0 "
            src={FarmingImg}
            alt=""
          />
        </figure>
      </div>

      <div className=" text-center md:text-center mt-12 text-[20px]">
        <h1 className=" text-[20px] mb-4 font-bold text-[#333]">
          Our Agro Services
          <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
        </h1>
      </div>

      <div className=" md:flex  flex-row gap-10 md:ml-[30px] md:pr-20 w-full ">
        <div className=" card-container mt-2 p-4 relative inline-block md:max-w-[450px]">
          <img
            className=" brightness-50 rounded-md max-w-[450px]"
            src={PigFarmingImg}
            alt=""
          />

          <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
            <h1 className="  text-[#E6E6E6] font-[16px] md:px-5 px-5 md:font-24px">
              Pig Farming
            </h1>
            <p className="px-5 md:px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
              Pig animal farming is better for the world. This is why we raise
              our livestock on pasture based farms which are environmentally
              beneficial and allows our livestock produce healthier meat. In
              combination with their diet and care, produce high-quality meat
              with fine-grained marbling, a beautiful pink color, and rich
              flavor that can stand on its own — beating anything you'll find at
              your grocery store.
            </p>
          </div>
        </div>

        <div className=" card-container mt-2 p-4 relative inline-block md:max-w-[450px]">
          <img
            className=" brightness-50 rounded-md max-w-[450px] "
            src={FeedImg}
            alt=""
          />

          <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
            <h1 className=" text-[#E6E6E6] font-[16px] md:px-5 px-5 md:font-24px ">
              Feed and Nutrition
            </h1>
            <p className="px-5 md:px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
              Proper feed and nutrition are essential for the health and growth
              of pigs. Feed and nutrition services provide farmers with the
              knowledge and resources to formulate and deliver balanced diets
              that meet the specific nutritional needs of their pigs. This
              results in healthier pigs that are able to reach their full growth
              potential and produce high-quality meat that meets consumer
              demands.
            </p>
          </div>
        </div>

        <div className=" card-container mt-2 p-4 relative inline-block md:max-w-[450px]">
          <img
            className=" brightness-50 rounded-md max-w-[450px]"
            src={LivestockFarmingImg}
            alt=""
          />

          <div className="absolute top-5 bottom-0 mt-[70px] md:mt-24">
            <h1 className=" text-[#E6E6E6] font-[16px] md:px-5 px-5 md:font-24px ">
              Animal Health
            </h1>
            <p className="px-5 md:px-5 leading-5 text-[13px] md:text-[16px] mt-2 text-[#E6E6E6]">
              A healthy herd of pigs is essential for a successful pork
              production. Animal health services provide farmers with thetools
              and expertise to prevent and treat diseases, improve herd health,
              and maintain biosecurity. This leads to a reduction in the spread
              of diseases, increased productivity, and a safer food supply for
              consumers.
            </p>
          </div>
        </div>
      </div>
      <section className="w-full h-full md:p-14">
        <ServiceForm
          text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
          title="Let's Talk Agro Services"
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AgroServices;

