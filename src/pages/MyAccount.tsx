import React, { useEffect, useState } from "react";

import InputComponent from "../components/admin-dashboard-components/InputComponent";
import AppLayout from "../components/utility/AppLayout";

const MyAccount = () => {
  const [disabled] = useState(true);
  const [disabledAddress, setDisabledAddress] = useState(true);
  const [disabledNumber, setDisabledNumber] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [temp, setTemp] = useState(false);
  const [editStatus, setEditStatus] = useState(false);


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
          <div className="flex items-center justify-center ">
            <h1 className="font-medium xxs:text-[20px]  xxs:leading-[23px] lg:text-[40px]  lg:leading-[47px]">
              Account Overview
            </h1>
          </div>
          <div className="flex items-center justify-center sm:mb-[3rem]">
            <div className=" mt-1 block h-1.5 w-20 bg-[#197B30]"></div>
          </div>
        </div>
        <div className="rounded bg-[#F4F4F4] xxs:mx-3 xxs:mt-10 xxs:py-4 xxs:px-4 lg:mx-auto  lg:mt-0 lg:w-[600px] lg:py-4  lg:px-10">
          <div className=" xxs:hidden lg:flex">
            <div className="">
              <h1 className="text-[24px] font-medium leading-[28px] ">
                Default Information
              </h1>
              <span className="text-[14px] font-normal leading-[24px] text-[#A2A2A2]">
                This contain the information that was filled by you.
              </span>
            </div>
          </div>
          <div className="">
            <div className="">
              {user && (
                <form className="flex-1">
                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" mb-1 text-[#333333] xxs:text-[14px] xxs:leading-[16px] lg:leading-[] lg:text-[]">
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
                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" mb-1 text-[#333333] xxs:text-[14px] xxs:leading-[16px] lg:leading-[] lg:text-[]">
                      Email Address
                    </p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Your email"
                        type="email"
                        isDisabled={disabled}
                        defaultValue={user?.email}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" mb-1 text-[#333333] xxs:text-[14px] xxs:leading-[16px] lg:leading-[] lg:text-[]">
                      Phone Number
                    </p>
                    <div className="relative flex-[2]">
                      <InputComponent
                        placeholder="Your phone number"
                        type="tel"
                        isDisabled={disabledNumber}
                        defaultValue={user?.phoneNumber}
                      />
                      {disabledNumber && (
                        <button
                          className="absolute top-1/2 right-2 -translate-y-1/2 transform font-medium underline"
                          onClick={handleEditNumber}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" mb-1 text-[#333333] xxs:text-[14px] xxs:leading-[16px] lg:leading-[] lg:text-[]">
                      Shipping Address
                    </p>
                    <div className="relative flex-[2]">
                      <InputComponent
                        placeholder="Your shipping address "
                        type="text"
                        isDisabled={disabledAddress}
                        defaultValue={user?.address}
                      />

                      {disabledAddress && (
                        <button
                          className="absolute top-1/2 right-2 -translate-y-1/2 transform font-medium underline"
                          onClick={handleEditAddress}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 flex gap-3 py-5  xxs:justify-start lg:justify-end">
                    <button className="h-12  w-36 flex-shrink-0  rounded border border-[#197B30] bg-[#fff] text-sm font-normal text-[#197B30] xxs:flex-grow xxs:leading-[16px] xxs:text-[14] lg:flex-grow-0">
                      Cancel
                    </button>
                    <button
                      disabled={!editStatus}
                      className={`h-12 w-36 rounded bg-[#197B30] text-sm font-normal text-white xxs:flex-grow xxs:leading-[16px] xxs:text-[14] lg:flex-grow-0 ${!editStatus && "cursor-not-allowed opacity-50"}`}
                    >
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
