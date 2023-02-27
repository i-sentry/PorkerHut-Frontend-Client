import create from "zustand"

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