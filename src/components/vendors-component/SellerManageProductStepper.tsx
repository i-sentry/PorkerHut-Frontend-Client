/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from "react";
import { productStepsContext } from "../../context/StepperContext";
import ReactLoading from "react-loading";

// import ProductInformation from "./ProductInformation";

// import ProductPricing from "./ProductPricing";
// import Stepper from "./Steppers";
import { AiOutlineLine } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { GoChevronRight } from "react-icons/go";
import {
  IProductInfo,
  useProductState,
} from "../../context/ProductInfoContext";
// import ProductImage from "./ProductImage";
// import ProductDetails from "./ProductDetails";
import {
  useGetCategoryQuestion,
  useGetOneCategory,
} from "../../services/hooks/Vendor/category";
import logo from "../../assets/images/porkerlogo.png";
import SuccessScreen from "../../pages/sellers-dashboard/SuccessScreen";
import { useSuccessOverlay } from "../../store/overlay";
// import ProductInformation from "../step/ProductInformation";
// import ProductDetails from "../step/ProductDetails";
// import ProductPricing from "../step/ProductPricing";
// import ProductImage from "../step/ProductImage";
import Stepper from "../step/Steppers";
import { useGetSingleProduct } from "../../services/hooks/Vendor/products";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { InputTypes } from "../utility/Input/AmountField";
import CustomInput from "../utility/Input/CustomInput";
import StepperControl from "../step/StepperControl";
import CurrencyInput from "../utility/CurrencyInput";

export const steps = [
  "Product Information",
  "More Product Details",
  "Product Pricing",
  "Images",
];

const productInfoSchema = yup.object().shape({
  "productInformation.productName": yup
    .string()
    .required("Product name is required"),
  "productInformation.mainColour": yup
    .string()
    .required("Product colour is required"),
  "productInformation.productBreed": yup
    .string()
    .required("Product breed is required"),
  "productInformation.typeOfPork": yup
    .string()
    .required("Pork type is required"),
});

