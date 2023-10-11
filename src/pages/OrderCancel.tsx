import React from "react";
import OrderImg from "../assets/images/OrderImg.png";
import AppLayout from "../components/utility/AppLayout";

const OrderCancel = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="text-center pt-20">
        <h1 className=" xxs:text-lg lg:text-[40px] leading-[47px] font-semibold">
          How to cancel your orders
          <div className="xxs:w-20 h-2 w-20 bg-[#197B30] m-auto mt-3"></div>
        </h1>
      </div>
      <div className=" mt-8 mb-14 lg:px-14 xxs:px-4">
        <figure>
          <img className=" w-full" src={OrderImg} alt="img" />
        </figure>
      </div>
    </AppLayout>
  );
};

export default OrderCancel;
