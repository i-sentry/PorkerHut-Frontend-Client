import React, { createContext, useContext, useState } from "react";


export interface IChildren {
  children: React.ReactNode;
}



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
