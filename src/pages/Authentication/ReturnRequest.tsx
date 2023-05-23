import React, { useEffect, useState } from "react";
import AppLayout from "../../components/utility/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { OrderData } from "../MyOrder";
import { IOrderData } from "../../components/sellers-order-page-component/MyOrderSection";
import { MdFavoriteBorder } from "react-icons/md";

const ReturnRequest = () => {
     const { id } = useParams();

     const navigate = useNavigate();

     const [item, setOrder] = useState<IOrderData>({
       id: "",
       img: "",
       location: "",
       time: "",
       product_name: "",
       store_name: "",
       order_date: "",
       order_id: "",
       price: "",
       quantity: "",
       order_total: "",
       order_status: "",
     });

     useEffect(() => {
       const filteredOrder = OrderData.find((ord: IOrderData) => ord.id === id);
       //@ts-ignore
       setOrder(filteredOrder);
     }, [id]);
    const [selectedImg, setSelectedImg] = useState(0);
      const images = [
        // item?.img,
        "../../assets/images/Product1.jpg",
        "../../assets/images/Product2.jpg",
        "../../assets/images/Product3.jpg",
        "../../assets/images/RawPorkImg.png",
      ];
  return (
    <AppLayout>
      <div className="m-auto my-24 ">
        <div className="flex items-center flex-col justify-center py-10 relative">
          <h2 className="md:text-[40px] md:leading-[47px] xxs:text-lg font-medium text-[#333333]">
            Return Request
          </h2>

          <div className="h-1.5 w-24 bg-[#197B30] mt-1"></div>
        </div>

        <div className="md:flex md:px-6 xxs:px-3 md:4 py-8 md:gap-10 bg-white md:rounded-sm">
          <div className="flex md:flex-1 xxs:flex-col-reverse md:flex-row">
            <div className="flex-[1] md:block xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 xxs:mt-3 md:mt-0">
              <img
                src={images[0]}
                alt="img1"
                onClick={(e) => setSelectedImg(0)}
                className="object-cover cursor-pointer w-[75px] h-20 md:mb-3 rounded-sm"
              />
              <img
                src={images[1]}
                alt="img2 rounded"
                onClick={(e) => setSelectedImg(1)}
                className="object-cover cursor-pointer w-[75px] h-20 md:mb-3 rounded-sm"
              />
              <img
                src={images[2]}
                alt="img3 rounded"
                onClick={(e) => setSelectedImg(2)}
                className="object-cover cursor-pointer w-[75px] h-20 md:mb-3 rounded-sm"
              />
              <img
                src={images[2]}
                alt=""
                onClick={(e) => setSelectedImg(2)}
                className="object-cover cursor-pointer w-[75px] h-20 rounded xxs:hidden md:flex"
              />
            </div>

            <div className="md:flex-[5]">
              <img
                src={images[selectedImg]}
                alt="img4"
                className=" object-cover md:h-[400px] xxs:h-[300px]  w-full rounded-sm"
              />
            </div>
          </div>
          <div className="md:flex-1 flex flex-col gap-3 xxs:mt-4 md:pr-8 md:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl">{item?.product_name}</h1>
              <span className="cursor-pointer hover:text-yellow-500">
                <MdFavoriteBorder />
              </span>
            </div>
            <span></span>
            <span className=" font-medium text-base">N{item?.price}</span>
            {/* <span className=" font-normal text-base text-[#797979]">Our shipping fees are flat rates. Regardless of the size and amount of items <br />
            ordered, only one shipping fee applies.</span> */}
            <span className="font-normal text-sm text-[#797979]">
              Weight:{" "}
              <span className="font-medium text-black text-sm">
                {item?.quantity}
              </span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Category:{" "}
              <span className="font-medium text-black text-sm">
                {item?.price}
              </span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Product ID:{" "}
              <span className="font-medium text-black text-sm">{item?.id}</span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Availability:{" "}
              <span className="font-medium text-black text-sm">
                100% Available
              </span>
            </span>
            <div className="flex flex-col">
              <h1 className="block font-normal text-base text-[#797979]">
                Quantity
              </h1>

              <div className="flex items-center">
                <button
                  className="border w-10 h-10"
                //   onClick={() =>
                //     setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                //   }
                >
                  -
                </button>
                <span className="border w-10 h-10 flex items-center justify-center">
                  {/* {quantity} */}
                </span>
                <button
                  className="border w-10 h-10"
                //   onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="md:mt-2  md:flex gap-6 xxs:px-4 md:px-0 xxs:mt-4">
              <button
                // onClick={handleClick}
                className="bg-[#197B30] xxs:w-full md:w-[200px] md:h-10 xxs:h-14 text-white rounded-sm font-medium xxs:mb-4 shadow-md"
              >
                Add to Cart
              </button>
              <button
                // onClick={handleNavigate}
                className="md:w-[200px] xxs:w-full md:h-10 xxs:h-14 border-[#197B30] border text-[#197B30] rounded-sm font-medium shadow-md"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ReturnRequest;
