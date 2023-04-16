import React from "react";
import { Tooltip } from "../utility/ToolTip";
import { TbDots } from "react-icons/tb";

const VetCard = ({ item }: { item: any }) => {
  return (
    <div
      className={`border border-[#D9D9D9] rounded-md w-full h-[280px]  px-4  `}
    >
      <div>
        <div className=" flex items-center justify-between mt-1">
          <div>
            <span className="text-[#333333] text-2xl font-normal">
              {item?.accountName}
            </span>
          </div>
          <TbDots size={24} className="  cursor-pointer" />
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Business Name: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.businessName}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Email: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.email}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>State of Operation: Lagos:</span> {""}
            <Tooltip message={item.state}>
              <span className="text-[#333333] font-normal whitespace-nowrap text-xs truncate w-28">
                {item.state}
              </span>
            </Tooltip>
          </div>
          <div className="text-[#A2A2A2]  text-xs font-light flex items-center gap-1">
            <span>Phone: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.phone}
            </span>
          </div>
          <div className="text-[#A2A2A2]  text-xs font-light flex items-center gap-1">
            <span>Type of Vet:</span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.vet_type}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Years of Operation: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.years_of_operation}
            </span>
          </div>
          <div className="text-[#A2A2A2] text-xs font-light flex items-center gap-1">
            <span>Joined: </span> {""}
            <span className="text-[#333333] font-normal text-xs">
              {item.date_joined}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetCard;
