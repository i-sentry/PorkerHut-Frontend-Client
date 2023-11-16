import { useState } from "react";

function ToggleSwitch() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="r">
      {/* Switch Container */}
      <div
        className={`md:w-24 md:h-6 w-20 h-7 flex items-center cursor-pointer ${
          toggle
            ? "border-2 border-red-500 rounded-sm"
            : "border-[#22c55e] border-2 rounded-sm"
        } `}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={`md:w-12 md:h-5 h-5 w-[34px] border-2  shadow-lg  duration-300 ease-in-out  relative ${
            toggle
              ? "transform translate-x-11 bg-red-500 border-red-500 "
              : "bg-[#22C55E] border-[#22c55e]"
          }`}
        >
          {/* Text */}
          <span
            className={`absolute inset-0 flex items-center justify-center text-[16px] leading-[19px] font-normal text-white ${
              toggle ? "opacity-0 bg-[#22c55e]" : "opacity-100"
            }`}
          >
            ON
          </span>
          <span
            className={`absolute inset-0 text-[16px] leading-[19px] font-normal flex items-center justify-center text-white ${
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
