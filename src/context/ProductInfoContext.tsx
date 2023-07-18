import React, { createContext, useContext, useState } from "react";

interface IChildren {
  children: React.ReactNode;
}

export interface IProductInfo {
  productInformation: {
    category: string;
    subCategory: string;
    productName: string;
    productBreed: string;
    productBrand: string;
    typeOfMeat: string;
    typeOfProduct: string;
    mainColour: string;
    [key: string]: string;
  };
  productDetails: {
    productWeight: number;
    productContent: string;
    cookingMethod: string;
    nutritionalValue: string;
    deliveryDetails: string;
    productDescription: string;
    [key: string]: string | number | undefined;
  };
  pricing: {
    salesStartDate: string;
    salesEndDate: string;
    productPrice: number;
    productQuantity: number;
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
      category: "",
      subCategory: "",
      typeOfProduct: "",
      productName: "",
      mainColour: "",
      productBreed: "",
      productBrand: "",
      typeOfMeat: "",
    },
    productDetails: {
      productWeight: 0,
      productContent: "",
      cookingMethod: "",
      nutritionalValue: "",
      deliveryDetails: "",
      productDescription: "",
    },
    pricing: {
      salesStartDate: "",
      salesEndDate: "",
      productPrice: 0,
      productQuantity: 0,
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
