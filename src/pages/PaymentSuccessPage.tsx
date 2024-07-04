import React, { useEffect } from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
// import CancelImg from "../assets/images/CancelImg.png"
import VerifyImg from "../assets/images/VerifyImg.png";
import vector from "../assets/images/Vector.png";
import Footer from "../components/footer-component/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, setProducts } from "../redux/features/product/productSlice";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") as string);
  const orderId = JSON.parse(localStorage.getItem("order_id") as string);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    localStorage.removeItem("order_id");
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("cart", "{}");
    dispatch(clearCart());
  }, []);


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
            <div className=" mb-20 h-[500px] rounded-lg border bg-white px-[4%] md:h-[561px]">
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div
                  className="flex h-28 w-28 items-center justify-center bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${vector})` }}
                >
                  <img src={VerifyImg} alt="" className="h-24 w-24" />
                </div>
                <h1 className="mb-2 pt-4 text-2xl font-semibold leading-7 text-[#333333]">
                  Payment Successful
                </h1>
                <p className="text-sm text-[#333333]">
                  Your Order ID #{orderId} has been placed
                </p>
                <p className="mb-4 px-4 text-sm text-[#333333]">
                  We sent an email to {user?.email} with your order confirmation
                  and bill.
                </p>
                <button
                  onClick={handleClick}
                  className="select-none whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#197B30] py-4 px-[45px] text-[8px] font-medium tracking-wider text-[#fff] md:inline-block md:py-3 md:px-10 md:text-[14px]"
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
