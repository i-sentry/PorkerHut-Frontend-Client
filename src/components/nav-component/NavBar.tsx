import { Fragment } from "react";
import classNames from "classnames";
import PorkerLogo from "../../assets/images/porker.png";
import CartLogo from "../../assets/images/CartLogo.svg";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

import {
  IoMdClose,
  IoMdHeartEmpty,
  IoMdHelpCircleOutline,
  IoMdMenu,
} from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import NavButton from "./NavButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RxCaretDown } from "react-icons/rx";
import { Menu, Transition } from "@headlessui/react";
import { ImDownload } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import {
  MdCancelScheduleSend,
  MdOutlineShoppingCart,
  MdSendAndArchive,
} from "react-icons/md";
// import AuthContext from "../../context/AuthProvider";
import { useSearchStore } from "../../store/showSearch";
import { useSidebarState } from "../../store/overlay";
import MainSideNav from "./MainSideNav";
import { jwtDecode } from "jwt-decode";

const NavBar = ({ border }: { border?: any }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [toggle, setToggle] = useState(false);
  const [temp, setTemp] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  //@ts-ignore
  // const { auth, isLogin } = useContext(AuthContext);
  // const user = useAppSelector(selectUser);
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState<{ firstName?: string } | null>(null);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const cart = useSelector((state: RootState) => state.product.cart);
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const navigate = useNavigate();

  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);

  const SESSION_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, [temp]);

  console.log(pathname);

  const handleLogout = () => {
    setTemp(true);
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("user");

    if (pathname.includes("/my__orders")) {
      setTemp(true);
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("user");
      navigate("/");
    }
  };

  useEffect(() => {
    const checkSession = () => {
      const storedSession = JSON.parse(localStorage.getItem("user") as string);
      try {
        const decodedToken: { iat: number; exp: number } = jwtDecode(
          storedSession?.accessToken,
        );

        const storedTimestamp = decodedToken?.exp * 1000;
        const currentTime = new Date().getTime();
        const sessionExpired =
          currentTime - storedTimestamp >= SESSION_DURATION;

        if (!sessionExpired) {
          setIsLoggedIn(true);
        } else {
          // Session has expired, logout the user
          handleLogout();
          // Optionally, inform the user about the session expiry
          alert("Your session has expired. Please log in again.");
          navigate("/login?q=customer");
        }
      } catch (error) {
        if (storedSession?.accessToken) {
          console.error("Error checking session:", error);
        }
        // Handle the error (e.g., log it, show a user-friendly message)
      }
    };

    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SESSION_DURATION, navigate]);

  // useEffect(() => {
  //   setUser(user);
  // }, [user]);
  //@ts-ignore
  return (
    <>
      <header
        className={`fixed top-0 z-[999] w-full bg-white py-2 ${border || ""}`}
      >
        <nav className="h-full w-full items-center justify-between bg-white px-4 lg:flex">
          {/* Menu Btn */}

          <div className="z-50 flex  h-full w-full items-center gap-7 lg:w-auto xl:gap-12">
            <div className="flex items-center justify-start gap-5">
              <div className="flex gap-2">
                <button
                  onClick={() => toggleSidebar(!showSideBar)}
                  className="flex items-center justify-center text-3xl lg:hidden"
                >
                  {showSideBar ? (
                    <IoMdClose size={24} />
                  ) : (
                    <IoMdMenu size={24} />
                  )}
                </button>
                <div
                  onClick={() => navigate("/")}
                  className="flex cursor-pointer select-none items-center gap-2"
                >
                  <img
                    src={PorkerLogo}
                    alt=""
                    className="h-9 lg:cursor-pointer"
                  />
                  <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-xl">
                    Porker Hut
                  </h1>
                </div>
              </div>
              <ul className="hidden items-center text-sm font-normal lg:flex  ">
                <NavLink setToggle={setToggle} toggle={toggle} />
              </ul>
            </div>

            <div className="action-btns ml-auto flex  items-center  lg:hidden">
              <div
                onClick={() => setShowSearch((prev: any) => !prev)}
                className=" flex w-10 cursor-pointer items-end justify-end rounded py-[6px] text-slate-800"
              >
                <AiOutlineSearch size={28} />
              </div>
              <div
                className="  flex w-10 cursor-pointer items-end justify-end rounded py-[6px] text-slate-800 lg:hidden"
                onClick={() => navigate("/my-cart")}
              >
                <MdOutlineShoppingCart size={28} />
                {Object.values(cart).length >= 1 && (
                  <span className="absolute top-5 flex items-center justify-center rounded-full bg-emerald-500 text-xs text-white xxs:right-2 xxs:h-[18px] xxs:w-[18px] md:right-6 md:h-[20px] md:w-[20px]">
                    {Object.values(cart).length}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="relative z-[2]  hidden gap-2 bg-white lg:flex lg:items-center">
              {/* <div className="
              -btns bg-white flex gap-3  mr-4 relative">
                <div
                  className={`duration-500 delay-500 ease-in-out right-0 absolute ${
                    showSearch ? "w-[300px]" : "w-0"
                  }`}
                >
                  <SearchBar setShowSearch={setShowSearch} />
                </div>

                <button
                  onClick={() => setShowSearch(true)}
                  className=" p-[6px] rounded w-8"
                >
                  <AiOutlineSearch size={22} />
                </button>

                <div className="w-[35px] h-[35px] relative flex items-center bg-white">
                  <button
                    className={`duration-300 rounded-r flex items-center absolute right-0 h-8 bg-[#F4F4F4] py-3 px-2 ${
                      showSearch ? "opacity-100 z-20" : "opacity-0"
                    }`}
                  >
                    <AiOutlineClose
                      onClick={() => setShowSearch(false)}
                      size="19px"
                    />
                  </button>
                  <button
                    onClick={() => setShowSearch(true)}
                    className={`absolute right-0 duration-300 p-[6px] rounded w-8 ${
                      showSearch ? "opacity-0" : "opacity-100 z-20"
                    }`}
                  >
                    <AiOutlineSearch size={22} />
                  </button>
                </div>

                <button
                  className={`p-[6px] rounded w-8 relative bg-white`}
                  onClick={() => navigate("/my-cart")}
                >
                  <img className="w-6" src={CartLogo} alt="" />
                  {Object.values(cart).length >= 1 && (
                    <span className="flex justify-center items-center w-[15px] h-[15px] bg-emerald-500 text-white absolute top-0 right-0 rounded-full text-xs">
                      {Object.values(cart).length}
                    </span>
                  )}
                </button>
              </div> */}
              <div
                onClick={() => setShowSearch((prev: any) => !prev)}
                className=" hidden w-10 cursor-pointer items-end justify-end rounded py-[6px] text-slate-800 lg:flex xl:hidden"
              >
                <AiOutlineSearch size={28} />
              </div>

              <div className="relative hidden h-fit w-fit overflow-hidden xl:inline-block">
                <button
                  className={`absolute right-0 z-[1] box-border flex h-[35px] w-[35px] cursor-pointer items-center justify-center border-l-2 border-white ${
                    showSearch
                      ? "rounded-tr-lg rounded-br-lg bg-[#e8e8e8]"
                      : "bg-white"
                  }`}
                >
                  <AiOutlineSearch
                    onClick={() => setShowSearch(true)}
                    className={`absolute left-1/2 -translate-x-1/2 duration-300 ${
                      showSearch ? "opacity-0" : "z-[1] opacity-100"
                    }`}
                    size={22}
                  />
                  <AiOutlineClose
                    onClick={() => setShowSearch(false)}
                    className={`absolute left-1/2 -translate-x-1/2 duration-300 ${
                      showSearch ? "z-[1] opacity-100" : "opacity-0"
                    }`}
                    size={22}
                  />
                </button>
                <SearchBar
                  setShowSearch={setShowSearch}
                  showSearch={showSearch}
                />
              </div>
              <button
                className={`relative w-8 cursor-pointer rounded bg-white p-[6px]`}
                onClick={() => navigate("/my-cart")}
              >
                <img className="w-6" src={CartLogo} alt="" />
                {Object.values(cart).length >= 0 && (
                  <span className="absolute top-0 right-0 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                    {Object.values(cart).length}
                  </span>
                )}
              </button>
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
                      <Menu.Button className="flex items-center">
                        <HiOutlineUserCircle size={22} />
                        <p className="whitespace-nowrap pl-1 text-[14px] font-medium leading-[16px] text-[#333333]">
                          {/* @ts-ignore */}
                          Hi,{" "}
                          {user?.firstName
                            ? user.firstName.charAt(0).toUpperCase() +
                              user.firstName.slice(1)
                            : ""}
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                onClick={() => navigate("/profile")}
                                className={classNames(
                                  active && "bg-gray-100",
                                  "cursor-pointer rounded-sm px-4 py-2  focus:bg-gray-200 active:bg-gray-200",
                                )}
                              >
                                <h1 className="flex items-center gap-3  text-[14px] font-normal leading-[16px] text-[#333333]">
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
                                  "cursor-pointer rounded-sm px-4 py-2 focus:bg-gray-200 active:bg-gray-200",
                                )}
                              >
                                <h1 className="flex items-center gap-3 text-[14px]  font-normal leading-[16px] text-[#333333]">
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
                                  "cursor-pointer rounded-sm px-4 py-2 focus:bg-gray-200 active:bg-gray-200",
                                )}
                              >
                                <h1 className="flex items-center gap-3 text-[14px]  font-normal leading-[16px] text-[#333333]">
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
                                  "flex w-full cursor-pointer rounded-sm border-t border-[#197B30] px-4 py-2 focus:bg-[#197B30] focus:text-[#fff] active:bg-gray-200",
                                )}
                              >
                                <h1
                                  onClick={handleLogout}
                                  className="flex w-full justify-center text-[14px] font-normal leading-[16px] text-[#197B30]"
                                >
                                  Logout
                                </h1>
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    {true && (
                      <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center">
                          <IoMdHelpCircleOutline size={22} />
                          <p className="pl-1 text-[14px] font-semibold leading-[16px] text-[#333333]">
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => navigate("/contact-us")}
                                  className={classNames(
                                    active && "bg-gray-100",
                                    "cursor-pointer rounded-sm px-4 py-2  focus:bg-gray-200 active:bg-gray-200",
                                  )}
                                >
                                  <h1 className="flex items-center gap-3 text-[14px] font-normal leading-[16px] text-[#333333]">
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
                                    "cursor-pointer rounded-sm px-4 py-2 focus:bg-gray-200 active:bg-gray-200",
                                  )}
                                >
                                  <h1 className="flex items-center gap-3 text-[14px]  font-normal leading-[16px] text-[#333333]">
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
                                    "cursor-pointer rounded-sm px-4 py-2 focus:bg-gray-200 active:bg-gray-200",
                                  )}
                                >
                                  <h1 className="flex items-center gap-3 text-[14px]  font-normal leading-[16px] text-[#333333]">
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
                                    "flex w-full cursor-pointer rounded-sm px-4 py-2  focus:bg-gray-200 active:bg-gray-200",
                                  )}
                                >
                                  <h1 className="flex gap-3 text-center text-[14px]  font-normal leading-[16px] text-[#197B30]">
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
                    )}
                  </>
                )}
              </>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile */}
      <div className="relative lg:hidden">
        <MainSideNav />
      </div>
    </>
  );
};

