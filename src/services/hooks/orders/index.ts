import useQueryAction from "../../../lib/useQueryAction";
import useQueryMutation from "../../../lib/useQueryMutation";
import { Order } from "../../../pages/BillingPage";
import {
  api,
  makeGetRequest,
  makeGetRequestWithCustomHeader,
  makePostRequestCustom,
} from "../../api";

export const useCreateOrder = () => {
  return useQueryMutation({
    mutationFn: (data: Order) => makePostRequestCustom(data, api.Order.order),
  });
};

export const useGetOrders = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.order),
    queryKey: ["order +"],
  });
};
export const useGetOrdersById = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.orderbyId(id)),
    queryKey: ["order +we"],
  });
};

export const useGetVendorOrders = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.vendorOrders(id)),
    queryKey: ["vendor+orders"],
  });
};

export const useGetCustomersOrder = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequestWithCustomHeader(api.Order.customerOrder(id)),
    queryKey: ["customerOrder +"],
  });
};
