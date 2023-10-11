import create from "zustand";
import { IProduct } from "../redux/features/product/productSlice";

interface IbankStore {
  bankData: any[];
  setBankData: (data: any) => void;
}
interface IIProd {
  productData: IProduct | null; // Set the initial value to null
  setProductData: (data: IProduct | null) => void;
}

export const useBankStore = create<IbankStore>((set) => ({
  bankData: [],
  setBankData: (data: any) => set((state: any) => ({ bankData: data })),
}));
export const useProductStore = create<IIProd>((set) => ({
  productData: null,
  setProductData: (data: IProduct | null) =>
    set((state: any) => ({ productData: data })),
}));
