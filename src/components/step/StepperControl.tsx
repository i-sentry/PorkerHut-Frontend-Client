import { useContext } from "react";
import { productStepsContext } from "../../context/StepperContext";
import { ProductImagesContext } from "../../context/ProductImagesContext";
import { useLocation } from "react-router-dom";
import { FileData } from "../../context/FileContext";
import { useCreateProduct } from "../../services/hooks/Vendor/products";
import { useGetCategoryQuestion } from "../../services/hooks/Vendor/category";

export default function StepperControl() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category: any = queryParams.get("cate");
  const subcategory: any = queryParams.get("sub");
  const createProduct = useCreateProduct();
  const { data: questions } = useGetCategoryQuestion(category);
  const {
    checkoutSteps,
    currentStep,
    handleClick,
    productData,
    setProductData,
    handleChange,
  } = useContext(productStepsContext);
  const { setImg, img1, img2, img3, img4, img5, img6, img7, img8 } =
    useContext(ProductImagesContext);
  console.log(checkoutSteps?.length);
  console.log(currentStep, "currentStep");
  console.log(productData, "productData");
  // const { } = questions;
  const appendFilesToFormData = (
    fieldName: string,
    formData: FormData,
    files?: FileData[] | null
  ) => {
    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
        console.log(fileData.file);
      }
    }
  };

  const initiateCreateProduct = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleClick("next");
    if (currentStep === checkoutSteps?.length) {
      console.log("ooooooo", "jjttttt");
      const data = new FormData();
      const productInformation = productData.productInformation ?? {};
      const productDetails = productData.productDetails ?? {};
      const pricing = productData.pricing ?? {};

      let answer1 =
        productInformation.mainColour ||
        productInformation.typeOfMeat ||
        productInformation.typeOfProducts;

      console.log(productInformation.mainColor, "productInformation.mainColor");
      console.log(
        productInformation.typeOfMeat,
        "   productInformation.typeOfMeat"
      );
      console.log(
        productInformation.typeOfProducts,
        "productInformation.typeOfProducts"
      );
      const answer =
        productInformation.productBrand !== ""
          ? productInformation.productBrand
          : productInformation.productBreed;

      data.append(
        "information[productName]",
        productInformation.productName ?? ""
      );
      data.append("information[category]", category ?? "");
      data.append("information[subcategory]", subcategory ?? "");

      // Appending category questions
      data.append(
        `information[categoryQuestions][0][question]`,
        category ?? ""
      );
      data.append(`information[categoryQuestions][0][answer]`, answer);
      data.append(
        `information[categoryQuestions][1][question]`,
        subcategory ?? ""
      );
      data.append(`information[categoryQuestions][1][answer]`, answer1);

      data.append(
        "details[productWeight]",
        productDetails.productWeight?.toString() ?? ""
      );
      data.append(
        "details[productContent]",
        productDetails.productContent ?? ""
      );
      if (productDetails.cookingMethod && productDetails.cookingMethod !== "") {
        data.append(
          "details[cookingMethod]",
          productDetails.cookingMethod.toString()
        );
      }

      if (productDetails.nutritionalValue !== "") {
        data.append(
          "details[nutritionalValue]",
          productDetails.nutritionalValue.toString()
        );
      }

      data.append(
        "details[deliveryDetails]",
        productDetails.deliveryDetails ?? ""
      );
      data.append(
        "details[productDescription]",
        productDetails.productDescription ?? ""
      );

      data.append(
        "pricing[saleStartDate]",
        pricing.salesStartDate?.toString() ?? ""
      );
      data.append(
        "pricing[saleEndDate]",
        pricing.salesEndDate?.toString() ?? ""
      );
      data.append(
        "pricing[productPrice]",
        pricing.productPrice?.toString() ?? ""
      );
      data.append(
        "pricing[quantity]",
        pricing.productQuantity?.toString() ?? ""
      );

      appendFilesToFormData("productImages", data, img1);
      appendFilesToFormData("productImages", data, img2);
      appendFilesToFormData("productImages", data, img3);
      appendFilesToFormData("productImages", data, img4);
      appendFilesToFormData("productImages", data, img5);
      appendFilesToFormData("productImages", data, img6);
      appendFilesToFormData("productImages", data, img7);
      appendFilesToFormData("productImages", data, img8);

      createProduct
        .mutateAsync(data)
        .then((res) => {
          console.log({ res });
        })
        .catch((err) => {});
    }
  };

  return (
    <div className="flex justify-center gap-8 mt-10">
      <button
        disabled={currentStep === 1}
        onClick={() => {
          handleClick("");
        }}
        className={`bg-[#fff] border border-[#197B30] text-[#197B30] px-8 py-2.5 rounded  shadow-lg hover:opacity-50 duration-100 ease-in-out disabled:bg-[#ddddddfd] ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        // disabled
        onClick={(e) => {
          initiateCreateProduct(e);
        }}
        className="bg-[#197b30]  text-white border border-[#197b30] px-10 py-2.5  rounded text-button   shadow-lg  duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps?.length ? "Confirm" : "Continue"}
      </button>
    </div>
  );
}
