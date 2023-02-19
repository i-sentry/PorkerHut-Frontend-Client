import { Menu, Popover, Transition } from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
} from "react-icons/hi";
import React, { Fragment } from "react";
import classNames from "classnames";

import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const OrderNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#D9D9D9] h-20 w-full px-4 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src={PorkerLogo} alt="" className="md:cursor-pointer h-9" />
        <h1 className="porker text-xl font-bold text-[#197B30]  font-Roboto-slab select-none">
          Porker Hut
        </h1>
      </div>
      <div className="flex items-center justify-between gap-20">
        <div className="relative flex items-center justify-center">
          <div className="text-[#1F1F1F] absolute top-1/2 -translate-y-1/2 left-[352px] h-9 bg-[#F4F4F4] w-10 flex items-center justify-center rounded-r-lg">
            <HiOutlineSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="text-sm focus:outline-none active:outline-none h-9 w-[350px] bg-[#F4F4F4] rounded-l-lg pl-4"
          />
        </div>

        <div>
          <div>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="  flex items-center justify-between gap-2">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-no-repeat bg-center flex"
                    style={{
                      backgroundImage:
                        'url("https://source.unsplash.com/80x80?face")',
                    }}
                  ></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold leading-4">
                      John Doe
                    </span>
                    <span className="text-xs font-light">Administrator</span>
                  </div>

                  <div>
                    <IoIosArrowDown />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/profile")}
                        className={classNames(
                          active && "bg-gray-100",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <h1 className="text-sm">Notification Preferences</h1>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/settings")}
                        className={classNames(
                          active && "bg-gray-100",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <h1 className="text-sm">Change Password</h1>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active && "bg-gray-100",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <h1 className="text-sm">Logout</h1>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNavbar;
