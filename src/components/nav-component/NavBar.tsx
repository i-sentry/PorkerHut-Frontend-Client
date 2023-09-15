import { Fragment, useContext } from "react";
import classNames from "classnames";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import SearchLogo from "../../assets/images/SearchLogo.svg";
import CartLogo from "../../assets/images/CartLogo.svg";
import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineUp,
} from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon } from "../../assets/icons";
import {
  IoIosHelpCircleOutline,
  IoMdClose,
  IoMdHeartEmpty,
  IoMdHelpCircleOutline,
  IoMdMenu,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import NavButton from "./NavButton";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Menu, Transition } from "@headlessui/react";
import { ImDownload } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import {
  MdCancelScheduleSend,
  MdOutlinePerson,
  MdOutlineShoppingCart,
  MdSendAndArchive,
} from "react-icons/md";
import AuthContext from "../../context/AuthProvider";
import { ISearch, useSearchStore } from "../../store/showSearch";
import { useSidebarState } from "../../store/overlay";
import MainSideNav from "./MainSideNav";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [toggle, setToggle] = useState(false);
  const [temp, setTemp] = useState(false);
  //@ts-ignore
  const { auth, isLogin } = useContext(AuthContext);
  // const user = useAppSelector(selectUser);
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const cart = useSelector((state: RootState) => state.product.cart);
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const navigate = useNavigate();

  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);
  const handleClickOutsideDropdown = (e: any) => {
    if (open && dropdownRef.current?.contains(e.target as Node)) {
      setOpen(true);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  useEffect(() => {
    setTemp(false);
    window.addEventListener("click", (e) => {
      if (e.target !== dropdownRef.current) {
        setOpen(false);
      }
    });
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, [temp]);

  const handleLogout = () => {
    setTemp(true);
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("user");
  };

  // useEffect(() => {
  //   setUser(user);
  // }, [user]);
  //@ts-ignore
  console.log(user?.firstName, "isLogin");
  return (
    <div className="bg-white fixed xxs:h-20 top-0 w-full z-50 shadow-md lg:py-0 px-[4%]">
      <nav className="lg:flex h-full w-full  items-center font-medium justify-between">
        {/* Menu Btn */}

        <div className="z-50 h-full  lg:w-auto w-full flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => toggleSidebar(!showSideBar)}
              className="text-3xl lg:hidden flex"
            >
              {showSideBar ? <IoMdClose size={38} /> : <IoMdMenu size={38} />}
            </button>
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img src={PorkerLogo} alt="" className="lg:cursor-pointer h-9" />
              <h1 className="porker sm:text-xl font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
                Porker Hut
              </h1>
            </div>
          </div>

          <div className="action-btns flex items-center  ml-auto  lg:hidden">
            <div
              onClick={() => setShowSearch((prev: any) => !prev)}
              className=" py-[6px] rounded w-10 flex items-end justify-end text-slate-800"
            >
              <AiOutlineSearch size={28} />
            </div>
            <div
              className="  py-[6px] rounded w-10 flex items-end justify-end text-slate-800"
              onClick={() => navigate("/my-cart")}
            >
              <MdOutlineShoppingCart size={28} />
              {Object.values(cart).length >= 1 && (
                <span className="flex justify-center items-center xxs:w-[18px] xxs:h-[18px] md:w-[20px] md:h-[20px] bg-emerald-500 text-white absolute top-5 xxs:right-2 md:right-6 rounded-full text-xs">
                  {Object.values(cart).length}
                </span>
              )}
            </div>
          </div>
          <ul className="lg:flex font-normal hidden items-center text-sm  ">
            <NavLink setToggle={setToggle} />
          </ul>
        </div>

        <div>
          {" "}
          <div className="lg:flex  hidden gap-2 ">
            <div className="action-btns flex gap-3  mr-4 ">
              <div>
                {showSearch ? (
                  <div
                    className={`duration-500 ease-in-out  ${
                      showSearch ? "right-0" : "right-[-100%]"
                    }`}
                  >
                    <SearchBar setShowSearch={setShowSearch} />
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className=" p-[6px] rounded w-8"
                  >
                    <AiOutlineSearch size={22} />
                  </button>
                )}
              </div>

              <button
                className=" p-[6px] rounded w-8 relative"
                onClick={() => navigate("/my-cart")}
              >
                <img className="w-6" src={CartLogo} alt="" />
                {Object.values(cart).length >= 1 && (
                  <span className="flex justify-center items-center w-[15px] h-[15px] bg-emerald-500 text-white absolute top-0 right-0 rounded-full text-xs">
                    {Object.values(cart).length}
                  </span>
                )}
              </button>
            </div>
            <>
              {user === null ? (
                <>
                  <NavButton
                    className={loginBtn}
                    text="Login"
                    path="/login?q=customer"
                  />
                  <NavButton
                    className={signUpBtn}
                    text="Sign Up"
                    path="/sign-up"
                  />
                </> 
              ) : (
                <>
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center mt-2">
                      <HiOutlineUserCircle size={22} />
                      <p className="pl-1 text-[#333333] text-[14px] leading-[16px] font-medium whitespace-nowrap">
                        {/* @ts-ignore */}
                        Hi, {user?.firstName ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1) : ''}
                      </p>
                      <span className="rotate-180">
                        <RxCaretDown />
                      </span>
                      {/* <RxCaretUp /> */}
                    </Menu.Button>
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
                                "active:bg-gray-200 rounded-sm px-4 py-2  cursor-pointer focus:bg-gray-200"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] font-normal  text-[#333333] flex items-center gap-3">
                                <HiOutlineUserCircle size={24} />
                                My Account
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => navigate("/my__orders")}
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] font-normal text-[#333333]  flex items-center gap-3">
                                <ImDownload size={24} />
                                My Order
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => navigate("/favorite+products")}
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] font-normal text-[#333333]  flex items-center gap-3">
                                <IoMdHeartEmpty size={24} />
                                My Favorites
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-[#197B30] focus:text-[#fff] border-[#197B30] border-t flex w-full"
                              )}
                            >
                              <h1
                                onClick={handleLogout}
                                className="text-[14px] leading-[16px] font-normal text-[#197B30] flex justify-center w-full"
                              >
                                Logout
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center mt-2">
                      <IoMdHelpCircleOutline size={22} />
                      <p className="pl-1 text-[#333333] text-[14px] leading-[16px] font-semibold">
                        {" "}
                        Help
                      </p>
                      <span className="rotate-180">
                        <RxCaretDown />
                      </span>
                    </Menu.Button>
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
                              onClick={() => navigate("/contact-us")}
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2  cursor-pointer focus:bg-gray-200"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] text-[#333333] font-normal flex items-center gap-3">
                                <FaHandsHelping size={23} />
                                Help Center
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => navigate("/tracking+order")}
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] font-normal text-[#333333]  flex items-center gap-3">
                                <MdSendAndArchive size={23} />
                                Tracking Orders
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => navigate("/return+order")}
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] font-normal text-[#333333]  flex items-center gap-3">
                                <TbTruckReturn size={23} />
                                Return Order
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => navigate("/order+cancel")}
                              className={classNames(
                                active && "bg-gray-100",
                                "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200  flex w-full"
                              )}
                            >
                              <h1 className="text-[14px] leading-[16px] font-normal text-[#197B30]  text-center flex gap-3">
                                <MdCancelScheduleSend size={23} />
                                <span className="m-auto">
                                  Order Cancellation
                                </span>
                              </h1>
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              )}
            </>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative">
          <MainSideNav/>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;

