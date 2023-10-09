import React from "react";
import { IoMdClose } from "react-icons/io";
import vetVerify from "../../assets/images/vetVerify.png";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import { Link } from "react-router-dom";


interface ISuccess{
  title: string;
  msg: string;
  url:string
}
const SuccessScreen:React.FC<ISuccess> = ({msg, title, url}) => {
  return (
    <div className="flex items-center lg:mx-auto lg:max-w-[83%] max-w-full justify-center h-screen">
      <div className="bg-white  rounded-lg">
        <div className=" flex flex-col items-center justify-center text-center h-full">
          <div className="">
            <div className="flex mb-2 items-center justify-center">
              <img src={vetVerify} alt="" className="w-24 h-24 animate-pulse" />
            </div>
            <h1 className=" text-[24px] leading-normal text-[#333333] font-medium mb-2">
              {/* {} */}
              {title}
            </h1>
            <p className="lg:text-[16px] lg:leading-normal md:text-sm text-[#333333] mb-4">
            {msg}
              {/* We’re on it! Please be patient for Poker Hut Approval. */}
            </p>
            <Link
              // to="/vendor/create"
              to={url}
              className="lg:text-[16px] lg:leading-normal md:text-sm   bg-[#197B30] py-3 px-10 rounded-md text-[#fff]"
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
