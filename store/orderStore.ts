import create from "zustand"

interface IOrderStore{
    showOrderDetails: boolean;
    ordersData: any[];
    selectedOrderId: string;

}

setShowOrderDetails: (shouldShow: boolean) => void;
setOrdersData: (data: any) => void;
setSelectedOrderId: (id:string)