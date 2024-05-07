import React, { useEffect, useMemo, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { MdGroups, MdPersonOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLockPasswordLine, RiSecurePaymentFill } from "react-icons/ri";
import avatar from "../../assets/account.png";
import InputComponent from "../../components/admin-dashboard-components/InputComponent";
import { RxCaretDown } from "react-icons/rx";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Popover from "../../components/utility/PopOver";
import {
  useGetAllAdmin,
  useInviteAdmin,
  useUpdateAdminAccess,
} from "../../services/hooks/admin/Auth";
import ReactLoading from "react-loading";
import {
  useGetSingleUser,
  useUpdateUserInfo,
} from "../../services/hooks/users";
import { useMyBillingInfo } from "../../services/hooks/payment";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CgSpinner } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
// import {
//   useGetAllNotification,
//   useGetSingleNotification,
// } from "../../services/hooks/notifications";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required"),
  location: yup.string().required("Location is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});

const data = [
  {
    id: 1,
    label: "Notification about new orders",
    type: "new orders",
    // email: "test@gmail.com",
    status: false,
  },
  {
    id: 2,
    label: "New Stores",
    type: "new stores",
    status: true,
  },
  {
    id: 3,
    label: "New Product",
    type: "new products",
    status: true,
  },
  {
    id: 4,
    label: "Messages",
    type: "new messages",
    status: true,
  },
];

const Settings = () => {
  const [notification, setNotification] = useState(data);
  const [admin, setAdmin] = useState<any>(null);
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
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState("Grant Access");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { data: getAllAdmin, refetch, isLoading: loadAdmin } = useGetAllAdmin();
  const [selectedAdmin, setSelectedAdmin] = useState<string>("");
  const updateAccess = useUpdateAdminAccess(selectedAdmin);
  const allAdmin = useMemo(
    () => (!loadAdmin ? getAllAdmin : []),
    [getAllAdmin],
  );

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
  useEffect(() => {
    !isLoading && setAdmin({ ...adminBilling });
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: `${admin?.firstName} ${admin?.lastName}` || "",
      email: admin?.email || "",
      phoneNumber: admin?.phoneNumber || "",
      location: admin?.city || "",
    },
  });

  useEffect(() => {
    if (admin?._id) {
      reset({
        fullName: `${admin?.firstName} ${admin?.lastName}` || "",
        email: admin?.email || "",
        phoneNumber: admin?.phoneNumber || "",
        location: admin?.city || "",
      });
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const handleValueChange = (index: number, value: string | number) => {
    setItems((prevState) => {
      const updatedItems = [...prevState];
      //@ts-ignore
      updatedItems[index].value = value;
      return updatedItems;
    });
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
    setLoading(true);
    if (action.toLowerCase() === "grant access") {
      updateAccess
        .mutateAsync({ isAccessRevoked: false })
        .then((res: any) => {
          refetch();
          setShowConfirmationModal(false);
          setLoading(false);
          toast.success("Admin Access Granted");
        })
        .catch((err: any) => {
          setLoading(false);
          toast.error("Error Ocurred, try again!!!");
        });
      return;
    }
    if (action.toLowerCase() === "deny access") {
      updateAccess
        .mutateAsync({ isAccessRevoked: true })
        .then((res: any) => {
          refetch();
          setShowConfirmationModal(false);
          setLoading(false);
          toast.success("Admin Access Denied");
        })
        .catch((err: any) => {
          setLoading(false);
          toast.error("Error Ocurred, try again!!!");
        });
      return;
    }
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
    // userUpdate
    //   .mutateAsync(data)
    //   .then((res: any) => {
    //   })
    //   .catch((err: any) => {
    //   });
  };

  return (
    <div className="pl-10 pt-10 pr-5">
      <ToastContainer />
      <div className="mb-5">
        <div className="">
          <h1 className="text-2xl font-medium ">Settings</h1>
          <span className="text-sm font-normal text-[#A2A2A2]">
            All information available.
          </span>
        </div>
      </div>
      <div className="flex w-full">
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
            <div className="my-3">
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
              <form
                className="w-full xl:w-[50%]"
                onSubmit={handleSubmit(handleSave)}
              >
                <div className="mt-4 flex  flex-col  text-sm">
                  <p className=" text-[#344054]">Full Name</p>
                  <div className="flex-[2]">
                    <InputComponent
                      placeholder="Full Name"
                      type="text"
                      {...register("fullName")}
                      // value={formData.fullName}
                      defaultValue={`${adminInfo?.firstName} ${adminInfo?.lastName}`}
                      onChange={(e: any) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-4 flex  flex-col  text-sm">
                  <p className=" text-[#344054]">Email</p>
                  <div className="flex-[2]">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      className={`relative  block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[12px] text-gray-900 placeholder-slate-300 focus:z-10 focus:border-[#197b30] focus:outline-none focus:ring-[#197b30] sm:text-sm`}
                      // value={formData.email}
                      onChange={(e: any) => handleChange(e)}
                      defaultValue={adminInfo?.email}
                      // value={number}
                      // onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4 flex  flex-col  text-sm">
                  <p className=" text-[#344054]">Location</p>
                  <div className="flex-[2]">
                    <input
                      placeholder="location"
                      type="text"
                      name="city"
                      className={`relative  block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[12px] text-gray-900 placeholder-slate-300 focus:z-10 focus:border-[#197b30] focus:outline-none focus:ring-[#197b30] sm:text-sm`}
                      // value={formData.location}
                      defaultValue={admin?.city}
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
                      inputProps={{
                        name: "phone",
                      }}
                      enableSearch={true}
                      autoFormat={true}
                      countryCodeEditable={false}
                      country={"ng"}
                      value={`${admin?.phoneNumber?.slice(-10)}`}
                      onChange={(e: any) => handleChange(e)}
                      inputClass={"w-[100%_!important] h-[45px_!important]"}
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
              </form>
            </div>
            <form className="hidden w-3/4 space-y-3">
              <label htmlFor="fullName" className="block">
                <span className="mb-2 block font-medium text-[#333333]">
                  Full Name
                </span>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="John Doe"
                  className="boder-[#D9D9D9] form-input block w-full rounded-md border bg-white px-3 py-4 focus:border-green-700 focus:outline-0 focus:ring-green-700"
                />
              </label>
              <label htmlFor="email" className="block">
                <span className="mb-2 block font-medium text-[#333333]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  className="boder-[#D9D9D9] form-input block w-full rounded-md border bg-white px-3 py-4 focus:border-green-700 focus:outline-0 focus:ring-green-700"
                />
              </label>
              <label htmlFor="location" className="block">
                <span className="mb-2 block font-medium text-[#333333]">
                  Location
                </span>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Abuja"
                  className="boder-[#D9D9D9] form-input block w-full rounded-md border bg-white px-3 py-4 focus:border-green-700 focus:outline-0 focus:ring-green-700"
                />
              </label>
              <label htmlFor="phoneNumber" className="block">
                <span className="mb-2 block font-medium text-[#333333]">
                  Phone Number
                </span>
                {/* <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="819921254"
                  className="boder-[#D9D9D9] form-input block w-full rounded-md border bg-white px-3 py-4 focus:border-green-700 focus:outline-0 focus:ring-green-700"
                /> */}
                <PhoneInput
                  inputClass="w-100"
                  // disabled
                  enableSearch={true}
                  autoFormat={true}
                  countryCodeEditable={false}
                  country={"ng"}
                  value={formData?.phoneNumber.slice(-10)}
                  onChange={(e: any) => handleChange(e)}
                />
              </label>
            </form>
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
              <div className=" mt-4 w-[90%] text-sm xl:w-[70%]">
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
                <div className="container mx-auto pt-5">
                  <EmailInputComponent />
                </div>
                {loadAdmin && (
                  <span className="flex items-center gap-2">
                    <CgSpinner size={24} className="animate-spin" />
                    Loading...
                  </span>
                )}
                {!loadAdmin && (
                  <div className="mt-7 space-y-2">
                    {allAdmin
                      ?.filter((admin: any) => admin?._id !== adminInfo?._id)
                      ?.map((admin: any, index: number) => (
                        <div
                          className="flex items-center justify-between"
                          key={index}
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="h-8 w-8 object-contain"
                            />
                            <div className="space-y-0.5">
                              <h1 className="text-xs font-medium capitalize text-[#333333]">
                                {admin?.firstName} {admin?.lastName}
                              </h1>
                              <p className="text-xs text-[#797979]">
                                {admin?.email}
                              </p>
                            </div>
                          </div>

                          <>
                            <Popover
                              buttonContent={
                                admin?.isAccessRevoked ? (
                                  <span className="inline-flex items-center gap-2">
                                    Access Denied <RxCaretDown size={20} />
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-2">
                                    Access Granted <RxCaretDown size={20} />
                                  </span>
                                )
                              }
                              placementOrder={"auto"}
                              closeOnClick={true}
                            >
                              <div className="w-[150px] py-2">
                                <button
                                  className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                                  onClick={() => {
                                    handleButtonClick("Grant Access");
                                    setSelectedAdmin(admin?._id);
                                  }}
                                >
                                  Grant Access
                                </button>
                                {/* {permissions.canEdit && ( */}
                                <button
                                  className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                                  onClick={() => {
                                    handleButtonClick("Deny Access");
                                    setSelectedAdmin(admin?._id);
                                  }}
                                >
                                  Deny Access
                                </button>
                                {/* )}  */}
                                {/* {permissions.canDelete && ( */}
                                <button
                                  className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
                                  onClick={() => {
                                    handleButtonClick("Delete Account");
                                    setSelectedAdmin(admin?._id);
                                  }}
                                >
                                  Delete Account
                                </button>
                                {/* )} */}
                              </div>
                            </Popover>
                          </>
                        </div>
                      ))}
                  </div>
                )}
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
                    <div className="w-3/4 text-sm font-light">{d?.label}</div>
                    <div className="w-1/4 border-l border-slate-100 pl-5">
                      {" "}
                      <ToggleSwitch
                        type={d?.type}
                        status={d?.status}
                        notification={notification}
                        email={adminInfo?.email}
                      />
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
        <div className="fixed inset-1/3 z-50 flex h-min flex-col items-center justify-center rounded-md bg-white p-4 py-10">
          <h2 className="mb-4 text-center text-lg font-semibold">
            Are you sure you want to {action}?
          </h2>
          <div className="flex space-x-4 text-center">
            <button
              disabled={loading}
              className={`rounded bg-[#197B30] px-4 py-2 text-white ${loading ? "bg-opacity-50" : ""}`}
              onClick={handleConfirm}
            >
              {loading ? "Processing..." : "Yes, Continue"}
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

const EmailInputComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const inviteAdmin = useInviteAdmin();

  const handleInvite = () => {
    setLoading(true);
    inviteAdmin
      .mutateAsync({
        email,
        role: role.toLowerCase(),
      })
      .then((res: any) => {
        toast.success("Admin Invite sent to the email successfully!");
        setLoading(false);
        setRole("");
        setEmail("");
      })
      .catch((err: any) => {
        toast.error("Error sending invite, try again!");
        setLoading(false);
      });
  };

  const handleGrantAccess = () => {
    // setLoading(true)
    if (email && role) {
      handleInvite();
    } else {
      alert("Please enter email address and select role.");
    }
  };

  const roles = ["User", "Admin", "Superadmin"]; // Example roles

  return (
    <div className=" flex items-center ">
      <div className="relative grid w-full grid-cols-[2fr_1fr] border bg-white  focus-within:border-[#197b30] focus-within:ring-[#197b30]">
        <input
          type="email"
          className="w-full appearance-none border-0 border-gray-200 px-1 py-2 pl-1.5 placeholder:text-sm  focus:border-0 focus:outline-none focus:ring-0"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="form-select border-0 border-l border-l-gray-300 px-2 py-1 text-sm font-medium text-gray-600 focus:border-0 focus:border-l focus:border-l-gray-300 focus:outline-none focus:ring-0"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option className="pr-4 text-sm text-gray-600" value="">
            Select Role
          </option>
          {roles.map((role, index) => (
            <option key={index} value={role} className="capitalize">
              {role}
            </option>
          ))}
        </select>
      </div>
      <button
        disabled={loading}
        className={`disabled:cursor-pointed ml-4 whitespace-nowrap border border-[#197b30]  bg-[#197b30] px-4 py-2.5 text-white shadow-inner hover:bg-[#197b30] focus:outline-none disabled:bg-[#568a62]`}
        onClick={handleGrantAccess}
      >
        {loading ? "Loading..." : "Grant Access"}
      </button>
    </div>
  );
};
