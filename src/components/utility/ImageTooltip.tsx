import React, { useState } from "react";
//@ts-ignore
const ImageTooltip = ({ text, imageUrl, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className=" ">
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </span>
      {isHovered && (
        <div className="">
          <div className="flex items-center">
            <div className="bg-white p-2 shadow-md rounded-md">
              <img src={imageUrl} alt={text} className="w-full h-full" />
            </div>
            <div className="w-4 h-4 bg-white border-t border-r transform rotate-45 -ml-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageTooltip;
