import { createContext } from "react";
import { IProductInfo } from "./ProductInfoContext";

export interface productStepsContextValue {
  checkoutSteps: string[];
  currentStep: number;
  handleClick: (direction: string) => void;
  productData: IProductInfo;
  finalData: any[];
  displayStep: (productStep: any) => JSX.Element | undefined;
  setFinalData: React.Dispatch<React.SetStateAction<never[]>>;
  setProductData: React.Dispatch<React.SetStateAction<IProductInfo>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const productStepsContext = createContext<productStepsContextValue>(
  {} as productStepsContextValue
);
