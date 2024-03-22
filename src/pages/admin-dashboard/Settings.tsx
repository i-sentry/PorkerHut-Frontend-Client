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
import {
  useGetAllAdmin,
  useInviteAdmin,
} from "../../services/hooks/admin/Auth";
import ReactLoading from "react-loading";
import {
  useGetSingleUser,
  useUpdateUserInfo,
} from "../../services/hooks/users";
import { useMyBillingInfo } from "../../services/hooks/payment";
import PhoneInput from "react-phone-input-2";

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
  const inviteAdmin = useInviteAdmin();
  const inputRef = useRef(null);
  const [action, setAction] = useState("Grant Access");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const getAllAdmin = useGetAllAdmin();
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
  const adminInfo = JSON.parse(localStorage.getItem("admin") as string);
  const { data: billings, isLoading } = useMyBillingInfo(adminInfo?._id);
  const adminBilling = billings?.data?.billing?.find(
    (info: any) => info.isDefault,
  );
  const userUpdate = useUpdateUserInfo(adminInfo?._id);
  console.log(adminBilling, "Admin", getAllAdmin);
  const [formData, setFormData] = useState({
    fullName: `${adminBilling?.firstName} ${adminBilling?.lastName}`,
    email: adminBilling?.email || "",
    phoneNumber: adminBilling?.phoneNumber || "",
    location: adminBilling?.city || "",
  });

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

  const handleInvite = (email: string, role: string) => {
    inviteAdmin
      .mutateAsync({
        email,
        role,
      })
      .then((res: any) => {})
      .catch((err: any) => {});
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Append the form field and its value to the FormData object

    setFormData((form: any) => {
      return { ...form, [name]: value };
    }); // Update the state with the new FormData object
  };

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
      <div className="items--center flex gap-4">
        <p>{`${action}`}</p> <RxCaretDown size={20} />
      </div>
    );
  };

  const handleSave = (e: any) => {
    const data = new FormData();
    e.preventDefault();
    console.log(data, "form data");
    // userUpdate
    //   .mutateAsync(data)
    //   .then((res: any) => {
    //     console.log(res);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <div className="">
          <h1 className="text-2xl font-medium ">Settings</h1>
          <span className="text-sm font-normal text-[#A2A2A2]">
            All information available.
          </span>
        </div>
      </div>
      <div className="w-ful flex">
        <nav className=" flex w-64 flex-col space-y-3 border-r-2 border-[#E8E9EB] bg-[#F4F4F4]   py-3 pl-4">
          <TabSelector
            className={` relative flex cursor-pointer items-center gap-1 bg-transparent p-1.5 text-sm font-light transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Information"
                ? " block  rounded-md p-1.5 font-normal text-[#197B30]"
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
            className={` relative flex cursor-pointer items-center gap-1 bg-transparent p-1.5 text-sm font-light transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Members"
                ? "block  rounded-md p-1.5 font-normal text-[#197B30]"
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
            className={` relative flex cursor-pointer  items-center gap-1 bg-transparent p-1.5 text-sm font-light transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Notification"
                ? "block  rounded-md  p-1.5 font-normal text-[#197B30]"
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
            className={` relative flex cursor-pointer  items-center  gap-1 bg-transparent p-1.5 text-sm transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Commissions"
                ? "block  rounded-md p-1.5 font-normal text-[#197B30]"
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
            className={` relative flex cursor-pointer  items-center  gap-1 bg-transparent p-1.5 text-sm transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Password"
                ? "block  rounded-md p-1.5 font-normal text-[#197B30]"
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
        <div className=" w-full bg-[#F4F4F4]  py-4 px-8 ">
          <TabPanel hidden={selectedTab !== "Information"}>
            <div>
              <div className="my-3 ">
                <div className="relative mx-auto ">
                  <img
                    className=" h-16 w-16 rounded-full bg-slate-300 object-cover"
                    src={avatar}
                    alt="profile"
                  />
                  <h3 className="mt-3 text-xl font-bold">
                    {adminInfo?.firstName} {adminInfo?.lastName}
                  </h3>
                </div>
              </div>
              <div className="flex w-full  gap-5">
                <div className="w-full xl:w-[50%]">
                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" text-[#344054]">Full Name</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Full Name"
                        type="tel"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e: any) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" text-[#344054]">Email</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={(e: any) => handleChange(e)}
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" text-[#344054]">Location</p>
                    <div className="flex-[2]">
                      <InputComponent
                        placeholder="location"
                        type="text"
                        value={formData.location}
                        onChange={(e: any) => handleChange(e)}
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex  flex-col  text-sm">
                    <p className=" text-[#344054]">Phone number</p>
                    <div className="flex-[2]">
                      {/* <InputComponent
                        placeholder="Phonenumber"
                        type="tel"
                        defaultValue={adminBilling?.phoneNumber}
                        // value={number}
                        // onChange={(e) => setNumber(e.target.value)}
                      /> */}
                      <PhoneInput
                        // disabled
                        enableSearch={true}
                        autoFormat={true}
                        countryCodeEditable={false}
                        country={"ng"}
                        value={formData?.phoneNumber.slice(-10)}
                        onChange={(e: any) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-start py-5">
                    <button className="mr-2 rounded border border-[#f91919] bg-[#fff] px-6 py-2 text-sm font-light text-[#f91919] hover:bg-[#f91919] hover:text-[#fff]">
                      Delete Account
                    </button>
                    <button
                      onClick={handleSave}
                      className="rounded bg-[#197B30] px-6 py-2 text-sm font-light text-white"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
                {/* <div className="flex-1 ">
                  <div className="mt-4 flex  flex-col  text-sm">
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
                  <div className="mt-4 flex  flex-col  text-sm">
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
                  <div className="mt-4 flex  flex-col  text-sm">
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
                </div> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Members"}>
            <div>
              <div className="mb-3">
                <h1 className="text-lg font-normal text-[#333333]">
                  Team Members
                </h1>
                <span className="text-sm font-light text-[#A2A2A2]">
                  Anyone granted access has access to porker Hut admin
                </span>
              </div>
              <div className=" mt-4 w-[60%]  text-sm">
                {/* <div className="flex gap-4">
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
                </div> */}
                <div className="container mx-auto pt-8">
                  <EmailInputComponent onGrantAccess={handleInvite} />
                </div>
                {}
                <div className="mt-10 flex items-center justify-between">
                  <div className="mt-3 flex items-center gap-2">
                    <img
                      src={currentImage ? currentImage : avatar}
                      alt="avatar"
                      className="h-10 w-10 object-contain"
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
                          className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                          onClick={() => handleButtonClick("Grant Access")}
                        >
                          Grant Access
                        </button>
                        {/* {permissions.canEdit && ( */}
                        <button
                          className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                          onClick={() => handleButtonClick("Deny Access")}
                        >
                          Deny Access
                        </button>
                        {/* )}  */}
                        {/* {permissions.canDelete && ( */}
                        <button
                          className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
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
              <div className="mt-3 w-full">
                <div className=" flex items-center justify-between rounded-t bg-[#fff] px-4 py-3">
                  <div className="w-3/4 text-sm font-light">Type</div>
                  <div className="w-1/4 pl-5 text-sm font-light">Status</div>
                </div>
                {data.map((d) => (
                  <div
                    key={d?.id}
                    className="border-1 flex items-center justify-between border border-slate-100 bg-white px-4 py-2"
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
              <table className="w-full table-auto rounded-t-md bg-[#fff]">
                <thead>
                  <tr className="">
                    <th className="py-3 px-4 text-left text-sm font-light">
                      Name
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-light">
                      Description
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-light">
                      Value
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-light">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="bg-white">
                      <td className="py-3 px-4 text-sm font-light ">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 text-sm font-light ">
                        {item.description}
                      </td>
                      <td className="py-3 px-1 ">
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) =>
                            handleValueChange(index, e.target.value)
                          }
                          className=" w-24 rounded-md border border-gray-400 py-0.5 px-1 text-sm font-light "
                        />
                      </td>
                      <td className="py-3 px-4 text-sm font-light underline active:scale-95">
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
            <div className="my-4 w-[60%]">
              <div className="w-full ">
                <div className="relative mt-2">
                  <label htmlFor="" className="text-sm font-normal">
                    Old password
                  </label>
                  <input
                    autoComplete="on"
                    type={eyeState2 ? "text" : "password"}
                    name="password"
                    placeholder="**********"
                    id="password"
                    className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]

                    `}
                  />
                  <button
                    className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                    onClick={toggleConfirmEye}
                  >
                    {eyeState2 ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className="relative mt-2">
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
                    className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]`}
                  />
                  <button
                    className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className="relative mt-2">
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
                    className={`mt-1 w-full appearance-none rounded  border border-[#EEEEEE] p-3 pl-4 placeholder:text-sm placeholder:text-[#EEEEEE] focus-within:border-[#197B30] focus:outline-none focus:ring-[#197b30] active:border-[#197B30]`}
                  />
                  <button
                    className="absolute right-0 rounded-r-md pt-4 pr-5 text-center text-gray-500 outline-[#0eb683]"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
              </div>
              <div className="py-2 text-justify text-sm  text-[#A2A2A2]">
                <p className="text-justify font-light">
                  {" "}
                  The password should be at least 8 characters long. it must{" "}
                  <br />
                  contain upper and lower case characters and at least one
                  number.
                </p>
              </div>
              <div className="flex justify-start ">
                <button className="rounded bg-[#197B30] px-6 py-3 text-sm font-light text-white">
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
          className="fixed inset-0 z-50 bg-black opacity-50"
        ></div>
      )}
      {showConfirmationModal && (
        <div className="fixed inset-1/3  z-50 flex flex-col items-center justify-center rounded-md bg-white p-4">
          <h2 className="mb-4 text-center text-lg font-semibold">
            Are you sure you want to {action}?
          </h2>
          <div className="flex space-x-4 text-center">
            <button
              className="rounded bg-[#197B30] px-4 py-2 text-white"
              onClick={handleConfirm}
            >
              Yes, Continue
            </button>
            <button
              className="rounded border border-[#e10] bg-[#fff] px-4  py-2 text-[#e10] focus-within:border-[#e10]"
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

interface InputComponentProps {
  onGrantAccess: (email: string, role: string) => void;
}

const EmailInputComponent: React.FC<InputComponentProps> = ({
  onGrantAccess,
}) => {
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGrantAccess = () => {
    // setLoading(true)
    if (email && role) {
      onGrantAccess(email, role);
      setLoading(false);
    } else {
      alert("Please enter email address and select role.");
    }
  };

  const roles = ["user", "admin", "Superadmin"]; // Example roles

  return (
    <div className=" flex items-center ">
      <div className="relative w-full">
        <input
          type="email"
          className="w-full appearance-none border border-gray-200 px-4   py-2 placeholder:text-sm focus:border-[#197b30] focus:outline-none focus:ring-[#197b30] "
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="absolute inset-y-0 right-1 flex items-center">
          <select
            className="focus:ring-none appearance-none border-hidden px-2 py-1 text-sm font-light text-gray-600 focus:border-none focus:outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option className="pr-4 text-sm text-gray-600" value="">
              Select Role
            </option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="disabled:cursor-pointed ml-4 whitespace-nowrap border border-[#197b30]  bg-[#197b30] px-4 py-2.5 text-white shadow-inner hover:bg-[#197b30] focus:outline-none disabled:bg-[#568a62]"
        onClick={handleGrantAccess}
      >
        {loading ? "Loading.." : "Grant Access"}
      </button>
    </div>
  );
};
