import React, { createContext, useContext, useState } from "react";

interface IChildren {
  children: React.ReactNode;
}

export interface IProductInfo {
  productInformation: {
    productName: string;
    productBreed: string;
    typeOfMeat: string;
    [key: string]: string;
  };
  productDetails: {
    productWeight: number;
    productContent: string;
    cookingMethod: string;
    deliveryDetails: string;
    productDescription: string;
    [key: string]: string | number;
  };
  pricing: {
    salesStartDate: string;
    salesEndDate: string;
    productPrice: number;
    quantity: number;
    [key: string]: string | number;
  };
  [key: string]: any;
}

interface IProductContextProps {
  state: IProductInfo;
  setState: React.Dispatch<React.SetStateAction<IProductInfo>>;
}

export const ProductStateContext = createContext({} as IProductContextProps);

export const ProductProvider = ({ children }: IChildren) => {
  const initialState: IProductInfo = {
    productInformation: {
      productName: "",
      productBreed: "",
      typeOfMeat: "",
    },
    productDetails: {
      productWeight: 0,
      productContent: "",
      cookingMethod: "",
      deliveryDetails: "",
      productDescription: "",
    },
    pricing: {
      salesStartDate: "",
      salesEndDate: "",
      productPrice: 0,
      quantity: 0,
    },
  };
  const [productData, setProductData] = useState<IProductInfo>(initialState);

  return (
    <ProductStateContext.Provider
      value={{ state: productData, setState: setProductData }}
    >
      {children}
    </ProductStateContext.Provider>
  );
};

export function useProductState() {
  const context = useContext(ProductStateContext);
  if (!context) {
    throw new Error("useProductState must be used within the AppProvider");
  }
  return context;
}
