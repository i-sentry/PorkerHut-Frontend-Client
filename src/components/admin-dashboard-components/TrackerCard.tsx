import React, { useEffect, useState } from "react";
import { TbDots } from "react-icons/tb";
import Popover from "../utility/PopOver";
import { FaUserCircle } from "react-icons/fa";
import { useUpdateRefundOnFees } from "../../services/hooks/admin/payments";
import { BiCheck, BiCheckSquare } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";

const TrackerCard = ({ data, setOpen, setSoldItems, refetch }: any) => {
  const [loading, setLoading] = useState(false);
  const [refund, setRefund] = useState<string>(
    `₦${data?.period?.refundOnFees || 0}`,
  );
  const [payout, setPayout] = useState<number>(0);
  const updateRefund = useUpdateRefundOnFees(data?.period?._id);

  const onchange = (e: any) => {
    const value = e.target.value;
    const inputedValue = value.replace(/₦/g, "");
    const formattedValue = `₦${inputedValue}`;

    setRefund(formattedValue);
    // setPayout((prev: any) => prev + inputedValue * 1); //Tremove comment when endpoint is fixed
    console.log(value);
  };

  const handleUpdate = () => {
    setLoading(true);
    updateRefund
      .mutateAsync({ refundOnFees: +refund.replace(/₦/g, "") })
      .then((res: any) => {
        console.log(res, "refund");
        refetch();
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err, "refunderr");
        setLoading(false);
      });
  };
  const handleView = () => {
    setSoldItems(data);
    setOpen(true);

    console.log(data, "sold");
  };

  useEffect(() => {
    setPayout(data?.period?.payout);
  }, [data]);
  return (
    <>
      <div className="relative rounded-md border border-[#D9D9D9]  bg-white p-5">
        {/* THREE DOTS OPTIONS */}
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
                className="w-full border-b px-3 pb-2 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                onClick={handleView}
              >
                View Sold Items
              </button>
              <button
                onClick={() => {}}
                className="hidden w-full px-3 pt-2 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              >
                Delete Store
              </button>
            </div>
          </Popover>
        </div>

        {/* CARD DETAILS */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full">
            <FaUserCircle size={64} color="#A2A2A2" />
          </div>
          <div className="mb-3 text-center">
            <span className=" text-xl font-semibold capitalize text-[#333333] ">
              {data?.vendor?.businessInformation?.businessOwnerName}
            </span>
          </div>
        </div>
        <ul className="mt-2 space-y-3">
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Store Name:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {data?.period?.vendor?.sellerAccountInformation?.shopName}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Period:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              Week {data?.period?.currentWeek}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Total Orders:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {data?.totalOrders}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Returned:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              {data?.returned}
            </span>
          </li>
        </ul>
        <ul className="mt-4 space-y-3 border-t pt-4">
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Store Revenue:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              ₦{Math.round(data?.period?.salesRevenue)?.toLocaleString()}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Charges:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-red-700 xl:text-base">
              ₦{data?.charges?.toLocaleString()}
            </span>
          </li>
          <li className="inline-flex">
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Refund on fees:&nbsp;
            </span>
            <input
              type="tel"
              name="refund"
              id="refund"
              // disabled={data?.returned < 1}
              value={refund}
              onChange={(e) => onchange(e)}
              className="h-6 w-[80px] border border-[#D9D9D9] px-1 focus:border-green-700 focus:ring-green-700 disabled:text-neutral-400"
            />
            <span
              onClick={handleUpdate}
              className="inline-flex h-6 w-6 items-center justify-center bg-green-700 px-1 text-white"
            >
              {loading ? <CgSpinner className="animate-spin" /> : <BiCheck />}
            </span>
          </li>
          <li>
            <span className="inline-block text-sm font-normal text-[#A2A2A2] xl:text-base">
              Payout:&nbsp;
            </span>
            <span className="inline-block text-sm font-normal text-[#333333] xl:text-base">
              ₦{payout?.toLocaleString()}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TrackerCard;
