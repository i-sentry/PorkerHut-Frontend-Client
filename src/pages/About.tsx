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
          <div className=" absolute px-[8%] top-1/2 -translate-y-1/3 ml-[100px] ">
            <h1 className=" text-white text-2xl md:text-[40px]">About Us</h1>
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


      
        <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1360px] m-auto md:flex">
          <div className=" p-6 flex-1 md:p-16">
            <h1 className=" text-4xl mb-4 font-bold text-[#333]">What we do</h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
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
              <img className="object-cover h-full p-6 md:p-0" src={ PlantImg } alt="" />
            </figure>
        </div>

        <div className=" mt-24 p-6 bg-[#F4F4F4] flex-row">
              <div className="max-w-[500px] ml-[85px]">
              <h1 className=" text-[20px] mb-4 font-bold text-[#333]">Why choose Pokerhut?</h1>
                <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
                </p>
              </div>

          <div className=" md:flex gap-10 ml-[85px] ">
              <div className="max-w-[500px] bg-white rounded mt-12 px-4 py-4">
              <h1 className=" text-2xl mb-2 font-bold text-[#333]">Personalized Products</h1>
                <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
              </p>
              </div>

              <div className="max-w-[500px] bg-white rounded mt-12 px-4 py-4">
              <h1 className=" text-2xl mb-2 font-bold text-[#333]">Availabilty</h1>
                <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean    
              </p>
              </div>
              
              <div className="max-w-[500px] bg-white rounded mt-12 px-4 py-4">
              <h1 className=" text-2xl mb-2 font-bold text-[#333] ">Guaranteed Satisfaction</h1>
                <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla    mollis dui in in in aliquet. 
                    Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
                    vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
                    dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
                  
              </p>
              </div>
          </div>
        </div>
       <Footer />
       </>
  );
};

export default About;
