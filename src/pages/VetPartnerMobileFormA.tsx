import React from "react";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import Header from "../components/vet-form/Header";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
} | null;

// const vendorType = [
//   {
//     id: 1,
//     name: "Individual",
//   },
//   {
//     id: 2,
//     name: "Business Entity",
//   },
// ];

type UserData = {
  accountName: string;
  businessName: string;
  businessAddress: string;
  email: string;
  phone: string;
  companyRcNumber: string;
};

type UserBillingInfo = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const VetPartnerMobileFormA = ({
  accountName,
  businessName,
  businessAddress,
  email,
  phone,
  companyRcNumber,
  updateFields,
}: UserBillingInfo) => {
  const {
    formState: { errors },
  } = useForm({});

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <div className="mt-0 mb-8 bg-[#197B30] md:mx-20 md:mb-[80px]">
        <Header />
      </div>

      <div>
        {" "}
        <div>
          <div className="mx-[16px] min-h-[600px] max-w-[680px] rounded-md bg-[#F4F4F4] py-[20px] px-[16px] md:mx-auto md:px-[40px]">
            <div className=" mb-8">
              <h1 className="mb-4  font-medium leading-[28px] text-[#333333] sm:text-xl md:text-[24px]">
                Vet Partner Information
              </h1>
              <p className="text-[14px] font-normal leading-[24px] text-[#797979]">
                Please fill in the necessary information.{" "}
              </p>
            </div>
            <div>
              <div>
                <div className="my-2 w-full ">
                  <label
                    htmlFor="name"
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Name
                  </label>
                  <input
                    required
                    autoFocus
                    type="text"
                    value={accountName}
                    onChange={(e) =>
                      updateFields({ accountName: e.target.value })
                    }
                    placeholder="Enter your name"
                    className={`relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.name ? " border-[1px] border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-sm text-[#dd1313]"></div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    This is the name of the person managing this account. This
                    is the contact name we will <br /> primarily address you
                    with.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Business Name
                  </label>
                  <input
                    required
                    type="text"
                    value={businessName}
                    onChange={(e) =>
                      updateFields({ businessName: e.target.value })
                    }
                    // {...register("businessName")}
                    placeholder="Enter your business name"
                    className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.businessName ? " border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-sm text-[#dd1313]">
                    {/* {errors.businessName?.message} */}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    This is the name that will appear on porker hut! Please do
                    not use a trademark name without brand authorisation.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Business Address
                  </label>
                  <input
                    required
                    type="text"
                    // {...register("businessAddress")}
                    value={businessAddress}
                    onChange={(e) =>
                      updateFields({ businessAddress: e.target.value })
                    }
                    placeholder="Enter business address"
                    className={`  relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.businessAddress ? "border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-sm text-[#dd1313]"></div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    Please indicate the official address of the entity. If you
                    are an individual indicate your address.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Official Email Address
                  </label>
                  <input
                    required
                    type="email"
                    // {...register("email")}
                    value={email}
                    onChange={(e) => updateFields({ email: e.target.value })}
                    placeholder="Enter email address"
                    className={`relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.email ? "border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-sm text-[#dd1313]">
                    {/* {errors.email?.message} */}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    This is will be one of the means we can use to reach out to
                    you or pass important information.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] ${"after:ml-0.5 after:text-red-500 after:content-['*']"} }`}
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="number"
                    // {...register("phone")}
                    value={phone}
                    onChange={(e) => updateFields({ phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"}  ${
                      errors.phone ? "border border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-sm text-[#dd1313]">
                    {/* {errors.phone?.message} */}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    When we need to contact you urgently, this is the number we
                    will reach out to.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
                <div className="my-6 w-full ">
                  <label
                    htmlFor=""
                    className={`text-HeadingColor mb-[6px] block text-[16px] `}
                  >
                    Company Rc Number
                  </label>
                  <input
                    required
                    type="number"
                    // {...register("companyRc")}
                    value={companyRcNumber}
                    onChange={(e) =>
                      updateFields({ companyRcNumber: e.target.value })
                    }
                    placeholder="Enter your rc number"
                    className={` relative block w-full rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-gray-900 placeholder-gray-500 focus:outline-1  focus:outline-[#197b30]  sm:text-sm ${"border-ErrorBorder"} ${
                      errors.companyRc ? "border-[#dd1313]" : ""
                    }`}
                  />

                  <div className="text-sm text-[#dd1313]">
                    {/* {errors.companyRc?.message} */}
                  </div>
                  <span className="text-[14px] font-normal leading-[24px] text-[#797979]">
                    We need your company registration number.
                  </span>
                  <p className="my-2 text-xs text-[red]"></p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  className={`h-3 w-3 rounded-full bg-gray-300 focus:outline-none`}
                ></button>

                <button
                  className={`h-3 w-3 rounded-full  bg-[#197b30]  focus:outline-none`}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetPartnerMobileFormA;
