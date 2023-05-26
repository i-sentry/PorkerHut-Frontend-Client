import React, { createContext, useContext, useState } from "react";
import { IFile } from "../components/utility/CustomDND";

interface IChildren {
  children: React.ReactNode;
}

export interface ISellerInfo {
  shop_name?: string;
  entity_type: string;
  account_owner_name: string;
  phone_number: string;
  phone_number2: string;
  email: string;
  password: string;
  address1: string;
  address2: string;
  company_registered_name: string;
  city: string;
  country: string;
  business_owner_name: string;
  dob: string;
  id_type: string;
  CAC_Registration_number: string;
  tin: string;
  VAT_registered: boolean;
  bank_name: string;
  account_name: string;
  account_number: string;
  id_file: IFile | null;
  CAC_file: IFile | null;
  TIN_file: IFile | null;
  profile_photo: IFile | null;
}

interface IContextProps {
  state: ISellerInfo;
  setState: React.Dispatch<React.SetStateAction<ISellerInfo>>;
}

export const AppStateContext = createContext({} as IContextProps);

export function AppProvider({ children }: IChildren) {
  const initialState: ISellerInfo = {
    shop_name: "",
    entity_type: "",
    account_owner_name: "",
    email: "",
    phone_number: "",
    phone_number2: "",
    password: "",
    address1: "",
    address2: "",
    company_registered_name: "",
    city: "",
    country: "",
    business_owner_name: "",
    dob: "",
    id_type: "",
    CAC_Registration_number: "",
    tin:"",
    VAT_registered: false,
    bank_name: "",
    account_name: "",
    account_number: "",
    id_file: null,
    CAC_file: null,
    TIN_file: null,
    profile_photo: null,
  };

  const value = useState<ISellerInfo>(initialState);
  return (
    <AppStateContext.Provider value={{ state: value[0], setState: value[1] }}>
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
