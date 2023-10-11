import React, { useContext, useState } from "react";
import { useVendorSignUp } from "../../services/hooks/Vendor";
import {
  SellersStepsContext
} from "../../context/SellersStepsContext";
import { FileContext, FileData } from "../../context/FileContext";
import { useSignUpState } from "../../store/overlay";
import ReactLoading from "react-loading";

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
   const isOpen = useSignUpState((state) => state.isOpen);
  const setIsOpen = useSignUpState((state) => state.setIsOpen);





  const appendFilesToFormData = (
    fieldName: string,
    files: FileData[] | null,
    formData: FormData
  ) => {
    if (files) {
      for (const fileData of files) {
        formData.append(fieldName, fileData.file);
        console.log(fileData.file);
      }
    }
  };

  const submitDetails = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
      // setIsOpen(!isOpen);
    console.log(selectedFiles, selecFiles, seFiles, ",....loading");
    handleClick("next");
    if (!selectedFiles || !selecFiles || !seFiles) return;
    if (currentStep === checkoutSteps?.length) {

 setIsLoading(true);

      const data = new FormData();

      data.append(
        "sellerAccountInformation[shopName]",
        userData.sellerAccountInformation.shopName
      );
      data.append(
        "sellerAccountInformation[entityType]",
        userData.sellerAccountInformation.entityType
      );
      data.append(
        "sellerAccountInformation[accountOwnersName]",
        userData.sellerAccountInformation.accountOwnersName
      );
      data.append(
        "sellerAccountInformation[email]",
        userData.sellerAccountInformation.email
      );
      data.append(
        "sellerAccountInformation[phoneNumber]",
        userData.sellerAccountInformation.phoneNumber
      );
      data.append(
        "sellerAccountInformation[additionalPhoneNumber]",
        userData.sellerAccountInformation.additionalPhoneNumber
      );
      data.append(
        "sellerAccountInformation[password]",
        userData.sellerAccountInformation.password
      );

      data.append(
        "businessInformation[companyRegisteredName]",
        userData.businessInformation.companyRegisteredName
      );
      data.append(
        "businessInformation[address1]",
        userData.businessInformation.address1
      );
      data.append(
        "businessInformation[address2]",
        userData.businessInformation.address2
      );
      data.append(
        "businessInformation[city]",
        userData.businessInformation.city
      );
      data.append(
        "businessInformation[businessOwnerName]",
        userData.businessInformation.businessOwnerName
      );
      data.append(
        "businessInformation[TINRegistrationNumber]",
        userData.businessInformation.TINRegistrationNumber
      );
      data.append(
        "businessInformation[dateOfBirth]",
        userData.businessInformation.dateOfBirth
      );
      data.append(
        "businessInformation[IDType]",
        userData.businessInformation.IDType
      );
      data.append(
        "businessInformation[CACRegistrationNumber]",
        userData.businessInformation.CACRegistrationNumber
      );
      data.append(
        "businessInformation[VATRegistered]",
        userData.businessInformation.VATRegistered
      );

      data.append(
        "vendorBankAccount[bankName]",
        userData.vendorBankAccount.bankName
      );
      data.append(
        "vendorBankAccount[accountName]",
        userData.vendorBankAccount.accountName
      );
      data.append(
        "vendorBankAccount[accountNumber]",
        userData.vendorBankAccount.accountNumber
      );

      // Append files from different file input fields
      appendFilesToFormData("IDFile", selectedFiles, data);
      appendFilesToFormData("CACCertificateFile", selecFiles, data);
      appendFilesToFormData("TINCertificateFile", seFiles, data);
      // console.log(data, s);
      onboardVendor
        //@ts-ignore
        .mutateAsync(data)
        .then((res) => {
    setIsLoading(false);
             setIsOpen(!isOpen);
        })
        .catch((err) => {
     setIsLoading(false);
        });
    }
  };

  console.log(checkoutSteps, "checkoutSteps");
  console.log(currentStep, "currentStep");
  return (
    <div className="flex gap-3 w-full my-5 parent-class justify-center lg:justify-end">
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
        onClick={submitDetails}
        className="bg-[#197b30]  text-white border border-[#197b30] px-10 py-2.5 disabled:bg-[#197b30ac] rounded text-button   shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {loading ? (
          <div className="flex items-center justify-end">
            <ReactLoading type="spin" color="#FFFFFF" height={20} width={20} />
          </div>
        ) : (
          <>{currentStep === checkoutSteps?.length ? "Get Started" : "Next"}</>
        )}
      </button>
    </div>
  );
};

export default StepperController;

// import React, { useState } from 'react';
