import React from "react";

const Spinner = () => {
  return (
    <div className="flex">
      <div className="relative">
        {/* Outer Ring */}
        <div
          className="w-4 h-4 rounded-full absolute
    border-2 border-solid border-gray-200"
        ></div>

        {/* Inner Ring  */}
        <div
          className="w-4 h-4 rounded-full animate-spin absolute
    border-2 border-solid border-purple-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
