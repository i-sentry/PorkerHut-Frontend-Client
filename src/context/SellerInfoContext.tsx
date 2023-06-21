import React, { createContext, useContext, useState } from "react";
import { IFile } from "../components/utility/CustomDND";

interface IChildren {
  children: React.ReactNode;
}

// export interface ISellerInfo {
//   shop_name?: string;
//   entity_type: string;
//   account_owner_name: string;
//   phone_number: string;
//   phone_number2: string;
//   email: string;
//   password: string;

//   address1: string;
//   address2: string;
//   company_registered_name: string;
//   city: string;
//   country: string;
//   business_owner_name: string;
//   dob: string;
//   id_type: string;
//   CAC_Registration_number: string;
//   tin: string;
//   VAT_registered: boolean;
//   bank_name: string;
//   account_name: string;
//   account_number: string;
//   id_file: IFile | null;
//   CAC_file: IFile | null;
//   TIN_file: IFile | null;
//   profile_photo?: IFile | null;
// }

export interface ISellerInfo {
  sellerAccountInformation: {
    shopName: string;
    entityType: string;
    accountOwnersName: string;
    email: string;
    phoneNumber: string;
    additionalPhoneNumber: string;
    password: string;
    [key: string]: string;
  };
  businessInformation: {
    companyRegisteredName: string;
    address1: string;
    address2: string;
    city: string;
    businessOwnerName: string;
    TINRegistrationNumber: string;
    dateOfBirth: string;
    IDType: string;
    CACRegistrationNumber: string;
    VATRegistered: string;
    // IDFile: IFile | null;
    // CACCertificateFile: IFile | null;
    // TINCertificateFile: IFile | null;
    // [key: string]: string | IFile | null;
    [key: string]: string;
  };
  vendorBankAccount: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    [key: string]: string;
  };
  [key: string]: any;
}

interface IContextProps {
  state: ISellerInfo;
  setState: React.Dispatch<React.SetStateAction<ISellerInfo>>;
}

export const AppStateContext = createContext({} as IContextProps);

export function AppProvider({ children }: IChildren) {
  const initialState: ISellerInfo = {
    sellerAccountInformation: {
      shopName: "",
      entityType: "",
      accountOwnersName: "",
      email: "",
      phoneNumber: "",
      additionalPhoneNumber: "",
      password: "",
    },
    businessInformation: {
      companyRegisteredName: "",
      address1: "",
      address2: "",
      city: "",
      businessOwnerName: "",
      TINRegistrationNumber: "",
      dateOfBirth: "",
      IDType: "",
      CACRegistrationNumber: "",
      VATRegistered: "",
      // IDFile?: null,
      // CACCertificateFile?: null,
      // TINCertificateFile?: null,
    },
    vendorBankAccount: {
      bankName: "",
      accountName: "",
      accountNumber: "",
    },
  };

  const [userData, setUserData] = useState<ISellerInfo>(initialState);

  return (
    <AppStateContext.Provider
      value={{ state: userData, setState: setUserData }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
