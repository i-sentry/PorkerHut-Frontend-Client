import { useContext } from "react";
import { productStepsContext } from "../../context/StepperContext";
import { productDetails } from "../../utils/formData";
import StepperControl from "./StepperControl";
import { useForm } from "react-hook-form";
import { IProductInfo } from "../../context/ProductInfoContext";

export default function ProductDetails({
  cate,
  subCate,
}: {
  cate: string | null;
  subCate: string | null;
}) {
  const {
    checkoutSteps,
    currentStep,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);

  console.log(cate, "jjuuuu");

  const {
    formState: { errors },
  } = useForm<any>({ defaultValues: "", mode: "onSubmit" });

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value, "ooooo");

    // Split the name into nested properties
    const [section, field] = name.split(".");

    // Update the userData state
    setProductData((prevUserData: IProductInfo) => ({
      ...prevUserData,
      [section]: {
        ...prevUserData[section],
        [field]: value,
      },
    }));
    // isFormFilled();
  };

  return (
    <div>
      {" "}
      <div>
        <div className=" lg:p-8 p-5  bg-[#F4F4F4] rounded-md">
          <div className=" mb-8">
            <h1 className="sm:text-xl font-medium text-[#333333] text-[24px] leading-[28px] ">
              More Product Details
            </h1>
            <p className="text-[#797979] text-[14px] leading-[24px] mt-3">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              {productDetails?.map((data, index) => {
                const [section, field] = data.name.split("."); // Split the name into section and field
                const value = productData?.[section][field];
                if (section === "productDetails" && field === "cookingMethod") {
                  if (cate === "Livestocks" || cate === "Farm feeds") {
                    return null; // Skip rendering this input
                  }
                }
                if (
                  section === "productDetails" &&
                  field === "nutritionalValue"
                ) {
                  if (cate === "Pork") {
                    return null; // Skip rendering this input
                  }
                }

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
                    <div className="relative">
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
                      {data.name === "productDetails.weight" && (
                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-500 text-sm font-semibold">
                          kg
                        </span>
                      )}
                    </div>

                    <span className="text-[#797979] text-[12px] leading-none">
                      {data.info}
                    </span>
                    <p className="my-2 text-[red] text-xs">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}
              <label
                htmlFor="productDetails.productDescription"
                className={`block text-[14px] leading-[16px] text-[#333333] mb-[6px] ${'after:content-["*"] after:ml-0.5 after:text-red-500'}`}
              >
                Product Description{" "}
              </label>
              <textarea
                id="productDetails.productDescription"
                name="productDetails.productDescription"
                rows={5}
                className={`appearance-none relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm ${
                  errors["productDetails.productDescription"]
                    ? "border-ErrorBorder"
                    : ""
                }`}
                placeholder="Enter product description"
                value={productData.productDetails.productDescription || ""}
                onChange={handleTextArea}
              ></textarea>
              <span className="text-[#797979] text-[12px] leading-none">
                The product description should give the customer useful
                information about the product to ensure a purchase.
              </span>

              <div>
                {currentStep !== checkoutSteps.length && <StepperControl />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
