import React from "react";
import headerImg from "../assets/images/contactBanner.png";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import ServiceForm from "../components/services-component/ServiceForm";
import AppLayout from "../components/utility/AppLayout";
import toast, { Toaster } from "react-hot-toast";

const Contact_Page = () => {
  const notify = () => toast.success("Here is your toast.");

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="overflow-x-hidden">
        <div className="  max-w-screen-xl ">
          <div
            className="  flex   items-center md:justify-start xxs:justify-center w-full md:h-[300px] xxs:h-[300px] bg-cover bg-center  md:px-14"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${headerImg}')`,
         
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="">
              <h1 className="mb-2 font-normal tracking-tight md:text-[32px] md:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
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
          </div>
          </div>

        {/* <button onClick={notify}></button> */}
        <section className="w-full h-full md:p-14 xxs:mt-16 md:mt-0">
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
