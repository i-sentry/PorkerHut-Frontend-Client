import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
// import PigImage from '../../src/assets/images/Pig.png'
import Pigdesktop from "../../src/assets/images/Pigdesktop.png";
import PlantImg from "../../src/assets/images/PlantImg.png";
// import Plantmobile from "../../src/assets/images/Plantmobile.png";
import BreadCrumb from "../components/BreadCrumbs";

const About = () => {
  return (
    <>
      <NavBar />
      
        <div className=" relative ">
          <img className=" opacity-150 relative brightness-50 mt-20" src={Pigdesktop} alt="" />
          <div className=" absolute px-[8%] top-1/2 -translate-y-1/3 mx-24">
            <h1 className=" text-[#FFFF] text-2xl md:text-[40px] md:py-5">About Us</h1>
            <BreadCrumb
              items={[
                {
                  name: "Home",
                  link: "/home",
                },
                {
                  name: "About",
                  link: "/about",
                },
              ]}
            />
          </div>
        
       
       </div>



        <div className=" bg-[#F4F4F4] mt-24 rounded-md max-w-[1700px] m-auto md:flex">
          <div className=" p-20 flex-1">
            <h1 className=" text-4xl mb-4 font-bold text-[#333]">What we do</h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#333]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
              Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
              vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
              dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
              sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo vel ut faucibus. 
              Ornare elit aenean at nunc integer facilisis at facilisi velit.Lorem ipsum dolor sit amet 
              consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean sed felis 
              adipiscing habitant a amet volutpat. Auctor donec at nisl justo vel ut faucibus. Ornare elit 
              aenean at nunc integer facilisis at facilisi velit.
              </p>
          </div>
            <figure className=" flex-1">
              <img className="object-cover h-full" src={ PlantImg } alt="" />
            </figure>
        </div>

        <div className=" mt-24 p-4 bg-[#F4F4F4] flex-row">
      <div className=" md:ml-44 bg-[#F4F4F4]">
              <div className="max-w-[500px]">
              <h1 className=" text-[28px] mb-4 font-bold text-[#333]">Why choose Pokerhut</h1>
                <p className=" text-[#333] leading-6 text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
                </p>
              </div>

          <div className=" md:flex gap-16  ">
              <div className="max-w-[500px] bg-white rounded mt-12 px-2 py-2">
              <h1 className=" text-2xl mb-4 font-bold text-[#333]">Personalized Products</h1>
                <p className=" text-[#333] leading-6 text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
              </p>
              </div>

              <div className="max-w-[500px] bg-white rounded mt-12 px-2 py-2">
              <h1 className=" text-2xl mb-4 font-bold text-[#333]">Availabilty</h1>
                <p className=" text-[#333] leading-6 text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean    
              </p>
              </div>
              
              <div className="max-w-[500px] bg-white rounded mt-12 px-2 py-2">
              <h1 className=" text-2xl mb-4 font-bold text-[#333]">Guaranteed Satisfaction</h1>
                <p className=" leading-6 text-[14px] md:text-[16px] text-[#333]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
                  
              </p>
              </div>
          </div>
        </div>
      </div>
       <Footer />
       </>
  );
};

export default About;
