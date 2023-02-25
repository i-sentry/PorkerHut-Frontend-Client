import React from "react";
import NavBar from "../components/nav-component/NavBar";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import BlogBanner from "../assets/images/BlogBanner.png";
import SuyaImg from "../assets/images/SuyaImg.png";
import ServiceForm from "../components/services-component/ServiceForm";
import Footer from "../components/footer-component/Footer";

const WeekendKills = () => {
  return (
    <>
      <div>
        <div className="overflow-x-hidden">
          <nav className="mb-20">
            <NavBar />
          </nav>
          <div className="mb-10">
            <div className=" md:block xxs:flex flex-col items-center justify-center h-[300px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
              <img
                src={BlogBanner}
                alt=""
                className="w-full h-full object-cover absolute mix-blend-overlay"
              />
              <div className="md:pl-20 pl- md:ml-2 md:pt-28 absolute">
                <h1 className=" ml-6 font-bold text-3xl text-white md:inline ">
                  Weekend Kills
                </h1>
                <div className="md:flex md:items-center xxs:ml-8 md:pl-0">
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
      <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1360px] m-auto md:flex">
        <div className=" p-6 flex-1 md:p-16">
          <h1 className=" text-4xl mb-4 font-bold text-[#333]">
            Our Weekend Kills
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
            className="object-cover h-full p-6 md:p-0 shrink-0"
            src={SuyaImg}
            alt=""
          />
        </figure>
      </div>

      <section className="w-full h-full md:p-14">
        <ServiceForm
          text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
          title="Send us a Message"
        />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default WeekendKills;
