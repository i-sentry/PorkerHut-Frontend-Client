import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";

import StepperControl from "./StepperControl";
import { productStepsContext } from "../../context/StepperContext";
import { productInfo } from "../../utils/formData";

export default function Account() {
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);

  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm<any>();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  console.log(productInfo, "jj");

  return (
    <div>
      {" "}
      <div>
        <div className=" lg:p-8 p-5   bg-[#F4F4F4] rounded-md">
          <div className=" mb-8">
            <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px] ">
              Product information
            </h1>
            <p className="text-[#797979] text-[14px] leading-[24px] mt-3">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              {productInfo?.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = productData?.[section][field]; // Access the nested property value

                return (
                  <div className="my-2 w-full" key={index}>
                    <label
                      htmlFor={data.name}
                      className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] ${
                        data.required
                          ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
                          : ""
                      }`}
                    >
                      {data.label}
                    </label>
                    <input
                      id={data.name}
                      type={data.type}
                      placeholder={data.place_holder}
                      name={data.name}
                      onChange={handleChange}
                      value={value || ""}
                      className={`appearance-none relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                        errors[data.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                    <span className="text-[#797979] text-[12px] leading-none">
                      {data.info}
                    </span>
                    <p className="my-2 text-[red] text-xs">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}

              <div>
                {currentStep !== checkoutSteps?.length && <StepperControl />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
