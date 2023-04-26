import React from "react";
import { Tooltip } from "../utility/ToolTip";
import { TbDots } from "react-icons/tb";

interface IStoreCardProps {
  store_name: any;
  id: number;
  email: string;
  company_address: string;
  phone: string;
  total_orders: number;
  total_failed_orders: number;
  data_joined: string;
  status: string;
}

const PaymentCard = (item: IStoreCardProps) => {
  const { status } = item;

  return (
    <div
      className={`border border-[#D9D9D9] rounded-md w-full h-[380px]  px-2 relative ${
        status === "deactivated" ? "" : ""
      }`}
    >
   

      <div>
        <div className="grid justify-items-stretch cursor-pointer mt-1">
          <TbDots size={24} className=" justify-self-end" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div
            className="rounded-full bg-cover bg-no-repeat bg-center flex h-14 w-14"
            style={{
              backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
            }}
          ></div>
          <div className="mt-2 text-center">
            <span className=" text-xl font-normal text-[#333333] ">
              {item?.store_name}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-7">
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Store Name: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.id}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Period: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.email}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Total Orders:</span> {""}
            <Tooltip message={item.company_address}>
              <span className="text-[#333333] font-normal whitespace-nowrap text-xs truncate w-28">
                {item.company_address}
              </span>
            </Tooltip>
          </div>
          <div className="text-[#A2A2A2]  text-xs font-light flex items-center gap-1">
            <span>Returned: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.phone}
            </span>
          </div>
          <div className="text-[#A2A2A2]  text-xs font-light flex items-center gap-1">
            <span>Sales Revenue:</span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.total_orders}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Charges: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.total_failed_orders}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Refund on Fees: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.data_joined}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Payout: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.data_joined}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
