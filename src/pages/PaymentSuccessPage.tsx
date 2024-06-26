import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
// import CancelImg from "../assets/images/CancelImg.png"
import VerifyImg from "../assets/images/VerifyImg.png";
import vector from "../assets/images/Vector.png";
import Footer from "../components/footer-component/Footer";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="  bg-[#F5F5F5]">
        <nav className="mb-20">
          <NavBar />
        </nav>

        <div className=" bg-[#F5F5F5]">
          <div className="py-4 px-[4%]">
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

          <div className="px-[4%]">
            <div className=" bg-white border h-[500px] md:h-[561px] px-[4%] mb-20 rounded-lg">
              <div className="flex flex-col items-center text-center h-full justify-center relative">
                <div
                  className="bg-contain bg-no-repeat bg-center flex items-center justify-center w-28 h-28"
                  style={{ backgroundImage: `url(${vector})` }}
                >
                  <img src={VerifyImg} alt="" className="w-24 h-24" />
                </div>
                <h1 className="pt-4 text-[18px] md:text-base leading-7 text-[#333333] font-medium ">
                  Payment Successful
                </h1>
                <p className="text-xs md:text-sm text-[#333333]">
                  Your Order ID #101101 has been placed
                </p>
                <p className="text-xs md:text-xs px-4 mb-4 text-[#333333]">
                  We sent an email to williamsnado@gmail.com with your order
                  confirmation and bill.
                </p>
                <button
                  onClick={handleClick}
                  className="border border-[#479559] md:text-[14px] text-[8px] md:py-3 md:px-10 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PaymentSuccessPage;