const SellerStepperComponent = () => {
  const { state: productData, setState: setProductData } = useProductState();
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(25);
  const [productQuestions, setproductQuestions] = useState<any[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("catId");
  const productId = queryParams.get("id");
  const showOverlay = useSuccessOverlay(
    (state: { showOverlay: any }) => state.showOverlay,
  );
  const { data, isLoading } = useGetSingleProduct(productId as string);
  const currentProductData = data?.data;
  const subcategory = currentProductData?.information?.subcategory?._id;
  // const category = currentProductData?.information?.category?._id;
  const Tcategory = useGetOneCategory(category);
  const { data: question, isLoading: Loading } =
    useGetCategoryQuestion(category);

  const {
    register,
    control,
    getValues,
    reset, // Function to reset form value
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productInfoSchema),
    defaultValues: {
      approvalStatus: currentProductData?.approvalStatus || "",
      avgRating: currentProductData?.avgRating || 0,
      images: currentProductData?.images,

      productInformation: {
        productName: currentProductData?.information.productName || "",
        mainColour:
          currentProductData?.information?.categoryQuestions[0]?.answer || "",
        productBreed:
          currentProductData?.information?.categoryQuestions[0]?.answer || "",
        typeOfPork:
          currentProductData?.information.categoryQuestions[1]?.answer || "",
      },
      productDetails: {
        productWeight: currentProductData?.details.productWeight || "",
        productContent: currentProductData?.details.productContent || "",
        cookingMethod: currentProductData?.details?.cookingMethod || "",
        productDescription:
          currentProductData?.details.productDescription || "",
        deliveryDetails: currentProductData?.details.deliveryDetails || "",
        nutritionalValue: currentProductData?.details.nutritionalValue || "",
      },
      pricing: {
        saleStartDate:
          moment(currentProductData?.pricing?.saleStartDate).format(
            "YYYY-MM-DD",
          ) || "",
        saleEndDate:
          moment(currentProductData?.pricing?.saleEndDate).format(
            "YYYY-MM-DD",
          ) || "",
        productPrice: currentProductData?.pricing?.productPrice || 0,
        quantity: currentProductData?.pricing?.quantity || 0,
      },
      _id: currentProductData?._id,
    },
  });

  useEffect(() => {
    if (!Loading) setproductQuestions(question?.data);
  }, [Loading, question?.data]);

  useEffect(() => {
    if (currentProductData) {
      reset({
        approvalStatus: currentProductData?.approvalStatus || "",
        avgRating: currentProductData?.avgRating || 0,
        productInformation: {
          productName: currentProductData?.information.productName || "",
          mainColour:
            currentProductData?.information?.categoryQuestions[0]?.answer || "",
          productBreed:
            currentProductData?.information?.categoryQuestions[0]?.answer || "",
          typeOfPork:
            currentProductData?.information.categoryQuestions[1]?.answer || "",
        },
        productDetails: {
          productWeight: currentProductData?.details.productWeight || "",
          productContent: currentProductData?.details.productContent || "",
          cookingMethod: currentProductData?.details?.cookingMethod || "",
          productDescription:
            currentProductData?.details.productDescription || "",
          deliveryDetails: currentProductData?.details.deliveryDetails || "",
          nutritionalValue: currentProductData?.details.nutritionalValue || "",
        },
        pricing: {
          saleStartDate:
            moment(currentProductData?.pricing.saleStartDate).format(
              "YYYY-MM-DD",
            ) || "",
          saleEndDate:
            moment(currentProductData?.pricing.saleEndDate).format(
              "YYYY-MM-DD",
            ) || "",
          productPrice: currentProductData?.pricing?.productPrice || 0,
          quantity: currentProductData?.pricing?.quantity || 0,
        },
        _id: currentProductData?._id,
      });
    }
  }, [currentProductData, reset]);

  const subCategory = () => {
    return Tcategory?.data?.data.subcategories?.filter(
      (cat: { _id: string | null }) => cat._id === subcategory,
    );
  };

  const cateName = Tcategory?.data?.data?.name;

  const categoryName = cateName
    ? cateName.charAt(0).toUpperCase() + cateName.slice(1)
    : "";

  const checkoutSteps = steps;
  const numSteps = 4;
  const filteredSubcategories = subCategory();
  const filtered =
    filteredSubcategories?.find(
      (subcategory: { name: string }) => subcategory.name,
    )?.name ?? "";

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className=" mt-4 rounded-md bg-[#F4F4F4]  p-5 lg:p-8">
            <div className=" mb-8">
              <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
                Product information
              </h1>
              <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
                Please fill in the necessary information.{" "}
              </p>
            </div>
            <div>
              {isLoading && !currentProductData && !question ? (
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
                  {productInfo.map((data, index) => {
                    console.log(data, "data data fsfaya");
                    return (
                      <div key={index + data?.name}>
                        <CustomInput
                          data={data}
                          register={register}
                          errors={errors}
                          control={control}
                          defaultValues
                        />
                      </div>
                    );
                  })}
                  {/* <div>
                    {currentStep !== checkoutSteps?.length && (
                      <StepperControl />
                    )}
                  </div> */}
                  <div className="my-8 flex items-center justify-center gap-3">
                    <button
                      disabled={currentStep === 1}
                      onClick={() => {
                        handleClick("");
                      }}
                      className={`rounded-md border border-[#197b30] bg-[#dddddd] px-10 py-3 font-medium text-[#197b30] ${currentStep === 1 ? "cursor-not-allowed" : ""}`}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => handleClick("next")}
                      className="rounded-md bg-[#197b30] px-8 py-3 font-medium text-white"
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className=" mt-4 rounded-md bg-[#F4F4F4]  p-5 lg:p-8">
            <div className=" mb-8">
              <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
                More Product Details
              </h1>
              <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
                Please fill in the necessary information.{" "}
              </p>
            </div>
            <div>
              <>
                {productDetails.map((data, index) => {
                  const [section, field] = data.name.split(".");
                  if (
                    section === "productDetails" &&
                    field === "cookingMethod"
                  ) {
                    if (
                      categoryName === "Livestocks" ||
                      categoryName === "Farm feeds"
                    ) {
                      return null; // Skip rendering this input
                    }
                  }
                  if (
                    section === "productDetails" &&
                    field === "nutritionalValue"
                  ) {
                    if (categoryName === "Pork") {
                      return null; // Skip rendering this input
                    }
                  }

                  return (
                    <div key={index + data?.name}>
                      <CustomInput
                        defaultValues
                        data={data}
                        register={register}
                        errors={errors}
                        control={control}
                      />
                    </div>
                  );
                })}
              </>
            </div>
            {/* <div>
              {currentStep !== checkoutSteps?.length && <StepperControl />}
            </div> */}
            <div className="my-8 flex items-center justify-center gap-3">
              <button
                disabled={currentStep === 1}
                onClick={() => {
                  handleClick("");
                }}
                className={`rounded-md border border-[#197b30] bg-[#dddddd] px-10 py-3 font-medium text-[#197b30] ${currentStep === 1 ? "cursor-not-allowed" : ""}`}
              >
                Back
              </button>
              <button
                onClick={() => handleClick("next")}
                className="rounded-md bg-[#197b30] px-8 py-3 font-medium text-white"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className=" mt-4 rounded-md bg-[#F4F4F4]  p-5 lg:p-8">
            <div className=" mb-8">
              <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl">
                Product Pricing
              </h1>
              <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
                Please fill in the necessary information.{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2 text-xs lg:grid-cols-4">
              <>
                {pricingDetails.map((data, index) => {
                  const [section, field] = data.name.split(".");
                  if (section === "pricing" && field === "productPrice") {
                    return (
                      <div className="text-xs" key={index}>
                        <label
                          htmlFor="productPrice"
                          className={`mb-[6px] block text-[14px] leading-normal text-[#333333] ${'after:ml-0.5 after:text-red-500 after:content-["*"]'}`}
                        >
                          Product Price
                        </label>
                        <CurrencyInput
                          price={currentProductData?.pricing?.productPrice}
                          onChange={(value) =>
                            //@ts-ignore
                            handleChange({
                              target: { name: "pricing.productPrice", value },
                            } as React.ChangeEvent<HTMLInputElement>)
                          }
                        />
                      </div>
                    );
                  }

                  // console.log(section, field, "data data fsfaya");
                  return (
                    <div key={index + data?.name}>
                      <CustomInput
                        data={data}
                        register={register}
                        errors={errors}
                        control={control}
                      />
                    </div>
                  );
                })}
              </>
            </div>
            {/* <div>
              {currentStep !== checkoutSteps?.length && <StepperControl />}
            </div> */}
            <div className="my-8 flex items-center justify-center gap-3">
              <button
                disabled={currentStep === 1}
                onClick={() => {
                  handleClick("");
                }}
                className={`rounded-md border border-[#197b30] bg-[#dddddd] px-10 py-3 font-medium text-[#197b30] ${currentStep === 1 ? "cursor-not-allowed" : ""}`}
              >
                Back
              </button>
              <button
                onClick={() => handleClick("next")}
                className="rounded-md bg-[#197b30] px-8 py-3 font-medium text-white"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className=" mt-4 rounded-md bg-[#F4F4F4] p-5 lg:p-8">
            <div className=" mb-8">
              <h1 className="text-[24px] font-medium leading-[28px] text-[#333333] sm:text-xl ">
                Product Images
              </h1>
              <p className="mt-3 text-[14px] leading-[24px] text-[#797979]">
                Images need to be at least 800 x 800 pixel with a maximum of
                3000 x 3000 pixel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
              {currentProductData?.images?.map((img: string, index: number) => (
                <div key={index} className="">
                  <img
                    src={img}
                    alt="product thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* <div>
              {currentStep !== checkoutSteps.length - 1 && <StepperControl />}
            </div> */}
            <div className="my-8 flex items-center justify-center gap-3">
              <button
                disabled={currentStep === 1}
                onClick={() => {
                  handleClick("");
                }}
                className={`rounded-md border border-[#197b30] bg-[#dddddd] px-10 py-3 font-medium text-[#197b30] ${currentStep === 1 ? "cursor-not-allowed" : ""}`}
              >
                Back
              </button>
              <button
                type="submit"
                // onClick={() => console.log("CLicked COnfirm")}
                onClick={() => handleProductUpdate()}
                className="rounded-md bg-[#197b30] px-8 py-3 font-medium text-white"
              >
                {loading ? (
                  <div className="flex items-center justify-end">
                    <ReactLoading
                      type="spin"
                      color="#FFFFFF"
                      height={20}
                      width={20}
                    />
                  </div>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </div>
        );
      default:
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(name, value);

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

  const handleClick = (direction: any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const { text, amount, richText, date } = InputTypes;

  const convertToCamelCase = useCallback((str: string) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
  }, []);

  const questions = useMemo(() => {
    if (!loading && productQuestions) {
      const updatedQuestions = productQuestions?.map((obj: any) => {
        const camelCaseQuestion = convertToCamelCase(obj.question);
        const placeHolder = `Enter ${obj.question?.toLowerCase()}`;
        return {
          ...obj,
          name: `productInformation.${camelCaseQuestion}`,
          place_holder: placeHolder,
          type: text,
          info: obj.questionHint,
          label: obj.question,
          error_message: "",
        };
      });
      return updatedQuestions;
    }
    return [];
  }, [loading, productQuestions, convertToCamelCase, text]);
  // console.log("question", questions);

  useEffect(() => {
    const stepProgress = Math.round((currentStep / numSteps) * 100);
    setProgress(stepProgress);
  }, [currentStep, numSteps]);

  if (showOverlay) {
    return (
      <SuccessScreen
        title={"Product created successfully"}
        msg={"We’re on it! Please be patient for Poker Hut Approval."}
        url={"/vendor/create"}
      />
    );
  }

  const productInfo = [
    {
      label: "Product Name",
      name: "productInformation.productName",
      place_holder: "Enter product name",
      type: text,
      info: "Name of the product. For better listing, the name should match actual product.",
      required: "true",
      error_message: "",
    },
    ...questions,
  ];

  console.log(productInfo, productInfo);

  const productDetails = [
    {
      label: "Product Weight",
      name: "productDetails.productWeight",
      place_holder: "Enter product weight",
      error_message: "",
      type: "number",
      info: "Please fill in the product weight.",
      required: "true",
    },
    {
      label: "Product Content",
      name: "productDetails.productContent",
      place_holder: "Enter product content",
      error_message: "Product content is required",
      type: text,
      info: "The product content should give the customer an overview of what they ordered.",
      required: "true",
    },
    {
      label: "Cooking Method",
      name: "productDetails.cookingMethod",
      place_holder: "Enter cooking method",
      error_message: "Cooking method is required",
      type: text,
      info: "Give a brief details on how its being Cooked. Example: Fried, Roasting, Boiling, Grilling.",
      // required: "false",
    },
    {
      label: "Nutritional Value",
      name: "productDetails.nutritionalValue",
      place_holder: "Enter nutritional value ",
      error_message: "Nutritional Value is required",
      type: text,
      info: "Give a brief details on how its nutritional value . Example: Protein, Carbohydrates, vitamins, Fats.",
      // required: "false",
    },
    {
      label: "Delivery Details",
      name: "productDetails.deliveryDetails",
      place_holder: "Enter delivery details",
      error_message: "Cooking method is required",
      type: text,
      info: "Please fill in where this product can be delivered to.",
      required: "true",
    },
    {
      label: "Product Description",
      name: "productDetails.productDescription",
      place_holder: "Enter product description",
      error_message: "Cooking method is required",
      type: richText,
      info: "The product description should give the customer useful  information about the product to ensure a purchase.",
      required: "true",
    },
  ];

  const pricingDetails = [
    // {
    //   label: "Product Id",
    //   name: "_id",
    //   place_holder: "Enter product id",
    //   error_message: "Id is required",
    //   type: text,
    // },
    {
      label: "Sale Start Date",
      type: date,
      // required: true,
      name: "pricing.saleStartDate",
      // place_holder: "Enter product description",
      error_message: "Cooking method is required",
    },
    {
      label: "Sale End Date",
      type: date,
      // required: true,
      name: "pricing.saleEndDate",
    },
    {
      label: "Product Price",
      type: amount,
      required: true,
      name: "pricing.productPrice",
    },
    {
      label: "Product Quantity",
      type: "number",
      required: true,
      name: "pricing.quantity",
    },
  ];

  // if (!currentProductData && !question) {
  //   return <div>Loading**</div>;
  // }

  const onSubmit = (event: any) => {
    console.log(event);

    console.log("Ready To Update");
    event.preventDefault();

    if (currentStep === checkoutSteps?.length) {
      console.log("Ready To Update");
    }
  };

  const handleProductUpdate = () => {
    const formData = getValues();
    const data = new FormData();

    console.log(data, formData, "Product Update");
  };

  return (
    <div className="">
      <div className="hidden items-center gap-2 py-5 md:hidden lg:flex">
        <h1 className="mb-3 text-[#1F1F1F] xxs:text-[20px]  xxs:font-normal  xxs:leading-[23px] md:text-[36px] md:font-medium md:leading-[42px]">
          {"Create Products"}
        </h1>

        <div className="flex items-center gap-2">
          <AiOutlineLine size={30} />
          <span className="text-[16px] font-normal leading-[19px] text-[#A2A2A2]">
            {categoryName}
          </span>
          <GoChevronRight className="text-[#A2A2A2]" />

          <span className="ext-[16px] font-normal leading-[19px] text-[#A2A2A2]">
            {filtered && filtered}
          </span>
        </div>
      </div>
      {/* Stepper */}
      <div className="horizontal hidden md:hidden lg:flex ">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="mx-3 flex items-center gap-5 md:flex lg:hidden">
        <div className="my-6 w-20">
          <CircularProgressbar
            value={progress}
            text={`${currentStep} of 4`}
            styles={{
              // Customize the root svg element
              root: {},

              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `#197b30`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "#d6d6d6",
              },
              // Customize the text
              text: {
                // Text color
                fill: "#197b30",
                // Text size
                fontSize: "22px",
                // Vertical alignment of text
                dominantBaseline: "middle",
                // Horizontal alignment of text
                textAnchor: "middle",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#197b30",
              },
            }}
          />
        </div>
        <div>
          <h1 className="text-base font-semibold text-[#333333]">
            Step {currentStep}
          </h1>
          <p className="text-base font-light">
            {checkoutSteps[currentStep - 1]}
          </p>
        </div>
      </div>
      <form id="manage-product" onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="my-0 xxs:px-4 md:my-0 lg:my-10 lg:px-0"> */}
        <productStepsContext.Provider
          //@ts-ignore
          value={{
            productData,
            setProductData,
            finalData,
            setFinalData,
            checkoutSteps,
            currentStep,
            handleClick,
            handleChange,
          }}
        >
          {displayStep(currentStep)}
        </productStepsContext.Provider>
        {/* </div> */}
        {/* <button type="submit">Submit</button> */}
      </form>
      {showOverlay && <SuccessScreen title={""} msg={""} url={""} />}
    </div>
  );
};

export default SellerStepperComponent;
