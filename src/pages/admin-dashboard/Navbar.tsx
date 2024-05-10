import { Menu, Transition } from "@headlessui/react";
import { HiOutlineSearch } from "react-icons/hi";
import React, { Fragment } from "react";
import classNames from "classnames";
import avata from "../../assets/avata.png";
import PorkerLogo from "../../assets/images/porker.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { clientInitails } from "../../layout/SellerLayout";
// import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ setSidebar, sidebar }: any) => {
  const admin = JSON.parse(localStorage.getItem("admin") as string);
  const role = admin?.role === "superadmin" ? "Super Admin" : "Admin";
  const navigate = useNavigate();

  const logOut = () => {
    window.localStorage.clear();

    navigate("/admin-login");
  };
  return (
    <div className="fixed top-0 z-[90] flex  h-16 w-full items-center justify-between border border-[#D9D9D9]  bg-white px-4">
      <div className="absolute top-0 left-0 w-full">
        <ToastContainer />
      </div>{" "}
      <div className="flex items-center justify-center xxs:gap-3 md:gap-2 ">
        <FaBars
          size={30}
          onClick={() => setSidebar(!sidebar)}
          className="md:hidden"
        />
        <img src={PorkerLogo} alt="" className="h-9 md:cursor-pointer" />
        <h1 className="porker select-none font-Roboto-slab font-bold text-[#197B30]  xxs:text-lg md:text-xl">
          Porker Hut
        </h1>
      </div>
      <div className="flex items-center justify-between gap-20">
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
        {/* <div className="xxs:hidden md:relative md:flex md:items-center md:justify-center">
          <div className="absolute top-1/2 left-[352px] flex h-9 w-10 -translate-y-1/2 items-center justify-center rounded-r-lg bg-[#F4F4F4] text-[#1F1F1F]">
            <HiOutlineSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="h-9 w-[350px] rounded-l-lg bg-[#F4F4F4] pl-4 text-sm focus:outline-none active:outline-none"
          />
        </div> */}

        <div className="md:pr-4">
          <div className="flex items-center justify-center gap-4">
            <HiOutlineSearch size={20} className="md:hidden" />
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="  flex items-center justify-between md:gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-300 font-semibold tracking-wide text-neutral-500">
                    {clientInitails(`${admin?.firstName} ${admin?.lastName}`)}
                  </div>
                  <div className="xxs:hidden md:flex md:flex-col md:gap-1">
                    <span className="text-base font-semibold leading-4">
                      {admin?.firstName} {admin?.lastName}
                    </span>
                    <span className="text-xs font-light">{role}</span>
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
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
                        onClick={() => navigate("/admin/settings")}
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
                        onClick={logOut}
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

export default Navbar;
