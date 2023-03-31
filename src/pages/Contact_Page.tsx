import React from "react";
import headerImg from "../assets/images/contactBanner.png";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import ServiceForm from "../components/services-component/ServiceForm";
import AppLayout from "../components/utility/AppLayout";
import toast, { Toaster } from "react-hot-toast";

const Contact_Page = () => {
  const notify = () => toast.success("Here is your toast.");
  return (
    <AppLayout>
      <div className="overflow-x-hidden">
        {/* <nav className="mb-20">
        <NavBar />
      </nav> */}
        <div className="  max-w-screen-xl ">
          <div
            className=" md:block xxs:flex flex-col items-center justify-center w-full md:h-[330px] bg-cover bg-center py-20 px-14"
            style={{
              backgroundImage: ` url('${headerImg}')`,
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
        </div>
        <button onClick={notify}>hello</button>
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
