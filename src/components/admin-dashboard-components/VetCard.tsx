import { TbDots } from "react-icons/tb";
import moment from "moment";
import Popover from "../utility/PopOver";
import { useState } from "react";
import VetProfileOverlay from "./VetProfileOverlay";

const VetCard = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    window.scroll(0, 0);
    setIsOpen(true);
  };

  return (
    <>
      <div className="rounded-lg border bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-2xl font-semibold capitalize text-[#333333]">
            {item?.accountName}
          </h3>

          <Popover
            buttonContent={<TbDots size={24} className="  cursor-pointer" />}
            placementOrder={"left"}
            closeOnClick={true}
          >
            <div className="w-[150px] py-2">
              <button
                className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                onClick={handleOpen}
              >
                Vet Information
              </button>
              <button className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]">
                Delete
              </button>
            </div>
          </Popover>
        </div>
        <ul className="space-y-2">
          <li>
            <span className="text-[#A2A2A2]">Business Name:</span>
            <span className="capitalize text-[#333333]">
              &nbsp;{item?.businessName}
            </span>
          </li>
          <li>
            <span className="text-[#A2A2A2]">Email:</span>
            <span className="text-[#333333]">&nbsp;{item?.email}</span>
          </li>
          <li>
            <span className="text-[#A2A2A2]">State of Operation:</span>
            <span className="capitalize text-[#333333]">
              &nbsp;{item?.state}
            </span>
          </li>
          <li>
            <span className="text-[#A2A2A2]">Phone Number:</span>
            <span className="text-[#333333]">&nbsp;{item?.phone}</span>
          </li>
          <li>
            <span className="text-[#A2A2A2]">Type of Vet:</span>
            <span className="capitalize text-[#333333]">
              &nbsp;{item?.vetType}
            </span>
          </li>
          <li>
            <span className="text-[#A2A2A2]">Years of Operation:</span>
            <span className="text-[#333333]">
              &nbsp;
              {item?.yearsOfOperation.length <= 3
                ? item?.yearsOfOperation
                : String(item?.yearsOfOperation).slice(0, 2)}{" "}
              years
            </span>
          </li>
          <li>
            <span className="text-[#A2A2A2]">Joined:</span>
            <span className="text-[#333333]">
              &nbsp;{moment(item?.createdAt).format("DD MMMM YYYY")}
            </span>
          </li>
        </ul>
      </div>
      <VetProfileOverlay isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
    </>
  );
};

export default VetCard;
