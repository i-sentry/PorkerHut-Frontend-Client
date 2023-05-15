import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { BiShieldQuarter } from "react-icons/bi";
import { FiCamera, FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { RxBell } from "react-icons/rx";
import { TfiLock } from "react-icons/tfi";
import SellersNotificationTable from "../../components/sellers-order-page-component/SellersNotificationTable";
import MobileTabs from "../tabs/MobileTabs";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  fullName: string;
  email: string;
  storeName: string;
  storeId: number;
  streetAddress: string;
  location: string;
  phoneNumber: number;
  // newPassword: string;
  // confirmPassword: string;
  // oldPassword: string;
};

function SettingssTab() {
  const [tab, setTab] = useState(1);
  const [eyeState, setEyeState] = useState(false);
  const [eyeState2, setEyeState2] = useState(false);
  const [eyeState3, setEyeState3] = useState(false);



  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = (tabIndex: SetStateAction<number>) => {
    setTab(tabIndex);
  };

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const toggleEye = (e: any) => {
    e.preventDefault();
    setEyeState((prev) => !prev);
  };
  const toggleConfirmEye = (e: any) => {
    e.preventDefault();
    setEyeState2((prev) => !prev);
  };

  const schema: ZodType<FormData> = z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email(),
    storeName: z.string(),
    storeId: z.number(),
    streetAddress: z.string(),
    location: z.string(),
    phoneNumber: z.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log("IT WORK", data);
  };

 

  return (
    <>
      <div className=" flex h-[1400px] flex-col justify-center md:block xxs:hidden ">
      <div className="flex  flex-col gap-2 mb-8">
          <h1 className="text-[36px] leading-[42px] font-medium">Settings</h1>
          <span className="text-[#A2A2A2] text-[16px] leading-[18.75px] font-normal">
            All information available.
          </span>
        </div>
        <section className=" space-y-1 bg-[#F4F4F4]  rounded-[4px]">
          <div className=" flex flex-row items-stretch justify-between w-full">
            <div className="flex flex-col justify-start w-1/4 space-y-2 md:border-r md:border-gray-400 p-4">
              <button
                onClick={() => handleClick(1)}
                className={` py-2 text-base ${
                  tab === 1 ? "z-20 text-[#197B30] " : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <MdOutlinePerson size={24} />
                  <span className="text-[16px] leading-[18.75px] font-normal">Account Information</span>
                </div>
              </button>
              <a
                href="#"
                onClick={() => handleClick(2)}
                className={` py-2 text-base ${
                  tab === 2 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <BiShieldQuarter size={24} />

                  <span className="text-[16px] leading-[18.75px] font-normal">Quality Control</span>
                </div>
              </a>
              <a
                href="#"
                onClick={() => handleClick(3)}
                className={` py-2 text-base ${
                  tab === 3 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <RxBell size={24} />
                  <span className="text-[16px] leading-[18.75px] font-normal">Notification</span>
                </div>
              </a>
              <a
                href="#"
                onClick={() => handleClick(4)}
                className={` py-2 ${
                  tab === 4 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <TfiLock size={24} />
                  <span className="text-[16px] leading-[18.75px] font-normal">Change Password</span>
                </div>
              </a>
            </div>

            <div className="w-3/4 pt-6 pl-10 pr-8">
              <form
                onSubmit={handleSubmit(submitData)}
                className="space-2-2 "
                style={{ display: tab === 1 ? "block" : "none" }}
              >
                <div className="m-auto">
                  <div className="w-16 h-16 flex items-center justify-center border border-black rounded-full">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="uploaded image"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        className="w-28 h-28 rounded-full cursor-pointer"
                      />
                    ) : (
                      <>
                        <label htmlFor="file" className="">
                          <FiCamera size={20} className="text-gray-400" />
                          <span className=" cursor-pointer  my-auto text-[#197B30]"></span>{" "}
                        </label>

                        <input
                          id="file"
                          type="file"
                          name="file"
                          onClick={handleImage}
                          className=" hidden appearance-none outline-none text-sm "
                        />
                      </>
                    )}
                  </div>
                </div>

                <h3
                  className=" text-[24px] leading-[28px]  text-[#333333] pt-2 font-semibold"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  John Doe
                </h3>
                <label
                  htmlFor="file"
                  className="text-sm flex items-center gap-2 text-right"
                >
                  <FiCamera className="text-[#197B30]" />
                  <span className=" cursor-pointer  my-auto text-[#197B30] text-[14px] leading-[16px] py-4 font-medium">
                    Change profile picture
                  </span>{" "}
                </label>

                <div
                  className="flex flex-col gap-4"
                  style={{
                    transitionDelay: "0.2s",
                    transition: "opacity 0 0.5s ease-in",
                  }}
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className=" text-[14px] leading-[16px] font-normal">Full Name</label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Enter name"
                        className="border border-[#D9D9D9] py-[12px] px-[10px] focus:outline-none w-full rounded-sm  placeholder-gray-500 text-[14px] leading-[16px] font-normal text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] leading-[16px] font-normal" >Store Name</label>

                      <input
                        {...register("storeName")}
                        type="text"
                        placeholder="Enter store name"
                        className="border border-[#D9D9D9] py-[12px] px-[10px] text-[14px] leading-[16px] font-normal  w-full focus:outline-none rounded-sm  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className="text-[14px] leading-[16px] font-normal">Email</label>

                      <input
                        {...register("email")}
                        type="text"
                        placeholder="Enter name"
                        className="border border-[#D9D9D9] py-[12px] px-[10px] focus:outline-none text-[14px] leading-[16px] font-normal  w-full rounded-sm  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] leading-[16px] font-normal">Store ID</label>

                      <input
                        {...register("storeId", { valueAsNumber: true })}
                        type="text"
                        placeholder="Enter store name"
                        className="border border-[#D9D9D9] py-[12px] px-[10px] w-full focus:outline-none rounded-sm text-[14px] leading-[16px] font-normal placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className="text-[14px] leading-[16px] font-normal">Street Address</label>

                      <input
                        {...register("streetAddress")}
                        type="text"
                        placeholder="Enter name"
                        className="border border-[#D9D9D9] py-[12px] px-[10px] focus:outline-none w-full rounded-sm text-[14px] leading-[16px] font-normal  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] leading-[16px] font-normal">Location</label>

                      <input
                        {...register("location")}
                        type="text"
                        placeholder="Enter store name"
                        className="border border-[#D9D9D9] py-[12px] px-[10px] w-full focus:outline-none text-[14px] leading-[16px] font-normal  rounded-sm  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className="text-[14px] leading-[16px] font-normal">Phone number</label>

                      <input
                        {...register("phoneNumber", { valueAsNumber: true })}
                        type="number"
                        placeholder="Enter phone no."
                        className="border border-[#D9D9D9] py-[12px] px-[10px] focus:outline-none w-full rounded-sm text-[14px] leading-[16px] font-normal  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="flex gap-6 pt-3 pb-8">
                    <button
                      type="submit"
                      className="border border-[#F91919] text-[#F91919] py-[10px] px-[13px] rounded text-[14px] leading-[16px] font-semibold"
                    >
                      Delete Account{" "}
                    </button>
                    <button
                      type="submit"
                      className="bg-[#197B30] text-white py-[8px] px-[13px] rounded text-[14px] leading-[16px]  font-semibold"
                    >
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </form>
              <div
                className=""
                style={{ display: tab === 2 ? "block" : "none" }}
              >
                <h3
                  className="text-[24px] leading-[28px] font-medium flex items-center justify-center"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  What is Quality Check?
                </h3>
                <div className="flex items-center justify-center">
                  <div className=" block h-1 w-20 bg-[#197B30]"></div>
                </div>
                <div className="px-[20px] pt-[24px] pb-[80px]">
                  <p className="text-left text-[16px] leading-[19px] font-normal">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum magnam quam beatae quo recusandae optio commodi
                    totam doloribus, nihil, laudantium itaque error reiciendis
                    quidem. Provident optio excepturi laborum quis quidem, rem
                    maiores accusamus voluptas amet sequi itaque culpa enim
                    consequuntur architecto cupiditate nesciunt reiciendis eum,
                    veniam laudantium, minus quaerat quod? Excepturi, aut nisi
                    consequuntur vel ut consequatur natus accusamus magni. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt
                    impedit nostrum, obcaecati accusantium dicta deserunt
                    perspiciatis, quas cupiditate corrupti veritatis maiores
                    culpa commodi ab cum debitis hic? Corporis sint harum magni
                    eaque officiis nobis repudiandae praesentium eum facilis,
                    eveniet, omnis nulla labore dignissimos obcaecati
                    voluptatibus cumque quibusdam illo fugiat sequi molestias
                    reprehenderit rerum! Repudiandae at cum quibusdam nostrum
                    voluptate optio, vero eius magnam adipisci cupiditate nobis
                    esse labore rerum perspiciatis quas fugiat excepturi enim,
                    obcaecati voluptas aspernatur, molestiae ratione
                    reprehenderit maxime facilis. Ut consequatur beatae
                    blanditiis eos asperiores consectetur reiciendis cupiditate
                    dolores odit! Alias beatae voluptatem quibusdam omnis
                    accusantium in.
                  </p>
                </div>
              </div>
              <div
                className="space-y-6"
                style={{ display: tab === 3 ? "block" : "none" }}
              >
                <div
                  className="text-xl font-bold leading-tight py-4"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  <SellersNotificationTable />
                </div>
              </div>
              <div
                className="space-y-3 mb-6"
                style={{ display: tab === 4 ? "block" : "none" }}
              >
                <div className="mb-3">
              <h1 className="text-[20px] leading-[28px] font-medium text-[#333333]">
                Change Password
              </h1>
              {/* <span className="text-[#A2A2A2] text-sm font-light">
                All information available.
              </span> */}
            </div>
            <div className="w-[60%] my-4">
              <div className="w-full ">
                <div className="mt-2 relative">
                  <label htmlFor="" className="text-[14px] leading-[16px] font-normal">
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
                  <label htmlFor="" className="text-[14px] leading-[16px] font-normal">
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
                  <label htmlFor="" className="text-[14px] leading-[16px] font-normal">
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
                <p className="text-justify text-[14px] leading-[16px] font-normal font-light">
                  {" "}
                  The password should be at least 8 characters long. it must{" "}
                  <br />
                  contain upper and lower case characters and at least one
                  number.
                </p>
              </div>
              <div className="flex justify-start ">
                <button className="px-6 py-3 text-[14px] leading-[16px] font-semibold font-light bg-[#197B30] text-white rounded">
                  Save Changes
                </button>
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="md:hidden xxs:block">
        <MobileTabs />
      </div>
    </>
  );
}

export default SettingssTab;
