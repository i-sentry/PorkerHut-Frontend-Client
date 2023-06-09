import React from "react";
import NavBar from "../../components/nav-component/NavBar";
import BreadCrumbs from "../../components/utility/BreadCrumbs";
import VetImg from "../../assets/images/VetImg.png";
import PigImg from "../../assets/images/PigImg.png";
import VetDrImg from "../../assets/images/VetDrImg.png";
import Footer from "../../components/footer-component/Footer";
import ServiceForm from "../../components/services-component/ServiceForm";
import AppLayout from "../../components/utility/AppLayout";

const VetServices = () => {
  return (
    <>
      <AppLayout>
        <div className="overflow-x-hidden">
          <div className="md:w-full md:mb-16">
            <div
              className="  flex   items-center md:justify-start xxs:justify-center w-full md:h-[300px] xxs:h-[300px] bg-cover bg-center  md:px-14"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${VetImg}')`,

                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
              }}
            >
              <div className="">
                <h1 className="mb-2 font-normal tracking-tight md:text-[32px] md:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
                  Veterinary Services
                </h1>

                <BreadCrumbs
                  items={[
                    {
                      name: "Home",
                      link: "/",
                    },
                    {
                      name: "Veterinary",
                      link: "/vet",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-14  ">
          <div className=" bg-[#F4F4F4]     md:flex">
            <div className=" md:w-1/2 xxs:px-3 xxs:pt-16 md:pt-0 flex-1 flex justify-center md:pl-10 flex-col md:pr-8">
              <h1 className="md:font-medium  md:text-[32px] md:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333] whitespace-nowrap  mb-2">
                Our Veterinary Services
              </h1>
              <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979] text-justify">
                Are you looking for a partner to help your pigs reach their full
                potential? Turn to Porkerhut. We understand that the health and
                well-being of your animals are critical to the success of your
                pig farming business. That's why we offer comprehensive
                veterinary services to help optimize the productivity and
                profitability of your operation.  Our experienced team of
                veterinary professionals provides personalized care tailored to
                the unique needs of your pigs. From maintaining healthy herds to
                optimizing feed and nutrition, we are dedicated to helping you
                overcome the challenges of pig farming.  We take a holistic
                approach to pig farming, focusing on preventative care and
                regular check-ups to identify health issues early and improve
                the overall well-being of your pigs. In addition to expert
                veterinary care, we offer herd management assistance, including
                customized solutions for feed consultation and nutritional
                analysis, to help you maintain a healthy and productive
                environment for your pigs. Choose Porkerhut for exceptional
                veterinary care and experience the difference for yourself.
              </p>
            </div>
            <figure className="md:w-1/2">
              <img
                className="object-cover h-full p-6 md:p-0"
                src={VetDrImg}
                alt=""
              />
            </figure>
          </div>
        </div>

        <div className="mt-16 mb-14 xxs:py-12  bg-[#F5F9F6] md:p-14  xxs:px-3 md:h-[100%] md:w-[100%]">
          <div className="flex items-center justify-center mb-10 ">
            <h1 className="font-normal  md:text-[32px] mb-4 text-[#333333] md:leading-[47px] xxs:text-[20px] xxs:leading-[23px] ">
              What We Provide
              <div className=" xxs:w-20 h-1.5 w-14 bg-[#197B30] m-auto"></div>
            </h1>
          </div>

          <div className=" md:relative md:flex md:items-center md:justify-center md:h-[40rem] w-full xxs:grid xxs:grid-cols-2 xxs:gap-3 ">
            {/* <div> */}
            <div className="   md:h-[299px] md:w-[373px] border   bg-white md:mb-4  rounded-md md:p-6 xxs:p-3 md:absolute md:top-10 md:left-0 ">
              <h1 className=" font-medium md:text-[32px] md:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px] ">
                01
              </h1>
              <h1 className="md:text-[32px] md:leading-[23px] md:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[20px] text-left">
                Comprehensive Health Check-ups
              </h1>
              <p className=" md:text-[14px] text-justify md:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px]">
                Regular check-ups with our veterinarians ensure the overall
                health of your pigs. We'll perform thorough exams, check for
                underlying health issues, monitor weight and body condition, and
                ensure proper nutrition.
              </p>
            </div>

            <div className=" xxs:h-fit md:h-[251px] md:w-[373px] border xxs:px-3 xxs:py-2 bg-white md:mb-4  md:px-6 md:py-4 rounded-md md:absolute md:top-0 md:right-0">
              <h1 className="font-medium md:text-[32px] md:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                02
              </h1>
              <h1 className="md:text-[32px] md:leading-[23px] md:font-medium xxs:font-normal xxs:text-[14px] xxs:leading-[16px] text-left">
                Feed Consultation
              </h1>
              <p className="  md:text-[16px] md:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                Our vets help determine the best feed for your pigs to promote
                optimal growth and health. This includes nutritional analysis
                and personalized recommendations.
              </p>
            </div>

            <div className=" xxs:h-fit  md:h-[251px] md:w-[373px]  border xxs:px-3 xxs:py-2 md:mt-14  bg-white md:mb-4 rounded-md md:px-6 md:py-4 md:absolute md:bottom-0 md:left-20">
              <h1 className="font-medium md:text-[32px] md:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                03
              </h1>
              <h1 className="md:text-[32px] md:leading-[23px] md:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[20px] text-left">
                Herd Management Assistance
              </h1>
              <p className=" md:text-[14px] md:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                We help keep your pig herd healthy and productive with our herd
                management services, including vaccination programs, parasite
                control, and bio-security protocols.
              </p>
            </div>

            <img
              src={PigImg}
              alt="livestock"
              className="object-cover w-[40%] xxs:hidden md:block"
            />

            <div className=" xxs:h-fit  md:h-[300px] md:w-[373px] border  bg-white md:mb-4 xxs:px-3 xxs:py-2 md:px-6 md:py-4 rounded-md md:mt-14 md:absolute md:bottom-0 md:right-10 ">
              <h1 className="font-medium md:text-[32px] md:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                04
              </h1>
              <h1 className="md:text-[32px] md:leading-[23px] md:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[16px] text-left">
                Reproductive Health
              </h1>
              <p className="md:text-[14px] md:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                Reproductive health is critical for maintaining the productivity
                of your pig farming business. Our veterinarians offer a range of
                services to optimize the reproductive health of your pigs,
                including artificial insemination, pregnancy diagnosis, and
                fertility assessments.
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
        <section className="w-full h-full md:p-14">
          <ServiceForm
            text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
            title="Let us vet for you"
          />
        </section>
      </AppLayout>
    </>
  );
};

export default VetServices;
