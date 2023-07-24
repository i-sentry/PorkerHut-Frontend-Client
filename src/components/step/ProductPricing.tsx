import { useContext, useState } from "react";
import { productStepsContext } from "../../context/StepperContext";
import CurrencyInput from "../utility/CurrencyInput";
import StepperControl from "./StepperControl";
import { useForm } from "react-hook-form";

type FormField = {
  label: string;
  placeholder?: string;
  type: string;
  required: boolean;
  name: string;
};

const initialFormData: Record<string, FormField> = {

  startDate: {
    label: "Sale Start Date",
    type: "date",
    required: true,
    name: "pricing.salesStartDate",
  },
  endDate: {
    label: "Sale End Date",
    type: "date",
    required: true,
    name: "pricing.salesEndDate",
  },

};

export default function ProductPricing({
  cate,
  subCate,
}: {
  cate: string | null;
  subCate: string | null;
}) {
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({ defaultValues: "", mode: "onSubmit" });
  return (
    <div className="  bg-[#F4F4F4] lg:p-8 p-5 rounded-md">
      <div className=" mb-8">
        <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px] ">
          Product Pricing
        </h1>
        <p className="text-[#797979] text-[14px] leading-[24px] mt-3">
          Please fill in the necessary information.{" "}
        </p>
      </div>

      <div className="bg-white border  ">
        <div className="lg:block md:hidden hidden">
          <form className="">
            <div className="text-xs grid grid-cols-4 gap-2 p-2">
              {Object.entries(initialFormData).map(([key, item]) => {
                console.log(key, "h22");
                console.log(item.name, "hh");
                return (
                  <div key={key} className="mb-4 ">
                    <label
                      htmlFor={item.name}
                      className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] py-3 ${
                        item.required
                          ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
                          : ""
                      }`}
                    >
                      {item.label}
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData[key] }
                      name={item.name}
                      // placeholder={item.placeholder}
                      type={item.type}
                      className={`appearance-none relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                        errors[item.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                  </div>
                );
              })}
              <div className="text-xs">
                <label
                  htmlFor="productPrice"
                  className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] py-3 ${'after:content-["*"] after:ml-0.5 after:text-red-500'}`}
                >
                  Product Price
                </label>
                <CurrencyInput
                  onChange={(value) =>
                    //@ts-ignore
                    handleChange({
                      target: { name: "pricing.productPrice", value },
                    } as React.ChangeEvent<HTMLInputElement>)
                  }
                />
              </div>
              <div className="text-xs">
                <label
                  htmlFor="productQuantity"
                  className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] py-3 ${'after:content-["*"] after:ml-0.5 after:text-red-500'}`}
                >
                  Product Quantity
                </label>
                <input
                  onChange={handleChange}
                  name="pricing.productQuantity"
                  id="productQuantity"
                  placeholder="Enter product quantity"
                  type="number"
                  className={`appearance-none relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                    errors["pork.productQuantity"] ? "border-ErrorBorder" : ""
                  }`}
                />
              </div>
            </div>
            <div className="mb-5">
              {currentStep !== checkoutSteps.length && <StepperControl />}
            </div>
          </form>
        </div>

        <form className="bg-white border p-4 lg:hidden md:flex flex flex-col">
          {Object.entries(initialFormData).map(([key, item]) => (
            <div key={key} className="mb-4 ">
              <label
                htmlFor={item.name}
                className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] py-2 ${
                  item.required
                    ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
                    : ""
                }`}
              >
                {item.label}
              </label>
              <input
                onChange={handleChange}
                value={formData[key] || ""}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className={`appearance-none relative block w-full px-[14px] py-[12px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                  errors[item.name] ? "border-ErrorBorder" : ""
                }`}
              />
            </div>
          ))}

          <div className="text-xs">
            <label
              htmlFor="productPrice"
              className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] py-2 ${'after:content-["*"] after:ml-0.5 after:text-red-500'}`}
            >
              Product Price
            </label>
            <CurrencyInput
              onChange={(value) =>
                //@ts-ignore
                handleChange({
                  target: { name: "pricing.productPrice", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
          </div>
          <div className="text-xs">
            <label
              htmlFor="productQuantity"
              className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] py-2 ${'after:content-["*"] after:ml-0.5 after:text-red-500'}`}
            >
              Product Quantity
            </label>
            <input
              onChange={handleChange}
              name="pork.productQuantity"
              id="productQuantity"
              placeholder="Enter product quantity"
              type="number"
              className={`appearance-none relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                errors["pork.productQuantity"] ? "border-ErrorBorder" : ""
              }`}
            />
          </div>

          <div>
            {currentStep !== checkoutSteps.length && <StepperControl />}
          </div>
        </form>
      </div>
    </div>
  );
}
