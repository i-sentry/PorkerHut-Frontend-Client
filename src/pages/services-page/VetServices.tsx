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
          {/* <nav className="mb-20">
            <NavBar />
          </nav> */}
          <div className="md:max-w-screen-xl md:mb-6">
            <div
              className="  md:block xxs:flex md:flex-col  md:items-center justify-center w-full md:h-[350px] xxs:h-[300px] bg-cover bg-center md:py-20 md:px-14 xxs:relative"
              style={{
                backgroundImage: ` url('${VetImg}')`,
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
                      name: "Veterinary",
                      link: "/vet",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#F4F4F4] mt-12 rounded-md m-auto md:flex md:mx-10 xxs:py-10 md:py-0 xxs:px-3 md:px-0">
          <div className=" md:w-1/2 md:px-10 md:py-8 flex-1 flex flex-col  justify-center">
            <h1 className="md:text-3xl tracking-tight mb-4 md:font-normal xxs:font-bold text-[#333] xxs:text-xl">
              Our Veterinary Services
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Are you looking for a partner to help your pigs reach their full
              potential? Turn to Porkerhut. We understand that the health and
              well-being of your animals are critical to the success of your pig
              farming business. That's why we offer comprehensive veterinary
              services to help optimize the productivity and profitability of
              your operation.  Our experienced team of veterinary professionals
              provides personalized care tailored to the unique needs of your
              pigs. From maintaining healthy herds to optimizing feed and
              nutrition, we are dedicated to helping you overcome the challenges
              of pig farming.  We take a holistic approach to pig farming,
              focusing on preventative care and regular check-ups to identify
              health issues early and improve the overall well-being of your
              pigs. In addition to expert veterinary care, we offer herd
              management assistance, including customized solutions for feed
              consultation and nutritional analysis, to help you maintain a
              healthy and productive environment for your pigs. Choose Porkerhut
              for exceptional veterinary care and experience the difference for
              yourself.
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

        <div className="mt-12 xxs:mb-12 md:mb-0 text-[20px] bg-[#F5F9F6] py-8 md:px-10 xxs:px-3 md:h-[100%] md:w-[100%]">
          <div className="flex items-center justify-center mb-10 ">
            <h1 className="md:font-normal tracking-tight md:text-3xl mb-4 text-[#333] xxs:font-bold">
              What We Provide
              <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
            </h1>
          </div>

          <div className=" md:relative md:flex md:items-center md:justify-center md:h-[40rem] w-full xxs:grid xxs:grid-cols-2 xxs:gap-3">
            {/* <div> */}
            <div className=" xxs:h-fit  md:h-[250px] md:w-[300px] border xxs:px-3 xxs:py-2  bg-white md:mb-4  rounded-md px-6 md:py-4 md:absolute md:top-10 md:left-0">
              <h1 className=" md:font-normal md:text-3xl xxs:font-bold">01</h1>
              <h1 className="md:text-lg md:font-semibold xxs:font-medium xxs:text-sm">
                Comprehensive Health <br /> Check-ups
              </h1>
              <p className=" text-[13px] text-[#797979]">
                Regular check-ups with our veterinarians ensure the overall
                health of your pigs. We'll perform thorough exams, check for
                underlying health issues, monitor weight and body condition, and
                ensure proper nutrition.
              </p>
            </div>

            <div className=" xxs:h-fit md:h-[250px] md:w-[300px] border xxs:px-3 xxs:py-2 bg-white md:mb-4  md:px-6 md:py-4 rounded-md md:absolute md:top-0 md:right-0">
              <h1 className="md:font-normal md:tracking-tight md:text-3xl xxs:font-bold">02</h1>
              <h1 className="md:text-lg md:font-semibold xxs:font-medium xxs:text-sm">Feed Consultation</h1>
              <p className=" text-[13px] text-[#797979]">
                Our vets help determine the best feed for your pigs to promote
                optimal growth and health. This includes nutritional analysis
                and personalized recommendations.
              </p>
            </div>

            <div className=" xxs:h-fit  md:h-[250px] md:w-[300px]  border xxs:px-3 xxs:py-2  bg-white md:mb-4 rounded-md md:px-6 md:py-4 md:absolute md:bottom-0 md:left-20">
              <h1 className="md:font-normal tracking-tight md:text-3xl xxs:font-bold">03</h1>
              <h1 className="md:text-lg md:font-semibold xxs:font-medium xxs:text-sm">
                Herd Management Assistance
              </h1>
              <p className=" text-[13px] text-[#797979]">
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


            <div className=" xxs:h-fit  md:h-[250px] md:w-[300px] border  bg-white md:mb-4 xxs:px-3 xxs:py-2 md:px-6 md:py-4 rounded-md md:mt-4 md:absolute md:bottom-0 md:right-10 ">
              <h1 className="md:font-normal tracking-tight md:text-3xl xxs:font-bold">04</h1>
              <h1 className="md:text-lg md:font-semibold xxs:font-medium xxs:text-sm">Reproductive Health</h1>
              <p className=" text-[13px] text-[#797979]">
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