const signUpBtn =
  "border border-[#479559] text-sm lg:py-2 xxs:py-3 px-[30px] rounded-md text-[#fff] bg-[#479559] hover:bg-white hover:text-[#479559] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#479559] text-sm lg:py-2 xxs:py-3 px-[35px] rounded-md text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";

const SearchBar = ({
  setShowSearch,
}: {
  setShowSearch: (shouldShowSearch: any) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      const value = searchValue.replaceAll(" ", "+");
      navigate(`/search?q=${value.toLocaleLowerCase()}`);
    }
  };

  return (
    <div className="h-8 flex justify-between items-center px-3">
      <form className="min-w-full" onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center min-w-full">
          <label className="relative block my-8 w-[100%] lg:mx-1 ">
            <input
              autoFocus
              className={`placeholder:text-slate-400 block bg-[#F4F4F4] w-72 border-0  py-2  pl-2 shadow-sm  sm:text-sm disabled:opacity-10 h-full placeholder:text-xs placeholder:font-light rounded-tl outline-none rounded-bl`}
              placeholder="search here"
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </label>
          <div className="flex h-8 rounded-r items-center  bg-[#F4F4F4] py-3 px-2">
            <button>
              <AiOutlineClose
                onClick={() => setShowSearch(false)}
                size="19px"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
