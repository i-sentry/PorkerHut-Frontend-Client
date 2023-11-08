import { useContext, useState, useEffect } from "react";
import { productStepsContext } from "../../context/StepperContext";
import { ProductImagesContext } from "../../context/ProductImagesContext";
import { useLocation } from "react-router-dom";
import { FileData } from "../../context/FileContext";
import { useCreateProduct } from "../../services/hooks/Vendor/products";
// import { useGetCategoryQuestion } from "../../services/hooks/Vendor/category";
import { useSuccessOverlay } from "../../store/overlay";
import ReactLoading from "react-loading";
interface VendorData {
  token: string;
  vendor: {
    businessInformation: {
      CACCertificateFile: string;
      CACRegistrationNumber: string;
      IDFile: string;
      IDType: string;
      TINCertificateFile: string;
      VATRegistered: string;
      address1: string;
      address2: string;
      businessOwnerName: string;
      city: string;
      companyRegisteredName: string;
      dateOfBirth: string;
      profilePhoto: string;
    };
    sellerAccountInformation: {
      accountOwnersName: string;
      additionalPhoneNumber: string;
      email: string;
      entityType: string;
      password: string;
      phoneNumber: string;
      shopName: string;
    };
    storeStatus: string;
    vendorBankAccount: {
      accountName: string;
      accountNumber: string;
      bankName: string;
    };
    __v: number;
    _id: string;
  };
}

export default function StepperControl() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category: any = queryParams.get("cate");
  const subcategory: any = queryParams.get("sub");
  const createProduct = useCreateProduct();
  const [loading, setIsLoading] = useState(false);
  // const { data: questions } = useGetCategoryQuestion(category);
  const setShowOverlay = useSuccessOverlay(
    (state: { setShowOverlays: any }) => state.setShowOverlays
  );
  const { checkoutSteps, currentStep, handleClick, productData } =
    useContext(productStepsContext);
  const { img1, img2, img3, img4, img5, img6, img7, img8 } =
    useContext(ProductImagesContext);

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
  const [vendorData, setVendorData] = useState<VendorData>();

  useEffect(() => {
    //@ts-ignore
    const storedVendor = JSON.parse(localStorage.getItem("vendor"));

    if (storedVendor !== null) {
      setVendorData(storedVendor);
    }
  }, []);

  const vendorId = vendorData?.vendor?._id;

  const initiateCreateProduct = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleClick("next");
    console.log("currentStep:", currentStep);
    console.log("checkoutStep.length:", checkoutSteps?.length);
    if (currentStep === checkoutSteps?.length) {
      console.log("Inside if block");
      setIsLoading(true);

      const productInformation = productData.productInformation ?? {};
      const productDetails = productData.productDetails ?? {};
      const pricing = productData.pricing ?? {};
      const data = new FormData();

      const answer1 =
        productInformation.mainColour ||
        productInformation.typeOfMeat ||
        productInformation.typeOfProducts;

      const answer =
        productInformation.productBrand ||
        productInformation.productBreed ||
        "";

      data.append(
        "information[productName]",
        productInformation.productName ?? ""
      );
      data.append("information[category]", category ?? "");
      data.append("information[subcategory]", subcategory ?? "");

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
          productDetails.nutritionalValue?.toString()
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
      if (vendorId) {
        data.append("vendorId", vendorId ?? "");
      }

      const images = [img1, img2, img3, img4, img5, img6, img7, img8];

      try {
        for (let i = 0; i < images.length; i++) {
          appendFilesToFormData("productImages", data, images[i]);
        }

        const response = await createProduct.mutateAsync(data);
        setIsLoading(false);
        setShowOverlay(true);
        console.log({ response });
      } catch (error: any) {
        setIsLoading(false);
        // Handle the error, e.g., show an error message to the user.
        if (error.response) {
          // Handle API response errors, e.g., show an error message based on the response
          console.error("API Error:", error.response.data);
        } else if (error.message) {
          // Handle other errors, e.g., network errors
          console.error("Network Error:", error.message);
        } else {
          // Handle any other unexpected errors
          console.error("Unexpected Error:", error);
        }
      }
    }
  };

  return (
    <div className="flex justify-center gap-8 mt-10">
      <button
        disabled={currentStep === 1}
        onClick={() => {
          handleClick("");
        }}
        className={`bg-[#ddddddfd] border border-[#197B30] text-[#197B30] px-10 py-2.5 w-[132px] rounded text-button  shadow-lg  duration-100 ease-in-out disabled:bg-[#ddddddfd] ${
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
        className="bg-[#197b30]  text-white border border-[#197b30] px-10 py-2.5 w-[132px] rounded text-button   shadow-lg  duration-100 ease-in-out flex items-center justify-center"
      >
        {loading ? (
          <div className="flex items-center justify-end">
            <ReactLoading type="spin" color="#FFFFFF" height={20} width={20} />
          </div>
        ) : (
          <>{currentStep === checkoutSteps?.length ? "Confirm" : "Continue"}</>
        )}
      </button>
    </div>
  );
}
