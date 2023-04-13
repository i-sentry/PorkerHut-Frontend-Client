import { useState } from "react";

function ToggleSwitch() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="r">
      {/* Switch Container */}
      <div
        className={`md:w-20 md:h-8 w-20 h-8 flex items-center cursor-pointer ${
          toggle
            ? "border-4 border-red-500 rounded-md"
            : "border-[#22c55e] border-4 rounded-md"
        } `}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={`md:w-8 md:h-8 h-8 w-8 shadow-lg  duration-300 ease-in-out  relative ${
            toggle
              ? "transform translate-x-11 bg-red-500 rounded-md"
              : "bg-[#22C55E]"
          }`}
        >
          {/* Text */}
          <span
            className={`absolute inset-0 flex items-center justify-center text-xs text-white ${
              toggle ? "opacity-0 bg-[#22c55e]" : "opacity-100"
            }`}
          >
            ON
          </span>
          <span
            className={`absolute inset-0 text-xs flex items-center justify-center text-white ${
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