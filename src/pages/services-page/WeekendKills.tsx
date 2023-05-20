import React from "react";
import NavBar from "../../components/nav-component/NavBar";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import BlogBanner from "../../assets/images/BlogBanner.png";
import SuyaImg from "../../assets/images/SuyaImg.png";
import ServiceForm from "../../components/services-component/ServiceForm";
import Footer from "../../components/footer-component/Footer";
import AppLayout from "../../components/utility/AppLayout";

const WeekendKills = () => {
  return (
    <AppLayout>
      <div>
        <div className="">
          <div className="">
            <div
              className="flex   items-center md:justify-start xxs:justify-center w-full md:h-[400px] xxs:h-[300px] bg-cover bg-center  md:px-14"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${BlogBanner}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
              }}
            >
              <div className="">
                <h1 className="mb-2 font-normal tracking-tight md:text-[40px] md:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
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
      <div className="md:px-14 pt-16 ">
        <div className=" bg-[#F4F4F4]     md:flex">
          <div className=" md:w-1/2 xxs:px-3 xxs:pt-16 md:pt-0 flex-1 flex justify-center md:pl-20 flex-col md:pr-8">
            <h1 className="md:font-medium  md:text-[40px] md:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333]   mb-2">
              Why Weekend Kills
            </h1>
            <p className=" leading-6 xxs:text-[14px] md:text-[16px] text-[#797979] text-justify">
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
          <figure className="md:w-1/2">
            <img
              className="object-cover w-full xxs:py-10 h-full  xxs:px-3 md:p-0"
              src={SuyaImg}
              alt="weekendImg"
            />
          </figure>
        </div>
      </div>

      <section className="w-full h-full md:p-14">
        <ServiceForm
          text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
          title="Reach out for Weekend Kills"
        />
      </section>
    </AppLayout>
  );
};

export default WeekendKills;
