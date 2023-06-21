import { createContext } from "react";
import { ISellerInfo } from "./SellerInfoContext";

export interface SellersStepsContextValue {
  checkoutSteps: string[];
  currentStep: number;
  handleClick: (direction: string) => void;
  userData: ISellerInfo;
  finalData: any[];
  displayStep: (sellersStep: any) => JSX.Element | undefined;
  setFinalData: React.Dispatch<React.SetStateAction<never[]>>;
  setUserData: React.Dispatch<React.SetStateAction<ISellerInfo>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SellersStepsContext = createContext<SellersStepsContextValue>(
  {} as SellersStepsContextValue
);
