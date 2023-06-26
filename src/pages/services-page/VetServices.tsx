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
          <div className="lg:w-full lg:mb-16">
            <div
              className="  flex   items-center lg:justify-start xxs:justify-center w-full lg:h-[300px] xxs:h-[300px] bg-cover bg-center  lg:px-14"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url('${VetImg}')`,

                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
              }}
            >
              <div className="">
                <h1 className="mb-2 font-normal tracking-tight lg:text-[32px] lg:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
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
        <div className="lg:px-14  ">
          <div className=" bg-[#F4F4F4]     lg:flex">
            <div className=" lg:w-1/2 xxs:px-4 xxs:pt-16 lg:pt-0 flex-1 flex justify-center lg:pl-10 flex-col lg:pr-8">
              <h1 className="lg:font-medium  lg:text-[32px] lg:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333] whitespace-nowrap  mb-2">
                Our Veterinary Services
              </h1>
              <p className=" leading-6 text-[14px]  text-[#797979] text-justify">
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
            <figure className="lg:w-1/2">
              <img
                className="object-cover h-full py-6 px-4 lg:py-6 lg:px-6 lg:p-0"
                src={VetDrImg}
                alt=""
              />
            </figure>
          </div>
        </div>

        <div className="mt-16 mb-14 xxs:py-12  bg-[#F5F9F6] lg:p-14  xxs:px-3 lg:h-[100%] lg:w-[100%]">
          <div className="flex items-center justify-center mb-10 ">
            <h1 className="font-normal  lg:text-[32px] mb-4 text-[#333333] lg:leading-[47px] xxs:text-[20px] xxs:leading-[23px] ">
              What We Provide
              <div className=" xxs:w-20 h-1.5 w-14 bg-[#197B30] m-auto"></div>
            </h1>
          </div>

          <div className=" lg:relative lg:flex lg:items-center lg:justify-center lg:h-[40rem] w-full xxs:grid xxs:grid-cols-2 xxs:gap-3 ">
            {/* <div> */}
            <div className=" lg:h-[299px] lg:w-[373px] border   bg-white lg:mb-4  rounded-lg lg:p-6 xxs:p-3 lg:absolute lg:top-10 lg:left-0 ">
              <h1 className=" font-medium lg:text-[32px] lg:leading-[30px] text-left xxs:text-[32px] xxs:leading-[38px] ">
                01
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[20px] text-left">
                Comprehensive Health Check-ups
              </h1>
              <p className=" lg:text-[14px] text-justify lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px]">
                Regular check-ups with our veterinarians ensure the overall
                health of your pigs. We'll perform thorough exams, check for
                underlying health issues, monitor weight and body condition, and
                ensure proper nutrition.
              </p>
            </div>

            <div className=" xxs:h-fit lg:h-[251px] lg:w-[373px] border xxs:px-3 xxs:py-2 bg-white lg:mb-4  lg:px-6 lg:py-4 rounded-lg lg:absolute lg:top-0 lg:right-0">
              <h1 className="font-medium lg:text-[32px] lg:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                02
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal xxs:text-[14px] xxs:leading-[16px] text-left">
                Feed Consultation
              </h1>
              <p className="  lg:text-[16px] lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                Our vets help determine the best feed for your pigs to promote
                optimal growth and health. This includes nutritional analysis
                and personalized recommendations.
              </p>
            </div>

            <div className=" xxs:h-fit  lg:h-[251px] lg:w-[373px]  border xxs:px-3 xxs:py-2 lg:mt-14  bg-white lg:mb-4 rounded-lg lg:px-6 lg:py-4 lg:absolute lg:bottom-0 lg:left-20">
              <h1 className="font-medium lg:text-[32px] lg:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                03
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[20px] text-left">
                Herd Management Assistance
              </h1>
              <p className=" lg:text-[14px] lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
                We help keep your pig herd healthy and productive with our herd
                management services, including vaccination programs, parasite
                control, and bio-security protocols.
              </p>
            </div>

            <img
              src={PigImg}
              alt="livestock"
              className="object-cover w-[40%] xxs:hidden lg:block"
            />

            <div className=" xxs:h-fit  lg:h-[300px] lg:w-[373px] border  bg-white lg:mb-4 xxs:px-3 xxs:py-2 lg:px-6 lg:py-4 rounded-lg lg:mt-14 lg:absolute lg:bottom-0 lg:right-10 ">
              <h1 className="font-medium lg:text-[32px] lg:leading-[56px] text-left xxs:text-[32px] xxs:leading-[38px]">
                04
              </h1>
              <h1 className="lg:text-[32px] lg:leading-[30px] lg:font-medium xxs:font-normal  xxs:text-[14px] xxs:leading-[16px] text-left">
                Reproductive Health
              </h1>
              <p className="lg:text-[14px] lg:leading-[24px] mt-2 text-[#797979] xxs:text-[13px] xxs:leading-[20px] text-justify">
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
        <section className="w-full h-full lg:p-14">
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