export default NavBar;

const signUpBtn =
  "border border-[#479559] text-sm lg:py-2 xxs:py-3 px-[30px] rounded-md text-[#fff] bg-[#479559] hover:bg-white hover:text-[#479559] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#479559] text-sm lg:py-2 xxs:py-3 px-[35px] rounded-md text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";

const SearchBar = ({
  setShowSearch,
  showSearch,
}: {
  setShowSearch: (shouldShowSearch: any) => void;
  showSearch: boolean;
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
    <div
      className={`flex h-8 items-center justify-between overflow-hidden pl-3 duration-500 ${
        showSearch ? "w-[320px]" : "w-[35px]"
      }`}
    >
      <form className="min-w-full" onSubmit={(e) => onSubmit(e)}>
        <div className="flex min-w-full items-center">
          <label className="relative my-8 block w-[100%] lg:mx-1 ">
            <input
              autoFocus
              autoComplete="off"
              className={`block h-full w-72 rounded-tl-lg rounded-bl-lg  border-0  bg-[#F4F4F4] py-2  pl-5 shadow-sm outline-none placeholder:text-xs placeholder:font-light placeholder:text-slate-400 focus:ring-0 disabled:opacity-10 sm:text-sm`}
              placeholder="Search here"
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </label>
          {/* <div className="flex h-8 rounded-r items-center  bg-[#F4F4F4] py-3 px-2">
            <button>
              <AiOutlineClose
                onClick={() => setShowSearch(false)}
                size="19px"
              />
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
};
