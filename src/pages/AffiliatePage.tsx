import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import AffiPageImg from "../../src/assets/images/AffiPageImg.png";
import PublicMktImg from "../../src/assets/images/PublicMktImg.png";
import { BsDot } from "react-icons/bs";

const AffiliatePage = () => {
  return (
    <>
      <NavBar />

      <nav className="mb-20">
        <NavBar />
      </nav>
      <div className="mb-10">
        <div className=" xxs:flex flex-col md:flex-col md:flex md:items-center md:justify-center items-center justify-center h-[350px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
          <img
            src={AffiPageImg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className=" absolute text-center">
            <h1 className=" text-2xl text-white font-bold my-7 md:text-[36px]">
              Become a Poker Hut Partner
            </h1>
            <button className=" Apply Now border border-[#197B30] text-sm md:text-2xl md:py-4 xxs:py-5 px-[50px] rounded-md text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap  ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=" text-center mt-12 text-[20px]">
          <h1 className=" text-[20px] mb-4 font-bold text-[#333]">
            Terms of Services
            <div className=" xxs:w-20 h-2 w-10 bg-[#197B30] m-auto"></div>
          </h1>
          <p className=" p-4 md:px-28">
            Lorem ipsum dolor sit amet consectetur. Vel ac velit pretium mi elit
            in eu massa nisi. Auctor imperdiet magna viverra dignissim.
            Consectetur at quisque pharetra laoreet varius eget. Phasellus
            imperdiet non laoreet bibendum orci. Fames elementum tristique
            laoreet morbi eu aliquet sed quam et. Consectetur volutpat tristique
            enim orci ut eu libero. Fusce placerat nec sed quisque placerat
            scelerisque tortor a. Nullam vel id elit id suspendisse quis et
            varius. Integer id accumsan varius sit et nullam donec malesuada.
            Feugiat dui aliquet lacus auctor morbi cras orci. Molestie non diam
            nibh hac dictum proin elementum nulla. Turpis tincidunt donec sapien
            odio. Dolor sem lectus scelerisque in interdum feugiat nibh gravida
            nisl.
          </p>
        </div>
      </div>
      <div className=" pt-4 md:text-center md:mt-6">
        <h1 className=" text-[20px] font-medium text-[#333] px-4">
          About Marketplace
        </h1>
      </div>
      <div className=" md:flex  gap-6 w-full">
      <div className=" ">
        <img className="md:ml-10 flex-1 h-full w-full p-4" src={PublicMktImg} alt="" />
      </div>
      <div className=" md:pt-4 md:ml-16">
        <p className=" p-4 text-[#797979] text-sm md:text-[15px]">
          The marketplace is going first to our farmer’s waitlist. In order to
          guarantee sales/distribution for farmers, not all registered accounts
          will be activated immediately. However, activation of account depends
          on:
        </p>
        <div className=" ml-6">
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
          <div className="items-center flex ml-4 my-4">
            <BsDot />
            <p className="  text-[#333] text-sm">The location of the farmer</p>
          </div>
        </div>
      </div>
      </div>
        <div className=" my-10">
          <h1 className="text-[20px] text-xl text-center font-bold md:text-[58px]">
            Become a Partner Today
          </h1>
        </div>
      <div className=" md:grid md:grid-cols-3">
        <div className=" text-center my-16 md:my-16">
          <span className=" text-4xl font-bold md:text-[40px]">1</span>
          <h1 className=" text-lg text-[#333] my-2 md:my-6 font-semibold md:text-[32px]">Join the Program</h1>
          <p className=" text-sm text-[#333] md:text-base">    
            <a href="/" className="underline text-[#197B30]">
              Sign up here
            </a> {"  "}
            to become a Poker Hut partner
          </p>
        </div>
        <div className=" text-center my-16 md:my-16">
          <span className=" text-4xl font-bold md:text-[40px]">2</span>
          <h1 className=" text-lg text-[#333] my-2 md:my-6 font-semibold md:text-[32px]">Vet Partner</h1>
          <p className=" text-sm text-[#333] md:text-base">    
            <a href="/" className="underline text-[#197B30]">
              Sign up here
            </a> {"  "}
            to Join our Vet Team
          </p>
        </div>
        <div className=" text-center mb-20 my-16 md:my-16">
          <span className=" text-4xl font-bold md:text-[40px]">3</span>
          <h1 className=" text-lg text-[#333] my-2 md:my-6 font-semibold md:text-[32px]">Logistics Partner</h1>
          <p className=" text-sm text-[#333] md:text-base">    
            <a href="/" className="underline text-[#197B30]">
              Sign up here
            </a> {"  "}
            to Partner with Us
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AffiliatePage;
