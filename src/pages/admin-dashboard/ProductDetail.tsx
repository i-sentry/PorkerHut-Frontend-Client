import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { productData } from "../../utils/productData";
import { useLocation, useParams } from "react-router-dom";
import { useImageOverlay } from "../../store/overlay";
import {
  useGetSingleProduct,
  useProductStatus,
} from "../../services/hooks/Vendor/products";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { InputTypes } from "../../components/utility/Input/AmountField";
import { useGetCategoryQuestion } from "../../services/hooks/Vendor/category";
import CustomInput from "../../components/utility/Input/CustomInput";
import ProductTable from "../../components/utility/ProductTable";
import Gallery from "../../components/utility/Input/Gallery";
interface IProd {
  id: string;
  title: string;
  type: string;
  category: string;
  price: string;
  product: {
    location: string;
    name: string;
    weight: string;
    productName: string;
  };
  img: string;
  status: string;
  desc: string;
  images: string[];
}

const productInfoSchema = yup.object().shape({
  "productInformation.productName": yup
    .string()
    .required("Product name is required"),
  "productInformation.mainColour": yup
    .string()
    .required("Product colour is required"),
  // "productInformation.productBreed": yup.string().required("Product breed is required")
});

const ProductDetails = () => {
  const setShowOverlay = useImageOverlay((state) => state.setShowOverlays);
  const setImage = useImageOverlay((state) => state.setImage);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const catId = queryParams.get("catId");

  const singleProduct = useGetSingleProduct(id);
  const [images, setImages] = useState<string[]>([]);

  const { data: question } = useGetCategoryQuestion(catId);

  const updateProductStatus = useProductStatus(id);
  const currentProductData = singleProduct?.data?.data;

  const [selectedTab, setSelectedTab] = useTabs([
    "Information",
    "Details",
    "Pricing",
    "Images",
  ]);
  console.log(singleProduct?.data?.data, "singleProduct");

  const { text, textarea, amount, select, autocomplete, richText, date } =
    InputTypes;

  const {
    register,
    handleSubmit,
    control,
    reset, // Function to reset form values
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(productInfoSchema),
    defaultValues: {
      // Set initial values for fields outside of productInformation
      approvalStatus: currentProductData?.approvalStatus || "",
      avgRating: currentProductData?.avgRating || 0,
      // Add other fields outside of productInformation here

      productInformation: {
        productName: currentProductData?.information.productName || "",
        mainColour:
          currentProductData?.information.categoryQuestions[0]?.answer,
        productBreed:
          currentProductData?.information.categoryQuestions[1]?.answer,
      },
      productDetails: {
        productWeight: currentProductData?.details.productWeight || "",
        productContent: currentProductData?.details.productContent || "",
        productDescription:
          currentProductData?.details.productDescription || "",
        deliveryDetails: currentProductData?.details.deliveryDetails || "",
        nutritionalValue: currentProductData?.details.nutritionalValue || "",
      },

      pricing: {
        saleStartDate:
          moment(currentProductData?.pricing.saleStartDate).format(
            "YYYY-MM-DD"
          ) || "",
        saleEndDate:
          moment(currentProductData?.pricing.saleEndDate).format(
            "YYYY-MM-DD"
          ) || "",
        productPrice: currentProductData?.pricing.productPrice || 0,
        quantity: currentProductData?.pricing.quantity || 0,
        // Add other fields within pricing as needed
      },
      // Add other sub-fields here
      _id: currentProductData?._id,
      // Add other top-level fields here
    },
  });

  const convertToCamelCase = useCallback((str: string) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
  }, []);

  const questions = useMemo(() => {
    if (question?.data) {
      const updatedQuestions = question.data.map((obj: any) => {
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
  }, [question?.data, convertToCamelCase]);

  useEffect(() => {
    if (currentProductData) {
      reset({
        approvalStatus: currentProductData?.approvalStatus || "",
        avgRating: currentProductData?.avgRating || 0,

        productInformation: {
          productName: currentProductData?.information.productName || "",
          mainColour:
            currentProductData?.information.categoryQuestions[0]?.answer,
          productBreed:
            currentProductData?.information.categoryQuestions[1]?.answer,
        },
        productDetails: {
          productWeight: currentProductData?.details.productWeight || "",
          productContent: currentProductData?.details.productContent || "",
          productDescription:
            currentProductData?.details.productDescription || "",
          deliveryDetails: currentProductData?.details.deliveryDetails || "",
          nutritionalValue: currentProductData?.details.nutritionalValue || "",
        },

        pricing: {
          saleStartDate:
            moment(currentProductData?.pricing.saleStartDate).format(
              "YYYY-MM-DD"
            ) || "",
          saleEndDate:
            moment(currentProductData?.pricing.saleEndDate).format(
              "YYYY-MM-DD"
            ) || "",
          productPrice: currentProductData?.pricing.productPrice || 0,
          quantity: currentProductData?.pricing.quantity || 0,
          // Add other fields within pricing as needed
        },
        _id: currentProductData?._id,
      });
    }
  }, [currentProductData, reset]);

  if (!currentProductData && !question) {
    return <div>Loading**</div>;
  }
  // const { details, information, pricing } = currentProductData;

  console.log({ questions });

  const handleProductUpdate = ( status: string ) => {
    updateProductStatus.mutateAsync({
      approvalStatus: status,
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  };

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
    {
      // label: "Product Id",
      name: "_id",
      place_holder: "Enter product id",
      error_message: "Id is required",
      type: text,
    },
    {
      // label: "Sale Start Date",
      type: date,
      // required: true,
      name: "pricing.saleStartDate",
      // place_holder: "Enter product description",
      error_message: "Cooking method is required",
    },
    {
      // label: "Sale End Date",
      type: date,
      // required: true,
      name: "pricing.saleEndDate",
    },
    {
      // label: "Product Price",
      type: amount,
      // required: true,
      name: "pricing.productPrice",
    },
    {
      // label: "Product Quantity",
      type: "number",
      // required: true,
      name: "pricing.quantity",
    },
  ];

  console.log({ productInfo });

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <div className="">
          <h1 className="text-[36px] font-semibold leading-normal">
            Product Created
          </h1>
          <span className="text-[#A2A2A2] font-normal text-sm">
            Find all created product here for approval.
          </span>
        </div>
      </div>

      <ProductTable data={currentProductData} />

      <nav className=" border-b-2 border-[#E8E9EB] flex py-3 bg-[#F4F4F4] space-x-4 rounded-t-md pl-4 mt-10">
        <TabSelector
          className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 ${
            selectedTab === "Information"
              ? " block border border-[#197B30] font-normal rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Information"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Information");
            }, 200);
          }}
        >
          Product Information
        </TabSelector>

        <TabSelector
          className={` cursor-pointer relative bg-transparent font-light text-sm p-1.5 transition-all duration-300 ${
            selectedTab === "Details"
              ? "block border border-[#197B30] font-normal rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Details"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Details");
            }, 200);
          }}
        >
          More Product Details
        </TabSelector>
        <TabSelector
          className={` cursor-pointer relative bg-transparent  font-light text-sm p-1.5 transition-all duration-300 ${
            selectedTab === "Pricing"
              ? "block border border-[#197B30] font-normal  rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Pricing"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Pricing");
            }, 200);
          }}
        >
          Product Pricing
        </TabSelector>
        <TabSelector
          className={` cursor-pointer relative bg-transparent  text-sm  p-1.5 transition-all duration-300 ${
            selectedTab === "Images"
              ? "block border border-[#197B30] font-normal rounded-md text-[#197B30] p-1.5"
              : "font-light"
          } `}
          isActive={selectedTab === "Images"}
          onClick={() => {
            setTimeout(() => {
              setSelectedTab("Images");
            }, 200);
          }}
        >
          Images
        </TabSelector>
      </nav>
      <div className=" py-4 px-8  bg-[#F4F4F4]">
        <TabPanel hidden={selectedTab !== "Information"}>
          {" "}
          <div>
            <h1 className="pb-5 text-[20px] leading-normal text-[#333]">
              Product Information
            </h1>
            <div>
              <>
                {productInfo.map((data, index) => {
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
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Details"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">More Product Details</h1>
            <div>
              <>
                {productDetails.map((data, index) => {
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
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Pricing"}>
          {" "}
          <div>
            <h1 className="pb-5 text-lg">Product Pricing</h1>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#333333]">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff] border  tracking-wider"
                          >
                            Product Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff] border  tracking-wider"
                          >
                            Sales Start Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff] border  tracking-wider"
                          >
                            Sales End Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff] border  tracking-wider"
                          >
                            Product Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-[#fff] border  tracking-wider"
                          >
                            Product Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        <tr>
                          {pricingDetails.map((data, index) => {
                            return (
                              <td className="px-[6px] py-[4px] border">
                                <CustomInput
                                  data={data}
                                  register={register}
                                  errors={errors}
                                  control={control}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Images"}>
          <div>
            <div className="pb-5 ">
              <h1 className="text-lg">Images</h1>
              <p className="text-sm text-[#797979]">
                Images need to be at least 800 x 800 pixel with a maximum of
                3000 x 3000 pixel.
              </p>
            </div>
            <div>
              <Gallery data={currentProductData} />
            </div>
            {/* <div className="flex flex-wrap">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/4 p-2"
                  onClick={() => setShowOverlay(true)}
                >
                  {images ? (
                    <img
                      src={images[0]}
                      alt={` ${images}`}
                      className="h-64 w-full object-cover cursor-pointer"
                      onClick={() => setImage(images[0])}
                    />
                  ) : (
                    <div className="bg-[#D9D9D9] h-64 flex items-center justify-center cursor-pointer">
                      <span>Not Available</span>
                    </div>
                  )}
                </div>
              ))}
            </div> */}

            {/* {isLoading ? (
              <span>Loading...</span>
            ) : (
              <div className="flex flex-wrap">
                {images && images.length > 0 ? (
                  images.map((image, index) => (
                    <div
                      key={index}
                      className="w-1/4 p-2"
                      onClick={() => setShowOverlay(true)}
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={image}
                          className="h-64 w-full object-cover cursor-pointer"
                          onClick={() => setImage(image)}
                        />
                      ) : (
                        <div className="bg-[#D9D9D9] h-64 flex items-center justify-center cursor-pointer">
                          <span>Not Available</span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div>No images available</div>
                )}
              </div>
            )} */}
          </div>
        </TabPanel>
      </div>
      <div className="flex justify-end p-5">
        <button
          onClick={() => handleProductUpdate("rejected")}
          className="mr-2 px-6 py-2 bg-[#fff] border border-[#f91919] text-[#f91919] rounded text-sm font-light hover:bg-[#f91919] hover:text-[#fff]"
        >
          Reject
        </button>
        <button
          onClick={() => handleProductUpdate("approved")}
          className="px-6 py-2 text-sm font-light bg-[#197B30] text-white rounded"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

export function capitalizeFirstLetter(str: string): string {
  return str
    ?.replace(/([A-Z])/g, " $1") // Add space before each capital letter
    ?.replace(/^./, (match) => match.toUpperCase()); // Capitalize the first letter
}
