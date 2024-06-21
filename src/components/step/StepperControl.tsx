import { useContext, useState, useEffect } from "react";
import { productStepsContext } from "../../context/StepperContext";
import { ProductImagesContext } from "../../context/ProductImagesContext";
import { useLocation } from "react-router-dom";
import { FileData } from "../../context/FileContext";
import { useCreateProduct } from "../../services/hooks/Vendor/products";
// import { useGetCategoryQuestion } from "../../services/hooks/Vendor/category";
import { useSuccessOverlay } from "../../store/overlay";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
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
    (state: { setShowOverlays: any }) => state.setShowOverlays,
  );
  const { checkoutSteps, currentStep, handleClick, productData } =
    useContext(productStepsContext);
  const { img1, img2, img3, img4, img5, img6, img7, img8 } =
    useContext(ProductImagesContext);

  const appendFilesToFormData = (
    fieldName: string,
    formData: FormData,
    files?: FileData[] | null,
  ) => {
    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
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
    if (currentStep === checkoutSteps?.length) {
      setIsLoading(true);

      const productInformation = productData.productInformation ?? {};
      const productDetails = productData.productDetails ?? {};
      const pricing = productData.pricing ?? {};
      const data = new FormData();

      console.log(Object.keys(productData.productInformation));

      const answer1 =
        productInformation.mainColour ||
        productInformation.typeOfMeat ||
        productInformation.typeOfProducts ||
        productInformation.typeOfPork ||
        "";

      const answer =
        productInformation.productBrand ||
        productInformation.productBreed ||
        "";
      data.append(
        "information[productName]",
        productInformation.productName ?? "",
      );
      data.append("information[category]", category ?? "");
      data.append("information[subcategory]", subcategory ?? "");

      data.append(
        `information[categoryQuestions][0][question]`,
        category ?? "",
      );
      data.append(`information[categoryQuestions][0][answer]`, answer);
      data.append(
        `information[categoryQuestions][1][question]`,
        subcategory ?? "",
      );
      data.append(`information[categoryQuestions][1][answer]`, answer1);

      data.append(
        "details[productWeight]",
        productDetails.productWeight?.toString() ?? "",
      );
      data.append(
        "details[productContent]",
        productDetails.productContent ?? "",
      );

      if (productDetails.cookingMethod && productDetails.cookingMethod !== "") {
        data.append(
          "details[cookingMethod]",
          productDetails.cookingMethod.toString(),
        );
      }

      if (productDetails.nutritionalValue !== "") {
        data.append(
          "details[nutritionalValue]",
          productDetails.nutritionalValue?.toString(),
        );
      }

      data.append(
        "details[deliveryDetails]",
        productDetails.deliveryDetails ?? "",
      );
      data.append(
        "details[productDescription]",
        productDetails.productDescription ?? "",
      );

      data.append(
        "pricing[saleStartDate]",
        pricing.salesStartDate?.toString() ?? "",
      );
      data.append(
        "pricing[saleEndDate]",
        pricing.salesEndDate?.toString() ?? "",
      );
      data.append(
        "pricing[productPrice]",
        pricing.productPrice?.toString() ?? "",
      );
      data.append(
        "pricing[quantity]",
        pricing.productQuantity?.toString() ?? "",
      );
      if (vendorId) {
        data.append("vendorId", vendorId ?? "");
      }

      appendFilesToFormData("productImages", data, img1);
      appendFilesToFormData("productImages", data, img2);
      appendFilesToFormData("productImages", data, img3);
      appendFilesToFormData("productImages", data, img4);
      appendFilesToFormData("productImages", data, img5);
      appendFilesToFormData("productImages", data, img6);
      appendFilesToFormData("productImages", data, img7);
      appendFilesToFormData("productImages", data, img8);
      try {
        const response = await createProduct.mutateAsync(data);
        setIsLoading(false);
        setShowOverlay(true);
      } catch (error: any) {
        setIsLoading(false);

        if (error.response) {
          toast.error("Please fill all required fields");
          console.error("API Error:", error.response.data?.message);
        } else if (error.message) {
          console.error("Network Error:", error.message);
          toast.error("Network Error:", error.message);
        } else {
          console.error("Unexpected Error:", error);
          toast.error("Unexpected Error:", error);
        }
      }
    }
  };

  return (
    <div className="mt-10 flex justify-center gap-8">
      <button
        disabled={currentStep === 1}
        onClick={() => {
          handleClick("");
        }}
        className={`text-button w-[132px] rounded border border-[#197B30] bg-[#ddddddfd] px-10 py-2.5 text-[#197B30]  shadow-lg  duration-100 ease-in-out disabled:bg-[#ddddddfd] ${
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
        className="text-button  flex w-[132px] items-center justify-center rounded border border-[#197b30] bg-[#197b30]   px-10  py-2.5 text-white shadow-lg duration-100 ease-in-out"
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
