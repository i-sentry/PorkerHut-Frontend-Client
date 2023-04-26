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
            className=" md:block xxs:flex md:flex-col  md:items-center justify-center w-full md:h-[350px] xxs:h-[300px] bg-cover bg-center md:py-20 md:px-14 xxs:relative"
            style={{
              backgroundImage: ` url('${headerImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="xxs:absolute md:top-10 xxs:top-0 mt-32">
              <h1 className="mb-2 text-3xl font-normal tracking-tight text-left   text-[#fff]">
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
        <button onClick={notify}></button>
        <section className="w-full h-full md:p-14">
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
