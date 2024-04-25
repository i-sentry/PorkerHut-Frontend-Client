import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../components/utility/AppLayout";
import { useGetOrdersById } from "../services/hooks/orders";
import { useEffect, useMemo, useState } from "react";

const CancelRequest = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(0);
  const [reason, setReason] = useState<string>("");
  const { data, isLoading } = useGetOrdersById(id as string);
  const order = useMemo(() => data?.data?.order, [id]);
  const selectedProduct = order?.productDetails?.find(
    (item: any) => item?.productID?._id === productId,
  );
  const images = selectedProduct?.productID?.images;

  console.log(data?.data?.order, "cencel req", images);
  console.log(
    order?.productDetails?.find(
      (item: any) => item?.productID?._id === productId,
    ),
    "selected ididididid",
  );

  useEffect(() => window.scroll(0, 0), []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(reason, "reason");

    navigate("/my__orders/request-success");
  };

  return (
    <AppLayout>
      <div className="mt-16 pb-10 md:mt-[90px]">
        <div className="mb-5 flex flex-col items-center gap-1 text-center lg:mb-8">
          <h2 className="text-2xl font-bold lg:text-[2rem]">Cancel Request</h2>
          <div className="h-1 w-[100px] bg-green-700 lg:mt-1"></div>
        </div>

        <div className="bg-white xxs:px-4 md:flex md:gap-4 md:rounded-sm lg:gap-6">
          <div className="flex xxs:flex-col-reverse md:flex-1 md:flex-row md:gap-2">
            <div className="flex-[1] xxs:mt-3 xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 md:mt-0 md:block">
              {images?.map((img: any, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  onClick={() => setSelectedImg(index)}
                  className="h-20 w-full cursor-pointer rounded-md object-cover md:mb-3"
                />
              ))}
            </div>
            <div className="md:flex-[5]">
              <img
                src={images[selectedImg]}
                alt="img4"
                className=" w-full rounded-md object-cover  xxs:h-[300px] md:h-[400px] lg:h-[480px]"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:flex-1">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize lg:text-2xl ">
                {selectedProduct?.productID?.information?.productName}
              </h3>
              <span className="text-xl font-medium text-[#000000]">
                ₦
                {selectedProduct?.productID?.pricing?.productPrice.toLocaleString()}
              </span>
            </div>
            <ul className="space-y-2">
              <li className="text-[#797979]">
                Store Name:{" "}
                <span className="font-medium capitalize text-[#333333]">
                  {selectedProduct?.vendor?.sellerAccountInformation?.shopName}
                </span>
              </li>
              <li className="text-[#797979]">
                Category:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.productID?.information?.category}
                </span>
              </li>
              <li className="text-[#797979]">
                Product ID:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.productID?._id}
                </span>
              </li>
              <li className="text-[#797979]">
                Weight:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.productID?.details?.productWeight}kg
                </span>
              </li>
              <li className="text-[#797979]">
                Quantity:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.quantity}
                </span>
              </li>
              <li className="text-[#797979]">
                Order Total:{" "}
                <span className="font-medium text-[#333333]">
                  {" "}
                  ₦{order?.totalAmount?.toLocaleString()}
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <form id="cancel-order" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="reason" className="mb-2 inline-block">
                  Reason
                </label>
                <textarea
                  name="reason"
                  placeholder="Type here"
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="h-[150px] w-full resize-none rounded border border-[#D9D9D9] p-3 placeholder:text-[#A2A2A2] focus:border-green-700 focus:ring-green-700"
                ></textarea>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => navigate(`/my__orders/${id}`)}
                    className="rounded border border-red-600 px-6 py-2 text-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded bg-green-700 px-6 py-2 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CancelRequest;
