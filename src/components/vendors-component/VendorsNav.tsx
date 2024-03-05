import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineSearch } from "react-icons/hi";
import classNames from "classnames";
import PorkerLogo from "../../assets/images/porker.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineClose, MdOutlineViewHeadline } from "react-icons/md";
import { useSidebarState } from "../../store/overlay";
import { useSearchParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
// import { BsXLg } from "react-icons/bs";

const VendorsNav = () => {
  const [vendor, setVendor] = useState<any>({});
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    //@ts-ignore
    const storedVendor = JSON.parse(localStorage.getItem("vendor"));

    if (storedVendor !== null) {
      setVendor(storedVendor);
    }
  }, []);

  console.log(vendor);
  const accountOwnersName =
    vendor?.vendor?.sellerAccountInformation?.accountOwnersName;
  const storeStatus = vendor?.vendor?.storeStatus;

  const handleClick = (tabName: string) => {
    setSearchParams({ tab: tabName });
  };

  const handleLogout = () => {
    window.localStorage.clear();

    navigate("/sign-in?q=vendor");
  };

  return (
    <div className="z-[999] flex w-full items-center justify-between border-b border-[#D9D9D9] bg-[#fff] py-2.5 px-4 shadow">
      <div className="flex items-center justify-center xxs:gap-3 md:gap-2">
        <div className="block md:block lg:hidden">
          {showSideBar ? (
            <div
              onClick={() => toggleSidebar(false)}
              className=" cursor-pointer text-[#323232] "
            >
              <MdOutlineClose size={34} />
            </div>
          ) : (
            <div
              onClick={() => toggleSidebar(true)}
              className=" cursor-pointer text-[#323232] "
            >
              <MdOutlineViewHeadline size={34} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <img
            src={PorkerLogo}
            alt="logo"
            className="xxs:h-9 md:cursor-pointer"
          />
          <h1 className="porker select-none  font-Roboto-slab  leading-[53px] text-[#197B30]  xxs:text-lg md:text-[24px]">
            Porker Hut
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-end gap-5 lg:gap-20">
        <div className="hidden lg:relative lg:flex lg:items-center lg:justify-center">
          <div className="absolute top-1/2 left-[352px] flex h-9 w-10 -translate-y-1/2 items-center justify-center rounded-r-lg bg-[#F4F4F4] text-[#1F1F1F]">
            <HiOutlineSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="h-9 w-[350px] rounded-l-lg border-none bg-[#F4F4F4] pl-4 text-sm focus:border focus:border-green-500 focus:outline-none focus:ring-green-500"
          />
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setActiveSearch((act) => !act)}
        >
          <HiOutlineSearch size={24} />
        </div>

        {/* SEARCH MODAL */}
        <div
          onClick={() => setActiveSearch(false)}
          className={`fixed top-[56px] left-0 z-40 flex h-full w-full justify-center bg-black bg-opacity-80 p-8 duration-300 ${activeSearch ? "visible" : "pointer-events-none invisible"} lg:hidden`}
        >
          <label
            htmlFor="search"
            aria-label="search"
            className="mt-5 block w-[300px]"
          >
            <input
              type="search"
              name="search"
              id="search"
              autoFocus
              placeholder="Search here..."
              className="form-input w-full rounded-lg border-none bg-[#F4F4F4] px-4 py-3 text-sm focus:border focus:border-green-500 focus:outline-none focus:ring-green-500"
              onClick={(e) => e.stopPropagation()}
            />
          </label>
          {/* <span
            onClick={() => setActiveSearch(false)}
            className="absolute top-2 right-3 cursor-pointer text-white"
          >
            <BsXLg size={24} />
          </span> */}
        </div>

        <div className="md:pr-4">
          <div className="flex items-center justify-center gap-4">
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="  flex   justify-between gap-1 md:gap-2">
                  <div className="flex items-center gap-1">
                    <span className="inline-block">
                      <FaUserCircle size={32} className="text-neutral-300" />
                    </span>
                    <div className="hidden items-center md:hidden lg:flex lg:flex-col lg:gap-1">
                      <span className="text-base font-bold leading-4">
                        {accountOwnersName}
                      </span>
                      <div className="flex gap-1 text-center">
                        <span className="ml-2 text-xs font-light">Seller</span>
                        <span
                          className={`h-[8px] w-[8px] ${
                            storeStatus === "pending"
                              ? "bg-red-600"
                              : "bg-green-600"
                          } animate-pulse rounded-full`}
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => handleClick("notification")}
                        className={classNames(
                          active && "bg-gray-100",
                          "cursor-pointer rounded-sm px-4 py-2 text-gray-700 focus:bg-gray-200 active:bg-gray-200",
                        )}
                      >
                        <h1 className="text-sm">Notification Preferences</h1>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => handleClick("change-password")}
                        className={classNames(
                          active && "bg-gray-100",
                          "cursor-pointer rounded-sm px-4 py-2 text-gray-700 focus:bg-gray-200 active:bg-gray-200",
                        )}
                      >
                        <h1 className="text-sm">Change Password</h1>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={handleLogout}
                        className={classNames(
                          active && "bg-gray-100",
                          "cursor-pointer rounded-sm px-4 py-2 text-gray-700 focus:bg-gray-200 active:bg-gray-200",
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

export default VendorsNav;
