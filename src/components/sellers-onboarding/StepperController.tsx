import React, { useContext, useState } from "react";
import { useVendorSignUp } from "../../services/hooks/Vendor";
import { SellersStepsContext } from "../../context/SellersStepsContext";
import { FileContext, FileData } from "../../context/FileContext";
import { useSignUpState } from "../../store/overlay";
import ReactLoading from "react-loading";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface IFormFiles {
  selectedFile: any;
  selecFile: any;
  seFile: any;
}

interface fileProps {
  formFiles?: IFormFiles;
}

const StepperController: React.FC<fileProps> = ({
  formFiles = { selectedFile: null, selecFile: null, seFile: null },
}) => {
  const { checkoutSteps, currentStep, handleClick, userData } =
    useContext(SellersStepsContext);
  const onboardVendor = useVendorSignUp();
  const { selectedFiles, selecFiles, seFiles } = useContext(FileContext);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const isOpen = useSignUpState((state) => state.isOpen);
  const setIsOpen = useSignUpState((state) => state.setIsOpen);
  const navigate = useNavigate();

  const appendFilesToFormData = (
    fieldName: string,
    files: FileData[] | null,
    formData: FormData,
  ) => {
    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
        console.log(fileData.file);
      }
    }
  };

  // const bizCheck =
  //   userData?.businessInformation?.companyRegisteredName === "" ||
  //   userData?.businessInformation?.address1 === "" ||
  //   userData?.businessInformation?.dateOfBirth === "" ||
  //   userData?.businessInformation?.city === "" ||
  //   userData?.businessInformation?.address1 === "";

  // checkEmptyValues(userData);
  const submitDetails = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // setIsOpen(!isOpen);
    // console.log(selectedFiles, selecFiles, seFiles, ",....loading", userData);
    handleClick("next");

    if (!selectedFiles || !selecFiles || !seFiles) return;
    if (currentStep === checkoutSteps?.length) {
      setIsLoading(true);

      const data = new FormData();

      data.append(
        "sellerAccountInformation[shopName]",
        userData.sellerAccountInformation.shopName,
      );
      data.append(
        "sellerAccountInformation[entityType]",
        userData.sellerAccountInformation.entityType,
      );
      data.append(
        "sellerAccountInformation[accountOwnersName]",
        userData.sellerAccountInformation.accountOwnersName,
      );
      data.append(
        "sellerAccountInformation[email]",
        userData.sellerAccountInformation.email,
      );
      data.append(
        "sellerAccountInformation[phoneNumber]",
        userData.sellerAccountInformation.phoneNumber,
      );
      data.append(
        "sellerAccountInformation[additionalPhoneNumber]",
        userData.sellerAccountInformation.additionalPhoneNumber,
      );
      data.append(
        "sellerAccountInformation[password]",
        userData.sellerAccountInformation.password,
      );

      data.append(
        "businessInformation[companyRegisteredName]",
        userData.businessInformation.companyRegisteredName,
      );
      data.append(
        "businessInformation[address1]",
        userData.businessInformation.address1,
      );
      data.append(
        "businessInformation[address2]",
        userData.businessInformation.address2,
      );
      data.append(
        "businessInformation[city]",
        userData.businessInformation.city,
      );
      data.append(
        "businessInformation[businessOwnerName]",
        userData.businessInformation.businessOwnerName,
      );
      data.append(
        "businessInformation[TINRegistrationNumber]",
        userData.businessInformation.TINRegistrationNumber,
      );
      data.append(
        "businessInformation[dateOfBirth]",
        userData.businessInformation.dateOfBirth,
      );
      data.append(
        "businessInformation[IDType]",
        userData.businessInformation.IDType,
      );
      data.append(
        "businessInformation[CACRegistrationNumber]",
        userData.businessInformation.CACRegistrationNumber,
      );
      data.append(
        "businessInformation[VATRegistered]",
        userData.businessInformation.VATRegistered,
      );

      data.append(
        "vendorBankAccount[bankName]",
        userData.vendorBankAccount.bankName,
      );
      data.append(
        "vendorBankAccount[accountName]",
        userData.vendorBankAccount.accountName,
      );
      data.append(
        "vendorBankAccount[accountNumber]",
        userData.vendorBankAccount.accountNumber,
      );

      // Append files from different file input fields
      appendFilesToFormData("IDFile", selectedFiles, data);
      appendFilesToFormData("CACCertificateFile", selecFiles, data);
      appendFilesToFormData("TINCertificateFile", seFiles, data);
      console.log(data, "slllests");
      onboardVendor
        //@ts-ignore
        .mutateAsync(data)
        .then((res) => {
          setIsLoading(false);
          setIsOpen(true);
          toast.success("Account Created Successfully");
          // navigate("/sign-in?q=vendor");
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.message);
        });
    }
  };

  console.log(checkoutSteps, "checkoutSteps");
  console.log(currentStep, "currentStep");
  return (
    <div className="parent-class my-5 flex w-full justify-center gap-3 lg:justify-end">
      {error && (
        <p className="text-red-500">
          Please Fill all required fields with asterisk(*)
        </p>
      )}
      <button
        disabled={currentStep === 1}
        onClick={() => {
          handleClick("");
        }}
        className={`rounded border border-[#197B30] bg-[#fff] px-8 py-2.5 text-[#197B30]  shadow-lg duration-100 ease-in-out  disabled:bg-[#ddddddfd] ${
          currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Back
      </button>
      <button
        // disabled
        onClick={submitDetails}
        className="text-button  rounded border border-[#197b30] bg-[#197b30] px-10 py-2.5 text-white shadow-lg   duration-100 ease-in-out hover:opacity-50 disabled:bg-[#197b30ac]"
      >
        {loading ? (
          <div className="flex items-center justify-end">
            <ReactLoading type="spin" color="#FFFFFF" height={20} width={20} />
          </div>
        ) : (
          <>
            {currentStep === checkoutSteps?.length ? (
              <span className="inline-flex items-center gap-2">
                {loading && <CgSpinner size={20} className="animate-spin" />}{" "}
                Get Started
              </span>
            ) : (
              "Next"
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default StepperController;

// import React, { useState } from 'react';
