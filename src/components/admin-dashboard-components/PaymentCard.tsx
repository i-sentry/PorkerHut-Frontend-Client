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
      className={`relative h-[380px] w-full rounded-md border  border-[#D9D9D9] px-2 ${
        status === "deactivated" ? "" : ""
      }`}
    >
      <div>
        <div className="mt-1 grid cursor-pointer justify-items-stretch">
          <TbDots size={24} className=" justify-self-end" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div
            className="flex h-14 w-14 rounded-full bg-cover bg-center bg-no-repeat"
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

        <div className="mt-7 flex flex-col gap-3">
          <div className="flex items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Store Name: </span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.id}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Period: </span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.email}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Total Orders:</span> {""}
            <Tooltip message={item.company_address}>
              <span className="w-28 truncate whitespace-nowrap text-xs font-normal text-[#333333]">
                {item.company_address}
              </span>
            </Tooltip>
          </div>
          <div className="flex  items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Returned: </span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.phone}
            </span>
          </div>
          <div className="flex  items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Sales Revenue:</span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.total_orders}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Charges: </span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.total_failed_orders}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Refund on Fees: </span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.data_joined}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-light text-[#A2A2A2]">
            <span>Payout: </span> {""}
            <span className="text-xs font-normal text-[#333333]">
              {item.data_joined}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
