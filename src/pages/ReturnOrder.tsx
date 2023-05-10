import React from 'react'
import AppLayout from '../components/utility/AppLayout'
import OrderImg from "../assets/images/OrderImg.png";

const ReturnOrder = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0); // scrolls to top-left corner of the page
      }, []);
  return (
    <AppLayout>
      <div className=" text-center mt-24">
        <h1 className="  xxs:text-lg md:text-2xl font-medium">
          How to return your orders
          <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
        </h1>
      </div>
      <div className=" mt-8 mb-14 md:px-12 xxs:px-4">
        <figure>
          <img className=" w-full" src={OrderImg} alt="" />
        </figure>
      </div>

    </AppLayout>
  )
}

export default ReturnOrder