import React, { useEffect, useState } from "react";
import { TabSelector } from "../components/utility/TabSelector";
import InputComponent from "../components/admin-dashboard-components/InputComponent";
import AppLayout from "../components/utility/AppLayout";
import { json } from "react-router-dom";

const MyAccount = () => {
  const [disabled, setDisabled] = useState(true);
  const [disabledAddress, setDisabledAddress] = useState(true);
  const [disabledNumber, setDisabledNumber] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [temp, setTemp] = useState(false);

  console.log(user);

  const handleEditAddress = () => {
    setDisabledAddress(false);
  };

  const handleEditNumber = () => {
    setDisabledNumber(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDisabledAddress(true);
  };
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
            <h1 className="font-medium xxs:leading-[23px]  md:leading-[47px] xxs:text-[20px]  md:text-[40px]">
              Account Overview
            </h1>
          </div>
          <div className="flex items-center justify-center sm:mb-[3rem]">
            <div className=" block h-1.5 w-20 bg-[#197B30] mt-1"></div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] md:w-[600px] md:mx-auto md:py-4 xxs:py-4 xxs:mt-10 md:mt-0  md:px-10 xxs:px-4 xxs:mx-3  rounded">
          <div className=" xxs:hidden md:flex">
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
                    <p className=" text-[#333333] md:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] md:leading-[]">
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
                    <p className=" text-[#333333] md:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] md:leading-[]">
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
                    <p className=" text-[#333333] md:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] md:leading-[]">
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
                    <p className=" text-[#333333] md:text-[] xxs:leading-[16px] mb-1 xxs:text-[14px] md:leading-[]">
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
                  {/* <div className="flex md:justify-end xxs:justify-start xxs:gap-3 md:gap-0 py-5 mt-2">
                    <button className="mr-2 w-36 h-12 bg-[#fff] border border-[#197B30] text-[#197B30] rounded text-sm font-normal xxs:text-[14] xxs:leading-[16px] ">
                      Cancel
                    </button>
                    <button className="w-36 h-12 text-sm font-normal xxs:text-[14] xxs:leading-[16px] bg-[#197B30] text-white rounded">
                      Save
                    </button>
                  </div> */}

                  <div className="flex md:justify-end xxs:justify-start gap-3  py-5 mt-2">
                    <button className="flex-shrink-0  xxs:flex-grow md:flex-grow-0  w-36 h-12 bg-[#fff] border border-[#197B30] text-[#197B30] rounded text-sm font-normal xxs:text-[14] xxs:leading-[16px]">
                      Cancel
                    </button>
                    <button className=" xxs:flex-grow md:flex-grow-0 w-36 h-12 text-sm font-normal xxs:text-[14] xxs:leading-[16px] bg-[#197B30] text-white rounded">
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
