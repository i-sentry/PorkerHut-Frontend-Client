import { string } from "yup";
import create from "zustand";

interface IOrderStore {
  showOrderDetails: boolean;
  ordersData: any[];
  selectedOrderId: string;

  setShowOrderDetails: (shouldShow: boolean) => void;
  setOrdersData: (data: any) => void;
  setSelectedOrderId: (id: string) => void;
}

export const useOrderStore = create<IOrderStore>((set) => ({
  showOrderDetails: false,
  ordersData: [],
  selectedOrderId: "",

  setShowOrderDetails: (shouldShow: boolean) =>
    set((state: any) => ({ showOrderDetails: shouldShow })),
  setOrdersData: (data: any) => set((state: any) => ({ ordersData: data })),
  setSelectedOrderId: (id: string) =>
    set((state: any) => ({ selectedOrderId: id })),
}));

type SelectOption = {
  value: string;
  label: string;
};

type StoreState = {
  selectedOption: SelectOption;
  selectedRow: string[];
  setSelectedOption: (option: SelectOption) => void;
  setSelectedRow: (row: string[]) => void;
  selectedRowStatus: string;
  setSelectedRowStatus: (status: string) => void;
};

export const useOrderUpdate = create<StoreState>((set) => ({
  selectedOption: { value: "", label: "" },
  selectedRow: [],
  selectedRowStatus: "string",
  setSelectedRowStatus: (status) => set({ selectedRowStatus: status }),
  setSelectedOption: (option) => set({ selectedOption: option }),
  setSelectedRow: (row) => set({ selectedRow: row }),
}));
