import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import Pigdesktop from "../../src/assets/images/Pigdesktop.png";
import PlantImg from "../../src/assets/images/PlantImg.png";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import AppLayout from "../components/utility/AppLayout";

const About = () => {


  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      {/* <NavBar />

      <nav className="mb-20">
        <NavBar />
      </nav> */}
      <div className="mb-10">
        <div className=" md:block xxs:flex flex-col items-center justify-center h-[300px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
          <img
            src={Pigdesktop}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="md:pl-20 pl- md:ml-2 md:pt-28 absolute">
            <h1 className=" ml-6 font-bold text-3xl text-white md:inline ">
              About Us
            </h1>
            <div className="md:flex md:items-center xxs:ml-8 md:pl-0">
              <BreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "About Us",
                    link: "/",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1360px] m-auto md:flex">
        <div className=" p-6 flex-1 md:p-16">
          <h1 className=" text-4xl mb-4 font-bold text-[#333]">What we do</h1>
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
            className="object-cover h-full p-6 md:p-0"
            src={PlantImg}
            alt=""
          />
        </figure>
      </div>

      <div className=" mt-24 p-6 bg-[#F4F4F4] flex-row">
        <div className="max-w-[500px] md:ml-[90px] ">
          <h1 className=" text-[20px] mb-4 font-bold text-[#333]">
            Why choose Pokerhut?
          </h1>
          <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
            Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla
            mollis dui in in in aliquet. Dapibus aenean sed felis adipiscing
            habitant a amet volutpat. Auctor donec at nisl justo vel ut
            faucibus. Ornare elit aenean at nunc integer facilisis at facilisi
            velit. Lorem ipsum dolor sit amet consectetur. Tristique rhoncus
            nulla mollis dui in in in aliquet. Dapibus aenean
          </p>
        </div>

        <div className=" md:flex gap-10 md:ml-[90px] md:pr-20">
          <div className="max-w-[500px] bg-white rounded mt-12 px-4 py-4">
            <h1 className=" text-2xl mb-2 font-bold text-[#333]">
              Personalized Products
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla
              mollis dui in in in aliquet. Dapibus aenean sed felis adipiscing
              habitant a amet volutpat. Auctor donec at nisl justo vel ut
              faucibus. Ornare elit aenean at nunc integer facilisis at facilisi
              velit. Lorem ipsum dolor sit amet consectetur. Tristique rhoncus
              nulla mollis dui in in in aliquet. Dapibus aenean
            </p>
          </div>

          <div className="max-w-[500px] bg-white rounded mt-12 px-4 py-4">
            <h1 className=" text-2xl mb-2 font-bold text-[#333]">
              Availabilty
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla
              mollis dui in in in aliquet. Dapibus aenean sed felis adipiscing
              habitant a amet volutpat. Auctor donec at nisl justo vel ut
              faucibus. Ornare elit aenean at nunc integer facilisis at facilisi
              velit. Lorem ipsum dolor sit amet consectetur. Tristique rhoncus
              nulla mollis dui in in in aliquet. Dapibus aenean
            </p>
          </div>

          <div className="max-w-[500px] bg-white rounded mt-12 px-4 py-4">
            <h1 className=" text-2xl mb-2 font-bold text-[#333] ">
              Guaranteed Satisfaction
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla
              mollis dui in in in aliquet. Dapibus aenean sed felis adipiscing
              habitant a amet volutpat. Auctor donec at nisl justo vel ut
              faucibus. Ornare elit aenean at nunc integer facilisis at facilisi
              velit. Lorem ipsum dolor sit amet consectetur. Tristique rhoncus
              nulla mollis dui in in in aliquet. Dapibus aenean
            </p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </AppLayout>
  );
};

export default About;
