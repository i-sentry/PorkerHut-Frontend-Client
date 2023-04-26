import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { productData } from "../../utils/productData";
import { useParams } from "react-router-dom";
import { useImageOverlay } from "../../store/ImageOverlay";
import { MdGroups, MdPersonOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLockPasswordLine, RiSecurePaymentFill } from "react-icons/ri";
import { Tooltip } from "../../components/utility/ToolTip";
import { BsCamera } from "react-icons/bs";
import avatar from "../../assets/account.png";
import InputComponent from "../../components/admin-dashboard-components/InputComponent";
import { RxCaretDown } from "react-icons/rx";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";

const Settings = () => {
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [selectedTab, setSelectedTab] = useTabs([
    "Information",
    "Members",
    "Notification",
    "Commissions",
    "Password",
  ]);
  const inputRef = useRef(null);
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

  const handleImage = (e: any) => {
    setOverlayVisibility(false);
    setImage(e.target.files[0]);
    var image = document.getElementById("output");
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
    //  image &&  image.src = URL.createObjectURL(e.target.files[0]);
  };

  const AccInfo = [
    {
      id: 1,
      label: "Full Name",
      value: "full_name",
      dafaultValue: "Williams",
      type: "text",
      required: "true",
    },
    {
      id: 2,
      label: "Email",
      value: "email",
      dafaultValue: "Williams",
      type: "email",
      required: "true",
    },
    {
      id: 3,
      label: "Street Address",
      value: "street_address",
      dafaultValue: "Williams",
      type: "text",
      required: "true",
    },
    // {
    //   id: 4,
    //   label: "Phone Number",
    //   value: "phone_number",
    //   dafaultValue: "Williams",
    //   type: "tel",
    //   required: "true"

    // },
  ];

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

  return (
    <div className="pl-10 pt-10 pr-5">
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
            className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 flex items-center gap-1 ${
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
            className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 flex items-center gap-1 ${
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
            className={` cursor-pointer relative bg-transparent  font-light text-sm p-1.5 transition-all duration-300 flex items-center gap-1 ${
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
            className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 flex items-center gap-1 ${
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
            className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 flex items-center gap-1 ${
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
                      {/* {overlayVisibility && (
                        <div className="transparent-black-overlay grayscale inset-0 w-[100px] h-[100px] rounded-full absolute left-[36.1%] md:left-[45.3%] top-[0] md:top-[-0px]"></div>
                      )}
                      <span
                        // onClick={removeImage}
                        className=" font-normal bg-slate-400 p-2 rounded-full h-5 w-5 text-lg flex items-center justify-center shadow-gray-900 t active:scale-90 active:transition-all"
                      >
                        <Tooltip message="Delete">X</Tooltip>
                      </span> */}
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
                        placeholder="080 000 0000"
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
                        placeholder="080 000 0000"
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
                        placeholder="080 000 0000"
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
                        placeholder="080 000 0000"
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
                    <p className=" text-[#344054]">Full Name</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="080 000 0000"
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
                        placeholder="080 000 0000"
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
                        placeholder="080 000 0000"
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
                          placeholder="080 000 0000"
                          type="tel"
                          // value={number}
                          // onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center  ">
                    <button
                      className="bg-[#197b30] hover:bg-[#21aa41] text-white select-none py-3 px-4 rounded font-normal"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Grant Access
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 mt-3 items-center">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="object-contain w-8 h-8"
                    />
                    <div>
                      <h1 className="text-xs font-normal text-[#333333]">
                        Jeremiah steller
                      </h1>
                      <p className="text-xs text-[#797979]">test22@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-xs"> Grant Access</p>
                    <span>
                      <RxCaretDown size={18} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 mt-3 items-center">
                    <img
                      src={currentImage ? currentImage : avatar}
                      alt="avatar"
                      className="object-contain w-8 h-8"
                    />
                    <div>
                      <h1 className="text-xs font-normal text-[#333333]">
                        Jeremiah steller
                      </h1>
                      <p className="text-xs text-[#797979]">test22@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-xs"> Access Denied</p>
                    <span>
                      <RxCaretDown size={18} />
                    </span>
                  </div>
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
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 font-light text-sm text-left">
                      Name
                    </th>
                    <th className="py-2 px-4 font-light text-sm text-left">
                      Description
                    </th>
                    <th className="py-2 px-4 font-light text-sm text-left">
                      Value
                    </th>
                    <th className="py-2 px-4 font-light text-sm text-left">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="bg-white">
                      <td className="py-2 px-4 font-light text-sm ">
                        {item.name}
                      </td>
                      <td className="py-2 px-4 font-light text-sm ">
                        {item.description}
                      </td>
                      <td className="py-2 px-1 ">
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) =>
                            handleValueChange(index, e.target.value)
                          }
                          className=" py-0.5 px-1 border border-gray-400 rounded-md font-light text-sm w-24"
                        />
                      </td>
                      <td className="py-2 px-4 font-light text-sm ">
                        {item.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Password"}>hello 5</TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Settings;
