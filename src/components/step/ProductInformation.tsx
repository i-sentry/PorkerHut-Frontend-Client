import { useForm } from "react-hook-form";
import React, { useCallback, useContext, useMemo } from "react";
import logo from "../../assets/images/porkerlogo.png";
import StepperControl from "./StepperControl";
import { productStepsContext } from "../../context/StepperContext";
import { productInfo } from "../../utils/formData";
import {
  useGetAllCategoriesQuestions,
  useGetCategoryQuestion,
} from "../../services/hooks/Vendor/category";
import { useLocation } from "react-router-dom";

export default function ProductInformation({
  cate,
  subCate,
}: {
  cate: string | null;
  subCate: string | null;
}) {
  const { checkoutSteps, currentStep, productData, handleChange } =
    useContext(productStepsContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("cate");
  // const subcategory = queryParams.get("sub");
  const catQuestions = useGetAllCategoriesQuestions();
  const { data: question } = useGetCategoryQuestion(category);
  // const Acategory = useGetOneCategory(category);

  const convertToCamelCase = useCallback((str: string) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
  }, []);

  const questions = useMemo(() => {
    if (question?.data) {
      const updatedQuestions = question?.data?.map((obj: any) => {
        const camelCaseQuestion = convertToCamelCase(obj.question);
        const placeHolder = `Enter ${obj.question?.toLowerCase()}`;
        return {
          ...obj,
          name: `productInformation.${camelCaseQuestion}`,
          place_holder: placeHolder,
        };
      });

      return updatedQuestions;
    }
  }, [question?.data, convertToCamelCase]);

  const {
    formState: { errors },
  } = useForm<any>();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {" "}
      <div>
        <div className=" rounded-md bg-[#F4F4F4]   p-5 lg:p-8">
          <div className=" mb-8">
            <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
              Product information
            </h1>
            <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
              Please fill in the necessary information.{" "}
            </p>
          </div>
          <div>
            <form>
              {catQuestions.isLoading ? (
                <div className="flex h-32 flex-col items-center justify-center">
                  <img
                    src={logo}
                    alt="loaderlogo"
                    className="h-20 w-20 animate-pulse"
                  />
                  <p className="text-[14px] leading-[24px] text-[#333333]">
                    Loading questions...
                  </p>
                </div>
              ) : (
                <>
                  {productInfo?.map((data, index) => {
                    const [section, field] = data.name.split("."); // Split the name into section and field
                    const value = productData[section][field]; // Access the nested property value

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
                        <input
                          id={data.name}
                          type={data.type}
                          placeholder={data.place_holder}
                          name={data.name}
                          onChange={handleChange}
                          value={value || ""}
                          className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
                            errors[data.name] ? "border-ErrorBorder" : ""
                          }`}
                        />
                        <span className="text-[12px] leading-none text-[#797979]">
                          {data.info}
                        </span>
                        <p className="my-2 text-xs text-[red]">
                          {/* {errors[data.name] && errors[data.name].message} */}
                        </p>
                      </div>
                    );
                  })}
                  {questions?.map((data: any, index: any) => {
                    const [section, field] = data.name.split("."); // Split the name into section and field
                    const value = productData[section][field]; // Access the nested property value
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
                          {data.question}
                        </label>
                        <input
                          id={data.name}
                          type={"text"}
                          placeholder={data.place_holder}
                          name={data.name}
                          onChange={handleChange}
                          value={value || ""}
                          className={`focus:ring-primaryDark focus:border-primaryDark relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:outline-none sm:text-sm ${
                            errors[data.name] ? "border-ErrorBorder" : ""
                          }`}
                        />
                        <span className="text-[12px] leading-none text-[#797979]">
                          {data.questionHint}
                        </span>
                        <p className="my-2 text-xs text-[red]">
                          {/* {errors[data.name] && errors[data.name].message} */}
                        </p>
                      </div>
                    );
                  })}
                </>
              )}

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
