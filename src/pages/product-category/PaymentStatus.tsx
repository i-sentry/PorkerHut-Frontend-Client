import React from "react";
import NavBar from "../../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../../components/story-components/ProductsBreadCrumbs";
import CancelImg from "../assets/images/CancelImg.png";
import vector from "../assets/images/Ellipse.png";
import Footer from "../../components/footer-component/Footer";
import { useNavigate } from "react-router-dom";

const PaymentStatus = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate("/my-cart");
  };
  return (
    <>
      <div className="  bg-[#F5F5F5]">
        <nav className="mb-20">
          <NavBar />
        </nav>

        <div className=" bg-[#F5F5F5]">
          <div className="py-4 px-8">
            <ProductsBreadCrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Cart",
                  link: "/my-cart",
                },
              ]}
            />
          </div>

          <div className=" max-w-[1568px] md:max-w-[1568px] bg-white border h-[500px] md:h-[561px] mx-8 mb-20 rounded-lg">
            <div className="flex flex-col items-center text-center h-full justify-center relative">
              <div
                className="bg-contain bg-no-repeat bg-center flex items-center justify-center w-28 h-28"
                style={{ backgroundImage: `url(${vector})` }}
              >
                <img src={CancelImg} alt="" className="w-24 h-24" />
              </div>
              <h1 className="pt-4 text-[18px] md:text-base leading-7 text-[#333333] font-medium ">
                Payment Failed
              </h1>

              <p className="text-xs md:text-xs px-4 mb-4 text-[#333333]">
                Something went wrong
              </p>
              <button
                onClick={handleClick}
                className="border border-[#F91919] md:text-[14px] text-[8px] md:py-3 md:px-10 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#F91919] md:inline-block select-none tracking-wider font-medium whitespace-nowrap"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PaymentStatus;
