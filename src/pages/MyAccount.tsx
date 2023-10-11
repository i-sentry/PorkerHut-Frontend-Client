import React, { useEffect, useState } from "react";

import InputComponent from "../components/admin-dashboard-components/InputComponent";
import AppLayout from "../components/utility/AppLayout";

const MyAccount = () => {
  const [disabled, ] = useState(true);
  const [disabledAddress, setDisabledAddress] = useState(true);
  const [disabledNumber, setDisabledNumber] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [temp, setTemp] = useState(false);
  const [editStatus, setEditStatus] = useState(false);


  console.log(user);

  const handleEditAddress = () => {
    setDisabledAddress(false);
    setEditStatus(true);
  };

  const handleEditNumber = () => {
    setDisabledNumber(false);
    setEditStatus(true);
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setDisabledAddress(true);
  // };
  const getUser = () => {
    //@ts-ignore
    const storeData = JSON.parse(localStorage.getItem("user"));
    if (storeData !== null) {
      setUser(storeData);
    }
  };

  useEffect(() => {
    getUser();
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [temp]);

  useEffect(() => {
    setTemp(true);
  }, []);

  return (
    <AppLayout>
      <div className="mb-16 mt-32">
        <div className="">
          <div className="flex justify-center items-center ">
            <h1 className="font-medium xxs:leading-[23px]  lg:leading-[47px] xxs:text-[20px]  lg:text-[40px]">
              Account Overview
            </h1>
          </div>
          <div className="flex items-center justify-center sm:mb-[3rem]">
            <div className=" block h-1.5 w-20 bg-[#197B30] mt-1"></div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] lg:w-[600px] lg:mx-auto lg:py-4 xxs:py-4 xxs:mt-10 lg:mt-0  lg:px-10 xxs:px-4 xxs:mx-3  rounded">
          <div className=" xxs:hidden lg:flex">
            <div className="">
              <h1 className="text-[24px] leading-[28px] font-medium ">
                Default Information
              </h1>
              <span className="text-[#A2A2A2] font-normal text-[14px] leading-[24px]">
                This contain the information that was filled by you.
              </span>
            </div>
          </div>
          <div className="">
            <div className="">
              {user && (
                <form className="flex-1">
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#333333] lg:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] lg:leading-[]">
                      Account Name*
                    </p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="John Doe"
                        type="text"
                        // onChange={(e) => setPhoneNumber(e.target.value)}
                        isDisabled={disabled}
                        defaultValue={`${user?.firstName} ${user?.lastName} `}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#333333] lg:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] lg:leading-[]">
                      Email Address
                    </p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="johndoe@hotmail.com"
                        type="text"
                        isDisabled={disabled}
                        defaultValue={user?.email}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#333333] lg:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] lg:leading-[]">
                      Phone Number
                    </p>
                    <div className="flex-[2] relative">
                      <InputComponent
                        placeholder="johndoe@hotmail.com"
                        type="tel"
                        isDisabled={disabledNumber}
                      />
                      {disabledNumber && (
                        <button
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 font-medium underline"
                          onClick={handleEditNumber}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#333333] lg:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] lg:leading-[]">
                      Shipping Address
                    </p>
                    <div className="flex-[2] relative">
                      <InputComponent
                        placeholder="Plot 145, Ikeja, Lagos Island, Lagos State"
                        type="tel"
                        isDisabled={disabledAddress}
                      />

                      {disabledAddress && (
                        <button
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 font-medium underline"
                          onClick={handleEditAddress}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                 

                  <div className="flex lg:justify-end xxs:justify-start gap-3  py-5 mt-2">
                    <button
                     
                      className="flex-shrink-0  xxs:flex-grow lg:flex-grow-0  w-36 h-12 bg-[#fff] border border-[#197B30] text-[#197B30] rounded text-sm font-normal xxs:text-[14] xxs:leading-[16px]"
                    >
                      Cancel
                    </button>
                    <button 
                     disabled={!editStatus}
                    className={`xxs:flex-grow lg:flex-grow-0 w-36 h-12 text-sm font-normal xxs:text-[14] xxs:leading-[16px] bg-[#197B30] text-white rounded ${!editStatus && 'opacity-50 cursor-not-allowed'}`}>
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyAccount;
