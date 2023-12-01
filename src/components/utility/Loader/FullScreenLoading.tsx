import React, { useEffect, useState } from "react";
import "./FullScreenLoading.css";

const FullScreenLoading = (msg?: string) => {
  return (
    <div className="full-screen-loading">
      <div className="loader">
        {/* <div className="spinner"></div> */}
        <div className="rotating-image"></div>
        <TypingDots msg={msg} />
      </div>
    </div>
  );
};

export default FullScreenLoading;

export const TypingDots = ({ msg }: { msg?: string }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === "...." ? "" : prevDots + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-md font-bold text-[#fff]">
      {`${msg ?? "Loading"}${dots}`}
    </p>
  );
};
