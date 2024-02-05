import React, { useRef, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { MdGroups, MdPersonOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLockPasswordLine, RiSecurePaymentFill } from "react-icons/ri";
import { BsCamera } from "react-icons/bs";
import avatar from "../../assets/account.png";
import InputComponent from "../../components/admin-dashboard-components/InputComponent";
import { RxCaretDown } from "react-icons/rx";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import { FiEye, FiEyeOff } from "react-icons/fi";
import CreateAdminAcct from "../../components/admin-dashboard-components/CreateAdminAcct";
import Popover from "../../components/utility/PopOver";
import { BiCaretDown } from "react-icons/bi";

const Settings = () => {
  const [, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [eyeState3] = useState(false);
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useTabs([
    "Information",
    "Members",
    "Notification",
    "Commissions",
    "Password",
  ]);
  const inputRef = useRef(null);
  const [action, setAction] = useState("Grant Access");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [items, setItems] = useState([
    {
      name: "Commission Rate",
      description: "Percentage value for charging commission on sale items",
      value: 10,
      action: "Apply",
    },
    {
      name: "Shipping Cost Contribution",
      description: "Vendor shipping cost to be applied to every sales",
      value: 20,
      action: "Apply",
    },
    {
      name: "Item 3",
      description: "Description 3",
      value: 30,
      action: "Apply",
    },
  ]);

  const handleValueChange = (index: number, value: string | number) => {
    setItems((prevState) => {
      const updatedItems = [...prevState];
      //@ts-ignore
      updatedItems[index].value = value;
      return updatedItems;
    });
  };

  console.log(email, "emailemail");

  const handleImage = (e: any) => {
    setOverlayVisibility(false);
    setImage(e.target.files[0]);
    // var image = document.getElementById("output");
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
    //  image &&  image.src = URL.createObjectURL(e.target.files[0]);
  };

  const data = [
    {
      id: 1,
      type: "Notification about new orders",
    },
    {
      id: 2,
      type: "New Stores",
    },
    {
      id: 3,
      type: "New Product",
    },
    {
      id: 4,
      type: "Messages",
    },
  ];

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };
  const handleButtonClick = (clickedAction: string) => {
    setAction(clickedAction);
    setShowConfirmationModal(true);
  };

  const handleConfirm = () => {

    setShowConfirmationModal(false);
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
  };
  // GRANT MEMBER ACCESS (ADMIN SIGN UP)

  // const openModal = () => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   searchParams.set("email", email);
  //   const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  //   window.history.replaceState({}, "", newUrl);
  //   setModalOpen(true);
  // };

  const openModal = () => {
  const searchParams = new URLSearchParams();
  searchParams.set("email", email);
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.replaceState({}, "", newUrl);
  setModalOpen(true);
};




  const closeModal = () => {
    setModalOpen(false);
  };

  const component = (action: string) => {
    return (
      <div className="flex gap-4 items--center">
        <p>{`${action}`}</p> <RxCaretDown size={20} />
      </div>
    );
  };

  return (
    <div className="pl-10 pt-10 pr-5">
      {/* ADMIN SIGN UP MODAL */}
      <CreateAdminAcct
        openModal={modalOpen}
        closeModal={closeModal}

      />

      <div className="mb-5">
        <div className="">
          <h1 className="text-2xl font-medium ">Settings</h1>
          <span className="text-[#A2A2A2] font-normal text-sm">
            All information available.
          </span>
        </div>
      </div>
      <div className="flex w-ful">
        <nav className=" border-r-2 border-[#E8E9EB] flex flex-col space-y-3 py-3 bg-[#F4F4F4]   pl-4 w-64">
          <TabSelector
            className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Information"
                ? " block  font-normal rounded-md text-[#197B30] p-1.5"
                : "font-light"
            } `}
            isActive={selectedTab === "Information"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Information");
              }, 200);
            }}
          >
            <span>
              <MdPersonOutline size={19} />
            </span>
            Account Information
          </TabSelector>

          <TabSelector
            className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Members"
                ? "block  font-normal rounded-md text-[#197B30] p-1.5"
                : "font-light"
            } `}
            isActive={selectedTab === "Members"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Members");
              }, 200);
            }}
          >
            <span>
              <MdGroups size={19} />
            </span>
            Members
          </TabSelector>
          <TabSelector
            className={` cursor-pointer relative bg-transparent  font-light text-sm p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Notification"
                ? "block  font-normal  rounded-md text-[#197B30] p-1.5"
                : "font-light"
            } `}
            isActive={selectedTab === "Notification"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Notification");
              }, 200);
            }}
          >
            <span>
              <IoMdNotificationsOutline size={19} />
            </span>
            Notification
          </TabSelector>
          <TabSelector
            className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Commissions"
                ? "block  font-normal rounded-md text-[#197B30] p-1.5"
                : "font-light"
            } `}
            isActive={selectedTab === "Commissions"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Commissions");
              }, 200);
            }}
          >
            <span>
              <RiSecurePaymentFill size={19} />
            </span>
            Commissions & Fees
          </TabSelector>
          <TabSelector
            className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Password"
                ? "block  font-normal rounded-md text-[#197B30] p-1.5"
                : "font-light"
            } `}
            isActive={selectedTab === "Password"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Password");
              }, 200);
            }}
          >
            <span>
              <RiLockPasswordLine size={19} />
            </span>
            Change Password
          </TabSelector>
        </nav>
        <div className=" py-4 px-8  bg-[#F4F4F4] w-full ">
          <TabPanel hidden={selectedTab !== "Information"}>
            <div>
              <div className="my-3 ">
                <div className="shrink-0 mx-auto text-center relative ">
                  {currentImage ? (
                    <>
                      <img
                        // width={100}
                        // height={100}
                        className={`${
                          overlayVisibility ? "grayscale" : ""
                        }  'grayscale object-cover rounded-full bg-slate-300 relative w-16 h-16`}
                        src={currentImage}
                        // src={currentImage ? currentImage : user.picture}
                        // unoptimized={true}
                        alt="profile"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        className=" object-cover rounded-full bg-slate-300 w-16 h-16"
                        src={avatar}
                        alt="profile"
                      />
                    </>
                  )}
                </div>
                <label className="block cursor-pointer mt-3">
                  <div className="text-xs underline text-[#197b30] flex items-center gap-1">
                    <span>
                      <BsCamera />
                    </span>
                    <span>Change profile picture</span>
                  </div>
                  <input
                    ref={inputRef}
                    type="file"
                    onChange={(e) => handleImage(e)}
                    className="hidden  w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primaryDark
                            hover:file:bg-violet-100
                            "
                  />
                </label>
              </div>
              <div className="flex w-full  gap-5">
                <div className="flex-1">
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Full Name</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Full Name"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Email</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Email"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Street Address</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Address"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Phone number</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Phonenumber"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-start py-5">
                    <button className="mr-2 px-6 py-2 bg-[#fff] border border-[#f91919] text-[#f91919] rounded text-sm font-light hover:bg-[#f91919] hover:text-[#fff]">
                      Delete Account
                    </button>
                    <button className="px-6 py-2 text-sm font-light bg-[#197B30] text-white rounded">
                      Save Changes
                    </button>
                  </div>
                </div>
                <div className="flex-1 ">
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Store Name</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Store name"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Store ID</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Store id"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  mt-4  text-sm">
                    <p className=" text-[#344054]">Location</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Location"
                        type="tel"
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Members"}>
            <div>
              <div className="mb-3">
                <h1 className="text-lg font-normal text-[#333333]">
                  Team Members
                </h1>
                <span className="text-[#A2A2A2] text-sm font-light">
                  Anyone granted access has access to porker Hut admin
                </span>
              </div>
              <div className=" mt-4 text-sm  w-[60%]">
                <div className="flex gap-4">
                  <div className="flex-1 ">
                    <div className="flex flex-col    text-sm">
                      <div className="flex-[2]">
                        <InputComponent
                          placeholder="Email Address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center  ">
                    <button
                      className="bg-[#197b30] hover:bg-[#197b30] text-white select-none py-3 px-4 rounded font-normal disabled:bg-[#568a62] disabled:cursor-pointed"
                      style={{ whiteSpace: "nowrap" }}
                      onClick={openModal}
                      disabled={!email}
                    >
                      Grant Access
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                  <div className="flex gap-2 mt-3 items-center">
                    <img
                      src={currentImage ? currentImage : avatar}
                      alt="avatar"
                      className="object-contain w-10 h-10"
                    />
                    <div className="space-y-2">
                      <h1 className="text-xs font-normal text-[#333333]">
                        Jeremiah steller
                      </h1>
                      <p className="text-xs text-[#797979]">test22@gmail.com</p>
                    </div>
                  </div>

                  <>
                    <Popover
                      buttonContent={component(action)}
                      placementOrder={"auto"}
                      closeOnClick={true}
                    >
                      <div className="w-[150px] py-2">
                        <button
                          className="hover:bg-[#E9F5EC] font-light py-1 px-3 transition-all duration-300 text-[#667085] w-full text-left"
                          onClick={() => handleButtonClick("Grant Access")}
                        >
                          Grant Access
                        </button>
                        {/* {permissions.canEdit && ( */}
                        <button
                          className="hover:bg-[#E9F5EC] font-light py-1 px-3 transition-all duration-300 text-[#667085] w-full text-left"
                          onClick={() => handleButtonClick("Deny Access")}
                        >
                          Deny Access
                        </button>
                        {/* )}  */}
                        {/* {permissions.canDelete && ( */}
                        <button
                          className="hover:bg-[#E9F5EC] font-light py-1 px-3 transition-all duration-300 text-[#667085] w-full text-left"
                          onClick={() => handleButtonClick("Delete Account")}
                        >
                          Delete Account
                        </button>
                        {/* )} */}
                      </div>
                    </Popover>
                  </>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Notification"}>
            <div>
              <div className="w-full mt-3">
                <div className=" px-4 py-3 bg-[#fff] rounded-t flex justify-between items-center">
                  <div className="w-3/4 font-light text-sm">Type</div>
                  <div className="w-1/4 font-light text-sm pl-5">Status</div>
                </div>
                {data.map((d) => (
                  <div
                    key={d?.id}
                    className="bg-white px-4 py-2 flex justify-between items-center border border-1 border-slate-100"
                  >
                    <div className="w-3/4 text-sm font-light">{d?.type}</div>
                    <div className="w-1/4 border-l border-slate-100 pl-5">
                      {" "}
                      <ToggleSwitch />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Commissions"}>
            <div className="w-full overflow-x-auto">
              <table className="table-auto w-full rounded-t-md bg-[#fff]">
                <thead>
                  <tr className="">
                    <th className="py-3 px-4 font-light text-sm text-left">
                      Name
                    </th>
                    <th className="py-3 px-4 font-light text-sm text-left">
                      Description
                    </th>
                    <th className="py-3 px-4 font-light text-sm text-left">
                      Value
                    </th>
                    <th className="py-3 px-4 font-light text-sm text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="bg-white">
                      <td className="py-3 px-4 font-light text-sm ">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 font-light text-sm ">
                        {item.description}
                      </td>
                      <td className="py-3 px-1 ">
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) =>
                            handleValueChange(index, e.target.value)
                          }
                          className=" py-0.5 px-1 border border-gray-400 rounded-md font-light text-sm w-24 "
                        />
                      </td>
                      <td className="py-3 px-4 font-light text-sm underline active:scale-95">
                        {item.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Password"}>
            <div className="mb-3">
              <h1 className="text-lg font-normal text-[#333333]">
                Change Password
              </h1>
              {/* <span className="text-[#A2A2A2] text-sm font-light">
                All information available.
              </span> */}
            </div>
            <div className="w-[60%] my-4">
              <div className="w-full ">
                <div className="mt-2 relative">
                  <label htmlFor="" className="text-sm font-normal">
                    Old password
                  </label>
                  <input
                    autoComplete="on"
                    type={eyeState2 ? "text" : "password"}
                    name="password"
                    placeholder="**********"
                    id="password"
                    className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]

                    `}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                    onClick={toggleConfirmEye}
                  >
                    {eyeState2 ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className="mt-2 relative">
                  <label htmlFor="" className="text-sm font-normal">
                    New Password
                  </label>
                  <input
                    // {...register("confirmPassword", {
                    //   required: true,
                    //   validate: (value) =>
                    //     value === passwordref.current ||
                    //     "The passwords do not match",
                    // })}
                    type={eyeState ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="on"
                    placeholder="**********"
                    id="confirmPassword"
                    className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className="mt-2 relative">
                  <label htmlFor="" className="text-sm font-normal">
                    Repeat Password
                  </label>
                  <input
                    // {...register("confirmPassword", {
                    //   required: true,
                    //   validate: (value) =>
                    //     value === passwordref.current ||
                    //     "The passwords do not match",
                    // })}
                    type={eyeState3 ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="on"
                    placeholder="**********"
                    id="confirmPassword"
                    className={`rounded w-full p-3 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30]`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute right-0 pt-4 pr-5"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
              </div>
              <div className="text-sm text-[#A2A2A2] py-2  text-justify">
                <p className="text-justify font-light">
                  {" "}
                  The password should be at least 8 characters long. it must{" "}
                  <br />
                  contain upper and lower case characters and at least one
                  number.
                </p>
              </div>
              <div className="flex justify-start ">
                <button className="px-6 py-3 text-sm font-light bg-[#197B30] text-white rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>

      {showConfirmationModal && (
        <div
          onClick={() => setShowConfirmationModal(false)}
          className="fixed inset-0 bg-black opacity-50 z-50"
        ></div>
      )}
      {showConfirmationModal && (
        <div className="fixed inset-1/3  bg-white p-4 z-50 rounded-md flex items-center justify-center flex-col">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Are you sure you want to {action}?
          </h2>
          <div className="flex space-x-4 text-center">
            <button
              className="bg-[#197B30] text-white px-4 py-2 rounded"
              onClick={handleConfirm}
            >
              Yes, Continue
            </button>
            <button
              className="bg-[#fff] border-[#e10] border focus-within:border-[#e10] text-[#e10]  px-4 py-2 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
