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

export const useGetAggregateVendorOrders = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.aggregateVendorOrders(id)),
    queryKey: ["aggregate+vendors+order"],
  });
};

export const useGetAggregateUserOrders = (id: string) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.aggregateUserOrders(id)),
    queryKey: ["aggregate+user+order"],
  });
};

export const useGetAdminOverview = (startDate: any, endDate: any) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.admin.adminOverView(startDate, endDate)),
    queryKey: ["admin+overview"],
  });
};

export const useGetAllAdminOverview = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.admin.allOverview),
    queryKey: ["admin+all+overview"],
  });
};

export const useGetAdminGraph = (startDate: any, endDate: any) => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.admin.adminGraph(startDate, endDate)),
    queryKey: ["admin+graph"],
  });
};

export const useGetAllUsersAggregate = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.allUsersAggregate),
    queryKey: ["all+users+aggregate"],
  });
};

export const useGetAllVendorsAggregate = () => {
  return useQueryAction({
    queryFn: () => makeGetRequest(api.Order.allVendorsAggregate),
    queryKey: ["all+vendors+aggregate"],
  });
};

export const useUpdateOrderStatus = (orderId: string) => {
  return useQueryMutation({
    mutationFn: (data: { status: string }) =>
      makePostRequestCustom(data, api.Order.orderStatus(orderId)),
  });
};
