import { useState } from "react";

function ToggleSwitch() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="r">
      {/* Switch Container */}
      <div
        className={`flex h-7 w-20 cursor-pointer items-center md:h-6 md:w-24 ${
          toggle
            ? "rounded-sm border-2 border-red-500"
            : "rounded-sm border-2 border-[#22c55e]"
        } `}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={`relative h-5 w-[34px] border-2 shadow-lg  duration-300  ease-in-out md:h-5  md:w-12 ${
            toggle
              ? "translate-x-11 transform border-red-500 bg-red-500 "
              : "border-[#22c55e] bg-[#22C55E]"
          }`}
        >
          {/* Text */}
          <span
            className={`absolute inset-0 flex items-center justify-center text-[16px] font-normal leading-[19px] text-white ${
              toggle ? "bg-[#22c55e] opacity-0" : "opacity-100"
            }`}
          >
            ON
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center text-[16px] font-normal leading-[19px] text-white ${
              toggle ? "opacity-100" : "opacity-0"
            }`}
          >
            OFF
          </span>
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
