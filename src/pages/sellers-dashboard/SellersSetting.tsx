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
      <div className=" flex flex-col justify-center ml-8 md:block xxs:hidden">
        <div className="mb-2">
          <h1 className="text-2xl font-medium">Settings</h1>
          <span className="text-[#A2A2A2] text-base">
            All information available.
          </span>
        </div>
        <section className=" space-y-1 bg-[#F4F4F4] px-4 rounded-sm">
          <div className=" flex flex-row items-stretch justify-between w-full">
            <div className="flex flex-col justify-start w-1/4 space-y-2 md:border-r md:border-gray-400">
              <button
                onClick={() => handleClick(1)}
                className={` py-1 text-base ${
                  tab === 1 ? "z-20 text-[#197B30] " : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <MdOutlinePerson size={24} />
                  <span>Account Information</span>
                </div>
              </button>
              <a
                href="#"
                onClick={() => handleClick(2)}
                className={` py-1 text-base ${
                  tab === 2 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <BiShieldQuarter size={24} />

                  <span>Quality Control</span>
                </div>
              </a>
              <a
                href="#"
                onClick={() => handleClick(3)}
                className={` py-1 text-base ${
                  tab === 3 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <RxBell size={24} />
                  <span>Notification</span>
                </div>
              </a>
              <a
                href="#"
                onClick={() => handleClick(4)}
                className={` py-1 ${
                  tab === 4 ? "z-20 text-[#197B30]" : "text-[#797979]"
                }`}
              >
                <div className="flex gap-3">
                  <TfiLock size={24} />
                  <span>Change Password</span>
                </div>
              </a>
            </div>

            <div className="w-3/4 ml-8 py-4">
              <form
                onSubmit={handleSubmit(submitData)}
                className="space-y-2 "
                style={{ display: tab === 1 ? "block" : "none" }}
              >
                <div className="m-auto">
                  <div className="w-16 h-16 flex items-center justify-center border border-black rounded-full">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="uploaded image"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        className="w-28 h-28 rounded-full "
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
                  className="text-xl font-medium  text-[#333333]"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  John Doe
                </h3>
                <label
                  htmlFor="file"
                  className="text-sm flex items-center gap-2 text-right"
                >
                  <FiCamera className="text-[#197B30]" />
                  <span className=" cursor-pointer  my-auto text-[#197B30]">
                    Change profile picture
                  </span>{" "}
                </label>

                <div
                  className="flex flex-col gap-3"
                  style={{
                    transitionDelay: "0.2s",
                    transition: "opacity 0 0.5s ease-in",
                  }}
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className=" text-sm">Full Name</label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Enter name"
                        className="border border-[#D9D9D9] py-[10px] px-[10px] focus:outline-none w-full rounded-sm  placeholder-gray-500 text-sm text-gray-900"
                      />
                    </div>
                    <div>
                      <h1 className="text-sm">Store Name</h1>

                      <input
                        {...register("storeName")}
                        type="text"
                        placeholder="Enter store name"
                        className="border border-[#D9D9D9] py-[10px] px-[10px] text-xs  w-full focus:outline-none rounded-sm  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className="text-base">Email</label>

                      <input
                        {...register("email")}
                        type="text"
                        placeholder="Enter name"
                        className="border border-[#D9D9D9] py-[10px] px-[10px] focus:outline-none text-xs  w-full rounded-sm  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Store ID</label>

                      <input
                        {...register("storeId", { valueAsNumber: true })}
                        type="text"
                        placeholder="Enter store name"
                        className="border border-[#D9D9D9] py-[10px] px-[10px] w-full focus:outline-none rounded-sm text-xs  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className="text-base">Street Address</label>

                      <input
                        {...register("streetAddress")}
                        type="text"
                        placeholder="Enter name"
                        className="border border-[#D9D9D9] py-[8px] px-[10px] focus:outline-none w-full rounded-sm text-xs   placeholder-gray-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Location</label>

                      <input
                        {...register("location")}
                        type="text"
                        placeholder="Enter store name"
                        className="border border-[#D9D9D9] py-[10px] px-[10px] w-full focus:outline-none text-xs  rounded-sm  placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                      <label className="text-sm">Phone number</label>

                      <input
                        {...register("phoneNumber", { valueAsNumber: true })}
                        type="number"
                        placeholder="Enter phone no."
                        className="border border-[#D9D9D9] py-[10px] px-[10px] focus:outline-none w-full rounded-sm text-xs   placeholder-gray-500 text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="flex gap-6 mt-2">
                    <button
                      type="submit"
                      className="border border-[#F91919] text-[#F91919] py-[10px] px-[13px] rounded text-sm"
                    >
                      Delete Account{" "}
                    </button>
                    <button
                      type="submit"
                      className="bg-[#197B30] text-white py-[8px] px-[13px] rounded text-sm"
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
                  className="text-xl font-medium flex items-center justify-center"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  What is Quality Check?
                </h3>
                <div className="flex items-center justify-center mt-1">
                  <div className=" block h-1 w-20 bg-[#197B30]"></div>
                </div>
                <div className="mt-6">
                  <p className="px-4">
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
                className="space-y-3"
                style={{ display: tab === 4 ? "block" : "none" }}
              >
                <h3
                  className="text-xl font-medium flex leading-tight"
                  style={{ transition: "opacity 0.5s ease-in" }}
                >
                  Password Change
                </h3>
                <div className=" relative">
                  <label htmlFor="" className="block">
                    Old password
                  </label>
                  <input
                    // {...register("oldPassword")}
                    autoComplete="on"
                    type={eyeState ? "text" : "password"}
                    name="password"
                    placeholder="**********"
                    id="password"
                    // className={` w-2/4 p-2 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${errors.oldPassword
                    //   ? "border-[#e10] focus-within:border-[#e10]"
                    //   : "border-[##EEEEEE] "
                    //   }`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute left-[310px] pt-4 pr-5"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className=" relative">
                  <label htmlFor="" className=" block">
                    New password
                  </label>
                  <input
                    // {...register("newPassword")}
                    autoComplete="on"
                    type={eyeState ? "text" : "password"}
                    name="password"
                    placeholder="**********"
                    id="newPassword"
                    // className={` w-2/4 p-2 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${errors.newPassword
                    //   ? "border-[#e10] focus-within:border-[#e10]"
                    //   : "border-[##EEEEEE] "
                    //   }`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute left-[310px] pt-4 pr-5"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div className=" relative">
                  <label htmlFor="" className="block">
                    Confirm password
                  </label>
                  <input
                    // {...register("confirmPassword")}
                    autoComplete="on"
                    type={eyeState ? "text" : "password"}
                    name="password"
                    placeholder="**********"
                    id="confirmPassword"
                    // className={` w-2/4 p-2 pl-4  border border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${errors.confirmPassword
                    //   ? "border-[#e10] focus-within:border-[#e10]"
                    //   : "border-[##EEEEEE] "
                    //   }`}
                  />
                  <button
                    className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute left-[310px] pt-4 pr-5"
                    onClick={toggleEye}
                  >
                    {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>
                <div>
                  <span className=" text-sm text-[#A2A2A2] ">
                    The password should be at least 8 characters long. it must{" "}
                    <br />
                    contain upper and lower case characters and at least one
                    number.
                  </span>
                </div>

                <div className=" mt-8  ">
                  <button className="bg-[#197B30] py-2 px-6 text-white rounded">
                    Save Changes
                  </button>
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
