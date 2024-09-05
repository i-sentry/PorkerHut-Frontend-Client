import React from "react";
import headerImg from "../assets/images/contactBanner.png";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import ServiceForm from "../components/services-component/ServiceForm";
import AppLayout from "../components/utility/AppLayout";
import { BsEnvelope, BsMap, BsPhone } from "react-icons/bs";
import { BiSolidMapAlt } from "react-icons/bi";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact_Page = () => {
  // const notify = () => toast.success("Here is your toast.");

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="overflow-x-hidden">
        <div className="  max-w-screen-xl ">
          <div
            className=" relative flex w-full flex-col items-start   bg-cover bg-center px-4 xxs:h-[300px] xxs:justify-center md:h-[300px] md:flex-row md:items-center md:justify-start  md:px-14"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${headerImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="">
              <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] md:text-[32px]  md:leading-[47px]">
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

            <div className="right-10 top-1/2 mt-3 w-[450px] space-y-2 md:absolute md:-translate-y-1/2">
              <div className="flex items-center justify-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white">
                  <FaPhone size={20} />
                </span>

                <Link className="block text-white" to="tel:+2348057808076">
                  +2348057808076
                </Link>
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white">
                  <IoMail size={20} />
                </span>
                <Link
                  className="block text-white"
                  to="mailto:info@porkerhut.com"
                >
                  info@porkerhut.com
                </Link>
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white">
                  <IoLocationSharp size={20} />
                </span>
                <Link
                  className="max-w-[300px] flex-grow text-white"
                  to="https://www.google.com/maps?q=Plot+No.+41198+Cadastral+Zone+D24,+Kapa,+Kugwaru,+Nasarawa+State,+Nigeria"
                >
                  Plot No. 41198 Cadastral Zone D24, Kapa, Kugwaru, Nasarawa
                  State, Nigeria
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={notify}></button> */}
        <section className="h-full w-full md:mt-0 md:p-14">
          <ServiceForm
            text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
            title="Send us a Message"
          />
        </section>
      </div>
    </AppLayout>
  );
};

export default Contact_Page;
