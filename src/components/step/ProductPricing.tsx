import { useContext } from "react";
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
    required: false,
    name: "pricing.salesStartDate",
  },
  endDate: {
    label: "Sale End Date",
    type: "date",
    required: false,
    name: "pricing.salesEndDate",
  },
};

export default function ProductPricing({
  cate,
  subCate,
  details,
}: {
  cate: string | null;
  subCate: string | null;
  details?: any;
}) {
  const { checkoutSteps, currentStep, handleChange } =
    useContext(productStepsContext);
  // const [formData] = useState<Record<string, string>>({});

  const {
    formState: { errors },
  } = useForm<any>({ defaultValues: "", mode: "onSubmit" });
  return (
    <div className="  rounded-md bg-[#F4F4F4] p-5 lg:p-8">
      <div className=" mb-8">
        <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
          Product Pricing
        </h1>
        <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
          Please fill in the necessary information.{" "}
        </p>
      </div>

      <div className="border bg-white  ">
        <div className="hidden md:hidden lg:block">
          <form className="">
            <div className="grid grid-cols-4 gap-2 p-2 text-xs">
              {Object.entries(initialFormData).map(([key, item], index) => {
                return (
                  <div key={key} className="mb-4 ">
                    <label
                      htmlFor={item.name}
                      className={`mb-[6px] block py-3 text-[14px] leading-[16px] text-[#333333] ${
                        item.required
                          ? 'after:ml-0.5 after:text-red-500 after:content-["*"]'
                          : ""
                      }`}
                    >
                      {item.label}
                    </label>
                    <input
                      onChange={handleChange}
                      // value={formData[key] || ""}
                      name={item.name}
                      // placeholder={item.placeholder}
                      type={item.type}
                      className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
                        errors[item.name] ? "border-ErrorBorder" : ""
                      }`}
                    />
                  </div>
                );
              })}
              <div className="text-xs">
                <label
                  htmlFor="productPrice"
                  className={`mb-[6px] block py-3 text-[14px] leading-[16px] text-[#333333] ${'after:ml-0.5 after:text-red-500 after:content-["*"]'}`}
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
                  className={`mb-[6px] block py-3 text-[14px] leading-[16px] text-[#333333] ${'after:ml-0.5 after:text-red-500 after:content-["*"]'}`}
                >
                  Product Quantity
                </label>
                <input
                  onChange={handleChange}
                  name="pricing.productQuantity"
                  id="productQuantity"
                  // value={details?.pricing?.quantity || ""}
                  placeholder="Enter product quantity"
                  type="number"
                  className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
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

        <form className="flex flex-col border bg-white p-4 md:flex lg:hidden">
          {Object.entries(initialFormData).map(([key, item]) => (
            <div key={key} className="mb-4 ">
              <label
                htmlFor={item.name}
                className={`mb-[6px] block py-2 text-[14px] leading-[16px] text-[#333333] ${
                  item.required
                    ? 'after:ml-0.5 after:text-red-500 after:content-["*"]'
                    : ""
                }`}
              >
                {item.label}
              </label>
              <input
                onChange={handleChange}
                // value={formData[key] || ""}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[12px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
                  errors[item.name] ? "border-ErrorBorder" : ""
                }`}
              />
            </div>
          ))}

          <div className="text-xs">
            <label
              htmlFor="productPrice"
              className={`mb-[6px] block py-2 text-[14px] leading-[16px] text-[#333333] ${'after:ml-0.5 after:text-red-500 after:content-["*"]'}`}
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
              className={`mb-[6px] block py-2 text-[14px] leading-[16px] text-[#333333] ${'after:ml-0.5 after:text-red-500 after:content-["*"]'}`}
            >
              Product Quantity
            </label>
            <input
              onChange={handleChange}
              name="pork.productQuantity"
              id="productQuantity"
              placeholder="Enter product quantity"
              type="number"
              className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
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
