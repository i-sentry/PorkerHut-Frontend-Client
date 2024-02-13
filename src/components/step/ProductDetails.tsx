import { useContext } from "react";
import { productStepsContext } from "../../context/StepperContext";
import { productDetails } from "../../utils/formData";
import StepperControl from "./StepperControl";
import { useForm } from "react-hook-form";
import { IProductInfo } from "../../context/ProductInfoContext";

export default function ProductDetails({
  cate,
  subCate,
  details,
}: {
  cate: string | null;
  subCate: string | null;
  details?: any;
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
        <div className=" rounded-md bg-[#F4F4F4]  p-5 lg:p-8">
          <div className=" mb-8">
            <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
              More Product Details
            </h1>
            <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              {productDetails?.map((data, index) => {
                const [section, field] = data.name.split(".");
                // Split the name into section and
                const answer = [
                  details?.details?.productWeight,
                  details?.details?.productContent,
                  details?.details?.cookingMethod,
                  details?.details?.nutritionalValue,
                  details?.details?.deliveryDetails,
                ];

                console.log(answer[index], "ansuueeuu");

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
                      className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${
                        data.required
                          ? 'after:ml-0.5 after:text-red-500 after:content-["*"]'
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
                        value={answer[index] || value || ""}
                        className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
                          errors[data.name] ? "border-ErrorBorder" : ""
                        }`}
                      />
                      {data.name === "productDetails.weight" && (
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 transform text-sm font-semibold text-green-500">
                          kg
                        </span>
                      )}
                    </div>

                    <span className="text-[12px] leading-none text-[#797979]">
                      {data.info}
                    </span>
                    <p className="my-2 text-xs text-[red]">
                      {/* {errors[data.name] && errors[data.name].message} */}
                    </p>
                  </div>
                );
              })}
              <label
                htmlFor="productDetails.productDescription"
                className={`mb-[6px] block text-[14px] leading-[16px] text-[#333333] ${'after:ml-0.5 after:text-red-500 after:content-["*"]'}`}
              >
                Product Description{" "}
              </label>
              <textarea
                id="productDetails.productDescription"
                name="productDetails.productDescription"
                rows={5}
                className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
                  errors["productDetails.productDescription"]
                    ? "border-ErrorBorder"
                    : ""
                }`}
                placeholder="Enter product description"
                value={details?.details?.productDescription || ""}
                onChange={handleTextArea}
              ></textarea>
              <span className="text-[12px] leading-none text-[#797979]">
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
