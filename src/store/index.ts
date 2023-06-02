import create from "zustand";

interface IbankStore {

 bankData: any[];



  setBankData: (data: any) => void;

}

export const useBankStore = create<IbankStore>((set) => ({
  bankData: [],
  setBankData: (data: any) => set((state: any) => ({ bankData: data })),
}));
