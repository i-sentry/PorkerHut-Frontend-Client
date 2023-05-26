import React, { useEffect, useState } from "react";
import AppLayout from "../../components/utility/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { OrderData } from "../MyOrder";
import { IOrderData } from "../../components/vendors-component/MyOrderSection";
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

        <div className="md:flex md:mx-[80px]  xxs:px-3  py-8 md:gap-8 bg-white md:rounded-sm">
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
                src={images[3]}
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
          <div className="md:flex-1 flex flex-col gap-3 xxs:mt-4  md:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-[32px] leading-[38px] ">
                {item?.product_name}
              </h1>
              <span className="text-[20px] leading-[23px] font-medium text-[#000000]">
                N3000
              </span>
            </div>
            <div className="text-[16px] text-[#797979] leading-[19px] font-normal">
              Store Name: <span className="text-[#333333]"> Porker Hut</span>
            </div>

            <span className="text-[16px] text-[#797979] leading-[19px] font-normal">
              Category: <span className="text-[#333333]">{item?.price}</span>
            </span>

            <span className="text-[16px] text-[#797979] leading-[19px] font-normal">
              Product ID: <span className="text-[#333333]">{item?.id}</span>
            </span>

            {/* <span className=" font-normal text-base text-[#797979]">Our shipping fees are flat rates. Regardless of the size and amount of items <br />
            ordered, only one shipping fee applies.</span> */}
            <span className="text-[16px] text-[#797979] leading-[19px] font-normal">
              Weight: <span className="text-[#333333]">{item?.quantity}</span>
            </span>

            <div className="flex flex-col">
              <h1 className="text-[16px] text-[#797979] leading-[19px] font-normal">
                Quantity
              </h1>
            </div>

            <span className="text-[16px] text-[#797979] leading-[19px] font-normal">
              Order Total: <span className="text-[#333333]">₦30,000</span>
            </span>

            <form action="">
              <span className="text-[14px] leading-[16px] font-normal">
                Reason
              </span>

              <textarea
                placeholder="Type here"
                className={`appearance-none  relative block w-full px-[14px] py-[10px] h-32 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${"border-ErrorBorder"}`}
              />

              <div className="md:mt-[24px]  md:flex md:justify-end gap-6 xxs:px-4 md:px-0 xxs:mt-4">
                <button className="md:px-3 xxs:w-full md:w-32 md:h-10 xxs:h-14  border-[#BB0101] border text-[#BB0101] text-[14px] leading-[24px] rounded font-semibold ">
                  Cancel
                </button>

                <button className="md:px-3 xxs:w-full md:w-32 md:h-10 xxs:h-14  bg-[#197B30] border text-[#FFFFFF] text-[14px] leading-[24px] rounded font-semibold ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ReturnRequest;
