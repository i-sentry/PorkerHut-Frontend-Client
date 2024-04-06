import { FaUserCircle } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import {
  useDeleteVendorById,
  useGetVendorById,
  useVendorStatusUpdate,
} from "../../services/hooks/Vendor";
import { useGetAggregateVendorOrders } from "../../services/hooks/orders";
import Popover from "../utility/PopOver";
import { Tooltip } from "../utility/ToolTip";

// interface IStoreCardProps {
//   store_name: any;
//   id: number;
//   email: string;
//   company_address: string;
//   phone: string;
//   total_orders: number;
//   total_failed_orders: number;
//   data_joined: string;
//   status: string;
// }

const StoreCard = ({
  item,
  setIsOpen,
  // refetch,
  setAction,
  setShop,
  setShowConfirm,
}: any) => {
  const { storeStatus } = item;
  // const updateStatus = useVendorStatusUpdate(item?._id);
  const { data } = useGetVendorById(item?._id);
  const { data: vendorAggr } = useGetAggregateVendorOrders(item?._id);
  // const deleteVendor = useDeleteVendorById(item?._id);
  console.log(data, "storee items", item);
  console.log(vendorAggr, "vendorAggr");

  // const handleActivateVendor = async () => {
  //   if (item?.storeStatus === "approved") {
  //     toast.info(
  //       `${item?.sellerAccountInformation?.shopName} is already approved`,
  //     );
  //     return;
  //   }
  //   updateStatus
  //     .mutateAsync({ storeStatus: "approved" })
  //     .then((res: any) => {
  //       console.log(res);
  //       refetch();
  //       toast.success(
  //         `${item?.sellerAccountInformation?.shopName} is now approved `,
  //       );
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //       toast.error("Error Occurred, try again!!!");
  //     });
  // };

  // const handleDeactivateVendor = async () => {
  //   if (item?.storeStatus === "deactivated") {
  //     toast.info(
  //       `${item?.sellerAccountInformation?.shopName} is already deactivated`,
  //     );
  //     return;
  //   }
  //   try {
  //     const response = await updateStatus.mutateAsync({
  //       storeStatus: "deactivated",
  //     });
  //     console.log({ response });
  //     toast.success(
  //       `${item?.sellerAccountInformation?.shopName} is now deactivated `,
  //     );
  //     refetch();
  //   } catch (error: any) {
  //     console.log(error, "error");
  //     toast.error("Error Occurred, try again!!!");
  //   }
  // };

  // const handleDeleteVendor = () => {
  //   deleteVendor
  //     .mutateAsync(deleteVendor)
  //     .then((res: any) => {
  //       toast.success(
  //         `${item?.sellerAccountInformation?.shopName} is now deleted `,
  //       );
  //       refetch();
  //       console.log(res, "delete ResP");
  //     })
  //     .catch((err: any) => {
  //       console.log(err, "delete err");
  //       toast.error("Error Occurred, try again!!!");
  //     });
  // };

  return (
    <>
      <div
        className={`relative h-auto w-full rounded-md border border-[#D9D9D9]  p-5 ${
          storeStatus === "deactivated" ? "" : ""
        }`}
      >
        {storeStatus === "deactivated" && (
          <div className="absolute inset-0 rounded-md  bg-[#181717c7] ">
            <div className="flex h-full items-center justify-center">
              <p className="flex select-none items-center justify-center text-xl font-normal text-[#F91919]">
                Deactivated
              </p>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-6 mt-1 cursor-pointer">
          <Popover
            buttonContent={
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <TbDots size={24} className="  cursor-pointer" />
              </span>
            }
            placementOrder={"left"}
            closeOnClick={true}
          >
            <div className="w-[150px] py-2">
              <button
                className="w-full border-b py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                onClick={() => setIsOpen(true)}
              >
                Store Information
              </button>
              <button
                onClick={() => {
                  setShowConfirm(true);
                  setAction("activate");
                  setShop(item);
                }}
                className="w-full border-b py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              >
                Activate
              </button>
              <button
                onClick={() => {
                  setShowConfirm(true);
                  setAction("deactivate");
                  setShop(item);
                }}
                className="w-full border-b py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              >
                Deactivate
              </button>
              <button
                onClick={() => {
                  setShowConfirm(true);
                  setAction("delete");
                  setShop(item);
                }}
                className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              >
                Delete
              </button>
            </div>
          </Popover>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full">
            <FaUserCircle size={42} color="#A2A2A2" />
          </div>
          <div className="mb-3 text-center">
            <span className=" text-xl font-semibold capitalize text-[#333333] ">
              {item?.sellerAccountInformation?.shopName}
            </span>
          </div>
        </div>

        <ul className="mt-2 space-y-3">
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              ID:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              <Tooltip message={item?._id}>
                {item?._id?.slice(0, 10)}...
              </Tooltip>
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Email:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {item?.sellerAccountInformation?.email}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Company Address:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              <Tooltip message={item?.businessInformation?.address1}>
                <span className="w-28 truncate whitespace-nowrap">
                  {item?.businessInformation?.address1}
                </span>
              </Tooltip>
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Phone:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {item?.sellerAccountInformation?.phoneNumber}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Total Orders:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {/* {item?.sellerAccountInformation?.phoneNumber} */}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Total Failed Orders:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {/* {item?.sellerAccountInformation?.phoneNumber} */}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Joined:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {/* {item?.sellerAccountInformation?.phoneNumber} */}
            </span>
          </li>
        </ul>
      </div>

      {/* MODAL */}
    </>
  );
};

export default StoreCard;
