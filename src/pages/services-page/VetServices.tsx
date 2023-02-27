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
          <div className="container  max-w-screen-xl ">
            <div
              className=" md:block xxs:flex flex-col items-center justify-center w-full md:h-[330px] bg-cover bg-center py-20 px-14"
              style={{
                backgroundImage: ` url('${VetImg}')`,
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
                    name: "Veterinary",
                    link: "/vet",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1360px] m-auto md:flex">
          <div className=" p-6 flex-1 md:p-16">
            <h1 className=" text-4xl mb-4 font-bold text-[#333]">
              Our Veterinary Services
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla
              mollis dui in in in aliquet. Dapibus aenean sed felis adipiscing
              habitant a amet volutpat. Auctor donec at nisl justo vel ut
              faucibus. Ornare elit aenean at nunc integer facilisis at facilisi
              velit. Lorem ipsum dolor sit amet consectetur. Tristique rhoncus
              nulla mollis dui in in in aliquet. Dapibus aenean sed felis
              adipiscing habitant a amet volutpat. Auctor donec at nisl justo
              vel ut faucibus. Ornare elit aenean at nunc integer facilisis at
              facilisi velit.Lorem ipsum dolor sit amet consectetur. Tristique
              rhoncus nulla mollis dui in in in aliquet. Dapibus aenean sed
              felis adipiscing habitant a amet volutpat. Auctor donec at nisl
              justo vel ut faucibus. Ornare elit aenean at nunc integer
              facilisis at facilisi velit.
            </p>
          </div>
          <figure className=" flex-1">
            <img
              className="object-cover h-full p-6 md:p-0"
              src={VetDrImg}
              alt=""
            />
          </figure>
        </div>

        <div className=" text-center mt-12 text-[20px] bg-[#F5F9F6]">
          <h1 className=" text-[20px] mb-4 font-bold text-[#333]">
            What We Provide
            <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
          </h1>

          <div className="card-container grid grid-cols-2 mr-8">
            <div className=" h-[194px] w-[170px] border  bg-white mb-4 ml-6 py-3 px-3 rounded-md">
              <h1 className=" text-[#323232] text-[32px] ">01</h1>
              <h1 className=" text-[#4A4A4A] text-[14px]">
                Licensed Veterinarian
              </h1>
              <p className=" text-[13px] text-[#797979]">
                Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus
                aenean sed felis adipisc
              </p>
            </div>
            <div className=" h-[210px] w-[170px] border  bg-white mb-4 ml-6 py-2 px-2 rounded-md mr-4 hover:animate-pulse">
              <h1 className=" text-[#323232] text-[32px] ">02</h1>
              <h1 className=" text-[#4A4A4A] text-[14px]">
                Diagnosis and Treatments
              </h1>
              <p className=" text-[13px] text-[#797979]">
                Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus
                aenean sed felis adipisc
              </p>
            </div>

            <div className=" ">
              <figure>
                <img src={PigImg} alt="" />
              </figure>
            </div>
            <div className=" h-[178px] w-[170px] border  bg-white mb-4 ml-6 py-2 px-2 rounded-md">
              <h1 className=" text-[#323232] text-[32px] ">03</h1>
              <h1 className=" text-[#4A4A4A] text-[14px]">
                Nutritional counseling
              </h1>
              <p className=" text-[13px] text-[#797979]">
                Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus
                aenean sed felis adipisc
              </p>
            </div>
            <div className=" h-[194px] w-[170px] border  bg-white mb-4 ml-6 py-2 px-2 rounded-md mr-4 mt-4">
              <h1 className=" text-[#323232] text-[32px]">04</h1>
              <h1 className=" text-[#4A4A4A] text-[14px]">
                Vaccinations and routine check-ups
              </h1>
              <p className=" text-[13px] text-[#797979]">
                Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus
                aenean sed felis adipisc
              </p>
            </div>
          </div>
        </div>
        <section className="w-full h-full md:p-14">
          <ServiceForm
            text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
            title="Let us vet for you"
          />
        </section>
      </AppLayout>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default VetServices;
