import {create} from "zustand";
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

interface Ipay {
  cartTotal: number;
  setCartTotal: (data: number) => void;
}

export const useCartTotalAmount = create<Ipay>((set) => ({
  cartTotal: 0,
  setCartTotal: (data: number) => set((state: any) => ({ cartTotal: data })),
}));

interface IAuthLogin {
  isAuthenticated: boolean;
  setIsAuthenticated: (data: boolean) => void;
}

export const useProtectedInfo = create<IAuthLogin>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (open: any) =>
    set((state: any) => ({ isAuthenticated: open })),
}));

interface IRefresh {
  isRefresh: boolean;
  setIsRefresh: (data: boolean) => void;
}

export const useRefresh = create<IRefresh>((set) => ({
  isRefresh: false,
  setIsRefresh: (open: any) => set((state: any) => ({ isRefresh: open })),
}));
