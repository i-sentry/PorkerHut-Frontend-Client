export interface ILoginUser {
  email: string;
  password: string;
}

export interface ISignUpUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
export interface IBankData {
  active: boolean;
  code: string;
  country: string;
  createdAt: string;
  currency: string;
  gateway: null;
  id: number;
  is_deleted: boolean;
  longcode: string;
  name: string;
  pay_with_bank: boolean;
  slug: string;
  type: string;
  updatedAt: string;
}

export interface IVendorSignUp {
  CACCertificateFile: any[]; // Replace `any` with the appropriate type for the file
  CAC_Registration_number: string;
  Country: string;
  IDFile: any[]; // Replace `any` with the appropriate type for the file
  IDType: string;
  TINCertificateFile: any[]; // Replace `any` with the appropriate type for the file
  VATRegistered: string;
  accountName: string;
  account_owners_name: string;
  address1: string;
  address2: string;
  bank: string;
  bank_account: string;
  business_owner_name: string;
  city: string;
  company_register_name: string;
  dob: string;
  email: string;
  entity_type: string;
  password: string;
  phone_number: string;
  phone_number2: string;
  shop_name: string;
  tin: string;
}
