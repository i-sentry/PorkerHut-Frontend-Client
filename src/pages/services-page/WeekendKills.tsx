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
        <div className="overflow-x-hidden">
          <div className="mb-10">
            <div className="md:block xxs:flex md:flex-col  md:items-center justify-center w-full md:h-[350px] xxs:h-[300px] bg-cover bg-center md:py-20 md:px-14  xxs:relative bg-gradient-to-r from-slate-700 to to bg-slate-800"
             style={{
              backgroundImage: ` url('${BlogBanner}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // width: "100vw",
            }}
            
            >
              
              <div className="xxs:absolute md:top-10 xxs:top-0 mt-32 ">
                <h1 className="mb-2 text-3xl font-normal tracking-tight xxs:text-center text-[#fff]">
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
      <div className=" bg-[#F4F4F4] mt-12 rounded m-auto md:flex md:mx-10 xxs:py-10 md:py-0 xxs:px-3 md:px-0">
        <div className=" md:p-6 md:w-1/2">
          <h1 className="md:font-normal md:tracking-tight md:text-3xl font-bold text-[#333] whitespace-nowrap mb-2 xxs:text-xl">
          Why Weekend Kills
          </h1>
          <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
            Looking for an affordable and ethical way to enjoy high-quality
            pork? Look no further than Porker Hut. We are committed to providing
            you with locally sourced and ethically raised pork that is not only
            delicious but also sustainably produced. Our weekend kill program
            offers a cost-effective solution for customers to purchase and share
            a whole pig at a reduced price by partnering with other like-minded
            individuals. And, our delivery service ensures that your pork
            arrives fresh and ready for your enjoyment. At Porker Hut, we
            believe in transparency and traceability. We carefully select our
            pigs and use environmentally responsible rearing practices,
            providing them with access to natural resources such as fresh air,
            water, and high-quality grain feed. We also offer veterinary
            services to ensure the health and well-being of our animals. Place
            your order today and experience the difference that high-quality,
            locally sourced-pork can make.
          </p>
        </div>
        <figure className="md:w-1/2">
          <img
            className="object-cover h-full p-6 md:p-0 shrink-0"
            src={SuyaImg}
            alt=""
          />
        </figure>
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
